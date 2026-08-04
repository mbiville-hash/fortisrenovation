import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/debouchage-canalisation-rouen'
const TITRE = 'Débouchage de canalisation à Rouen — WC, évier, colonne'
const DESC =
  'Débouchage à Rouen : WC bouché, évier qui ne s’écoule plus, odeurs, refoulement en pied de colonne. Intervention en quelques heures, astreinte 24h/24, devis gratuit.'

export const metadata: Metadata = {
  title: 'Débouchage de canalisation à Rouen — WC, évier, colonne',
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

export default function DebouchageRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Débouchage canalisation Rouen"
      schemaDescription="Débouchage de canalisation à Rouen : WC, évier, douche, évacuations et colonnes d’immeuble. Intervention rapide, astreinte 24h/24 et 7j/7, devis gratuit."
      eyebrow="Débouchage & évacuations · Rouen & métropole"
      titre={['Débouchage à Rouen —', 'WC, évier, colonne.']}
      intro="Une évacuation qui ralentit finit toujours par se boucher complètement, en général au pire moment. Nous intervenons rapidement, et surtout nous cherchons pourquoi ça s’est bouché : un bouchon qui revient tous les trois mois signale un défaut de pente, une racine ou une canalisation abîmée, pas un manque de produit."
      promesses={[
        ['24/7', 'Astreinte urgence', 'Intervention en quelques heures'],
        ['48h', 'Devis reçu', 'Sur les demandes courantes'],
        ['1', 'Interlocuteur unique', 'Du dégorgement à la reprise'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Nos interventions de débouchage à Rouen"
      servicesIntro="Du bouchon domestique au refoulement qui touche plusieurs lots, avec une règle constante : traiter la cause quand le bouchon revient, pas seulement le symptôme."
      services={[
        ['WC bouché', 'L’urgence la plus fréquente, surtout en logement loué. Nous dégorgeons puis nous vérifions l’évacuation en aval pour éviter la récidive.'],
        ['Évier, lavabo, douche', 'Accumulation de graisses, de cheveux et de calcaire dans le siphon ou l’évacuation. Le dégorgement s’accompagne d’un nettoyage du siphon.'],
        ['Odeurs d’égout', 'Souvent un siphon désamorcé ou une ventilation de chute défaillante — pas un bouchon. Le traiter comme un bouchon ne règle rien.'],
        ['Refoulement en pied de colonne', 'En immeuble, un refoulement au rez-de-chaussée signale un bouchon sur la chute commune. Cela relève de la copropriété.', '/maintenance-copropriete-rouen'],
        ['Bouchon qui revient', 'Contre-pente, racines, canalisation fissurée ou emboîtement décalé : nous recherchons la cause et chiffrons la reprise.', '/recherche-de-fuite-rouen'],
        ['Reprise d’évacuation', 'Remplacement d’un tronçon PVC ou fonte, reprise de pente, raccordements — puis remise en état des supports.'],
      ]}
      process={[
        ['1', 'Vous nous appelez', 'Décrivez ce qui refoule et depuis quand. Si plusieurs appareils sont touchés en même temps, c’est le signe d’un bouchon sur l’évacuation principale.'],
        ['2', 'Dégorgement', 'Nous rétablissons l’écoulement, en protégeant les abords — un dégorgement mal préparé salit plus qu’il ne répare.'],
        ['3', 'Vérification de la cause', 'Si le bouchon est récurrent, nous cherchons la raison structurelle plutôt que de repasser dans trois mois.'],
        ['4', 'Rapport & facture', 'Photos et facture détaillée sous 48h, transmissibles au propriétaire ou au syndic.'],
      ]}
      faqs={[
        { q: 'Intervenez-vous en urgence pour un WC bouché à Rouen ?', a: 'Oui, astreinte 24h/24 et 7j/7. Sur un logement où l’évacuation est totalement bloquée, nous intervenons en quelques heures. En attendant, n’utilisez plus l’appareil concerné et évitez les déboucheurs chimiques : ils abîment les joints et rendent l’intervention plus dangereuse pour l’intervenant.' },
        { q: 'Les produits déboucheurs du commerce, ça marche ?', a: 'Sur un ralentissement léger, parfois. Sur un vrai bouchon, rarement — et ils attaquent les joints et les canalisations anciennes. Ils rendent surtout l’intervention suivante plus délicate, puisque le produit stagne dans la canalisation. Mieux vaut appeler avant d’en verser.' },
        { q: 'Qui paie le débouchage : bailleur ou locataire ?', a: 'Le dégorgement des canalisations figure expressément dans la liste des réparations locatives du décret du 26 août 1987 : il est à la charge du locataire. En revanche, si le bouchon vient d’un défaut de la canalisation elle-même — contre-pente, fissure, racines — la reprise incombe au bailleur. C’est justement pour cette raison que nous documentons la cause.' },
        { q: 'Le refoulement touche plusieurs appartements, que faire ?', a: 'C’est le signe d’un bouchon sur la chute ou le collecteur commun, donc dans les parties communes : l’intervention relève de la copropriété et non des occupants. Prévenez le syndic, et faites couper l’usage des appareils dans les lots concernés en attendant.' },
        { q: 'Faites-vous l’hydrocurage des réseaux collectifs ?', a: 'Le curage lourd d’un collecteur d’immeuble demande un camion hydrocureur, que nous n’avons pas. Nous traitons les évacuations de logement et les chutes accessibles, et pour un curage complet nous coordonnons l’intervention avec une entreprise spécialisée plutôt que de bricoler.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Un bouchon qui revient cache souvent autre chose&nbsp;: voyez la{' '}
          <Link href="/recherche-de-fuite-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>recherche de fuite</Link> et notre{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>offre plomberie</Link> complète.
          En immeuble, l’intervention relève souvent de la{' '}
          <Link href="/maintenance-copropriete-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance de copropriété</Link>.
          Et pour savoir qui paie, consultez notre{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>guide bailleur / locataire</Link>.
        </>
      }
      ctaTitre="Une évacuation bouchée à Rouen ?"
      ctaSous="N’attendez pas que ça déborde. Astreinte 24h/24, devis gratuit."
    />
  )
}
