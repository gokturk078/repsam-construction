'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import SmartImage from '@/components/ui/SmartImage'
import { getHeroImage } from '@/lib/images'
import MagneticButton from '@/components/ui/MagneticButton'

// Gold dust particles config
const DUST_PARTICLES = Array.from({ length: 12 }, (_, i) => ({
    left: `${10 + Math.random() * 80}%`,
    delay: `${i * 0.7}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: `${1 + Math.random() * 2}px`,
}))

export default function Hero() {
    const { t } = useLang()
    const heroImage = getHeroImage()
    const sectionRef = useRef<HTMLElement>(null)

    // Parallax: image moves 30% slower than scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
            {/* FULLSCREEN PARALLAX BACKGROUND */}
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ y: imageY }}
                className="absolute inset-0 ken-burns"
            >
                <SmartImage
                    src={heroImage.src}
                    fallbackSrc={heroImage.fallbackSrc}
                    alt="Repsam Construction — Kyrenia"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Dark cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />

            {/* Grid pattern overlay for architectural feel */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(200,165,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,165,92,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Gold dust particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {DUST_PARTICLES.map((p, i) => (
                    <span
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            left: p.left,
                            bottom: '20%',
                            width: p.size,
                            height: p.size,
                            background: '#C9A84C',
                            animation: `floatDust ${p.duration} ease-in-out ${p.delay} infinite`,
                        }}
                    />
                ))}
            </div>

            {/* CONTENT with parallax */}
            <motion.div
                style={{ y: contentY }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-20"
            >
                <div className="max-w-3xl">
                    {/* Animated gold line — from center outward */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-[2px] w-20 bg-brand-gold mb-8 origin-left"
                    />

                    {/* Eyebrow — clip reveal */}
                    <motion.p
                        initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
                        animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-brand-gold text-[11px] tracking-[5px] mb-8"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                        {t('hero_eyebrow')}
                    </motion.p>

                    {/* Title Line 1 — clip reveal */}
                    <div className="overflow-hidden py-1">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-serif font-bold text-brand-white leading-[1.08] tracking-tight"
                            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                        >
                            {t('hero_line1')}
                        </motion.h1>
                    </div>

                    {/* Title Line 2 — clip reveal with stagger */}
                    <div className="overflow-hidden py-1">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-serif font-bold italic leading-[1.08] tracking-tight bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold bg-clip-text text-transparent"
                            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                        >
                            {t('hero_line2')}
                        </motion.h1>
                    </div>

                    {/* Gold divider — grows with spring */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 140, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                        className="h-[2px] gold-gradient-animated mt-8 mb-8"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="text-[#B0B0B0] text-[15px] md:text-[18px] leading-[1.8] max-w-xl"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                        {t('hero_subtitle')}
                    </motion.p>

                    {/* Buttons — with shimmer and magnetic effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 lg:mt-10 items-start sm:items-center"
                    >
                        <MagneticButton strength={0.3}>
                            <Link
                                href="/projects"
                                className="btn-shimmer inline-flex items-center justify-center px-10 lg:px-12 py-5 lg:py-6 bg-brand-gold text-brand-black text-[12px] font-bold tracking-[2px] transition-all duration-300 min-h-[48px] shadow-lg shadow-brand-gold/20"
                                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                            >
                                {t('hero_btn1')}
                            </Link>
                        </MagneticButton>

                        <MagneticButton strength={0.2}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 lg:px-12 py-5 lg:py-6 border border-white/20 text-white text-[12px] font-bold tracking-[2px] hover:border-brand-gold hover:text-brand-gold transition-all duration-300 backdrop-blur-md min-h-[48px] glow-gold-hover"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                {t('hero_btn2')}
                            </Link>
                        </MagneticButton>
                    </motion.div>

                    {/* Mini stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="grid grid-cols-3 gap-4 lg:gap-10 mt-10 lg:mt-16 pt-6 lg:pt-8 border-t border-white/10"
                    >
                        {[
                            { num: t('stat1_num'), label: t('stat1_label') },
                            { num: t('stat2_num'), label: t('stat2_label') },
                            { num: t('stat3_num'), label: t('stat3_label') },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-brand-gold text-[22px] lg:text-[28px] font-serif font-bold">{s.num}</p>
                                <p className="text-white/40 text-[9px] lg:text-[10px] tracking-[1px] mt-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute top-24 right-8 lg:right-16 backdrop-blur-xl border border-brand-gold/30 border-pulse px-6 py-5 hidden lg:block glow-gold rounded-sm"
                style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(10,10,10,0.8) 100%)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(201,168,76,0.05)'
                }}
            >
                <p className="text-brand-gold text-[10px] tracking-[3px]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    {t('hero_badge_line1')}
                </p>
                <p className="font-serif italic text-[16px] text-white mt-1">
                    {t('hero_badge_line2')}
                </p>
            </motion.div>

            {/* Bottom fade gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-brand-gold text-[9px] tracking-[4px]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    {t('hero_scroll')}
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="text-brand-gold" size={18} />
                </motion.div>
            </motion.div>
        </section>
    )
}
