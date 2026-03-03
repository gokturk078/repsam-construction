'use client'

import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
    strength?: number
}

export default function MagneticButton({
    children,
    className,
    onClick,
    strength = 0.4
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = buttonRef.current!.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        setPosition({ x: x * strength, y: y * strength })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-fit h-fit"
        >
            <motion.div
                animate={{ x: position.x, y: position.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                onClick={onClick}
                className={cn("cursor-pointer", className)}
            >
                {children}
            </motion.div>
        </div>
    )
}
