import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <>
      <style>{`
        .fcta { display: none; }
        @media (max-width: 768px) {
          body { padding-bottom: 56px; }
          .fcta {
            display: grid; grid-template-columns: 1fr 1fr;
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
            box-shadow: 0 -4px 22px rgba(0,0,0,0.28);
          }
          .fcta a {
            display: flex; align-items: center; justify-content: center; gap: 8px;
            padding: 16px 12px; font-family: 'Montserrat', sans-serif;
            font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
            text-decoration: none;
          }
          .fcta-call { background: var(--gold); color: var(--ink); }
          .fcta-devis { background: var(--ink); color: var(--white); border-left: 1px solid rgba(184,151,90,0.4); }
        }
      `}</style>
      <div className="fcta" aria-label="Contact rapide">
        <a href="tel:+33767491324" className="fcta-call">Appeler</a>
        <Link href="/devis" className="fcta-devis">Devis gratuit</Link>
      </div>
    </>
  )
}
