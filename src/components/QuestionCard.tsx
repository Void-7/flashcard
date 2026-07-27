import { useState } from 'react'
import type { QuestionMeta } from '../types'
import RatingButtons from './RatingButtons'
import { Rating } from 'ts-fsrs'

interface Props {
  meta: QuestionMeta
  onRate: (rating: Rating) => void
}

export default function QuestionCard({ meta, onRate }: Props) {
  const [selected, setSelected] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  const isMultiple = meta.type === 'multiple'
  const isTrueFalse = meta.type === 'true-false'

  function toggleOption(idx: number) {
    if (submitted) return
    setSelected((prev) => {
      if (isMultiple) {
        if (prev.includes(idx)) {
          return prev.filter((i) => i !== idx)
        }
        return [...prev, idx]
      }
      return [idx]
    })
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  function handleRate(rating: Rating) {
    setSelected([])
    setSubmitted(false)
    onRate(rating)
  }

  const answer = Array.isArray(meta.answer) ? meta.answer : [meta.answer]
  const isCorrect =
    submitted &&
    selected.length === answer.length &&
    selected.every((s) => answer.includes(s))

  return (
    <div class="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100
        flex flex-col">
        <div class="p-6 flex-1 flex flex-col items-center min-h-[280px]">
          <div class="mb-2">
            <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {isTrueFalse ? '判断题' : isMultiple ? '多选题' : '单选题'}
            </span>
          </div>

          <h2 class="text-lg font-semibold text-gray-800 text-center mb-4">
            {meta.question}
          </h2>

          <div class="w-full space-y-2">
            {meta.options.map((opt, idx) => {
              const isSelected = selected.includes(idx)
              const isAnswerOption = answer.includes(idx)
              let btnClass = 'w-full text-left p-3 rounded-xl border text-sm transition-colors '

              if (submitted) {
                if (isAnswerOption && isSelected) {
                  btnClass += 'border-green-400 bg-green-50 text-green-800'
                } else if (isAnswerOption) {
                  btnClass += 'border-green-300 bg-green-50/50 text-green-700'
                } else if (isSelected) {
                  btnClass += 'border-red-300 bg-red-50 text-red-700'
                } else {
                  btnClass += 'border-gray-200 text-gray-500'
                }
              } else if (isSelected) {
                btnClass += 'border-blue-400 bg-blue-50 text-blue-700'
              } else {
                btnClass += 'border-gray-200 text-gray-700 active:bg-gray-50'
              }

              return (
                <button
                  key={idx}
                  onClick={() => toggleOption(idx)}
                  class={btnClass}
                >
                  <span class="font-mono text-xs mr-2 opacity-60">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>

          {!submitted && selected.length > 0 && (
            <button
              onClick={handleSubmit}
              class="mt-4 w-full py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md
                active:bg-blue-600 active:scale-[0.98] transition-all"
            >
              提交答案
            </button>
          )}

          {submitted && (
            <div class={`mt-4 text-center ${isCorrect ? 'text-green-600' : 'text-red-600'} font-semibold`}>
              {isCorrect ? '回答正确！' : '回答错误'}
              {meta.explanation && (
                <p class="text-sm font-normal text-gray-500 mt-1">{meta.explanation}</p>
              )}
            </div>
          )}
        </div>

        {submitted && (
          <div class="border-t border-gray-100 p-6">
            <RatingButtons onRate={handleRate} />
          </div>
        )}
      </div>
    </div>
  )
}
