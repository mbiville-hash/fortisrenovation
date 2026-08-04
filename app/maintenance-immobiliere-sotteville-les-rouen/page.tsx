import type { Metadata } from 'next'
import CommunePage from '@/components/CommunePage'
import { getCommune } from '@/lib/communes'

const c = getCommune('sotteville-les-rouen')!
const SLUG = `/maintenance-immobiliere-${c.slug}`
const TITRE = 'Maintenance immobilière Sotteville-lès-Rouen'
const DESC =
  'Maintenance immobilière et remise en état locative à Sotteville-lès-Rouen : 15 193 logements, 49,4 % de locataires. Plomberie, électricité, peinture et sols. Devis sous 48h, rapport photo.'

export const metadata: Metadata = {
  title: TITRE,
  description: DESC,
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: DESC,
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

export default function Page() {
  return <CommunePage c={c} />
}
