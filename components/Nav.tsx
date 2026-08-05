'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Lien = { href: string; label: string }
type Groupe = { id: string; titre: string; liens: Lien[] }

/**
 * Le menu comptait seize liens affichés d'un coup, dont dix pour le seul groupe
 * « Professionnels ». Les groupes sont désormais repliés et un seul s'ouvre à la
 * fois : le panneau tient en quatre lignes, sans qu'aucune page ne disparaisse.
 */
const GROUPES: Groupe[] = [
  {
    id: 'particuliers',
    titre: 'Particuliers',
    liens: [
      { href: '/salle-de-bain-rouen', label: 'Salle de bain' },
      { href: '/douche-italienne-rouen', label: 'Douche italienne' },
      { href: '/renovation-salle-de-bain-cle-en-main-rouen', label: 'Rénovation clé en main' },
      { href: '/prix-renovation-salle-de-bain-rouen', label: 'Prix salle de bain' },
    ],
  },
  {
    id: 'professionnels',
    titre: 'Professionnels',
    liens: [
      { href: '/maintenance-immobiliere-rouen', label: 'Maintenance & dépannage' },
      { href: '/remise-en-etat-locative-rouen', label: 'Remise en état locative' },
      { href: '/maintenance-copropriete-rouen', label: 'Maintenance copropriété' },
      { href: '/plombier-rouen', label: 'Plombier & dépannage' },
      { href: '/recherche-de-fuite-rouen', label: 'Recherche de fuite' },
      { href: '/debouchage-canalisation-rouen', label: 'Débouchage canalisation' },
      { href: '/electricien-rouen', label: 'Électricien' },
      { href: '/peintre-rouen', label: 'Peintre & enduits' },
      { href: '/pose-de-sol-rouen', label: 'Pose de sols' },
    ],
  },
  {
    id: 'entreprise',
    titre: 'L’entreprise',
    liens: [
      { href: '/a-propos', label: 'À propos' },
      { href: '/#avis', label: 'Avis' },
    ],
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [groupeOuvert, setGroupeOuvert] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // À l'ouverture, déplier le groupe de la page courante pour que le visiteur
  // se situe. Aucun groupe ouvert si la page n'appartient à aucun d'eux.
  useEffect(() => {
    if (!open) return
    const g = GROUPES.find((x) => x.liens.some((l) => l.href === pathname))
    setGroupeOuvert(g ? g.id : null)
  }, [open, pathname])

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
          color: var(--dark) !important;
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
        /* En-tête de groupe : un vrai bouton, pour être atteignable au clavier. */
        .nav-acc-btn {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; gap: 18px;
          padding: 17px 0; min-height: 44px;
          background: none; border: 0; border-bottom: 1px solid rgba(255,255,255,0.08);
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
          cursor: pointer; text-align: left;
          transition: color 0.2s;
        }
        .nav-acc-btn:hover { color: var(--gold-light); }
        .nav-acc-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .nav-acc-chev {
          flex: none; font-size: 15px; line-height: 1;
          transition: transform 0.25s cubic-bezier(.16,1,.3,1);
        }
        .nav-acc-btn[aria-expanded="true"] .nav-acc-chev { transform: rotate(90deg); }
        .nav-acc-panel { display: grid; gap: 2px; padding-left: 14px; }
        .nav-acc-panel a { font-size: 12.5px; letter-spacing: 0.1em; }
        @media (prefers-reduced-motion: no-preference) {
          .nav-acc-panel { animation: navOpen .28s cubic-bezier(.16,1,.3,1) both; }
        }
        @keyframes navOpen { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        /* Entrée simple : un seul lien, un accordéon n'aurait pas de sens. */
        .nav-direct {
          display: flex; align-items: center; justify-content: space-between; gap: 18px;
          padding: 17px 0; min-height: 44px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
          transition: color 0.2s;
        }
        .nav-direct:hover, .nav-direct[aria-current="page"] { color: var(--gold-light); }
        .nav-panel-meta {
          margin-top: 24px;
          color: rgba(255,255,255,0.62);
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
            {GROUPES.map((g) => {
              const ouvert = groupeOuvert === g.id
              return (
                <div key={g.id}>
                  <button
                    type="button"
                    className="nav-acc-btn"
                    aria-expanded={ouvert}
                    aria-controls={`nav-grp-${g.id}`}
                    onClick={() => setGroupeOuvert(ouvert ? null : g.id)}
                  >
                    {g.titre}
                    <span className="nav-acc-chev" aria-hidden="true">›</span>
                  </button>
                  {ouvert && (
                    <div className="nav-acc-panel" id={`nav-grp-${g.id}`}>
                      {g.liens.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === l.href ? 'page' : undefined}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Link
              href="/guides"
              className="nav-direct"
              onClick={() => setOpen(false)}
              aria-current={pathname === '/guides' ? 'page' : undefined}
            >
              Guides &amp; outils
              <span className="nav-acc-chev" aria-hidden="true">›</span>
            </Link>
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
