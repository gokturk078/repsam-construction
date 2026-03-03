import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import type { Metadata } from 'next'
import ProjectClientPage from './ProjectClientPage'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) return { title: 'Project Not Found' }

    return {
        title: `${project.title_en} | Repsam Projects`,
        description: project.description_en,
        openGraph: {
            images: [project.mainImage]
        }
    }
}

export async function generateStaticParams() {
    return getAllProjects().map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) notFound()

    return <ProjectClientPage project={project} />
}
