'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const PHOTOS: { file: string; alt: string }[] = [
  { file: '03-salle-de-bain-robinetterie-doree.jpg', alt: 'Salle de bain avec robinetterie dorée — réalisation Fortis Rénovation à Rouen' },
  { file: 'dressing-sur-mesure-rouen.jpg', alt: 'Dressing sur-mesure vert sauge — réalisation Fortis Rénovation à Rouen' },
  { file: '01-salle-de-bain-meuble-led.jpg', alt: 'Salle de bain avec meuble et miroir LED — réalisation Fortis Rénovation à Rouen' },
  { file: 'renovation-salle-de-bain-douche-rouen.jpg', alt: 'Rénovation de salle de bain avec douche — réalisation Fortis Rénovation à Rouen' },
  { file: '02-wc-carrelage-vert.jpg', alt: 'WC rénové avec carrelage — réalisation Fortis Rénovation à Rouen' },
]

export default function Realisations() {
  const [cur, setCur] = useState(0)
  const n = PHOTOS.length
  const paused = useRef(false)
  const touchX = useRef<number | null>(null)

  const go = (d: number) => setCur((c) => (c + d + n) % n)
  const to = (i: number) => setCur(((i % n) + n) % n)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => { if (!paused.current) setCur((c) => (c + 1) % n) }, 4500)
    return () => clearInterval(t)
  }, [n])

  // décalage circulaire le plus court (pour que les voisines soient toujours -1 / +1)
  const offset = (i: number) => {
    let r = i - cur
    if (r > n / 2) r -= n
    if (r < -n / 2) r += n
    return r
  }

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <>
      <style>{`
        .realisations { background: var(--paper); overflow: hidden; }
        .realisations-head { text-align: center; max-width: 640px; margin: 0 auto 40px; }
        .realisations-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
        }
        .realisations-head h2 { font-size: clamp(28px, 4vw, 42px); color: var(--ink); }
        .realisations-head p { color: var(--ink-soft); margin-top: 14px; font-size: 16px; }

        .carousel { --card: clamp(240px, 42vw, 440px); position: relative; max-width: 940px; margin: 0 auto; }
        .car-stage { position: relative; height: var(--card); }
        .car-slide {
          position: absolute; top: 0; left: 50%; width: var(--card); height: var(--card);
          margin-left: calc(var(--card) / -2);
          border-radius: var(--radius); overflow: hidden; background: #e7e0d4;
          transition: transform 0.6s cubic-bezier(.5,.1,.1,1), opacity 0.6s ease, box-shadow 0.6s ease;
          will-change: transform, opacity;
        }
        .car-slide img { object-fit: cover; }
        .car-slide[data-pos="c"] { box-shadow: 0 26px 64px rgba(0,0,0,0.26); }
        .car-slide[data-pos="s"] { filter: brightness(0.82); cursor: pointer; }
        .car-slide[data-pos="h"] { pointer-events: none; }
        @media (prefers-reduced-motion: reduce) { .car-slide { transition: none; } }

        .car-arrow {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 30;
          width: 46px; height: 46px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(245,240,232,0.92); color: var(--ink);
          border: 1px solid rgba(184,151,90,0.55); cursor: pointer;
          font-size: 22px; line-height: 1; padding-bottom: 3px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.14);
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
          -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
        }
        .car-arrow:hover { background: var(--gold); color: #fff; border-color: var(--gold); }
        .car-arrow:active { transform: translateY(-50%) scale(0.94); }
        .car-prev { left: 4px; }
        .car-next { right: 4px; }

        .car-dots { display: flex; justify-content: center; gap: 9px; margin-top: 26px; }
        .car-dots button {
          width: 8px; height: 8px; border-radius: 50%; padding: 0; cursor: pointer;
          background: rgba(26,26,24,0.18); border: 0; transition: background 0.25s, transform 0.25s;
        }
        .car-dots button:hover { background: rgba(26,26,24,0.4); }
        .car-dots button.on { background: var(--gold); transform: scale(1.35); }

        @media (max-width: 760px) {
          .carousel { --card: clamp(220px, 70vw, 340px); }
          .car-arrow { width: 40px; height: 40px; font-size: 19px; }
        }
      `}</style>

      <section className="realisations">
        <div className="container">
          <div className="realisations-head" data-reveal>
            <p className="realisations-eyebrow">Nos réalisations</p>
            <h2>Des chantiers livrés, pas des promesses.</h2>
            <p>Quelques salles de bain et rénovations menées par Fortis Rénovation à Rouen et sa métropole.</p>
          </div>

          <div
            className="carousel"
            data-reveal
            onMouseEnter={() => { paused.current = true }}
            onMouseLeave={() => { paused.current = false }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="group"
            aria-roledescription="carrousel"
            aria-label="Réalisations Fortis Rénovation"
          >
            <button className="car-arrow car-prev" onClick={() => go(-1)} aria-label="Photo précédente">‹</button>

            <div className="car-stage">
              {PHOTOS.map((p, i) => {
                const o = offset(i)
                const abs = Math.abs(o)
                const pos = o === 0 ? 'c' : abs === 1 ? 's' : 'h'
                const scale = o === 0 ? 1 : abs === 1 ? 0.78 : 0.62
                const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0
                const shift = o === 0 ? 0 : abs === 1 ? o * 66 : o * 118
                return (
                  <figure
                    key={p.file}
                    className="car-slide"
                    data-pos={pos}
                    onClick={() => { if (abs === 1) go(o) }}
                    style={{ transform: `translateX(${shift}%) scale(${scale})`, opacity, zIndex: 10 - abs }}
                    aria-hidden={o !== 0}
                  >
                    <Image src={`/realisations/${encodeURIComponent(p.file)}`} alt={p.alt} fill sizes="(max-width: 760px) 70vw, 440px" />
                  </figure>
                )
              })}
            </div>

            <button className="car-arrow car-next" onClick={() => go(1)} aria-label="Photo suivante">›</button>
          </div>

          <div className="car-dots">
            {PHOTOS.map((_, i) => (
              <button key={i} className={i === cur ? 'on' : ''} onClick={() => to(i)} aria-label={`Aller à la photo ${i + 1}`} aria-current={i === cur} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
