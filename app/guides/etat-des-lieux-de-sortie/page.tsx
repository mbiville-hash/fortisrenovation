import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/etat-des-lieux-de-sortie'
const TITRE = 'État des lieux de sortie : le réussir sans litige'

export const metadata: Metadata = {
  title: 'État des lieux de sortie — le réussir sans litige',
  description: 'Ce qu’impose la loi, ce qu’il faut noter pièce par pièce, comment chiffrer les reprises et éviter le litige sur le dépôt de garantie. Guide pour bailleurs et gestionnaires.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Le cadre légal, la méthode pièce par pièce, et comment transformer un constat en devis défendable.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuideEtatDesLieuxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'État des lieux de sortie : cadre légal (article 3-2 de la loi de 1989), méthode pièce par pièce et chiffrage des reprises.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'État des lieux de sortie', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Bailleurs & gestionnaires"
        title={TITRE}
        lead="C’est le rendez-vous de trente minutes qui décide de deux mois de discussion. Bien mené, il clôt le bail proprement. Bâclé, il vous prive de toute preuve. Voici le cadre légal, et la méthode que nous voyons fonctionner sur le terrain."
        datePublished="2026-08-04"
        readingTime="6 min"
        ctaTitle="Un constat à transformer en devis ?"
        ctaText="Nous chiffrons dès l’état des lieux de sortie, ligne à ligne et photos à l’appui — une pièce justificative recevable, et une date d’intervention calée sur votre relocation."
        sources={[
          { label: 'Article 3-2 de la loi n°89-462 du 6 juillet 1989 — état des lieux (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000031009767/' },
          { label: 'Décret n°2016-382 du 30 mars 2016 — modalités de l’état des lieux et vétusté (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032320564/' },
          { label: 'Décret n°87-712 du 26 août 1987 — réparations locatives (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000876202/' },
          { label: 'Restitution du dépôt de garantie — service-public.gouv.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31269' },
        ]}
        lastVerified="Références vérifiées sur Légifrance et service-public.gouv.fr le 4 août 2026. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>Ce que la loi impose</h2>
        <p>
          L’état des lieux est régi par l’<strong>article 3-2 de la loi du 6 juillet 1989</strong>, modifié par la loi
          ALUR de 2014. Il est <strong>obligatoire à l’entrée comme à la sortie</strong>, et il doit être établi de
          manière <strong>contradictoire et à l’amiable</strong> — c’est-à-dire en présence des deux parties, ou de
          personnes qu’elles ont mandatées.
        </p>
        <p>
          S’il ne peut pas être établi dans ces conditions — locataire absent, refus de signer, désaccord bloquant — il
          est réalisé par un <strong>commissaire de justice</strong>, à l’initiative de la partie la plus diligente.
          Les frais sont alors <strong>partagés par moitié</strong> entre bailleur et locataire.
        </p>
        <div className="guide-note">
          <p>
            Attention à un détail qui coûte cher&nbsp;: le commissaire de justice doit convoquer les parties
            <strong> au moins sept jours à l’avance</strong>, par lettre recommandée avec accusé de réception. Si ce
            délai n’est pas respecté, le partage des frais par moitié ne s’applique pas — ils restent à la charge de
            celui qui a demandé l’intervention.
          </p>
        </div>

        <h2>Sans état des lieux d’entrée, vous n’avez rien</h2>
        <p>
          C’est le point que nous voyons le plus souvent négligé. L’état des lieux de sortie n’a de valeur que
          <strong> comparé à celui d’entrée</strong>. Un état des lieux d’entrée qui dit «&nbsp;bon état&nbsp;» partout,
          sans photo ni détail, ne permet de démontrer aucune dégradation.
        </p>
        <p>
          Et la charge de la preuve pèse sur le bailleur&nbsp;: c’est à lui d’établir que l’état constaté à la sortie
          résulte du fait du locataire. Sans point de comparaison, cette démonstration est perdue d’avance.
        </p>

        <h2>La méthode, pièce par pièce</h2>
        <p>
          Prévoyez du temps et suivez toujours le même ordre. Ce qui compte n’est pas la longueur du document mais sa
          précision — un constat vague ne se défend pas.
        </p>
        <ol>
          <li>
            <strong>Photographiez systématiquement</strong>, même ce qui est en bon état. Les photos datées sont la
            pièce la plus solide d’un dossier. Prenez les vues d’ensemble et les détails.
          </li>
          <li>
            <strong>Décrivez, ne jugez pas.</strong> «&nbsp;Trace noire de 15 cm en bas du mur nord&nbsp;» vaut mieux
            que «&nbsp;mur sale&nbsp;». Le premier est vérifiable, le second se conteste.
          </li>
          <li>
            <strong>Relevez les compteurs</strong> — eau, électricité, gaz — et notez le nombre de clés rendues.
          </li>
          <li>
            <strong>Testez ce qui se teste.</strong> Robinets, chasse d’eau, prises, volets, VMC, chauffe-eau : ce qui
            n’est pas essayé ce jour-là ne pourra plus être reproché ensuite.
          </li>
          <li>
            <strong>Distinguez usure et dégradation</strong> dès la rédaction. Une moquette usée aux passages n’est pas
            une moquette tachée. Les deux peuvent coexister dans la même pièce.
          </li>
        </ol>

        <h2>Du constat au chiffrage</h2>
        <p>
          Un état des lieux ne suffit pas à retenir une somme sur le dépôt de garantie. Les retenues doivent être
          <strong> justifiées par des pièces</strong>&nbsp;: états des lieux comparatifs, photos, devis ou factures. Un
          montant annoncé de mémoire se conteste sans difficulté.
        </p>
        <p>
          Rappel des délais&nbsp;: le dépôt est restitué sous <strong>un mois</strong> si l’état des lieux de sortie est
          conforme à celui d’entrée, sous <strong>deux mois</strong> s’il ne l’est pas. Au-delà, le montant dû est majoré
          de 10&nbsp;% du loyer mensuel hors charges par mois de retard commencé.
        </p>
        <div className="guide-note">
          <p>
            C’est pour cette raison que nous établissons systématiquement un chiffrage <strong>ligne à ligne, daté et
            photographié</strong>, en séparant ce qui relève de la remise en état normale et ce qui relève d’une
            dégradation. Vous obtenez deux totaux&nbsp;: l’un pour votre budget d’entretien, l’autre défendable face au
            locataire.
          </p>
        </div>

        <h2>Les trois erreurs qui coûtent le plus</h2>
        <ol>
          <li>
            <strong>Réclamer du neuf sur du vieux.</strong> Facturer une remise en peinture complète sur une peinture
            de dix ans ne tiendra pas. La vétusté se déduit toujours — voyez notre guide sur la{' '}
            <Link href="/guides/grille-de-vetuste-location">grille de vétusté</Link>.
          </li>
          <li>
            <strong>Faire l’état des lieux après avoir rendu les clés.</strong> Il perd son caractère contradictoire, et
            le locataire pourra toujours objecter que les dégradations sont postérieures à son départ.
          </li>
          <li>
            <strong>Attendre la sortie pour faire chiffrer.</strong> Rien n’interdit de faire visiter et chiffrer
            pendant le préavis. Trois mois de préavis, c’est trois mois pour préparer la relocation — et autant de{' '}
            <Link href="/guides/cout-vacance-locative">vacance locative</Link> évitée.
          </li>
        </ol>

        <h2>En cas de désaccord</h2>
        <p>
          Avant le tribunal, la <strong>commission départementale de conciliation</strong> traite précisément ce type de
          litige. Elle est gratuite et se saisit par simple courrier. En Seine-Maritime, elle siège à la direction
          départementale des territoires et de la mer.
        </p>
        <p>
          Pour savoir ce qui vous revient et ce qui revient au locataire, poste par poste, notre guide{' '}
          <Link href="/guides/qui-paie-quoi-bailleur-locataire">qui paie quoi entre bailleur et locataire</Link>{' '}
          propose un outil pièce par pièce. Et si le logement doit être repris, voyez notre méthode de{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative à Rouen</Link>.
        </p>
      </GuideArticle>
    </>
  )
}
