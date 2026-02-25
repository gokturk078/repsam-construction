'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, PenTool, ClipboardList, HardHat, Key } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const STEPS: { icon: typeof MessageSquare; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: MessageSquare, titleKey: 'proc1_title', descKey: 'proc1_desc' },
    { icon: PenTool, titleKey: 'proc2_title', descKey: 'proc2_desc' },
    { icon: ClipboardList, titleKey: 'proc3_title', descKey: 'proc3_desc' },
    { icon: HardHat, titleKey: 'proc4_title', descKey: 'proc4_desc' },
    { icon: Key, titleKey: 'proc5_title', descKey: 'proc5_desc' },
]

export default function ProcessSection() {
    const { t } = useLang()
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: '-50px' })

    // Scroll-linked progress
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 80%', 'end 50%'],
    })
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section className="py-24 bg-gradient-to-br from-[#0D0D0D] via-[#111015] to-[#0D0D0D]" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection variant="clipReveal" className="text-center mb-16">
                    <SectionLabel centered>{t('process_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
                    >
                        {t('process_title')}
                    </h2>
                </AnimatedSection>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                    {/* Connecting line background (desktop only) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/5" />
                    {/* Scroll-linked progress line */}
                    <motion.div
                        className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] gold-gradient-animated origin-left"
                        style={{ width: lineWidth }}
                    />

                    {STEPS.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.titleKey}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="text-center relative"
                            >
                                {/* Step number background */}
                                <div className="relative mx-auto w-[90px] h-[90px] flex items-center justify-center mb-6">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
                                        transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                                        className="absolute text-brand-gold text-[64px] font-serif font-bold select-none"
                                    >
                                        {i + 1}
                                    </motion.span>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={inView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: i * 0.15 + 0.1, type: 'spring', stiffness: 200 }}
                                        className="relative z-10 w-14 h-14 rounded-full border border-brand-gold/30 flex items-center justify-center bg-[#111]"
                                    >
                                        <Icon size={28} className="text-brand-gold" />
                                    </motion.div>
                                </div>

                                <h4 className="font-serif text-[18px] text-brand-white font-semibold mb-2">
                                    {t(step.titleKey)}
                                </h4>
                                <p className="text-[#9CA3AF] text-[13px] leading-relaxed max-w-[200px] mx-auto">
                                    {t(step.descKey)}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
