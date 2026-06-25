'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const p = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100))
    setPos(p)
  }, [])

  return (
    <>
      <style>{`
        .ba2 { background: var(--paper); }
        .ba2-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .ba2-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 14px; }
        .ba2-title { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 3vw, 38px); color: var(--ink); margin-bottom: 12px; line-height: 1.15; }
        .ba2-sub { font-size: 15px; color: var(--ink-soft); line-height: 1.7; max-width: 540px; margin: 0 auto 36px; }
        .ba2-frame { position: relative; width: 100%; max-width: 430px; margin: 0 auto; aspect-ratio: 4 / 5; border-radius: 3px; overflow: hidden; border: 1px solid rgba(26,26,24,.12); touch-action: none; cursor: ew-resize; user-select: none; box-shadow: 0 18px 50px rgba(0,0,0,.14); }
        .ba2-frame:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        .ba2-layer { position: absolute; inset: 0; }
        .ba2-badge { position: absolute; top: 12px; font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: 5px 11px; border-radius: 3px; z-index: 3; }
        .ba2-div { position: absolute; top: 0; bottom: 0; width: 2px; background: #fff; transform: translateX(-1px); z-index: 4; box-shadow: 0 0 8px rgba(0,0,0,.3); }
        .ba2-handle { position: absolute; top: 50%; width: 42px; height: 42px; border-radius: 50%; background: #fff; color: var(--ink); display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%); z-index: 5; border: 1px solid rgba(26,26,24,.15); box-shadow: 0 2px 10px rgba(0,0,0,.25); }
        .ba2-cap { font-size: 13px; color: var(--ink-faint); margin-top: 20px; letter-spacing: .02em; }
      `}</style>
      <section className="ba2" id="avant-apres">
        <div className="container ba2-inner" data-reveal>
          <p className="ba2-eyebrow">Avant / Après</p>
          <h2 className="ba2-title">Le même WC, métamorphosé.</h2>
          <p className="ba2-sub">Dépose de l&apos;étagère, nouveau sol, abattant et peinture : un rafraîchissement complet. Glissez la poignée pour comparer.</p>

          <div
            className="ba2-frame"
            ref={ref}
            role="slider"
            aria-label="Comparer le WC avant et après rénovation"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); update(e.clientX) }}
            onPointerMove={(e) => { if (dragging.current) update(e.clientX) }}
            onPointerUp={() => { dragging.current = false }}
            onPointerCancel={() => { dragging.current = false }}
            onKeyDown={(e) => { if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4)); if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4)) }}
          >
            <div className="ba2-layer">
              <Image src="/avant-apres/wc-renovation-avant.jpg" alt="WC avant rénovation à Rouen — ancien sol clair et étagère encombrée" fill sizes="(max-width: 768px) 90vw, 430px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="ba2-layer" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <Image src="/avant-apres/wc-renovation-apres.jpg" alt="WC après rénovation à Rouen — sol ardoise, abattant blanc, chantier propre" fill sizes="(max-width: 768px) 90vw, 430px" style={{ objectFit: 'cover' }} />
            </div>
            <span className="ba2-badge" style={{ left: 12, background: 'rgba(17,17,16,.7)', color: '#fff' }}>Avant</span>
            <span className="ba2-badge" style={{ right: 12, background: 'var(--gold)', color: 'var(--ink)' }}>Après</span>
            <div className="ba2-div" style={{ left: `${pos}%` }} />
            <div className="ba2-handle" style={{ left: `${pos}%` }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5" /></svg>
            </div>
          </div>
          <p className="ba2-cap">Rénovation WC · Rouen — réalisation Fortis Rénovation</p>
        </div>
      </section>
    </>
  )
}
