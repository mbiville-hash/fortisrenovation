import type { Metadata } from 'next'
import { BathroomSupportPage, type BathroomFaq } from '@/components/BathroomPremium'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rénovation salle de bain Malaunay — plan 3D inclus',
  description: 'Rénovation de salle de bain clé en main à Malaunay : plan 3D inclus, devis sous 48h, chantier propre. Fortis Rénovation.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/salle-de-bain-malaunay' },
  openGraph: {
    title: 'Rénovation salle de bain Malaunay — Design clé en main',
    description: 'Plan 3D, devis clair, chantier propre et livraison soignée pour votre salle de bain à Malaunay.',
    url: 'https://www.fortisrenovation.fr/salle-de-bain-malaunay',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/salle-de-bain-3d.jpg', width: 1200, height: 900, alt: 'Rénovation salle de bain design à Malaunay' }],
  },
}

const faqs: BathroomFaq[] = [
  { q: 'Combien coûte une rénovation de salle de bain à Malaunay ?', a: 'Un rafraîchissement ciblé démarre souvent autour de 3 500 à 7 500 €. Une rénovation complète se situe plutôt entre 8 000 et 15 000 €, davantage pour une salle de bain design haut de gamme. Le devis précis dépend de la pièce, des réseaux et des matériaux — il est établi après visite.' },
  { q: 'Le plan 3D est-il vraiment inclus ?', a: 'Oui. Le plan 3D fait partie de notre méthode : il sert à valider les volumes, l’ambiance et les principaux choix avant le démarrage du chantier, sans mauvaise surprise.' },
  { q: 'Intervenez-vous bien à Malaunay ?', a: 'Oui, nous intervenons à Malaunay et sur toute la vallée du Cailly (Le Houlme, Montville, Barentin). Un interlocuteur unique vous suit du premier rendez-vous à la livraison.' },
  { q: 'Combien de temps dure le chantier ?', a: 'Selon la dépose, la plomberie, le carrelage et les finitions, une salle de bain complète demande généralement quelques jours à deux semaines. Le planning est posé clairement dans le devis.' },
]

export default function SalleDeBainMalaunayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Rénovation salle de bain Malaunay', 'Rénovation de salle de bain design clé en main à Malaunay. Plan 3D inclus, devis détaillé et chantier propre.', '/salle-de-bain-malaunay')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Rénovation salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
        { name: 'Salle de bain Malaunay', url: 'https://www.fortisrenovation.fr/salle-de-bain-malaunay' },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BathroomSupportPage
        eyebrow="Salle de bain design clé en main · Malaunay"
        title="Rénovation de salle de bain à Malaunay, du plan 3D à la livraison."
        intro="Fortis conçoit et réalise votre salle de bain à Malaunay : visualisation 3D, devis clair, chantier propre et finitions soignées — une méthode pensée pour les maisons et les copropriétés de la vallée du Cailly."
        heroImage="/salle-de-bain-3d.jpg"
        heroAlt="Rénovation de salle de bain design à Malaunay"
        proof={['Plan 3D inclus, avant travaux', 'Devis détaillé sous 48h', 'Un seul interlocuteur, du début à la fin', 'Malaunay et la vallée du Cailly']}
        sections={[
          { title: 'Rénover sa salle de bain à Malaunay', text: 'Malaunay, dans la vallée du Cailly au nord-ouest de Rouen, mêle maisons de ville héritées de son passé industriel, pavillons et copropriétés. Les salles de bain y vont du logement ancien à rénover entièrement aux espaces plus récents à remettre au goût du jour. On adapte chaque projet à la pièce réelle : dépose, plomberie, carrelage, meuble vasque, douche à l’italienne — un interlocuteur unique coordonne l’ensemble, du plan 3D à la livraison.' },
          { title: 'Une méthode lisible, pensée pour éviter les surprises', text: 'Visite et mesures, plan 3D pour valider l’ambiance et les volumes, devis détaillé poste par poste, puis un chantier propre avec points réguliers et nettoyage en fin de journée. Vous savez ce que vous payez et quand c’est livré.' },
          { title: 'Budget d’une salle de bain à Malaunay', text: 'Un rafraîchissement ciblé démarre souvent autour de 3 500 à 7 500 €, une rénovation complète entre 8 000 et 15 000 €, et davantage pour une salle de bain design avec finitions haut de gamme. Le prix exact dépend de la pièce, des réseaux et de la gamme choisie — il est chiffré après visite.' },
        ]}
        faqs={faqs}
      />
    </>
  )
}
