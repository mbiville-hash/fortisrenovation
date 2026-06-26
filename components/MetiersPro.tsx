import type { ReactNode } from 'react'

const G = { fill: 'none', stroke: 'var(--gold)', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const metiers: { t: string; d: string; svg: ReactNode }[] = [
  { t: 'Plomberie', d: 'Fuites, sanitaires, réseaux, chauffe-eau.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><path {...G} className="mp-drip" d="M32 12 C32 12 19 29 19 40 a13 13 0 0 0 26 0 C45 29 32 12 32 12 Z" /></svg> },
  { t: 'Électricité', d: 'Dépannage, tableau, mise aux normes.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><path {...G} className="mp-flick" d="M35 12 L21 35 H31 L27 52 L43 27 H33 Z" /></svg> },
  { t: 'Menuiserie', d: 'Portes, fenêtres, serrures, agencement.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><rect x="22" y="12" width="20" height="40" rx="1" /><circle cx="38" cy="33" r="1.8" /></g></svg> },
  { t: 'Peinture', d: 'Rafraîchissement, parties communes, logements.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G} className="mp-roll"><rect x="16" y="14" width="30" height="11" rx="2" /><path d="M31 25 v6 h-6 v16" /></g></svg> },
  { t: 'Carrelage & sols', d: 'Pose, reprise, revêtements.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><rect x="16" y="16" width="32" height="32" rx="1" /><line x1="32" y1="16" x2="32" y2="48" /><line x1="16" y1="32" x2="48" y2="32" /></g></svg> },
  { t: 'Maçonnerie', d: 'Petits travaux, reprises, scellements.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><rect x="14" y="20" width="36" height="24" rx="1" /><line x1="14" y1="32" x2="50" y2="32" /><line x1="32" y1="20" x2="32" y2="32" /><line x1="23" y1="32" x2="23" y2="44" /><line x1="41" y1="32" x2="41" y2="44" /></g></svg> },
  { t: 'Dégât des eaux', d: 'Intervention rapide et rapport assurance.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><path d="M32 13 C32 13 24 24 24 30 a8 8 0 0 0 16 0 C40 24 32 13 32 13 Z" /><path className="mp-ripple" d="M17 44 q15 -9 30 0" /><path className="mp-ripple" d="M22 51 q10 -5 20 0" /></g></svg> },
  { t: 'Mise aux normes', d: 'Électricité, accessibilité, sécurité.', svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><path d="M32 13 l15 6 v9 c0 11 -7 17 -15 21 c-8 -4 -15 -10 -15 -21 v-9 z" /><path d="M25 31 l5 5 l9 -10" /></g></svg> },
]

export default function MetiersPro() {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
      <style>{`
        .mp-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #9a7c45; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .mp-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .mp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(158px, 1fr)); gap: 14px; }
        .mp-card { background: white; border-top: 2px solid var(--gold); padding: 26px 18px; text-align: center; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .mp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(26,26,24,0.09); }
        .mp-card svg { width: 42px; height: 42px; display: block; margin: 0 auto 12px; overflow: visible; }
        .mp-l { font-weight: 700; font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink); margin-bottom: 6px; }
        .mp-d { font-size: 13px; color: var(--ink-soft); line-height: 1.55; }
        .mp-drip { transform-box: fill-box; transform-origin: center; animation: mpDrip 2.8s ease-in-out infinite; }
        .mp-roll { transform-box: fill-box; transform-origin: center; animation: mpRoll 2.6s ease-in-out infinite; }
        .mp-flick { animation: mpFlick 2.4s steps(1, end) infinite; }
        .mp-ripple { animation: mpRipple 2.6s ease-in-out infinite; }
        @keyframes mpDrip { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(2px); } }
        @keyframes mpRoll { 0%, 100% { transform: translateX(-2px); } 50% { transform: translateX(2px); } }
        @keyframes mpFlick { 0%, 46%, 54%, 100% { opacity: 1; } 48%, 52% { opacity: 0.4; } }
        @keyframes mpRipple { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .mp-drip, .mp-roll, .mp-flick, .mp-ripple { animation: none; } }
      `}</style>
      <div className="container">
        <p className="mp-eye">Domaines d&apos;intervention</p>
        <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 44, color: 'var(--ink)' }}>
          Tous les corps d&apos;état, un seul numéro.
        </h2>
        <div className="mp-grid">
          {metiers.map(({ t, d, svg }, i) => (
            <div key={t} className="mp-card" data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              {svg}
              <div className="mp-l">{t}</div>
              <p className="mp-d">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
