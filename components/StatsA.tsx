'use client'

import { useEffect, useState } from 'react'

type Stat = { value: string; label: string; sub: string }

const STATS: Stat[] = [
  { value: '★★★★★', label: 'Avis clients Google', sub: 'Note 5/5' },
  { value: '48h', label: 'Délai de réponse', sub: 'Devis garanti' },
  { value: '1', label: 'Interlocuteur unique', sub: 'Du début à la fin' },
  { value: '3D', label: 'Plan inclus', sub: 'Visualisez avant travaux' },
]

function StatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(\D*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  // SSR / no-JS shows the final value; client animates from 0.
  const [display, setDisplay] = useState<string>(match ? `${target}${suffix}` : value)

  useEffect(() => {
    if (!match) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let start: number | null = null
    setDisplay(`0${suffix}`)
    const tick = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / 1200, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(`${Math.round(target * eased)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{match ? display : value}</>
}

export default function StatsA() {
  return (
    <>
      <style>{`
        .stats { background: var(--dark); padding: 0; border-top: 1px solid rgba(184,151,90,0.3); border-bottom: 1px solid rgba(184,151,90,0.3); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .stat-col {
          padding: 40px 40px; display: flex; flex-direction: column; gap: 8px;
          border-right: 1px solid rgba(184,151,90,0.2);
          transition: background 0.2s;
          animation: statIn .7s cubic-bezier(.2,.7,.2,1) both;
        }
        .stat-col:nth-child(1){ animation-delay:.05s } .stat-col:nth-child(2){ animation-delay:.15s }
        .stat-col:nth-child(3){ animation-delay:.25s } .stat-col:nth-child(4){ animation-delay:.35s }
        @keyframes statIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform:none; } }
        .stat-col:last-child { border-right: none; }
        .stat-col:hover { background: rgba(184,151,90,0.05); }
        .stat-value { font-family: 'Bodoni Moda', serif; font-size: 36px; color: var(--gold); line-height: 1; letter-spacing: -0.01em; }
        .stat-label { font-size: 13px; font-weight: 600; color: var(--white); letter-spacing: 0.04em; }
        .stat-sub { font-size: 12px; color: rgba(255,255,255,0.65); letter-spacing: 0.06em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-col { padding: 28px 24px; border-right: 1px solid rgba(184,151,90,0.2); border-bottom: 1px solid rgba(184,151,90,0.2); }
          .stat-col:nth-child(2n) { border-right: none; }
          .stat-col:nth-child(3), .stat-col:nth-child(4) { border-bottom: none; }
        }
        @media (prefers-reduced-motion: reduce) { .stat-col { animation: none; } }
      `}</style>

      <div className="stats">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-col">
                <div className="stat-value"><StatValue value={s.value} /></div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
