import { useState, useMemo } from 'react'
import type { CardPack, QuestionLimit } from '../types'
import { storage } from '../utils/storage'
import QuestionCountDialog from './QuestionCountDialog'

interface Props {
  packs: CardPack[]
  onStartWrongStudy: (pack: CardPack, limit: QuestionLimit) => void
  onStartWrongHistoryStudy: (pack: CardPack, limit: QuestionLimit) => void
  onBack: () => void
}

type Tab = 'active' | 'history'

export default function WrongBook({ packs, onStartWrongStudy, onStartWrongHistoryStudy, onBack }: Props) {
  const [pendingLimit, setPendingLimit] = useState<CardPack | null>(null)
  const [tab, setTab] = useState<Tab>('active')
  const wrongCounts = useMemo(() => storage.getWrongCounts(), [])
  const historyCounts = useMemo(() => storage.getWrongHistoryCounts(), [])

  const packStats = useMemo(() => {
    return packs.map((p) => {
      const cards = storage.getCards(p.id)
      const activeCards = cards.filter((c) => (wrongCounts[c.id] ?? 0) > 0)
      const historyCards = cards.filter((c) => (historyCounts[c.id] ?? 0) > 0)
      return {
        pack: p,
        active: {
          count: activeCards.length,
          mistakes: activeCards.reduce((s, c) => s + (wrongCounts[c.id] ?? 0), 0),
        },
        history: {
          count: historyCards.length,
          mistakes: historyCards.reduce((s, c) => s + (historyCounts[c.id] ?? 0), 0),
          resolved: historyCards.filter((c) => (wrongCounts[c.id] ?? 0) === 0).length,
        },
      }
    })
  }, [packs, wrongCounts, historyCounts])

  const activePacks = packStats.filter((x) => x.active.count > 0)
  const historyPacks = packStats.filter((x) => x.history.count > 0)

  const totalActive = activePacks.reduce((s, x) => s + x.active.count, 0)
  const totalActiveMistakes = activePacks.reduce((s, x) => s + x.active.mistakes, 0)
  const totalHistory = historyPacks.reduce((s, x) => s + x.history.count, 0)
  const totalHistoryMistakes = historyPacks.reduce((s, x) => s + x.history.mistakes, 0)

  const tabBtn = (key: Tab, label: string, badge: number) => (
    <button
      onClick={() => setTab(key)}
      className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${
        tab === key ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
      }`}
    >
      {label}
      {badge > 0 && <span className="ml-1 text-xs opacity-80">({badge})</span>}
    </button>
  )

  function renderPackList(items: { pack: CardPack; count: number; mistakes: number; sub?: string }[]) {
    if (items.length === 0) {
      return <div className="text-center text-gray-400 py-12">暂无记录</div>
    }
    return (
      <div className="space-y-3">
        {items.map(({ pack, count, mistakes, sub }) => (
          <button
            key={pack.id}
            onClick={() => setPendingLimit(pack)}
            className="w-full text-left bg-white rounded-xl shadow-sm border border-gray-100 p-4 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800">{pack.name}</span>
              <span className="text-xs text-red-500 font-medium">{count} 题 / 错 {mistakes} 次</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{sub ?? '点击选择学习数量，随机抽取练习'}</p>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <header className="flex items-center mb-4">
        <button onClick={onBack} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-800">错题本</h1>
          <p className="text-xs text-gray-400">
            {tab === 'active'
              ? `当前错题 ${totalActive} 道 · 累计做错 ${totalActiveMistakes} 次`
              : `历史错题 ${totalHistory} 道 · 累计做错 ${totalHistoryMistakes} 次`}
          </p>
        </div>
      </header>

      <div className="flex gap-2 mb-4">
        {tabBtn('active', '当前错题', totalActive)}
        {tabBtn('history', '历史错题', totalHistory)}
      </div>

      {tab === 'active' ? (
        renderPackList(
          activePacks.map((x) => ({ pack: x.pack, count: x.active.count, mistakes: x.active.mistakes })),
        )
      ) : (
        renderPackList(
          historyPacks.map((x) => ({
            pack: x.pack,
            count: x.history.count,
            mistakes: x.history.mistakes,
            sub: `已掌握 ${x.history.resolved} 题，其余仍会做错 · 点击选择学习数量`,
          })),
        )
      )}

      {pendingLimit && (
        <QuestionCountDialog
          onConfirm={(count) => {
            if (tab === 'active') onStartWrongStudy(pendingLimit, count)
            else onStartWrongHistoryStudy(pendingLimit, count)
            setPendingLimit(null)
          }}
          onCancel={() => setPendingLimit(null)}
        />
      )}
    </div>
  )
}
