import type { Metadata } from 'next'
import Link from 'next/link'
import { type Guide, GUIDES, guidesPro, guidesParticulier } from '@/lib/guides'
import { breadcrumbSchema } from '@/lib/schema'

const BASE = 'https://www.fortisrenovation.fr'

export const metadata: Metadata = {
  title: 'Guides & conseils — gestion locative & rénovation à Rouen',
  description: 'Guides pour bailleurs, gestionnaires et syndics : qui paie quoi, grille de vétusté, coût de la vacance locative. Sources officielles vérifiées.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/guides' },
}

function Groupe({ titre, sous, articles }: { titre: string; sous: string; articles: Guide[] }) {
  return (
    <div className="guides-group">
      <h2 className="guides-group-t">{titre}</h2>
      <p className="guides-group-s">{sous}</p>
      <div className="guides-cards">
        {articles.map((a) => (
          <Link key={a.slug} href={a.slug} className="guide-card" data-reveal>
            <p className="guide-card-cat">{a.categorie}</p>
            <h3>{a.titre}</h3>
            <p>{a.extrait}</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: BASE },
        { name: 'Guides & conseils', url: `${BASE}/guides` },
      ])) }} />
      {/* Liste des guides : aide Google à comprendre que cette page est un index. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Guides & conseils — Fortis Rénovation',
        description: 'Guides pour bailleurs, gestionnaires et syndics, et pour les particuliers qui préparent un projet.',
        url: `${BASE}/guides`,
        inLanguage: 'fr-FR',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: GUIDES.map((g, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: g.titre,
            url: `${BASE}${g.slug}`,
          })),
        },
      }) }} />

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
        .guide-card-meta { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-faint); }
        .guide-card-meta .arrow { color: var(--gold-deep); font-weight: 700; }
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
            articles={guidesPro}
          />
          <Groupe
            titre="Particuliers · salle de bain"
            sous="Prix, durée, étanchéité et aides à l’adaptation : de quoi préparer votre projet avant de nous appeler."
            articles={guidesParticulier}
          />
        </div>
      </section>
    </>
  )
}
