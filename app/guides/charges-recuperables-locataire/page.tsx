import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import ChargesRecuperables from '@/components/ChargesRecuperables'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/charges-recuperables-locataire'
const TITRE = 'Charges récupérables : ce que vous pouvez refacturer'

export const metadata: Metadata = {
  title: TITRE,
  description: 'La liste du décret du 26 août 1987 est limitative : ce qui n’y figure pas ne se récupère pas. Un outil poste par poste, et la règle qui permet de trancher vite.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Entretien et consommation se récupèrent, remplacement et gros travaux non. Un outil poste par poste.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideChargesRecuperablesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Charges locatives récupérables : décret n°87-713 du 26 août 1987, liste limitative, poste par poste.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Charges récupérables', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Charges locatives"
        title={TITRE}
        lead="C’est la deuxième source de litige après l’état des lieux, et elle repose sur un malentendu simple : beaucoup de bailleurs croient pouvoir refacturer ce qui leur paraît légitime. La loi ne raisonne pas comme ça — elle fonctionne par liste fermée."
        datePublished="2026-08-04"
        readingTime="5 min"
        ctaTitle="Des travaux à chiffrer sur votre parc ?"
        ctaText="Entretien courant ou remplacement d’équipement, la frontière change qui paie. Nous chiffrons ligne à ligne, ce qui vous permet de trancher poste par poste."
        sources={[
          { label: 'Décret n°87-713 du 26 août 1987 — liste des charges récupérables (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000875613/' },
          { label: 'Charges locatives récupérables — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F947' },
          { label: 'Loi n°89-462 du 6 juillet 1989 — rapports locatifs (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/' },
        ]}
        lastVerified="Références vérifiées sur Légifrance et service-public.gouv.fr le 4 août 2026. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Le principe qui change tout</h2>
        <p>
          Le décret du 26 août 1987 fixe la liste des charges récupérables sur le locataire. Le point
          décisif, c’est que cette liste est <strong>limitative</strong>&nbsp;: une dépense qui n’y
          figure pas ne peut pas être refacturée, même si elle vous semble parfaitement justifiée.
        </p>
        <p>
          Ce n’est donc pas une question d’équité mais d’énumération. D’où l’intérêt de vérifier
          poste par poste plutôt que de raisonner au feeling.
        </p>

        <h2>Vérifiez votre poste</h2>
        <p>Filtrez par catégorie ci-dessous.</p>

        <ChargesRecuperables />

        <h2>La règle de lecture, en une ligne</h2>
        <p>
          Si vous ne deviez retenir qu’une chose&nbsp;: <strong>l’entretien et la consommation se
          récupèrent, le remplacement et les gros travaux non.</strong>
        </p>
        <p>
          L’entretien annuel de la chaudière collective est récupérable&nbsp;; son remplacement ne
          l’est pas. Le nettoyage de la cage d’escalier est récupérable&nbsp;; sa remise en peinture
          ne l’est pas. Cette frontière explique la quasi-totalité des cas.
        </p>

        <h2>Les trois erreurs les plus fréquentes</h2>
        <ol>
          <li>
            <strong>Refacturer la taxe foncière.</strong> C’est l’impôt du propriétaire. Seules la
            taxe d’enlèvement des ordures ménagères et la taxe de balayage sont récupérables.
          </li>
          <li>
            <strong>Refacturer l’assurance de l’immeuble ou les honoraires de syndic.</strong> Ni
            l’une ni les autres ne figurent dans la liste.
          </li>
          <li>
            <strong>Récupérer 100 % du salaire du gardien.</strong> C’est 75 % s’il assure à la fois
            l’entretien des parties communes et l’élimination des déchets, 40 % s’il n’assure qu’une
            seule de ces deux tâches — et rien s’il n’en assure aucune.
          </li>
        </ol>

        <h2>Charges et réparations : ne pas confondre</h2>
        <p>
          Deux décrets du même jour, deux logiques différentes. Le décret 87-713 traite des
          <strong> charges</strong> — les dépenses récurrentes de l’immeuble. Le décret 87-712 traite
          des <strong>réparations locatives</strong> — ce que le locataire doit entretenir dans le
          logement.
        </p>
        <p>
          Un robinet qui goutte relève du second, pas du premier. Notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link> propose un outil pièce par pièce pour cette seconde question.
        </p>

        <h2>La régularisation annuelle</h2>
        <p>
          Les charges se paient par provisions, régularisées une fois par an. À cette occasion, le
          locataire peut demander à consulter les justificatifs&nbsp;: factures, contrats, décomptes
          de copropriété.
        </p>
        <div className="guide-note">
          <p>
            C’est là que la qualité de vos devis compte. Un chiffrage qui distingue clairement
            l’entretien courant du remplacement d’équipement vous permet de ventiler sans discussion.
            Un devis global «&nbsp;travaux plomberie&nbsp;» vous oblige à justifier après coup.
          </p>
        </div>

        <h2>Pour aller plus loin</h2>
        <p>
          Sur le logement lui-même, voyez la{' '}
          <Link href="/guides/grille-de-vetuste-location">grille de vétusté</Link> et notre guide sur
          l’<Link href="/guides/etat-des-lieux-de-sortie">état des lieux de sortie</Link>. Et si vous
          gérez des lots en copropriété, notre offre de{' '}
          <Link href="/maintenance-copropriete-rouen">maintenance de copropriété</Link> couvre
          l’entretien des parties communes.
        </p>
      </GuideArticle>
    </>
  )
}
