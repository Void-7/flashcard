import { useState, useMemo } from 'react'
import type { CardPack, QuestionLimit } from '../types'
import { storage } from '../utils/storage'
import QuestionCountDialog from './QuestionCountDialog'

interface Props {
  packs: CardPack[]
  onStartWrongStudy: (pack: CardPack, limit: QuestionLimit) => void
  onBack: () => void
}

export default function WrongBook({ packs, onStartWrongStudy, onBack }: Props) {
  const [pendingLimit, setPendingLimit] = useState<CardPack | null>(null)
  const wrongIds = useMemo(() => new Set(storage.getWrongCardIds()), [])

  const packWrongCounts = useMemo(() => {
    return packs.map((p) => {
      const cards = storage.getCards(p.id)
      const count = cards.filter((c) => wrongIds.has(c.id)).length
      return { pack: p, count }
    }).filter((x) => x.count > 0)
  }, [packs, wrongIds])

  const totalWrong = packWrongCounts.reduce((s, x) => s + x.count, 0)

  if (totalWrong === 0) {
    return (
      <div className="px-4 py-6 max-w-lg mx-auto">
        <header className="flex items-center mb-6">
          <button onClick={onBack} className="mr-3 text-gray-500 active:text-gray-700 p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-800">错题本</h1>
        </header>
        <div className="text-center text-gray-400 py-12">暂无错题记录</div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <header className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-800">错题本</h1>
          <p className="text-xs text-gray-400">共 {totalWrong} 道错题</p>
        </div>
      </header>

      <div className="space-y-3">
        {packWrongCounts.map(({ pack, count }) => (
          <button
            key={pack.id}
            onClick={() => setPendingLimit(pack)}
            className="w-full text-left bg-white rounded-xl shadow-sm border border-gray-100 p-4 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800">{pack.name}</span>
              <span className="text-xs text-red-500 font-medium">{count} 题</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">点击选择学习数量</p>
          </button>
        ))}
      </div>

      {pendingLimit && (
        <QuestionCountDialog
          onConfirm={(count) => {
            onStartWrongStudy(pendingLimit, count)
            setPendingLimit(null)
          }}
          onCancel={() => setPendingLimit(null)}
        />
      )}
    </div>
  )
}