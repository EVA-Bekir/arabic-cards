import FlashCard from './FlashCard.jsx'

export default function CardList({ cards, onDelete, onToggleLearned }) {
  if (cards.length === 0) {
    return (
      <div className="empty-state">
        <p>Пока нет карточек. Добавьте первое слово.</p>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <FlashCard key={card.id} card={card} onDelete={onDelete} onToggleLearned={onToggleLearned} />
      ))}
    </div>
  )
}
