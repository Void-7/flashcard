import type { CardPack } from '../types'
import { getDueCounts, countReviewsToday } from '../utils/scheduler'
import { storage } from '../utils/storage'

interface Props {
  pack: CardPack
  onSelect: (packId: string) => void
}

export default function PackList({ pack, onSelect }: Props) {
  const states = storage.getAllCardStates()
  const now = new Date()
  const due = getDueCounts(states, now)
  const reviewed = countReviewsToday(now)

  return (
    <div class="px-4 py-6 max-w-lg mx-auto">
      <h1 class="text-xl font-bold text-gray-800 mb-1">闪卡学习</h1>
      <p class="text-xs text-gray-400 mb-6">
        今日复习 {reviewed} 张 · 待复习 {due.due} 张
      </p>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <div class="flex items-center justify-between mb-2">
          <h2 class="font-semibold text-gray-800">{pack.name}</h2>
          <span class="text-xs text-gray-400">{pack.tags.length} 个标签</span>
        </div>
        <p class="text-sm text-gray-500 mb-3">{pack.description}</p>

        <div class="flex flex-wrap gap-1.5 mb-4">
          {pack.tags.map((tag) => {
            const tagCards = storage.getCards(pack.id).filter((c) => c.tagIds.includes(tag.id))
            const tagStates = states.filter((s) => tagCards.some((c) => c.id === s.metaId))
            const tagDue = getDueCounts(tagStates, now)
            return (
              <span key={tag.id} class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {tag.name} {tagDue.due > 0 ? `(${tagDue.due})` : ''}
              </span>
            )
          })}
        </div>

        <div class="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>今日: {due.due} 待复习 · {reviewed} 已完成</span>
          <span>未来: {due.tomorrow} 明日 · {due.week} 本周 · {due.month} 本月</span>
        </div>

        <button
          onClick={() => onSelect(pack.id)}
          class="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md active:bg-blue-600 active:scale-[0.98] transition-all"
        >
          {due.due > 0 ? `开始学习 (${due.due})` : '开始学习'}
        </button>
      </div>
    </div>
  )
}
