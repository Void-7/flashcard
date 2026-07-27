import { useState, useEffect } from 'react'
import type { AppView, CardPack, StudyMode } from './types'
import { storage } from './utils/storage'
import { createAITrainerPack, getAITrainerCards } from './data/knowledge'
import PackList from './components/PackList'
import PackDetail from './components/PackDetail'
import CardViewer from './components/CardViewer'

function seedDataIfEmpty() {
  const existing = storage.getPacks()
  if (existing.length > 0) return
  const pack = createAITrainerPack()
  const cards = getAITrainerCards()
  storage.savePack(pack)
  storage.setCards(pack.id, cards)
  const states = storage.getAllCardStates()
  if (states.length === 0) {
    storage.saveAllCardStates(cards.map((c) => ({ metaId: c.id, fsrsCard: initFsrsCard() })))
  }
}

export default function App() {
  const [view, setView] = useState<AppView>('pack-list')
  const [studyConfig, setStudyConfig] = useState<{
    mode: StudyMode
    tagId?: string
  } | null>(null)
  const [packs, setPacks] = useState<CardPack[]>([])

  useEffect(() => {
    seedDataIfEmpty()
    setPacks(storage.getPacks())
  }, [])

  function handleSelectPack(packId: string) {
    setStudyConfig(null)
    setView('pack-detail')
  }

  function handleStart(mode: StudyMode, tagId?: string) {
    setStudyConfig({ mode, tagId })
    setView('study')
  }

  function handleFinish() {
    setStudyConfig(null)
    setView('pack-detail')
    setPacks(storage.getPacks())
  }

  function handleBack() {
    setStudyConfig(null)
    setView('pack-list')
    setPacks(storage.getPacks())
  }

  const currentPack = packs.length > 0 ? packs[0] : null

  if (view === 'study' && studyConfig && currentPack) {
    return (
      <CardViewer
        pack={currentPack}
        mode={studyConfig.mode}
        tagId={studyConfig.tagId}
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

  if (currentPack) {
    return (
      <PackList
        pack={currentPack}
        onSelect={handleSelectPack}
      />
    )
  }

  return (
    <div class="flex items-center justify-center min-h-dvh">
      <p class="text-gray-400">加载中...</p>
    </div>
  )
}
