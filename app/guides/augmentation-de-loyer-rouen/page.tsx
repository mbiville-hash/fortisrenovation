import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import SimulateurLoyer from '@/components/SimulateurLoyer'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/augmentation-de-loyer-rouen'
const TITRE = 'Augmenter le loyer à Rouen : les trois moments possibles'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Rouen n’est pas en zone tendue : le loyer de relocation y est libre. Révision annuelle, renouvellement, relocation — ce que permet chaque moment, simulateur inclus.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Rouen n’est pas en zone tendue : à la relocation, le loyer est librement fixable. Ce que permet chaque moment du bail, et ce qui bloque tout.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideAugmentationDeLoyerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Augmentation de loyer à Rouen : révision annuelle par l’IRL, réévaluation d’un loyer sous-évalué au renouvellement, fixation libre à la relocation, et gel des loyers des logements classés F ou G.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Loyers', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Loyers"
        title={TITRE}
        lead="Beaucoup de bailleurs rouennais croient leur loyer plafonné. Il ne l’est pas : Rouen n’est pas classée en zone tendue, et à la relocation le loyer y est librement fixable. Ce qui limite vraiment la hausse, c’est le moment que vous choisissez — et l’étiquette énergétique du logement."
        datePublished="2026-08-04"
        readingTime="7 min"
        ctaTitle="Des travaux qui justifient un meilleur loyer ?"
        ctaText="Électricité, sanitaires, sols, peinture : nous chiffrons sous 48h la remise à niveau d’un lot entre deux locataires, et nous calons l’intervention sur votre date de relocation."
        sources={[
          { label: 'Article 17-1 de la loi n°89-462 du 6 juillet 1989 — révision annuelle (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000043977085' },
          { label: 'Article 17-2 de la loi n°89-462 — loyer sous-évalué au renouvellement (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037670687/' },
          { label: 'Décret n°2013-392 du 10 mai 2013 — liste des communes en zone tendue (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000027399823' },
          { label: 'Liste des communes selon le zonage, consolidée au décret du 22 décembre 2025 (data.gouv.fr)', url: 'https://www.data.gouv.fr/datasets/liste-des-communes-selon-le-zonage-tlv-1' },
          { label: 'Article 159 de la loi n°2021-1104 du 22 août 2021, Climat et Résilience (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043957099' },
          { label: 'Augmentation du loyer en cours de bail — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1311' },
          { label: 'Loyer sous-évalué : hausse au renouvellement du bail — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1312' },
        ]}
        lastVerified="Textes vérifiés sur Légifrance et service-public.gouv.fr le 4 août 2026. Le classement en zone tendue a été contrôlé commune par commune dans le fichier officiel du zonage, consolidé au décret du 22 décembre 2025. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Trois moments, trois régimes</h2>
        <p>
          Un loyer ne peut bouger qu’à trois occasions, et chacune obéit à des règles différentes.
          Confondre les trois est l’erreur la plus fréquente, parce qu’elle conduit soit à réclamer
          ce qu’on ne peut pas obtenir, soit à laisser passer ce qu’on aurait pu prendre.
        </p>
        <ol>
          <li>
            <strong>En cours de bail</strong>&nbsp;: la révision annuelle selon l’indice de référence
            des loyers, à condition que le bail le prévoie.
          </li>
          <li>
            <strong>Au renouvellement</strong>&nbsp;: la réévaluation d’un loyer manifestement
            sous-évalué, avec une procédure formelle et un étalement obligatoire.
          </li>
          <li>
            <strong>À la relocation</strong>&nbsp;: la fixation d’un nouveau loyer pour un nouveau
            locataire. À Rouen, c’est le moment le plus libre — et de loin.
          </li>
        </ol>

        <h2>Rouen n’est pas en zone tendue — et ça change tout</h2>
        <p>
          C’est le point que la plupart des articles se trompent à énoncer, parce qu’ils confondent
          deux dispositifs qui n’ont ni le même périmètre ni le même objet.
        </p>
        <p>
          L’<strong>encadrement du niveau des loyers</strong> — celui qui impose un loyer de référence
          à ne pas dépasser — ne s’applique qu’à Paris, Lyon, Villeurbanne, Lille, Bordeaux,
          Montpellier, une partie de Grenoble, l’agglomération du Pays basque et trois territoires de
          la petite couronne. Rouen n’en fait pas partie.
        </p>
        <p>
          L’<strong>encadrement de l’évolution des loyers</strong> vise, lui, les communes classées en
          zone tendue par le décret du 10 mai 2013. Là aussi, Rouen est absente&nbsp;: dans le fichier
          officiel du zonage, consolidé au décret du 22 décembre 2025, Rouen et les
          <strong> 71 communes de la Métropole Rouen Normandie</strong> sont toutes classées «&nbsp;non
          tendue&nbsp;». En Seine-Maritime, seules 39 communes du littoral sont classées, et au titre
          des zones touristiques.
        </p>
        <div className="guide-note">
          <p>
            Conséquence directe&nbsp;: à Rouen, le loyer que vous demandez à un nouveau locataire
            n’est plafonné par <strong>aucun texte</strong>. Ni par le dernier loyer du locataire
            précédent, ni par un indice, ni par un loyer de référence. Ce sont le marché local et
            l’état du logement qui l’arbitrent — pas la loi.
          </p>
        </div>

        <h2>Ce que ça représente</h2>
        <p>
          Déplacez les curseurs pour voir ce que rapporte une hausse, et en combien de temps des
          travaux se remboursent.
        </p>

        <SimulateurLoyer />

        <h2>La révision annuelle : automatique, mais sous conditions</h2>
        <p>
          En cours de bail, le seul levier de plein droit est la révision annuelle indexée sur
          l’<strong>indice de référence des loyers</strong> publié chaque trimestre par l’INSEE. Elle
          n’a rien d’automatique pour autant, et trois conditions la gouvernent.
        </p>
        <p>
          D’abord, le bail doit contenir une <strong>clause de révision</strong>. Sans clause, aucune
          révision n’est possible, quelle que soit l’évolution de l’indice. Ensuite, la révision
          s’applique à la date convenue au contrat, et jamais rétroactivement. Enfin, vous disposez
          d’un <strong>an</strong> à compter de cette date pour la réclamer.
        </p>
        <div className="guide-note">
          <p>
            Ce délai d’un an est un piège classique en gestion de parc&nbsp;: passé ce délai, le
            bailleur est réputé avoir renoncé à la révision de l’année écoulée. Elle est perdue, et
            elle ne se rattrape pas l’année suivante. Sur vingt lots, un oubli de calendrier coûte
            plus cher qu’il n’y paraît.
          </p>
        </div>
        <p>
          Une hausse liée à des <strong>travaux d’amélioration</strong> reste possible en cours de
          bail, mais elle suppose l’accord du locataire, par une clause du bail ou par un avenant
          signé. La loi ne fixe ici aucun pourcentage&nbsp;: le montant se négocie. Autant dire que,
          dans les faits, c’est rarement le moment le plus favorable.
        </p>

        <h2>Le renouvellement : réévaluer un loyer sous-évalué</h2>
        <p>
          Si le loyer est <strong>manifestement sous-évalué</strong> — parce qu’il n’a pas bougé
          depuis dix ans, par exemple — l’article 17-2 de la loi de 1989 permet d’en proposer un
          nouveau au renouvellement du bail. La procédure est formelle, et le formalisme est
          justement ce qui la fait échouer le plus souvent.
        </p>
        <ol>
          <li>
            <strong>Proposer au moins six mois avant le terme du bail</strong>, dans les formes de
            l’article 15. Un jour de retard et la proposition est inopérante.
          </li>
          <li>
            <strong>Joindre des références de loyers</strong> constatés dans le voisinage pour des
            logements comparables. Il en faut <strong>trois</strong> à Rouen — six seulement dans les
            communes des agglomérations de plus d’un million d’habitants.
          </li>
          <li>
            <strong>Attendre la réponse du locataire</strong>, qui a jusqu’à quatre mois avant le
            terme pour se prononcer. Son silence vaut refus.
          </li>
          <li>
            <strong>En cas de désaccord</strong>, saisir la commission départementale de
            conciliation, puis le juge avant le terme du bail. Sans saisine, le bail est reconduit
            aux conditions antérieures.
          </li>
        </ol>
        <p>
          Dernier point, souvent ignoré&nbsp;: la hausse ne s’applique pas d’un coup. Elle est
          <strong> étalée par tiers ou par sixième</strong> selon la durée du bail renouvelé, et
          lorsqu’elle dépasse 10&nbsp;%, l’étalement se fait par sixième. Une réévaluation de
          120&nbsp;€ peut donc mettre six ans à produire son plein effet.
        </p>

        <h2>La relocation : le seul moment vraiment libre</h2>
        <p>
          C’est là que tout se joue. Hors zone tendue, le bailleur fixe librement le loyer du nouveau
          bail. Aucun plafond, aucune procédure, aucune référence à produire, aucun étalement. Le
          départ d’un locataire est donc, à Rouen, la seule occasion de repositionner un lot en une
          fois.
        </p>
        <p>
          Ce qui limite la hausse à ce moment-là n’est pas juridique mais commercial&nbsp;: un loyer
          trop ambitieux allonge la vacance, et chaque semaine de vacance annule une partie du gain.
          Notre guide sur le{' '}
          <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link> permet de chiffrer
          cet arbitrage à la journée.
        </p>
        <p>
          C’est aussi pourquoi l’état du logement pèse autant que le prix affiché. Une installation
          électrique aux normes, des sanitaires refaits, des sols et des peintures neufs ne sont pas
          des arguments décoratifs&nbsp;: ils déterminent le loyer que le marché accepte et la vitesse
          à laquelle le lot se reloue. Voyez nos pages{' '}
          <Link href="/electricien-rouen">électricité</Link>,{' '}
          <Link href="/plombier-rouen">plomberie</Link>,{' '}
          <Link href="/pose-de-sol-rouen">sols</Link> et{' '}
          <Link href="/peintre-rouen">peinture et enduits</Link>.
        </p>
        <div className="guide-note">
          <p>
            Attention à ne pas confondre <strong>remise en état</strong> et{' '}
            <strong>amélioration</strong>. Repeindre des murs fatigués et remplacer un sol usé
            relèvent de l’entretien normal du bien&nbsp;: c’est ce qui permet de <em>maintenir</em> le
            loyer. Créer une pièce d’eau, refaire une installation électrique vétuste aux normes,
            remplacer des équipements par du neuf plus performant, c’est de l’amélioration&nbsp;:
            c’est ce qui permet de le <em>relever</em>.
          </p>
        </div>

        <h2>Le cas qui bloque tout : un DPE F ou G</h2>
        <p>
          Une seule règle prime sur tout ce qui précède. Depuis le <strong>24 août 2022</strong>, un
          logement classé F ou G au diagnostic de performance énergétique ne peut plus voir son loyer
          augmenter. Ni révision selon l’IRL, ni majoration pour travaux, ni réévaluation au
          renouvellement.
        </p>
        <p>
          Et le point que beaucoup manquent&nbsp;: cette interdiction ne dépend pas du zonage. Elle
          s’applique <strong>partout, y compris hors zone tendue</strong>, et jusqu’à la relocation —
          pour un logement F ou G, le loyer du nouveau bail ne peut pas dépasser le dernier loyer
          appliqué au locataire précédent. La liberté de fixation dont bénéficie Rouen s’arrête donc
          net à la porte des passoires énergétiques.
        </p>
        <div className="guide-note">
          <p>
            La seule sortie est d’atteindre au moins la <strong>classe E</strong>, constatée par un
            nouveau DPE après travaux. Cela relève de l’isolation et du chauffage&nbsp;: ce n’est pas
            notre métier, et nous préférons vous le dire plutôt que de vous vendre des travaux qui ne
            débloqueront rien. Refaire une salle d’eau ou repeindre un logement ne fait pas bouger une
            étiquette énergétique.
          </p>
        </div>

        <h2>Pour aller plus loin</h2>
        <p>
          Le départ d’un locataire déclenche plusieurs échéances à la fois. Notre guide sur l’
          <Link href="/guides/etat-des-lieux-de-sortie">état des lieux de sortie</Link> détaille ce
          qui peut être retenu sur le dépôt de garantie, la{' '}
          <Link href="/guides/grille-de-vetuste-location">grille de vétusté</Link> explique comment
          déduire l’usure du temps, et si votre lot se trouve dans l’un des six secteurs concernés, le{' '}
          <Link href="/guides/permis-de-louer-rouen">permis de louer</Link> conditionne la signature
          du prochain bail.
        </p>
        <p>
          Pour préparer la remise en état elle-même, notre méthode de{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link> décrit le
          déroulé, les délais et la façon dont nous chiffrons.
        </p>
      </GuideArticle>
    </>
  )
}
