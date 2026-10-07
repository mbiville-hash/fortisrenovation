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
  title: 'Plombier & petits travaux à Rouen',
  description: 'Dépannage plomberie, fuite, peinture, enduits et sols à Rouen. Particuliers, bailleurs et syndics. Devis sous 48h. 5/5 sur Google.',
  alternates: { canonical: 'https://www.fortisrenovation.fr' },
  openGraph: {
    title: 'Fortis Rénovation — Plombier & petits travaux à Rouen',
    description: 'Dépannage plomberie, fuite, peinture, enduits et sols à Rouen. Particuliers, bailleurs et syndics. Devis sous 48h. 5/5 sur Google.',
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
