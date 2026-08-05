import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import AmianteAvantTravaux from '@/components/AmianteAvantTravaux'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/amiante-avant-travaux-sols'
const TITRE = 'Amiante avant travaux : l’obligation est la vôtre'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Déposer un sol collé sur un bâti d’avant 1997 impose un repérage amiante — et il incombe au donneur d’ordre, pas à l’entreprise. Un outil pour savoir si vous êtes concerné.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le repérage amiante avant travaux pèse sur celui qui commande les travaux. Ce que ça change avant de déposer un revêtement de sol.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideAmiantePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Repérage amiante avant travaux : qui en a la charge, quels bâtiments et quels travaux sont concernés, et pourquoi le dossier amiante ne dispense pas du repérage.',
        slug: SLUG,
        datePublished: '2026-08-05',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Amiante', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Amiante"
        title={TITRE}
        lead="Un locataire part, le sol est fatigué, on fait déposer les dalles. Sur un immeuble des années soixante, ce geste banal relève d’une obligation réglementaire — et elle ne pèse pas sur l’artisan qui pose le nouveau revêtement. Elle pèse sur celui qui commande les travaux."
        datePublished="2026-08-05"
        readingTime="6 min"
        ctaTitle="Un sol à reprendre sur un bâti ancien ?"
        ctaText="Envoyez-nous le rapport de repérage avec votre demande : nous chiffrons la dépose et la pose en connaissance du périmètre. Sans rapport, nous vous le disons avant de démarrer, pas après."
        sources={[
          { label: 'Article R4412-97 du code du travail — obligation de recherche d’amiante (Légifrance)', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038322515' },
          { label: 'Arrêté du 16 juillet 2019 — repérage amiante avant travaux dans les immeubles bâtis (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038777498' },
          { label: 'Décret n°2017-899 du 9 mai 2017 — repérage de l’amiante avant certaines opérations (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000034637174' },
          { label: 'Diagnostic amiante — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F742' },
        ]}
        lastVerified="Article R4412-97 du code du travail et arrêté du 16 juillet 2019 lus sur Légifrance le 5 août 2026, régime des diagnostics amiante immobiliers vérifié sur service-public.gouv.fr le même jour. Ce guide est informatif et ne constitue pas un avis juridique. Nous ne réalisons ni repérage ni travaux de retrait."
      >
        <h2>L’obligation est celle du donneur d’ordre</h2>
        <p>
          C’est le point que presque tous les gestionnaires découvrent trop tard. L’article R4412-97
          du code du travail met la recherche d’amiante à la charge du{' '}
          <strong>donneur d’ordre, du maître d’ouvrage ou du propriétaire</strong> — c’est-à-dire de
          celui qui décide de l’opération. Pas de l’entreprise qui l’exécute.
        </p>
        <p>
          Autrement dit&nbsp;: quand vous commandez la dépose d’un revêtement de sol sur un immeuble
          ancien, c’est à vous de fournir le repérage. Une entreprise sérieuse vous le demandera
          avant de démarrer, et son absence est un motif légitime de ne pas commencer le chantier.
        </p>

        <h2>Êtes-vous concerné&nbsp;?</h2>
        <p>Trois questions suffisent à le savoir.</p>

        <AmianteAvantTravaux />

        <h2>Deux régimes qu’on confond en permanence</h2>
        <p>
          Il existe deux familles de documents sur l’amiante, issues de deux codes différents, et
          les mélanger est l’erreur la plus fréquente.
        </p>
        <p>
          D’un côté, les <strong>diagnostics amiante immobiliers</strong>, qui relèvent de la santé
          publique et visent les bâtiments dont le permis de construire a été délivré{' '}
          <strong>avant le 1ᵉʳ juillet 1997</strong>. En copropriété, le syndicat tient un dossier
          technique amiante pour les parties communes, tandis que chaque propriétaire constitue un
          dossier amiante pour ses parties privatives.
        </p>
        <p>
          De l’autre, le <strong>repérage avant travaux</strong>, qui relève du code du travail et
          protège les personnes qui vont intervenir. Il vise les bâtiments construits avant
          l’entrée en vigueur du décret d’interdiction de l’amiante, du 24 décembre 1996.
        </p>
        <div className="guide-note">
          <p>
            Retenez ceci&nbsp;: <strong>le dossier amiante ne dispense pas du repérage avant
            travaux.</strong> Ce sont deux obligations distinctes, avec des finalités différentes.
            Le premier décrit ce qui est connu dans le bâtiment&nbsp;; le second cherche
            spécifiquement ce que vos travaux vont toucher.
          </p>
        </div>

        <h2>Pourquoi les sols sont le cas le plus fréquent</h2>
        <p>
          Sur le parc que nous suivons dans la métropole, la dépose de revêtement de sol est de loin
          l’opération qui déclenche le plus souvent la question. Les dalles vinyle et les colles
          bitumineuses posées des années 1950 aux années 1980 en contiennent fréquemment, et ce sont
          précisément ces générations qui dominent le parc locatif rouennais.
        </p>
        <p>
          À Sotteville-lès-Rouen, près de quatre logements sur dix datent de la reconstruction
          d’après-guerre. Au Grand-Quevilly et à Maromme, le pic se situe entre 1971 et 1990. Ce
          sont les logements où les sols souples arrivent aujourd’hui en fin de vie — donc ceux
          qu’on veut refaire entre deux locataires.
        </p>
        <p>
          Le piège tient au geste lui-même&nbsp;: gratter une colle, poncer un ragréage, arracher une
          dalle, c’est exactement ce qui libère des fibres. Poser un sol neuf par-dessus sans
          toucher à l’ancien ne pose pas le même problème — mais c’est une décision technique, à
          prendre en connaissance de cause et pas par commodité.
        </p>

        <h2>Comment se déroule un repérage</h2>
        <p>
          Le repérage consiste à identifier et localiser les matériaux susceptibles d’être touchés
          par les travaux. Il est réalisé par un <strong>opérateur certifié avec mention
          amiante</strong>, formé aux risques d’exposition. Quand l’information disponible est
          insuffisante ou peu fiable, il procède à des prélèvements analysés par un laboratoire
          accrédité.
        </p>
        <p>
          Point à ne pas manquer&nbsp;: un repérage porte sur un <strong>périmètre précis</strong>,
          celui des travaux que vous décrivez. Un rapport établi pour une salle de bain ne couvre
          pas la dépose du sol du séjour. C’est pourquoi il faut décrire l’opération avant, et non
          après.
        </p>

        <h2>Ce que le rapport change pour le chantier</h2>
        <p>
          Le rapport doit être communiqué aux entreprises appelées à intervenir. C’est lui qui leur
          permet d’identifier les opérations empoussiérantes et de définir les protections
          adaptées. Sans lui, une entreprise qui démarre travaille à l’aveugle — et vous exposez
          ses salariés autant que votre responsabilité.
        </p>
        <p>
          Si de l’amiante est détectée, le retrait relève d’entreprises certifiées, avec un
          protocole spécifique. Ce n’est pas notre métier et nous ne le proposons pas. Nous
          intervenons ensuite, une fois le périmètre traité, sur la pose du nouveau revêtement et
          les finitions.
        </p>

        <h2>Le bon moment, c’est avant le devis</h2>
        <p>
          Le réflexe utile est de vérifier la date du permis de construire dès qu’un préavis arrive,
          et de commander le repérage dans la foulée s’il s’agit d’un bâti ancien avec un sol à
          reprendre. Découvrir la contrainte au moment de démarrer, c’est perdre des semaines sur un
          logement déjà vide — notre guide sur le{' '}
          <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link> permet de
          chiffrer ce que représente ce retard.
        </p>
        <div className="guide-note">
          <p>
            Un rapport conservé sert plusieurs fois. Sur un même périmètre, il reste utilisable pour
            les interventions suivantes, ce qui change l’économie de la démarche quand on gère
            plusieurs lots dans le même immeuble.
          </p>
        </div>

        <h2>Pour aller plus loin</h2>
        <p>
          Sur la pose elle-même, voyez notre page{' '}
          <Link href="/pose-de-sol-rouen">pose de sols à Rouen</Link>, et notre méthode de{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link> pour enchaîner
          les corps d’état sans temps mort.
        </p>
        <p>
          D’autres obligations se déclenchent au même moment&nbsp;: le{' '}
          <Link href="/guides/diagnostic-electrique-location">diagnostic électrique</Link> quand
          l’installation a plus de quinze ans, les critères du{' '}
          <Link href="/guides/logement-decent-est-il-louable">logement décent</Link> qui
          conditionnent la mise en location, et le{' '}
          <Link href="/guides/permis-de-louer-rouen">permis de louer</Link> dans les six secteurs
          rouennais concernés.
        </p>
      </GuideArticle>
    </>
  )
}
