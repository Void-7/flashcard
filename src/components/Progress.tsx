interface Props {
  total: number
  reviewed: number
  className?: string
}

export default function Progress({ total, reviewed, className = '' }: Props) {
  const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0
  return (
    <div className={`flex items-center gap-3 text-sm text-gray-500 ${className}`}>
      <span>{reviewed}/{total}</span>
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
