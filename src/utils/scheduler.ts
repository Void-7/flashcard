import { createEmptyCard, fsrs, Rating, State, type Card, type FSRS, type Grade } from 'ts-fsrs'
import type { CardItem, PersistentCard, ReviewLog } from '../types'
import { storage } from './storage'

let scheduler: FSRS | null = null
export function getScheduler(): FSRS {
  if (!scheduler) {
    scheduler = fsrs({ request_retention: 0.9 })
  }
  return scheduler
}

export function initFsrsCard(): Card {
  return createEmptyCard(new Date())
}

export function applyRating(card: Card, rating: Grade, now: Date, cardId: string): Card {
  const result = getScheduler().next(card, now, rating)
  const log: ReviewLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    cardId,
    rating,
    reviewedAt: now.getTime(),
    state: result.card.state as number,
    stability: result.card.stability,
    difficulty: result.card.difficulty,
    elapsedDays: card.last_review
      ? Math.round((now.getTime() - card.last_review.getTime()) / 86400000)
      : 0,
    scheduledDays: result.card.due
      ? Math.round((result.card.due.getTime() - now.getTime()) / 86400000)
      : 0,
  }
  storage.addReviewLog(log)
  return result.card
}

export function getDueCards(cards: PersistentCard[], now: Date): PersistentCard[] {
  return cards.filter(({ fsrsCard: c }) => {
    if (c.state === State.New) return true
    return c.due <= now
  })
}

export function getRetrievability(card: Card, now: Date): number {
  try {
    return getScheduler().get_retrievability(card, now, false)
  } catch {
    return 1
  }
}

export function getDueCounts(cards: PersistentCard[], now: Date) {
  let due = 0
  let tomorrow = 0
  let week = 0
  let month = 0
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
  const endOfTomorrow = new Date(endOfToday.getTime() + 86400000)
  const endOfWeek = new Date(endOfToday.getTime() + 7 * 86400000)
  const endOfMonth = new Date(endOfToday.getTime() + 30 * 86400000)

  for (const { fsrsCard: c } of cards) {
    if (c.state === State.New) {
      due++
      continue
    }
    if (c.due <= endOfToday) {
      due++
    } else if (c.due <= endOfTomorrow) {
      tomorrow++
    } else if (c.due <= endOfWeek) {
      week++
    } else if (c.due <= endOfMonth) {
      month++
    }
  }
  return { due, tomorrow, week, month }
}

export function countReviewsToday(now: Date): number {
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const endOfDay = startOfDay + 86400000
  return storage.getAllReviewLogs().filter((l) =>
    l.reviewedAt >= startOfDay && l.reviewedAt < endOfDay,
  ).length
}

export function getTodayStats(now: Date) {
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const endOfDay = startOfDay + 86400000
  const logs = storage.getAllReviewLogs().filter((l) =>
    l.reviewedAt >= startOfDay && l.reviewedAt < endOfDay,
  )
  const total = logs.length
  const ratings = { again: 0, hard: 0, good: 0, easy: 0 }
  for (const l of logs) {
    if (l.rating === Rating.Again) ratings.again++
    else if (l.rating === Rating.Hard) ratings.hard++
    else if (l.rating === Rating.Good) ratings.good++
    else if (l.rating === Rating.Easy) ratings.easy++
  }
  return { total, ...ratings }
}
