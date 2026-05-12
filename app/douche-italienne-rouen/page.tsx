import type { Metadata } from 'next'
import { BathroomSupportPage, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Douche italienne Rouen — Salle de bain design & étanche',
  description: 'Création de douche italienne à Rouen : receveur extra-plat, étanchéité, carrelage, paroi, robinetterie et finitions soignées.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/douche-italienne-rouen' },
  openGraph: {
    title: 'Douche italienne Rouen — Fortis Rénovation',
    description: 'Une douche italienne bien pensée : accès confortable, étanchéité sérieuse, finitions propres.',
    url: 'https://www.fortisrenovation.fr/douche-italienne-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/salle-de-bain-3d.jpg', width: 1200, height: 900, alt: 'Douche italienne à Rouen' }],
  },
}

const faqs: BathroomFaq[] = [
  {
    q: 'Peut-on installer une douche italienne dans toutes les salles de bain ?',
    a: 'Pas toujours en vrai plain-pied. Il faut vérifier la hauteur disponible pour l’évacuation, la pente, le support et l’étanchéité. Quand le plain-pied strict n’est pas possible, un receveur extra-plat reste une solution élégante.',
  },
  {
    q: 'Quel est le point le plus important ?',
    a: 'L’étanchéité. Une belle douche qui fuit est un mauvais chantier. Nous traitons le support, les angles, les joints, les pentes et les raccords avant de penser aux finitions.',
  },
  {
    q: 'Combien coûte une douche italienne à Rouen ?',
    a: 'Le budget dépend de la dépose, des reprises de plomberie, du carrelage et de la paroi. La douche seule peut représenter quelques milliers d’euros dans une rénovation ciblée, davantage dans une salle de bain complète.',
  },
]

export default function DoucheItalienneRouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Douche italienne Rouen',
        'Création de douche italienne à Rouen : étanchéité, carrelage, paroi et robinetterie.',
        '/douche-italienne-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
        { name: 'Douche italienne Rouen', url: 'https://www.fortisrenovation.fr/douche-italienne-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BathroomSupportPage
        eyebrow="Douche italienne · Rouen"
        title="Douche italienne à Rouen : belle, pratique, vraiment étanche."
        intro="Une douche italienne réussie ne se limite pas au carrelage. Elle demande une pente juste, une évacuation fiable, une étanchéité soignée et des finitions alignées."
        heroImage="/salle-de-bain-3d.jpg"
        heroAlt="Projet de douche italienne dans une salle de bain à Rouen"
        proof={['Receveur extra-plat ou plain-pied selon faisabilité', 'Étanchéité et évacuation traitées avant finition', 'Plan 3D pour valider volumes et paroi', 'Chantier coordonné avec plomberie et carrelage']}
        sections={[
          {
            title: 'Le plain-pied dépend de la technique',
            text: 'Le vrai niveau zéro demande assez de hauteur pour intégrer l’évacuation. Si la pièce ne le permet pas, nous proposons une alternative extra-plate qui garde l’usage confortable et le rendu visuel premium.',
          },
          {
            title: 'L’étanchéité passe avant le style',
            text: 'Le choix de la membrane, le traitement des angles, la pente, les joints et les traversées de plomberie sont vérifiés avant la pose décorative.',
          },
          {
            title: 'Les finitions font la différence',
            text: 'Paroi, robinetterie, niche, carrelage et éclairage doivent fonctionner ensemble. Le plan 3D permet de valider cette cohérence avant travaux.',
          },
        ]}
        faqs={faqs}
      />
    </>
  )
}
