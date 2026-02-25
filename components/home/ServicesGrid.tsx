'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Store, Landmark, Trees, PenTool, Wrench } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const SERVICE_DATA = [
    { icon: Building2, titleKey: 'svc1_title' as const, descKey: 'svc1_desc' as const, f1: 'svc1_f1' as const, f2: 'svc1_f2' as const, f3: 'svc1_f3' as const, gradient: 'from-amber-900/20 to-[#111]' },
    { icon: Store, titleKey: 'svc2_title' as const, descKey: 'svc2_desc' as const, f1: 'svc2_f1' as const, f2: 'svc2_f2' as const, f3: 'svc2_f3' as const, gradient: 'from-emerald-900/20 to-[#111]' },
    { icon: Landmark, titleKey: 'svc3_title' as const, descKey: 'svc3_desc' as const, f1: 'svc3_f1' as const, f2: 'svc3_f2' as const, f3: 'svc3_f3' as const, gradient: 'from-blue-900/20 to-[#111]' },
    { icon: Trees, titleKey: 'svc4_title' as const, descKey: 'svc4_desc' as const, f1: 'svc4_f1' as const, f2: 'svc4_f2' as const, f3: 'svc4_f3' as const, gradient: 'from-emerald-800/20 to-[#111]' },
    { icon: PenTool, titleKey: 'svc5_title' as const, descKey: 'svc5_desc' as const, f1: 'svc5_f1' as const, f2: 'svc5_f2' as const, f3: 'svc5_f3' as const, gradient: 'from-orange-900/20 to-[#111]' },
    { icon: Wrench, titleKey: 'svc6_title' as const, descKey: 'svc6_desc' as const, f1: 'svc6_f1' as const, f2: 'svc6_f2' as const, f3: 'svc6_f3' as const, gradient: 'from-rose-900/20 to-[#111]' },
]

export default function ServicesGrid() {
    const { t } = useLang()

    return (
        <section className="relative py-24 bg-[#0D0D0D] overflow-hidden">
            {/* Blueprint grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(200,165,92,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,165,92,0.4) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative max-w-7xl mx-auto px-6 md:px-20">
                {/* Header */}
                <AnimatedSection variant="scaleIn" className="text-center mb-16">
                    <SectionLabel centered>{t('services_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white mb-4"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
                    >
                        {t('services_title')}
                    </h2>
                    <p className="text-slate-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
                        {t('services_subtitle')}
                    </p>
                </AnimatedSection>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICE_DATA.map((svc, index) => {
                        const Icon = svc.icon
                        return (
                            <ServiceCard
                                key={svc.titleKey}
                                icon={<Icon size={48} className="text-brand-gold" />}
                                title={t(svc.titleKey)}
                                desc={t(svc.descKey)}
                                features={[t(svc.f1), t(svc.f2), t(svc.f3)]}
                                gradient={svc.gradient}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ icon, title, desc, features, gradient, index }: {
    icon: React.ReactNode
    title: string
    desc: string
    features: string[]
    gradient: string
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group border border-white/[0.06] hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(201,168,76,0.12)] bg-white/[0.02] backdrop-blur-sm"
        >
            {/* Top gradient area with icon */}
            <div className={`relative h-40 bg-gradient-to-b ${gradient} flex items-center justify-center overflow-hidden`}>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-brand-gold/10 border-l-[48px] border-l-transparent group-hover:border-t-brand-gold/30 transition-colors" />
                </div>
                {icon}
                {/* Radial glow on hover */}
                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/[0.04] transition-colors duration-500 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-serif text-[20px] text-brand-white font-semibold mb-3">
                    {title}
                </h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed mb-4">
                    {desc}
                </p>
                {/* Features */}
                <div className="space-y-2">
                    {features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                            <span className="text-white/60 text-[12px]">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
