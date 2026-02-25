export default function Loading() {
    return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Gold shimmer spinner */}
                <div className="relative w-12 h-12">
                    <div
                        className="absolute inset-0 rounded-full border-2 border-brand-gold/20"
                    />
                    <div
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-gold animate-spin"
                    />
                </div>
                {/* Brand text */}
                <div className="text-center">
                    <p className="font-serif text-brand-white text-[18px] tracking-[4px]">REPSAM</p>
                    <p className="text-brand-gold text-[9px] tracking-[3px] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        CONSTRUCTION
                    </p>
                </div>
            </div>
        </div>
    )
}
