import type { Metadata } from 'next'
import { LangProvider } from '@/lib/i18n'
import ClientOverlays from '@/components/ui/ClientOverlays'
import PageTransition from '@/components/ui/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://repsamconstruction.com'),
  title: {
    default: 'Repsam Construction Ltd. | Premium Builder in Kyrenia, North Cyprus',
    template: '%s | Repsam Construction',
  },
  description:
    'Premier construction company in Kyrenia, North Cyprus. Luxury villas, commercial projects, infrastructure and renovation solutions. European-standard quality since 2014.',
  keywords: [
    'Repsam Construction',
    'Kyrenia construction',
    'North Cyprus builder',
    'KKTC inşaat',
    'luxury villa Cyprus',
    'Girne inşaat',
    'Kuzey Kıbrıs inşaat şirketi',
    'villa construction Kyrenia',
    'commercial building North Cyprus',
    'construction company TRNC',
    'Girne müteahhit',
    'premium builder Cyprus',
    'infrastructure Kyrenia',
    'renovation North Cyprus',
    'Repsam Girne',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: 'https://repsamconstruction.com',
    siteName: 'Repsam Construction Ltd.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1920,
        height: 1080,
        alt: 'Repsam Construction — Premium Builder in Kyrenia, North Cyprus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repsam Construction Ltd. | Premium Builder in Kyrenia',
    description: 'Premier construction company in Kyrenia, North Cyprus. Luxury villas, commercial projects and infrastructure solutions.',
    images: ['/opengraph-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://repsamconstruction.com',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://repsamconstruction.com/#business',
    name: 'Repsam Construction Ltd.',
    description: 'Premier construction company in Kyrenia, North Cyprus. European-standard luxury villas, commercial projects and infrastructure.',
    url: 'https://repsamconstruction.com',
    logo: 'https://repsamconstruction.com/images/repsam-logo.jpeg',
    image: 'https://repsamconstruction.com/opengraph-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kyrenia',
      addressRegion: 'North Cyprus',
      addressCountry: 'CY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.34,
      longitude: 33.31,
    },
    telephone: '+90-533-840-50-60',
    email: 'info@repsamconstruction.com',
    priceRange: '€€€',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
    areaServed: [
      { '@type': 'City', name: 'Kyrenia' },
      { '@type': 'Country', name: 'North Cyprus' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Construction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Construction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrastructure' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscaping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Renovation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consulting' } },
      ],
    },
    sameAs: [
      'https://www.instagram.com/repsam_construction.cyp',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Repsam Construction Ltd.',
    url: 'https://repsamconstruction.com',
    logo: 'https://repsamconstruction.com/images/repsam-logo.jpeg',
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased film-grain">
        <LangProvider>
          <ClientOverlays />
          <PageTransition>{children}</PageTransition>
        </LangProvider>
      </body>
    </html>
  )
}
