'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Shield, Heart, Lightbulb, Crosshair, HandshakeIcon, Award } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SmartImage from '@/components/ui/SmartImage'
import PageHero from '@/components/ui/PageHero'
import CTAStrip from '@/components/home/CTAStrip'
import { getImageById } from '@/lib/images'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const TIMELINE_KEYS: { year: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { year: '2014', titleKey: 'tl1_title', descKey: 'tl1_desc' },
    { year: '2016', titleKey: 'tl2_title', descKey: 'tl2_desc' },
    { year: '2018', titleKey: 'tl3_title', descKey: 'tl3_desc' },
    { year: '2020', titleKey: 'tl4_title', descKey: 'tl4_desc' },
    { year: '2022', titleKey: 'tl5_title', descKey: 'tl5_desc' },
    { year: '2024', titleKey: 'tl6_title', descKey: 'tl6_desc' },
]

const VALUE_ICONS = [Shield, Heart, Lightbulb, Crosshair, HandshakeIcon, Award]
const VALUE_KEYS: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { titleKey: 'val1_title', descKey: 'val1_desc' },
    { titleKey: 'val2_title', descKey: 'val2_desc' },
    { titleKey: 'val3_title', descKey: 'val3_desc' },
    { titleKey: 'val4_title', descKey: 'val4_desc' },
    { titleKey: 'val5_title', descKey: 'val5_desc' },
    { titleKey: 'val6_title', descKey: 'val6_desc' },
]

const TEAM_KEYS: { nameKey: TranslationKey; roleKey: TranslationKey; bioKey: TranslationKey }[] = [
    { nameKey: 'team1_name', roleKey: 'team1_role', bioKey: 'team1_bio' },
    { nameKey: 'team2_name', roleKey: 'team2_role', bioKey: 'team2_bio' },
    { nameKey: 'team3_name', roleKey: 'team3_role', bioKey: 'team3_bio' },
]

const TEAM_GRADIENTS = [
    'from-amber-900/30 to-[#111]',
    'from-emerald-900/30 to-[#111]',
    'from-blue-900/30 to-[#111]',
]

export default function AboutPage() {
    const { t } = useLang()
    const heroImg = getImageById('hero-secondary')

    return (
        <main>
            <Navbar />
            <PageHero
                imageSrc={heroImg?.src}
                imageFallback={heroImg?.fallbackSrc}
                alt="About Repsam"
                label={t('about_page_label')}
                title={t('about_page_title')}
                breadcrumbHome={t('breadcrumb_home')}
                breadcrumbCurrent={t('nav_about')}
            />

            {/* Timeline */}
            <section className="section-padding bg-brand-black">
                <div className="max-w-4xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <SectionLabel centered>{t('journey_label')}</SectionLabel>
                        <h2 className="font-serif font-bold text-brand-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            {t('journey_title')}
                        </h2>
                    </AnimatedSection>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-gold/30 hidden md:block" />

                        {TIMELINE_KEYS.map((item, i) => (
                            <AnimatedSection key={item.year} delay={i * 0.5} className="mb-12 last:mb-0">
                                <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="font-serif text-brand-gold text-[28px] font-bold">{item.year}</h3>
                                        <h4 className="text-brand-white text-[18px] font-semibold mt-1">{t(item.titleKey)}</h4>
                                        <p className="text-brand-gray text-[14px] mt-2 leading-relaxed">{t(item.descKey)}</p>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-brand-gold border-4 border-brand-black shrink-0 hidden md:block relative z-10" />
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-brand-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection variant="slideLeft">
                            <div className="bg-[#111] border-t-[3px] border-brand-gold p-8 md:p-10 h-full">
                                <div className="w-12 h-12 flex items-center justify-center bg-brand-gold/10 border border-brand-gold/30 mb-6">
                                    <Target size={24} className="text-brand-gold" />
                                </div>
                                <h3 className="font-serif text-brand-white text-[24px] font-bold mb-4">{t('mission_title')}</h3>
                                <p className="text-brand-gray leading-relaxed mb-4">
                                    {t('mission_p1')}
                                </p>
                                <p className="text-brand-gray leading-relaxed">
                                    {t('mission_p2')}
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="slideRight">
                            <div className="bg-brand-gold p-8 md:p-10 h-full">
                                <div className="w-12 h-12 flex items-center justify-center bg-brand-black/10 border border-brand-black/20 mb-6">
                                    <Eye size={24} className="text-brand-black" />
                                </div>
                                <h3 className="font-serif text-brand-black text-[24px] font-bold mb-4">{t('vision_title')}</h3>
                                <p className="text-brand-black/80 leading-relaxed mb-4">
                                    {t('vision_p1')}
                                </p>
                                <p className="text-brand-black/80 leading-relaxed">
                                    {t('vision_p2')}
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-brand-black">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <SectionLabel centered>{t('values_label')}</SectionLabel>
                        <h2 className="font-serif font-bold text-brand-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            {t('values_title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VALUE_KEYS.map((value, i) => {
                            const Icon = VALUE_ICONS[i]
                            return (
                                <AnimatedSection key={value.titleKey} variant="scaleIn" delay={i * 0.5}>
                                    <div className="text-center group">
                                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center border border-brand-gold/30 bg-brand-gold/5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                                            <Icon size={28} className="text-brand-gold" />
                                        </div>
                                        <h4 className="font-serif text-brand-white text-[18px] font-semibold mb-2">{t(value.titleKey)}</h4>
                                        <p className="text-brand-gray text-[14px] leading-relaxed">{t(value.descKey)}</p>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-brand-navy">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <SectionLabel centered>{t('team_label')}</SectionLabel>
                        <h2 className="font-serif font-bold text-brand-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            {t('team_title')}
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM_KEYS.map((member, i) => (
                            <AnimatedSection key={member.nameKey} variant="scaleIn" delay={i * 0.5}>
                                <div className="bg-[#111] border border-[#222] hover:border-brand-gold/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                                    <div className={`relative h-64 bg-gradient-to-b ${TEAM_GRADIENTS[i]}`}>
                                        {(() => { const img = getImageById('team-site-visit'); return img ? <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt={t(member.nameKey)} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-40" /> : null })()}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                                        {/* Initials badge */}
                                        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                                            <span className="font-serif text-brand-gold text-[18px] font-bold">
                                                {t(member.nameKey).split(' ').map(w => w[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-serif text-brand-white text-[20px] font-bold">{t(member.nameKey)}</h4>
                                        <p className="text-brand-gold text-[13px] mt-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>{t(member.roleKey)}</p>
                                        <p className="text-brand-gray text-[14px] mt-3 leading-relaxed">{t(member.bioKey)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mini Gallery Strip */}
            <section className="py-12 bg-brand-black overflow-hidden">
                <div className="flex gap-4 animate-marquee will-change-transform" style={{ width: 'max-content' }}>
                    {[...'project-villa-01,project-commercial-01,interior-living-01,project-complex-01,construction-site-01,project-apartments-01'.split(','), ...'project-villa-01,project-commercial-01,interior-living-01,project-complex-01,construction-site-01,project-apartments-01'.split(',')].map((id, idx) => {
                        const img = getImageById(id); if (!img) return null;
                        return (
                            <div key={`${id}-${idx}`} className="relative w-64 h-40 shrink-0 overflow-hidden">
                                <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt={id} fill sizes="256px" className="object-cover project-img" />
                            </div>
                        )
                    })}
                </div>
            </section>

            <CTAStrip />
            <Footer />
        </main>
    )
}
