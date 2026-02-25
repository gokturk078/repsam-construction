'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const FAQ_KEYS: { qKey: TranslationKey; aKey: TranslationKey }[] = [
    { qKey: 'faq1_q', aKey: 'faq1_a' },
    { qKey: 'faq2_q', aKey: 'faq2_a' },
    { qKey: 'faq3_q', aKey: 'faq3_a' },
    { qKey: 'faq4_q', aKey: 'faq4_a' },
    { qKey: 'faq5_q', aKey: 'faq5_a' },
    { qKey: 'faq6_q', aKey: 'faq6_a' },
]

export default function FAQSection() {
    const { t } = useLang()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="section-padding bg-[#080808]">
            <div className="max-w-3xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <SectionLabel centered>{t('faq_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
                    >
                        {t('faq_title')}
                    </h2>
                </AnimatedSection>

                <div className="space-y-3">
                    {FAQ_KEYS.map((faq, i) => (
                        <AnimatedSection key={faq.qKey} delay={i * 0.05}>
                            <div className="border border-white/[0.06] hover:border-brand-gold/20 transition-colors duration-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                    aria-expanded={openIndex === i}
                                >
                                    <span className="text-brand-white text-[15px] font-medium leading-snug">
                                        {t(faq.qKey)}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <ChevronDown size={18} className="text-brand-gold" />
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-brand-gray text-[14px] leading-relaxed border-t border-white/5 pt-4">
                                                {t(faq.aKey)}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* FAQPage JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: FAQ_KEYS.map((faq) => ({
                            '@type': 'Question',
                            name: t(faq.qKey),
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: t(faq.aKey),
                            },
                        })),
                    }),
                }}
            />
        </section>
    )
}
