import Link from 'next/link'

export default function HeroA() {
  return (
    <>
      <style>{`
        .hero { background: var(--dark); position: relative; overflow: hidden; scroll-margin-top: 72px; }
        .hero-rings { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
        .hero-rings svg { width: 100%; height: 100%; display: block; }
        .hero-rings circle { fill: none; stroke: var(--gold); }
        .hero-rings-base { transform-box: fill-box; transform-origin: center; animation: ringsBreath 9s ease-in-out infinite; }
        .hero-rings-base circle { stroke-width: 1.2; }
        @keyframes ringsBreath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .hero-ripple { stroke-width: 1.4; transform-box: fill-box; transform-origin: center; opacity: 0; animation: ringRipple 6.4s linear infinite; }
        @keyframes ringRipple { 0% { transform: scale(.18); opacity: 0; } 9% { opacity: .3; } 100% { transform: scale(4); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .hero-rings-base, .hero-ripple { animation: none; } .hero-ripple { display: none; } }

        .hero-inner {
          position: relative; z-index: 1;
          min-height: 78vh;
          display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
          max-width: 700px;
          padding: 96px 0 90px;
        }
        .hero-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 26px; display: flex; align-items: center; gap: 10px;
        }
        .hero-tag::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .hero-title {
          font-family: 'Bodoni Moda', serif; font-size: clamp(40px, 5.4vw, 72px); font-weight: 700;
          color: var(--white); line-height: 1.08; margin-bottom: 24px;
        }
        .hero-desc { font-size: 16px; color: rgba(255,255,255,0.66); line-height: 1.7; max-width: 500px; margin-bottom: 34px; }
        .hero-desc strong { color: rgba(255,255,255,0.92); font-weight: 600; }
        .hero-features { list-style: none; margin-bottom: 40px; display: flex; flex-wrap: wrap; gap: 10px 26px; }
        .hero-features li { font-size: 13px; color: rgba(255,255,255,0.72); display: flex; align-items: center; gap: 10px; }
        .hero-features li::before { content: ''; width: 16px; height: 1px; background: var(--gold); flex-shrink: 0; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 30px; }
        .hero-trust { font-size: 13px; color: rgba(255,255,255,0.6); letter-spacing: 0.02em; }
        /* Fond sombre : --gold atteint 6,8:1, --gold-deep seulement 3,4:1. Ne pas assombrir ici. */
        .hero-trust .stars { color: var(--gold); letter-spacing: 3px; margin-right: 8px; }
        .hero-alt { font-size: 13px; color: rgba(255,255,255,0.5); margin-top: 14px; }
        .hero-alt a { color: var(--gold); border-bottom: 1px solid rgba(184,151,90,0.4); padding-bottom: 1px; }
        .hero-alt a:hover { border-color: var(--gold); }

        @keyframes heroIn { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
        .hero-tag, .hero-title, .hero-desc, .hero-features, .hero-actions, .hero-trust, .hero-alt { animation: heroIn 1s cubic-bezier(.16,.84,.3,1) both; }
        .hero-tag { animation-delay: .12s; } .hero-title { animation-delay: .26s; } .hero-desc { animation-delay: .42s; }
        .hero-features { animation-delay: .56s; } .hero-actions { animation-delay: .7s; } .hero-trust { animation-delay: .82s; }
        .hero-alt { animation-delay: .92s; }
        @media (prefers-reduced-motion: reduce) { .hero-tag, .hero-title, .hero-desc, .hero-features, .hero-actions, .hero-trust, .hero-alt { animation: none; } }

        @media (max-width: 768px) {
          .hero-inner { min-height: auto; padding: 64px 0 72px; }
          .hero-title { font-size: clamp(34px, 9vw, 48px); }
        }
      `}</style>

      <section className="hero" id="decouvrir">
        <div className="hero-rings" aria-hidden="true">
          <svg viewBox="-960 -540 1920 1080" preserveAspectRatio="xMidYMid slice">
            <g className="hero-rings-base">
              <circle r="150" strokeOpacity={0.18} />
              <circle r="270" strokeOpacity={0.14} />
              <circle r="400" strokeOpacity={0.1} />
              <circle r="540" strokeOpacity={0.07} />
              <circle r="700" strokeOpacity={0.05} />
              <circle r="880" strokeOpacity={0.03} />
            </g>
            <circle className="hero-ripple" r="170" />
            <circle className="hero-ripple" r="170" style={{ animationDelay: '1.6s' }} />
            <circle className="hero-ripple" r="170" style={{ animationDelay: '3.2s' }} />
            <circle className="hero-ripple" r="170" style={{ animationDelay: '4.8s' }} />
          </svg>
        </div>
        <div className="container">
          <div className="hero-inner">
            <p className="hero-tag">Syndics · Bailleurs · Gestionnaires — Rouen &amp; métropole</p>
            <h1 className="hero-title">Maintenance immobilière<br />et remise en état locative.</h1>
            <p className="hero-desc">
              Nous remettons vos logements en état entre deux locataires et nous traitons vos dépannages du quotidien. <strong>Devis sous 48h</strong>, rapport photo à chaque passage, une seule facture.
            </p>
            <ul className="hero-features">
              <li>Devis sous 48h</li>
              <li>Interlocuteur unique</li>
              <li>Astreinte 24h/24 · 7j/7</li>
            </ul>
            <div className="hero-actions">
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <Link href="/remise-en-etat-locative-rouen" className="btn btn-outline-white">Remise en état locative</Link>
            </div>
            <p className="hero-trust"><span className="stars">★★★★★</span>5/5 · 30 avis Google vérifiés</p>
            <p className="hero-alt">
              Vous rénovez chez vous&nbsp;? <Link href="/salle-de-bain-rouen">Voir l&apos;offre salle de bain →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
