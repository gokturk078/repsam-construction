'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { useLang } from '@/lib/i18n'

function SpringCounter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20, mass: 1 })
    const [display, setDisplay] = useState('0')
    const [done, setDone] = useState(false)

    useEffect(() => {
        if (inView) {
            motionValue.set(end)
        }
    }, [inView, end, motionValue])

    useEffect(() => {
        const unsubscribe = springValue.on('change', (v) => {
            const rounded = Math.round(v)
            setDisplay(String(rounded))
            if (rounded >= end && !done) {
                setDone(true)
            }
        })
        return unsubscribe
    }, [springValue, end, done])

    return (
        <span className="relative">
            {display}{suffix}
            {/* Gold shimmer flash when counter completes */}
            {done && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full pointer-events-none"
                />
            )}
        </span>
    )
}

export default function StatsBar() {
    const { t } = useLang()
    const containerRef = useRef<HTMLDivElement>(null)
    const inView = useInView(containerRef, { once: true, margin: '-50px' })

    const stats = [
        { value: 50, suffix: '+', label: t('stat1_label') },
        { value: 10, suffix: '+', label: t('stat2_label') },
        { value: 200, suffix: '+', label: t('stat3_label') },
        { value: 5, suffix: '★', label: t('stat4_label') },
    ]

    return (
        <section
            ref={containerRef}
            className="relative py-16 bg-gradient-to-r from-[#1a1500] via-[#1f1c13] to-[#1a1500]"
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)' }}
        >
            {/* Subtle gold radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-center"
                        >
                            <div className="text-brand-gold text-[40px] md:text-[48px] font-serif font-bold">
                                <SpringCounter end={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <p
                                className="text-white/60 text-[11px] tracking-[2px] uppercase mt-2"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
