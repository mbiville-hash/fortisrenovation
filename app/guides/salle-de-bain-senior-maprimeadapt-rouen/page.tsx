import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

const SLUG = '/guides/salle-de-bain-senior-maprimeadapt-rouen'

export const metadata: Metadata = {
  title: 'Salle de bain senior Rouen — MaPrimeAdapt’ & aides 2026',
  description: 'Salle de bain senior à Rouen : conditions MaPrimeAdapt’, montants (50/70 %, plafond 22 000 € HT), travaux éligibles et démarches. Sources officielles.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: 'Salle de bain senior à Rouen : MaPrimeAdapt’ et les aides 2026',
    description: 'Qui y a droit, combien, quels travaux et quelles démarches — guide vérifié sur les sources officielles.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function GuideMaPrimeAdaptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: 'Salle de bain senior à Rouen : MaPrimeAdapt’ et les aides 2026',
        description: 'Conditions, montants et démarches de MaPrimeAdapt’ pour adapter sa salle de bain à Rouen.',
        slug: SLUG,
        datePublished: '2026-06-25',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Salle de bain senior & MaPrimeAdapt’', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Salle de bain senior"
        title="Salle de bain senior à Rouen : MaPrimeAdapt’ et les aides 2026"
        lead="Adapter sa salle de bain pour vieillir chez soi en sécurité, c’est possible — et aidé. Depuis 2024, MaPrimeAdapt’ finance une large part des travaux. Voici, sources officielles à l’appui, qui y a droit, combien, et comment, à Rouen et dans la métropole."
        datePublished="2026-06-25"
        readingTime="6 min"
        ctaTitle="Un projet de salle de bain adaptée à Rouen ?"
        ctaText="Nous réalisons votre douche de plain-pied, vos barres d’appui et votre WC adapté, avec plan 3D et devis clair. Parlons-en."
        sources={[
          { label: 'MaPrimeAdapt’ — economie.gouv.fr (mis à jour le 21/05/2026)', url: 'https://www.economie.gouv.fr/particuliers/gerer-mon-argent/beneficier-daides-et-de-reductions-dimpots/maprimeadapt-tout-savoir-sur-cette-aide-ladaptation-de-votre-logement' },
          { label: 'MaPrimeAdapt’ — France Rénov’ (france-renov.gouv.fr)', url: 'https://france-renov.gouv.fr/aides/maprimeadapt' },
          { label: 'Barème de ressources — France Rénov’', url: 'https://france-renov.gouv.fr/bareme' },
          { label: 'MaPrimeAdapt’ — Service-Public.fr (fiche F37501)', url: 'https://www.service-public.fr/particuliers/vosdroits/F37501' },
          { label: 'MaPrimeAdapt’, le mode d’emploi — Anah', url: 'https://www.anah.gouv.fr/anatheque/maprimeadapt-mode-emploi' },
        ]}
        lastVerified="Informations vérifiées en juin 2026 sur les sites officiels (economie.gouv.fr, France Rénov’, Anah). Les conditions et montants peuvent évoluer : vérifiez votre situation sur france-renov.gouv.fr."
      >
        <h2>MaPrimeAdapt’, c’est quoi ?</h2>
        <p>MaPrimeAdapt’ est l’aide unique de l’État pour adapter son logement à la perte d’autonomie. Depuis <strong>janvier 2024</strong>, elle remplace trois anciens dispositifs : « Habiter facile » de l’Anah, le crédit d’impôt autonomie et les aides de la Cnav. Son objectif : permettre de <strong>rester vivre chez soi</strong> le plus longtemps possible, en sécurité.</p>

        <h2>Qui peut en bénéficier ?</h2>
        <p>Vous pouvez prétendre à l’aide si vous êtes dans l’une de ces situations :</p>
        <ul>
          <li>en situation de handicap avec un taux d’incapacité d’au moins 50 %, ou bénéficiaire de la PCH — <strong>sans condition d’âge</strong> ;</li>
          <li>âgé de <strong>60 à 69 ans</strong>, en perte d’autonomie précoce (évaluation GIR de 1 à 6) ;</li>
          <li>âgé de <strong>70 ans et plus</strong>, sans condition de GIR.</li>
        </ul>
        <p>Côté logement, il faut être <strong>propriétaire occupant</strong> de sa résidence principale ou <strong>locataire du parc privé</strong> (en informant son bailleur), et justifier de ressources « modestes » ou « très modestes » selon le barème de France Rénov’.</p>

        <h2>Combien ça finance ?</h2>
        <p>MaPrimeAdapt’ prend en charge <strong>50 % ou 70 % du montant des travaux</strong> selon vos revenus, dans la limite d’un plafond de <strong>22 000 € HT</strong>. Elle est <strong>cumulable</strong> avec d’autres aides : PCH, AAH, Apa, aides locales, et même MaPrimeRénov’ pour la rénovation énergétique. Le montant exact dépend d’une grille de ressources (composition du foyer, lieu d’habitation, revenu fiscal de référence).</p>

        <h2>Quels travaux dans la salle de bain ?</h2>
        <p>Ce sont précisément les aménagements qui sécurisent la pièce d’eau :</p>
        <ul>
          <li>remplacement de la baignoire par une <strong>douche de plain-pied</strong> (à l’italienne), antidérapante ;</li>
          <li><strong>barres d’appui</strong> et poignées de maintien ;</li>
          <li><strong>WC surélevé</strong> et accessoires PMR ;</li>
          <li>sol antidérapant et éclairage adapté ;</li>
          <li>élargissement de la porte si nécessaire.</li>
        </ul>
        <p>D’autres travaux du logement sont aussi éligibles (monte-escalier, rampe d’accès, éclairage à détection, etc.).</p>

        <h2>Comment l’obtenir, étape par étape</h2>
        <ol>
          <li>Vérifiez votre éligibilité, puis prenez rendez-vous avec un <strong>conseiller France Rénov’</strong> ou un guichet autonomie près de chez vous.</li>
          <li>Vous êtes mis en relation avec un <strong>AMO</strong> (assistant à maîtrise d’ouvrage) habilité autonomie : il réalise le diagnostic, monte votre dossier et établit le plan de financement.</li>
          <li>La demande d’aide est déposée auprès de l’<strong>Anah — avant de lancer les travaux</strong>.</li>
          <li>Les travaux sont réalisés par l’artisan de votre choix (labellisé ou non).</li>
          <li>La subvention est versée une fois les travaux terminés.</li>
        </ol>

        <div className="guide-note">
          <p><strong>Vigilance démarchage.</strong> Depuis la loi du 30 juin 2025 contre les fraudes aux aides publiques, le démarchage non sollicité (téléphone, SMS, e-mail, réseaux sociaux) pour ces travaux est <strong>interdit</strong>. Une demande MaPrimeAdapt’ passe toujours par France Rénov’ et un AMO — jamais par un démarcheur spontané.</p>
        </div>

        <h2>Notre rôle, à Rouen</h2>
        <p>Fortis Rénovation réalise l’aménagement de votre salle de bain à Rouen et dans la métropole : douche de plain-pied, sol antidérapant, barres d’appui, WC adapté — avec <strong>plan 3D</strong>, devis clair et chantier propre. Sur la partie travaux, nous intervenons en coordination avec votre AMO. <Link href="/salle-de-bain-senior">Découvrez notre offre salle de bain senior →</Link></p>
      </GuideArticle>
    </>
  )
}
