import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/grille-de-vetuste-location'
const TITRE = 'Grille de vétusté : comment la lire et l’appliquer'

export const metadata: Metadata = {
  title: 'Grille de vétusté en location — la lire et l’appliquer',
  description: 'Ce qu’est la vétusté au sens du décret du 30 mars 2016, comment fonctionne une grille (durée de vie, abattement annuel, part résiduelle) et comment la mettre au bail.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Durée de vie théorique, abattement annuel, part résiduelle : comment chiffrer la vétusté au lieu de la négocier.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideVetustePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'La vétusté au sens du décret du 30 mars 2016 : définition, grille, durée de vie théorique et abattement annuel.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Grille de vétusté', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Bailleurs & gestionnaires"
        title={TITRE}
        lead="« Le mur est abîmé, le locataire paie la peinture. » C’est rarement aussi simple. Une peinture de huit ans n’a plus la valeur d’une peinture neuve, et cette différence a un nom, une définition légale et une méthode de calcul. Voici comment s’en servir."
        datePublished="2026-08-04"
        readingTime="6 min"
        ctaTitle="Besoin d’un chiffrage qui tient la route ?"
        ctaText="Nous établissons des devis ligne à ligne, photos à l’appui, utilisables comme pièce justificative face à un locataire ou à un assureur."
        sources={[
          { label: 'Décret n°2016-382 du 30 mars 2016 — état des lieux et vétusté (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032320564/' },
          { label: 'Loi n°89-462 du 6 juillet 1989 — rapports locatifs (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/' },
          { label: 'Décret n°87-712 du 26 août 1987 — réparations locatives (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000876202/' },
          { label: 'État des lieux et vétusté — Institut national de la consommation', url: 'https://www.inc-conso.fr/content/etat-des-lieux-et-vetuste' },
        ]}
        lastVerified="Références vérifiées sur Légifrance le 4 août 2026. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>La définition officielle</h2>
        <p>
          Le décret du 30&nbsp;mars 2016 définit la vétusté comme «&nbsp;l’état d’usure ou de détérioration résultant
          du temps ou de l’usage normal des matériaux et éléments d’équipement dont est constitué le logement&nbsp;».
        </p>
        <p>
          Autrement dit&nbsp;: <strong>ce qui s’use parce que le temps passe n’est pas imputable au locataire</strong>,
          même si c’est lui qui l’a usé en vivant normalement dans le logement. C’est une charge du propriétaire, au
          même titre que la toiture ou la chaudière.
        </p>

        <h2>Une grille, à quoi ça sert ?</h2>
        <p>
          Sans grille, la vétusté se discute. Avec une grille, elle se calcule. Une grille attribue à chaque matériau
          et équipement deux paramètres&nbsp;:
        </p>
        <ul>
          <li><strong>Une durée de vie théorique</strong> — par exemple 7&nbsp;ans pour une peinture, 10&nbsp;ans pour un revêtement de sol souple.</li>
          <li><strong>Un coefficient d’abattement annuel</strong> — la part de valeur que l’élément perd chaque année.</li>
          <li><strong>Souvent, une franchise de départ</strong> — les premières années pendant lesquelles aucun abattement ne s’applique.</li>
          <li><strong>Parfois, une part résiduelle</strong> — un pourcentage plancher qui reste dû au bailleur même en fin de vie théorique.</li>
        </ul>

        <h2>Un exemple concret</h2>
        <p>
          Prenons une remise en peinture chiffrée à 1&nbsp;200&nbsp;€, sur une peinture posée il y a 5&nbsp;ans, avec
          une grille prévoyant une durée de vie de 7&nbsp;ans, 1&nbsp;an de franchise et une part résiduelle de 20&nbsp;%.
        </p>
        <ul>
          <li>Années prises en compte&nbsp;: 5 − 1 de franchise = <strong>4 ans</strong>.</li>
          <li>Abattement annuel&nbsp;: (100&nbsp;% − 20&nbsp;% résiduels) ÷ 6 années restantes ≈ <strong>13,3&nbsp;%/an</strong>.</li>
          <li>Vétusté&nbsp;: 4 × 13,3&nbsp;% ≈ <strong>53&nbsp;%</strong>.</li>
          <li>Part imputable au locataire&nbsp;: 1&nbsp;200&nbsp;€ × 47&nbsp;% ≈ <strong>564&nbsp;€</strong>.</li>
        </ul>
        <div className="guide-note">
          <p>
            Les chiffres ci-dessus sont une <strong>illustration de méthode</strong>, pas un barème officiel&nbsp;: chaque
            grille a ses propres durées et coefficients. Reportez-vous à celle qui est annexée à votre bail.
          </p>
        </div>

        <h2>Le point que presque tout le monde rate</h2>
        <p>
          La grille de vétusté n’est <strong>pas obligatoire</strong>, et elle ne s’impose pas d’elle-même. Le décret
          prévoit que les parties <em>peuvent convenir</em> d’en appliquer une, <strong>dès la signature du bail</strong>,
          en la choisissant parmi celles issues d’un accord collectif de location.
        </p>
        <p>
          Conséquence pratique&nbsp;: si vous n’avez rien prévu au bail, vous ne pouvez pas sortir une grille au moment
          de l’état des lieux de sortie pour l’imposer au locataire. La vétusté restera due — elle est de toute façon
          protégée par la loi de 1989 — mais son montant se négociera au cas par cas, ou devant le juge.
        </p>
        <p>
          C’est la critique principale faite à ce décret&nbsp;: il a donné un cadre sans le rendre obligatoire.
        </p>

        <h2>Ce que nous voyons sur le terrain</h2>
        <p>
          Trois situations reviennent constamment dans les logements que nous remettons en état à Rouen&nbsp;:
        </p>
        <ol>
          <li>
            <strong>Le bailleur réclame du neuf sur du vieux.</strong> Une retenue de 1&nbsp;200&nbsp;€ pour repeindre
            un logement dont la peinture avait dix ans ne tiendra pas si le locataire conteste.
          </li>
          <li>
            <strong>L’état des lieux d’entrée est vide.</strong> «&nbsp;Bon état&nbsp;» partout, sans photo. Il n’y a
            alors rien à comparer, et c’est au bailleur d’apporter la preuve.
          </li>
          <li>
            <strong>On confond vétusté et dégradation.</strong> Un sol usé aux passages, c’est de la vétusté. Une
            brûlure de cigarette, non. Les deux peuvent coexister dans la même pièce&nbsp;: c’est au devis de faire le
            tri, poste par poste.
          </li>
        </ol>

        <h2>Comment nous chiffrons</h2>
        <p>
          Nous séparons systématiquement, sur le devis, ce qui relève de la remise en état normale du logement et ce
          qui relève d’une dégradation caractérisée. Vous obtenez deux totaux distincts&nbsp;: l’un pour votre budget
          d’entretien, l’autre défendable face au locataire.
        </p>
        <p>
          Le détail de notre méthode est sur la page{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link>, et la question de la répartition
          des réparations est traitée dans le guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et locataire</Link>.
        </p>
      </GuideArticle>
    </>
  )
}
