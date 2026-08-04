const prestations: { t: string; d: string; icon: React.ReactNode }[] = [
  {
    t: 'Peinture et reprises d’enduits',
    d: 'Murs et plafonds prêts pour les visites.',
    icon: (
      <>
        <rect x="9" y="10" width="21" height="9" rx="1" pathLength={1} />
        <path d="M30 12h7v8l-13 2.5v5.5" pathLength={1} />
        <rect x="21.8" y="28" width="4.5" height="10" rx="1" pathLength={1} />
      </>
    ),
  },
  {
    t: 'Revêtements de sol',
    d: 'Parquet, stratifié ou PVC, posés et ajustés.',
    icon: (
      <>
        <rect x="9" y="13" width="30" height="22" pathLength={1} />
        <path d="M9 20.3h30M9 27.6h30" pathLength={1} />
        <path d="M19 13v7.3M29 20.3v7.3M16 27.6V35" pathLength={1} />
      </>
    ),
  },
  {
    t: 'WC et sanitaires',
    d: 'Déposés, remplacés, raccordés.',
    icon: (
      <>
        <rect x="14" y="8" width="20" height="9" rx="0.5" pathLength={1} />
        <path d="M16 17v4c0 6 3.5 9 8 9s8-3 8-9v-4" pathLength={1} />
        <path d="M20 30l-1.5 8h11L28 30" pathLength={1} />
      </>
    ),
  },
  {
    t: 'Petite plomberie',
    d: 'Fuites, joints, robinetterie, évacuations.',
    icon: (
      <>
        <path d="M13 12v9a9 9 0 0 0 9 9h8" pathLength={1} />
        <path d="M19 12v8a4 4 0 0 0 4 4h7" pathLength={1} />
        <path d="M10 12h12" pathLength={1} />
        <path d="M30 20v14" pathLength={1} />
        <path d="M37 9c2.5 3.3 3.8 5.4 3.8 7.3a3.8 3.8 0 1 1-7.6 0C33.2 14.4 34.5 12.3 37 9z" pathLength={1} />
      </>
    ),
  },
  {
    t: 'Électricité courante',
    d: 'Prises, interrupteurs et luminaires remis au propre.',
    icon: (
      <>
        <rect x="10" y="10" width="28" height="28" rx="1" pathLength={1} />
        <circle cx="24" cy="24" r="8.5" pathLength={1} />
        <circle className="prl-dot" cx="24" cy="19.2" r="1.1" fill="var(--gold)" stroke="none" />
        <circle className="prl-dot" cx="20.4" cy="26" r="1.1" fill="var(--gold)" stroke="none" />
        <circle className="prl-dot" cx="27.6" cy="26" r="1.1" fill="var(--gold)" stroke="none" />
      </>
    ),
  },
  {
    t: 'Nettoyage de fin de chantier',
    d: 'Livré propre, prêt à faire visiter.',
    icon: (
      <>
        <path d="M24 9c1 6.5 4.5 10 11 11-6.5 1-10 4.5-11 11-1-6.5-4.5-10-11-11 6.5-1 10-4.5 11-11z" pathLength={1} />
        <path d="M36 29c.5 3.2 2.3 5 5.5 5.5-3.2.5-5 2.3-5.5 5.5-.5-3.2-2.3-5-5.5-5.5 3.2-.5 5-2.3 5.5-5.5z" pathLength={1} />
        <circle className="prl-dot" cx="13" cy="33" r="1" fill="var(--gold)" stroke="none" />
      </>
    ),
  },
]

export default function PrestationsLocatif() {
  return (
    <>
      <style>{`
        .prl { background: var(--paper); padding: clamp(64px, 9vw, 110px) 0; }
        .prl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .prl-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .prl-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3vw, 44px); color: var(--ink); max-width: 20ch; margin-bottom: clamp(36px, 5vw, 56px); }
        .prl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 272px), 1fr)); gap: 20px; }
        .prl-card { position: relative; overflow: hidden; background: var(--white); border: 1px solid rgba(26,26,24,0.10); border-radius: 2px; padding: 30px 26px 28px; transition: transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.5s; }
        .prl-card:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(26,26,24,0.09); }
        .prl-filet { position: absolute; top: 0; left: 0; width: 34px; height: 2px; background: var(--gold); transition: width 0.7s cubic-bezier(.16,1,.3,1); }
        .prl-card:hover .prl-filet { width: 100%; }
        .prl-ct { font-family: 'Bodoni Moda', serif; font-size: 20px; color: var(--ink); margin: 18px 0 8px; }
        .prl-cd { font-size: 14px; line-height: 1.55; color: var(--ink-soft); }

        /* Tracé des icônes au survol */
        .prl-ic path, .prl-ic rect, .prl-ic circle { stroke-dasharray: 1; stroke-dashoffset: 0; }
        .prl-ic .prl-dot { stroke-dasharray: none; }
        @media (prefers-reduced-motion: no-preference) {
          .prl-card:hover .prl-ic > :not(.prl-dot) { animation: prlDraw 0.62s cubic-bezier(.16,1,.3,1) both; }
          .prl-card:hover .prl-ic > :nth-child(2) { animation-delay: 0.11s; }
          .prl-card:hover .prl-ic > :nth-child(3) { animation-delay: 0.22s; }
          .prl-card:hover .prl-ic > :nth-child(4) { animation-delay: 0.33s; }
          .prl-card:hover .prl-ic > :nth-child(5) { animation-delay: 0.44s; }
          .prl-card:hover .prl-ic .prl-dot { animation: prlFade 0.32s 0.46s both; }
        }
        @keyframes prlDraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes prlFade { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <section className="prl">
        <div className="container">
          <p className="prl-eye">Périmètre</p>
          <h2 className="prl-title">Ce que nous prenons en charge.</h2>
          <div className="prl-grid">
            {prestations.map(({ t, d, icon }, i) => (
              <div key={t} className="prl-card" data-reveal style={{ animationDelay: `${i * 70}ms` }}>
                <span className="prl-filet" aria-hidden="true" />
                <svg
                  className="prl-ic"
                  aria-hidden="true"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon}
                </svg>
                <h3 className="prl-ct">{t}</h3>
                <p className="prl-cd">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
