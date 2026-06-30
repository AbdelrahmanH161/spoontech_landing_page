"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { en, ar, type Translations } from "./locales"

export type Language = "en" | "ar"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: en,
  dir: "ltr",
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("spoontech-lang") as Language | null
    if (stored === "ar" || stored === "en") {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
    document.documentElement.dir = dir
    localStorage.setItem("spoontech-lang", language)
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)

  const t = language === "ar" ? ar : en
  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
