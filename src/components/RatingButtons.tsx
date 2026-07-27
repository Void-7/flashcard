import { Rating } from 'ts-fsrs'

interface Props {
  onRate: (rating: Rating) => void
  disabled?: boolean
}

const labels: { rating: Rating; label: string; color: string }[] = [
  { rating: Rating.Again, label: 'Again', color: 'bg-red-500 active:bg-red-600' },
  { rating: Rating.Hard, label: 'Hard', color: 'bg-orange-500 active:bg-orange-600' },
  { rating: Rating.Good, label: 'Good', color: 'bg-green-500 active:bg-green-600' },
  { rating: Rating.Easy, label: 'Easy', color: 'bg-blue-500 active:bg-blue-600' },
]

export default function RatingButtons({ onRate, disabled }: Props) {
  return (
    <div class="flex gap-2 w-full max-w-md mx-auto">
      {labels.map(({ rating, label, color }) => (
        <button
          key={label}
          onClick={() => onRate(rating)}
          disabled={disabled}
          class={`flex-1 py-3 rounded-xl text-white font-semibold text-sm transition-opacity
            ${color}
            ${disabled ? 'opacity-40 cursor-not-allowed' : 'shadow-md active:scale-95'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
