'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 28px;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 28px;
          background: rgba(17,17,16,0.94);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 10px 34px rgba(0,0,0,0.22);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .nav.scrolled {
          background: var(--dark);
          border-color: rgba(184,151,90,0.2);
          box-shadow: 0 12px 34px rgba(0,0,0,0.32);
        }
        .nav-logo {
          font-family: 'Bodoni Moda', serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--white);
          white-space: nowrap;
        }
        .nav-logo span { color: var(--gold); }
        .nav-desktop {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 30px;
          flex: 1;
          min-width: 0;
        }
        .nav-links {
          display: flex; gap: 24px; align-items: center;
          list-style: none;
        }
        .nav-links a {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.78);
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          list-style: none;
        }
        .nav-pro {
          color: var(--gold) !important;
        }
        .nav-pro:hover { color: var(--gold-light) !important; }
        .nav-access {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0 18px;
          border: 1px solid rgba(184,151,90,0.55);
          color: var(--gold) !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase;
          white-space: nowrap;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .nav-access:hover {
          background: rgba(184,151,90,0.1);
          border-color: var(--gold);
          color: var(--gold-light) !important;
        }
        .nav-cta {
          background: var(--gold); color: var(--white) !important;
          padding: 12px 22px; font-size: 11px !important;
          white-space: nowrap;
        }
        .nav-phone {
          font-size: 13px !important;
          letter-spacing: 0.04em !important;
          color: var(--white) !important;
          white-space: nowrap;
        }
        .nav-hamburger {
          display: none;
          background: none; border: none;
          cursor: pointer; color: var(--white);
          font-size: 22px; line-height: 1;
        }
        @media (max-width: 1080px) {
          .nav-desktop { display: none; }
          .nav-hamburger { display: block; }
          .nav-mobile {
            position: fixed; top: 72px; left: 0; right: 0;
            background: var(--dark);
            padding: 24px 32px 32px;
            display: flex; flex-direction: column; gap: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            z-index: 999;
          }
          .nav-mobile a {
            font-size: 14px; font-weight: 600;
            letter-spacing: 0.1em; text-transform: uppercase;
            color: rgba(255,255,255,0.85);
          }
        }
      `}</style>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          FORTIS<span>.</span>
        </Link>

        <div className="nav-desktop">
          <ul className="nav-links">
            <li><Link href="/professionnels" className="nav-pro" aria-current={pathname === '/professionnels' ? 'page' : undefined}>Offre pro</Link></li>
            <li><Link href="/salle-de-bain-rouen" aria-current={pathname === '/salle-de-bain-rouen' ? 'page' : undefined}>Salle de bain</Link></li>
            <li><Link href="/#avis">Avis</Link></li>
          </ul>

          <ul className="nav-actions">
            <li><Link href="/espace-pro" className="nav-access" aria-current={pathname === '/espace-pro' ? 'page' : undefined}>Accès pro</Link></li>
            <li><a href="tel:+33767491324" className="nav-phone">07 67 49 13 24</a></li>
            <li><Link href="/devis" className="nav-cta btn" aria-current={pathname === '/devis' ? 'page' : undefined}>Devis gratuit</Link></li>
          </ul>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="nav-mobile">
          <Link href="/maintenance-immobiliere-rouen" onClick={() => setOpen(false)}>Maintenance immobilière</Link>
          <Link href="/degat-des-eaux-rouen" onClick={() => setOpen(false)}>Dégât des eaux</Link>
          <Link href="/salle-de-bain-rouen" onClick={() => setOpen(false)}>Salle de bain</Link>
          <Link href="/professionnels" onClick={() => setOpen(false)}>Offre pro</Link>
          <Link href="/espace-pro" onClick={() => setOpen(false)}>Accès pro</Link>
          <a href="tel:+33767491324">07 67 49 13 24</a>
          <Link href="/devis" className="btn btn-gold" onClick={() => setOpen(false)}>Devis gratuit</Link>
        </div>
      )}
    </>
  )
}
