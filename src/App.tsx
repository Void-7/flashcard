import { useState, useEffect } from 'react'
import type { AppView, CardPack, StudyMode, QuestionLimit } from './types'
import { storage } from './utils/storage'
import { initFsrsCard } from './utils/scheduler'
import { createAITrainerPack, getAITrainerCards } from './data/knowledge'
import { createExamAnswerPack, getExamAnswerCards } from './data/examAnswer'
import { createTheoryPack, getTheoryCards } from './data/theoryQuestions'
import PackList from './components/PackList'
import PackDetail from './components/PackDetail'
import CardViewer from './components/CardViewer'

function seedPack(pack: CardPack, cards: import('./types').CardItem[], force: boolean = false) {
  storage.savePack(pack)
  if (force) {
    storage.setCards(pack.id, cards)
    storage.saveAllCardStates(cards.map((c) => ({ metaId: c.id, fsrsCard: initFsrsCard() })))
    return
  }
  storage.setCards(pack.id, cards)
  const existing = storage.getAllCardStates()
  const existingIds = new Set(existing.map((s) => s.metaId))
  const newStates = cards
    .filter((c) => !existingIds.has(c.id))
    .map((c) => ({ metaId: c.id, fsrsCard: initFsrsCard() }))
  if (newStates.length > 0) {
    storage.saveAllCardStates([...existing, ...newStates])
  } else if (existing.length !== cards.length) {
    storage.saveAllCardStates(cards.map((c) => {
      const s = existing.find((s) => s.metaId === c.id)
      return s || { metaId: c.id, fsrsCard: initFsrsCard() }
    }))
  }
}

const PACK_BUILDERS: { pack: CardPack; cards: import('./types').CardItem[] }[] = [
  { pack: createTheoryPack(), cards: getTheoryCards() },
  { pack: createAITrainerPack(), cards: getAITrainerCards() },
  { pack: createExamAnswerPack(), cards: getExamAnswerCards() },
]

export default function App() {
  const [view, setView] = useState<AppView>('pack-list')
  const [studyConfig, setStudyConfig] = useState<{
    mode: StudyMode
    tagId?: string
    limit: QuestionLimit
  } | null>(null)
  const [packs, setPacks] = useState<CardPack[]>([])
  const [currentPackId, setCurrentPackId] = useState<string | null>(null)

  useEffect(() => {
    const existing = storage.getPacks()
    const existingIds = new Set(existing.map((p) => p.id))
    for (const { pack, cards } of PACK_BUILDERS) {
      if (!existingIds.has(pack.id)) {
        seedPack(pack, cards)
      } else {
        const oldCards = storage.getCards(pack.id)
        if (oldCards.length !== cards.length || cards.length > 0 && cards[0].id !== oldCards[0]?.id) {
          seedPack(pack, cards, true)
        }
      }
    }
    setPacks(storage.getPacks())
  }, [])

  function handleSelectPack(packId: string) {
    setCurrentPackId(packId)
    setStudyConfig(null)
    setView('pack-detail')
  }

  function handleStart(mode: StudyMode, tagId: string | undefined, limit: QuestionLimit) {
    setStudyConfig({ mode, tagId, limit })
    setView('study')
  }

  function handleFinish() {
    setStudyConfig(null)
    setView('pack-detail')
  }

  function handleBack() {
    setStudyConfig(null)
    setCurrentPackId(null)
    setView('pack-list')
    setPacks(storage.getPacks())
  }

  const currentPack = currentPackId ? packs.find((p) => p.id === currentPackId) : null

  if (view === 'study' && studyConfig && currentPack) {
    return (
      <CardViewer
        pack={currentPack}
        mode={studyConfig.mode}
        tagId={studyConfig.tagId}
        limit={studyConfig.limit}
        onFinish={handleFinish}
      />
    )
  }

  if (view === 'pack-detail' && currentPack) {
    return (
      <PackDetail
        pack={currentPack}
        onStart={handleStart}
        onBack={handleBack}
      />
    )
  }

  if (packs.length > 0) {
    return (
      <PackList
        packs={packs}
        onSelect={handleSelectPack}
      />
    )
  }

  return (
    <div className="flex items-center justify-center min-h-dvh">
      <p className="text-gray-400">加载中...</p>
    </div>
  )
}
