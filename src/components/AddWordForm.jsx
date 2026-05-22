import { useState } from 'react'

export default function AddWordForm({ onAdd }) {
  const [arabic, setArabic] = useState('')
  const [translation, setTranslation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedArabic = arabic.trim()
    const trimmedTranslation = translation.trim()

    if (!trimmedArabic || !trimmedTranslation) {
      return
    }

    onAdd({ arabic: trimmedArabic, translation: trimmedTranslation })
    setArabic('')
    setTranslation('')
  }

  return (
    <form className="add-word-form" onSubmit={handleSubmit}>
      <label>
        Арабское слово
        <input
          value={arabic}
          onChange={(event) => setArabic(event.target.value)}
          placeholder="مثال"
          autoComplete="off"
        />
      </label>

      <label>
        Перевод
        <input
          value={translation}
          onChange={(event) => setTranslation(event.target.value)}
          placeholder="пример"
          autoComplete="off"
        />
      </label>

      <button type="submit">
        Добавить
      </button>
    </form>
  )
}
