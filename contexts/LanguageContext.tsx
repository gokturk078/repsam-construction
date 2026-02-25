'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/locales/en'
import tr from '@/locales/tr'

type SupportedLanguage = 'en' | 'tr'
type Translations = typeof en

interface LanguageContextProps {
    language: SupportedLanguage
    setLanguage: (lang: SupportedLanguage) => void
    t: (key: string) => string | any
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<SupportedLanguage>('en')

    useEffect(() => {
        // Hydrate from localStorage if available
        const savedLang = localStorage.getItem('repsam_lang') as SupportedLanguage
        if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
            setLanguage(savedLang)
        }
    }, [])

    const handleSetLanguage = (lang: SupportedLanguage) => {
        setLanguage(lang)
        localStorage.setItem('repsam_lang', lang)
    }

    // Dot notation deep accessor
    const t = (path: string): any => {
        const keys = path.split('.')
        let current: any = language === 'en' ? en : tr

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation key missing: ${path}`)
                return path
            }
            current = current[key]
        }
        return current
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
