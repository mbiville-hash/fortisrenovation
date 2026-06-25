'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const reviews = [
  {
    name: 'Yvette M.',
    date: 'Mars 2024',
    text: 'Équipe sérieuse et ponctuelle. La salle de bain est magnifique, exactement comme le plan 3D. Aucune mauvaise surprise sur le prix. Je recommande sans hésiter.',
    role: 'Particulière, Rouen',
  },
  {
    name: 'Julie R.',
    date: 'Janvier 2024',
    text: 'Réactivité impressionnante — devis reçu le lendemain, travaux démarrés la semaine suivante. Le 3D m\'a permis de valider les choix sans stress. Résultat impeccable.',
    role: 'Propriétaire, Bois-Guillaume',
  },
  {
    name: 'Faydja T.',
    date: 'Novembre 2023',
    text: 'Premier contact très professionnel. On nous a bien expliqué chaque étape. Le chantier était propre chaque soir. Salle de bain livrée dans les délais promis.',
    role: 'Particulière, Mont-Saint-Aignan',
  },
  {
    name: 'Jerry K.',
    date: 'Septembre 2023',
    text: 'Contrat de maintenance pour notre immeuble. Interlocuteur unique, rapports clairs, interventions rapides. Ça change de nos prestataires précédents.',
    role: 'Syndic, Rouen centre',
  },
]

const FADE_MS = 450

export default function AvisC() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const currentRef = useRef(0)
  currentRef.current = current

  const go = useCallback((next: number) => {
    if (next === currentRef.current) return
    setVisible(false)
    setTimeout(() => {
      setCurrent(next)
      setVisible(true)
    }, FADE_MS)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go((currentRef.current + 1) % reviews.length), 6000)
    return () => clearInterval(t)
  }, [go])

  const r = reviews[current]

  return (
    <>
      <style>{`
        .avis { background: var(--paper); }
        .avis-inner {
          max-width: 760px; margin: 0 auto;
          text-align: center;
        }
        .avis-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 16px;
        }
        .avis-stars {
          color: var(--gold);
          font-size: 22px; letter-spacing: 4px;
          margin-bottom: 48px;
        }
        .avis-fade {
          transition: opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease;
          will-change: opacity, transform;
        }
        .avis-quote {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(20px, 2.5vw, 28px);
          line-height: 1.55;
          color: var(--ink);
          position: relative;
          padding: 0 16px;
          min-height: 140px;
          display: flex; align-items: center; justify-content: center;
        }
        .avis-quote::before {
          content: '"';
          font-size: 80px; color: var(--gold); opacity: 0.2;
          position: absolute; top: -16px; left: 0;
          font-family: 'Bodoni Moda', serif; line-height: 1;
        }
        .avis-meta {
          margin-top: 32px;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--ink-soft);
        }
        .avis-role {
          font-size: 12px; font-weight: 400;
          color: var(--ink-faint);
          margin-top: 4px;
          letter-spacing: 0.04em;
        }
        .avis-dots {
          display: flex; justify-content: center; gap: 8px;
          margin-top: 48px;
        }
        .avis-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--ink);
          opacity: 0.15;
          border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          padding: 14px;
          background-clip: content-box;
          box-sizing: content-box;
        }
        .avis-dot.active { opacity: 1; background: var(--gold); transform: scale(1.2); }
        .avis-bottom {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(26,26,24,0.1);
          font-size: 12px; color: var(--ink-faint);
          letter-spacing: 0.06em;
        }
        @media (prefers-reduced-motion: reduce) {
          .avis-fade { transition: opacity 0.2s ease; transform: none !important; }
        }
      `}</style>

      <section className="avis" id="avis">
        <div className="container">
          <div className="avis-inner" data-reveal>
            <p className="avis-eyebrow">Avis Google vérifiés</p>
            <div className="avis-stars">★★★★★</div>

            <div
              className="avis-fade"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <blockquote className="avis-quote">
                {r.text}
              </blockquote>

              <p className="avis-meta">{r.name}</p>
              <p className="avis-role">{r.role} · {r.date}</p>
            </div>

            <div className="avis-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`avis-dot${i === current ? ' active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>

            <p className="avis-bottom">Note 5/5 · 25 avis · Google Maps</p>
          </div>
        </div>
      </section>
    </>
  )
}
