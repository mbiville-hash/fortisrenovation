import type { ReactNode } from 'react'

const G = { fill: 'none', stroke: 'var(--gold)', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const items: { t: string; d: string; svg: ReactNode }[] = [
  {
    t: 'Un interlocuteur unique',
    d: 'Vous déléguez l’exécution, vous gardez la main : nous coordonnons tous les corps d’état pendant que vous restez sur votre cœur de métier, la gestion.',
    svg: (
      <svg viewBox="0 0 64 56" aria-hidden="true"><g {...G}>
        <circle cx="10" cy="12" r="3" /><circle cx="10" cy="28" r="3" /><circle cx="10" cy="44" r="3" />
        <path d="M14 12 C31 12 37 25 48 28" /><path d="M14 28 H47" /><path d="M14 44 C31 44 37 31 48 28" />
        <circle className="bp-hub" cx="52" cy="28" r="5" />
      </g></svg>
    ),
  },
  {
    t: 'Vacance locative maîtrisée',
    d: 'Entre deux baux, nous remettons le lot en état rapidement — sols, peinture, sanitaires. Le bien repart à la location sans vacance inutile.',
    svg: (
      <svg viewBox="0 0 64 56" aria-hidden="true"><g {...G}>
        <circle cx="18" cy="28" r="9" /><circle cx="18" cy="28" r="3.4" />
        <line x1="27" y1="28" x2="50" y2="28" /><line x1="44" y1="28" x2="44" y2="35" /><line x1="49" y1="28" x2="49" y2="33" />
      </g></svg>
    ),
  },
  {
    t: 'Une traçabilité prête pour l’AG',
    d: 'Devis, facture et rapport photo à chaque passage : nous vous remettons des pièces justificatives nettes pour vos assemblées générales et la reddition de charges.',
    svg: (
      <svg viewBox="0 0 64 56" aria-hidden="true"><g {...G}>
        <path d="M20 8 h16 l9 9 v31 h-25 z" /><path d="M36 8 v9 h9" />
        <line x1="25" y1="28" x2="40" y2="28" /><line x1="25" y1="35" x2="40" y2="35" /><line x1="25" y1="42" x2="34" y2="42" />
      </g></svg>
    ),
  },
  {
    t: 'Vos obligations tenues',
    d: 'Nous rappelons, planifions et rendons compte. Réponse sous 48h, astreinte 24/7 — vos engagements envers les locataires tenus, sans courir après les artisans.',
    svg: (
      <svg viewBox="0 0 64 56" aria-hidden="true"><g {...G}>
        <rect x="16" y="9" width="20" height="40" rx="3" /><line x1="22" y1="43" x2="30" y2="43" />
        <circle cx="44" cy="18" r="9" fill="var(--paper)" /><path d="M40 18 l3 3 l6 -7" />
      </g></svg>
    ),
  },
]

export default function BeneficesPro() {
  return (
    <section style={{ background: 'white', padding: '80px 0' }}>
      <style>{`
        .bp-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #9a7c45; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .bp-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .bp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); gap: 18px; }
        .bp-card { background: var(--paper); border: 1px solid rgba(26,26,24,0.1); padding: 28px; }
        .bp-ic { width: 46px; height: 42px; margin-bottom: 16px; }
        .bp-ic svg { width: 46px; height: 42px; display: block; overflow: visible; }
        .bp-hub { transform-box: fill-box; transform-origin: center; animation: bpHub 1.9s ease-in-out infinite; }
        @keyframes bpHub { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18); } }
        @media (prefers-reduced-motion: reduce) { .bp-hub { animation: none; } }
      `}</style>
      <div className="container">
        <p className="bp-eye">Pourquoi Fortis</p>
        <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 44, color: 'var(--ink)' }}>
          Ce que vous y gagnez.
        </h2>
        <div className="bp-grid">
          {items.map(({ t, d, svg }, i) => (
            <div key={t} className="bp-card" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="bp-ic">{svg}</div>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 19, marginBottom: 10, color: 'var(--ink)', lineHeight: 1.25 }}>{t}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
