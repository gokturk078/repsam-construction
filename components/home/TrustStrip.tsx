'use client'

import { useLang } from '@/lib/i18n'

const TRUST_ITEMS_EN = [
    '★ KKTC LICENSED', '★ ISO 9001 CERTIFIED', '★ EUROPEAN STANDARDS',
    '★ 50+ COMPLETED PROJECTS', '★ 10 YEARS EXPERIENCE', '★ KYRENIA BASED',
    '★ PREMIUM MATERIALS', '★ ON-TIME DELIVERY',
]

const TRUST_ITEMS_TR = [
    '★ KKTC LİSANSLI', '★ ISO 9001 SERTİFİKALI', '★ AVRUPA STANDARTLARI',
    '★ 50+ TAMAMLANAN PROJE', '★ 10 YILLIK TECRÜBE', '★ GİRNE MERKEZLİ',
    '★ PREMİUM MALZEME', '★ ZAMANINDA TESLİMAT',
]

export default function TrustStrip() {
    const { lang } = useLang()
    const items = lang === 'tr' ? TRUST_ITEMS_TR : TRUST_ITEMS_EN
    const doubled = [...items, ...items]

    return (
        <section className="relative py-5 overflow-hidden bg-[#0D0D0D] border-y border-white/5">
            <div className="flex items-center gap-10 animate-marquee whitespace-nowrap" style={{ animationDuration: '35s' }}>
                {doubled.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0">
                        <span
                            className="text-white/25 text-[11px] tracking-[3px] hover:text-brand-gold transition-colors duration-300"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {item}
                        </span>
                        <span className="text-brand-gold/40 text-[8px]">◆</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
