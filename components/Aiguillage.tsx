import Link from 'next/link'

export default function Aiguillage() {
  return (
    <>
      <style>{`
        .aig { margin-top: 72px; background: #15140f; border-bottom: 1px solid rgba(184,151,90,0.22); }
        .aig-inner { display: flex; align-items: center; justify-content: center; gap: 16px; padding: 12px 20px; flex-wrap: wrap; }
        .aig-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.45); }
        .aig-opts { display: flex; gap: 10px; }
        .aig-opt { display: inline-flex; align-items: baseline; gap: 7px; font-size: 12px; font-weight: 600; letter-spacing: 0.03em; padding: 8px 16px; border: 1px solid rgba(184,151,90,0.4); border-radius: 2px; white-space: nowrap; transition: background 0.2s, border-color 0.2s, color 0.2s; }
        .aig-opt small { font-weight: 500; opacity: 0.7; letter-spacing: 0; }
        .aig-active { background: var(--gold); color: #fff; border-color: var(--gold); }
        .aig-active small { opacity: 0.85; }
        .aig-link { color: rgba(255,255,255,0.82); }
        .aig-link:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,151,90,0.07); }
        @media (max-width: 600px) {
          .aig-inner { gap: 9px; padding: 11px 12px; }
          .aig-label { width: 100%; text-align: center; }
          .aig-opt { font-size: 11.5px; padding: 7px 12px; }
        }
      `}</style>
      <div className="aig">
        <div className="aig-inner">
          <span className="aig-label">Vous êtes ?</span>
          <div className="aig-opts">
            <span className="aig-opt aig-active">Particulier <small>salle de bain</small></span>
            <Link href="/professionnels" className="aig-opt aig-link">Syndic &amp; pro <small>maintenance</small> →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
