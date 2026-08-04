import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/electricien-rouen'
const TITRE = 'Électricien à Rouen — dépannage & mise aux normes'
const DESC =
  'Électricien à Rouen : dépannage, remplacement de tableau, mise aux normes et remise en état entre deux locataires. Devis gratuit sous 48h, rapport photo, interlocuteur unique.'

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

export default function ElectricienRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Électricien Rouen"
      schemaDescription="Électricité à Rouen : dépannage, tableau électrique, mise aux normes et remise en état de logements locatifs. Devis gratuit, rapport écrit à chaque intervention."
      eyebrow="Électricité · Rouen & métropole"
      titre={['Électricien à Rouen —', 'dépannage et mise aux normes.']}
      intro="De la prise qui ne fonctionne plus au tableau vétuste à remplacer, nous traitons l’électricité du quotidien à Rouen et dans la métropole. Bailleurs, gestionnaires et syndics : un interlocuteur unique, un devis clair et un rapport photo à chaque passage."
      promesses={[
        ['48h', 'Devis reçu', 'Réponse garantie'],
        ['24/7', 'Astreinte urgence', 'Intervention en quelques heures'],
        ['1', 'Interlocuteur unique', 'Du constat à la facture'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Nos interventions en électricité à Rouen"
      servicesIntro="Dépannage comme travaux planifiés, sur un logement isolé comme sur tout un parc. Nous intervenons en électricité courante : circuits, protections, appareillage et éclairage."
      services={[
        ['Panne & dépannage électrique', 'Disjoncteur qui saute, prise hors service, coupure partielle : nous cherchons l’origine avant de réparer, plutôt que de changer au hasard.'],
        ['Tableau électrique', 'Remplacement d’un tableau vétuste, ajout d’interrupteurs différentiels, séparation et repérage des circuits.'],
        ['Mise aux normes NF C 15-100', 'Mise en conformité d’une installation ancienne : liaison équipotentielle, protections adaptées, volumes de la salle d’eau.'],
        ['Prises, interrupteurs, luminaires', 'Remplacement de l’appareillage jauni ou cassé, ajout de points, éclairage remis au propre avant relocation.', '/remise-en-etat-locative-rouen'],
        ['État de l’installation avant relocation', 'Nous passons l’installation en revue et nous chiffrons ligne à ligne ce qu’il y a à reprendre, photos à l’appui.'],
        ['Parties communes', 'Éclairage de circulation, minuteries, détecteurs de présence, remise en état après sinistre dans les communs.', '/maintenance-copropriete-rouen'],
      ]}
      process={[
        ['1', 'Vous nous appelez', 'Par téléphone ou via le formulaire. Sur une panne, nous vous guidons tout de suite au téléphone.'],
        ['2', 'Diagnostic & devis', 'Nous identifions l’origine et nous la chiffrons clairement avant toute intervention. Devis gratuit.'],
        ['3', 'Intervention', 'Nous réparons proprement, en quelques heures sur une urgence, au créneau qui vous arrange sinon.'],
        ['4', 'Rapport & facture', 'Photos, nature des travaux et facture détaillée transmis sous 48h, transmissibles au propriétaire tels quels.'],
      ]}
      faqs={[
        { q: 'Intervenez-vous en urgence sur une panne électrique à Rouen ?', a: 'Oui, astreinte 24h/24 et 7j/7. Sur une coupure ou un tableau qui déclenche en boucle, nous intervenons en quelques heures. Appelez le 07 67 49 13 24.' },
        { q: 'Remplacez-vous un tableau électrique vétuste ?', a: 'Oui. Nous remplaçons le tableau, ajoutons les interrupteurs différentiels manquants, séparons et repérons les circuits. Le devis détaille chaque poste avant que vous ne validiez.' },
        { q: 'Réalisez-vous le diagnostic électrique obligatoire ?', a: 'Non. Le diagnostic électrique obligatoire pour une vente ou une location relève d’un diagnostiqueur certifié, ce que nous ne sommes pas. En revanche, nous réalisons les travaux de mise en conformité qu’il préconise, et nous pouvons chiffrer ces travaux à partir de votre rapport de diagnostic.' },
        { q: 'Travaillez-vous pour les bailleurs et les gestionnaires locatifs ?', a: 'Oui, c’est le cœur de notre activité. Un interlocuteur unique, un devis sous 48h, un rapport photo systématique et une seule facture — sans contrat ni volume minimum.' },
        { q: 'Faites-vous l’installation de chauffage électrique ?', a: 'Non. Nous ne traitons pas le chauffage ni les équipements énergétiques. Notre périmètre en électricité couvre les circuits, les protections, l’appareillage et l’éclairage.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Un logement à reprendre entre deux locataires&nbsp;? Voyez la{' '}
          <Link href="/remise-en-etat-locative-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état locative</Link>.
          Nous intervenons aussi en{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>plomberie</Link>,{' '}
          <Link href="/peintre-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>peinture et enduits</Link> et{' '}
          <Link href="/pose-de-sol-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>pose de sols</Link> — le tout réuni dans notre{' '}
          <Link href="/maintenance-immobiliere-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière</Link>.
        </>
      }
      ctaTitre="Besoin d’un électricien à Rouen ?"
      ctaSous="Devis gratuit sous 48h — et astreinte 24h/24 sur les urgences."
    />
  )
}
