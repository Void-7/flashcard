import { createEmptyCard, fsrs, Rating, State, type Card, type FSRS } from 'ts-fsrs'
import type { CardMeta } from '../types'

let scheduler: FSRS | null = null
export function getScheduler(): FSRS {
  if (!scheduler) {
    scheduler = fsrs({ request_retention: 0.9 })
  }
  return scheduler
}

export interface PersistentCard {
  metaId: string
  fsrsCard: Card
}

export function initFsrsCard(): Card {
  return createEmptyCard(new Date())
}

export function applyRating(card: Card, rating: Rating, now: Date): Card {
  return getScheduler().next(card, now, rating).card
}

export function getDueCards(cards: PersistentCard[], now: Date): PersistentCard[] {
  const s = getScheduler()
  return cards.filter(({ fsrsCard: c }) => {
    if (c.state === State.New) return true
    return c.due <= now
  })
}

export function getRetrievability(card: Card, now: Date): number {
  try {
    return getScheduler().get_retrievability(card, now)
  } catch {
    return 1
  }
}

export function countReviewsToday(cards: PersistentCard[], today: Date): number {
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const endOfDay = new Date(startOfDay.getTime() + 86400000)
  return cards.filter(({ fsrsCard: c }) => {
    if (!c.last_review) return false
    return c.last_review >= startOfDay && c.last_review < endOfDay
  }).length
}
