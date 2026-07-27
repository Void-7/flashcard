import { useMemo, useState } from 'react'
import { storage } from '../utils/storage'
import type { ReviewLog } from '../types'

interface Props {
  onBack: () => void
}

function groupByDate(logs: ReviewLog[]): Map<string, number> {
  const map = new Map<string, number>()
  for (const l of logs) {
    const d = new Date(l.reviewedAt)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    map.set(key, (map.get(key) || 0) + 1)
  }
  return map
}

function fillDateRange(days: number): string[] {
  const result: string[] = []
  const now = new Date()
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    result.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`)
  }
  return result
}

function formatLabel(key: string): string {
  const parts = key.split('-')
  return `${parseInt(parts[1])}/${parseInt(parts[2])}`
}

// Simple pure SVG bar chart – no third-party libs
function BarChart({ data, height = 150 }: { data: { label: string; value: number }[]; height?: number }) {
  const max = Math.max(...data.map((d) => d.value), 1)
  const barWidth = Math.max(4, Math.min(20, 480 / data.length - 2))
  const gap = 2

  return (
    <svg width="100%" height={height} viewBox={`0 0 480 ${height}`} preserveAspectRatio="xMidYMid meet" className="overflow-visible">
      {data.map((d, i) => {
        const barH = (d.value / max) * (height - 20)
        const x = i * (barWidth + gap) + 4
        const y = height - 10 - barH
        return (
          <g key={i}>
            <rect
              x={x} y={y} width={barWidth} height={barH} rx={2}
              className="fill-blue-400 hover:fill-blue-600 transition-colors"
            />
            {d.value > 0 && (
              <text x={x + barWidth / 2} y={y - 4} textAnchor="middle" fontSize="8" className="fill-gray-500">
                {d.value}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

export default function StatsPage({ onBack }: Props) {
  const [days, setDays] = useState<7 | 30>(30)
  const logs = storage.getAllReviewLogs()
  const totalReviews = logs.length
  const today = new Date()
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const todayCount = logs.filter((l) => {
    const d = new Date(l.reviewedAt)
    const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return k === todayKey
  }).length

  const dailyData = useMemo(() => {
    const grouped = groupByDate(logs)
    const dates = fillDateRange(days)
    return dates.map((d) => ({
      label: formatLabel(d),
      value: grouped.get(d) || 0,
    }))
  }, [logs, days])

  const avgDaily = totalReviews > 0 ? (totalReviews / Math.max(1, days)).toFixed(1) : '0'

  let ratingDist: Record<string, number> = { Again: 0, Hard: 0, Good: 0, Easy: 0 }
  for (const l of logs) {
    const key = ['Again', 'Hard', 'Good', 'Easy'][l.rating] || 'Unknown'
    ratingDist[key]++
  }

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <header className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 text-gray-500 active:text-gray-700 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-gray-800">学习统计</h1>
      </header>

      {/* Overview cards */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">{totalReviews}</div>
          <div className="text-xs text-gray-400 mt-1">总计复习</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <div className="text-2xl font-bold text-blue-500">{todayCount}</div>
          <div className="text-xs text-gray-400 mt-1">今日复习</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">{avgDaily}</div>
          <div className="text-xs text-gray-400 mt-1">日均({days}天)</div>
        </div>
      </div>

      {/* Rating distribution */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">评分分布</h2>
        <div className="flex gap-2 h-6">
          {Object.entries({
            Again: 'bg-red-400',
            Hard: 'bg-orange-400',
            Good: 'bg-green-400',
            Easy: 'bg-blue-400',
          }).map(([key, color]) => {
            const pct = totalReviews > 0 ? (ratingDist[key] / totalReviews) * 100 : 0
            return (
              <div
                key={key}
                className={`${color} rounded-full flex items-center justify-center text-xs text-white font-medium transition-all`}
                style={{ width: `${Math.max(pct, key === 'Good' ? 5 : 2)}%`, minWidth: '30px' }}
              >
                {key}
              </div>
            )
          })}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Again {ratingDist.Again}</span>
          <span>Hard {ratingDist.Hard}</span>
          <span>Good {ratingDist.Good}</span>
          <span>Easy {ratingDist.Easy}</span>
        </div>
      </div>

      {/* Learning curve */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-700">学习曲线</h2>
          <div className="flex gap-1">
            <button
              onClick={() => setDays(7)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors
                ${days === 7 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}`}
            >
              7天
            </button>
            <button
              onClick={() => setDays(30)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors
                ${days === 30 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}`}
            >
              30天
            </button>
          </div>
        </div>
        <BarChart data={dailyData} />
      </div>
    </div>
  )
}
