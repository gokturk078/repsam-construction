'use client'

export default function MarqueeStrip() {
    const text = 'PREMIUM CONSTRUCTION · KYRENIA, NORTH CYPRUS · EST. 2014 · LUXURY VILLAS · COMMERCIAL PROJECTS · SMART BUILDINGS · EUROPEAN STANDARDS · '

    return (
        <div
            className="w-full h-12 bg-brand-gold overflow-hidden flex items-center"
            style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' }}
        >
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className="text-brand-black text-[12px] font-bold tracking-[3px] mx-4"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    )
}
