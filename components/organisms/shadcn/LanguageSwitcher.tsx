'use client'

import { useLanguageStore } from '@/store/languageStore'

export const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language)
  const setLanguage = useLanguageStore((state) => state.setLanguage)

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('ru')}
        className={language === 'ru' ? 'font-bold' : ''}
      >
        Русский
      </button>
      <button
        onClick={() => setLanguage('uz')}
        className={language === 'uz' ? 'font-bold' : ''}
      >
        O‘zbekcha
      </button>
    </div>
  )
}
