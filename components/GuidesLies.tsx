import Link from 'next/link'
import type { Guide } from '@/lib/guides'

/**
 * Bloc « à lire aussi » posé en fin de page pro, métier et commune.
 *
 * Objectif : que chaque guide reçoive des liens entrants depuis les pages qui
 * traitent le même sujet, avec une ancre explicite. Un guide lié une seule fois
 * ne reçoit presque rien de l'autorité du site.
 */
export default function GuidesLies({
  guides,
  titre = 'À lire aussi',
  intro,
  fond = 'paper',
}: {
  guides: Guide[]
  titre?: string
  intro?: string
  fond?: 'paper' | 'blanc'
}) {
  if (guides.length === 0) return null

  return (
    <>
      <style>{`
        .gl { padding: 72px 0; }
        .gl--paper { background: var(--paper); }
        .gl--blanc { background: #fff; }
        .gl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .gl-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .gl-h { font-family: 'Bodoni Moda', serif; font-size: clamp(24px, 2.8vw, 34px); color: var(--ink); margin-bottom: 12px; }
        .gl-intro { font-size: 15px; line-height: 1.7; color: var(--ink-soft); max-width: 620px; margin-bottom: 32px; }
        .gl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; }
        .gl-card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(184,151,90,0.24); border-radius: 2px; padding: 26px 24px; transition: transform .4s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .4s; }
        .gl--blanc .gl-card { background: var(--paper); }
        .gl-card:hover { transform: translateY(-3px); border-color: var(--gold); box-shadow: 0 14px 34px rgba(26,26,24,0.08); }
        .gl-cat { font-size: 10.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 10px; }
        .gl-t { font-family: 'Bodoni Moda', serif; font-size: 19px; line-height: 1.25; color: var(--ink); margin-bottom: 10px; }
        .gl-d { font-size: 13.5px; line-height: 1.65; color: var(--ink-soft); margin-bottom: 18px; flex: 1; }
        .gl-lire { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-deep); display: inline-flex; align-items: center; gap: 7px; }
        .gl-lire span { transition: transform .3s cubic-bezier(.16,1,.3,1); }
        .gl-card:hover .gl-lire span { transform: translateX(5px); }
      `}</style>

      <section className={`gl gl--${fond}`}>
        <div className="container" data-reveal>
          <p className="gl-eye">Guides &amp; conseils</p>
          <h2 className="gl-h">{titre}</h2>
          {intro && <p className="gl-intro">{intro}</p>}
          <div className="gl-grid">
            {guides.map((g) => (
              <Link key={g.slug} href={g.slug} className="gl-card">
                <p className="gl-cat">{g.categorie}</p>
                <p className="gl-t">{g.titre}</p>
                <p className="gl-d">{g.court}</p>
                <span className="gl-lire">Lire le guide <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
