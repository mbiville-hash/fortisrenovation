'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const LAYOUTS = [
  { douche: [92, 96, 0], vasque: [254, 72, 0], wc: [96, 198, 0] },
  { douche: [266, 100, 0], vasque: [92, 150, 90], wc: [264, 200, 0] },
  { douche: [98, 172, 0], vasque: [196, 66, 0], wc: [296, 92, 90] },
] as const

export default function PartB() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % LAYOUTS.length), 3000)
    return () => clearInterval(t)
  }, [])

  const L = LAYOUTS[i]
  const tf = (p: readonly number[]) => ({ transform: `translate(${p[0]}px, ${p[1]}px) rotate(${p[2]}deg)` })

  return (
    <>
      <style>{`
        .part { background: var(--paper); }
        .part-inner { background: var(--dark); display: grid; grid-template-columns: 0.95fr 1.05fr; min-height: 520px; overflow: hidden; }
        .part-planwrap { display: flex; align-items: center; justify-content: center; padding: 40px; }
        .part-plan { position: relative; width: 100%; max-width: 460px; background: #15140f; border: 1px solid rgba(184,151,90,0.4); border-radius: 4px; padding: 14px; }
        .part-plan svg { display: block; width: 100%; height: auto; }
        .pc { transition: transform 1.05s cubic-bezier(.55,.15,.1,1); transform-box: fill-box; transform-origin: center; }
        .pc rect, .pc path, .pc ellipse { fill: rgba(184,151,90,0.10); stroke: var(--gold); stroke-width: 1.4; }
        .pc text { fill: #e8dcc2; font-size: 8px; font-family: 'Bodoni Moda', serif; letter-spacing: .04em; }
        .part-plan-cap { text-align: center; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: rgba(245,240,232,0.45); margin-top: 12px; }
        @media (prefers-reduced-motion: reduce) { .pc { transition: none; } }

        .part-copy { padding: 64px 56px; display: flex; flex-direction: column; justify-content: center; }
        .part-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 22px; display: flex; align-items: center; gap: 10px; }
        .part-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .part-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3vw, 42px); color: var(--white); line-height: 1.14; margin-bottom: 16px; }
        .part-incl { display: flex; align-items: center; gap: 9px; font-size: 12px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--gold); margin-bottom: 30px; }
        .part-incl .dia { font-size: 14px; display: inline-block; animation: diamondGlow 2.4s ease-in-out infinite; }
        @keyframes diamondGlow { 0%, 100% { text-shadow: 0 0 0 rgba(184,151,90,0); transform: scale(1); } 50% { text-shadow: 0 0 16px rgba(184,151,90,0.95), 0 0 6px rgba(184,151,90,0.85); transform: scale(1.18); } }
        @media (prefers-reduced-motion: reduce) { .part-incl .dia { animation: none; } }
        .part-steps { list-style: none; margin-bottom: 36px; display: flex; flex-direction: column; gap: 12px; }
        .part-steps li { font-size: 14px; color: rgba(255,255,255,0.72); display: flex; align-items: flex-start; gap: 12px; }
        .part-step-n { font-family: 'Bodoni Moda', serif; font-size: 18px; color: var(--gold); width: 22px; flex-shrink: 0; line-height: 1.25; }
        .part-actions { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
        .part-link { font-size: 12px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--gold); border-bottom: 1px solid rgba(184,151,90,0.5); padding-bottom: 2px; }
        .part-link:hover { border-color: var(--gold); }
        @media (max-width: 768px) { .part-inner { grid-template-columns: 1fr; } .part-planwrap { padding: 32px 24px 8px; } .part-copy { padding: 40px 28px 48px; } }
      `}</style>

      <section className="part" id="salle-de-bain">
        <div className="container">
          <div className="part-inner">
            <div className="part-planwrap" data-reveal>
              <div className="part-plan">
                <svg viewBox="0 0 360 260" role="img" aria-label="Plan de salle de bain : trois implantations possibles, les meubles se replacent automatiquement">
                  <circle cx="180" cy="130" r="122" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.16" />
                  <rect x="18" y="18" width="324" height="224" fill="none" stroke="rgba(232,220,194,0.45)" strokeWidth="2" />
                  <path d="M126 18 A40 40 0 0 0 166 18" fill="none" stroke="rgba(232,220,194,0.3)" strokeWidth="1.2" />
                  <g className="pc" style={tf(L.douche)}>
                    <rect x="-40" y="-40" width="80" height="80" />
                    <path d="M-40 0 A40 40 0 0 1 0 -40" fill="none" />
                    <text x="0" y="3" textAnchor="middle">Douche</text>
                  </g>
                  <g className="pc" style={tf(L.vasque)}>
                    <rect x="-54" y="-15" width="108" height="30" />
                    <ellipse cx="0" cy="0" rx="12" ry="7" />
                    <text x="0" y="3" textAnchor="middle">Vasque</text>
                  </g>
                  <g className="pc" style={tf(L.wc)}>
                    <rect x="-16" y="-23" width="32" height="46" />
                    <ellipse cx="0" cy="4" rx="10" ry="13" />
                    <text x="0" y="-28" textAnchor="middle">WC</text>
                  </g>
                </svg>
                <p className="part-plan-cap">3 implantations · vos options en 3D</p>
              </div>
            </div>

            <div className="part-copy" data-reveal>
              <p className="part-eyebrow">Particuliers</p>
              <h2 className="part-title">Votre salle de bain, <br />en 3D avant les travaux.</h2>
              <p className="part-incl"><span className="dia">◈</span> Plan 3D inclus</p>
              <ol className="part-steps">
                {[
                  ['1.', 'On visite et on mesure — gratuitement'],
                  ['2.', 'On vous envoie le plan 3D sous 48h'],
                  ['3.', "Vous validez l'implantation, on commence"],
                  ['4.', 'Remise des clés, travaux garantis'],
                ].map(([n, t]) => (
                  <li key={n}><span className="part-step-n">{n}</span><span>{t}</span></li>
                ))}
              </ol>
              <div className="part-actions">
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
                <Link href="/salle-de-bain-rouen" className="part-link">Voir la méthode →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
