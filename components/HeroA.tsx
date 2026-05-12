import Link from 'next/link'

export default function HeroA() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: var(--dark);
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; bottom: 0;
          width: 1px;
          background: var(--gold);
          opacity: 0.4;
        }
        .hero-side {
          display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          padding: 120px 64px 80px;
          position: relative;
        }
        .hero-side:hover { background: rgba(255,255,255,0.02); }
        .hero-tag {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .hero-tag::before {
          content: '';
          display: block; width: 32px; height: 1px;
          background: var(--gold);
        }
        .hero-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(38px, 4vw, 64px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .hero-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 340px;
          margin-bottom: 40px;
        }
        .hero-desc strong { color: rgba(255,255,255,0.9); font-weight: 600; }
        .hero-features {
          list-style: none;
          margin-bottom: 44px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .hero-features li {
          font-size: 13px; color: rgba(255,255,255,0.7);
          display: flex; align-items: center; gap: 10px;
        }
        .hero-features li::before {
          content: '';
          width: 16px; height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }
        .hero-divider {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 48px; height: 48px;
          background: var(--dark);
          border: 1px solid var(--gold);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
        .hero-divider span {
          font-family: 'Bodoni Moda', serif;
          color: var(--gold); font-size: 18px;
        }
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero::before { display: none; }
          .hero-side {
            padding: 80px 32px 56px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .hero-side:last-child { border-bottom: none; }
          .hero-divider { display: none; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-side">
          <p className="hero-tag">Syndics · Bailleurs · Entreprises</p>
          <h1 className="hero-title">Votre prestataire<br />technique<br />de confiance.</h1>
          <p className="hero-desc">
            Contrats de maintenance, <strong>interventions 48h</strong>, un seul interlocuteur pour toutes vos demandes.
          </p>
          <ul className="hero-features">
            <li>Devis réactif sous 48h</li>
            <li>Un interlocuteur dédié</li>
            <li>Rapport d'intervention systématique</li>
          </ul>
          <Link href="/professionnels" className="btn btn-gold">Découvrir l'offre pro</Link>
        </div>

        <div className="hero-divider">
          <span>×</span>
        </div>

        <div className="hero-side" id="particuliers">
          <p className="hero-tag">Propriétaires · Locataires</p>
          <h2 className="hero-title">Votre salle de<br />bain repensée,<br />en 3D.</h2>
          <p className="hero-desc">
            Du projet à la pose, en passant par le <strong>plan 3D inclus</strong>. Résultat garanti, sans mauvaise surprise.
          </p>
          <ul className="hero-features">
            <li>Plan 3D inclus</li>
            <li>Délais respectés, prix fixe</li>
            <li>Travaux clé en main</li>
          </ul>
          <Link href="/salle-de-bain-rouen" className="btn btn-outline-white">Voir l'offre salle de bain</Link>
        </div>
      </section>
    </>
  )
}
