import Link from 'next/link'

export default function Aiguillage() {
  return (
    <>
      <style>{`
        .aig { margin-top: 72px; background: #15140f; border-bottom: 1px solid rgba(184,151,90,0.22); }
        .aig-split { display: flex; }
        .aig-half {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 12px;
          padding: 18px 18px; color: #fff; transition: background 0.15s ease;
        }
        .aig-half:first-child { border-right: 1px solid rgba(184,151,90,0.3); }
        .aig-half:hover { background: rgba(184,151,90,0.08); }
        .aig-half svg { width: 28px; height: 28px; flex-shrink: 0; }
        .aig-half svg g { fill: none; stroke: var(--gold); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .aig-lab { font-size: 15px; font-weight: 700; letter-spacing: 0.01em; }
        .aig-arr { color: var(--gold); font-size: 17px; line-height: 1; }
        @media (max-width: 560px) {
          .aig-half { padding: 14px 10px; gap: 8px; }
          .aig-lab { font-size: 13.5px; }
          .aig-half svg { width: 23px; height: 23px; }
        }
      `}</style>
      <div className="aig">
        <div className="container">
          <div className="aig-split">
            <Link href="/salle-de-bain-rouen" className="aig-half">
              <svg viewBox="0 0 40 40" aria-hidden="true"><g><path d="M7 19 L20 8 L33 19" /><path d="M11 17 V32 H29 V17" /><rect x="17" y="24" width="6" height="8" /></g></svg>
              <span className="aig-lab">Particulier</span>
            </Link>
            <Link href="/professionnels" className="aig-half">
              <svg viewBox="0 0 40 40" aria-hidden="true"><g><rect x="11" y="7" width="18" height="26" /><rect x="15" y="12" width="4" height="4" /><rect x="21" y="12" width="4" height="4" /><rect x="15" y="19" width="4" height="4" /><rect x="21" y="19" width="4" height="4" /><rect x="18" y="26" width="4" height="7" /></g></svg>
              <span className="aig-lab">Syndic &amp; pro</span>
              <span className="aig-arr" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
