import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import SimulateurVacance from '@/components/SimulateurVacance'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

const SLUG = '/guides/cout-vacance-locative'
const TITRE = 'Vacance locative : ce que coûte vraiment un logement vide'

export const metadata: Metadata = {
  title: 'Vacance locative — ce que coûte un logement vide',
  description: 'Calculez le coût d’un logement vide entre deux locataires, comprenez ce qui allonge vraiment le délai de relocation et comment le raccourcir. Simulateur inclus.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le calcul, les vrais postes de délai, et les leviers pour relouer plus tôt.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function GuideVacanceLocativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Coût de la vacance locative entre deux locataires : calcul, postes de délai et leviers pour relouer plus tôt.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Coût de la vacance locative', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Bailleurs & gestionnaires"
        title={TITRE}
        lead="On compare les devis à quelques centaines d’euros près, et on laisse filer trois semaines de loyer sans les compter. Pourtant le calcul est simple, et il change souvent la décision. Voici de quoi le faire en dix secondes."
        datePublished="2026-08-04"
        readingTime="5 min"
        ctaTitle="Un logement à relouer rapidement ?"
        ctaText="Nous chiffrons sous 48h et nous calons l’intervention sur votre date de relocation. Envoyez photos et adresse, nous revenons avec un devis et une date."
        sources={[
          { label: 'Décret n°87-712 du 26 août 1987 — réparations locatives (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000876202/' },
          { label: 'Restitution du dépôt de garantie et délais — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31269' },
        ]}
        lastVerified="Références vérifiées le 4 août 2026. Le simulateur donne un ordre de grandeur, pas un chiffre comptable."
      >
        <h2>Le calcul que personne ne fait</h2>
        <p>
          Un logement vide ne coûte pas seulement «&nbsp;un loyer&nbsp;». Il coûte un loyer <em>par mois entamé</em>,
          auquel s’ajoutent les charges non récupérables et la taxe foncière qui, elles, continuent de courir.
        </p>
        <p>
          Le réflexe utile&nbsp;: ramener le loyer à la journée. À 650&nbsp;€ par mois, chaque journée de vacance coûte
          un peu plus de 21&nbsp;€. Trois semaines de retard sur un chantier, c’est environ 450&nbsp;€ — souvent plus
          que l’écart entre deux devis.
        </p>

        <SimulateurVacance />

        <h2>Où part réellement le temps</h2>
        <p>
          Dans les remises en état que nous menons à Rouen, le chantier lui-même est rarement le poste le plus long.
          Ce qui s’étire, c’est ce qui l’entoure&nbsp;:
        </p>
        <ul>
          <li><strong>Le délai pour obtenir un devis.</strong> C’est le premier trou noir : une semaine à dix jours d’attente est courant, et il faut souvent relancer.</li>
          <li><strong>Le temps de décision du propriétaire.</strong> Un devis illisible ou sans photo se fait rarement valider du premier coup.</li>
          <li><strong>La coordination entre corps d’état.</strong> Trois artisans à faire venir dans le bon ordre, c’est trois plannings à aligner — et un seul retard qui décale tout.</li>
          <li><strong>Le chantier.</strong> Souvent le poste le plus court, et le seul que tout le monde regarde.</li>
          <li><strong>Les temps de séchage.</strong> Incompressibles : ils se planifient, ils ne se négocient pas.</li>
        </ul>
        <div className="guide-note">
          <p>
            C’est pour cette raison que nous nous engageons sur un <strong>chiffrage sous 48h</strong>. Ce n’est pas un
            argument commercial gratuit&nbsp;: c’est le poste sur lequel on gagne le plus de jours, et c’est le seul
            qui ne coûte rien à raccourcir.
          </p>
        </div>

        <h2>Quatre leviers pour relouer plus tôt</h2>
        <ol>
          <li>
            <strong>Faites chiffrer avant la sortie du locataire.</strong> Rien n’oblige à attendre la remise des clés
            pour faire visiter et chiffrer. Un préavis de trois mois, c’est trois mois pour préparer.
          </li>
          <li>
            <strong>Regroupez les corps d’état.</strong> Peinture, sol, plomberie et électricité menés par le même
            interlocuteur s’enchaînent au lieu de s’attendre. C’est là que se gagnent les jours.
          </li>
          <li>
            <strong>Décidez sur un devis lisible.</strong> Un chiffrage ligne à ligne avec photos se valide en une
            lecture. Un devis global à 4&nbsp;800&nbsp;€ sans détail génère trois allers-retours.
          </li>
          <li>
            <strong>Ne surdimensionnez pas les travaux.</strong> Tout ne doit pas être refait. Ce qui compte, c’est ce
            qui se voit à la visite et ce qui bloque la relocation — le reste peut attendre la rotation suivante.
          </li>
        </ol>

        <h2>Un devis rapide vaut souvent mieux qu’un devis moins cher</h2>
        <p>
          C’est contre-intuitif, mais l’arithmétique est têtue. Sur un logement à 650&nbsp;€, un devis obtenu deux
          semaines plus tôt vous fait gagner environ 300&nbsp;€ de loyer. Il faudrait que le devis concurrent soit
          moins cher de plus de 300&nbsp;€ pour que l’attente soit rentable — et encore, à condition qu’il soit
          disponible tout de suite.
        </p>
        <p>
          Cela ne veut pas dire qu’il faut prendre le premier venu. Cela veut dire que <strong>le délai est un poste
          de coût</strong>, au même titre que la main-d’œuvre, et qu’il mérite d’apparaître dans la comparaison.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Avant de chiffrer, encore faut-il savoir ce qui vous revient et ce qui revient au locataire&nbsp;: c’est
          l’objet de notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et locataire</Link>, avec
          un outil pièce par pièce. Et pour déduire correctement l’usure du temps, voyez la{' '}
          <Link href="/guides/grille-de-vetuste-location">grille de vétusté</Link>.
        </p>
        <p>
          Notre méthode de remise en état entre deux locataires est détaillée sur la page{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative à Rouen</Link>.
        </p>
      </GuideArticle>
    </>
  )
}
