'use client'

import { Shield, Award, CheckCircle, Star, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const CERTS: { icon: typeof Shield; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: Shield, titleKey: 'cert1_title', descKey: 'cert1_desc' },
    { icon: Award, titleKey: 'cert2_title', descKey: 'cert2_desc' },
    { icon: CheckCircle, titleKey: 'cert3_title', descKey: 'cert3_desc' },
    { icon: Star, titleKey: 'cert4_title', descKey: 'cert4_desc' },
    { icon: Globe, titleKey: 'cert5_title', descKey: 'cert5_desc' },
]

export default function CertificationsSection() {
    const { t } = useLang()

    return (
        <section className="py-24 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <AnimatedSection className="text-center mb-16">
                    <SectionLabel centered>{t('cert_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white mb-4"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
                    >
                        {t('cert_title')}
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {CERTS.map((cert, i) => {
                        const Icon = cert.icon
                        return (
                            <AnimatedSection key={cert.titleKey} delay={i * 0.1}>
                                <div className="group relative bg-white/[0.02] border border-white/5 p-6 text-center hover:border-brand-gold/30 transition-all duration-500 h-full">
                                    {/* Gold corner accent */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500" />
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500" />

                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-brand-gold/20 group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-300">
                                        <Icon size={22} className="text-brand-gold" />
                                    </div>
                                    <h4 className="font-serif text-brand-white text-[16px] font-semibold mb-2">{t(cert.titleKey)}</h4>
                                    <p className="text-white/40 text-[12px] leading-relaxed">{t(cert.descKey)}</p>
                                </div>
                            </AnimatedSection>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
