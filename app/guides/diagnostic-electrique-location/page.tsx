import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import DiagnosticElectrique from '@/components/DiagnosticElectrique'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/diagnostic-electrique-location'
const TITRE = 'Diagnostic électrique : ce qui oblige vraiment'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Le diagnostic constate, il n’impose aucun travaux. Ce qui oblige, c’est la décence. Un outil pour trier ce qui bloque la relocation de ce qui peut attendre.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le diagnostic n’impose aucun travaux — c’est la décence qui oblige. Triez ce qui bloque de ce qui peut attendre.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideDiagnosticElectriquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'État de l’installation intérieure d’électricité en location : quand il est exigé, sa durée de validité, ses six points de sécurité, et pourquoi c’est la décence et non le diagnostic qui impose les travaux.',
        slug: SLUG,
        datePublished: '2026-08-05',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Électricité', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Électricité"
        title={TITRE}
        lead="Un rapport de six pages arrive, rempli d’anomalies, et la question tombe toujours : est-ce que je suis obligé de tout refaire ? La réponse surprend la plupart des bailleurs — le diagnostic, à lui seul, n’oblige à rien. Ce qui oblige, c’est autre chose, et c’est ce qu’il faut savoir lire."
        datePublished="2026-08-05"
        readingTime="6 min"
        ctaTitle="Un rapport électrique à traduire en travaux ?"
        ctaText="Envoyez-nous le diagnostic : nous chiffrons sous 48h ce qui doit être repris pour relouer sereinement, et nous vous disons ce qui peut attendre la rotation suivante."
        sources={[
          { label: 'État de l’installation intérieure d’électricité — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F18692' },
          { label: 'Décret n°2016-1105 du 11 août 2016 — état de l’installation électrique en location (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033026442' },
          { label: 'Arrêté du 28 septembre 2017 — modèle et méthode de réalisation (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000035772506' },
          { label: 'Article 2 du décret n°2002-120 — absence de risque manifeste pour la sécurité (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000047983572' },
          { label: 'Article 3 du décret n°2002-120 — réseau électrique exigé (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000047983569' },
          { label: 'Diagnostics obligatoires du bailleur — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F33463' },
        ]}
        lastVerified="Régime du diagnostic vérifié sur service-public.gouv.fr le 5 août 2026, articles 2 et 3 du décret du 30 janvier 2002 lus sur Légifrance. La qualification d’un défaut en risque manifeste pour la sécurité relève in fine du juge. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Ce que le diagnostic est, et ce qu’il n’est pas</h2>
        <p>
          L’état de l’installation intérieure d’électricité est un <strong>constat</strong>. Un
          diagnostiqueur certifié vient regarder, coche ce qui ne va pas, et remet un rapport. C’est
          tout. Il ne prescrit pas de travaux, il n’impose pas de délai, et il ne vaut pas mise en
          demeure.
        </p>
        <p>
          C’est la source d’un malentendu tenace. Un bailleur reçoit un rapport constellé
          d’anomalies et croit devoir tout reprendre&nbsp;; un autre le range dans le dossier de
          location en se disant que puisque rien ne l’oblige, il n’y a rien à faire. Les deux se
          trompent, et le second bien plus dangereusement que le premier.
        </p>

        <h2>Votre rapport signale quoi&nbsp;?</h2>
        <p>
          Cochez ce que mentionne votre diagnostic. L’outil sépare ce qui bloque de ce qui peut
          attendre.
        </p>

        <DiagnosticElectrique />

        <h2>Quand il est exigé, et combien de temps il vaut</h2>
        <p>
          Le diagnostic est obligatoire dès lors que l’installation électrique du logement a{' '}
          <strong>plus de quinze ans</strong>. Il est annexé au bail, au même titre que les autres
          diagnostics du dossier technique.
        </p>
        <p>
          Sa validité est de <strong>six ans en location</strong> — contre trois ans seulement pour
          une vente. Une attestation de conformité délivrée par un organisme agréé peut en tenir
          lieu, à condition qu’elle date de moins de six ans.
        </p>
        <div className="guide-note">
          <p>
            Six ans, c’est long à l’échelle d’un parc, et c’est un piège de calendrier&nbsp;: entre
            deux diagnostics, l’installation a pu être modifiée par un locataire, un artisan, ou par
            vos propres travaux. Un rapport valide n’est pas un rapport à jour.
          </p>
        </div>

        <h2>Les six points de sécurité</h2>
        <p>
          Le rapport s’articule autour de six points, et ils se tiennent : l’appareil général de
          commande et de protection, le dispositif différentiel à haute sensibilité, la prise de
          terre et l’installation de mise à la terre, la protection contre les surintensités adaptée
          à la section des conducteurs, la liaison équipotentielle et les règles propres aux locaux
          contenant une baignoire ou une douche, et enfin les matériels vétustes ou présentant un
          risque de contact direct avec des parties sous tension.
        </p>
        <p>
          À côté figurent des <strong>informations complémentaires</strong>, qui ne sont pas classées
          parmi les anomalies de sécurité. Confondre les deux catégories, c’est soit paniquer pour
          rien, soit passer à côté de l’essentiel.
        </p>
        <p>
          Sur le parc d’après-guerre de la métropole, les deux défauts qui reviennent le plus sont
          l’absence de protection différentielle et l’absence de terre — et ils vont ensemble, parce
          que le différentiel perd l’essentiel de son efficacité sans prise de terre.
        </p>

        <h2>Ce qui oblige vraiment : la décence</h2>
        <p>
          Voilà le point décisif. Le diagnostic n’impose rien, mais l’<strong>obligation de
          décence</strong>, elle, s’impose en permanence et indépendamment de tout rapport.
        </p>
        <p>
          Le décret du 30 janvier 2002 exige que les matériels et canalisations du logement ne
          présentent <strong>aucun risque manifeste pour la sécurité physique</strong> des occupants,
          et que le réseau électrique permette l’éclairage suffisant de toutes les pièces et des
          accès ainsi que le fonctionnement des appareils ménagers courants.
        </p>
        <p>
          Autrement dit&nbsp;: une anomalie de sécurité relevée au diagnostic rend très probablement
          le logement non décent. Et là, les conséquences sont réelles — le juge des contentieux de
          la protection peut ordonner les travaux, réduire le loyer ou en suspendre le paiement.
          Notre guide{' '}
          <Link href="/guides/logement-decent-est-il-louable">votre bien est-il louable&nbsp;?</Link>{' '}
          détaille l’ensemble des critères et les recours du locataire.
        </p>
        <div className="guide-note">
          <p>
            La bonne lecture tient en une phrase&nbsp;: <strong>le diagnostic ne vous oblige pas, il
            vous informe — et à partir du moment où vous êtes informé, ne rien faire devient un
            choix.</strong> C’est cette bascule que les gestionnaires expérimentés ont intégrée.
          </p>
        </div>

        <h2>Ce que vous risquez</h2>
        <p>
          Deux conséquences distinctes, souvent mélangées. Si le diagnostic n’est pas remis au
          locataire, vous ne pouvez plus vous exonérer de la <strong>garantie des vices
          cachés</strong> — un défaut découvert plus tard vous reste opposable. Et si vous faites
          appel à un diagnostiqueur non certifié, l’amende peut atteindre{' '}
          <strong>1 500 €</strong>, portée à <strong>3 000 €</strong> en cas de récidive.
        </p>
        <p>
          À quoi s’ajoute, en amont, le filtre du{' '}
          <Link href="/guides/permis-de-louer-rouen">permis de louer</Link>&nbsp;: dans les six
          secteurs rouennais concernés, l’état de l’installation électrique fait partie du dossier
          examiné par la Ville, et une installation dangereuse motive un refus.
        </p>

        <h2>Le bon moment, c’est pendant le préavis</h2>
        <ol>
          <li>
            <strong>Faites réaliser le diagnostic dès le préavis reçu</strong>, pas après la remise
            des clés. Vous disposez alors de trois mois pour arbitrer.
          </li>
          <li>
            <strong>Triez les anomalies</strong> : celles qui touchent à la sécurité bloquent la
            relocation, les informations complémentaires peuvent attendre.
          </li>
          <li>
            <strong>Faites chiffrer les points bloquants</strong> pendant que le logement est encore
            occupé. Le devis est prêt le jour de la sortie.
          </li>
          <li>
            <strong>Groupez avec le reste.</strong> Une reprise de tableau se coordonne avec la
            peinture et les sols&nbsp;: les saignées et les reprises se font avant les finitions,
            jamais après.
          </li>
        </ol>
        <p>
          Sur un lot vide, ce séquencement vaut de l’argent : notre guide sur le{' '}
          <Link href="/guides/cout-vacance-locative">coût d’un logement vide</Link> permet de chiffrer
          ce que coûte chaque semaine d’attente.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Nous ne réalisons pas les diagnostics — ils relèvent d’un diagnostiqueur certifié — mais
          nous exécutons les travaux qu’ils révèlent&nbsp;: voyez notre page{' '}
          <Link href="/electricien-rouen">électricité à Rouen</Link>, et notre méthode de{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link> pour grouper les
          corps d’état.
        </p>
        <p>
          Sur la répartition des coûts avec le locataire, voyez{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link>. Et si le logement présente aussi des traces d’humidité, notre guide pour{' '}
          <Link href="/guides/humidite-identifier-la-cause">identifier la cause</Link> évite de
          repeindre avant d’avoir traité l’origine.
        </p>
      </GuideArticle>
    </>
  )
}
