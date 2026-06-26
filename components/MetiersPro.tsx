import type { ReactNode } from 'react'

const G = { fill: 'none', stroke: 'var(--gold)', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const tileDelays = [0, 0.13, 0.26, 0.13, 0.26, 0.39, 0.26, 0.39, 0.52]
const tilePos = [[16, 16], [27, 16], [38, 16], [16, 27], [27, 27], [38, 27], [16, 38], [27, 38], [38, 38]]

const metiers: { t: string; d: string; svg: ReactNode }[] = [
  {
    t: 'Plomberie', d: 'Fuites, sanitaires, réseaux, chauffe-eau.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><path {...G} className="mp-fx mp-drop" d="M32 12 C32 12 19 29 19 40 a13 13 0 0 0 26 0 C45 29 32 12 32 12 Z" /></svg>,
  },
  {
    t: 'Électricité', d: 'Dépannage, tableau, mise aux normes.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}>
      <circle className="mp-glass" cx="32" cy="27" r="12" />
      <path d="M26 41 h12" /><path d="M27.5 45 h9" /><path d="M29.5 49 h5" /><path d="M28 27 q4 5 8 0" />
      <g className="mp-rays"><line x1="15" y1="20" x2="19" y2="23" /><line x1="49" y1="20" x2="45" y2="23" /><line x1="13" y1="32" x2="18" y2="32" /><line x1="51" y1="32" x2="46" y2="32" /></g>
    </g></svg>,
  },
  {
    t: 'Peinture', d: 'Rafraîchissement, parties communes, logements.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G} className="mp-fx mp-roll"><rect x="16" y="14" width="30" height="11" rx="2" /><path d="M31 25 v6 h-6 v16" /></g></svg>,
  },
  {
    t: 'Carrelage & sols', d: 'Pose, reprise, revêtements.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}>
      {tilePos.map(([x, y], i) => (
        <rect key={i} className="mp-tile" x={x} y={y} width="9" height="9" rx="1" style={{ animationDelay: `${tileDelays[i]}s` }} />
      ))}
    </g></svg>,
  },
  {
    t: 'Dégât des eaux', d: 'Intervention rapide et rapport assurance.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}>
      <path d="M32 13 C32 13 24 24 24 30 a8 8 0 0 0 16 0 C40 24 32 13 32 13 Z" />
      <path className="mp-fx mp-rip" d="M16 45 q16 -9 32 0" />
      <path className="mp-fx mp-rip" d="M21 52 q11 -6 22 0" style={{ animationDelay: '0.4s' }} />
    </g></svg>,
  },
  {
    t: 'Mise aux normes', d: 'Électricité, accessibilité, sécurité.',
    svg: <svg viewBox="0 0 64 64" aria-hidden="true"><g {...G}><path d="M32 13 l15 6 v9 c0 11 -7 17 -15 21 c-8 -4 -15 -10 -15 -21 v-9 z" /><path className="mp-check" d="M25 31 l5 5 l9 -10" /></g></svg>,
  },
]

export default function MetiersPro() {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
      <style>{`
        .mp-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #9a7c45; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .mp-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .mp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; }
        .mp-card { background: white; border-top: 2px solid var(--gold); padding: 26px 18px; text-align: center; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .mp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(26,26,24,0.09); }
        .mp-card svg { width: 44px; height: 44px; display: block; margin: 0 auto 12px; overflow: hidden; }
        .mp-l { font-weight: 700; font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink); margin-bottom: 6px; }
        .mp-d { font-size: 13px; color: var(--ink-soft); line-height: 1.55; }
        .mp-fx { transform-box: fill-box; transform-origin: center; }
        .mp-drop { animation: mpDrop 2s ease-in-out infinite; }
        .mp-roll { animation: mpRoll 0.85s ease-in-out infinite; }
        .mp-glass { animation: mpGlass 2s ease-in-out infinite; }
        .mp-rays { opacity: 0.15; animation: mpRays 2s ease-in-out infinite; }
        .mp-tile { fill: rgba(184,151,90,0); animation: mpTile 2.6s ease-in-out infinite; }
        .mp-rip { animation: mpRip 2.2s ease-in-out infinite; }
        .mp-check { animation: mpCheck 1s ease-in-out infinite; }
        @keyframes mpDrop { 0% { transform: translateY(-11px); opacity: 0; } 16% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(13px); opacity: 0; } }
        @keyframes mpRoll { 0%, 100% { transform: translateY(7px); } 50% { transform: translateY(-7px); } }
        @keyframes mpGlass { 0%, 100% { fill: rgba(184,151,90,0); } 50% { fill: rgba(184,151,90,0.3); } }
        @keyframes mpRays { 0%, 100% { opacity: 0.15; } 50% { opacity: 1; } }
        @keyframes mpTile { 0%, 100% { fill: rgba(184,151,90,0); } 14% { fill: rgba(184,151,90,0.6); } 42% { fill: rgba(184,151,90,0); } }
        @keyframes mpRip { 0%, 100% { opacity: 0.25; transform: scaleX(0.82); } 50% { opacity: 1; transform: scaleX(1.06); } }
        @keyframes mpCheck { 0%, 100% { opacity: 1; } 50% { opacity: 0.12; } }
        @media (prefers-reduced-motion: reduce) { .mp-drop, .mp-roll, .mp-glass, .mp-rays, .mp-tile, .mp-rip, .mp-check { animation: none; } .mp-rays { opacity: 0.7; } .mp-tile { fill: rgba(184,151,90,0.25); } }
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
