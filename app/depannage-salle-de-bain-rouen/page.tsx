import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/depannage-salle-de-bain-rouen'
const TITRE = 'Dépannage salle de bain à Rouen — fuite, WC, robinetterie'
const DESC =
  'Dépannage de salle de bain à Rouen : fuite de robinet, chasse d’eau, WC bouché, siphon, joint de douche, remplacement de sanitaire. Astreinte 24h/24, intervention en quelques heures.'

export const metadata: Metadata = {
  title: TITRE,
  description: DESC,
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: DESC,
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'website',
    images: OG_IMAGE,
  },
}

export default function DepannageSalleDeBainRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Dépannage salle de bain Rouen"
      schemaDescription="Dépannage de salle de bain à Rouen : réparation de fuite de robinet, chasse d’eau, WC, siphon et évacuation, remplacement de sanitaire, reprise de joint de douche. Astreinte 24h/24."
      eyebrow="Dépannage salle de bain · Rouen & métropole"
      titre={['Dépannage salle de bain à Rouen —', 'réparé, pas remplacé.']}
      intro="Un robinet qui goutte, une chasse qui coule en continu, un joint de douche qui laisse passer l’eau : ce sont des réparations d’une heure ou deux, pas une salle de bain à refaire. Nous intervenons à Rouen et dans la métropole, en quelques heures pour une urgence."
      promesses={[
        ['24h/24', 'Astreinte 7j/7', 'Urgence prise en charge'],
        ['1', 'Artisan unique', 'Le même du début à la fin'],
        ['Accord', 'Avant intervention', 'Prix annoncé, puis réparation'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Ce que nous réparons dans une salle de bain"
      servicesIntro="La plupart des pannes de salle de bain se règlent par une pièce changée et un joint refait. Nous annonçons le prix avant de commencer, et nous ne proposons un remplacement que lorsque la réparation ne tient plus."
      services={[
        ['Fuite de robinet ou de mitigeur', 'Robinet qui goutte, mitigeur qui suinte à la base, flexible de douche percé : remplacement de la cartouche, du joint ou de la robinetterie.'],
        ['Chasse d’eau & mécanisme de WC', 'Chasse qui coule en continu, bouton qui ne revient pas, réservoir qui ne se remplit plus : remplacement du mécanisme et du joint de cuvette.'],
        ['WC ou évacuation bouchés', 'Cuvette, lavabo, douche ou baignoire qui n’évacuent plus : dégorgement, nettoyage du siphon et vérification de l’écoulement.'],
        ['Joint de douche & silicone', 'Un joint noirci ou décollé laisse passer l’eau derrière le receveur. Dépose de l’ancien joint, nettoyage du support et reprise au silicone sanitaire.'],
        ['Remplacement de sanitaire', 'WC, lavabo, vasque, receveur, colonne de douche ou meuble : dépose de l’ancien, pose du neuf et raccordement étanche.'],
        ['Fuite sous le lavabo ou derrière le WC', 'Siphon, bonde, flexible d’alimentation ou raccord desserré : nous reprenons le raccord et nous séchons avant de refermer.'],
      ]}
      process={[
        ['1', 'Vous appelez', 'Décrivez la panne, envoyez une photo si vous pouvez. Nous vous disons ce que c’est probablement et quand nous passons.'],
        ['2', 'Prix annoncé', 'Nous donnons le montant avant de commencer. Pas de facture qui double une fois le chantier ouvert.'],
        ['3', 'Réparation', 'Nous venons avec les pièces courantes. La majorité des dépannages se termine dans la foulée.'],
        ['4', 'Rendu propre', 'Nous testons l’étanchéité devant vous et nous laissons la salle de bain nettoyée.'],
      ]}
      faqs={[
        { q: 'Vous déplacez-vous en urgence pour une fuite ?', a: 'Oui. Nous tenons une astreinte 24h/24 et 7j/7, et nous intervenons en quelques heures sur Rouen et la métropole. Si l’eau coule sans que vous puissiez l’arrêter, fermez le robinet d’arrêt général avant notre arrivée, puis appelez-nous au 07 67 49 13 24.' },
        { q: 'Combien coûte un dépannage de salle de bain ?', a: 'Cela dépend de la pièce à changer et du temps passé. Nous annonçons le montant avant de commencer, après vous avoir dit ce que nous avons trouvé. Vous décidez à ce moment-là, sans obligation.' },
        { q: 'Faut-il refaire toute la salle de bain pour régler une fuite ?', a: 'Très rarement. Une fuite de robinetterie, une chasse d’eau ou un joint se réparent sans toucher au reste. Nous vous le disons franchement quand la réparation n’a plus de sens — par exemple si le receveur est fendu ou si l’étanchéité sous carrelage est morte — mais ce n’est pas le cas le plus fréquent.' },
        { q: 'Recherchez-vous l’origine d’une fuite invisible ?', a: 'Non. La détection de fuite par mise en pression ou caméra est un métier à part, et nous préférons vous orienter vers un spécialiste équipé plutôt que d’ouvrir des murs au hasard. En revanche, dès que la fuite est localisée, la réparation et la remise en état, c’est nous.' },
        { q: 'Intervenez-vous pour un locataire ou pour un bailleur ?', a: 'Les deux. Pour un bailleur ou un gestionnaire, nous transmettons un rapport photo et une facture détaillée, utilisables pour la régularisation des charges ou une déclaration de sinistre.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Un dépannage en amène souvent un autre&nbsp;: voyez notre{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>offre plomberie</Link> complète, le{' '}
          <Link href="/debouchage-canalisation-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>débouchage de canalisation</Link> et la{' '}
          <Link href="/degat-des-eaux-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état après dégât des eaux</Link>.
          {' '}Si la salle de bain est à bout de souffle plutôt qu’en panne, regardez la{' '}
          <Link href="/salle-de-bain-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>rénovation de salle de bain</Link>.
          {' '}Et si la facture d’eau a explosé à cause de la fuite, notre guide sur la{' '}
          <Link href="/guides/facture-eau-fuite-loi-warsmann" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>loi Warsmann</Link> explique comment la faire plafonner.
        </>
      }
      ctaTitre="Une panne dans votre salle de bain ?"
      ctaSous="Appelez-nous : nous vous disons au téléphone si c’est réparable, et à quel prix."
    />
  )
}
