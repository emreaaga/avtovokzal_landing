import {create} from 'zustand'

type Language = 'ru' | 'uz'

interface LanguageStore {
    language: Language
    setLanguage: (lang: Language) => void,
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: 'uz',
    setLanguage: (lang) => set({ language: lang }),
  }))
