'use client'

import { useEffect } from 'react'
import { useLang } from '@/lib/i18n'

/** Sync the <html lang> attribute with the user's selected language */
export default function LangSync() {
    const { lang } = useLang()

    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    return null
}
