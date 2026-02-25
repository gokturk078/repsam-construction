'use client'

import dynamic from 'next/dynamic'

const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false })
const StickyQuote = dynamic(() => import('./StickyQuote'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false })
const LangSync = dynamic(() => import('./LangSync'), { ssr: false })

export default function ClientOverlays() {
    return (
        <>
            <LangSync />
            <LoadingScreen />
            <StickyQuote />
            <WhatsAppButton />
        </>
    )
}
