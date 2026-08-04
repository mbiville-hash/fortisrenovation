'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const cas = [
  {
    n: '01',
    label: 'Dégât des eaux',
    avant: {
      src: '/avant-apres/degat-des-eaux-avant.jpg',
      alt: 'Angle de pièce avant travaux à Rouen — plinthe gonflée et enduit décollé après une infiltration',
    },
    apres: {
      src: '/avant-apres/degat-des-eaux-apres.jpg',
      alt: 'Le même angle après remise en état — mur repris et repeint, sol et plinthe neufs',
    },
  },
  {
    n: '02',
    label: 'Regard de cave',
    avant: {
      src: '/avant-apres/regard-cave-avant.jpg',
      alt: 'Regard de cave avant intervention — tampon métallique corrodé et descellé',
    },
    apres: {
      src: '/avant-apres/regard-cave-apres.jpg',
      alt: 'Regard de cave après intervention — tampon neuf reposé et scellé au mortier',
    },
  },
]

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

export default function AvantApresLocatif() {
  const [pos, setPos] = useState(50)
  const [actif, setActif] = useState(0)
  const frame = useRef<HTMLDivElement>(null)
  const drag = useRef(false)

  const move = useCallback((clientX: number) => {
    const el = frame.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos(clamp(((clientX - r.left) / r.width) * 100, 0, 100))
  }, [])

  // Petit clin d'œil à l'entrée : la poignée part de la droite et revient au centre.
  useEffect(() => {
    const el = frame.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let timer: ReturnType<typeof setTimeout>
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          io.disconnect()
          setPos(84)
          timer = setTimeout(() => {
            const step = () => {
              setPos((p) => {
                const d = 50 - p
                if (Math.abs(d) < 0.4) return 50
                raf = requestAnimationFrame(step)
                return p + d * 0.09
              })
            }
            raf = requestAnimationFrame(step)
          }, 450)
        })
      },
      { threshold: 0.35 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])

  const c = cas[actif]

  return (
    <>
      <style>{`
        .aal { background: var(--dark); color: var(--white); padding: clamp(72px, 10vw, 120px) 0; }
        .aal-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .aal-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .aal-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3vw, 44px); max-width: 22ch; margin-bottom: clamp(36px, 5vw, 52px); }
        .aal-frame { position: relative; width: 100%; max-width: 480px; margin: 0 auto; aspect-ratio: 3 / 4; overflow: hidden; border-radius: 2px; border: 1px solid rgba(255,255,255,0.1); background: #1a1a18; touch-action: none; user-select: none; }
        .aal-layer { position: absolute; inset: 0; }
        .aal-badge { position: absolute; top: 14px; z-index: 5; pointer-events: none; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; padding: 6px 10px; border-radius: 2px; }
        .aal-handle { position: absolute; top: 0; bottom: 0; width: 0; z-index: 6; }
        .aal-handle::before { content: ''; position: absolute; top: 0; bottom: 0; left: -0.5px; width: 1px; background: var(--gold); box-shadow: 0 0 16px rgba(184,151,90,0.55); }
        .aal-grab { position: absolute; top: 0; bottom: 0; left: -22px; width: 44px; cursor: ew-resize; touch-action: none; }
        .aal-knob { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 46px; height: 46px; border-radius: 2px; background: rgba(17,17,16,0.78); border: 1px solid var(--gold); color: var(--gold); font-size: 16px; display: flex; align-items: center; justify-content: center; gap: 5px; cursor: ew-resize; padding: 0; }
        .aal-knob:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        .aal-hint { text-align: center; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.66); margin: 16px auto 22px; }
        .aal-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .aal-tab { flex: 0 1 240px; min-width: 160px; display: flex; align-items: center; gap: 14px; padding: 13px 18px; background: transparent; border: 1px solid rgba(255,255,255,0.16); border-radius: 2px; color: rgba(255,255,255,0.65); cursor: pointer; transition: border-color 0.3s, background 0.3s, color 0.3s; font-family: 'Montserrat', sans-serif; }
        .aal-tab[aria-pressed="true"] { background: rgba(184,151,90,0.12); border-color: var(--gold); color: #fff; }
        .aal-tab:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        .aal-tab-n { font-family: 'Bodoni Moda', serif; font-size: 20px; color: var(--gold); line-height: 1; }
        .aal-tab-l { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
      `}</style>

      <section className="aal">
        <div className="container">
          <p className="aal-eye">Avant · Après</p>
          <h2 className="aal-title">Des chantiers livrés, pas des promesses.</h2>

          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div
              className="aal-frame"
              ref={frame}
              onPointerDown={(e) => {
                drag.current = true
                e.currentTarget.setPointerCapture?.(e.pointerId)
                move(e.clientX)
              }}
              onPointerMove={(e) => { if (drag.current) move(e.clientX) }}
              onPointerUp={() => { drag.current = false }}
              onPointerCancel={() => { drag.current = false }}
            >
              <div className="aal-layer">
                <Image src={c.avant.src} alt={c.avant.alt} fill sizes="(max-width: 768px) 92vw, 480px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="aal-layer" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
                <Image src={c.apres.src} alt={c.apres.alt} fill sizes="(max-width: 768px) 92vw, 480px" style={{ objectFit: 'cover' }} />
              </div>

              <span className="aal-badge" style={{ left: 14, color: 'rgba(255,255,255,0.85)', background: 'rgba(17,17,16,0.55)', border: '1px solid rgba(255,255,255,0.14)' }}>Avant</span>
              <span className="aal-badge" style={{ right: 14, color: 'var(--gold-light)', background: 'rgba(17,17,16,0.55)', border: '1px solid rgba(184,151,90,0.4)' }}>Après</span>

              <div className="aal-handle" style={{ left: `${pos}%` }}>
                <div className="aal-grab">
                  <button
                    type="button"
                    className="aal-knob"
                    role="slider"
                    aria-label="Comparer avant et après — flèches gauche et droite au clavier"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(pos)}
                    onKeyDown={(e) => {
                      const d = e.shiftKey ? 10 : 3
                      if (e.key === 'ArrowLeft') { e.preventDefault(); setPos((p) => clamp(p - d, 0, 100)) }
                      else if (e.key === 'ArrowRight') { e.preventDefault(); setPos((p) => clamp(p + d, 0, 100)) }
                      else if (e.key === 'Home') { e.preventDefault(); setPos(0) }
                      else if (e.key === 'End') { e.preventDefault(); setPos(100) }
                    }}
                  >
                    <span aria-hidden="true">‹</span>
                    <span aria-hidden="true">›</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="aal-hint">Faites glisser pour comparer</p>

            <div className="aal-tabs">
              {cas.map(({ n, label }, i) => (
                <button
                  key={n}
                  type="button"
                  className="aal-tab"
                  aria-pressed={i === actif}
                  onClick={() => { setActif(i); setPos(50) }}
                >
                  <span className="aal-tab-n">{n}</span>
                  <span className="aal-tab-l">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
