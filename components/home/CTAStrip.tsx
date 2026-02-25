'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

export default function CTAStrip() {
    const { t } = useLang()

    return (
        <section className="relative py-28 overflow-hidden">
            {/* Dark gradient with warm undertones */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1500] via-[#0D0D0D] to-[#1a1500]" />

            {/* Large radial gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-gold/[0.06] rounded-full blur-[100px] pointer-events-none" />

            {/* Grid pattern for consistency */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(200,165,92,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,165,92,0.4) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] p-10 md:p-16 glow-gold"
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-gold/30" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-gold/30" />

                    <h2
                        className="font-serif font-bold text-brand-white mb-6"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
                    >
                        {t('cta_title')}
                    </h2>
                    <p className="text-brand-gray text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
                        {t('cta_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black text-[12px] font-bold tracking-[2px] hover:bg-brand-gold-light transition-all min-h-[48px]"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {t('cta_btn1')}
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center px-8 py-4 border border-brand-gold/50 text-brand-gold text-[12px] font-bold tracking-[2px] hover:bg-brand-gold/10 transition-all glow-gold-hover min-h-[48px]"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {t('cta_btn2')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
