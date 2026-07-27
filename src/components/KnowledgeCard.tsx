import type { KnowledgeMeta } from '../types'
import RatingButtons from './RatingButtons'
import { Rating } from 'ts-fsrs'

interface Props {
  meta: KnowledgeMeta
  onRate: (rating: Rating) => void
}

export default function KnowledgeCard({ meta, onRate }: Props) {
  return (
    <div class="flex flex-col items-center justify-center min-h-0 flex-1 w-full px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100
        flex flex-col">
        <div class="p-6 flex-1 flex flex-col items-center justify-center min-h-[280px]">
          <div class="text-center w-full">
            <code class="inline-block bg-gray-50 text-blue-700 font-mono text-sm px-3 py-1 rounded-md mb-3">
              {meta.front.title}
            </code>
            <h2 class="text-lg font-semibold text-gray-800 mt-2">
              {meta.front.description}
            </h2>
          </div>
        </div>

        <div class="border-t border-gray-100 p-6">
          <div class="text-center mb-4">
            <p class="text-xs text-gray-400 mb-2">代码示例</p>
            <pre class="bg-gray-50 text-gray-700 text-sm font-mono text-left p-3 rounded-lg overflow-x-auto">
              <code>{meta.back.code}</code>
            </pre>
            {meta.back.notes && (
              <p class="text-xs text-gray-400 mt-2">{meta.back.notes}</p>
            )}
          </div>
          <RatingButtons onRate={onRate} />
        </div>
      </div>
    </div>
  )
}
