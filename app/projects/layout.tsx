import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Projects — Portfolio & Gallery | Repsam Construction',
    description:
        'Browse our portfolio of completed construction projects in Kyrenia, North Cyprus. Luxury villas, apartments, commercial buildings, infrastructure and landscaping — all built to European standards.',
    keywords: [
        'construction projects Kyrenia',
        'villa portfolio North Cyprus',
        'KKTC inşaat projeleri',
        'Girne villa projeleri',
        'konut projeleri Kuzey Kıbrıs',
        'ticari projeler',
    ],
    openGraph: {
        title: 'Our Projects — Repsam Construction Portfolio',
        description: '50+ completed projects across Kyrenia and North Cyprus. Luxury villas, apartments, and commercial developments.',
        url: 'https://repsamconstruction.com/projects',
    },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children
}
