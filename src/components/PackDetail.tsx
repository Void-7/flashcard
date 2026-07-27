import { useMemo } from 'react'
import type { CardPack, StudyMode } from '../types'
import { getDueCounts, getTodayStats } from '../utils/scheduler'
import { storage } from '../utils/storage'

interface Props {
  pack: CardPack
  onStart: (mode: StudyMode, tagId?: string) => void
  onBack: () => void
}

export default function PackDetail({ pack, onStart, onBack }: Props) {
  const now = useMemo(() => new Date(), [])
  const states = storage.getAllCardStates()
  const dueCounts = getDueCounts(states, now)
  const stats = getTodayStats(now)

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <header className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-800">{pack.name}</h1>
          <p className="text-xs text-gray-400">{pack.tags.length} 个标签 · {storage.getCards(pack.id).length} 张卡片</p>
        </div>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">今日统计</h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-lg font-bold text-gray-800">{stats.total}</div>
            <div className="text-xs text-gray-400">复习</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">{stats.again}</div>
            <div className="text-xs text-gray-400">Again</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-500">{stats.good + stats.easy}</div>
            <div className="text-xs text-gray-400">通过</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">{dueCounts.due}</div>
            <div className="text-xs text-gray-400">待复习</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">复习计划</h2>
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex justify-between"><span>今日待复习</span><span className="font-medium">{dueCounts.due}</span></div>
          <div className="flex justify-between"><span>明日</span><span className="font-medium">{dueCounts.tomorrow}</span></div>
          <div className="flex justify-between"><span>未来 7 天</span><span className="font-medium">{dueCounts.week + dueCounts.tomorrow}</span></div>
          <div className="flex justify-between"><span>未来 30 天</span><span className="font-medium">{dueCounts.month + dueCounts.week + dueCounts.tomorrow}</span></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">学习模式</h2>

        <button
          onClick={() => onStart('random-tag')}
          className="w-full text-left p-4 rounded-xl border border-gray-200 mb-3 active:bg-gray-50 transition-colors"
        >
          <div className="font-medium text-gray-800 text-sm">随机抽取</div>
          <p className="text-xs text-gray-400 mt-1">从每个标签中随机抽取卡片，均衡复习</p>
        </button>

        <p className="text-xs text-gray-400 mb-2">— 或选择标签专项学习 —</p>

        <div className="flex flex-wrap gap-2">
          {pack.tags.map((tag) => {
            const tagCards = storage.getCards(pack.id).filter((c) => c.tagIds.includes(tag.id))
            const tagStates = states.filter((s) => tagCards.some((c) => c.id === s.metaId))
            const tagDue = getDueCounts(tagStates, now)
            return (
              <button
                key={tag.id}
                onClick={() => onStart('tag-focused', tag.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm active:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">{tag.name}</span>
                {tagDue.due > 0 && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">{tagDue.due}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
