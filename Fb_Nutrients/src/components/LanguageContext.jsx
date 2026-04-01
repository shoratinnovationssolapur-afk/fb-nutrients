import { createContext, useContext } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
})

export function LanguageProvider({ children, language, setLanguage }) {
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
