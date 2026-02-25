'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GoldButtonProps {
    children: React.ReactNode
    href?: string
    onClick?: () => void
    variant?: 'solid' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    type?: 'button' | 'submit'
    darkBg?: boolean
}

const sizeClasses = {
    sm: 'px-5 py-2 text-[12px]',
    md: 'px-7 py-3 text-[13px]',
    lg: 'px-9 py-4 text-[14px]',
}

export default function GoldButton({
    children,
    href,
    onClick,
    variant = 'solid',
    size = 'md',
    className,
    type = 'button',
    darkBg = false,
}: GoldButtonProps) {
    const baseClasses = cn(
        'btn-shimmer inline-flex items-center justify-center gap-2 tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer',
        'font-medium',
        sizeClasses[size],
        variant === 'solid' && !darkBg && [
            'bg-brand-gold text-brand-black',
            'hover:bg-brand-gold-light hover:shadow-gold hover:-translate-y-0.5',
        ],
        variant === 'solid' && darkBg && [
            'bg-brand-black text-brand-white',
            'hover:bg-brand-navy hover:-translate-y-0.5',
        ],
        variant === 'outline' && !darkBg && [
            'border border-brand-gold text-brand-gold bg-transparent',
            'hover:bg-brand-gold hover:text-brand-black hover:-translate-y-0.5',
        ],
        variant === 'outline' && darkBg && [
            'border border-brand-black text-brand-black bg-transparent',
            'hover:bg-brand-black hover:text-brand-white hover:-translate-y-0.5',
        ],
        variant === 'ghost' && [
            'text-brand-gold bg-transparent',
            'hover:underline hover:underline-offset-4',
        ],
        className
    )

    const style = { fontFamily: 'Montserrat, sans-serif' }

    if (href) {
        return (
            <Link href={href} className={baseClasses} style={style}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={baseClasses} style={style}>
            {children}
        </button>
    )
}
