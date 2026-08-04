import type { Metadata } from 'next'
import HeroA from '@/components/HeroA'
import StatsA from '@/components/StatsA'
import ProLocatif from '@/components/ProLocatif'
import ReactiviteTimeline from '@/components/ReactiviteTimeline'
import ClientsStrip from '@/components/ClientsStrip'
import AvisC from '@/components/AvisC'
import ZoneA from '@/components/ZoneA'
import FormA from '@/components/FormA'
import Realisations from '@/components/Realisations'
import GuidesLies from '@/components/GuidesLies'
import { guidesPro } from '@/lib/guides'
import { BASE_SCHEMA } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Fortis Rénovation — Maintenance immobilière & remise en état locative à Rouen',
  description: 'Maintenance immobilière et remise en état de logements locatifs à Rouen pour bailleurs, gestionnaires et syndics. Devis sous 48h, rapport photo, interlocuteur unique. 5/5 sur Google.',
  alternates: { canonical: 'https://www.fortisrenovation.fr' },
  openGraph: {
    title: 'Fortis Rénovation — Maintenance immobilière & remise en état locative à Rouen',
    description: 'Remise en état de logements locatifs, dépannages et maintenance immobilière à Rouen. Devis sous 48h, rapport photo, un seul interlocuteur.',
    url: 'https://www.fortisrenovation.fr',
    images: OG_IMAGE,
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
        <ProLocatif />
        <ReactiviteTimeline />
        <ClientsStrip />
        <Realisations />
        <AvisC />
        <GuidesLies
          guides={guidesPro}
          titre="Ce qu’il faut savoir avant d’engager des travaux"
          intro="Nos guides pour bailleurs, gestionnaires et syndics — références légales vérifiées et outils pour trancher."
        />
        <ZoneA />
        <FormA />
      </main>
    </>
  )
}
