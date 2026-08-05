import type { Metadata } from 'next'
import Link from 'next/link'
import { type Guide, GUIDES, guidesPro, guidesParticulier } from '@/lib/guides'

/** Les guides qui embarquent un outil, dans l'ordre de lib/guides.ts. */
const AVEC_OUTIL = GUIDES.filter((g) => g.outil)
import { breadcrumbSchema } from '@/lib/schema'

const BASE = 'https://www.fortisrenovation.fr'

export const metadata: Metadata = {
  title: 'Guides & outils — gestion locative & rénovation à Rouen',
  description: 'Guides et outils interactifs pour bailleurs, gestionnaires et syndics : qui paie quoi, vétusté, décence, coût de la vacance. Sources officielles vérifiées.',
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
            <p className="guide-card-cat">
              {a.categorie}
              {a.outil && <span className="guide-card-badge">Outil interactif</span>}
            </p>
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
        .guide-card-badge { display: inline-block; margin-left: 10px; padding: 3px 9px; border: 1px solid rgba(184,151,90,0.5); border-radius: 40px; font-size: 9.5px; letter-spacing: 0.1em; color: var(--gold-deep); }

        /* Les outils : chaque guide pro en embarque un, et rien ne le laissait
           deviner depuis cette page. */
        .outils { background: #fff; padding: 56px 0 60px; border-bottom: 1px solid rgba(154,124,69,0.2); }
        .outils-t { font-family: 'Bodoni Moda', serif; font-size: clamp(22px, 2.8vw, 30px); color: var(--ink); margin-bottom: 8px; }
        .outils-s { font-size: 15px; color: #4a463e; line-height: 1.65; max-width: 640px; margin-bottom: 28px; }
        .outils-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 268px), 1fr)); gap: 12px; }
        .outil-card { display: block; border: 1px solid rgba(154,124,69,0.24); border-radius: 2px; padding: 18px 20px; background: var(--paper); transition: transform .3s cubic-bezier(.2,.7,.2,1), border-color .3s; }
        .outil-card:hover { transform: translateY(-3px); border-color: var(--gold); }
        .outil-nom { font-size: 14.5px; font-weight: 600; color: var(--ink); line-height: 1.35; margin-bottom: 7px; }
        .outil-fait { font-size: 13px; color: #4a463e; line-height: 1.55; margin: 0; }
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

      <section className="outils">
        <div className="container" data-reveal>
          <h2 className="outils-t">Essayez directement</h2>
          <p className="outils-s">
            {AVEC_OUTIL.length} outils interactifs, un par guide. Vous répondez à deux ou trois
            questions, ou vous déplacez des curseurs, et vous repartez avec une réponse chiffrée —
            sans nous appeler.
          </p>
          <div className="outils-grid">
            {AVEC_OUTIL.map((g) => (
              <Link key={g.slug} href={g.slug} className="outil-card">
                <p className="outil-nom">{g.outil!.nom}</p>
                <p className="outil-fait">{g.outil!.fait}</p>
              </Link>
            ))}
          </div>
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
