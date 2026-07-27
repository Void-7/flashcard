import { allDecks } from '../data/knowledge'
import { allKnowledgeCards, allQuestionCards } from '../data/knowledge'
import type { PersistentCard } from '../utils/scheduler'
import { getDueCards } from '../utils/scheduler'

interface Props {
  persistentCards: PersistentCard[]
  onSelectDeck: (deckId: string) => void
}

export default function DeckList({ persistentCards, onSelectDeck }: Props) {
  const metaMap = new Map<string, string>()
  for (const c of [...allKnowledgeCards, ...allQuestionCards]) {
    metaMap.set(c.id, c.deckId)
  }

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-gray-800 mb-1">人工智能训练师三级</h1>
      <p className="text-sm text-gray-500 mb-6">实操知识卡片</p>
      <div className="space-y-3">
        {allDecks.map((deck) => {
          const cardIds = deck.cardIds
          const pCards = persistentCards.filter((c) => cardIds.includes(c.metaId))
          const dueCards = getDueCards(pCards, new Date())
          const total = pCards.length
          return (
            <button
              key={deck.id}
              onClick={() => onSelectDeck(deck.id)}
              className="w-full text-left bg-white rounded-xl shadow-sm border border-gray-100 p-4
                active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{deck.title}</span>
                <span className="text-xs text-gray-400">
                  {total - dueCards.length}/{total}
                </span>
              </div>
              {dueCards.length > 0 && (
                <div className="mt-2 flex gap-1">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {dueCards.length} 张待复习
                  </span>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
