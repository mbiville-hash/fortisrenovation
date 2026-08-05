import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/peintre-rouen'
const TITRE = 'Peintre à Rouen — remise en peinture & enduits'
const DESC =
  'Peintre à Rouen : remise en peinture de logement entre deux locataires, reprises d’enduits, parties communes. Devis gratuit sous 48h, chantier propre, rapport photo.'

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

export default function PeintreRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Peintre Rouen"
      schemaDescription="Peinture et enduits à Rouen : remise en peinture de logements locatifs, reprises d’enduits, parties communes de copropriété. Devis gratuit, chantier propre."
      eyebrow="Peinture & enduits · Rouen & métropole"
      titre={['Peintre à Rouen —', 'remise en peinture et enduits.']}
      intro="Murs et plafonds repris et remis en peinture, prêts pour les visites. Nous travaillons surtout pour les bailleurs, les gestionnaires et les syndics à Rouen et dans la métropole : un logement entre deux locataires, une cage d’escalier, une reprise après sinistre."
      promesses={[
        ['48h', 'Devis reçu', 'Réponse garantie'],
        ['1', 'Interlocuteur unique', 'Du constat aux clés'],
        ['Photo', 'Rapport systématique', 'Avant, pendant, après'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Nos travaux de peinture à Rouen"
      servicesIntro="Le support compte autant que la finition : nous reprenons les fonds avant de peindre, sinon les défauts ressortent en quelques mois. Chantier protégé, locaux rendus propres."
      services={[
        ['Remise en peinture de logement', 'Murs et plafonds d’un logement entre deux locataires : lessivage, reprises, sous-couche et finition. Livré prêt à faire visiter.', '/remise-en-etat-locative-rouen'],
        ['Reprises d’enduits & rebouchage', 'Fissures, trous de fixation, angles épaufrés, raccords de plaque : nous rattrapons le support avant la mise en peinture.'],
        ['Parties communes', 'Halls, couloirs et cages d’escalier de copropriété, avec une organisation qui laisse le passage libre aux occupants.', '/maintenance-copropriete-rouen'],
        ['Peinture après dégât des eaux', 'Traitement des auréoles, assèchement vérifié, reprise du support puis remise en peinture — avec les photos pour votre assureur.', '/degat-des-eaux-rouen'],
        ['Boiseries, plinthes et huisseries', 'Portes, plinthes, bâtis et radiateurs remis au propre : c’est souvent ce qui fait paraître un logement fatigué.'],
        ['Papier peint & toile de verre', 'Dépose de l’ancien revêtement, préparation du mur, pose et mise en peinture de la toile.'],
      ]}
      process={[
        ['1', 'Constat sur place', 'Nous venons voir, nous mesurons les surfaces et nous photographions l’état des supports.'],
        ['2', 'Devis sous 48h', 'Chiffrage ligne à ligne, pièce par pièce, photos à l’appui — présentable au propriétaire tel quel.'],
        ['3', 'Chantier protégé', 'Sols et menuiseries bâchés, reprises de support, sous-couche puis finition.'],
        ['4', 'Livraison au propre', 'Nettoyage de fin de chantier et rapport photo avant/après transmis sous 48h.'],
      ]}
      faqs={[
        { q: 'Repeignez-vous un logement entre deux locataires ?', a: 'Oui, c’est notre demande la plus fréquente. Nous chiffrons dès l’état des lieux de sortie et nous calons l’intervention sur votre date de relocation, pour que le logement ne reste pas vide plus longtemps que nécessaire.' },
        { q: 'Combien de temps faut-il pour repeindre un appartement ?', a: 'Cela dépend des surfaces et de l’état des supports : un logement dont les murs sont sains va bien plus vite qu’un logement à reprendre entièrement. Nous vous donnons une date de livraison ferme sur le devis, après être passés voir.' },
        { q: 'Reprenez-vous les fissures et les trous avant de peindre ?', a: 'Systématiquement, et c’est chiffré à part sur le devis pour que vous voyiez ce que ça représente. Peindre sur un support non repris, c’est voir les défauts réapparaître en quelques mois.' },
        { q: 'Intervenez-vous dans les parties communes d’une copropriété ?', a: 'Oui : halls, couloirs et cages d’escalier. Nous organisons le chantier pour laisser le passage libre aux occupants et nous fournissons des comptes-rendus utilisables en assemblée générale.' },
        { q: 'Le logement est-il utilisable tout de suite après les travaux ?', a: 'Nous utilisons des peintures en phase aqueuse, peu odorantes. Nous vous indiquons sur le devis le délai à prévoir avant la remise des clés, en fonction des produits employés et de la ventilation du logement.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          La peinture va souvent avec le reste&nbsp;: voyez la{' '}
          <Link href="/remise-en-etat-locative-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état locative</Link>, la{' '}
          <Link href="/pose-de-sol-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>pose de sols</Link>, l’{' '}
          <Link href="/electricien-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>électricité</Link> et la{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>plomberie</Link> — réunies dans notre{' '}
          <Link href="/maintenance-immobiliere-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière</Link>.
          {' '}Et si la peinture cloque ou noircit à répétition, commencez par{' '}
          <Link href="/guides/humidite-identifier-la-cause" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>identifier la cause de l’humidité</Link>&nbsp;: repeindre par-dessus ne tient pas une saison.
        </>
      }
      ctaTitre="Un logement à remettre en peinture ?"
      ctaSous="Envoyez photos et adresse : nous revenons avec un chiffrage et une date sous 48h."
    />
  )
}
