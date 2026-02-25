'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageSquare, Phone } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export default function StickyQuote() {
    const { t } = useLang()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible) return null

    return (
        <>
            {/* Desktop: vertical tab, right edge */}
            <Link
                href="/contact"
                className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center gap-2 bg-brand-gold text-brand-black px-3 py-4 rounded-l-lg shadow-lg hover:pr-5 transition-all duration-300 group"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
                <MessageSquare size={16} className="rotate-90 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold tracking-[2px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t('nav_cta')}
                </span>
            </Link>

            {/* Mobile: bottom bar with Call + Quote split */}
            <div
                className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
            >
                <a
                    href="tel:+905338405060"
                    className="flex-1 bg-[#1a1a1a] text-brand-gold flex items-center justify-center gap-2 py-4 border-r border-white/10"
                >
                    <Phone size={16} />
                    <span className="text-[11px] font-bold tracking-[2px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t('cta_call')}
                    </span>
                </a>
                <Link
                    href="/contact"
                    className="flex-1 bg-brand-gold text-brand-black flex items-center justify-center gap-2 py-4"
                >
                    <MessageSquare size={16} />
                    <span className="text-[11px] font-bold tracking-[2px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t('nav_cta')}
                    </span>
                </Link>
            </div>
        </>
    )
}
