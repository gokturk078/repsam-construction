'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import SmartImage from '@/components/ui/SmartImage'

interface PageHeroProps {
    imageId?: string
    imageSrc?: string
    imageFallback?: string
    alt: string
    label: string
    title: string
    breadcrumbHome: string
    breadcrumbCurrent: string
}

export default function PageHero({
    imageSrc,
    imageFallback,
    alt,
    label,
    title,
    breadcrumbHome,
    breadcrumbCurrent,
}: PageHeroProps) {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

    return (
        <section ref={sectionRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Parallax background */}
            {imageSrc && (
                <motion.div
                    style={{ y: imageY }}
                    className="absolute inset-0"
                >
                    <SmartImage
                        src={imageSrc}
                        fallbackSrc={imageFallback}
                        alt={alt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
            )}

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(200,165,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,165,92,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionLabel centered>{label}</SectionLabel>

                    {/* Clip-path title reveal */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-serif text-brand-white font-bold"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                        >
                            {title}
                        </motion.h1>
                    </div>

                    {/* Animated gold line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="w-16 h-[2px] gold-gradient-animated mx-auto mt-4 mb-3"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-brand-gray text-[14px]"
                    >
                        {breadcrumbHome} / <span className="text-brand-gold">{breadcrumbCurrent}</span>
                    </motion.p>
                </motion.div>
            </div>

            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </section>
    )
}
