import type { Metadata } from 'next'
import { BathroomSupportPage, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rénovation salle de bain clé en main Rouen — Plan 3D inclus',
  description: 'Rénovation de salle de bain clé en main à Rouen : conception, plan 3D, devis, plomberie, carrelage, finitions et livraison.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/renovation-salle-de-bain-cle-en-main-rouen' },
  openGraph: {
    title: 'Rénovation salle de bain clé en main Rouen',
    description: 'Un seul interlocuteur pour concevoir, chiffrer, coordonner et livrer votre salle de bain.',
    url: 'https://www.fortisrenovation.fr/renovation-salle-de-bain-cle-en-main-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/salle-de-bain-3d.jpg', width: 1200, height: 900, alt: 'Salle de bain clé en main à Rouen' }],
  },
}

const faqs: BathroomFaq[] = [
  {
    q: 'Que signifie clé en main pour une salle de bain ?',
    a: 'Nous coordonnons les étapes : visite, plan 3D, devis, dépose, plomberie, électricité courante, carrelage, pose sanitaire, finitions et livraison.',
  },
  {
    q: 'Dois-je gérer plusieurs artisans ?',
    a: 'Non. L’objectif est justement d’avoir un interlocuteur unique qui suit le projet, coordonne les corps d’état et garde une vision d’ensemble du résultat final.',
  },
  {
    q: 'Comment éviter les mauvaises surprises ?',
    a: 'On clarifie les contraintes dès la visite, on valide le projet avec le plan 3D, puis on détaille les postes et le planning dans le devis.',
  },
]

export default function RenovationSalleDeBainCleEnMainRouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Rénovation salle de bain clé en main Rouen',
        'Rénovation complète de salle de bain à Rouen, de la conception à la livraison.',
        '/renovation-salle-de-bain-cle-en-main-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
        { name: 'Salle de bain clé en main Rouen', url: 'https://www.fortisrenovation.fr/renovation-salle-de-bain-cle-en-main-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BathroomSupportPage
        eyebrow="Clé en main · Rouen"
        title="Rénovation de salle de bain clé en main à Rouen."
        intro="Vous gardez une vision simple du projet. Nous gérons la conception, les corps d’état, le planning, les finitions et la livraison."
        heroImage="/salle-de-bain-3d.jpg"
        heroAlt="Rénovation de salle de bain clé en main à Rouen avec plan 3D"
        proof={['Un interlocuteur unique', 'Plan 3D inclus', 'Coordination plomberie, carrelage et finitions', 'Livraison contrôlée']}
        sections={[
          {
            title: 'Une méthode du début à la fin',
            text: 'La visite sert à comprendre l’usage, les contraintes et le niveau de finition attendu. Le plan 3D transforme ensuite ces choix en projet concret.',
          },
          {
            title: 'Une coordination qui protège le résultat',
            text: 'Plomberie, électricité courante, carrelage, pose sanitaire et finitions doivent se suivre dans le bon ordre. C’est ce suivi qui donne un rendu propre.',
          },
          {
            title: 'Une livraison sans zone grise',
            text: 'Le chantier se termine avec un contrôle des points visibles et techniques : joints, alignements, écoulements, finitions et nettoyage.',
          },
        ]}
        faqs={faqs}
      />
    </>
  )
}
