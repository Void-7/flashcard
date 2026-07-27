interface Props {
  total: number
  currentIndex: number
  ratedIds: Set<number>
  onJump: (idx: number) => void
}

export default function CardIndexNav({ total, currentIndex, ratedIds, onJump }: Props) {
  if (total <= 1) return null
  return (
    <div className="flex items-center justify-center gap-1.5 px-4 py-2 overflow-x-auto">
      {Array.from({ length: total }, (_, i) => {
        const isCurrent = i === currentIndex
        const isRated = ratedIds.has(i)
        let cls = 'w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center shrink-0 transition-colors '

        if (isCurrent && isRated) cls += 'bg-green-500 text-white'
        else if (isCurrent) cls += 'bg-blue-500 text-white'
        else if (isRated) cls += 'bg-green-100 text-green-700'
        else cls += 'bg-gray-100 text-gray-500 hover:bg-gray-200'

        return (
          <button key={i} onClick={() => onJump(i)} className={cls}>
            {i + 1}
          </button>
        )
      })}
    </div>
  )
}
