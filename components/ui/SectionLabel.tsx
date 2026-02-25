'use client'

import { cn } from '@/lib/utils'

interface SectionLabelProps {
    children: string
    centered?: boolean
    className?: string
}

export default function SectionLabel({ children, centered = false, className }: SectionLabelProps) {
    return (
        <div className={cn('flex items-center gap-4 mb-6', centered && 'justify-center', className)}>
            {centered && (
                <span className="block w-[60px] h-[1px] bg-brand-gold" />
            )}
            <span
                className="text-brand-gold text-[0.85rem] tracking-[3px] uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
                {children}
            </span>
            {centered && (
                <span className="block w-[60px] h-[1px] bg-brand-gold" />
            )}
        </div>
    )
}
