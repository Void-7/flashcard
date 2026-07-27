import { type QuestionLimit, QUESTION_LIMITS } from '../types'

interface Props {
  onConfirm: (count: QuestionLimit) => void
  onCancel: () => void
}

export default function QuestionCountDialog({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">选择刷题数量</h2>
        <p className="text-xs text-gray-400 text-center mb-4">每次学习将自动抽选对应数量的题目</p>

        <div className="space-y-2">
          {QUESTION_LIMITS.map((n) => (
            <button
              key={n}
              onClick={() => onConfirm(n)}
              className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm
                active:bg-gray-50 active:scale-[0.98] transition-all"
            >
              {n} 题
            </button>
          ))}
        </div>

        <button
          onClick={onCancel}
          className="w-full mt-3 py-2 text-sm text-gray-400 active:text-gray-600"
        >
          取消
        </button>
      </div>
    </div>
  )
}
