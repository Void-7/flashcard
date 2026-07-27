import { useState, useMemo, useCallback } from 'react'
import { Rating } from 'ts-fsrs'
import type { CardItem, CardPack, StudyMode, KnowledgeContent, QuestionContent } from '../types'
import { storage } from '../utils/storage'
import { applyRating, getDueCards, countReviewsToday, initFsrsCard } from '../utils/scheduler'
import KnowledgeCard from './KnowledgeCard'
import QuestionCard from './QuestionCard'
import Progress from './Progress'

interface Props {
  pack: CardPack
  mode: StudyMode
  tagId?: string
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

const CARDS_PER_TAG = 5

export default function CardViewer({ pack, mode, tagId, onFinish }: Props) {
  const now = useMemo(() => new Date(), [])

  const sessionCards = useMemo(() => {
    const allCards = storage.getCards(pack.id)
    const states = storage.getAllCardStates()

    if (mode === 'tag-focused' && tagId) {
      return shuffle(allCards.filter((c) => c.tagIds.includes(tagId)))
    }

    if (mode === 'random-tag') {
      const selected: CardItem[] = []
      for (const tag of pack.tags) {
        const tagCards = shuffle(allCards.filter((c) => c.tagIds.includes(tag.id)))
        const dueIds = new Set(
          getDueCards(
            tagCards
              .map((c) => states.find((s) => s.metaId === c.id))
              .filter(Boolean),
            now,
          ).map((d) => d.metaId),
        )
        const dueCards = tagCards.filter((c) => dueIds.has(c.id))
        const newCards = tagCards.filter((c) => !dueIds.has(c.id))

        const pick: CardItem[] = []
        pick.push(...pickRandom(dueCards, Math.min(CARDS_PER_TAG, dueCards.length)))
        const remaining = CARDS_PER_TAG - pick.length
        if (remaining > 0) pick.push(...pickRandom(newCards, remaining))
        selected.push(...pick)
      }
      return shuffle(selected)
    }

    return allCards
  }, [pack, mode, tagId, now])

  const [ratedIds, setRatedIds] = useState<Set<string>>(new Set())

  const remaining = useMemo(() => {
    return sessionCards.filter((c) => !ratedIds.has(c.id))
  }, [sessionCards, ratedIds])

  const current = remaining[0]

  const handleRate = useCallback((rating: Rating) => {
    if (!current) return
    const now = new Date()
    let state = storage.getCardState(current.id)
    if (!state) {
      state = { metaId: current.id, fsrsCard: initFsrsCard() }
    }
    const updatedCard = applyRating(state.fsrsCard, rating, now, current.id)
    storage.saveCardState({ metaId: current.id, fsrsCard: updatedCard })
    setRatedIds((prev) => new Set(prev).add(current.id))
  }, [current])

  const reviewed = countReviewsToday(now)
  const totalCards = storage.getCards(pack.id).length

  if (!current) {
    return (
      <div class="flex flex-col items-center justify-center min-h-dvh px-4">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-sm w-full text-center">
          <div class="text-4xl mb-3 text-green-500">完成!</div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">本轮复习完成</h2>
          <p class="text-sm text-gray-500 mb-4">共复习 {ratedIds.size} 张卡片 · 今日共 {reviewed} 张</p>
          <button
            onClick={onFinish}
            class="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold active:bg-blue-600"
          >
            返回
          </button>
        </div>
      </div>
    )
  }

  const tagNames = current.tagIds
    .map((tid) => pack.tags.find((t) => t.id === tid)?.name)
    .filter(Boolean)
    .join(', ')

  return (
    <div class="flex flex-col min-h-dvh">
      <header class="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button onClick={onFinish} class="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="flex-1 min-w-0">
          <h1 class="text-sm font-semibold text-gray-800 truncate">{pack.name}</h1>
          <Progress total={totalCards} reviewed={reviewed} />
        </div>
        <span class="text-xs text-gray-400 ml-2">
          {ratedIds.size}/{ratedIds.size + remaining.length} · {tagNames}
        </span>
      </header>

      <div class="flex-1 flex flex-col justify-center py-4">
        <div class="text-center mb-2">
          {current.tagIds.map((tid) => {
            const t = pack.tags.find((tag) => tag.id === tid)
            return t ? (
              <span key={tid} class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full mx-0.5">
                {t.name}
              </span>
            ) : null
          })}
        </div>

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
