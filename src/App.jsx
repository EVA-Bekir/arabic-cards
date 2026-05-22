import { useState, useEffect } from 'react'
import AddWordForm from './components/AddWordForm.jsx'
import CardList from './components/CardList.jsx'
import './App.css'

const STORAGE_KEY = 'arabic-flash-cards'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setCards(JSON.parse(saved))
      } catch (error) {
        console.error('Невозможно прочитать сохранённые карточки', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
  }, [cards])

  const handleAddWord = (word) => {
    const newCard = {
      id: Date.now().toString(),
      ...word,
      isLearned: false,
    }
    setCards((prevCards) => [newCard, ...prevCards])
  }

  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }

  const toggleLearned = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, isLearned: !card.isLearned }
          : card
      )
    )
  }
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Учите арабские слова</p>
          <h1>Минималистичные карточки</h1>
          <p className="lead">
            Добавляйте слово и перевод, а затем нажимайте на карточку, чтобы
            увидеть ответ.
          </p>
        </div>
      </section>

      <section className="content-panel">
        <div className="panel-block">
          <h2>Новое слово</h2>
          <AddWordForm onAdd={handleAddWord} />
        </div>

        <div className="panel-block">
          <h2>Ваши карточки</h2>
          <CardList cards={cards} onDelete={handleDeleteCard}
          onToggleLearned={toggleLearned} />
        </div>
      </section>
    </main>
  )
}
