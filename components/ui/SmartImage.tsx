'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SmartImageProps {
    src: string
    fallbackSrc?: string
    alt: string
    fill?: boolean
    width?: number
    height?: number
    priority?: boolean
    sizes?: string
    className?: string
    style?: React.CSSProperties
}

export default function SmartImage({
    src,
    fallbackSrc,
    alt,
    fill = false,
    width,
    height,
    priority = false,
    sizes,
    className = '',
    style,
}: SmartImageProps) {
    const [currentSrc, setCurrentSrc] = useState(src)
    const [hasError, setHasError] = useState(false)

    const handleError = () => {
        if (!hasError && fallbackSrc) {
            setCurrentSrc(fallbackSrc)
            setHasError(true)
        }
    }

    if (fill) {
        return (
            <Image
                src={currentSrc}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
                className={className}
                style={{ objectFit: 'cover', ...style }}
                onError={handleError}
            />
        )
    }

    return (
        <Image
            src={currentSrc}
            alt={alt}
            width={width || 1200}
            height={height || 800}
            priority={priority}
            sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
            className={className}
            style={style}
            onError={handleError}
        />
    )
}
