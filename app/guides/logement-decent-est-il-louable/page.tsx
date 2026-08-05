import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import LogementDecent from '@/components/LogementDecent'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/logement-decent-est-il-louable'
const TITRE = 'Logement décent : votre bien est-il louable ?'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Les critères du décret de 2002, une checklist pour savoir si un lot est louable en l’état, et les travaux que chaque manquement impose. Un seul critère suffit à bloquer.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Sécurité, équipements, surface, énergie : cochez ce qui manque et voyez si le logement est louable en l’état.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideLogementDecentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Critères du logement décent : décret n°2002-120 du 30 janvier 2002, sécurité et salubrité, équipements obligatoires, surface minimale, décence énergétique et recours du locataire.',
        slug: SLUG,
        datePublished: '2026-08-05',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Décence', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Décence"
        title={TITRE}
        lead="La décence n’est pas une appréciation de confort, c’est une liste fermée de critères. Un seul manquant, et le logement n’est pas louable — quel que soit l’état du reste. C’est aussi la première chose qu’un locataire mécontent va chercher."
        datePublished="2026-08-05"
        readingTime="7 min"
        ctaTitle="Un lot à remettre aux normes avant de relouer ?"
        ctaText="Électricité, ventilation, sanitaires, sols et peinture : nous chiffrons sous 48h ce qu’exige la mise en conformité, et nous vous disons franchement ce qui sort de notre périmètre."
        sources={[
          { label: 'Décret n°2002-120 du 30 janvier 2002 — caractéristiques du logement décent (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000217471/' },
          { label: 'Article 2 du décret — sécurité, salubrité, étanchéité, aération (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000047983572' },
          { label: 'Article 3 du décret — équipements et éléments de confort (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000047983569' },
          { label: 'Article 4 du décret — surface et volume habitables minimaux (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000043842463' },
          { label: 'Logement à louer décent — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2042' },
        ]}
        lastVerified="Articles 2, 3 et 4 du décret du 30 janvier 2002 lus sur Légifrance le 5 août 2026, calendrier de la décence énergétique et recours du locataire vérifiés sur service-public.gouv.fr le même jour. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Ce que « décent » veut dire exactement</h2>
        <p>
          Le mot prête à confusion parce qu’il sonne subjectif. Il ne l’est pas&nbsp;: le décret du
          30 janvier 2002 fixe une liste de caractéristiques, et un logement qui n’en remplit pas une
          seule n’est pas décent. Il n’y a pas de compensation possible — un appartement refait à
          neuf mais dont le WC donne sur la cuisine reste non décent.
        </p>
        <p>
          La liste tient en quatre familles&nbsp;: la sécurité et la salubrité, les équipements, la
          surface, et depuis peu la performance énergétique.
        </p>

        <h2>Votre bien est-il louable&nbsp;?</h2>
        <p>
          Cochez uniquement ce qui ne va pas. L’outil indique ensuite ce que chaque manquement impose
          comme travaux, et lesquels relèvent de nos métiers.
        </p>

        <LogementDecent />

        <h2>Sécurité et salubrité : ce qu’impose l’article 2</h2>
        <p>
          Le logement doit assurer le clos et le couvert. Le gros œuvre doit protéger contre les eaux
          de ruissellement et les remontées d’eau, les menuiseries extérieures et la toiture doivent
          empêcher les infiltrations, et l’ensemble doit présenter une étanchéité à l’air suffisante.
        </p>
        <p>
          Le même article exige une <strong>aération suffisante</strong>, avec des dispositifs
          d’ouverture et de ventilation en bon état assurant le renouvellement de l’air et
          l’évacuation de l’humidité. Enfin, les matériaux, canalisations et revêtements ne doivent
          présenter <strong>aucun risque manifeste</strong> pour la santé et la sécurité des
          occupants.
        </p>
        <div className="guide-note">
          <p>
            C’est le critère le plus souvent invoqué dans les litiges, et le plus mal compris. Une
            VMC hors service n’est pas un défaut de confort&nbsp;: c’est un manquement à la décence.
            Si des moisissures reviennent malgré les reprises, notre guide pour{' '}
            <Link href="/guides/humidite-identifier-la-cause">identifier la cause d’une
            humidité</Link> permet de savoir si le problème vient de la ventilation, du bâti ou d’une
            fuite.
          </p>
        </div>

        <h2>Les équipements : la liste de l’article 3</h2>
        <p>
          Sept éléments sont exigés, et leur absence se constate vite&nbsp;: une installation de
          chauffage en état de marche&nbsp;; une alimentation en eau potable avec pression et débit
          suffisants&nbsp;; des évacuations d’eaux ménagères et vannes munies de siphons&nbsp;; une
          cuisine ou un coin cuisine aménagé pour recevoir un appareil de cuisson, avec un évier
          raccordé en eau chaude et froide&nbsp;; un WC séparé de la cuisine et de la pièce où l’on
          prend les repas&nbsp;; une baignoire ou une douche alimentée en eau chaude et froide&nbsp;;
          et un réseau électrique permettant l’éclairage suffisant de toutes les pièces et des accès
          ainsi que le fonctionnement des appareils ménagers courants.
        </p>
        <p>
          Sur le parc ancien de la métropole, deux points reviennent constamment&nbsp;: le réseau
          électrique sous-dimensionné, et le WC non séparé dans les petites surfaces divisées après
          coup.
        </p>
        <p>
          Pour le premier, l’état de l’installation électrique annexé au bail dit exactement où ça
          coince. Notre guide{' '}
          <Link href="/guides/diagnostic-electrique-location">diagnostic électrique&nbsp;: ce qui
          oblige vraiment</Link> explique comment le lire et distinguer ce qui bloque la relocation
          de ce qui peut attendre.
        </p>

        <h2>La surface : l’article 4, court et sans appel</h2>
        <p>
          La pièce principale doit faire au moins <strong>9 m² avec 2,20 m sous plafond</strong>, ou
          présenter un volume habitable d’au moins <strong>20 m³</strong>. L’une ou l’autre condition
          suffit, ce qui sauve certains combles aménagés.
        </p>
        <p>
          C’est le seul critère qu’aucun travaux courant ne rattrape. Si un lot n’y satisfait pas, il
          faut revoir la distribution du logement — ou renoncer à le louer comme logement autonome.
        </p>

        <h2>La décence énergétique et son calendrier</h2>
        <p>
          Depuis quelques années, la performance énergétique est devenue un critère de décence à part
          entière, avec un calendrier progressif en France métropolitaine.
        </p>
        <ol>
          <li>
            <strong>Depuis le 1ᵉʳ janvier 2025</strong>, un logement classé <strong>G</strong> n’est
            plus décent&nbsp;: il ne peut plus être proposé à la location.
          </li>
          <li>
            <strong>À partir de 2028</strong>, la classe <strong>F</strong> basculera à son tour.
          </li>
          <li>
            <strong>À partir de 2034</strong>, ce sera le tour de la classe <strong>E</strong>.
          </li>
        </ol>
        <div className="guide-note">
          <p>
            Disons-le franchement&nbsp;: sortir un logement de la classe G relève de l’isolation et
            du chauffage. Ce ne sont pas nos métiers, et aucun de nos lots de travaux ne fera bouger
            l’étiquette à lui seul. Nous préférons vous l’écrire plutôt que de vous vendre une
            réfection qui ne débloquera rien. Le gel des loyers qui frappe ces logements est détaillé
            dans notre guide sur l’{' '}
            <Link href="/guides/augmentation-de-loyer-rouen">augmentation de loyer à Rouen</Link>.
          </p>
        </div>

        <h2>Ce que le locataire peut faire, et ce que le juge peut ordonner</h2>
        <p>
          Le locataire commence par une demande écrite au propriétaire, en recommandé avec accusé de
          réception. Il peut se faire accompagner par les services de l’État via le dispositif Signal
          Logement. Si le désaccord persiste au bout de <strong>deux mois</strong>, il saisit le juge
          des contentieux de la protection.
        </p>
        <p>
          Le juge dispose alors de trois leviers&nbsp;: <strong>ordonner les travaux</strong>,{' '}
          <strong>réduire le loyer</strong>, ou en <strong>suspendre le paiement</strong>. Autant
          dire que le coût d’un manquement dépasse largement celui des travaux qui l’auraient évité.
        </p>
        <div className="guide-note">
          <p>
            Un point à connaître pour désamorcer les conflits&nbsp;: le locataire n’a pas le droit de
            cesser de payer son loyer de sa propre initiative. Seule une décision de justice peut
            l’y autoriser. Le rappeler calmement, par écrit, évite souvent que la situation
            s’envenime pendant que les travaux se préparent.
          </p>
        </div>

        <h2>Le bon moment pour vérifier, c’est avant</h2>
        <p>
          La décence se contrôle idéalement <strong>pendant le préavis</strong>, pas après la remise
          des clés. Le logement est encore occupé, les défauts sont visibles à l’usage, et vous avez
          trois mois pour faire chiffrer et planifier. Contrôler après le départ, c’est découvrir les
          travaux quand chaque jour compte.
        </p>
        <p>
          Deux échéances se cumulent souvent à ce moment-là&nbsp;: si votre lot se trouve dans l’un
          des six secteurs concernés, le{' '}
          <Link href="/guides/permis-de-louer-rouen">permis de louer</Link> impose déjà un dossier de
          diagnostics avant toute nouvelle mise en location — et ces diagnostics révèlent précisément
          les manquements listés ici.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Sur ce qui relève du locataire et ce qui reste au bailleur, voyez notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link>. Sur le temps que coûte un lot immobilisé, le{' '}
          <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link>. Et pour les
          travaux eux-mêmes, nos pages{' '}
          <Link href="/electricien-rouen">électricité</Link>,{' '}
          <Link href="/plombier-rouen">plomberie</Link>,{' '}
          <Link href="/peintre-rouen">peinture et enduits</Link> et{' '}
          <Link href="/pose-de-sol-rouen">pose de sols</Link>, réunies dans notre{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link>.
        </p>
      </GuideArticle>
    </>
  )
}
