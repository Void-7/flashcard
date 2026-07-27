import { useState } from 'react'
import type { KnowledgeContent } from '../types'
import RatingButtons from './RatingButtons'
import { Rating } from 'ts-fsrs'

interface Props {
  content: KnowledgeContent
  onRate: (rating: Rating) => void
}

export default function KnowledgeCard({ content, onRate }: Props) {
  const [flipped, setFlipped] = useState(false)
  const [rated, setRated] = useState(false)

  function handleRate(r: Rating) {
    setRated(true)
    onRate(r)
  }

  if (rated) {
    return (
      <div class="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <div class="text-4xl mb-3 text-green-500">✓</div>
          <p class="text-sm text-gray-500">已记录评分</p>
        </div>
      </div>
    )
  }

  return (
    <div class="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
      <div class="w-full max-w-md" style={{ perspective: '1000px' }}>
        <div
          onClick={!flipped ? () => setFlipped(true) : undefined}
          class={`relative w-full transition-transform duration-500 cursor-pointer select-none
            ${flipped ? '' : 'active:scale-[0.98]'}`}
          style={{ transformStyle: 'preserve-3d', minHeight: '320px' }}
        >
          <div
            class={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full
              flex flex-col items-center justify-center absolute inset-0
              ${flipped ? 'hidden' : ''}`}
            style={{ backfaceVisibility: 'hidden', minHeight: '320px' }}
          >
            <div class="text-center">
              <code class="inline-block bg-blue-50 text-blue-700 font-mono text-sm px-3 py-1 rounded-md mb-3">
                {content.title}
              </code>
              <h2 class="text-lg font-semibold text-gray-800 mt-2 leading-relaxed">
                {content.description}
              </h2>
            </div>
            <p class="text-xs text-gray-400 mt-6">点击卡片翻转查看代码示例</p>
          </div>

          <div
            class={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full
              flex flex-col items-center justify-center
              ${flipped ? '' : 'hidden'}`}
            style={{ backfaceVisibility: 'hidden', minHeight: '320px' }}
          >
            <div class="text-center w-full">
              <p class="text-xs text-gray-400 mb-3">代码示例</p>
              <pre class="bg-gray-50 text-gray-700 text-sm font-mono text-left p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                {content.code}
              </pre>
              {content.notes && (
                <p class="text-xs text-gray-400 mt-3">{content.notes}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div class="mt-4 w-full max-w-md">
          <RatingButtons onRate={handleRate} />
        </div>
      )}
    </div>
  )
}
