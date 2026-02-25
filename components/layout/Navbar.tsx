'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import GoldButton from '@/components/ui/GoldButton'

const NAV_LINKS = [
    { key: 'nav_home' as const, href: '/' },
    { key: 'nav_about' as const, href: '/about' },
    { key: 'nav_services' as const, href: '/services' },
    { key: 'nav_projects' as const, href: '/projects' },
    { key: 'nav_why' as const, href: '/#why-us' },
    { key: 'nav_contact' as const, href: '/contact' },
]

const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
}

const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
    }),
}

export default function Navbar() {
    const { lang, setLang, t } = useLang()
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const docH = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            {/* Scroll progress bar */}
            <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
                <div
                    className="h-full bg-brand-gold transition-all duration-150 ease-linear"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <nav
                className={cn(
                    'fixed top-[2px] left-0 right-0 z-50 transition-all duration-500',
                    scrolled
                        ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-2 lg:py-3'
                        : 'bg-transparent py-4 lg:py-5'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 lg:gap-3">
                        <div className={cn(
                            'relative transition-all duration-300',
                            scrolled ? 'w-[32px] h-[32px] lg:w-[42px] lg:h-[42px]' : 'w-[36px] h-[36px] lg:w-[42px] lg:h-[42px]'
                        )}>
                            <Image
                                src="/images/repsam-logo.jpeg"
                                alt="Repsam"
                                fill
                                className="object-contain"
                                sizes="42px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                'font-serif font-bold text-brand-white tracking-[2px] leading-none transition-all duration-300',
                                scrolled ? 'text-[18px] lg:text-[22px]' : 'text-[20px] lg:text-[22px]'
                            )}>
                                REPSAM
                            </span>
                            <span
                                className="text-brand-gold text-[7px] lg:text-[8px] tracking-[3px] -mt-0.5"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                CONSTRUCTION
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => {
                            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href) && link.href !== '/'
                            return (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className={cn(
                                        'relative text-[13px] tracking-[1px] transition-colors duration-200 py-1',
                                        isActive ? 'text-brand-gold' : 'text-white/70 hover:text-brand-gold'
                                    )}
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                    {t(link.key)}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold" />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Desktop right side */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Language toggle */}
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden">
                            <button
                                onClick={() => setLang('en')}
                                className={cn(
                                    'px-3 py-1.5 text-[11px] font-bold tracking-[1px] transition-all duration-200',
                                    lang === 'en'
                                        ? 'bg-brand-gold text-brand-black'
                                        : 'text-white/50 hover:text-white'
                                )}
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang('tr')}
                                className={cn(
                                    'px-3 py-1.5 text-[11px] font-bold tracking-[1px] transition-all duration-200',
                                    lang === 'tr'
                                        ? 'bg-brand-gold text-brand-black'
                                        : 'text-white/50 hover:text-white'
                                )}
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                TR
                            </button>
                        </div>

                        <GoldButton href="/contact" size="sm">
                            {t('nav_cta')}
                        </GoldButton>
                    </div>

                    {/* Mobile: lang toggle + menu button */}
                    <div className="flex lg:hidden items-center gap-3">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden">
                            <button
                                onClick={() => setLang('en')}
                                className={cn(
                                    'px-2.5 py-1 text-[10px] font-bold tracking-[1px] transition-all duration-200',
                                    lang === 'en'
                                        ? 'bg-brand-gold text-brand-black'
                                        : 'text-white/50'
                                )}
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang('tr')}
                                className={cn(
                                    'px-2.5 py-1 text-[10px] font-bold tracking-[1px] transition-all duration-200',
                                    lang === 'tr'
                                        ? 'bg-brand-gold text-brand-black'
                                        : 'text-white/50'
                                )}
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                TR
                            </button>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-brand-white p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu — animated */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="lg:hidden fixed inset-0 top-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-5"
                        >
                            {NAV_LINKS.map((link, i) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href) && link.href !== '/'
                                return (
                                    <motion.div
                                        key={link.key}
                                        custom={i}
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={cn(
                                                'text-[20px] tracking-[3px] transition-colors block py-2',
                                                isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                                            )}
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        >
                                            {t(link.key)}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                custom={NAV_LINKS.length}
                                variants={linkVariants}
                                initial="closed"
                                animate="open"
                                className="mt-4"
                            >
                                <GoldButton href="/contact" size="sm" onClick={() => setMenuOpen(false)}>
                                    {t('nav_cta')}
                                </GoldButton>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}
