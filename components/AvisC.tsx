export default function AvisC() {
  return (
    <>
      <style>{`
        .avis { background: var(--paper); }
        .avis-inner { max-width: 640px; margin: 0 auto; text-align: center; }
        .avis-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink-faint); margin-bottom: 18px;
        }
        .avis-stars { color: var(--gold); font-size: 26px; letter-spacing: 5px; margin-bottom: 14px; }
        .avis-score {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--ink); line-height: 1.2; margin-bottom: 8px;
        }
        .avis-count { font-size: 15px; color: var(--ink-soft); margin-bottom: 32px; }
        .avis-cta {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--gold); color: var(--gold-deep);
          padding: 13px 26px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: background 0.2s, color 0.2s;
        }
        .avis-cta:hover { background: var(--gold); color: #fff; }
      `}</style>

      <section className="avis" id="avis">
        <div className="container">
          <div className="avis-inner" data-reveal>
            <p className="avis-eyebrow">Avis Google vérifiés</p>
            <div className="avis-stars">★★★★★</div>
            <p className="avis-score">Note 5/5 sur Google</p>
            <p className="avis-count">29 avis vérifiés par nos clients à Rouen et sa métropole</p>
            <a
              className="avis-cta"
              href="https://www.google.com/maps/search/?api=1&query=Fortis%20R%C3%A9novation%20Rouen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire les avis sur Google →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
