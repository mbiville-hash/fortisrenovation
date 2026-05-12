import type { Metadata } from 'next'
import { BathroomSupportPage, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Prix rénovation salle de bain Rouen — Budget & devis clair',
  description: 'Prix d’une rénovation de salle de bain à Rouen : fourchettes, postes de coût, plan 3D et devis détaillé avec Fortis Rénovation.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/prix-renovation-salle-de-bain-rouen' },
  openGraph: {
    title: 'Prix rénovation salle de bain Rouen',
    description: 'Comprendre le budget d’une salle de bain : dépose, plomberie, carrelage, sanitaires, finitions.',
    url: 'https://www.fortisrenovation.fr/prix-renovation-salle-de-bain-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/plan-salle-de-bain.png', width: 1200, height: 900, alt: 'Budget rénovation salle de bain Rouen' }],
  },
}

const faqs: BathroomFaq[] = [
  {
    q: 'Quel prix prévoir pour refaire une salle de bain à Rouen ?',
    a: 'Pour un rafraîchissement ciblé, prévoyez souvent 3 500 à 7 500 €. Pour une rénovation complète, comptez plutôt 8 000 à 15 000 €. Une salle de bain design clé en main peut dépasser 15 000 € selon les matériaux et contraintes.',
  },
  {
    q: 'Pourquoi les devis varient-ils autant ?',
    a: 'Les écarts viennent surtout de la dépose, des reprises de plomberie, de l’état des murs/sols, de la surface carrelée, de la gamme sanitaire et du niveau de finition attendu.',
  },
  {
    q: 'Le devis est-il gratuit ?',
    a: 'Oui. La visite et le devis sont gratuits. Le plan 3D est intégré à notre méthode pour clarifier le projet avant engagement.',
  },
]

export default function PrixRenovationSalleDeBainRouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Prix rénovation salle de bain Rouen',
        'Budget et devis pour une rénovation de salle de bain à Rouen.',
        '/prix-renovation-salle-de-bain-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
        { name: 'Prix rénovation salle de bain Rouen', url: 'https://www.fortisrenovation.fr/prix-renovation-salle-de-bain-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BathroomSupportPage
        eyebrow="Budget salle de bain · Rouen"
        title="Prix d’une rénovation de salle de bain à Rouen : comprendre avant de signer."
        intro="Un budget sérieux ne se résume pas à une surface en mètres carrés. Nous détaillons les postes pour décider sur des bases propres."
        heroImage="/plan-salle-de-bain.png"
        heroAlt="Plan 3D utilisé pour chiffrer une rénovation de salle de bain à Rouen"
        proof={['Fourchettes réalistes avant visite', 'Devis poste par poste', 'Plan 3D pour éviter les malentendus', 'Prix validé avant démarrage']}
        sections={[
          {
            title: 'Les postes qui pèsent le plus',
            text: 'Dépose, plomberie, étanchéité, carrelage, meuble vasque, douche, robinetterie, éclairage et finitions. Le devis indique ce qui est inclus et ce qui ne l’est pas.',
          },
          {
            title: 'Les fourchettes utiles',
            text: 'Un projet ciblé peut rester sous 7 500 €. Une rénovation complète se situe souvent entre 8 000 et 15 000 €. Les choix design, grands formats et reprises techniques peuvent faire monter le budget.',
          },
          {
            title: 'Le bon prix est celui qui évite les surprises',
            text: 'Nous préférons un devis lisible à une estimation séduisante mais floue. Le client sait ce qui sera posé, quand, et dans quelles conditions.',
          },
        ]}
        faqs={faqs}
      />
    </>
  )
}
