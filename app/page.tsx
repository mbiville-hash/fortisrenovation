import type { Metadata } from 'next'
import HeroA from '@/components/HeroA'
import StatsA from '@/components/StatsA'
import ClientsStrip from '@/components/ClientsStrip'
import ProsA from '@/components/ProsA'
import PartB from '@/components/PartB'
import AvisC from '@/components/AvisC'
import ZoneA from '@/components/ZoneA'
import FormA from '@/components/FormA'

export const metadata: Metadata = {
  title: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
  description: 'Rénovation salle de bain et maintenance immobilière à Rouen. Plan 3D inclus, devis sous 48h. Syndics, bailleurs, particuliers.',
  alternates: { canonical: 'https://fortis-renovation.fr' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fortis Rénovation',
  description: 'Rénovation salle de bain et maintenance immobilière à Rouen.',
  url: 'https://fortis-renovation.fr',
  telephone: '+33600000000',
  email: 'contact@fortis-renovation.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Rouen',
    postalCode: '76000',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 49.4432, longitude: 1.0993 },
  areaServed: { '@type': 'City', name: 'Rouen' },
  priceRange: '€€',
  openingHours: 'Mo-Fr 08:00-18:00',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroA />
        <StatsA />
        <ClientsStrip />
        <ProsA />
        <PartB />
        <AvisC />
        <ZoneA />
        <FormA />
      </main>
    </>
  )
}
