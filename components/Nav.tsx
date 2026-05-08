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
          padding: 0 32px;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(17,17,16,0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: background 0.3s, box-shadow 0.3s;
        }
        .nav.scrolled {
          background: var(--dark);
          box-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }
        .nav-logo {
          font-family: 'Bodoni Moda', serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--white);
        }
        .nav-logo span { color: var(--gold); }
        .nav-links {
          display: flex; gap: 32px; align-items: center;
          list-style: none;
        }
        .nav-links a {
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-pro {
          font-size: 12px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          color: var(--gold) !important;
          border: 1px solid rgba(184,151,90,0.5);
          padding: 8px 18px;
          transition: background 0.2s, border-color 0.2s !important;
        }
        .nav-pro:hover { background: rgba(184,151,90,0.1) !important; border-color: var(--gold) !important; color: var(--gold) !important; }
        .nav-cta {
          background: var(--gold); color: var(--white) !important;
          padding: 10px 22px; font-size: 12px !important;
        }
        .nav-phone {
          font-size: 14px !important;
          letter-spacing: 0.05em !important;
          color: var(--white) !important;
        }
        .nav-hamburger {
          display: none;
          background: none; border: none;
          cursor: pointer; color: var(--white);
          font-size: 22px; line-height: 1;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-mobile {
            position: fixed; top: 68px; left: 0; right: 0;
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

        <ul className="nav-links">
          <li><Link href="/professionnels" className="nav-pro" aria-current={pathname === '/professionnels' ? 'page' : undefined}>Offre pro</Link></li>
          <li><Link href="/salle-de-bain-rouen" aria-current={pathname === '/salle-de-bain-rouen' ? 'page' : undefined}>Salle de bain</Link></li>
          <li><Link href="/#avis">Avis</Link></li>
          <li><a href="tel:+33767491324" className="nav-phone">07 67 49 13 24</a></li>
          <li><Link href="/devis" className="nav-cta btn" aria-current={pathname === '/devis' ? 'page' : undefined}>Devis gratuit</Link></li>
        </ul>

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
          <a href="tel:+33767491324">07 67 49 13 24</a>
          <Link href="/devis" className="btn btn-gold" onClick={() => setOpen(false)}>Devis gratuit</Link>
        </div>
      )}
    </>
  )
}
