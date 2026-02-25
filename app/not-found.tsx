'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GoldButton from '@/components/ui/GoldButton'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-brand-black flex items-center justify-center relative overflow-hidden">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(200,165,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,165,92,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative z-10 text-center px-6">
                {/* Giant 404 */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-serif text-brand-gold font-bold leading-none"
                    style={{ fontSize: 'clamp(8rem, 20vw, 16rem)' }}
                >
                    404
                </motion.h1>

                {/* Gold line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-20 h-[2px] gold-gradient-animated mx-auto my-6"
                />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-brand-white text-[18px] font-serif mb-2"
                >
                    Page Not Found
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-brand-gray text-[14px] mb-8 max-w-md mx-auto"
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <GoldButton href="/" size="lg">
                        Back to Home
                    </GoldButton>
                </motion.div>
            </div>
        </main>
    )
}
