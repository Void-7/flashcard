import { useState, useMemo, useRef } from 'react'
import { Rating, type Grade } from 'ts-fsrs'
import type { CardItem, CardPack, StudyMode, QuestionLimit, KnowledgeContent, QuestionContent } from '../types'
import { storage } from '../utils/storage'
import { applyRating, countReviewsToday, initFsrsCard } from '../utils/scheduler'
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
  wrongOnly?: boolean
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TYPE_TAG_KEYS = ['单选题', '多选题', '判断题']

export default function CardViewer({ pack, mode, tagId, limit, onFinish, wrongOnly }: Props) {
  const now = useMemo(() => new Date(), [])

  const typeTags = useMemo(() => {
    const names = new Set(TYPE_TAG_KEYS)
    return pack.tags.filter((t) => names.has(t.name))
  }, [pack.tags])

  const hasTypeTags = typeTags.length === 3

  const typeTagIdByName = useMemo(() => {
    const m: Record<string, string> = {}
    for (const t of typeTags) m[t.name] = t.id
    return m
  }, [typeTags])

  const sessionCards = useMemo(() => {
    const allCards = storage.getCards(pack.id)
    const wrongIds = wrongOnly ? new Set(storage.getWrongCardIds()) : null
    const filtered = wrongIds ? allCards.filter((c) => wrongIds.has(c.id)) : allCards
    if (wrongOnly && filtered.length === 0) return []

    if (mode === 'mock-exam') {
      const byType = (qtype: string) => {
        const tid = typeTagIdByName[qtype]
        if (!tid) return []
        return allCards.filter((c) => c.type === 'question' && c.tagIds.includes(tid))
      }
      const singleAll = byType('单选题')
      const tfAll = byType('判断题')
      const multiAll = byType('多选题')

      const take = (arr: CardItem[], n: number) => shuffle(arr).slice(0, Math.min(n, arr.length))
      return [...take(singleAll, 140), ...take(tfAll, 40), ...take(multiAll, 10)]
    }

    if (mode === 'tag-focused' && tagId) {
      return shuffle(filtered.filter((c) => c.tagIds.includes(tagId))).slice(0, limit)
    }

    if (mode === 'random-tag') {
      if (hasTypeTags) {
        const sel: CardItem[] = []
        const each = Math.floor(limit / 3)
        const rem = limit - each * 3
        const counts: Record<string, number> = { '单选题': each, '多选题': each, '判断题': each + rem }
        for (const [name, count] of Object.entries(counts)) {
          const tid = typeTagIdByName[name]
          if (!tid) continue
          const pool = filtered.filter((c) => c.type === 'question' && c.tagIds.includes(tid))
          sel.push(...shuffle(pool).slice(0, Math.min(count, pool.length)))
        }
        return shuffle(sel)
      }
      return shuffle(filtered).slice(0, limit)
    }

    return filtered.slice(0, limit)
  }, [pack, mode, tagId, limit, typeTagIdByName, hasTypeTags, wrongOnly])

  const [currentIdx, setCurrentIdx] = useState(0)
  const [ratedIdxSet, setRatedIdxSet] = useState<Set<number>>(new Set())
  const autoTimer = useRef<ReturnType<typeof setTimeout>>()

  const [examCorrect, setExamCorrect] = useState<boolean[] | null>(
    mode === 'mock-exam' ? new Array(sessionCards.length).fill(null) : null
  )

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

  function goNext() {
    const next = findNextUnrated(currentIdx + 1)
    if (next < 0) {
      if (mode === 'mock-exam') return
      onFinish()
      return
    }
    setCurrentIdx(next)
  }

  function handleRate(rating: Rating) {
    const card = sessionCards[currentIdx]
    if (!card) return
    const now = new Date()
    let state = storage.getCardState(card.id)
    if (!state) state = { metaId: card.id, fsrsCard: initFsrsCard() }
    const updated = applyRating(state.fsrsCard, rating as Grade, now, card.id)
    storage.saveCardState({ metaId: card.id, fsrsCard: updated })
    setRatedIdxSet((prev) => new Set(prev).add(currentIdx))
    if (wrongOnly && (rating === Rating.Good || rating === Rating.Easy)) {
      storage.removeWrongCardId(card.id)
    }
    if (autoTimer.current) clearTimeout(autoTimer.current)
    autoTimer.current = setTimeout(goNext, 600)
  }

  function handleExamAnswer(correct: boolean) {
    if (!examCorrect) return
    const next = [...examCorrect]
    next[currentIdx] = correct
    setExamCorrect(next)
    setRatedIdxSet((prev) => new Set(prev).add(currentIdx))
    if (!correct) {
      const card = sessionCards[currentIdx]
      if (card) storage.addWrongCardId(card.id)
    }
  }

  function handleJump(idx: number) {
    if (autoTimer.current) clearTimeout(autoTimer.current)
    setCurrentIdx(idx)
  }

  const reviewed = countReviewsToday(now)

  const done = mode === 'mock-exam'
    ? examCorrect && examCorrect.every((r) => r !== null) && examCorrect.length > 0
    : !current && ratedIdxSet.size > 0

  if (done && mode === 'mock-exam' && examCorrect) {
    const sections = ['单选题', '判断题', '多选题']
    const sectionDefs = [
      { label: '单选题', start: 0, end: 140 },
      { label: '判断题', start: 140, end: 180 },
      { label: '多选题', start: 180, end: 190 },
    ]
    const sectionScores = sectionDefs.map((sec) => {
      const results = examCorrect.slice(sec.start, sec.end)
      const correct = results.filter(Boolean).length
      const total = sec.end - sec.start
      return { label: sec.label, correct, total }
    })
    const points = sectionScores.map((s, i) => {
      const weight = i === 2 ? 1 : 0.5
      return s.correct * weight
    })
    const totalScore = points.reduce((a, b) => a + b, 0)

    return (
      <div className="flex flex-col items-center justify-center min-h-dvh px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-sm w-full text-center">
          <div className="text-4xl mb-3 text-blue-500">考试完成!</div>
          <div className="text-3xl font-bold text-gray-800 mb-4">{totalScore.toFixed(1)} / 100</div>
          <div className="space-y-2 text-sm text-left">
            {sectionScores.map((s) => (
              <div key={s.label} className="flex justify-between px-2 py-1 bg-gray-50 rounded-lg">
                <span className="text-gray-600">{s.label}</span>
                <span className="font-medium text-gray-800">{s.correct} / {s.total} 正确</span>
              </div>
            ))}
          </div>
          <button onClick={onFinish} className="mt-6 w-full py-3 rounded-xl bg-blue-500 text-white font-semibold active:bg-blue-600">
            返回
          </button>
        </div>
      </div>
    )
  }

  if (done) {
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

  const isMock = mode === 'mock-exam'

  const sectionDefs = isMock
    ? [
        { label: '单选题 1-140', start: 0, end: 140 },
        { label: '判断题 141-180', start: 140, end: 180 },
        { label: '多选题 181-190', start: 180, end: 190 },
      ]
    : undefined

  const examRes = isMock ? examCorrect : undefined

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button onClick={onFinish} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-semibold text-gray-800 truncate">
            {isMock ? '模拟考试' : pack.name}
          </h1>
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
          examResults={examRes ?? undefined}
          sections={sectionDefs}
          onJump={handleJump}
        />
      )}

      <div className="flex-1 flex flex-col justify-center py-4">
        {isMock && (
          <span className="text-xs text-gray-400 text-center mb-1">
            {(current.content as QuestionContent).type === 'single' ? '单选题' :
             (current.content as QuestionContent).type === 'multiple' ? '多选题' : '判断题'}
          </span>
        )}

        {current.type === 'knowledge' && !isMock && (
          <KnowledgeCard
            key={current.id}
            content={current.content as KnowledgeContent}
            onRate={handleRate}
          />
        )}
        {current.type === 'question' && (
          isMock ? (
            <QuestionCard
              key={current.id}
              content={current.content as QuestionContent}
              onRate={handleRate}
              examMode
              onExamNext={(correct) => {
                handleExamAnswer(correct)
                goNext()
              }}
            />
          ) : (
            <QuestionCard
              key={current.id}
              content={current.content as QuestionContent}
              onRate={handleRate}
            />
          )
        )}
      </div>
    </div>
  )
}
