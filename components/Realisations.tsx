import Image from 'next/image'

const PHOTOS: { file: string; alt: string }[] = [
  { file: '03-salle-de-bain-robinetterie-doree.jpg', alt: 'Salle de bain avec robinetterie dorée — réalisation Fortis Rénovation à Rouen' },
  { file: 'dressing-sur-mesure-rouen.jpg', alt: 'Dressing sur-mesure vert sauge — réalisation Fortis Rénovation à Rouen' },
  { file: '01-salle-de-bain-meuble-led.jpg', alt: 'Salle de bain avec meuble et miroir LED — réalisation Fortis Rénovation à Rouen' },
  { file: 'renovation-salle-de-bain-douche-rouen.jpg', alt: 'Rénovation de salle de bain avec douche — réalisation Fortis Rénovation à Rouen' },
  { file: '02-wc-carrelage-vert.jpg', alt: 'WC rénové avec carrelage — réalisation Fortis Rénovation à Rouen' },
]

export default function Realisations() {
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
          position: relative; aspect-ratio: 1 / 1; overflow: hidden;
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
          <div className="realisations-head" data-reveal>
            <p className="realisations-eyebrow">Nos réalisations</p>
            <h2>Des chantiers livrés, pas des promesses.</h2>
            <p>Quelques salles de bain et rénovations menées par Fortis Rénovation à Rouen et sa métropole.</p>
          </div>
          <div className="realisations-grid">
            {PHOTOS.map((p, i) => (
              <figure key={p.file} className="realisation-tile" data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <Image
                  src={`/realisations/${encodeURIComponent(p.file)}`}
                  alt={p.alt}
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
