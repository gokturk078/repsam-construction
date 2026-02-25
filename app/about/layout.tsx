import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us — Our Story & Team | Repsam Construction',
    description:
        'Learn about Repsam Construction Ltd. — Kyrenia\'s premier builder since 2014. Meet our leadership team, discover our values, and explore our decade-long journey of construction excellence in North Cyprus.',
    keywords: [
        'Repsam Construction about',
        'Kyrenia builder story',
        'North Cyprus construction company',
        'KKTC inşaat firması hakkında',
        'Girne inşaat şirketi',
    ],
    openGraph: {
        title: 'About Repsam Construction — Our Story',
        description: 'Premier construction company in Kyrenia, North Cyprus. Over 10 years of excellence.',
        url: 'https://repsamconstruction.com/about',
    },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}
