import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/carreleur-rouen'
const TITRE = 'Carreleur à Rouen — pose de carrelage et de faïence'
const DESC =
  'Carreleur à Rouen : pose de carrelage au sol et en mural, faïence de salle de bain et de cuisine, grand format, ragréage et joints. Devis gratuit sous 48h.'

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

export default function CarreleurRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Carreleur Rouen"
      schemaDescription="Carreleur à Rouen : pose de carrelage au sol et en mural, faïence de salle de bain et de cuisine, carreaux grand format, ragréage, calepinage et joints."
      eyebrow="Carrelage & faïence · Rouen & métropole"
      titre={['Carreleur à Rouen —', 'carrelage et faïence posés droit.']}
      intro="Un carrelage se juge sur trois choses : la planéité du support, le calepinage et la régularité des joints. Nous préparons le fond avant de poser, à Rouen et dans la métropole, pour un sol de séjour comme pour une faïence de salle de bain."
      promesses={[
        ['48h', 'Devis reçu', 'Réponse garantie'],
        ['1', 'Interlocuteur unique', 'Du constat aux clés'],
        ['Photo', 'Rapport systématique', 'Avant, pendant, après'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Nos poses de carrelage à Rouen"
      servicesIntro="Le carrelage ne pardonne rien : un support qui bouge fissure les joints, un calepinage mal parti finit en coupe de deux centimètres contre le mur le plus visible. Nous calons la pose avant de coller."
      services={[
        ['Carrelage au sol', 'Séjour, cuisine, entrée, couloir : dépose de l’ancien revêtement si besoin, ragréage du support, pose collée et joints réguliers.'],
        ['Faïence de salle de bain', 'Murs de douche, contour de baignoire, crédence de lavabo : pose sur support préparé, coupes propres autour des arrivées et des bondes.', '/salle-de-bain-rouen'],
        ['Crédence de cuisine', 'Entre le plan de travail et les meubles hauts, avec des découpes ajustées aux prises et aux sorties de hotte.'],
        ['Carreaux grand format', 'Les grands carreaux demandent un fond parfaitement plan et un double encollage. Nous vous disons au constat si le support le permet.'],
        ['Ragréage & préparation de support', 'Retrait de l’ancien sol, évacuation des gravats et ragréage quand le fond est irrégulier — chiffré à part pour que vous voyiez ce que ça représente.'],
        ['Reprise de carrelage abîmé', 'Carreaux fêlés, joints creusés ou noircis, plinthes décollées : reprise par zone plutôt que dépose complète quand c’est possible.'],
      ]}
      process={[
        ['1', 'Constat sur place', 'Nous mesurons les surfaces, nous contrôlons la planéité du support et nous photographions l’existant.'],
        ['2', 'Devis sous 48h', 'Fournitures et pose détaillées pièce par pièce, avec le ragréage et la dépose chiffrés séparément.'],
        ['3', 'Calepinage', 'Nous décidons avec vous où tombent les coupes, pour qu’elles soient du côté le moins visible de la pièce.'],
        ['4', 'Pose, joints et finitions', 'Pose, séchage respecté, joints, silicone en périphérie, nettoyage de fin de chantier et rapport photo sous 48h.'],
      ]}
      faqs={[
        { q: 'Posez-vous du carrelage grand format ?', a: 'Oui, à condition que le support le permette. Un carreau de 60×120 ne rattrape aucun défaut de planéité : s’il faut un ragréage, nous vous le disons au constat et nous le chiffrons à part plutôt que de poser sur un fond qui va sonner creux.' },
        { q: 'Faut-il déposer l’ancien carrelage avant de poser le nouveau ?', a: 'Pas toujours. On peut poser sur un carrelage existant s’il est sain, bien collé et que la surépaisseur ne bloque ni les portes ni les seuils. Nous vérifions au constat et nous vous disons ce qui est le plus raisonnable dans votre cas.' },
        { q: 'Fournissez-vous le carrelage ou dois-je l’acheter ?', a: 'Les deux fonctionnent. Nous pouvons fournir, ou poser le carrelage que vous avez choisi — dans ce cas prévoyez environ 10 % de surplus pour les coupes et la casse, et gardez quelques carreaux pour une reprise future.' },
        { q: 'Refaites-vous seulement les joints d’un carrelage existant ?', a: 'Oui. Des joints creusés, noircis ou fissurés se reprennent sans toucher aux carreaux : nous les dégageons, nous rejointoyons et nous refaisons le silicone en périphérie. C’est une intervention courte, et elle rend beaucoup.' },
        { q: 'Intervenez-vous sur un logement mis en location ?', a: 'Oui, et souvent en même temps que la peinture et les sols pour ne pas immobiliser le logement deux fois. Nous chiffrons dès l’état des lieux de sortie et nous calons la date sur votre relocation.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Le carrelage va rarement seul&nbsp;: voyez la{' '}
          <Link href="/pose-de-sol-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>pose de parquet et de sols souples</Link>, la{' '}
          <Link href="/peintre-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>peinture et les enduits</Link> et la{' '}
          <Link href="/remise-en-etat-locative-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état locative</Link>.
          {' '}Pour une salle de bain reprise entièrement, regardez la{' '}
          <Link href="/salle-de-bain-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>rénovation de salle de bain</Link>&nbsp;;
          {' '}pour un carreau fendu ou un joint qui laisse passer l’eau, le{' '}
          <Link href="/depannage-salle-de-bain-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>dépannage de salle de bain</Link> suffit souvent.
        </>
      }
      ctaTitre="Un carrelage à poser ou à reprendre ?"
      ctaSous="Envoyez les dimensions et quelques photos : nous revenons avec un chiffrage sous 48h."
    />
  )
}
