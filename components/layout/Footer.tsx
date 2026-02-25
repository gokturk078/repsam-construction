'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, MapPin, Phone, Mail, Clock, ArrowUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const COMPANY_LINKS: { key: TranslationKey; href: string }[] = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_about', href: '/about' },
    { key: 'nav_projects', href: '/projects' },
    { key: 'nav_services', href: '/services' },
    { key: 'nav_contact', href: '/contact' },
]

function FooterAccordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div className="border-b border-white/5 lg:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-4 lg:hidden"
            >
                <h4 className="text-brand-gold text-[12px] tracking-[3px] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {title}
                </h4>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} className="text-brand-gold/50" />
                </motion.span>
            </button>
            {/* Desktop always visible */}
            <h4 className="hidden lg:block text-brand-gold text-[12px] tracking-[3px] uppercase mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {title}
            </h4>
            {/* Mobile collapsible */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden lg:hidden pb-4"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Desktop always visible */}
            <div className="hidden lg:block">
                {children}
            </div>
        </div>
    )
}

export default function Footer() {
    const { t } = useLang()
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <footer className="bg-[#0D0D12] relative pb-16 lg:pb-0">
                <div className="w-full h-[2px] bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark" />

                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
                    {/* Social proof */}
                    <div className="text-center mb-8 lg:mb-12">
                        <p className="text-brand-gold/60 text-[11px] lg:text-[12px] tracking-[2px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {t('footer_trust')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-12">
                        {/* Brand — always visible on mobile */}
                        <div className="pb-6 mb-2 border-b border-white/5 lg:border-0 lg:pb-0 lg:mb-0">
                            <Link href="/" className="flex items-center gap-3 mb-4 lg:mb-6">
                                <div className="relative w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]">
                                    <Image src="/images/repsam-logo.jpeg" alt="Repsam Construction" fill className="object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-serif text-[24px] lg:text-[28px] font-bold text-brand-white tracking-[2px] leading-none">REPSAM</span>
                                    <span className="text-brand-gold text-[8px] lg:text-[9px] tracking-[4px] -mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>CONSTRUCTION</span>
                                </div>
                            </Link>
                            <p className="text-brand-gray text-[13px] lg:text-[14px] leading-relaxed mb-4 lg:mb-5">
                                {t('footer_desc')}
                            </p>
                            <a href="https://instagram.com/repsam_construction.cyp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors text-[13px]">
                                <Instagram size={18} />
                                @repsam_construction.cyp
                            </a>
                        </div>

                        {/* Company Links — collapsible on mobile */}
                        <FooterAccordion title={t('footer_company')}>
                            <ul className="space-y-3">
                                {COMPANY_LINKS.map(link => (
                                    <li key={link.key}>
                                        <Link href={link.href} className="text-brand-gray hover:text-brand-white transition-colors text-[14px] block py-0.5">
                                            {t(link.key)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterAccordion>

                        {/* Services — collapsible on mobile */}
                        <FooterAccordion title={t('footer_services')}>
                            <ul className="space-y-3">
                                {(['svc1_title', 'svc2_title', 'svc3_title', 'svc4_title', 'svc5_title', 'svc6_title'] as TranslationKey[]).map(key => (
                                    <li key={key}>
                                        <Link href="/services" className="text-brand-gray hover:text-brand-white transition-colors text-[14px] block py-0.5">
                                            {t(key)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterAccordion>

                        {/* Contact — collapsible on mobile */}
                        <FooterAccordion title={t('footer_contact')} defaultOpen>
                            <ul className="space-y-3 text-[14px]">
                                <li className="flex items-start gap-2.5 text-brand-gray">
                                    <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                                    Girne (Kyrenia), North Cyprus
                                </li>
                                <li>
                                    <a href="tel:+905338405060" className="flex items-start gap-2.5 text-brand-gray hover:text-brand-white transition-colors">
                                        <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                                        +90 (533) 840 50 60
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@repsamconstruction.com" className="flex items-start gap-2.5 text-brand-gray hover:text-brand-white transition-colors">
                                        <Mail size={16} className="text-brand-gold mt-0.5 shrink-0" />
                                        info@repsamconstruction.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-2.5 text-brand-gray">
                                    <Clock size={16} className="text-brand-gold mt-0.5 shrink-0" />
                                    {t('footer_hours')}
                                </li>
                            </ul>
                        </FooterAccordion>
                    </div>

                    {/* Certifications & Regions Strip */}
                    <div className="mt-10 lg:mt-16 pt-8 lg:pt-10 border-t border-white/5">
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-4 lg:gap-6 mb-6">
                            {(['footer_cert_iso', 'footer_cert_eu', 'footer_cert_kktc', 'footer_cert_materials'] as const).map((key) => (
                                <div key={key} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-brand-gold/50 rotate-45" />
                                    <span className="text-white/20 text-[9px] lg:text-[10px] tracking-[2px] lg:tracking-[3px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t(key)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                            {(['footer_region_uk', 'footer_region_tr', 'footer_region_eu', 'footer_region_cy'] as const).map((key) => (
                                <span key={key} className="text-white/30 text-[10px] lg:text-[11px] px-2.5 lg:px-3 py-1 border border-white/5 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {t(key)}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-gold/20">
                    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="text-brand-gray/60 text-[12px] lg:text-[13px]">
                            © {new Date().getFullYear()} Repsam Construction Ltd. {t('footer_rights')}
                        </p>
                        <div className="flex items-center gap-4 text-brand-gray/60 text-[12px] lg:text-[13px]">
                            <Link href="#" className="hover:text-brand-white transition-colors">{t('footer_privacy')}</Link>
                            <span>|</span>
                            <Link href="#" className="hover:text-brand-white transition-colors">{t('footer_terms')}</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to top - positioned above mobile CTA */}
            {showTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-gold text-brand-black flex items-center justify-center shadow-lg hover:bg-brand-gold-light transition-all"
                    aria-label={t('back_to_top')}
                >
                    <ArrowUp size={18} />
                </button>
            )}
        </>
    )
}
