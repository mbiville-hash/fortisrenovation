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
          padding: 0 34px;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 34px;
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
        .nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
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
        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          background: var(--gold);
          color: var(--white) !important;
          padding: 0 26px;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: var(--gold-light); }
        .nav-hamburger {
          width: 44px;
          height: 44px;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.16);
          cursor: pointer;
          color: var(--white);
          transition: border-color 0.2s, background 0.2s;
        }
        .nav-hamburger:hover {
          border-color: rgba(184,151,90,0.55);
          background: rgba(255,255,255,0.03);
        }
        .nav-hamburger span {
          width: 17px;
          height: 1px;
          background: currentColor;
          opacity: 0.86;
          transition: transform 0.2s, opacity 0.2s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        .nav-panel {
          position: fixed;
          top: 72px;
          right: 24px;
          width: min(420px, calc(100vw - 48px));
          background: rgba(17,17,16,0.98);
          border: 1px solid rgba(184,151,90,0.22);
          box-shadow: 0 28px 80px rgba(0,0,0,0.42);
          padding: 28px;
          z-index: 999;
        }
        .nav-panel-links {
          display: grid;
          gap: 2px;
        }
        .nav-panel-links a {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.84);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-panel-links a:hover,
        .nav-panel-links a[aria-current="page"] {
          color: var(--gold);
        }
        .nav-panel-meta {
          margin-top: 24px;
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          line-height: 1.7;
        }
        @media (max-width: 620px) {
          .nav { padding: 0 18px; }
          .nav-cta { display: none; }
          .nav-panel {
            top: 72px;
            left: 0;
            right: 0;
            width: auto;
            border-left: 0;
            border-right: 0;
            padding: 24px;
          }
        }
      `}</style>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          FORTIS<span>.</span>
        </Link>

        <div className="nav-right">
          <Link href="/devis" className="nav-cta btn" aria-current={pathname === '/devis' ? 'page' : undefined}>Étudier mon projet</Link>
          <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-panel">
          <div className="nav-panel-links">
            <Link href="/salle-de-bain-rouen" onClick={() => setOpen(false)} aria-current={pathname === '/salle-de-bain-rouen' ? 'page' : undefined}>Salle de bain</Link>
            <Link href="/douche-italienne-rouen" onClick={() => setOpen(false)} aria-current={pathname === '/douche-italienne-rouen' ? 'page' : undefined}>Douche italienne</Link>
            <Link href="/renovation-salle-de-bain-cle-en-main-rouen" onClick={() => setOpen(false)} aria-current={pathname === '/renovation-salle-de-bain-cle-en-main-rouen' ? 'page' : undefined}>Rénovation clé en main</Link>
            <Link href="/prix-renovation-salle-de-bain-rouen" onClick={() => setOpen(false)} aria-current={pathname === '/prix-renovation-salle-de-bain-rouen' ? 'page' : undefined}>Prix salle de bain</Link>
            <Link href="/maintenance-immobiliere-rouen" onClick={() => setOpen(false)} aria-current={pathname === '/maintenance-immobiliere-rouen' ? 'page' : undefined}>Maintenance &amp; dépannage</Link>
            <Link href="/professionnels" onClick={() => setOpen(false)} aria-current={pathname === '/professionnels' ? 'page' : undefined}>Professionnels</Link>
            <Link href="/a-propos" onClick={() => setOpen(false)} aria-current={pathname === '/a-propos' ? 'page' : undefined}>À propos</Link>
            <Link href="/#avis" onClick={() => setOpen(false)}>Avis</Link>
          </div>
          <div className="nav-panel-meta">
            <a href="tel:+33767491324" onClick={() => setOpen(false)}>07 67 49 13 24</a> <br />
            Rouen & métropole normande
          </div>
        </div>
      )}
    </>
  )
}
