import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us — Free Consultation | Repsam Construction',
    description:
        'Get in touch with Repsam Construction Ltd. in Kyrenia, North Cyprus. Request a free consultation, project estimate or schedule a meeting with our team. Phone: +90 533 840 50 60.',
    keywords: [
        'contact Repsam Construction',
        'construction consultation Kyrenia',
        'North Cyprus builder contact',
        'Girne inşaat iletişim',
        'ücretsiz danışmanlık',
        'proje teklifi',
    ],
    openGraph: {
        title: 'Contact Repsam Construction — Free Consultation',
        description: 'Request a free consultation for your construction project in North Cyprus.',
        url: 'https://repsamconstruction.com/contact',
    },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
