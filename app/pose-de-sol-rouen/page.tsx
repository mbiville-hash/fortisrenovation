import type { Metadata } from 'next'
import Link from 'next/link'
import MetierPage, { COMMUNES } from '@/components/MetierPage'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/pose-de-sol-rouen'
const TITRE = 'Pose de sol à Rouen — parquet, PVC & carrelage'
const DESC =
  'Pose de sol à Rouen : parquet flottant, stratifié, PVC, lino et carrelage. Dépose de l’ancien sol, ragréage, plinthes et finitions. Devis gratuit sous 48h.'

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

export default function PoseDeSolRouenPage() {
  return (
    <MetierPage
      slug={SLUG}
      nom="Pose de sol Rouen"
      schemaDescription="Pose et remplacement de revêtements de sol à Rouen : parquet flottant, stratifié, PVC, lino et carrelage. Dépose, ragréage, plinthes et finitions."
      eyebrow="Revêtements de sol · Rouen & métropole"
      titre={['Pose de sol à Rouen —', 'parquet, stratifié, PVC, carrelage.']}
      intro="Un sol fatigué est ce qui se voit le plus lors d’une visite, et souvent ce qui fait baisser un loyer. Nous déposons l’ancien revêtement, nous rattrapons le support et nous posons le nouveau sol, à Rouen et dans la métropole."
      promesses={[
        ['48h', 'Devis reçu', 'Réponse garantie'],
        ['1', 'Interlocuteur unique', 'Du constat aux clés'],
        ['Photo', 'Rapport systématique', 'Avant, pendant, après'],
        ['5/5', 'Sur Google', '30 avis vérifiés'],
      ]}
      servicesTitre="Nos poses de sol à Rouen"
      servicesIntro="Le résultat tient d’abord au support : un sol posé sur un fond irrégulier bouge, grince et s’ouvre aux joints. Nous préparons avant de poser, et nous le chiffrons clairement."
      services={[
        ['Parquet flottant & stratifié', 'Pose flottante sur sous-couche, coupes soignées aux passages de porte, seuils et plinthes assortis.'],
        ['Sol PVC & lino', 'En lés ou en dalles, y compris les références classées usage locatif qui encaissent les rotations de locataires.'],
        ['Carrelage & faïence', 'Pose au sol comme en mural, calepinage réfléchi, joints réguliers et coupes propres en périphérie.'],
        ['Dépose & ragréage', 'Retrait de l’ancien revêtement, évacuation des gravats et ragréage du support quand il est irrégulier.'],
        ['Plinthes, seuils et finitions', 'Plinthes, barres de seuil et jonctions entre pièces : ce sont ces détails qui font qu’un sol paraît posé ou bricolé.'],
        ['Reprise de sol après dégât des eaux', 'Sol gonflé ou décollé après une infiltration : assèchement vérifié, dépose, reprise du support et pose du nouveau revêtement.', '/degat-des-eaux-rouen'],
      ]}
      process={[
        ['1', 'Constat sur place', 'Nous mesurons les surfaces, nous vérifions la planéité du support et nous photographions l’existant.'],
        ['2', 'Devis sous 48h', 'Fournitures et pose détaillées pièce par pièce, avec le ragréage chiffré à part s’il est nécessaire.'],
        ['3', 'Dépose & préparation', 'Retrait de l’ancien sol, évacuation, ragréage si besoin, puis temps de séchage respecté.'],
        ['4', 'Pose & finitions', 'Pose, plinthes et seuils, nettoyage de fin de chantier et rapport photo sous 48h.'],
      ]}
      faqs={[
        { q: 'Quel sol choisir pour un logement mis en location ?', a: 'Un sol PVC ou un stratifié à classement d’usage adapté encaisse bien les rotations de locataires, se répare par zone et se pose vite. Nous vous orientons selon la pièce, le budget et le niveau de finition attendu — sans vous vendre plus cher que nécessaire.' },
        { q: 'Déposez-vous l’ancien revêtement et évacuez-vous les gravats ?', a: 'Oui, dépose et évacuation sont comprises et apparaissent en clair sur le devis. Vous n’avez pas à gérer la déchetterie.' },
        { q: 'Faut-il un ragréage ?', a: 'Seulement si le support est irrégulier — nous le vérifions lors du constat. Quand il est nécessaire, il est chiffré à part pour que vous voyiez exactement ce que ça représente. Poser sur un fond bosselé fait grincer et ouvrir les joints en quelques mois.' },
        { q: 'Intervenez-vous entre deux locataires, dans un délai serré ?', a: 'Oui. Nous chiffrons dès l’état des lieux de sortie et nous calons l’intervention sur votre date de relocation, souvent en même temps que la peinture pour ne pas immobiliser le logement deux fois.' },
        { q: 'Posez-vous du parquet massif ou du parquet collé ?', a: 'Nous travaillons la pose flottante (parquet contrecollé, stratifié) et le carrelage. Pour un parquet massif cloué ou une rénovation de parquet ancien par ponçage et vitrification, nous préférons vous orienter vers un parqueteur spécialisé plutôt que de mal faire.' },
        { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen, Déville-lès-Rouen, Maromme, les Quevilly, Saint-Étienne-du-Rouvray et Oissel.' },
      ]}
      communes={COMMUNES}
      maillage={
        <>
          Le sol se refait souvent avec la{' '}
          <Link href="/peintre-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>peinture</Link>, dans le cadre d’une{' '}
          <Link href="/remise-en-etat-locative-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état locative</Link>.
          Nous couvrons aussi la{' '}
          <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>plomberie</Link> et l’{' '}
          <Link href="/electricien-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>électricité</Link>, réunies dans notre{' '}
          <Link href="/maintenance-immobiliere-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière</Link>.
        </>
      }
      ctaTitre="Un sol à refaire à Rouen ?"
      ctaSous="Envoyez photos et surfaces : nous revenons avec un chiffrage et une date sous 48h."
    />
  )
}
