import ru from '@/store/ru.json'
import uz from '@/store/uz.json'
import { useLanguageStore } from '@/store/languageStore'

const translations = {
  ru,
  uz,
}

export const useTranslation = () => {
  const lang = useLanguageStore((state) => state.language)
  const t = translations[lang]
  return t
}
