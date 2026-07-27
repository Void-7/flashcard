import { useState, useMemo } from 'react'
import type { QuestionContent } from '../types'
import RatingButtons from './RatingButtons'
import { Rating } from 'ts-fsrs'

function shuffleIndices(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Props {
  content: QuestionContent
  onRate: (rating: Rating) => void
}

export default function QuestionCard({ content, onRate }: Props) {
  const [selected, setSelected] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [rated, setRated] = useState(false)

  const isMultiple = content.type === 'multiple'
  const origAnswer = useMemo(
    () => (Array.isArray(content.answer) ? content.answer : [content.answer]),
    [content.answer],
  )

  const shuffleMap = useMemo(() => shuffleIndices(content.options.length), [content.options, content.question])
  const shuffledOptions = useMemo(
    () => shuffleMap.map((i) => content.options[i]),
    [shuffleMap, content.options],
  )
  const shuffledAnswer = useMemo(
    () => origAnswer.map((origIdx) => shuffleMap.indexOf(origIdx)),
    [origAnswer, shuffleMap],
  )

  function toggleOption(shuffledIdx: number) {
    if (submitted) return
    setSelected((prev) => {
      if (isMultiple) {
        return prev.includes(shuffledIdx)
          ? prev.filter((i) => i !== shuffledIdx)
          : [...prev, shuffledIdx]
      }
      return [shuffledIdx]
    })
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  function handleRate(r: Rating) {
    setRated(true)
    onRate(r)
  }

  if (rated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <div className="text-4xl mb-3 text-green-500">✓</div>
          <p className="text-sm text-gray-500">已记录评分</p>
        </div>
      </div>
    )
  }

  const isCorrect = submitted &&
    selected.length === shuffledAnswer.length &&
    selected.every((s) => shuffledAnswer.includes(s))

  return (
    <div className="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col">
        <div className="p-6 flex-1 flex flex-col items-center min-h-[280px]">
          <div className="mb-2">
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {content.type === 'true-false' ? '判断题' : content.type === 'multiple' ? '多选题' : '单选题'}
            </span>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">{content.question}</h2>

          <div className="w-full space-y-2">
            {shuffledOptions.map((opt, si) => {
              const isSelected = selected.includes(si)
              const isAnswer = shuffledAnswer.includes(si)
              let cls = 'w-full text-left p-3 rounded-xl border text-sm transition-colors '

              if (submitted) {
                if (isAnswer && isSelected) cls += 'border-green-400 bg-green-50 text-green-800'
                else if (isAnswer) cls += 'border-green-300 bg-green-50/50 text-green-700'
                else if (isSelected) cls += 'border-red-300 bg-red-50 text-red-700'
                else cls += 'border-gray-200 text-gray-500'
              } else if (isSelected) {
                cls += 'border-blue-400 bg-blue-50 text-blue-700'
              } else {
                cls += 'border-gray-200 text-gray-700 active:bg-gray-50'
              }

              return (
                <button key={si} onClick={() => toggleOption(si)} className={cls}>
                  <span className="font-mono text-xs mr-2 opacity-60">{String.fromCharCode(65 + si)}.</span>
                  {opt}
                </button>
              )
            })}
          </div>

          {!submitted && selected.length > 0 && (
            <button
              onClick={handleSubmit}
              className="mt-4 w-full py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md active:bg-blue-600 active:scale-[0.98] transition-all"
            >
              提交答案
            </button>
          )}

          {submitted && (
            <div className={`mt-4 text-center ${isCorrect ? 'text-green-600' : 'text-red-600'} font-semibold`}>
              {isCorrect ? '回答正确！' : '回答错误'}
              {content.explanation && (
                <p className="text-sm font-normal text-gray-500 mt-1">{content.explanation}</p>
              )}
            </div>
          )}
        </div>

        {submitted && (
          <div className="border-t border-gray-100 p-6">
            <RatingButtons onRate={handleRate} />
          </div>
        )}
      </div>
    </div>
  )
}
