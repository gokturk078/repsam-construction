import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services — Premium Construction Solutions | Repsam',
    description:
        'Residential construction, commercial projects, infrastructure, landscaping, renovation and consulting services in Kyrenia, North Cyprus. European-standard quality with Repsam Construction.',
    keywords: [
        'construction services Kyrenia',
        'villa building North Cyprus',
        'commercial construction KKTC',
        'Girne inşaat hizmetleri',
        'konut inşaatı Kuzey Kıbrıs',
        'altyapı inşaat',
        'peyzaj düzenleme',
    ],
    openGraph: {
        title: 'Our Services — Repsam Construction',
        description: 'Full-spectrum construction services: residential, commercial, infrastructure, landscaping, renovation & consulting.',
        url: 'https://repsamconstruction.com/services',
    },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children
}
