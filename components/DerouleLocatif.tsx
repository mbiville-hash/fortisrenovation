'use client'

import { useEffect, useRef, useState } from 'react'

const etapes = [
  { n: '01', t: 'Constat sur place', d: 'Nous venons, nous mesurons, nous photographions.' },
  { n: '02', t: 'Chiffrage', d: 'Ligne à ligne, photos à l’appui.' },
  { n: '03', t: 'Intervention', d: 'Corps d’état coordonnés, un seul interlocuteur.' },
  { n: '04', t: 'Rapport photo', d: 'Avant, pendant, après. Horodaté.' },
  { n: '05', t: 'Remise des clés', d: 'Le logement est prêt à relouer.' },
]

/** Frise verticale : le filet doré se remplit au scroll et allume les étapes une à une. */
export default function DerouleLocatif() {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const [h, setH] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(1)
      setH(ref.current?.offsetHeight ?? 0)
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      setH(el.offsetHeight)
      setP(Math.max(0, Math.min(1, (window.innerHeight * 0.82 - r.top) / r.height)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        .drl { background: var(--paper); padding: clamp(64px, 9vw, 110px) 0; }
        .drl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .drl-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .drl-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3vw, 44px); color: var(--ink); max-width: 22ch; }
        .drl-frise { position: relative; max-width: 880px; margin: clamp(48px, 7vw, 72px) auto 0; }
        .drl-rail, .drl-fill { position: absolute; left: 43px; top: 14px; bottom: 14px; width: 1px; }
        .drl-rail { background: rgba(184,151,90,0.25); }
        .drl-fill { background: var(--gold); transform-origin: top; }
        .drl-tip { position: absolute; left: 43px; top: 14px; width: 9px; height: 9px; margin-left: -4.5px; background: var(--gold); box-shadow: 0 0 14px rgba(184,151,90,0.65); transition: opacity 0.4s; }
        .drl-step { position: relative; display: flex; align-items: baseline; gap: clamp(24px, 5vw, 56px); padding: clamp(24px, 4vw, 36px) 0; transition: opacity 0.6s cubic-bezier(.16,1,.3,1), transform 0.6s cubic-bezier(.16,1,.3,1); }
        .drl-num { font-family: 'Bodoni Moda', serif; font-size: clamp(48px, 7vw, 72px); line-height: 1; flex: none; width: 88px; text-align: center; background: var(--paper); padding: 8px 0; transition: color 0.5s; }
        .drl-st { font-family: 'Bodoni Moda', serif; font-size: clamp(22px, 2.4vw, 26px); color: var(--ink); }
        .drl-sd { font-size: 15px; color: var(--ink-soft); margin-top: 6px; }
        @media (max-width: 560px) {
          .drl-rail, .drl-fill, .drl-tip { left: 30px; }
          .drl-num { width: 62px; font-size: 40px; }
        }
      `}</style>

      <section className="drl">
        <div className="container">
          <p className="drl-eye">Déroulé</p>
          <h2 className="drl-title">De l’état des lieux de sortie à la remise des clés.</h2>

          <div className="drl-frise" ref={ref}>
            <span className="drl-rail" aria-hidden="true" />
            <span className="drl-fill" aria-hidden="true" style={{ transform: `scaleY(${p.toFixed(3)})` }} />
            <span
              className="drl-tip"
              aria-hidden="true"
              style={{
                transform: `translateY(${((h - 28) * p).toFixed(1)}px) rotate(45deg)`,
                opacity: p >= 1 || p <= 0 ? 0 : 1,
              }}
            />
            {etapes.map(({ n, t, d }, i) => {
              const lit = p >= (i + 0.65) / etapes.length
              return (
                <div
                  key={n}
                  className="drl-step"
                  style={{ opacity: lit ? 1 : 0.3, transform: lit ? 'none' : 'translateX(-14px)' }}
                >
                  <span className="drl-num" style={{ color: lit ? 'var(--gold-deep)' : 'rgba(128,101,50,0.45)' }}>{n}</span>
                  <div>
                    <h3 className="drl-st">{t}</h3>
                    <p className="drl-sd">{d}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
