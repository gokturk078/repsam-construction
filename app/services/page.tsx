'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SmartImage from '@/components/ui/SmartImage'
import CTAStrip from '@/components/home/CTAStrip'
import { getImageById } from '@/lib/images'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const getImg = (id: string) => getImageById(id)

interface ServiceDef {
    id: string
    titleKey: TranslationKey
    descKey: TranslationKey
    image: string
    stepKeys: TranslationKey[]
    thumbnails: string[]
}

const SERVICES: ServiceDef[] = [
    {
        id: 'residential', titleKey: 'svcpage_1_title', descKey: 'svcpage_1_desc',
        image: 'project-villa-01',
        stepKeys: ['svcpage_1_step1', 'svcpage_1_step2', 'svcpage_1_step3', 'svcpage_1_step4', 'svcpage_1_step5'],
        thumbnails: ['project-villa-02', 'project-apartments-01', 'project-complex-01'],
    },
    {
        id: 'commercial', titleKey: 'svcpage_2_title', descKey: 'svcpage_2_desc',
        image: 'project-commercial-01',
        stepKeys: ['svcpage_2_step1', 'svcpage_2_step2', 'svcpage_2_step3', 'svcpage_2_step4', 'svcpage_2_step5'],
        thumbnails: ['project-commercial-02', 'interior-kitchen-01', 'project-technology-01'],
    },
    {
        id: 'infrastructure', titleKey: 'svcpage_3_title', descKey: 'svcpage_3_desc',
        image: 'project-infrastructure-01',
        stepKeys: ['svcpage_3_step1', 'svcpage_3_step2', 'svcpage_3_step3', 'svcpage_3_step4', 'svcpage_3_step5'],
        thumbnails: ['project-infrastructure-02', 'construction-site-01', 'construction-site-02'],
    },
    {
        id: 'landscaping', titleKey: 'svcpage_4_title', descKey: 'svcpage_4_desc',
        image: 'project-villa-02',
        stepKeys: ['svcpage_4_step1', 'svcpage_4_step2', 'svcpage_4_step3', 'svcpage_4_step4', 'svcpage_4_step5'],
        thumbnails: ['project-villa-01', 'hero-secondary', 'construction-site-01'],
    },
    {
        id: 'renovation', titleKey: 'svcpage_5_title', descKey: 'svcpage_5_desc',
        image: 'interior-living-01',
        stepKeys: ['svcpage_5_step1', 'svcpage_5_step2', 'svcpage_5_step3', 'svcpage_5_step4', 'svcpage_5_step5'],
        thumbnails: ['interior-kitchen-01', 'project-villa-02', 'construction-progress-01'],
    },
    {
        id: 'consulting', titleKey: 'svcpage_6_title', descKey: 'svcpage_6_desc',
        image: 'blueprint-planning',
        stepKeys: ['svcpage_6_step1', 'svcpage_6_step2', 'svcpage_6_step3', 'svcpage_6_step4', 'svcpage_6_step5'],
        thumbnails: ['quality-inspection', 'team-site-visit', 'construction-site-02'],
    },
]

export { SERVICES as services }

export default function ServicesPage() {
    const { t } = useLang()

    return (
        <main>
            <Navbar />

            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {(() => { const img = getImg('blueprint-planning'); return img ? <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt="Services" fill priority sizes="100vw" /> : null })()}
                <div className="absolute inset-0 bg-brand-black/70" />
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <SectionLabel centered>{t('services_page_label')}</SectionLabel>
                        <h1 className="font-serif text-brand-white font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                            {t('services_page_title')}
                        </h1>
                        <p className="text-brand-gray mt-3 text-[14px]">
                            {t('breadcrumb_home')} / <span className="text-brand-gold">{t('nav_services')}</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Sections */}
            {SERVICES.map((service, i) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${i % 2 === 0 ? 'bg-brand-black' : 'bg-brand-navy'}`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                            {/* Image */}
                            <AnimatedSection variant={i % 2 === 0 ? 'slideLeft' : 'slideRight'}>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {(() => { const img = getImg(service.image); return img ? <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt={t(service.titleKey)} fill className="object-cover project-img" sizes="(max-width: 1024px) 100vw, 50vw" /> : null })()}
                                </div>
                                <div className="grid grid-cols-3 gap-3 mt-3">
                                    {service.thumbnails.map((thumbId, j) => {
                                        const img = getImg(thumbId); if (!img) return null;
                                        return (
                                            <div key={j} className="relative aspect-video overflow-hidden">
                                                <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt="" fill className="object-cover opacity-70 hover:opacity-100 transition-opacity" sizes="150px" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimatedSection>

                            {/* Content */}
                            <AnimatedSection variant={i % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                                <SectionLabel>{`${t('svcpage_service_label')} 0${i + 1}`}</SectionLabel>
                                <h2 className="font-serif font-bold text-brand-white mb-5" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                                    {t(service.titleKey)}
                                </h2>
                                <p className="text-brand-gray leading-relaxed mb-8 text-[15px]">
                                    {t(service.descKey)}
                                </p>

                                {/* Process Steps */}
                                <div className="space-y-3">
                                    <h4 className="text-brand-gold text-[12px] tracking-[2px] uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {t('svcpage_our_process')}
                                    </h4>
                                    {service.stepKeys.map((stepKey, j) => (
                                        <div key={j} className="flex items-center gap-4">
                                            <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-brand-gold text-brand-black text-[13px] font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {j + 1}
                                            </span>
                                            <span className="text-brand-white text-[14px]">{t(stepKey)}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            ))}

            <CTAStrip />
            <Footer />
        </main>
    )
}
