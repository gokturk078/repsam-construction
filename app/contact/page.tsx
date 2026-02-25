'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, Clock, Instagram, CheckCircle, AlertCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SmartImage from '@/components/ui/SmartImage'
import GoldButton from '@/components/ui/GoldButton'
import { getImageById } from '@/lib/images'
import { useLang } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n'

const contactSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().optional(),
    projectType: z.string().min(1, 'Please select a project type'),
    budget: z.string().min(1, 'Please select a budget range'),
    message: z.string().min(20, 'Please provide at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const CONTACT_INFO: { icon: typeof MapPin; labelKey: TranslationKey; valueKey?: TranslationKey; staticValue?: string }[] = [
    { icon: MapPin, labelKey: 'ci_address', valueKey: 'ci_address_val' },
    { icon: Phone, labelKey: 'ci_phone', staticValue: '+90 (533) 840 50 60' },
    { icon: Mail, labelKey: 'ci_email', staticValue: 'info@repsamconstruction.com' },
    { icon: Clock, labelKey: 'ci_hours', valueKey: 'ci_hours_val' },
    { icon: Instagram, labelKey: 'ci_instagram', staticValue: '@repsam_construction.cyp' },
]

const PROJECT_TYPE_KEYS: TranslationKey[] = [
    'pt_residential', 'pt_commercial', 'pt_infrastructure', 'pt_landscaping', 'pt_renovation', 'pt_consulting', 'pt_other',
]

const BUDGET_KEYS: TranslationKey[] = [
    'br_under100k', 'br_100_500', 'br_500_1m', 'br_1mplus', 'br_discuss',
]

export default function ContactPage() {
    const { t } = useLang()
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!res.ok) throw new Error('Failed to send')
            setSubmitStatus('success')
            reset()
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } catch {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    const inputClasses =
        'w-full bg-[#111] border border-[#333] text-brand-white px-4 py-3 text-[14px] focus:border-brand-gold focus:outline-none transition-colors duration-300 placeholder:text-brand-gray/50'
    const labelClasses = 'block text-brand-white text-[13px] mb-2 tracking-[1px] uppercase'

    return (
        <main>
            <Navbar />

            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                {(() => { const img = getImageById('blueprint-planning'); return img ? <SmartImage src={img.src} fallbackSrc={img.fallbackSrc} alt="Contact" fill priority sizes="100vw" /> : null })()}
                <div className="absolute inset-0 bg-brand-black/75" />
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <SectionLabel centered>{t('contact_label')}</SectionLabel>
                        <h1 className="font-serif text-brand-white font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                            {t('contact_title')}
                        </h1>
                        <p className="text-brand-gray mt-3 text-[14px]">
                            {t('breadcrumb_home')} / <span className="text-brand-gold">{t('nav_contact')}</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding bg-brand-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left — Form */}
                        <AnimatedSection variant="slideLeft">
                            <h2
                                className="font-serif font-bold text-brand-white mb-8"
                                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                            >
                                {t('form_start_project')}
                            </h2>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 bg-green-900/30 border border-green-500/30 px-5 py-4 mb-6"
                                >
                                    <CheckCircle size={20} className="text-green-400 shrink-0" />
                                    <div>
                                        <p className="text-green-400 font-medium text-[14px]">{t('form_success')}</p>
                                        <p className="text-green-400/70 text-[13px]">{t('form_success_sub')}</p>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 bg-red-900/30 border border-red-500/30 px-5 py-4 mb-6"
                                >
                                    <AlertCircle size={20} className="text-red-400 shrink-0" />
                                    <p className="text-red-400 text-[14px]">{t('form_error')}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div>
                                    <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {t('form_name')} *
                                    </label>
                                    <input
                                        {...register('fullName')}
                                        placeholder={t('ph_fullname')}
                                        className={inputClasses}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-400 text-[12px] mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {t('form_email')} *
                                        </label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            placeholder="your@email.com"
                                            className={inputClasses}
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-[12px] mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {t('form_phone')}
                                        </label>
                                        <input
                                            {...register('phone')}
                                            placeholder="+90 (533) 840 50 60"
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {t('form_type')} *
                                        </label>
                                        <select {...register('projectType')} className={inputClasses}>
                                            <option value="">{t('ph_select_type')}</option>
                                            {PROJECT_TYPE_KEYS.map((key) => (
                                                <option key={key} value={t(key)}>
                                                    {t(key)}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.projectType && (
                                            <p className="text-red-400 text-[12px] mt-1">{errors.projectType.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {t('form_budget')} *
                                        </label>
                                        <select {...register('budget')} className={inputClasses}>
                                            <option value="">{t('ph_select_budget')}</option>
                                            {BUDGET_KEYS.map((key) => (
                                                <option key={key} value={t(key)}>
                                                    {t(key)}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.budget && (
                                            <p className="text-red-400 text-[12px] mt-1">{errors.budget.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {t('form_message')} *
                                    </label>
                                    <textarea
                                        {...register('message')}
                                        rows={5}
                                        placeholder={t('ph_message')}
                                        className={inputClasses + ' resize-none'}
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-[12px] mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <GoldButton type="submit" className="w-full" size="lg">
                                    {isSubmitting ? t('form_sending') : t('form_submit')}
                                </GoldButton>
                            </form>
                        </AnimatedSection>

                        {/* Right — Info + Map */}
                        <AnimatedSection variant="slideRight">
                            <h3
                                className="font-serif font-bold text-brand-white mb-8"
                                style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}
                            >
                                {t('form_get_in_touch')}
                            </h3>

                            <div className="space-y-5 mb-10">
                                {CONTACT_INFO.map((item) => (
                                    <div key={item.labelKey} className="flex items-start gap-4">
                                        <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-brand-gold/30 bg-brand-gold/5">
                                            <item.icon size={18} className="text-brand-gold" />
                                        </div>
                                        <div>
                                            <p
                                                className="text-brand-gold text-[11px] tracking-[1.5px] uppercase"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            >
                                                {t(item.labelKey)}
                                            </p>
                                            <p className="text-brand-white text-[14px] mt-0.5">
                                                {item.valueKey ? t(item.valueKey) : item.staticValue}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="relative border-2 border-brand-gold/30 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26163.44073741573!2d33.31!3d35.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17c95c31434f%3A0x7dffde5bad311e4e!2sKyrenia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, filter: 'grayscale(1) invert(1) hue-rotate(190deg) brightness(0.7) sepia(0.2) contrast(0.9)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Repsam Construction Location - Kyrenia, North Cyprus"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
