import type { CardItem, CardPack, IStorage, PersistentCard, ReviewLog } from '../types'

const PACKS_KEY = 'fc_packs'
const CARDS_KEY = (pid: string) => `fc_cards_${pid}`
const STATES_KEY = 'fc_states'
const LOGS_KEY = 'fc_logs'
const WRONG_KEY = 'fc_wrong'
const WRONG_HISTORY_KEY = 'fc_wrong_history'
const DRAWN_KEY = 'fc_drawn'
const DATA_VERSION_KEY = 'fc_data_version'

function json<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function reviveCardState(c: PersistentCard): PersistentCard {
  return {
    ...c,
    fsrsCard: {
      ...c.fsrsCard,
      due: new Date(c.fsrsCard.due),
      last_review: c.fsrsCard.last_review ? new Date(c.fsrsCard.last_review) : undefined,
    },
  }
}

export const storage: IStorage = {
  getPacks(): CardPack[] {
    return json<CardPack[]>(PACKS_KEY, [])
  },

  getPack(id: string): CardPack | undefined {
    return this.getPacks().find((p) => p.id === id)
  },

  savePack(pack: CardPack): void {
    const packs = this.getPacks()
    const idx = packs.findIndex((p) => p.id === pack.id)
    if (idx >= 0) {
      packs[idx] = { ...pack, updatedAt: Date.now() }
    } else {
      packs.push(pack)
    }
    localStorage.setItem(PACKS_KEY, JSON.stringify(packs))
  },

  deletePack(id: string): void {
    const packs = this.getPacks().filter((p) => p.id !== id)
    localStorage.setItem(PACKS_KEY, JSON.stringify(packs))
    localStorage.removeItem(CARDS_KEY(id))
  },

  getCards(packId: string): CardItem[] {
    return json<CardItem[]>(CARDS_KEY(packId), [])
  },

  getCard(id: string): CardItem | undefined {
    const cards = this.getAllCardStates()
    const fromStates = cards.find((c) => c.metaId === id)
    if (fromStates) {
      return this.getCard(fromStates.metaId)
    }
    return undefined
  },

  setCards(packId: string, cards: CardItem[]): void {
    localStorage.setItem(CARDS_KEY(packId), JSON.stringify(cards))
  },

  getCardState(id: string): PersistentCard | undefined {
    const all = this.getAllCardStates()
    const found = all.find((c) => c.metaId === id)
    return found ? reviveCardState(found) : undefined
  },

  getAllCardStates(): PersistentCard[] {
    return json<PersistentCard[]>(STATES_KEY, []).map(reviveCardState)
  },

  saveCardState(card: PersistentCard): void {
    const all = this.getAllCardStates()
    const idx = all.findIndex((c) => c.metaId === card.metaId)
    if (idx >= 0) {
      all[idx] = card
    } else {
      all.push(card)
    }
    localStorage.setItem(STATES_KEY, JSON.stringify(all))
  },

  saveAllCardStates(cards: PersistentCard[]): void {
    localStorage.setItem(STATES_KEY, JSON.stringify(cards))
  },

  getReviewLogs(cardId: string): ReviewLog[] {
    const all = this.getAllReviewLogs()
    return all.filter((l) => l.cardId === cardId)
  },

  getAllReviewLogs(): ReviewLog[] {
    return json<ReviewLog[]>(LOGS_KEY, [])
  },

  addReviewLog(log: ReviewLog): void {
    const all = this.getAllReviewLogs()
    all.push(log)
    localStorage.setItem(LOGS_KEY, JSON.stringify(all))
  },

  clearReviewLogs(): void {
    localStorage.setItem(LOGS_KEY, JSON.stringify([]))
  },

  getWrongCardIds(): string[] {
    const counts = this.getWrongCounts()
    return Object.keys(counts).filter((id) => counts[id] > 0)
  },

  getWrongCounts(): Record<string, number> {
    const raw = json<Record<string, number> | string[]>(WRONG_KEY, {})
    if (Array.isArray(raw)) {
      const map: Record<string, number> = {}
      for (const id of raw) map[id] = 1
      return map
    }
    return raw
  },

  getWrongCount(id: string): number {
    return this.getWrongCounts()[id] ?? 0
  },

  addWrongCardId(id: string): void {
    const counts = this.getWrongCounts()
    counts[id] = (counts[id] ?? 0) + 1
    localStorage.setItem(WRONG_KEY, JSON.stringify(counts))
    const history = this.getWrongHistoryCounts()
    history[id] = (history[id] ?? 0) + 1
    localStorage.setItem(WRONG_HISTORY_KEY, JSON.stringify(history))
  },

  removeWrongCardId(id: string): void {
    const counts = this.getWrongCounts()
    delete counts[id]
    localStorage.setItem(WRONG_KEY, JSON.stringify(counts))
  },

  clearWrongCardIds(): void {
    localStorage.setItem(WRONG_KEY, JSON.stringify({}))
  },

  getWrongHistoryCounts(): Record<string, number> {
    return json<Record<string, number>>(WRONG_HISTORY_KEY, {})
  },

  getWrongHistoryCount(id: string): number {
    return this.getWrongHistoryCounts()[id] ?? 0
  },

  getDrawnIds(): string[] {
    return json<string[]>(DRAWN_KEY, [])
  },

  recordDrawn(ids: string[]): void {
    if (ids.length === 0) return
    const existing = new Set(this.getDrawnIds())
    for (const id of ids) existing.add(id)
    localStorage.setItem(DRAWN_KEY, JSON.stringify([...existing]))
  },

  getDataVersion(): string | null {
    return localStorage.getItem(DATA_VERSION_KEY)
  },

  setDataVersion(version: string): void {
    localStorage.setItem(DATA_VERSION_KEY, version)
  },
}
