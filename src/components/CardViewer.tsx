import { useState, useMemo, useCallback } from 'react'
import { Rating } from 'ts-fsrs'
import type { CardItem, CardPack, StudyMode, QuestionLimit, KnowledgeContent, QuestionContent } from '../types'
import { storage } from '../utils/storage'
import { applyRating, getDueCards, countReviewsToday, initFsrsCard } from '../utils/scheduler'
import KnowledgeCard from './KnowledgeCard'
import QuestionCard from './QuestionCard'
import Progress from './Progress'
import CardIndexNav from './CardIndexNav'

interface Props {
  pack: CardPack
  mode: StudyMode
  tagId?: string
  limit: QuestionLimit
  onFinish: () => void
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

export default function CardViewer({ pack, mode, tagId, limit, onFinish }: Props) {
  const now = useMemo(() => new Date(), [])

  const sessionCards = useMemo(() => {
    const allCards = storage.getCards(pack.id)
    const states = storage.getAllCardStates()

    if (mode === 'tag-focused' && tagId) {
      return shuffle(allCards.filter((c) => c.tagIds.includes(tagId))).slice(0, limit)
    }

    if (mode === 'random-tag') {
      const selected: CardItem[] = []
      for (const tag of pack.tags) {
        if (selected.length >= limit) break
        const tagCards = shuffle(allCards.filter((c) => c.tagIds.includes(tag.id)))
        const dueIds = new Set(
          getDueCards(
            tagCards.map((c) => states.find((s) => s.metaId === c.id)).filter(Boolean),
            now,
          ).map((d) => d.metaId),
        )
        const dueCards = tagCards.filter((c) => dueIds.has(c.id))
        const newCards = tagCards.filter((c) => !dueIds.has(c.id))
        const pick: CardItem[] = []
        pick.push(...pickRandom(dueCards, Math.min(limit, dueCards.length)))
        const remain = Math.min(limit, limit - selected.length - pick.length)
        if (remain > 0) pick.push(...pickRandom(newCards, remain))
        selected.push(...pick)
      }
      return shuffle(selected).slice(0, limit)
    }

    return allCards.slice(0, limit)
  }, [pack, mode, tagId, limit, now])

  const [currentIdx, setCurrentIdx] = useState(0)
  const [ratedIdxSet, setRatedIdxSet] = useState<Set<number>>(new Set())
  const [waiting, setWaiting] = useState(false)

  const current = sessionCards[currentIdx]

  function findNextUnrated(fromIdx: number): number {
    for (let i = fromIdx; i < sessionCards.length; i++) {
      if (!ratedIdxSet.has(i)) return i
    }
    for (let i = 0; i < fromIdx; i++) {
      if (!ratedIdxSet.has(i)) return i
    }
    return -1
  }

  const handleRate = useCallback((rating: Rating) => {
    const card = sessionCards[currentIdx]
    if (!card) return
    const now = new Date()
    let state = storage.getCardState(card.id)
    if (!state) state = { metaId: card.id, fsrsCard: initFsrsCard() }
    const updated = applyRating(state.fsrsCard, rating, now, card.id)
    storage.saveCardState({ metaId: card.id, fsrsCard: updated })
    setRatedIdxSet((prev) => new Set(prev).add(currentIdx))
    setWaiting(true)
  }, [currentIdx, sessionCards])

  function handleNext() {
    const next = findNextUnrated(currentIdx + 1)
    if (next < 0) {
      onFinish()
      return
    }
    setCurrentIdx(next)
    setWaiting(false)
  }

  function handleJump(idx: number) {
    setCurrentIdx(idx)
    setWaiting(false)
  }

  const reviewed = countReviewsToday(now)

  if (!current && ratedIdxSet.size > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-sm w-full text-center">
          <div className="text-4xl mb-3 text-green-500">完成!</div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">本轮复习完成</h2>
          <p className="text-sm text-gray-500 mb-4">共复习 {ratedIdxSet.size} 张 · 今日共 {reviewed} 张</p>
          <button onClick={onFinish} className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold active:bg-blue-600">
            返回
          </button>
        </div>
      </div>
    )
  }

  if (!current) {
    return <div className="flex items-center justify-center min-h-dvh text-gray-400">暂无卡片</div>
  }

  const isNew = !ratedIdxSet.has(currentIdx)

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button onClick={onFinish} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-semibold text-gray-800 truncate">{pack.name}</h1>
          <Progress total={sessionCards.length} reviewed={ratedIdxSet.size} />
        </div>
        <span className="text-xs text-gray-400 ml-2">
          {currentIdx + 1}/{sessionCards.length}
        </span>
      </header>

      {sessionCards.length > 1 && (
        <CardIndexNav
          total={sessionCards.length}
          currentIndex={currentIdx}
          ratedIds={ratedIdxSet}
          onJump={handleJump}
        />
      )}

      <div className="flex-1 flex flex-col justify-center py-4">
        {current.tagIds.map((tid) => {
          const t = pack.tags.find((tag) => tag.id === tid)
          return t ? (
            <span key={tid} className="text-xs text-gray-400 text-center mb-1">
              {t.name} · {current.type === 'knowledge' ? '知识' : '题目'}
            </span>
          ) : null
        })}

        {current.type === 'knowledge' && (
          <KnowledgeCard
            key={current.id}
            content={current.content as KnowledgeContent}
            onRate={handleRate}
          />
        )}
        {current.type === 'question' && (
          <QuestionCard
            key={current.id}
            content={current.content as QuestionContent}
            onRate={handleRate}
          />
        )}
      </div>
    </div>
  )
}
