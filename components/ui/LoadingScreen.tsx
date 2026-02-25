'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [show, setShow] = useState(false)
    const [exit, setExit] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('repsam_loaded')) return
        setShow(true)
        const timer = setTimeout(() => {
            setExit(true)
            sessionStorage.setItem('repsam_loaded', '1')
        }, 1800)
        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <AnimatePresence>
            {!exit && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-black"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex flex-col items-center gap-2 mb-10"
                    >
                        <span className="font-serif text-[48px] md:text-[64px] font-bold text-brand-white tracking-[6px]">
                            REPSAM
                        </span>
                        <span
                            className="text-brand-gold text-[10px] md:text-[12px] tracking-[6px]"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            CONSTRUCTION
                        </span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-brand-gold to-yellow-500"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
