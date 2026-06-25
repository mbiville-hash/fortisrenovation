import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

const SLUG = '/guides/douche-italienne-etancheite'

export const metadata: Metadata = {
  title: 'Douche à l’italienne : étanchéité, pente & antidérapant',
  description: 'Réussir une douche à l’italienne sans dégât des eaux : pourquoi le carrelage ne suffit pas, ce qu’impose le DTU 52.2 (étanchéité, pente 2–3 %, antidérapant).',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: { title: 'Douche à l’italienne : réussir l’étanchéité', description: 'Étanchéité sous carrelage, pente, antidérapant — les règles à respecter.', url: `https://www.fortisrenovation.fr${SLUG}`, locale: 'fr_FR', type: 'article' },
}

export default function GuideDoucheItaliennePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Douche à l’italienne : réussir l’étanchéité', description: 'Étanchéité, pente et antidérapant d’une douche à l’italienne selon les règles de l’art.', slug: SLUG, datePublished: '2026-06-25' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Douche italienne & étanchéité', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />
      <GuideArticle
        category="Douche italienne"
        title="Douche à l’italienne : réussir l’étanchéité (et éviter le dégât des eaux)"
        lead="Une douche à l’italienne, c’est élégant et accessible — à condition que l’étanchéité soit faite dans les règles. Car le carrelage seul n’étanche pas. Voici ce qu’impose la norme et comment on évite les infiltrations."
        datePublished="2026-06-25"
        readingTime="5 min"
        ctaTitle="Une douche à l’italienne posée dans les règles ?"
        ctaText="Étanchéité sous carrelage, pente maîtrisée, antidérapant : on s’occupe de tout, avec plan 3D et garantie."
        sources={[
          { label: 'Dégradations par l’eau des douches « à l’italienne » — Agence Qualité Construction', url: 'https://qualiteconstruction.com/fiche/degradations-par-leau-des-douches-carrelees-dites-a-litalienne/' },
        ]}
        lastVerified="Points techniques vérifiés en juin 2026 (NF DTU 52.2, Cahier CSTB 3567, Agence Qualité Construction). Pour un projet, faites valider votre cas par un professionnel."
      >
        <h2>Le carrelage n’est pas étanche</h2>
        <p>C’est la base, et c’est contre-intuitif : le carreau, la colle et les joints <strong>laissent passer l’eau</strong> vers le support. Sans receveur étanche, il faut donc une <strong>étanchéité sous carrelage</strong> (système d’étanchéité liquide, SEL/SPEC). C’est ce qu’impose le <strong>NF DTU 52.2</strong>, complété par le Cahier CSTB 3567. Faire l’impasse dessus, c’est l’infiltration assurée à terme.</p>

        <h2>La pente, indispensable</h2>
        <p>Pour que l’eau s’évacue sans stagner, le sol doit présenter une <strong>pente de 2 à 3 %</strong> vers la bonde ou le caniveau — soit 2 à 3 cm par mètre. Trop faible, l’eau stagne ; mal orientée, elle s’infiltre.</p>

        <h2>Les points sensibles</h2>
        <ul>
          <li>les <strong>relevés d’étanchéité</strong> en périphérie de la douche, avec une hauteur d’au moins <strong>10 cm</strong> au-dessus du sol fini ;</li>
          <li>le traitement des <strong>angles</strong> et de la jonction avec les parois ;</li>
          <li>l’<strong>évacuation</strong> (bonde ou caniveau) et son raccord à l’étanchéité.</li>
        </ul>
        <p>Ce sont précisément ces points singuliers qui causent la majorité des sinistres.</p>

        <h2>Antidérapant et sécurité</h2>
        <p>Le sol d’une douche à l’italienne doit être <strong>antidérapant</strong> (classement pieds nus adapté) — c’est une question de norme, mais surtout de sécurité, en particulier pour une <Link href="/salle-de-bain-senior">salle de bain senior ou PMR</Link>.</p>

        <h2>Pourquoi c’est si important</h2>
        <p>Les <strong>dégâts des eaux liés aux douches à l’italienne mal étanchées</strong> sont une pathologie bien identifiée par l’Agence Qualité Construction. Une étanchéité ratée, ce sont des infiltrations vers les pièces ou le logement du dessous — et une facture bien plus lourde que la douche elle-même.</p>

        <h2>Notre méthode</h2>
        <p>Étanchéité sous carrelage dans les règles, pente maîtrisée, antidérapant, points singuliers traités : on conçoit et on réalise votre <Link href="/douche-italienne-rouen">douche à l’italienne à Rouen</Link> avec plan 3D et chantier propre. Pour en parler, demandez un <Link href="/devis">devis gratuit</Link>.</p>
      </GuideArticle>
    </>
  )
}
