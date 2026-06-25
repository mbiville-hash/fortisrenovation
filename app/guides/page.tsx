import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides & conseils — salle de bain & rénovation à Rouen',
  description: 'Nos guides pratiques sur la rénovation de salle de bain à Rouen : aides MaPrimeAdapt’, prix, douche senior. Des infos claires, vérifiées sur les sources officielles.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/guides' },
}

type ArticleCard = { slug: string; category: string; title: string; excerpt: string; date: string }

const ARTICLES: ArticleCard[] = [
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

export default function GuidesIndexPage() {
  return (
    <>
      <style>{`
        .guides-hero { background: var(--dark); color: var(--white); padding: 96px 0 56px; }
        .guides-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
        .guides-hero h1 { font-family: 'Bodoni Moda', serif; font-size: clamp(32px, 4.4vw, 52px); color: var(--white); margin-bottom: 16px; line-height: 1.12; }
        .guides-hero p { font-size: 17px; color: rgba(255,255,255,0.7); max-width: 620px; line-height: 1.7; }
        .guides-list { background: var(--paper); padding: 64px 0 80px; }
        .guide-card { display: block; border: 1px solid rgba(154,124,69,0.22); background: #fff; border-radius: 2px; padding: 30px 32px; transition: transform .4s cubic-bezier(.2,.7,.2,1), border-color .3s; max-width: 760px; }
        .guide-card:hover { transform: translateY(-4px); border-color: var(--gold); }
        .guide-card-cat { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #9a7c45; margin-bottom: 12px; }
        .guide-card h2 { font-family: 'Bodoni Moda', serif; font-size: 24px; color: var(--ink); line-height: 1.2; margin-bottom: 10px; }
        .guide-card p { font-size: 15px; color: #4a463e; line-height: 1.65; margin-bottom: 14px; }
        .guide-card-meta { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #8a857a; }
        .guide-card-meta .arrow { color: var(--gold); font-weight: 700; }
      `}</style>

      <section className="guides-hero">
        <div className="container">
          <p className="guides-eyebrow">Guides &amp; conseils</p>
          <h1>Comprendre votre projet, avant de vous lancer.</h1>
          <p>Des guides clairs sur la rénovation et l’adaptation de salle de bain à Rouen — aides, prix, méthode. Les informations sensibles (aides, normes) sont vérifiées sur les sources officielles.</p>
        </div>
      </section>

      <section className="guides-list">
        <div className="container">
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={a.slug} className="guide-card" data-reveal>
              <p className="guide-card-cat">{a.category}</p>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <p className="guide-card-meta">{a.date} &nbsp;·&nbsp; <span className="arrow">Lire le guide →</span></p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
