import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/recherche-de-fuite-rouen'
const TITRE = 'Recherche de fuite à Rouen — localiser avant de casser'
const DESC =
  'Recherche de fuite à Rouen : facture d’eau anormale, tache d’humidité, compteur qui tourne. Nous localisons l’origine avant d’ouvrir, puis nous réparons. Astreinte 24h/24, devis gratuit.'

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

export default function RechercheDeFuiteRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Recherche de fuite Rouen"
      schemaDescription="Recherche et réparation de fuite d’eau à Rouen : localisation de l’origine, réparation et remise en état, rapport photo pour l’assurance. Astreinte 24h/24 et 7j/7."
      eyebrow="Recherche de fuite · Rouen & métropole"
      titre={['Recherche de fuite à Rouen —', 'localiser avant de casser.']}
      intro="Une facture d’eau qui double, une tache qui s’étend au plafond, un compteur qui tourne alors que tout est fermé : la fuite est rarement là où on la voit. Notre travail consiste d’abord à trouver l’origine, ensuite seulement à ouvrir. Un mur cassé au mauvais endroit coûte plus cher que la réparation elle-même."
      promesses={[
        ['24/7', 'Astreinte urgence', 'Intervention en quelques heures'],
        ['Photo', 'Rapport pour l’assurance', 'Daté et détaillé'],
        ['1', 'Interlocuteur unique', 'De la recherche à la remise en état'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Les fuites que nous traitons à Rouen"
      servicesIntro="Nous procédons du moins invasif au plus invasif : observation, isolement des circuits, tests de mise en eau. Nous n’ouvrons qu’une fois la zone identifiée — et nous refermons proprement."
      services={[
        ['Fuite invisible, facture anormale', 'Le compteur tourne sans qu’aucun robinet ne coule : nous isolons les circuits un par un pour situer la zone avant d’ouvrir quoi que ce soit.'],
        ['Tache au plafond ou sur un mur', 'En immeuble, l’origine est très souvent au-dessus ou dans une colonne commune. Nous remontons la piste plutôt que de traiter la tache.'],
        ['Fuite sous évier ou derrière un meuble', 'La plus fréquente, et la plus sous-estimée : un joint qui suinte depuis des mois abîme le meuble, le sol, puis le logement du dessous.'],
        ['Fuite sur canalisation encastrée', 'Dans une dalle ou une cloison. C’est le cas où la localisation compte le plus : chaque ouverture inutile est une reprise de maçonnerie et de peinture en plus.'],
        ['Dégât des eaux déclaré', 'Mise hors d’eau, séchage, remise en état et rapport photo transmissible à votre assureur.', '/degat-des-eaux-rouen'],
        ['Réparation et remise en état', 'Nous ne nous arrêtons pas au diagnostic : reprise de la canalisation, puis plâtrerie, peinture et sol si nécessaire.', '/peintre-rouen'],
      ]}
      process={[
        ['1', 'Vous nous appelez', 'Décrivez ce que vous constatez : nous vous indiquons au téléphone les gestes de mise en sécurité, à commencer par la coupure d’eau.'],
        ['2', 'Localisation', 'Sur place, nous procédons par élimination — circuits isolés, tests de mise en eau, observation des supports — avant toute ouverture.'],
        ['3', 'Devis puis réparation', 'Vous savez ce qui va être ouvert et ce que ça coûte avant que nous commencions.'],
        ['4', 'Remise en état & rapport', 'Reprise des supports, et rapport photo daté sous 48h, utilisable pour votre assurance.'],
      ]}
      faqs={[
        { q: 'Comment savoir si j’ai une fuite invisible ?', a: 'Le test le plus simple : fermez tous les robinets et tous les appareils, puis relevez le compteur. S’il continue de tourner au bout d’une heure, il y a une fuite sur le réseau. Une facture d’eau qui augmente sans raison, un point du sol anormalement chaud ou une odeur d’humidité persistante sont les autres signes qui doivent alerter.' },
        { q: 'Faut-il casser pour trouver une fuite ?', a: 'Pas systématiquement, et c’est justement l’enjeu. Nous procédons par élimination pour réduire la zone au maximum avant d’ouvrir. Sur les cas difficiles — canalisation noyée dans une dalle, réseau enterré — une détection spécialisée peut être nécessaire : nous vous le disons franchement plutôt que d’ouvrir au jugé.' },
        { q: 'La recherche de fuite est-elle prise en charge par l’assurance ?', a: 'Souvent oui, dans le cadre d’un dégât des eaux, selon votre contrat et la nature du sinistre. C’est votre assureur qui tranche, pas nous. Ce que nous garantissons, c’est de vous fournir un rapport photo daté et détaillé qui constitue une pièce recevable pour votre déclaration.' },
        { q: 'Intervenez-vous en urgence ?', a: 'Oui, astreinte 24h/24 et 7j/7. Sur une fuite active, nous intervenons en quelques heures. Le premier geste reste de couper l’arrivée d’eau — nous vous guidons au téléphone si vous ne savez pas où se trouve la vanne.' },
        { q: 'Qui paie, le bailleur ou le locataire ?', a: 'Cela dépend de l’origine. Un joint de robinet qui suinte relève de l’entretien courant, donc du locataire. Une canalisation qui se perce relève du bailleur. Notre guide sur la répartition des réparations détaille les cas les plus fréquents, pièce par pièce.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Une fuite fait rarement des dégâts seule&nbsp;: voyez notre page{' '}
          <Link href="/degat-des-eaux-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>dégât des eaux</Link>,
          l’ensemble de notre{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>offre plomberie</Link>, et le{' '}
          <Link href="/debouchage-canalisation-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>débouchage de canalisation</Link>.
          Pour les gestionnaires, tout est réuni dans la{' '}
          <Link href="/maintenance-immobiliere-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière</Link>.
        </>
      }
      ctaTitre="Une fuite à localiser à Rouen ?"
      ctaSous="Coupez l’eau, puis appelez-nous. Astreinte 24h/24, devis gratuit."
    />
  )
}
