'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import type { Project } from '@/lib/projects'
import SmartImage from '@/components/ui/SmartImage'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MagneticButton from '@/components/ui/MagneticButton'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function ProjectClientPage({ project }: { project: Project }) {
    const { lang, t } = useLang()

    return (
        <main className="bg-brand-black min-h-screen">
            <Navbar />

            {/* CINEMATIC HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <SmartImage
                        src={project.mainImage}
                        alt={lang === 'tr' ? project.title_tr : project.title_en}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                </motion.div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 text-brand-gold text-[12px] tracking-[2px] mb-6 hover:translate-x-[-4px] transition-transform">
                            <ChevronLeft size={16} /> {t('portfolio_label')}
                        </Link>
                        <h1 className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                            {lang === 'tr' ? project.title_tr : project.title_en}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-[11px] tracking-[2px] uppercase text-brand-gold font-bold">
                            <span>{lang === 'tr' ? project.location_tr : project.location_en}</span>
                            <span className="opacity-30">|</span>
                            <span>{project.year}</span>
                            <span className="opacity-30">|</span>
                            <span>{project.category.toUpperCase()}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TECHNICAL OVERVIEW - GLASSMORPHISM */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-sm"
                        >
                            <h2 className="text-brand-gold text-[11px] tracking-[4px] uppercase mb-8">
                                {t('about_label')}
                            </h2>
                            <p className="text-white/80 text-[18px] leading-[1.8] font-light">
                                {lang === 'tr' ? project.description_tr : project.description_en}
                            </p>

                            {/* Project Gallery Sub-Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                                {project.gallery.map((img, i) => (
                                    <div key={i} className="relative aspect-video overflow-hidden rounded-sm group">
                                        <SmartImage
                                            src={img}
                                            alt={`${project.id} gallery ${i}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-brand-gold/5 border border-brand-gold/20 p-8 rounded-sm sticky top-24">
                            <h3 className="text-brand-gold text-[11px] tracking-[3px] font-bold mb-6 uppercase">
                                {lang === 'tr' ? 'MÜHENDİSLİK DETAYLARI' : 'ENGINEERING SPECS'}
                            </h3>
                            <div className="space-y-6">
                                {project.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                                        <span className="text-[10px] tracking-[1px] uppercase text-white/40">
                                            {lang === 'tr' ? spec.key_tr : spec.key_en}
                                        </span>
                                        <span className="text-brand-gold font-serif italic text-[18px]">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] tracking-[1px] uppercase text-white/40">
                                        {lang === 'tr' ? 'ALAN' : 'AREA'}
                                    </span>
                                    <span className="text-brand-gold font-serif italic text-[18px]">
                                        {project.size}
                                    </span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] tracking-[1px] uppercase text-white/40">
                                        {lang === 'tr' ? 'DURUM' : 'STATUS'}
                                    </span>
                                    <span className="text-brand-gold font-serif italic text-[18px]">
                                        {lang === 'tr' ? project.status_tr : project.status_en}
                                    </span>
                                </div>
                            </div>

                            <MagneticButton strength={0.2} className="w-full mt-10">
                                <Link href="/contact" className="block text-center py-5 bg-brand-gold text-brand-black font-bold tracking-[2px] text-[12px] shadow-lg shadow-brand-gold/10 hover:bg-brand-gold-light transition-colors">
                                    {t('nav_cta')}
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 border-t border-white/5 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-serif italic text-[24px] text-white/60 mb-8">{t('cta_title')}</h3>
                    <Link href="/projects" className="text-brand-gold text-[12px] tracking-[3px] font-bold hover:opacity-70 transition-opacity uppercase">
                        {t('view_all')}
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    )
}
