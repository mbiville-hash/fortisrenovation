import Link from 'next/link'

export default function ZoneA() {
  const cities: { name: string; href?: string }[] = [
    { name: 'Rouen', href: '/maintenance-immobiliere-rouen' },
    { name: 'Bois-Guillaume', href: '/plombier-bois-guillaume' },
    { name: 'Mont-Saint-Aignan', href: '/plombier-mont-saint-aignan' },
    { name: 'Bihorel', href: '/plombier-bihorel' },
    { name: 'Isneauville', href: '/plombier-isneauville' },
    { name: 'Bonsecours', href: '/plombier-bonsecours' },
    { name: 'Le Mesnil-Esnard', href: '/plombier-le-mesnil-esnard' },
    { name: 'Franqueville-Saint-Pierre', href: '/plombier-franqueville-saint-pierre' },
    { name: 'Sotteville-lès-Rouen', href: '/plombier-sotteville-les-rouen' },
    { name: 'Déville-lès-Rouen' },
    { name: 'Le Grand-Quevilly' },
    { name: 'Le Petit-Quevilly' },
    { name: 'Saint-Étienne-du-Rouvray' },
    { name: 'Maromme' },
    { name: 'Oissel' },
  ]

  const towns: [number, number, string][] = [
    [200, 128, 'Bois-Guillaume'],
    [152, 148, 'Mont-St-Aignan'],
    [120, 196, 'Déville'],
    [136, 252, 'Petit-Quevilly'],
    [200, 268, 'Grand-Quevilly'],
    [264, 260, 'Sotteville'],
    [296, 196, 'St-Étienne'],
    [268, 140, 'Maromme'],
    [200, 312, 'Oissel'],
  ]

  return (
    <>
      <style>{`
        .zone { background: var(--dark); color: var(--white); }
        .zone-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .zone-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px; display: flex; align-items: center; gap: 10px;
        }
        .zone-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .zone-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3vw, 42px); color: var(--white); line-height: 1.15; margin-bottom: 16px; }
        .zone-sub { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 40px; }
        .zone-cities { display: flex; flex-wrap: wrap; gap: 8px; }
        .zone-city {
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.2); padding: 10px 16px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .zone-city:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,151,90,0.06); }
        .zone-map { position: relative; }
        .zone-svg { width: 100%; max-width: 480px; margin: 0 auto; display: block; }

        /* ── Radar animations ── */
        .zone-river { stroke-dasharray: 10 7; animation: zoneFlow 5s linear infinite; }
        @keyframes zoneFlow { to { stroke-dashoffset: -200; } }
        .zone-halo { transform-box: fill-box; transform-origin: center; animation: zoneHalo 3s ease-in-out infinite; }
        @keyframes zoneHalo { 0%,100% { transform: scale(1); opacity:.18; } 50% { transform: scale(1.65); opacity:.03; } }
        .zone-ring { transform-box: fill-box; transform-origin: center; animation: zoneSpin 80s linear infinite; }
        @keyframes zoneSpin { to { transform: rotate(360deg); } }
        .zone-dot { transform-box: fill-box; transform-origin: center; animation: zoneTwinkle 3s ease-in-out infinite; }
        @keyframes zoneTwinkle { 0%,100% { opacity:.25; } 50% { opacity:1; } }

        @media (max-width: 900px) { .zone-grid { grid-template-columns: 1fr; gap: 48px; } .zone-map { order: -1; } }
        @media (prefers-reduced-motion: reduce) {
          .zone-river, .zone-halo, .zone-ring, .zone-dot { animation: none; }
          .zone-river { stroke-dasharray: none; }
        }
      `}</style>

      <section className="zone">
        <div className="container">
          <div className="zone-grid">
            <div className="zone-copy" data-reveal>
              <p className="zone-eyebrow">Zone d&apos;intervention</p>
              <h2 className="zone-title">Rouen &amp; la<br />métropole normande.</h2>
              <p className="zone-sub">
                Nous intervenons dans un rayon de 30 km autour de Rouen. Déplacement gratuit pour les devis.
              </p>
              <div className="zone-cities">
                {cities.map((c) => (
                  c.href
                    ? <Link key={c.name} href={c.href} className="zone-city">{c.name}</Link>
                    : <span key={c.name} className="zone-city">{c.name}</span>
                ))}
              </div>
            </div>

            <div className="zone-map" data-reveal style={{ transitionDelay: '120ms' }}>
              <svg className="zone-svg" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carte de la zone d'intervention Fortis Rénovation — Rouen et métropole normande (30 km)">
                <path className="zone-river" d="M20 200 Q80 180 140 200 Q200 220 260 195 Q320 170 380 190" stroke="#b8975a" strokeWidth="3" strokeLinecap="round" opacity="0.45" fill="none"/>
                <circle className="zone-halo" cx="200" cy="196" r="28" fill="#b8975a" opacity="0.16" stroke="#b8975a" strokeWidth="1.5"/>
                <circle cx="200" cy="196" r="5" fill="#b8975a"/>
                <text x="200" y="238" textAnchor="middle" fill="white" fontSize="12" fontFamily="Montserrat,sans-serif" fontWeight="700" letterSpacing="1">ROUEN</text>
                {towns.map(([cx, cy, label], i) => (
                  <g key={label}>
                    <line x1={cx} y1={cy} x2="200" y2="196" stroke="rgba(184,151,90,0.15)" strokeWidth="1" strokeDasharray="3 4"/>
                    <circle className="zone-dot" cx={cx} cy={cy} r="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" style={{ animationDelay: `${i * 0.3}s` }}/>
                  </g>
                ))}
                <circle className="zone-ring" cx="200" cy="196" r="140" stroke="#b8975a" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.25" fill="none"/>
                <text x="320" y="80" fill="rgba(184,151,90,0.5)" fontSize="10" fontFamily="Montserrat,sans-serif">∅ 30 km</text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
