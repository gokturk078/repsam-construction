'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import StatsBar from '@/components/home/StatsBar'
import CTAStrip from '@/components/home/CTAStrip'
import { getProjectBySlug } from '@/lib/projects'
import { useLang } from '@/lib/i18n'

export default function ProjectsPage() {
    const { t } = useLang()
    const heroProject = getProjectBySlug('project-complex-01')

    return (
        <main>
            <Navbar />
            <PageHero
                imageSrc={heroProject?.mainImage}
                alt="Projects"
                label={t('portfolio_label')}
                title={t('portfolio_title')}
                breadcrumbHome={t('breadcrumb_home')}
                breadcrumbCurrent={t('nav_projects')}
            />
            <StatsBar />
            <ProjectsGallery showAll />
            <CTAStrip />
            <Footer />
        </main>
    )
}
