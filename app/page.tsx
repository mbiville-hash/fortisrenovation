import type { Metadata } from 'next'
import HeroA from '@/components/HeroA'
import StatsA from '@/components/StatsA'
import ClientsStrip from '@/components/ClientsStrip'
import ProsA from '@/components/ProsA'
import PartB from '@/components/PartB'
import AvisC from '@/components/AvisC'
import ZoneA from '@/components/ZoneA'
import FormA from '@/components/FormA'
import { BASE_SCHEMA } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
  description: 'Salle de bain design clé en main et maintenance immobilière à Rouen. Plan 3D inclus, devis clair sous 48h, chantier propre.',
  alternates: { canonical: 'https://www.fortisrenovation.fr' },
  openGraph: {
    title: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
    description: 'Salle de bain design clé en main, plan 3D inclus et maintenance immobilière à Rouen.',
    url: 'https://www.fortisrenovation.fr',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BASE_SCHEMA) }}
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
