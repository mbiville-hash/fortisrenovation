import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import SimulateurFuite from '@/components/SimulateurFuite'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/facture-eau-fuite-loi-warsmann'
const TITRE = 'Fuite d’eau : faire plafonner sa facture (loi Warsmann)'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Une fuite a fait exploser votre facture d’eau ? Au-delà du double de votre consommation habituelle, vous pouvez ne rien devoir. Conditions, délai d’un mois et simulateur.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le dispositif d’écrêtement, ses conditions, le délai d’un mois — et le calcul de ce que vous pourriez ne pas payer.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideLoiWarsmannPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Écrêtement de la facture d’eau après une fuite : article L2224-12-4 du CGCT, conditions, exclusions et délai d’un mois.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Facture d’eau et fuite', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Facture d’eau"
        title={TITRE}
        lead="Une facture d’eau à quatre chiffres après une fuite invisible, ça arrive plus souvent qu’on ne croit. Ce que presque personne sait, c’est qu’une loi vous protège : au-delà du double de votre consommation habituelle, vous pouvez ne rien devoir. À une condition — une attestation de plombier, envoyée dans le mois."
        datePublished="2026-08-04"
        readingTime="6 min"
        ctaTitle="Une fuite à réparer à Rouen ?"
        ctaText="Nous localisons la fuite, nous la réparons, et nous vous remettons l’attestation exigée par votre service d’eau — avec la date et la localisation, comme le texte l’impose."
        sources={[
          { label: 'Article L2224-12-4 du code général des collectivités territoriales (Légifrance)', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041410387/' },
          { label: 'Article R2224-20-1 du CGCT — modalités et exclusions (Légifrance)', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026418286' },
          { label: 'Décret n°2012-1078 du 24 septembre 2012 — facturation en cas de fuite après compteur (Légifrance)', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000026417603' },
        ]}
        lastVerified="Articles lus directement sur Légifrance le 4 août 2026. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>La règle en une phrase</h2>
        <p>
          Si une fuite sur vos canalisations a fait grimper votre consommation, vous n’êtes pas tenu
          de payer <strong>la part qui dépasse le double de votre consommation moyenne</strong> — à
          condition de produire une attestation de plomberie dans le mois qui suit le courrier de
          votre service d’eau.
        </p>
        <p>
          C’est l’article L2224-12-4 du code général des collectivités territoriales, souvent appelé
          «&nbsp;loi Warsmann&nbsp;». Il s’applique aux locaux d’habitation.
        </p>

        <h2>Combien pourriez-vous ne pas payer ?</h2>
        <p>
          Reportez les volumes de vos factures ci-dessous. Le calcul est volontairement simple et
          affiché en clair.
        </p>

        <SimulateurFuite />

        <h2>Ce qui est couvert, et ce qui ne l’est pas</h2>
        <p>
          Le dispositif vise les fuites sur les <strong>canalisations d’eau potable situées après le
          compteur</strong>. C’est large, mais ce n’est pas tout.
        </p>
        <div className="guide-note">
          <p>
            Sont <strong>exclues</strong> par l’article R2224-20-1 les fuites dues à des appareils
            ménagers, à des équipements sanitaires ou de chauffage. Autrement dit&nbsp;: un
            lave-linge qui fuit, une chasse d’eau qui coule ou un ballon percé ne donnent pas droit
            à l’écrêtement. Une canalisation percée sous une dalle, oui.
          </p>
        </div>

        <h2>Le délai d’un mois — et d’où il part</h2>
        <p>
          C’est l’erreur la plus fréquente. Le mois ne court pas à partir du jour où vous découvrez
          la fuite, ni de la date de la facture. Il court à partir du moment où
          <strong> le service d’eau vous informe</strong> de l’augmentation anormale.
        </p>
        <p>
          Car le service a lui aussi une obligation&nbsp;: dès qu’il constate une consommation
          anormale, il doit vous en informer <strong>sans délai</strong>.
        </p>
        <div className="guide-note">
          <p>
            Le point que presque personne ne connaît&nbsp;: <strong>si le service d’eau ne vous a
            pas informé</strong>, vous n’êtes pas tenu de payer la part excédant le double, même
            sans attestation. Vérifiez donc si vous avez reçu ce courrier avant de payer.
          </p>
        </div>

        <h2>Ce que doit contenir l’attestation</h2>
        <p>
          L’article R2224-20-1 est précis : l’attestation de l’entreprise de plomberie doit indiquer
          que la fuite a été réparée, avec <strong>sa localisation</strong> et <strong>la date de la
          réparation</strong>. Une facture sans ces deux mentions se fait retoquer.
        </p>
        <p>
          C’est exactement ce que nous remettons après une{' '}
          <Link href="/recherche-de-fuite-rouen">recherche et réparation de fuite</Link> — le
          document est fait pour être transmis tel quel à votre service d’eau.
        </p>

        <h2>Si vous ne trouvez pas la fuite</h2>
        <p>
          Il existe une seconde porte, méconnue. Dans le même délai d’un mois, vous pouvez demander
          au service d’eau de <strong>vérifier le bon fonctionnement du compteur</strong>. Il doit
          vous répondre sous un mois. Si le compteur est en cause, la surconsommation ne vous est
          pas imputable.
        </p>

        <h2>Que faire, dans l’ordre</h2>
        <ol>
          <li>
            <strong>Confirmez qu’il y a bien une fuite.</strong> Fermez tous les robinets et
            arrêtez les appareils qui consomment de l’eau — lave-linge, lave-vaisselle. Relevez
            l’index du compteur, décimales comprises, puis attendez une demi-heure sans y toucher.
            Si l’index a bougé, l’eau part quelque part.
          </li>
          <li>
            <strong>Situez-la, au moins grossièrement.</strong> Fermez le robinet d’arrêt placé
            juste après le compteur. S’il continue de tourner, la fuite se trouve entre le compteur
            et ce robinet — le plus souvent une canalisation enterrée. S’il s’arrête, elle est à
            l’intérieur du logement.
          </li>
          <li>
            <strong>Conservez le courrier</strong> du service d’eau. C’est lui qui déclenche le
            délai d’un mois — notez sa date.
          </li>
          <li>
            <strong>Faites localiser et réparer</strong> la fuite par une entreprise de plomberie.
          </li>
          <li>
            <strong>Récupérez l’attestation</strong> avec la localisation et la date de réparation.
          </li>
          <li>
            <strong>Envoyez-la à votre service d’eau</strong> avant la fin du mois, en gardant une
            preuve d’envoi.
          </li>
        </ol>

        <h2>Et si le logement est loué ?</h2>
        <p>
          La facture d’eau étant en général au nom de l’occupant, c’est lui qui fait la démarche.
          Mais la question de savoir qui paie la <em>réparation</em> est distincte&nbsp;: un joint
          qui suinte relève de l’entretien courant, une canalisation percée relève du propriétaire.
        </p>
        <p>
          Notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et
          locataire</Link> propose un outil pièce par pièce pour trancher. Et si le dégât a touché
          les revêtements, voyez notre page{' '}
          <Link href="/degat-des-eaux-rouen">dégât des eaux</Link>.
        </p>
        <p>
          L’écrêtement de la facture et l’indemnisation du sinistre sont deux dossiers distincts, qui
          se mènent en parallèle et avec des interlocuteurs différents. Notre guide{' '}
          <Link href="/guides/degat-des-eaux-qui-paie">dégât des eaux : qui déclare, qui paie</Link>{' '}
          détaille le second, et l’ordre à respecter pour ne pas perdre la prise en charge.
        </p>
      </GuideArticle>
    </>
  )
}
