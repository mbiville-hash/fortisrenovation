import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides & conseils — gestion locative & rénovation à Rouen',
  description: 'Guides pratiques pour bailleurs, gestionnaires et syndics : qui paie quoi, grille de vétusté, coût de la vacance locative. Et nos guides salle de bain. Sources officielles vérifiées.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/guides' },
}

type ArticleCard = { slug: string; category: string; title: string; excerpt: string; date: string }

const POUR_LES_PROS: ArticleCard[] = [
  {
    slug: '/guides/qui-paie-quoi-bailleur-locataire',
    category: 'Réparations locatives',
    title: 'Qui paie quoi entre bailleur et locataire ?',
    excerpt: 'La règle, les quatre exceptions qui protègent le locataire, et un outil pour trancher pièce par pièce : cliquez sur la pièce, puis sur ce qui est cassé.',
    date: '4 août 2026',
  },
  {
    slug: '/guides/grille-de-vetuste-location',
    category: 'Vétusté',
    title: 'Grille de vétusté : comment la lire et l’appliquer',
    excerpt: 'Durée de vie théorique, abattement annuel, part résiduelle. Un exemple chiffré, et le piège du décret de 2016 que presque tout le monde rate.',
    date: '4 août 2026',
  },
  {
    slug: '/guides/cout-vacance-locative',
    category: 'Vacance locative',
    title: 'Ce que coûte vraiment un logement vide',
    excerpt: 'Le calcul à la journée, les vrais postes de délai entre deux locataires, et quatre leviers pour relouer plus tôt. Simulateur inclus.',
    date: '4 août 2026',
  },
]

const POUR_LES_PARTICULIERS: ArticleCard[] = [
  {
    slug: '/guides/prix-renovation-salle-de-bain',
    category: 'Prix & budget',
    title: 'Combien coûte une rénovation de salle de bain à Rouen ?',
    excerpt: 'Des fourchettes claires, les postes de dépense et ce qui fait vraiment varier le prix de votre projet.',
    date: '25 juin 2026',
  },
  {
    slug: '/guides/douche-italienne-etancheite',
    category: 'Douche italienne',
    title: 'Douche à l’italienne : réussir l’étanchéité',
    excerpt: 'Le carrelage seul n’étanche pas. Ce qu’impose la norme (DTU 52.2) pour éviter le dégât des eaux.',
    date: '25 juin 2026',
  },
  {
    slug: '/guides/duree-renovation-salle-de-bain',
    category: 'Méthode',
    title: 'Combien de temps dure une rénovation de salle de bain ?',
    excerpt: 'Les étapes jour par jour, les temps de séchage et ce qui rallonge (ou raccourcit) un chantier.',
    date: '25 juin 2026',
  },
  {
    slug: '/guides/salle-de-bain-senior-maprimeadapt-rouen',
    category: 'Salle de bain senior',
    title: 'Salle de bain senior à Rouen : MaPrimeAdapt’ et les aides 2026',
    excerpt: 'Qui peut bénéficier de MaPrimeAdapt’, combien (50 ou 70 %, plafond 22 000 € HT), quels travaux et quelles démarches. Vérifié sur les sources officielles.',
    date: '25 juin 2026',
  },
]

function Groupe({ titre, sous, articles }: { titre: string; sous: string; articles: ArticleCard[] }) {
  return (
    <div className="guides-group">
      <h2 className="guides-group-t">{titre}</h2>
      <p className="guides-group-s">{sous}</p>
      <div className="guides-cards">
        {articles.map((a) => (
          <Link key={a.slug} href={a.slug} className="guide-card" data-reveal>
            <p className="guide-card-cat">{a.category}</p>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
            <p className="guide-card-meta">{a.date} &nbsp;·&nbsp; <span className="arrow">Lire le guide →</span></p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function GuidesIndexPage() {
  return (
    <>
      <style>{`
        .guides-hero { background: var(--dark); color: var(--white); padding: 96px 0 56px; }
        .guides-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
        .guides-hero h1 { font-family: 'Bodoni Moda', serif; font-size: clamp(32px, 4.4vw, 52px); color: var(--white); margin-bottom: 16px; line-height: 1.12; }
        .guides-hero p { font-size: 17px; color: rgba(255,255,255,0.7); max-width: 620px; line-height: 1.7; }
        .guides-list { background: var(--paper); padding: 64px 0 80px; }
        .guides-group + .guides-group { margin-top: 64px; padding-top: 56px; border-top: 1px solid rgba(154,124,69,0.28); }
        .guides-group-t { font-family: 'Bodoni Moda', serif; font-size: clamp(24px, 3vw, 34px); color: var(--ink); margin-bottom: 8px; }
        .guides-group-s { font-size: 15px; color: #4a463e; line-height: 1.65; max-width: 620px; margin-bottom: 28px; }
        .guides-cards { display: flex; flex-direction: column; gap: 16px; }
        .guide-card { display: block; border: 1px solid rgba(154,124,69,0.22); background: #fff; border-radius: 2px; padding: 30px 32px; transition: transform .4s cubic-bezier(.2,.7,.2,1), border-color .3s; max-width: 760px; }
        .guide-card:hover { transform: translateY(-4px); border-color: var(--gold); }
        .guide-card-cat { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 12px; }
        .guide-card h3 { font-family: 'Bodoni Moda', serif; font-size: 24px; color: var(--ink); line-height: 1.2; margin-bottom: 10px; }
        .guide-card p { font-size: 15px; color: #4a463e; line-height: 1.65; margin-bottom: 14px; }
        .guide-card-meta { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8a857a; }
        .guide-card-meta .arrow { color: var(--gold); font-weight: 700; }
      `}</style>

      <section className="guides-hero">
        <div className="container">
          <p className="guides-eyebrow">Guides &amp; conseils</p>
          <h1>Décider vite, et sur des bases solides.</h1>
          <p>
            Des guides pratiques pour les bailleurs, gestionnaires et syndics — et pour les particuliers qui
            préparent un projet. Les informations sensibles (droit locatif, aides, normes) sont vérifiées sur les
            sources officielles, qui sont citées à la fin de chaque guide.
          </p>
        </div>
      </section>

      <section className="guides-list">
        <div className="container">
          <Groupe
            titre="Bailleurs, gestionnaires & syndics"
            sous="Ce qui revient au bailleur, ce qui revient au locataire, et ce que coûte le temps perdu entre deux baux."
            articles={POUR_LES_PROS}
          />
          <Groupe
            titre="Particuliers · salle de bain"
            sous="Prix, durée, étanchéité et aides à l’adaptation : de quoi préparer votre projet avant de nous appeler."
            articles={POUR_LES_PARTICULIERS}
          />
        </div>
      </section>
    </>
  )
}
