import { useState, useEffect, useCallback } from 'react'
import type { PersistentCard } from './utils/scheduler'
import { loadState, saveState } from './utils/storage'
import DeckList from './components/DeckList'
import CardViewer from './components/CardViewer'
import type { AppView } from './types'

export default function App() {
  const [persistentCards, setPersistentCards] = useState<PersistentCard[]>(() => loadState())
  const [view, setView] = useState<AppView>('deck-list')
  const [currentDeckId, setCurrentDeckId] = useState<string | null>(null)

  useEffect(() => {
    saveState(persistentCards)
  }, [persistentCards])

  const handleUpdateCards = useCallback((cards: PersistentCard[]) => {
    setPersistentCards(cards)
  }, [])

  const handleSelectDeck = useCallback((deckId: string) => {
    setCurrentDeckId(deckId)
    setView('study')
  }, [])

  const handleBack = useCallback(() => {
    setView('deck-list')
    setCurrentDeckId(null)
  }, [])

  if (view === 'study' && currentDeckId) {
    return (
      <CardViewer
        deckId={currentDeckId}
        persistentCards={persistentCards}
        onUpdateCards={handleUpdateCards}
        onBack={handleBack}
      />
    )
  }

  return (
    <DeckList
      persistentCards={persistentCards}
      onSelectDeck={handleSelectDeck}
    />
  )
}
