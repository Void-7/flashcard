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
      <div className="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <div className="text-4xl mb-3 text-green-500">✓</div>
          <p className="text-sm text-gray-500">已记录评分</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
      <div
        className="w-full max-w-md cursor-pointer select-none"
        style={{ perspective: '1000px' }}
        onClick={() => setFlipped((v) => !v)}
      >
        <div
          className="relative w-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.5s',
            minHeight: '320px',
          }}
        >
          {/* 正面 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              position: 'absolute',
              inset: 0,
              minHeight: '320px',
            }}
          >
            <div className="text-center">
              <code className="inline-block bg-blue-50 text-blue-700 font-mono text-sm px-3 py-1 rounded-md mb-3">
                {content.title}
              </code>
              <h2 className="text-lg font-semibold text-gray-800 mt-2 leading-relaxed">
                {content.description}
              </h2>
            </div>
            <p className="text-xs text-gray-400 mt-6">点击卡片翻转</p>
          </div>

          {/* 背面：正面内容 + 代码对照 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 w-full"
            style={{
              backfaceVisibility: 'hidden',
              position: 'absolute',
              inset: 0,
              minHeight: '320px',
              transform: 'rotateY(180deg)',
              overflowY: 'auto',
            }}
          >
            <div className="text-center mb-3">
              <code className="inline-block bg-blue-50 text-blue-700 font-mono text-sm px-3 py-1 rounded-md mb-2">
                {content.title}
              </code>
              <h2 className="text-base font-semibold text-gray-800">
                {content.description}
              </h2>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-400 mb-2">代码示例</p>
              <pre className="bg-gray-50 text-gray-700 text-sm font-mono text-left p-3 rounded-lg overflow-x-auto whitespace-pre-wrap">
                {content.code}
              </pre>
              {content.notes && (
                <p className="text-xs text-gray-400 mt-2">{content.notes}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="mt-4 w-full max-w-md">
          <RatingButtons onRate={handleRate} />
        </div>
      )}
    </div>
  )
}
