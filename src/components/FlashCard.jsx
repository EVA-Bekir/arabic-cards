import { useState } from 'react'

export default function FlashCard({ card, onDelete, onToggleLearned }) {
  const [showTranslation, setShowTranslation] = useState(false)
  const [flipped, setFlipped] = useState(false)

  const handleToggle = () => {
    setFlipped((prev) => !prev)
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    onDelete(card.id)
  }

  return (
    <article
  className={`flash-card ${flipped ? 'flipped' : ''} ${
    card.isLearned ? 'learned' : ''
  }`}
      onClick={handleToggle}
      aria-label="Флеш-карта"
    >
      <div className="flash-card-inner">
        <div className="flash-card-face flash-card-front">
          <span className="card-label">Арабское</span>
          <p className="card-text" dir="rtl">
            {card.arabic}
          </p>
        </div>

        <div className="flash-card-face flash-card-back">
          <span className="card-label">Перевод</span>
          <p className="card-text">{card.translation}</p>
        </div>
      </div>

      <button
  className="delete-button"
  type="button"
  onClick={handleDelete}
>
  Удалить
</button>

<button
  className="learned-button"
  type="button"
  onClick={(e) => {
    e.stopPropagation()
    onToggleLearned(card.id)
  }}
>
  {card.isLearned ? 'Выучено ✅' : 'Не выучено'}
</button>
    </article>
  )
}
