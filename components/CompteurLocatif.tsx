'use client'

import { useEffect, useRef, useState } from 'react'

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

/**
 * « Ce qui coûte cher, c'est le temps. »
 * Le compteur de jours sans loyer se déroule au scroll (J+0 → J+31),
 * puis la barre dorée se remplit et le chiffre se fait barrer.
 */
export default function CompteurLocatif() {
  const ref = useRef<HTMLElement>(null)
  const [p, setP] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setP(1)
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      setP(total > 0 ? clamp(-r.top / total, 0, 1) : 1)
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
        .cpl { background: var(--paper); padding: 0; }
        .cpl-sticky { position: sticky; top: 0; min-height: 85vh; display: flex; align-items: center; padding: clamp(48px, 7vw, 80px) 0; }
        .cpl-grid { display: flex; flex-wrap: wrap; align-items: center; gap: clamp(40px, 5vw, 72px); }
        .cpl-text { flex: 1 1 400px; min-width: 0; }
        .cpl-num { flex: 1 1 340px; min-width: 0; }
        .cpl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .cpl-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .cpl-title { font-family: 'Bodoni Moda', serif; font-size: clamp(30px, 3.8vw, 48px); color: var(--ink); max-width: 18ch; margin-bottom: 24px; }
        .cpl-p { font-size: 17px; line-height: 1.75; color: var(--ink); max-width: 46ch; }
        .cpl-wrap { position: relative; display: inline-block; }
        .cpl-val { display: block; font-family: 'Bodoni Moda', serif; font-size: clamp(108px, 19vw, 224px); line-height: 0.92; letter-spacing: -0.02em; color: rgba(128,101,50,0.86); white-space: nowrap; font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; }
        .cpl-strike { position: absolute; left: -3%; right: -3%; top: 50%; height: 3px; background: var(--ink); transform-origin: left; }
        .cpl-rail { display: block; position: relative; height: 2px; background: rgba(26,26,24,0.12); margin-top: 14px; }
        .cpl-bar { position: absolute; inset: 0; background: var(--gold); transform-origin: left; }
        .cpl-lbl { margin-top: 18px; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); }
        .cpl-end { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: clamp(18px, 2vw, 22px); color: var(--ink); margin-top: 14px; transition: opacity 0.6s; }
      `}</style>

      <section
        className="cpl"
        ref={ref}
        style={reduced ? undefined : { minHeight: '135vh' }}
      >
        <div className="cpl-sticky" style={reduced ? { position: 'relative', minHeight: 0 } : undefined}>
          <div className="container cpl-grid">
            <div className="cpl-text">
              <p className="cpl-eye">Vacance locative</p>
              <h2 className="cpl-title">Ce qui coûte cher, ce n&apos;est pas le devis. C&apos;est le temps.</h2>
              <p className="cpl-p">
                Un logement vide ne rapporte rien, et chaque semaine d&apos;attente s&apos;ajoute au coût des travaux.
                C&apos;est pourquoi nous chiffrons sous 48h : la décision se prend vite, le logement se reloue tôt.
                Un devis rapide vaut souvent mieux qu&apos;un devis moins cher.
              </p>
            </div>
            <div className="cpl-num">
              <div className="cpl-wrap">
                <span className="cpl-val">J+{Math.round(p * 31)}</span>
                <span
                  className="cpl-strike"
                  aria-hidden="true"
                  style={{ transform: `scaleX(${clamp((p - 0.68) / 0.24, 0, 1).toFixed(3)})` }}
                />
                <span className="cpl-rail" aria-hidden="true">
                  <span className="cpl-bar" style={{ transform: `scaleX(${p.toFixed(3)})` }} />
                </span>
              </div>
              <p className="cpl-lbl">jours sans loyer</p>
              <p className="cpl-end" style={{ opacity: p > 0.88 ? 1 : 0 }}>Nous arrêtons ce compteur.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
