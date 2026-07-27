import type { Card as FSRSCard, Rating } from 'ts-fsrs'

export type QuestionType = 'single' | 'multiple' | 'true-false'
export type CardType = 'knowledge' | 'question'
export type StudyMode = 'random-tag' | 'tag-focused' | 'mock-exam'
export type AppView = 'pack-list' | 'pack-detail' | 'study' | 'stats' | 'wrong-book'

export interface Tag {
  id: string
  name: string
}

export interface CardPack {
  id: string
  name: string
  description: string
  tags: Tag[]
  createdAt: number
  updatedAt: number
}

export interface KnowledgeContent {
  title: string
  description: string
  code: string
  notes?: string
}

export interface QuestionContent {
  type: QuestionType
  question: string
  options: string[]
  answer: number | number[]
  explanation?: string
}

export interface CardItem {
  id: string
  packId: string
  tagIds: string[]
  type: CardType
  content: KnowledgeContent | QuestionContent
  createdAt: number
}

export interface ReviewLog {
  id: string
  cardId: string
  rating: Rating
  reviewedAt: number
  state: number
  stability: number
  difficulty: number
  elapsedDays: number
  scheduledDays: number
}

export interface PersistentCard {
  metaId: string
  fsrsCard: FSRSCard
}

export interface IStorage {
  getPacks(): CardPack[]
  getPack(id: string): CardPack | undefined
  savePack(pack: CardPack): void
  deletePack(id: string): void

  getCards(packId: string): CardItem[]
  getCard(id: string): CardItem | undefined
  setCards(packId: string, cards: CardItem[]): void

  getCardState(id: string): PersistentCard | undefined
  getAllCardStates(): PersistentCard[]
  saveCardState(card: PersistentCard): void
  saveAllCardStates(cards: PersistentCard[]): void

  getReviewLogs(cardId: string): ReviewLog[]
  getAllReviewLogs(): ReviewLog[]
  addReviewLog(log: ReviewLog): void
  clearReviewLogs(): void

  getWrongCardIds(): string[]
  addWrongCardId(id: string): void
  removeWrongCardId(id: string): void
  clearWrongCardIds(): void
}

export interface StudyConfig {
  pack: CardPack
  mode: StudyMode
  tagId?: string
  wrongOnly?: boolean
}

export const QUESTION_LIMITS = [20, 40, 50, 100] as const
export type QuestionLimit = (typeof QUESTION_LIMITS[number]) | 190
