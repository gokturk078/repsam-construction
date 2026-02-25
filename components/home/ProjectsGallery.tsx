'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GoldButton from '@/components/ui/GoldButton'
import { getProjectImages, type ProjectImage } from '@/lib/images'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const CATEGORY_KEYS: { cat: string; key: TranslationKey }[] = [
    { cat: 'all', key: 'filter_all' },
    { cat: 'residential', key: 'filter_residential' },
    { cat: 'commercial', key: 'filter_commercial' },
    { cat: 'construction', key: 'filter_construction' },
    { cat: 'infrastructure', key: 'filter_infrastructure' },
    { cat: 'landscaping', key: 'filter_technology' },
    { cat: 'interior', key: 'filter_interior' },
]

interface ProjectsGalleryProps {
    showAll?: boolean
}

export default function ProjectsGallery({ showAll = false }: ProjectsGalleryProps) {
    const { t } = useLang()
    const [activeCategory, setActiveCategory] = useState('all')
    const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
    const [visibleCount, setVisibleCount] = useState(showAll ? 100 : 9)

    const allImages = useMemo(() => getProjectImages(), [])

    const filteredImages = useMemo(() => {
        if (activeCategory === 'all') return allImages
        return allImages.filter(img => img.category === activeCategory)
    }, [activeCategory, allImages])

    const displayedImages = filteredImages.slice(0, visibleCount)

    return (
        <section id="projects" className="section-padding bg-brand-black">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <SectionLabel centered>{t('projects_label')}</SectionLabel>
                    <h2
                        className="font-serif font-bold text-brand-white mb-4"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
                    >
                        {t('projects_title')}
                    </h2>
                </AnimatedSection>

                {/* Filter Tabs */}
                <div className="flex lg:flex-wrap lg:justify-center gap-2 mb-12 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible snap-x snap-mandatory">
                    {CATEGORY_KEYS.map(({ cat, key }) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setVisibleCount(showAll ? 100 : 9) }}
                            className={`px-5 py-2.5 text-[12px] tracking-[1px] uppercase transition-all duration-300 shrink-0 snap-start min-h-[44px] ${activeCategory === cat
                                ? 'bg-brand-gold text-brand-black'
                                : 'bg-transparent border border-[#333] text-brand-gray hover:border-brand-gold/50 hover:text-brand-white'
                                }`}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {t(key)}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                    {displayedImages.map((image, i) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="relative overflow-hidden mb-4 cursor-pointer group break-inside-avoid"
                            onClick={() => setSelectedImage(image)}
                        >
                            <SmartImage
                                src={image.src}
                                fallbackSrc={image.fallbackSrc}
                                alt={image.id}
                                width={image.width}
                                height={image.height}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5">
                                <span
                                    className="inline-block bg-brand-gold text-brand-black px-3 py-1 text-[10px] tracking-[1px] uppercase mb-2 w-fit"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                    {image.category}
                                </span>
                                <h4 className="font-serif text-[18px] text-brand-white font-semibold">
                                    {image.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </h4>
                                <span className="text-brand-gold text-[13px] mt-2">{t('view_project')}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More */}
                {!showAll && filteredImages.length > visibleCount && (
                    <div className="text-center mt-12">
                        <GoldButton onClick={() => setVisibleCount(prev => prev + 9)} variant="outline">
                            {t('view_more')}
                        </GoldButton>
                    </div>
                )}
                {!showAll && (
                    <div className="text-center mt-6">
                        <GoldButton href="/projects" variant="ghost">
                            {t('view_all')}
                        </GoldButton>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-lg flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-4xl w-full bg-[#111] border border-[#222] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video">
                                <SmartImage
                                    src={selectedImage.src}
                                    fallbackSrc={selectedImage.fallbackSrc}
                                    alt={selectedImage.id}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <span
                                        className="text-brand-gold text-[11px] tracking-[2px] uppercase"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {selectedImage.category}
                                    </span>
                                    <h3 className="font-serif text-[22px] font-bold text-brand-white mt-1">
                                        {selectedImage.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="text-brand-gold hover:text-brand-gold-light transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
