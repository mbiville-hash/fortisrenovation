'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PartB() {
  return (
    <>
      <style>{`
        .part {
          background: var(--paper);
        }
        .part-inner {
          background: var(--dark);
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
          overflow: hidden;
        }
        .part-img {
          position: relative;
          overflow: hidden;
          min-height: 400px;
        }

        .part-copy {
          padding: 72px 64px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .part-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .part-eyebrow::before {
          content: ''; display: block;
          width: 32px; height: 1px; background: var(--gold);
        }
        .part-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(28px, 3vw, 44px);
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .part-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          margin-bottom: 32px;
        }
        .part-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(184,151,90,0.12);
          border: 1px solid rgba(184,151,90,0.3);
          padding: 12px 20px;
          margin-bottom: 36px;
        }
        .part-badge-icon {
          font-size: 18px; color: var(--gold);
        }
        .part-badge-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold);
        }
        .part-steps {
          list-style: none; margin-bottom: 40px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .part-steps li {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          display: flex; align-items: flex-start; gap: 12px;
          counter-increment: step;
        }
        .part-step-n {
          font-family: 'Bodoni Moda', serif;
          font-size: 18px; color: var(--gold);
          width: 24px; flex-shrink: 0; line-height: 1.3;
        }
        .part-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .part-inner { grid-template-columns: 1fr; }
          .part-img { min-height: 280px; }
          .part-copy { padding: 48px 32px; }
        }
      `}</style>

      <section className="part" id="salle-de-bain">
        <div className="container">
          <div className="part-inner">
            <div className="part-img">
              <Image
                src="/salle-de-bain-3d.jpg"
                alt="Plan 3D salle de bain — Fortis Rénovation"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => {}}
              />
            </div>

            <div className="part-copy">
              <p className="part-eyebrow">Particuliers</p>
              <h2 className="part-title">Votre salle de bain<br />en 3D, avant<br />les travaux.</h2>
              <div className="part-badge">
                <span className="part-badge-icon">◈</span>
                <span className="part-badge-text">Plan 3D inclus</span>
              </div>
              <ol className="part-steps">
                {[
                  ['1.', 'On visite et on mesure — gratuitement'],
                  ['2.', 'On vous envoie le plan 3D sous 48h'],
                  ['3.', 'Vous validez, on commence'],
                  ['4.', 'Remise des clés, travaux garantis'],
                ].map(([n, t]) => (
                  <li key={n}>
                    <span className="part-step-n">{n}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
              <div className="part-actions">
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
