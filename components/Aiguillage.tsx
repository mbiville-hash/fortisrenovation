'use client'

import Link from 'next/link'

export default function Aiguillage() {
  return (
    <>
      <style>{`
        .aig {
          position: relative;
          background: var(--dark);
          border-bottom: 1px solid rgba(184,151,90,0.2);
          padding: calc(72px + 46px) 0 54px;
          overflow: hidden;
        }
        .aig-rings {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          display: flex; align-items: center; justify-content: center;
          background: radial-gradient(circle at 50% 46%, rgba(184,151,90,0.11), transparent 60%);
        }
        .aig-rings svg { width: min(720px, 92vw); height: auto; display: block; }
        .aig-rings circle { fill: none; stroke: var(--gold); }
        .aig-rings-base { transform-box: fill-box; transform-origin: center; animation: aigBreath 10s ease-in-out infinite; }
        @keyframes aigBreath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        @media (prefers-reduced-motion: reduce) { .aig-rings-base { animation: none; } }

        .aig-inner { position: relative; z-index: 1; text-align: center; }
        .aig-eye {
          font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 22px;
          display: flex; justify-content: center; align-items: center; gap: 12px;
        }
        .aig-eye::before, .aig-eye::after { content: ''; width: 28px; height: 1px; background: rgba(184,151,90,0.55); }

        .aig-box {
          display: inline-flex; align-items: stretch;
          border: 1px solid rgba(184,151,90,0.32); border-radius: 12px;
          background: rgba(21,20,15,0.55);
          backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
          overflow: hidden;
        }
        .aig-half {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 13px;
          padding: 30px 50px; color: #fff; min-width: 190px;
          transition: background 0.18s ease;
          cursor: pointer;
        }
        .aig-half:hover { background: rgba(184,151,90,0.09); }
        .aig-half svg { width: 34px; height: 34px; }
        .aig-half svg g { fill: none; stroke: var(--gold); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .aig-div { width: 1px; background: rgba(184,151,90,0.3); flex-shrink: 0; }
        .aig-lab { font-size: 16px; font-weight: 700; letter-spacing: 0.01em; display: inline-flex; align-items: center; gap: 8px; }
        .aig-arr { color: var(--gold); font-size: 17px; line-height: 1; }

        @keyframes aigIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        .aig-eye, .aig-box { animation: aigIn 0.9s cubic-bezier(.16,.84,.3,1) both; }
        .aig-eye { animation-delay: 0.1s; }
        .aig-box { animation-delay: 0.24s; }
        @media (prefers-reduced-motion: reduce) { .aig-eye, .aig-box { animation: none; } }

        @media (max-width: 560px) {
          .aig { padding: calc(72px + 20px) 0 28px; }
          .aig-eye { margin-bottom: 16px; }
          .aig-box { display: flex; width: 100%; }
          .aig-half { flex: 1; min-width: 0; padding: 17px 12px; gap: 9px; }
          .aig-half svg { width: 27px; height: 27px; }
          .aig-lab { font-size: 14px; }
        }
      `}</style>

      <section className="aig" aria-label="Vous êtes particulier ou professionnel ?">
        <div className="aig-rings" aria-hidden="true">
          <svg viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
            <g className="aig-rings-base">
              <circle r="60" strokeOpacity={0.16} />
              <circle r="112" strokeOpacity={0.12} />
              <circle r="168" strokeOpacity={0.08} />
              <circle r="200" strokeOpacity={0.05} />
            </g>
          </svg>
        </div>
        <div className="container">
          <div className="aig-inner">
            <p className="aig-eye">Vous êtes ?</p>
            <div className="aig-box">
              <a href="#decouvrir" className="aig-half" onClick={(e) => { e.preventDefault(); document.getElementById('decouvrir')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
                <svg viewBox="0 0 40 40" aria-hidden="true"><g><path d="M7 19 L20 8 L33 19" /><path d="M11 17 V32 H29 V17" /><rect x="17" y="24" width="6" height="8" /></g></svg>
                <span className="aig-lab">Particulier</span>
              </a>
              <span className="aig-div" aria-hidden="true" />
              <Link href="/professionnels" className="aig-half">
                <svg viewBox="0 0 40 40" aria-hidden="true"><g><rect x="11" y="7" width="18" height="26" /><rect x="15" y="12" width="4" height="4" /><rect x="21" y="12" width="4" height="4" /><rect x="15" y="19" width="4" height="4" /><rect x="21" y="19" width="4" height="4" /><rect x="18" y="26" width="4" height="7" /></g></svg>
                <span className="aig-lab">Syndic &amp; pro <span className="aig-arr" aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
