import type { CardPack } from '../types'
import { getDueCounts, countReviewsToday } from '../utils/scheduler'
import { storage } from '../utils/storage'

interface Props {
  packs: CardPack[]
  onSelect: (packId: string) => void
}

export default function PackList({ packs, onSelect }: Props) {
  const now = new Date()
  const reviewed = countReviewsToday(now)
  const allStates = storage.getAllCardStates()
  const totalDue = getDueCounts(allStates, now)

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-gray-800 mb-1">闪卡学习</h1>
      <p className="text-xs text-gray-400 mb-6">
        今日复习 {reviewed} 张 · 待复习 {totalDue.due} 张 · 明日 {totalDue.tomorrow} 张
      </p>

      <div className="space-y-3">
        {packs.map((pack) => {
          const states = allStates.filter((s) => {
            const c = storage.getCards(pack.id).find((c) => c.id === s.metaId)
            return !!c
          })
          const due = getDueCounts(states, now)
          const cardCount = storage.getCards(pack.id).length
          return (
            <button
              key={pack.id}
              onClick={() => onSelect(pack.id)}
              className="w-full text-left bg-white rounded-2xl shadow-sm border border-gray-100 p-5
                active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-semibold text-gray-800">{pack.name}</h2>
                <span className="text-xs text-gray-400">{cardCount} 张</span>
              </div>
              <p className="text-xs text-gray-500 mb-3 line-clamp-1">{pack.description}</p>
              <div className="flex items-center gap-2 text-xs">
                {due.due > 0 && (
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    待复习 {due.due}
                  </span>
                )}
                <span className="text-gray-400">
                  {pack.tags.length} 标签
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {packs.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p>暂无卡包</p>
        </div>
      )}
    </div>
  )
}
