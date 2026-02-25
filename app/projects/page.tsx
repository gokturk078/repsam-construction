'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import SmartImage from '@/components/ui/SmartImage'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import StatsBar from '@/components/home/StatsBar'
import CTAStrip from '@/components/home/CTAStrip'
import { getImageById } from '@/lib/images'
import { useLang } from '@/lib/i18n'

export default function ProjectsPage() {
    const { t } = useLang()

    return (
        <main>
            <Navbar />

            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {(() => { const img = getImageById('project-complex-01'); return img ? <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt="Projects" fill priority sizes="100vw" /> : null })()}
                <div className="absolute inset-0 bg-brand-black/70" />
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <SectionLabel centered>{t('portfolio_label')}</SectionLabel>
                        <h1 className="font-serif text-brand-white font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                            {t('portfolio_title')}
                        </h1>
                        <p className="text-brand-gray mt-3 text-[14px]">
                            {t('breadcrumb_home')} / <span className="text-brand-gold">{t('nav_projects')}</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <StatsBar />
            <ProjectsGallery showAll />
            <CTAStrip />
            <Footer />
        </main>
    )
}
