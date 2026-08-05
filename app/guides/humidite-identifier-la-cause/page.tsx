import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import DiagnosticHumidite from '@/components/DiagnosticHumidite'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/humidite-identifier-la-cause'
const TITRE = 'Humidité : condensation, remontée ou infiltration ?'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Les quatre causes possibles, ce qui les distingue, et un outil pour orienter le diagnostic. Repeindre sans traiter la cause ne tient jamais une saison.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Condensation, remontée capillaire, infiltration ou fuite : ce qui les distingue, et l’ordre dans lequel traiter.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideHumiditePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Identifier l’origine d’une humidité en logement locatif : condensation, remontée capillaire, infiltration ou fuite de canalisation, et l’ordre des travaux.',
        slug: SLUG,
        datePublished: '2026-08-05',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Humidité', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Humidité"
        title={TITRE}
        lead="C’est le désordre le plus fréquent d’un parc locatif, et celui qu’on traite le plus mal : on repeint. Six mois plus tard, la tache est revenue, le locataire écrit, et le devis repart. Tout se joue avant le premier coup de pinceau — sur l’identification de la cause."
        datePublished="2026-08-05"
        readingTime="7 min"
        ctaTitle="Une humidité qui revient malgré les reprises ?"
        ctaText="Nous cherchons la cause avant de chiffrer : ventilation, recherche de fuite, reprise des supports et peinture adaptée. Et nous vous disons quand le problème sort de notre périmètre."
        sources={[
          { label: 'Décret n°2002-120 du 30 janvier 2002 — caractéristiques du logement décent (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000217471/' },
          { label: 'Article 2 du décret n°2002-120 — étanchéité, aération, évacuation de l’humidité (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000047983572' },
          { label: 'Décret n°2017-312 du 9 mars 2017 — modification des critères de décence (Légifrance)', url: 'https://www.legifrance.gouv.fr/eli/decret/2017/3/9/LHAL1602083D/jo/texte' },
          { label: 'Logement à louer décent — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2042' },
        ]}
        lastVerified="Article 2 du décret du 30 janvier 2002 lu sur Légifrance le 5 août 2026. Les constats techniques de ce guide relèvent de notre pratique de terrain sur le parc de la métropole rouennaise et ne remplacent pas un relevé d’humidité sur place. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Repeindre sans identifier, c’est repeindre deux fois</h2>
        <p>
          Une humidité ne se soigne pas en surface. Tant que la cause alimente le mur, aucun enduit
          ni aucune peinture ne tiendra&nbsp;: le support redevient humide, le film se décolle, et le
          désordre réapparaît au même endroit — souvent en une seule saison de chauffe.
        </p>
        <p>
          Le coût de l’erreur est double. Vous payez deux fois les mêmes travaux, et entre-temps le
          locataire a écrit, parfois avec raison. D’où l’intérêt de consacrer une heure au diagnostic
          avant d’engager le premier euro de réfection.
        </p>

        <h2>D’où vient cette humidité&nbsp;?</h2>
        <p>
          Quatre causes couvrent la quasi-totalité des cas. Elles se distinguent par trois
          observations simples&nbsp;: où le désordre apparaît, quand il est le plus visible, et à
          quoi il ressemble.
        </p>

        <DiagnosticHumidite />

        <h2>Ce que la loi en dit, et pourquoi ce n’est pas optionnel</h2>
        <p>
          Le décret du 30 janvier 2002 sur le logement décent ne parle pas d’humidité en général&nbsp;:
          il vise nommément les trois mécanismes ci-dessus. Le gros œuvre doit être en bon état et
          protéger le logement contre les <strong>eaux de ruissellement et les remontées d’eau</strong>.
          Les menuiseries extérieures et la toiture doivent empêcher les <strong>infiltrations</strong>.
          Et le logement doit permettre une aération suffisante, avec des dispositifs d’ouverture et
          de ventilation en bon état assurant le renouvellement de l’air et{' '}
          <strong>l’évacuation de l’humidité</strong>.
        </p>
        <p>
          Le même article ajoute que les matériaux, canalisations et revêtements ne doivent présenter
          aucun risque manifeste pour la santé et la sécurité des occupants.
        </p>
        <div className="guide-note">
          <p>
            Conséquence pratique&nbsp;: une VMC hors service ou des bouches obstruées ne sont pas un
            détail de confort. C’est un critère de décence, au même titre que l’étanchéité de la
            toiture. Et c’est aussi le poste le moins cher à remettre en état des quatre.
          </p>
        </div>

        <h2>Ce que le parc rouennais produit le plus</h2>
        <p>
          Sur les immeubles d’avant 1970, la ventilation mécanique n’existait pas&nbsp;: elle ne s’est
          généralisée qu’à partir des années 1970. Sur ce bâti, la condensation en salle d’eau et en
          cuisine est un motif de litige récurrent à l’état des lieux de sortie, et elle est presque
          systématiquement imputée à tort au locataire.
        </p>
        <p>
          Sur le parc 1971-1990, très présent au Grand-Quevilly et à Maromme, ce sont les{' '}
          <strong>premières générations de VMC</strong> qui posent problème&nbsp;: moteurs fatigués,
          bouches encrassées, réseaux jamais nettoyés depuis la construction. La ventilation existe,
          mais elle ne tire plus.
        </p>
        <p>
          Sur le bâti d’avant 1919 — près d’un logement sur dix à Déville-lès-Rouen, plus encore au
          Petit-Quevilly — ce sont les <strong>remontées capillaires</strong> en rez-de-chaussée, sur
          des murs épais sans coupure de capillarité. Enfin, sur les ensembles des années 1960-1970 à
          toiture-terrasse, les <strong>infiltrations</strong> en dernier étage reviennent
          régulièrement.
        </p>

        <h2>Quand plusieurs causes se cumulent</h2>
        <p>
          C’est le cas le plus courant sur un logement dégradé, et celui qui explique les diagnostics
          ratés. Une infiltration ancienne charge le mur en eau, ce mur devient froid, et il se met à
          condenser&nbsp;: on voit des moisissures, on conclut à un défaut d’aération, on remplace la
          VMC, et le désordre persiste parce que la façade fuit toujours.
        </p>
        <p>
          Inversement, une fuite lente sur une canalisation encastrée en pied de mur ressemble trait
          pour trait à une remontée capillaire. Seule différence&nbsp;: elle ne s’arrête pas à un
          mètre du sol et elle ne fait pas de salpêtre.
        </p>
        <div className="guide-note">
          <p>
            La mesure qui tranche est simple&nbsp;: le taux d’humidité <strong>dans l’épaisseur du
            mur</strong>, et pas seulement en surface. Une maçonnerie gorgée d’eau signe une
            remontée, une infiltration ou une fuite. Un mur sec en profondeur mais mouillé en surface
            signe une condensation. C’est le seul relevé qui vaut la peine d’être fait avant de
            chiffrer.
          </p>
        </div>

        <h2>L’ordre des opérations</h2>
        <ol>
          <li>
            <strong>Identifier la cause</strong>, par l’observation puis par un relevé sur place. Pas
            de devis de réfection avant cette étape.
          </li>
          <li>
            <strong>Traiter la cause</strong>&nbsp;: rétablir la ventilation, reprendre le point
            d’entrée d’eau, réparer la canalisation, ou traiter le pied de mur.
          </li>
          <li>
            <strong>Laisser sécher.</strong> Ce temps est incompressible et il ne se négocie pas. Un
            mur épais peut demander plusieurs semaines.
          </li>
          <li>
            <strong>Assainir les supports</strong>, traiter les moisissures, purger les enduits
            dégradés jusqu’au support sain.
          </li>
          <li>
            <strong>Refaire enduits et peinture</strong>, en choisissant des produits adaptés à la
            pièce et au support — une peinture qui laisse respirer là où c’est nécessaire.
          </li>
        </ol>
        <p>
          Sauter l’étape 3 est l’erreur la plus fréquente, parce que c’est la seule qui ne coûte rien
          d’autre que du temps — et que le temps, sur un lot vide, coûte du loyer. Notre guide sur le{' '}
          <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link> permet d’arbitrer
          en connaissance de cause plutôt qu’à l’instinct.
        </p>

        <h2>Ce qui relève de nous, ce qui n’en relève pas</h2>
        <p>
          Nous traitons la ventilation, la recherche et la réparation de fuite, les reprises d’enduits
          et de fissures, l’assainissement des supports et la peinture. C’est l’essentiel des cas de
          condensation et de fuite, et une bonne partie des infiltrations.
        </p>
        <p>
          En revanche, le traitement d’une remontée capillaire — coupure de capillarité, drainage —
          relève d’une entreprise spécialisée, et un défaut d’isolation ou un pont thermique relève de
          métiers que nous n’exerçons pas. Dans ces deux cas, nous vous le disons et nous
          n’intervenons qu’après, sur les supports. Refaire un enduit avant que la cause soit traitée
          reviendrait à vous facturer deux fois le même mur.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Si l’humidité vient d’une fuite, notre page{' '}
          <Link href="/recherche-de-fuite-rouen">recherche de fuite</Link> détaille la localisation
          non destructive, et le guide{' '}
          <Link href="/guides/degat-des-eaux-qui-paie">dégât des eaux : qui déclare, qui paie</Link>{' '}
          explique le circuit assurance à respecter avant d’engager la réfection.
        </p>
        <p>
          Si le litige porte sur l’imputation des moisissures au locataire, notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link> tranche poste par poste, et l’{' '}
          <Link href="/guides/etat-des-lieux-de-sortie">état des lieux de sortie</Link> explique
          comment documenter un constat défendable. Pour les travaux eux-mêmes, voyez nos pages{' '}
          <Link href="/peintre-rouen">peinture et enduits</Link> et{' '}
          <Link href="/plombier-rouen">plomberie</Link>.
        </p>
      </GuideArticle>
    </>
  )
}
