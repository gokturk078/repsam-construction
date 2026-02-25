'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const [hovering, setHovering] = useState(false)
    const [visible, setVisible] = useState(false)
    const pos = useRef({ x: 0, y: 0 })
    const ringPos = useRef({ x: 0, y: 0 })
    const raf = useRef<number>(0)

    useEffect(() => {
        // Skip on touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY }
            if (!visible) setVisible(true)
        }

        const onEnter = () => setVisible(true)
        const onLeave = () => setVisible(false)

        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
            }
            // Ring follows with easing
            ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
            ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`
            }
            raf.current = requestAnimationFrame(animate)
        }

        // Detect hoverable elements
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
                setHovering(true)
            }
        }
        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
                setHovering(false)
            }
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseenter', onEnter)
        document.addEventListener('mouseleave', onLeave)
        document.addEventListener('mouseover', onMouseOver)
        document.addEventListener('mouseout', onMouseOut)
        raf.current = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseenter', onEnter)
            document.removeEventListener('mouseleave', onLeave)
            document.removeEventListener('mouseover', onMouseOver)
            document.removeEventListener('mouseout', onMouseOut)
            cancelAnimationFrame(raf.current)
        }
    }, [visible])

    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null
    }

    return (
        <>
            {/* Hide default cursor via CSS */}
            <style jsx global>{`
                *, *::before, *::after { cursor: none !important; }
            `}</style>

            {/* Gold dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#C8A55C',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.2s',
                }}
            />

            {/* Gold ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 z-[9997] pointer-events-none"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: `2px solid rgba(200, 165, 92, ${hovering ? 0.8 : 0.3})`,
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.2s, width 0.3s, height 0.3s, border-color 0.3s',
                    ...(hovering ? { width: 56, height: 56, marginLeft: -8, marginTop: -8 } : {}),
                }}
            />
        </>
    )
}
