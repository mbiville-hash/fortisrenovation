'use client'

import { useEffect, useRef, useState } from 'react'
import Rings from '@/components/Rings'

/** Compteur qui grimpe de 0 à `to` quand la valeur entre dans le viewport. */
function Compteur({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to)
      return
    }

    let raf = 0
    const run = () => {
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / 1500)
        setN(Math.round(to * (1 - Math.pow(1 - p, 4))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect()
            run()
          }
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <span ref={ref}>
      {n}
      {suffix && <span style={{ fontSize: '0.42em' }}>{suffix}</span>}
    </span>
  )
}

export default function ChiffresLocatif() {
  return (
    <>
      <style>{`
        .chl { background: var(--dark); color: var(--white); padding: clamp(56px, 7vw, 84px) 0; position: relative; overflow: hidden; }
        .chl .container { position: relative; z-index: 1; display: flex; flex-wrap: wrap; align-items: center; gap: clamp(32px, 5vw, 72px); }
        .chl-big { flex: 1 1 300px; min-width: 0; }
        .chl-bignum { font-family: 'Bodoni Moda', serif; font-size: clamp(96px, 14vw, 170px); line-height: 0.95; color: var(--gold); font-variant-numeric: tabular-nums; }
        .chl-biglbl { margin-top: 14px; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.68); }
        .chl-list { flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; }
        .chl-row { border-top: 1px solid rgba(255,255,255,0.12); padding: 18px 0; display: flex; align-items: baseline; gap: 18px; }
        .chl-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .chl-k { font-family: 'Bodoni Moda', serif; font-size: clamp(24px, 2.6vw, 30px); line-height: 1; color: var(--gold); flex: none; width: 92px; font-variant-numeric: tabular-nums; }
        .chl-v { font-size: 13.5px; color: rgba(255,255,255,0.75); }
      `}</style>

      <section className="chl">
        <Rings className="rings--br rings--lg" />
        <div className="container">
          <div className="chl-big" data-reveal>
            <div className="chl-bignum"><Compteur to={48} suffix="h" /></div>
            <p className="chl-biglbl">pour recevoir un chiffrage</p>
          </div>
          <div className="chl-list">
            <div className="chl-row" data-reveal>
              <span className="chl-k"><Compteur to={1} /></span>
              <span className="chl-v">interlocuteur, du constat aux clés</span>
            </div>
            <div className="chl-row" data-reveal>
              <span className="chl-k">Photo</span>
              <span className="chl-v">rapport systématique, à chaque intervention</span>
            </div>
            <div className="chl-row" data-reveal>
              <span className="chl-k">Rouen</span>
              <span className="chl-v">et 30&nbsp;km alentour</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
