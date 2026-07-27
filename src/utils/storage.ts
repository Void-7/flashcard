import type { PersistentCard } from './scheduler'
import type { CardMeta, Deck } from '../types'
import { allKnowledgeCards, allQuestionCards, allDecks } from '../data/knowledge'
import { initFsrsCard, applyRating } from './scheduler'
import { Rating } from 'ts-fsrs'

const STORAGE_KEY = 'flashcard_state'

interface PersistedState {
  cards: PersistentCard[]
}

function createInitialCards(): PersistentCard[] {
  const allCards: CardMeta[] = [...allKnowledgeCards, ...allQuestionCards]
  return allCards.map((meta) => ({
    metaId: meta.id,
    fsrsCard: initFsrsCard(),
  }))
}

export function loadState(): PersistentCard[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed: PersistedState = JSON.parse(raw)
      if (Array.isArray(parsed.cards)) {
        return parsed.cards.map((c) => ({
          ...c,
          fsrsCard: {
            ...c.fsrsCard,
            due: new Date(c.fsrsCard.due),
            last_review: c.fsrsCard.last_review ? new Date(c.fsrsCard.last_review) : null,
          },
        }))
      }
    }
  } catch { /* ignore corrupt data */ }
  return createInitialCards()
}

export function saveState(cards: PersistentCard[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ cards }))
}

export function getMetaByCardId(cardId: string): CardMeta | undefined {
  return [...allKnowledgeCards, ...allQuestionCards].find((m) => m.id === cardId)
}

export function getDeckByCardId(cardId: string): Deck | undefined {
  const meta = getMetaByCardId(cardId)
  if (!meta) return undefined
  return allDecks.find((d) => d.id === meta.deckId)
}

export function getMetaById(id: string): CardMeta | undefined {
  return [...allKnowledgeCards, ...allQuestionCards].find((m) => m.id === id)
}

export function isQuestionCard(meta: CardMeta): meta is import('../types').QuestionMeta {
  return 'question' in meta
}

export function isKnowledgeCard(meta: CardMeta): meta is import('../types').KnowledgeMeta {
  return 'front' in meta
}

export function resetAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}
