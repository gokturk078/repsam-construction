'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Clock, DollarSign, Users } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { getImageByUsage } from '@/lib/images'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const REASONS: { icon: typeof Award; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: Award, titleKey: 'why1_title', descKey: 'why1_desc' },
    { icon: Clock, titleKey: 'why2_title', descKey: 'why2_desc' },
    { icon: DollarSign, titleKey: 'why3_title', descKey: 'why3_desc' },
    { icon: Users, titleKey: 'why4_title', descKey: 'why4_desc' },
]

export default function WhyUs() {
    const { t } = useLang()
    const whyImage = getImageByUsage('why_us_section')
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="why-us" className="section-padding bg-[#0D0D0D]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <AnimatedSection variant="slideLeft">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            {whyImage && (
                                <SmartImage
                                    src={whyImage.src}
                                    fallbackSrc={whyImage.fallbackSrc}
                                    alt="Quality Construction"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            )}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-gold" />
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <div>
                        <AnimatedSection variant="clipReveal">
                            <SectionLabel>{t('why_label')}</SectionLabel>
                            <h2
                                className="font-serif font-bold text-brand-white mb-4"
                                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.15 }}
                            >
                                {t('why_title')}
                            </h2>
                            <p className="text-brand-gray text-[15px] leading-relaxed mb-10">
                                {t('why_subtitle')}
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {REASONS.map((r, i) => {
                                const Icon = r.icon
                                return (
                                    <motion.div
                                        key={r.titleKey}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group relative p-5 border border-white/[0.06] hover:border-brand-gold/30 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
                                    >
                                        {/* Number watermark */}
                                        <span className="absolute -top-2 -right-1 font-serif text-[80px] font-bold text-white/[0.03] select-none leading-none group-hover:text-brand-gold/[0.06] transition-colors duration-500">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors">
                                                <Icon size={22} className="text-brand-gold" />
                                            </div>
                                            <h4 className="font-serif text-[16px] text-brand-white font-semibold mb-2">
                                                {t(r.titleKey)}
                                            </h4>
                                            <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                                                {t(r.descKey)}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
