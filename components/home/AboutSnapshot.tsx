'use client'

import { CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldButton from '@/components/ui/GoldButton'
import SmartImage from '@/components/ui/SmartImage'
import { getImageByUsage } from '@/lib/images'
import { useLang } from '@/lib/i18n'

export default function AboutSnapshot() {
    const { t } = useLang()
    const teamImage = getImageByUsage('about_section')

    const features = [
        t('about_check1'),
        t('about_check2'),
        t('about_check3'),
    ]

    return (
        <section className="section-padding bg-brand-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <AnimatedSection variant="slideRight">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            {teamImage && (
                                <SmartImage
                                    src={teamImage.src}
                                    fallbackSrc={teamImage.fallbackSrc}
                                    alt="Repsam Team"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            )}
                            {/* Gold accent corner */}
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-brand-gold" />
                            {/* Floating stats overlay */}
                            <div className="absolute bottom-6 -right-4 lg:-right-8 bg-[#111] border border-brand-gold/30 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10">
                                <p className="text-brand-gold text-[32px] font-serif font-bold leading-none">50+</p>
                                <p className="text-white/60 text-[11px] tracking-[1px] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('overlay_projects')}</p>
                                <div className="w-8 h-[1px] bg-brand-gold/40 my-3" />
                                <p className="text-brand-gold text-[24px] font-serif font-bold leading-none">10+</p>
                                <p className="text-white/60 text-[11px] tracking-[1px] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('overlay_years')}</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection variant="slideLeft">
                        <SectionLabel>{t('about_label')}</SectionLabel>
                        <h2
                            className="font-serif font-bold text-brand-white mb-6"
                            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.15 }}
                        >
                            {t('about_title')}
                        </h2>
                        <p className="text-brand-gray text-[15px] leading-relaxed mb-4">
                            {t('about_p1')}
                        </p>
                        <p className="text-brand-gray text-[15px] leading-relaxed mb-8">
                            {t('about_p2')}
                        </p>

                        {/* Feature list */}
                        <div className="space-y-3 mb-8">
                            {features.map((f) => (
                                <div key={f} className="flex items-center gap-3">
                                    <CheckCircle className="text-brand-gold shrink-0" size={18} />
                                    <span className="text-brand-white text-[14px]">{f}</span>
                                </div>
                            ))}
                        </div>

                        <GoldButton href="/about" variant="outline">
                            {t('about_btn')}
                        </GoldButton>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
