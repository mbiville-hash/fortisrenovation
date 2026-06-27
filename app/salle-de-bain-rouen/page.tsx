import type { Metadata } from 'next'
import { BathroomPillar, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema, imageObjectSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rénovation salle de bain Rouen — Design clé en main & plan 3D',
  description: 'Salle de bain design clé en main à Rouen : plan 3D inclus, devis détaillé, chantier propre, finitions soignées. Fortis Rénovation.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
  openGraph: {
    title: 'Rénovation salle de bain Rouen — Design clé en main',
    description: 'Plan 3D, devis clair, chantier propre et livraison soignée pour votre salle de bain à Rouen.',
    url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/salle-de-bain-rouen-hero.jpg', width: 1600, height: 1200, alt: 'Rénovation de salle de bain en marbre à Rouen' }],
  },
}

const faqs: BathroomFaq[] = [
  {
    q: 'Combien coûte une rénovation de salle de bain à Rouen ?',
    a: 'Une rénovation ciblée commence souvent autour de 3 500 à 7 500 €. Une rénovation complète se situe plutôt entre 8 000 et 15 000 €, et davantage pour une salle de bain design avec finitions haut de gamme. Le devis précis dépend de la pièce, des réseaux et des matériaux.',
  },
  {
    q: 'Le plan 3D est-il vraiment inclus ?',
    a: 'Oui. Le plan 3D fait partie de notre méthode pour valider les volumes, l’ambiance et les principaux choix avant le démarrage du chantier.',
  },
  {
    q: 'Combien de temps dure le chantier ?',
    a: 'Selon la dépose, la plomberie, le carrelage et les finitions, une salle de bain complète demande généralement quelques jours à deux semaines. Le planning est posé dans le devis.',
  },
  {
    q: 'Intervenez-vous hors Rouen ?',
    a: 'Oui. Nous intervenons à Rouen, Bois-Guillaume, Mont-Saint-Aignan, Sotteville-lès-Rouen, Petit-Quevilly, Grand-Quevilly, Déville-lès-Rouen et dans la métropole.',
  },
]

export default function SalleDeBainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Rénovation salle de bain Rouen',
        'Rénovation de salle de bain design clé en main à Rouen. Plan 3D inclus, devis détaillé et chantier propre.',
        '/salle-de-bain-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Rénovation salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema(
        'https://www.fortisrenovation.fr/salle-de-bain-rouen-hero.jpg',
        'Salle de bain en marbre rénovée à Rouen',
        'Rénovation de salle de bain à Rouen : marbre, douche à l’italienne et meuble suspendu'
      ))}} />
      <BathroomPillar faqs={faqs} />
    </>
  )
}
