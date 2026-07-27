import { useState, useMemo } from 'react'
import type { CardMeta, Deck } from '../types'
import type { PersistentCard } from '../utils/scheduler'
import { getDueCards, applyRating, countReviewsToday, getRetrievability } from '../utils/scheduler'
import { getMetaById, isKnowledgeCard, isQuestionCard } from '../utils/storage'
import { allDecks, allKnowledgeCards, allQuestionCards } from '../data/knowledge'
import KnowledgeCard from './KnowledgeCard'
import QuestionCard from './QuestionCard'
import RatingButtons from './RatingButtons'
import Progress from './Progress'
import { Rating, State } from 'ts-fsrs'

interface Props {
  deckId: string
  persistentCards: PersistentCard[]
  onUpdateCards: (cards: PersistentCard[]) => void
  onBack: () => void
}

export default function CardViewer({ deckId, persistentCards, onUpdateCards, onBack }: Props) {
  const deck = allDecks.find((d) => d.id === deckId)
  const [showFront, setShowFront] = useState(true)
  const [ratedIds, setRatedIds] = useState<Set<string>>(new Set())

  const deckCardIds = useMemo(() => {
    if (!deck) return new Set<string>()
    return new Set(deck.cardIds)
  }, [deck])

  const pool = useMemo(() => {
    return persistentCards.filter((c) => deckCardIds.has(c.metaId))
  }, [persistentCards, deckCardIds])

  const dueCards = useMemo(() => {
    const now = new Date()
    return getDueCards(pool, now).filter((c) => !ratedIds.has(c.metaId))
  }, [pool, ratedIds])

  const dueCount = useMemo(
    () => getDueCards(pool, new Date()).length,
    [pool],
  )

  const currentIdx = useMemo(() => {
    if (dueCards.length === 0) return -1
    const now = new Date()
    const sorted = [...dueCards].sort((a, b) => {
      const ra = getRetrievability(a.fsrsCard, now)
      const rb = getRetrievability(b.fsrsCard, now)
      return ra - rb
    })
    const idx = pool.findIndex((c) => c.metaId === sorted[0].metaId)
    return idx
  }, [dueCards, pool])

  const currentCard = currentIdx >= 0 ? pool[currentIdx] : null
  const meta = currentCard ? getMetaById(currentCard.metaId) : null

  function handleRate(rating: Rating) {
    if (!currentCard) return
    const now = new Date()
    const updated = applyRating(currentCard.fsrsCard, rating, now)
    const newCards = persistentCards.map((c) =>
      c.metaId === currentCard.metaId ? { ...c, fsrsCard: updated } : c,
    )
    onUpdateCards(newCards)
    setRatedIds((prev) => new Set(prev).add(currentCard.metaId))
    setShowFront(true)
  }

  function handleResetRated() {
    setRatedIds(new Set())
  }

  const reviewedCount = countReviewsToday(pool, new Date())
  const totalInDeck = pool.length

  if (dueCards.length === 0 && ratedIds.size > 0) {
    return (
      <div class="flex flex-col items-center justify-center min-h-dvh px-4">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-sm w-full text-center">
          <div class="text-4xl mb-3 text-green-500">完成!</div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">本轮复习完成</h2>
          <p class="text-sm text-gray-500 mb-4">已复习 {ratedIds.size} 张卡片</p>
          <div class="flex flex-col gap-2">
            <button
              onClick={handleResetRated}
              class="py-3 rounded-xl bg-blue-500 text-white font-semibold active:bg-blue-600"
            >
              继续复习
            </button>
            <button
              onClick={onBack}
              class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold active:bg-gray-50"
            >
              返回牌组列表
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (dueCards.length === 0) {
    return (
      <div class="flex flex-col items-center justify-center min-h-dvh px-4">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-sm w-full text-center">
          <div class="text-4xl mb-3 text-gray-300">全部完成</div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">暂无待复习卡片</h2>
          <p class="text-sm text-gray-500 mb-4">所有卡片已完成复习，请稍后再来</p>
          <button
            onClick={onBack}
            class="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold active:bg-blue-600"
          >
            返回牌组列表
          </button>
        </div>
      </div>
    )
  }

  if (!meta) {
    return (
      <div class="flex items-center justify-center min-h-dvh">
        <p class="text-gray-400">加载中...</p>
      </div>
    )
  }

  const deckTitle = deck?.title || ''

  return (
    <div class="flex flex-col min-h-dvh">
      <header class="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button
          onClick={onBack}
          class="mr-3 text-gray-500 active:text-gray-700 p-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="flex-1 min-w-0">
          <h1 class="text-sm font-semibold text-gray-800 truncate">{deckTitle}</h1>
          <Progress total={totalInDeck} reviewed={reviewedCount} />
        </div>
        <span class="text-xs text-gray-400 ml-2">
          {dueCards.length} 待复习
        </span>
      </header>

      <div class="flex-1 flex flex-col justify-center py-4">
        {isKnowledgeCard(meta) && (
          <KnowledgeCard
            key={meta.id + (showFront ? '-front' : '-back')}
            meta={meta}
            onRate={handleRate}
          />
        )}
        {isQuestionCard(meta) && (
          <QuestionCard
            key={meta.id}
            meta={meta}
            onRate={handleRate}
          />
        )}
      </div>
    </div>
  )
}
