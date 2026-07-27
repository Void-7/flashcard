export type QuestionType = 'single' | 'multiple' | 'true-false'

export interface KnowledgeMeta {
  id: string
  deckId: string
  front: { title: string; description: string }
  back: { code: string; notes?: string }
}

export interface QuestionMeta {
  id: string
  deckId: string
  type: QuestionType
  question: string
  options: string[]
  answer: number | number[]
  explanation?: string
}

export type CardMeta = KnowledgeMeta | QuestionMeta

export interface Deck {
  id: string
  title: string
  cardIds: string[]
}

export type AppView = 'deck-list' | 'study'

export interface AppState {
  view: AppView
  currentDeckId: string | null
}
