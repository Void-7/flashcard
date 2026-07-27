interface Props {
  total: number
  currentIndex: number
  ratedIds?: Set<number>
  examResults?: (boolean | null)[]
  sections?: { label: string; start: number; end: number }[]
  onJump: (idx: number) => void
}

export default function CardIndexNav({ total, currentIndex, ratedIds, examResults, sections, onJump }: Props) {
  if (total <= 1) return null
  const hasExam = !!examResults

  function getButtonStyle(i: number): string {
    const isCur = i === currentIndex
    if (hasExam) {
      const res = examResults![i]
      if (isCur) return 'ring-2 ring-blue-500 bg-blue-500 text-white'
      if (res === true) return 'bg-green-500 text-white'
      if (res === false) return 'bg-red-500 text-white'
      return 'bg-gray-100 text-gray-500'
    }
    const isRated = ratedIds?.has(i)
    if (isCur && isRated) return 'ring-2 ring-green-500 bg-green-500 text-white'
    if (isCur) return 'ring-2 ring-blue-500 bg-blue-500 text-white'
    if (isRated) return 'bg-green-100 text-green-700'
    return 'bg-gray-100 text-gray-500'
  }

  return (
    <div className="mx-4 mb-2 border border-gray-200 rounded-xl bg-gray-50/80 p-2 max-h-[120px] overflow-y-auto">
      {sections ? (
        sections.map((sec) => (
          <div key={sec.label} className="mb-1 last:mb-0">
            <div className="text-[10px] text-gray-400 font-medium px-1 mb-0.5">{sec.label}</div>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: sec.end - sec.start }, (_, j) => {
                const i = sec.start + j
                const cls = getButtonStyle(i)
                return (
                  <button key={i} onClick={() => onJump(i)}
                    className={`w-6 h-6 rounded text-[10px] font-medium flex items-center justify-center shrink-0 transition-colors ${cls}`}>
                    {i + 1}
                  </button>
                )
              })}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-wrap gap-1 justify-center">
          {Array.from({ length: total }, (_, i) => {
            const cls = getButtonStyle(i)
            return (
              <button key={i} onClick={() => onJump(i)}
                className={`w-6 h-6 rounded text-[10px] font-medium flex items-center justify-center shrink-0 transition-colors ${cls}`}>
                {i + 1}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
