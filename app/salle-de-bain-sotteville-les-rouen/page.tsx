import type { Metadata } from 'next'
import { BathroomSupportPage, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rénovation salle de bain Sotteville-lès-Rouen — plan 3D inclus',
  description: 'Rénovation de salle de bain clé en main à Sotteville-lès-Rouen : plan 3D inclus, devis sous 48h, chantier propre. Fortis Rénovation.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/salle-de-bain-sotteville-les-rouen' },
  openGraph: {
    title: 'Rénovation salle de bain Sotteville-lès-Rouen — Design clé en main',
    description: 'Plan 3D, devis clair, chantier propre et livraison soignée pour votre salle de bain à Sotteville-lès-Rouen.',
    url: 'https://www.fortisrenovation.fr/salle-de-bain-sotteville-les-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/salle-de-bain-3d.jpg', width: 1200, height: 900, alt: 'Rénovation salle de bain design à Sotteville-lès-Rouen' }],
  },
}

const faqs: BathroomFaq[] = [
  {
    q: 'Combien coûte une rénovation de salle de bain à Sotteville-lès-Rouen ?',
    a: 'Un rafraîchissement ciblé démarre souvent autour de 3 500 à 7 500 €. Une rénovation complète se situe plutôt entre 8 000 et 15 000 €, davantage pour une salle de bain design haut de gamme. Le devis précis dépend de la pièce, des réseaux et des matériaux — il est établi après visite.',
  },
  {
    q: 'Le plan 3D est-il vraiment inclus ?',
    a: 'Oui. Le plan 3D fait partie de notre méthode : il sert à valider les volumes, l’ambiance et les principaux choix avant le démarrage du chantier, sans mauvaise surprise.',
  },
  {
    q: 'Intervenez-vous bien à Sotteville-lès-Rouen ?',
    a: 'Oui, nous intervenons à Sotteville-lès-Rouen et sur toute la métropole, y compris pour les copropriétés et les bailleurs. Un interlocuteur unique vous suit du premier rendez-vous à la livraison.',
  },
  {
    q: 'Combien de temps dure le chantier ?',
    a: 'Selon la dépose, la plomberie, le carrelage et les finitions, une salle de bain complète demande généralement quelques jours à deux semaines. Le planning est posé clairement dans le devis.',
  },
]

export default function SalleDeBainSottevilleLesRouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Rénovation salle de bain Sotteville-lès-Rouen',
        'Rénovation de salle de bain design clé en main à Sotteville-lès-Rouen. Plan 3D inclus, devis détaillé et chantier propre.',
        '/salle-de-bain-sotteville-les-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Rénovation salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
        { name: 'Salle de bain Sotteville-lès-Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-sotteville-les-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BathroomSupportPage
        eyebrow="Salle de bain design clé en main · Sotteville-lès-Rouen"
        title="Rénovation de salle de bain à Sotteville-lès-Rouen, du plan 3D à la livraison."
        intro="Fortis conçoit et réalise votre salle de bain à Sotteville-lès-Rouen : visualisation 3D, devis clair, chantier propre et finitions soignées — une méthode pensée pour les maisons de brique et les copropriétés de la rive sud."
        heroImage="/salle-de-bain-3d.jpg"
        heroAlt="Rénovation de salle de bain design à Sotteville-lès-Rouen"
        proof={[
          'Plan 3D inclus, avant travaux',
          'Devis détaillé sous 48h',
          'Un seul interlocuteur, du début à la fin',
          'Sotteville-lès-Rouen et la rive sud',
        ]}
        sections={[
          {
            title: 'Rénover sa salle de bain à Sotteville-lès-Rouen',
            text: 'Sotteville-lès-Rouen, ville dense de la rive sud à l’histoire cheminote, mêle maisons de brique, immeubles et copropriétés. Les salles de bain y vont du petit espace à optimiser et rénover entièrement aux logements collectifs à remettre aux normes. On part de la pièce réelle et de vos contraintes : dépose, plomberie, carrelage, meuble vasque, douche à l’italienne — un interlocuteur unique coordonne tous les corps d’état, du plan 3D à la livraison.',
          },
          {
            title: 'Une méthode lisible, pensée pour éviter les surprises',
            text: 'Visite et mesures, plan 3D pour valider l’ambiance et les volumes, devis détaillé poste par poste, puis un chantier propre avec points réguliers et nettoyage en fin de journée. Vous savez ce que vous payez et quand c’est livré.',
          },
          {
            title: 'Budget d’une salle de bain à Sotteville-lès-Rouen',
            text: 'Un rafraîchissement ciblé démarre souvent autour de 3 500 à 7 500 €, une rénovation complète entre 8 000 et 15 000 €, et davantage pour une salle de bain design avec finitions haut de gamme. Le prix exact dépend de la pièce, des réseaux et de la gamme choisie — il est chiffré après visite.',
          },
        ]}
        faqs={faqs}
      />
    </>
  )
}
