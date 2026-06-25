import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

const SLUG = '/guides/duree-renovation-salle-de-bain'

export const metadata: Metadata = {
  title: 'Durée d’une rénovation de salle de bain — combien de temps ?',
  description: 'Combien de temps dure une rénovation de salle de bain ? Étapes jour par jour, temps de séchage et ce qui rallonge un chantier. Repères pour bien planifier.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: { title: 'Combien de temps dure une rénovation de salle de bain ?', description: 'Étapes, séchage et planning d’un chantier de salle de bain.', url: `https://www.fortisrenovation.fr${SLUG}`, locale: 'fr_FR', type: 'article' },
}

export default function GuideDureePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Combien de temps dure une rénovation de salle de bain ?', description: 'Étapes et planning d’une rénovation de salle de bain.', slug: SLUG, datePublished: '2026-06-25' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Durée des travaux', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />
      <GuideArticle
        category="Méthode"
        title="Combien de temps dure une rénovation de salle de bain ?"
        lead="Quelques jours pour un rafraîchissement, jusqu’à deux semaines pour une rénovation complète. Voici le détail des étapes, les temps de séchage à prévoir, et ce qui rallonge (ou raccourcit) un chantier."
        datePublished="2026-06-25"
        readingTime="4 min"
        ctaTitle="Un planning clair pour votre chantier ?"
        ctaText="On pose les délais noir sur blanc dans le devis, avec un seul interlocuteur du début à la fin."
        sources={[]}
        lastVerified="Durées indicatives — le planning précis est posé dans votre devis, selon votre pièce et vos choix."
      >
        <h2>La réponse courte</h2>
        <p>Un <strong>rafraîchissement</strong> (douche, meuble, faïences) demande généralement <strong>quelques jours</strong>. Une <strong>rénovation complète</strong> représente le plus souvent <strong>une à deux semaines de travaux effectifs</strong>, temps de séchage compris.</p>

        <h2>Les étapes, dans l’ordre</h2>
        <ol>
          <li>Dépose et évacuation des gravats.</li>
          <li>Plomberie et électricité (déplacement des réseaux si besoin).</li>
          <li><strong>Étanchéité</strong> sous carrelage — avec temps de séchage.</li>
          <li>Carrelage et sol — avec séchage de la colle et des joints.</li>
          <li>Pose du meuble, de la robinetterie, de la douche ou baignoire.</li>
          <li>Peinture, finitions, joints et nettoyage.</li>
        </ol>

        <h2>Ce qui rallonge un chantier</h2>
        <ul>
          <li>le <strong>déplacement des arrivées et évacuations</strong> ;</li>
          <li>les <strong>temps de séchage</strong> (étanchéité, chape, joints) qu’on ne peut pas accélérer ;</li>
          <li>un <strong>support abîmé</strong> découvert à la dépose ;</li>
          <li>des <strong>choix validés tardivement</strong> (carrelage, meuble) ou un délai d’approvisionnement.</li>
        </ul>

        <h2>Avant le chantier, comptez aussi</h2>
        <p>La visite, le <strong>plan 3D</strong> et le devis (réponse sous 48h), puis l’<strong>approvisionnement des matériaux</strong>. Anticiper ces étapes, c’est démarrer sereinement et tenir les délais.</p>

        <h2>Comment on tient les délais</h2>
        <p>Un <strong>planning posé dès le devis</strong>, un <strong>interlocuteur unique</strong> qui coordonne les corps d’état, et des points réguliers : c’est ce qui évite les chantiers qui s’éternisent. Voyez notre offre <Link href="/renovation-salle-de-bain-cle-en-main-rouen">clé en main</Link> ou demandez un <Link href="/devis">devis</Link>.</p>
      </GuideArticle>
    </>
  )
}
