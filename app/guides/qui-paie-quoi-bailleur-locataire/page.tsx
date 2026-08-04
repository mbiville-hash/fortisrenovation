import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import QuiPaieQuoi from '@/components/QuiPaieQuoi'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/qui-paie-quoi-bailleur-locataire'
const TITRE = 'Qui paie quoi entre bailleur et locataire ?'

export const metadata: Metadata = {
  title: 'Qui paie quoi entre bailleur et locataire ? Le guide',
  description: 'Réparations locatives ou charge du bailleur : ce que dit le décret du 26 août 1987, pièce par pièce. Vétusté, dépôt de garantie et outil interactif pour trancher.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le partage des réparations entre bailleur et locataire, pièce par pièce, sources officielles à l’appui.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideQuiPaieQuoiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Répartition des réparations entre bailleur et locataire : décret du 26 août 1987, vétusté, dépôt de garantie.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Qui paie quoi', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Bailleurs & gestionnaires"
        title={TITRE}
        lead="C’est la question qui revient à chaque état des lieux de sortie, et celle qui fait perdre le plus de temps. La réponse tient en un décret de 1987, une notion — la vétusté — et beaucoup de bon sens. Voici comment trancher, pièce par pièce."
        datePublished="2026-08-04"
        readingTime="7 min"
        ctaTitle="Un logement à remettre en état à Rouen ?"
        ctaText="Nous chiffrons dès l’état des lieux de sortie, ligne à ligne et photos à l’appui — un devis présentable au propriétaire tel quel."
        sources={[
          { label: 'Décret n°87-712 du 26 août 1987 — liste des réparations locatives (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000876202/' },
          { label: 'Loi n°89-462 du 6 juillet 1989 — rapports locatifs (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/' },
          { label: 'Réparations locatives à la charge du locataire — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31697' },
          { label: 'Restitution du dépôt de garantie — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31269' },
        ]}
        lastVerified="Références vérifiées sur Légifrance et service-public.gouv.fr le 4 août 2026. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>La règle en une phrase</h2>
        <p>
          Le locataire paie <strong>l’entretien courant et les menues réparations</strong>. Le bailleur paie
          <strong> tout le reste</strong>, et notamment ce qui s’use avec le temps. La liste des réparations
          dites «&nbsp;locatives&nbsp;» est fixée par le décret du 26&nbsp;août 1987.
        </p>
        <p>
          Ce décret a une particularité qu’on oublie souvent&nbsp;: sa liste <strong>n’est pas exhaustive</strong>.
          Elle donne des exemples, pas un catalogue fermé. C’est pour ça que les litiges existent, et pourquoi
          l’état des lieux d’entrée compte autant.
        </p>

        <h2>Trouvez votre cas</h2>
        <p>
          Cliquez sur la pièce concernée, puis sur ce qui est cassé.
        </p>

        <QuiPaieQuoi />

        <h2>Les quatre exceptions qui protègent le locataire</h2>
        <p>
          Même sur un poste listé comme réparation locative, le locataire n’est pas redevable si la dégradation
          vient de l’une de ces quatre causes (loi du 6&nbsp;juillet 1989, article&nbsp;7&nbsp;d)&nbsp;:
        </p>
        <ul>
          <li><strong>La vétusté</strong> — l’usure normale liée au temps et à un usage conforme.</li>
          <li><strong>La malfaçon</strong> — un travail mal exécuté avant son arrivée.</li>
          <li><strong>Le vice de construction</strong> — un défaut du bâti lui-même.</li>
          <li><strong>Le cas fortuit ou la force majeure</strong> — tempête, dégât venant d’un tiers.</li>
        </ul>
        <div className="guide-note">
          <p>
            C’est <strong>au bailleur</strong> de démontrer que la dégradation est imputable au locataire, et non
            l’inverse. Sans état des lieux d’entrée détaillé et daté, cette démonstration est très difficile à faire.
          </p>
        </div>

        <h2>La vétusté change tout — et personne ne la calcule</h2>
        <p>
          C’est l’erreur la plus fréquente&nbsp;: réclamer au locataire le prix d’une remise en peinture neuve alors
          que la peinture avait déjà huit ans. Un revêtement en fin de vie n’a plus la même valeur qu’un revêtement
          neuf, et le locataire ne doit que la part correspondant à sa dégradation, une fois la vétusté déduite.
        </p>
        <p>
          Depuis le décret du 30&nbsp;mars 2016, bailleur et locataire peuvent convenir dès la signature du bail
          d’appliquer une <strong>grille de vétusté</strong>. Elle fixe, pour chaque matériau et équipement, une durée
          de vie théorique et un abattement annuel. C’est ce qui transforme une discussion de comptoir en calcul.
        </p>
        <p>
          Nous détaillons ce mécanisme dans notre guide{' '}
          <Link href="/guides/grille-de-vetuste-location">grille de vétusté&nbsp;: comment la lire et l’appliquer</Link>.
        </p>

        <h2>Ce que vous pouvez retenir sur le dépôt de garantie</h2>
        <p>
          Le bailleur restitue le dépôt de garantie dans un délai d’<strong>un mois</strong> si l’état des lieux de
          sortie est conforme à celui d’entrée, et de <strong>deux mois</strong> s’il ne l’est pas. Passé ce délai, le
          dépôt dû est majoré de <strong>10&nbsp;% du loyer mensuel hors charges par mois de retard commencé</strong>.
        </p>
        <p>
          Les retenues sont possibles pour loyers impayés, charges dues et réparations locatives non effectuées — mais
          elles doivent être <strong>justifiées par des pièces</strong>&nbsp;: états des lieux comparatifs, photos,
          devis ou factures. Un montant annoncé sans pièce se conteste facilement.
        </p>
        <div className="guide-note">
          <p>
            C’est là que le devis compte&nbsp;: un chiffrage ligne à ligne, daté et photos à l’appui, est une pièce
            recevable. Une estimation de tête ne l’est pas. C’est aussi la raison pour laquelle nous fournissons
            systématiquement un <Link href="/remise-en-etat-locative-rouen">rapport photo horodaté</Link>.
          </p>
        </div>

        <h2>Nos trois conseils de terrain</h2>
        <ol>
          <li>
            <strong>Soignez l’état des lieux d’entrée.</strong> C’est votre seule preuve. Photos datées, pièce par
            pièce, y compris ce qui est déjà abîmé. Dix minutes de plus à l’entrée vous évitent deux mois de discussion
            à la sortie.
          </li>
          <li>
            <strong>Prévoyez une grille de vétusté au bail.</strong> Elle protège les deux parties et coupe court à la
            négociation au moment du départ.
          </li>
          <li>
            <strong>Chiffrez avant de retenir.</strong> Faites établir un devis avant de trancher sur le dépôt de
            garantie&nbsp;: vous saurez ce que ça coûte réellement, et vous aurez la pièce justificative en même temps.
          </li>
        </ol>

        <h2>Et si le désaccord persiste ?</h2>
        <p>
          Avant le tribunal, il existe la <strong>commission départementale de conciliation</strong>. Elle est gratuite,
          saisie par simple courrier, et traite précisément ce type de litige. En Seine-Maritime, elle siège à la
          direction départementale des territoires et de la mer.
        </p>
      </GuideArticle>
    </>
  )
}
