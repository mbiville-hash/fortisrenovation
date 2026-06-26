export default function ReactiviteTimeline() {
  return (
    <section style={{ background: 'var(--dark)', color: 'white', padding: '84px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .rtl-head { text-align: center; margin-bottom: 52px; }
        .rtl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .rtl-title { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 3vw, 40px); color: #fff; }
        .rtl-track { position: relative; display: flex; justify-content: space-between; gap: 12px; max-width: 760px; margin: 0 auto; }
        .rtl-line { position: absolute; left: 17%; right: 17%; top: 44px; height: 2px; transform: translateY(-50%); background: rgba(184,151,90,0.22); overflow: hidden; border-radius: 2px; }
        .rtl-line::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, var(--gold-light), transparent); background-size: 42% 100%; background-repeat: no-repeat; animation: rtlFlow 2.6s linear infinite; }
        .rtl-step { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .rtl-ic { width: 88px; height: 88px; border-radius: 50%; background: #15140f; border: 1px solid rgba(184,151,90,0.35); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .rtl-ic svg { width: 70px; height: 64px; display: block; overflow: visible; }
        .rtl-t { font-size: 15px; font-weight: 600; color: #fff; }
        .rtl-s { font-size: 12.5px; color: rgba(255,255,255,0.55); margin-top: 5px; max-width: 170px; line-height: 1.5; }
        .an-phone, .an-truck, .an-wrench, .rtl-whl { transform-box: fill-box; transform-origin: center; }
        .an-phone { animation: rtlBuzz 2.2s ease-in-out infinite; }
        .rtl-wv { opacity: 0; transform-box: fill-box; transform-origin: left center; }
        .rtl-wv1 { animation: rtlWave 2.2s ease-out infinite; }
        .rtl-wv2 { animation: rtlWave 2.2s ease-out 0.25s infinite; }
        .an-truck { animation: rtlBob 1.7s ease-in-out infinite; }
        .rtl-whl { animation: rtlSpin 1.1s linear infinite; }
        .rtl-gy { animation: rtlBeac 1s ease-in-out infinite; }
        .rtl-ray { animation: rtlRay 1s ease-in-out infinite; }
        .an-wrench { animation: rtlTurn 2.4s ease-in-out infinite; }
        @keyframes rtlBuzz { 0%,18%,100% { transform: translateX(0) rotate(0); } 3%,13% { transform: translateX(-1.4px) rotate(-6deg); } 8% { transform: translateX(1.4px) rotate(6deg); } }
        @keyframes rtlWave { 0% { opacity: 0; transform: scale(.55); } 30% { opacity: .9; } 100% { opacity: 0; transform: scale(1.05); } }
        @keyframes rtlBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2.5px); } }
        @keyframes rtlSpin { to { transform: rotate(360deg); } }
        @keyframes rtlBeac { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
        @keyframes rtlRay { 0%,100% { opacity: .9; } 50% { opacity: 0; } }
        @keyframes rtlTurn { 0%,100% { transform: rotate(-13deg); } 50% { transform: rotate(13deg); } }
        @keyframes rtlFlow { 0% { background-position: -42% 0; } 100% { background-position: 142% 0; } }
        @media (prefers-reduced-motion: reduce) { .an-phone, .rtl-wv, .an-truck, .rtl-whl, .rtl-gy, .rtl-ray, .an-wrench, .rtl-line::after { animation: none !important; } .rtl-wv { opacity: .6; } }
        @media (max-width: 600px) { .rtl-ic { width: 74px; height: 74px; } .rtl-ic svg { width: 58px; height: 54px; } .rtl-line { top: 37px; } .rtl-s { font-size: 12px; } }
      `}</style>
      <div className="container">
        <div className="rtl-head">
          <p className="rtl-eye">Réactivité</p>
          <h2 className="rtl-title">De l'appel à la réparation.</h2>
        </div>
        <div className="rtl-track">
          <div className="rtl-line" />

          <div className="rtl-step">
            <div className="rtl-ic">
              <svg viewBox="0 0 90 80" aria-hidden="true">
                <g className="an-phone" stroke="var(--gold)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="22" y="16" width="24" height="48" rx="4" /><line x1="30" y1="23" x2="38" y2="23" /><line x1="31" y1="57" x2="37" y2="57" />
                </g>
                <g stroke="var(--gold-light)" strokeWidth="2.4" fill="none" strokeLinecap="round">
                  <path className="rtl-wv rtl-wv1" d="M52 30 a12 12 0 0 1 0 22" /><path className="rtl-wv rtl-wv2" d="M58 24 a19 19 0 0 1 0 34" />
                </g>
              </svg>
            </div>
            <p className="rtl-t">Vous appelez</p>
            <p className="rtl-s">Astreinte 24/7</p>
          </div>

          <div className="rtl-step">
            <div className="rtl-ic">
              <svg viewBox="0 0 96 80" aria-hidden="true">
                <g className="an-truck" stroke="var(--gold)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="10" y="30" width="40" height="26" rx="2" /><path d="M50 36 h14 l8 9 v11 h-22 z" /><line x1="57" y1="45" x2="64" y2="45" />
                  <g className="rtl-whl"><circle cx="22" cy="58" r="5" /><line x1="22" y1="58" x2="22" y2="54" /></g>
                  <g className="rtl-whl"><circle cx="58" cy="58" r="5" /><line x1="58" y1="58" x2="58" y2="54" /></g>
                  <rect x="22" y="26.5" width="8" height="3.5" rx="1.2" fill="var(--gold)" stroke="none" />
                  <path className="rtl-gy" d="M23.5 26.7 a2.6 2.6 0 0 1 5 0 z" fill="var(--gold-light)" stroke="none" />
                  <line className="rtl-ray" x1="20" y1="24" x2="17.5" y2="22.5" stroke="var(--gold-light)" strokeWidth="1.8" />
                  <line className="rtl-ray" x1="30" y1="24" x2="32.5" y2="22.5" stroke="var(--gold-light)" strokeWidth="1.8" />
                </g>
              </svg>
            </div>
            <p className="rtl-t">Nous intervenons</p>
            <p className="rtl-s">Sous 48h, urgence en quelques heures</p>
          </div>

          <div className="rtl-step">
            <div className="rtl-ic">
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <g className="an-wrench" stroke="var(--gold)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M58 18 a11 11 0 0 0 -13.8 14.2 l-19 19 a3.8 3.8 0 0 0 5.4 5.4 l19 -19 a11 11 0 0 0 14.2 -13.8 l-7 7 -6.2 -1.6 -1.6 -6.2 z" />
                </g>
              </svg>
            </div>
            <p className="rtl-t">Réparé</p>
            <p className="rtl-s">Rapport écrit sous 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
