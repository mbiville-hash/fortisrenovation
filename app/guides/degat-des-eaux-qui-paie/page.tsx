import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import DegatDesEaux from '@/components/DegatDesEaux'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/degat-des-eaux-qui-paie'
const TITRE = 'Dégât des eaux : qui déclare, qui paie, dans quel ordre'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Cinq jours pour déclarer, un seul assureur qui pilote, et une erreur qui coûte cher : engager les travaux avant l’accord. Un outil pour trancher en deux questions.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Qui déclare, qui organise la recherche de fuite, qui paie la cause et la remise en état. Un outil pour trancher en deux questions.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideDegatDesEauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Dégât des eaux en location : délai de déclaration, assureur qui pilote, prise en charge de la recherche de fuite, réparation de la cause et remise en état.',
        slug: SLUG,
        datePublished: '2026-08-05',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Dégât des eaux', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Dégât des eaux"
        title={TITRE}
        lead="Un dégât des eaux se règle rarement sur la technique. Il se règle sur l’ordre des opérations : qui déclare, dans quel délai, qui mandate la recherche de fuite, et surtout à partir de quand on a le droit de réparer. Se tromper d’ordre, c’est payer soi-même ce qui aurait été couvert."
        datePublished="2026-08-05"
        readingTime="6 min"
        ctaTitle="Un sinistre à traiter sur votre parc ?"
        ctaText="Recherche de fuite, réparation de la cause, assèchement puis reprise des enduits, peintures et sols : nous intervenons du diagnostic à la remise en état, avec un chiffrage qui tient devant l’expert."
        sources={[
          { label: 'Assurance dégâts des eaux — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1352' },
          { label: 'Copropriété : quelle assurance pour les parties communes ? — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2027' },
          { label: 'Le règlement d’un dégât des eaux — France Assureurs', url: 'https://www.franceassureurs.fr/lassurance-protege-finance-et-emploie/lassurance-protege/les-demarches-en-cas-de-sinistre/assurance-habitation-le-reglement-un-degat-des-eaux/' },
          { label: 'Décret n°87-712 du 26 août 1987 — réparations locatives (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000875384/' },
          { label: 'Loi n°89-462 du 6 juillet 1989 — rapports locatifs (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/' },
        ]}
        lastVerified="Délais et circuit de déclaration vérifiés sur service-public.gouv.fr et France Assureurs le 5 août 2026. Les conventions entre assureurs évoluent et ne créent pas de droit direct pour l’assuré : votre contrat et la réponse de votre assureur restent la seule référence opposable. Ce guide est informatif et ne constitue ni un avis juridique ni un conseil en assurance."
      >
        <h2>Les premières heures, puis les cinq jours</h2>
        <p>
          Deux choses se jouent en parallèle, et il ne faut pas les confondre. Les{' '}
          <strong>mesures conservatoires</strong> — couper l’arrivée d’eau, bâcher, assécher,
          protéger ce qui peut encore l’être — se font immédiatement, sans attendre personne. Elles
          sont couvertes, et ne rien faire pourrait au contraire vous être reproché.
        </p>
        <p>
          La <strong>déclaration</strong>, elle, obéit à un calendrier. Elle doit intervenir dans le
          délai prévu au contrat, qui ne peut jamais être inférieur à <strong>cinq jours
          ouvrés</strong>. La déclaration mentionne vos coordonnées, le numéro de contrat, la nature
          et la date du sinistre, sa localisation, une estimation des dommages, et les éventuels
          tiers touchés.
        </p>
        <div className="guide-note">
          <p>
            Notez aussi les réparations d’urgence déjà engagées. C’est ce qui permet de les faire
            prendre en charge — un dépannage réalisé et non déclaré devient très difficile à
            rattraper ensuite.
          </p>
        </div>

        <h2>Qui fait quoi, selon votre situation</h2>
        <p>Répondez aux deux questions ci-dessous.</p>

        <DegatDesEaux />

        <h2>La règle qui explique tout : l’assureur de l’occupant</h2>
        <p>
          Le réflexe naturel du bailleur est d’appeler son propre assureur. Ce n’est pourtant pas lui
          qui pilote dans le cas le plus fréquent. En immeuble, c’est <strong>l’assureur de
          l’occupant du local sinistré</strong> qui organise la recherche de fuite — donc celui du
          locataire, quand il y en a un et qu’il est assuré.
        </p>
        <p>
          Deux exceptions changent la donne. Si le logement est <strong>vide</strong>, ou si le
          locataire <strong>n’est pas assuré ou s’apprête à partir</strong>, c’est votre assurance
          propriétaire non occupant qui reprend la main. Et si la fuite vient des{' '}
          <strong>parties communes</strong> — colonne montante, chute d’évacuation, toiture-terrasse,
          façade — c’est l’assureur de l’immeuble, saisi par le syndic.
        </p>
        <p>
          Sur le parc que nous suivons dans la métropole, la troisième situation est loin d’être
          rare&nbsp;: les colonnes des immeubles d’après-guerre arrivent en fin de vie, et une fuite
          en pied de colonne touche plusieurs lots à la fois. Le réflexe est alors d’alerter le
          syndic avant même d’ouvrir un dossier de son côté.
        </p>

        <h2>Pourquoi un seul assureur pilote</h2>
        <p>
          Quand plusieurs contrats se croisent — locataire, bailleur, voisin, copropriété — les
          assureurs ont organisé entre eux la désignation d’un interlocuteur unique, chargé de gérer
          le dossier, de faire réaliser la recherche de fuite et d’indemniser. C’est ce qui évite
          que trois compagnies s’observent pendant que le logement reste inutilisable.
        </p>
        <p>
          Ce dispositif s’applique aux sinistres dont les dommages ne dépassent pas{' '}
          <strong>5 000 € hors taxes</strong>, avec un traitement plus rapide en dessous de{' '}
          <strong>1 600 € hors taxes</strong>, seuil sous lequel l’assureur désigné indemnise sans se
          retourner contre les autres.
        </p>
        <div className="guide-note">
          <p>
            Ces seuils sont ceux d’une <strong>convention entre assureurs</strong>, pas d’un texte de
            loi. Ils sont révisables, et surtout ils règlent les rapports des compagnies entre
            elles&nbsp;: ils ne vous ouvrent aucun droit direct. Ce qui vous est opposable, c’est
            votre contrat et la position écrite de votre assureur.
          </p>
        </div>

        <h2>Le constat amiable : ne le laissez pas remplir sans vous</h2>
        <p>
          Quand un voisin est impliqué, le constat amiable dégât des eaux n’est pas obligatoire, mais
          il accélère nettement le traitement. Il fixe surtout la version commune des faits&nbsp;:
          localisation, circonstances, cause, nature des dommages, coordonnées des parties.
        </p>
        <p>
          C’est précisément pour ça qu’il ne faut pas le déléguer. Une cause mal décrite en trois
          mots oriente tout le dossier, et revenir dessus après coup demande une contre-expertise.
        </p>

        <h2>Réparer la cause n’est pas remettre en état</h2>
        <p>
          Deux budgets, deux logiques, et c’est là que les gestionnaires perdent le plus de temps.
        </p>
        <p>
          La <strong>réparation de la cause</strong> ne relève pas de l’assurance mais de la
          répartition entre bailleur et locataire. Un joint, un flexible de douche ou une bonde
          encrassée sont des réparations locatives. Une canalisation percée par vétusté, un
          chauffe-eau en fin de vie ou une colonne fuyarde restent à la charge du propriétaire. Notre
          guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link> tranche poste par poste.
        </p>
        <p>
          La <strong>remise en état</strong> — assèchement, reprise des enduits, peintures, sols —
          relève de l’assurance, après expertise. Avec une nuance que beaucoup découvrent au moment du
          chèque&nbsp;: la vétusté est déduite des embellissements. Des peintures de quinze ans ne
          sont pas remboursées à neuf. La{' '}
          <Link href="/guides/grille-de-vetuste-location">grille de vétusté</Link> explique la
          mécanique, qui est la même.
        </p>

        <h2>L’erreur qui coûte le plus cher</h2>
        <p>
          Elle est toujours la même&nbsp;: <strong>engager les travaux de réfection avant l’accord de
          l’assureur.</strong> Le logement est inoccupé, l’artisan est disponible, le gestionnaire
          veut relouer — et la reprise part avant validation. Résultat, plus rien à expertiser, et une
          prise en charge qui se discute très mal.
        </p>
        <p>
          La bonne séquence est courte&nbsp;: couper et sécuriser, déclarer, faire localiser la fuite,
          réparer la cause, laisser sécher, faire valider le devis de réfection, puis seulement
          exécuter. Le séchage est d’ailleurs incompressible&nbsp;: repeindre sur un support encore
          humide, c’est refaire le chantier une saison plus tard.
        </p>
        <div className="guide-note">
          <p>
            Sur un lot vide, chaque semaine d’attente a un coût. Notre guide sur le{' '}
            <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link> permet de le
            chiffrer à la journée — et donc d’arbitrer entre attendre l’expert et engager ce qui peut
            l’être sans risque.
          </p>
        </div>

        <h2>Pour aller plus loin</h2>
        <p>
          Si vous n’êtes pas certain qu’il s’agisse bien d’une fuite — une tache peut aussi venir
          d’une infiltration, d’une remontée capillaire ou d’une simple condensation — notre guide
          pour{' '}
          <Link href="/guides/humidite-identifier-la-cause">identifier la cause d’une humidité</Link>{' '}
          propose un outil d’orientation en trois questions.
        </p>
        <p>
          Si la fuite a fait exploser la facture d’eau, elle peut être plafonnée&nbsp;: voyez notre
          guide sur la{' '}
          <Link href="/guides/facture-eau-fuite-loi-warsmann">loi Warsmann</Link>, qui exige une
          attestation de plomberie que nous délivrons après réparation. Pour l’intervention
          elle-même, nos pages{' '}
          <Link href="/recherche-de-fuite-rouen">recherche de fuite</Link>,{' '}
          <Link href="/degat-des-eaux-rouen">dégât des eaux</Link> et{' '}
          <Link href="/peintre-rouen">peinture et enduits</Link> détaillent ce que nous faisons.
        </p>
      </GuideArticle>
    </>
  )
}
