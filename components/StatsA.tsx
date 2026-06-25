'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = { value: string; label: string; sub: string; to?: number; unit?: string }

const STATS: Stat[] = [
  { value: '★★★★★', label: 'Avis clients Google', sub: 'Note 5/5' },
  { value: '48h', to: 48, unit: 'h', label: 'Délai de réponse', sub: 'Devis garanti' },
  { value: '1', to: 1, unit: '', label: 'Interlocuteur unique', sub: 'Du début à la fin' },
  { value: '3D', label: 'Plan inclus', sub: 'Visualisez avant travaux' },
]

function StatValue({ to, unit, fallbackText, run }: { to?: number; unit?: string; fallbackText: string; run: boolean }) {
  const isCounter = typeof to === 'number'
  const u = unit ?? ''
  const [display, setDisplay] = useState<string>(isCounter ? `${to}${u}` : fallbackText)

  useEffect(() => {
    if (!isCounter) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDisplay(`${to}${u}`); return }
    if (!run) { setDisplay(`0${u}`); return }
    let raf = 0
    let start: number | null = null
    const dur = 1400
    const fb = setTimeout(() => setDisplay(`${to}${u}`), dur + 400)
    const tick = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(`${Math.round((to as number) * eased)}${u}`)
      if (p < 1) raf = requestAnimationFrame(tick)
      else clearTimeout(fb)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); clearTimeout(fb) }
  }, [run, isCounter, to, u])

  return <>{isCounter ? display : fallbackText}</>
}

export default function StatsA() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setRun(true); io.disconnect() } }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .stats { background: var(--dark); padding: 0; border-top: 1px solid rgba(184,151,90,0.3); border-bottom: 1px solid rgba(184,151,90,0.3); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .stat-col { padding: 40px 40px; display: flex; flex-direction: column; gap: 8px; border-right: 1px solid rgba(184,151,90,0.2); transition: background 0.2s; }
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
      `}</style>

      <div className={`stats${run ? ' in' : ''}`} ref={ref}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-col">
                <div className="stat-value"><StatValue to={s.to} unit={s.unit} fallbackText={s.value} run={run} /></div>
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
