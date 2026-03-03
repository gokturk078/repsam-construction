import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import { LangProvider } from '@/lib/i18n'
import ClientOverlays from '@/components/ui/ClientOverlays'
import PageTransition from '@/components/ui/PageTransition'
import SmoothScroll from '@/components/ui/SmoothScroll'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://repsamconstruction.com'),
  title: {
    default: 'Repsam Construction — Kyrenia\'s #1 Premium Builder',
    template: '%s | Repsam Construction',
  },
  description:
    'Repsam Construction: Kyrenia\'s premier partner for luxury villas, commercial developments, and infrastructure. European standards, Mediterranean mastery since 2014.',
  keywords: [
    'Repsam Construction Kyrenia',
    'luxury villa Cyprus builder',
    'North Cyprus construction company',
    'Girne inşaat firması',
    'Kyrenia premium villas',
    'commercial builder Cyprus',
    'infrastructure projects KKTC',
    'North Cyprus real estate construction',
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
    '@type': 'ConstructionBusiness',
    '@id': 'https://repsamconstruction.com/#business',
    name: 'Repsam Construction Ltd.',
    description: 'Premier construction company in Kyrenia, North Cyprus. European-standard luxury villas, commercial projects and infrastructure.',
    url: 'https://repsamconstruction.com',
    logo: 'https://repsamconstruction.com/images/repsam-logo.jpeg',
    image: 'https://repsamconstruction.com/opengraph-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Girne City Center',
      addressLocality: 'Kyrenia',
      addressRegion: 'North Cyprus',
      addressCountry: 'CY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.3347,
      longitude: 33.3217,
    },
    telephone: '+90-533-840-50-60',
    email: 'info@repsamconstruction.com',
    priceRange: '€€€',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
    areaServed: [
      { '@type': 'City', name: 'Kyrenia' },
      { '@type': 'City', name: 'Girne' },
      { '@type': 'City', name: 'Nicosia' },
      { '@type': 'City', name: 'Famagusta' },
      { '@type': 'Country', name: 'North Cyprus' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Villa Construction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Building Projects' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Urban Infrastructure' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mediterranean Landscaping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Renovation & Restoration' } },
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
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`antialiased film-grain ${inter.className}`}>
        <LangProvider>
          <SmoothScroll>
            <ClientOverlays />
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  )
}
