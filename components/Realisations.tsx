import fs from 'fs'
import path from 'path'
import Image from 'next/image'

function getPhotos(): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), 'public', 'realisations'))
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
  } catch {
    return []
  }
}

export default function Realisations() {
  const photos = getPhotos()
  if (photos.length === 0) return null

  return (
    <>
      <style>{`
        .realisations { background: var(--paper); }
        .realisations-head { text-align: center; max-width: 640px; margin: 0 auto 44px; }
        .realisations-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
        }
        .realisations-head h2 { font-size: clamp(28px, 4vw, 42px); color: var(--ink); }
        .realisations-head p { color: var(--ink-soft); margin-top: 14px; font-size: 16px; }
        .realisations-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .realisation-tile {
          position: relative; aspect-ratio: 4 / 3; overflow: hidden;
          border-radius: var(--radius); background: #e7e0d4;
        }
        .realisation-tile img { object-fit: cover; transition: transform 0.6s ease; }
        .realisation-tile:hover img { transform: scale(1.05); }
        @media (max-width: 760px) {
          .realisations-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
        }
      `}</style>

      <section className="realisations">
        <div className="container">
          <div className="realisations-head">
            <p className="realisations-eyebrow">Nos réalisations</p>
            <h2>Des chantiers livrés, pas des promesses.</h2>
            <p>Quelques salles de bain et rénovations menées par Fortis Rénovation à Rouen et sa métropole.</p>
          </div>
          <div className="realisations-grid">
            {photos.map((p, i) => (
              <figure key={p} className="realisation-tile">
                <Image
                  src={`/realisations/${encodeURIComponent(p)}`}
                  alt={`Réalisation Fortis Rénovation à Rouen — salle de bain ${i + 1}`}
                  fill
                  sizes="(max-width: 760px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
