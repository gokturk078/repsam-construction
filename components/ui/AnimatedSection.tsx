'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    fadeUpVariants,
    fadeInVariants,
    scaleInVariants,
    slideInLeft,
    slideInRight,
    clipRevealVariants,
} from '@/lib/animations'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
    children: React.ReactNode
    variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight' | 'clipReveal'
    delay?: number
    className?: string
    once?: boolean
}

const variantMap = {
    fadeUp: fadeUpVariants,
    fadeIn: fadeInVariants,
    scaleIn: scaleInVariants,
    slideLeft: slideInLeft,
    slideRight: slideInRight,
    clipReveal: clipRevealVariants,
}

export default function AnimatedSection({
    children,
    variant = 'fadeUp',
    delay = 0,
    className,
    once = true,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variantMap[variant]}
            custom={delay}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
