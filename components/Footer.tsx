import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer {
          background: var(--dark);
          color: var(--white);
          padding: 72px 0 40px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        .footer-logo {
          font-family: 'Bodoni Moda', serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
          display: block;
        }
        .footer-logo span { color: var(--gold); }
        .footer-tagline {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 260px;
          margin-bottom: 28px;
        }
        .footer-contact a {
          display: block;
          font-size: 13px; font-weight: 600;
          color: var(--gold); letter-spacing: 0.04em;
          margin-bottom: 8px;
          transition: opacity 0.2s;
        }
        .footer-contact a:hover { opacity: 0.7; }
        .footer-col-title {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--gold); }
        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-legal {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="footer-logo">FORTIS<span>.</span></Link>
              <p className="footer-tagline">
                Entreprise de rénovation à Rouen. Maintenance immobilière et salle de bain clé en main depuis 2024.
              </p>
              <div className="footer-contact">
                <a href="tel:+33767491324">07 67 49 13 24</a>
                <a href="mailto:mbiville@fortisrenovation.fr">mbiville@fortisrenovation.fr</a>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4, display: 'block', lineHeight: 1.6 }}>
                  193 Rue du Renard<br />76000 Rouen<br />Lun–Sam 08h–19h
                </span>
              </div>
            </div>

            <div>
              <p className="footer-col-title">Services</p>
              <ul className="footer-links">
                <li><Link href="/maintenance-immobiliere-rouen">Maintenance immobilière</Link></li>
                <li><Link href="/salle-de-bain-rouen">Salle de bain</Link></li>
                <li><Link href="/douche-italienne-rouen">Douche italienne</Link></li>
                <li><Link href="/prix-renovation-salle-de-bain-rouen">Prix salle de bain</Link></li>
                <li><Link href="/renovation-salle-de-bain-cle-en-main-rouen">Clé en main</Link></li>
                <li><Link href="/salle-de-bain-senior">Salle de bain senior</Link></li>
                <li><Link href="/degat-des-eaux-rouen">Dégât des eaux</Link></li>
                <li><Link href="/devis">Devis gratuit</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Zone</p>
              <ul className="footer-links">
                <li><span>Rouen</span></li>
                <li><span>Bois-Guillaume</span></li>
                <li><span>Mont-Saint-Aignan</span></li>
                <li><span>Sotteville</span></li>
                <li><span>Grand-Quevilly</span></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Informations</p>
              <ul className="footer-links">
                <li><Link href="/a-propos">À propos</Link></li>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/politique-confidentialite">Confidentialité</Link></li>
                <li>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, lineHeight: 1.6, display: 'block' }}>
                    SIRET 937 628 428 00016<br />
                    RCS Rouen<br />
                    TVA FR47937628428
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-legal">
              © {year} Fortis Rénovation — Tous droits réservés.
            </p>
            <p className="footer-legal">
              Rouen (76000) · France
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
