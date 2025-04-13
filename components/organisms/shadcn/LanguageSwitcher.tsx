'use client'

import { useLanguageStore } from '@/store/languageStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/molecules/shadcn/select'

export const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language)
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  
return (
  <Select value={language} onValueChange={(value) => setLanguage(value as 'ru' | 'uz')}>
    <SelectTrigger className="w-auto">
      <SelectValue placeholder="🇺🇿 O‘zbekcha" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="uz">🇺🇿 O‘zbekcha</SelectItem>
      <SelectItem value="ru">🇷🇺 Русский</SelectItem>
    </SelectContent>
  </Select>
)
}
