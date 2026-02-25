'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

interface TestimonialDef {
    name: string
    location: string
    textKey: TranslationKey
    roleKey: TranslationKey
    rating: number
}

const TESTIMONIALS: TestimonialDef[] = [
    { name: 'James & Sarah Mitchell', location: 'London, United Kingdom', textKey: 'test1_text', roleKey: 'test1_role', rating: 5 },
    { name: 'Mehmet Özdemir', location: 'Istanbul, Turkey', textKey: 'test2_text', roleKey: 'test2_role', rating: 5 },
    { name: 'Elena Marchetti', location: 'Milan, Italy', textKey: 'test3_text', roleKey: 'test3_role', rating: 5 },
]

export default function Testimonials() {
    const { t } = useLang()
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, [])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }, [])

    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(next, 5000)
        return () => clearInterval(interval)
    }, [isPaused, next])

    const testimonial = TESTIMONIALS[current]

    return (
        <section className="section-padding bg-[#0F0F0F] relative overflow-hidden">
            {/* Decorative quote watermark */}
            <span className="absolute top-10 left-10 font-serif text-[200px] lg:text-[300px] text-white/[0.015] leading-none select-none pointer-events-none">
                &ldquo;
            </span>
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection variant="clipReveal" className="text-center mb-16">
                    <SectionLabel centered>{t('test_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
                    >
                        {t('test_title')}
                    </h2>
                </AnimatedSection>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#161616] border-l-4 border-brand-gold p-8 md:p-12 glow-gold"
                        >
                            {/* Quote Mark */}
                            <span className="font-serif text-[64px] text-brand-gold leading-none block mb-4">
                                &ldquo;
                            </span>

                            <p className="text-brand-white text-[17px] leading-[1.8] mb-8">
                                {t(testimonial.textKey)}
                            </p>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6B1F)' }}>
                                    <span className="text-white font-serif text-[18px] font-semibold">
                                        {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-brand-white font-semibold text-[16px]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-brand-gold text-[13px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {t(testimonial.roleKey)}
                                    </p>
                                    <p className="text-brand-gray text-[13px] mt-0.5">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-gold w-8' : 'bg-brand-gray/40 hover:bg-brand-gray'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                className="w-10 h-10 border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
