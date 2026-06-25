import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

const SLUG = '/guides/prix-renovation-salle-de-bain'

export const metadata: Metadata = {
  title: 'Prix d’une rénovation de salle de bain à Rouen — guide',
  description: 'Combien coûte une rénovation de salle de bain à Rouen ? Fourchettes, postes de dépense et ce qui fait varier le prix. Repères clairs pour préparer votre budget.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: { title: 'Prix d’une rénovation de salle de bain à Rouen', description: 'Fourchettes, postes de dépense et facteurs de prix.', url: `https://www.fortisrenovation.fr${SLUG}`, locale: 'fr_FR', type: 'article' },
}

export default function GuidePrixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Prix d’une rénovation de salle de bain à Rouen', description: 'Fourchettes et facteurs de prix d’une rénovation de salle de bain à Rouen.', slug: SLUG, datePublished: '2026-06-25' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Prix d’une rénovation', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />
      <GuideArticle
        category="Prix & budget"
        title="Combien coûte une rénovation de salle de bain à Rouen ?"
        lead="Le budget dépend surtout de la surface, de l’état des réseaux et de la gamme choisie. Voici des fourchettes claires et ce qui fait vraiment varier la facture, pour préparer votre projet sereinement."
        datePublished="2026-06-25"
        readingTime="5 min"
        ctaTitle="Envie d’un chiffre précis pour votre salle de bain ?"
        ctaText="On visite, on mesure et on vous remet un devis détaillé sous 48h — avec plan 3D inclus."
        sources={[]}
        lastVerified="Fourchettes indicatives, à affiner après visite : le prix exact dépend de votre pièce, de vos réseaux et de la gamme choisie."
      >
        <h2>Des fourchettes pour situer votre projet</h2>
        <p>À titre indicatif, sur la région rouennaise :</p>
        <ul>
          <li>un <strong>rafraîchissement ciblé</strong> (remplacement de la douche, du meuble, des faïences) démarre souvent autour de <strong>3 500 à 7 500 €</strong> ;</li>
          <li>une <strong>rénovation complète</strong> (dépose totale, plomberie, électricité, carrelage, douche à l’italienne, meuble) se situe plutôt entre <strong>8 000 et 15 000 €</strong> ;</li>
          <li>une <strong>salle de bain design haut de gamme</strong> (grands formats, matériaux nobles, sur-mesure) peut aller au-delà.</li>
        </ul>

        <h2>Ce qui fait varier le prix</h2>
        <ul>
          <li>la <strong>surface</strong> et la configuration de la pièce ;</li>
          <li>l’ampleur de la <strong>dépose</strong> et l’état des supports ;</li>
          <li>le <strong>déplacement des arrivées et évacuations</strong> (plomberie) ;</li>
          <li>l’état de l’<strong>électricité</strong> et la mise aux normes éventuelle ;</li>
          <li>la <strong>douche à l’italienne</strong> (étanchéité sous carrelage, pente) ;</li>
          <li>la <strong>gamme des matériaux</strong> : carrelage, meuble vasque, robinetterie, paroi.</li>
        </ul>

        <h2>Les postes d’une rénovation complète</h2>
        <p>Dépose et évacuation des gravats, plomberie, électricité, <strong>étanchéité</strong>, carrelage et sol, meuble vasque et robinetterie, douche ou baignoire, peinture, puis finitions et joints. Chacun de ces postes pèse dans le devis — d’où l’importance d’un chiffrage détaillé.</p>

        <h2>Comment éviter les mauvaises surprises</h2>
        <p>Un <strong>devis détaillé poste par poste</strong>, établi après visite, évite les rallonges. Le <strong>plan 3D</strong> sert à figer les choix (volumes, matériaux, implantation) avant de commencer — ce qui valide le budget en même temps que l’esthétique.</p>

        <h2>Et les aides ?</h2>
        <p>Pour une salle de bain adaptée (senior ou PMR), une partie des travaux peut être financée par <strong>MaPrimeAdapt’</strong>. On détaille les conditions dans notre <Link href="/guides/salle-de-bain-senior-maprimeadapt-rouen">guide MaPrimeAdapt’</Link>.</p>

        <p>Pour aller plus loin, voyez notre page <Link href="/prix-renovation-salle-de-bain-rouen">prix d’une salle de bain à Rouen</Link> ou demandez directement un <Link href="/devis">devis gratuit</Link>.</p>
      </GuideArticle>
    </>
  )
}
