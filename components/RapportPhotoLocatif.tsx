import Rings from '@/components/Rings'

const cliches = [
  { h: '09:12', l: 'avant' },
  { h: '14:05', l: 'pendant' },
  { h: '17:38', l: 'après' },
]

const points = [
  'Des photos datées : avant, pendant, après.',
  'Envoyées à chaque étape, sans que vous ayez à les demander.',
  'Un rapport transmissible au propriétaire tel quel.',
]

/** Section « Compte rendu » — la maquette du rapport d'intervention s'anime en boucle. */
export default function RapportPhotoLocatif() {
  return (
    <>
      <style>{`
        .rpl { background: var(--dark); color: var(--white); padding: clamp(72px, 10vw, 120px) 0; position: relative; overflow: hidden; }
        .rpl .container { position: relative; z-index: 1; display: flex; flex-wrap: wrap; align-items: center; gap: clamp(48px, 6vw, 88px); }
        .rpl-text { flex: 1 1 400px; min-width: 0; }
        .rpl-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .rpl-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .rpl-title { font-family: 'Bodoni Moda', serif; font-size: clamp(30px, 3.6vw, 46px); max-width: 16ch; margin-bottom: 30px; }
        .rpl-pts { display: flex; flex-direction: column; gap: 16px; }
        .rpl-pt { display: flex; gap: 14px; font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.78); max-width: 52ch; }
        .rpl-dia { color: var(--gold); font-size: 12px; line-height: 2; flex: none; }

        .rpl-side { flex: 1 1 380px; min-width: 0; display: flex; justify-content: center; }
        .rpl-doc { width: min(520px, 100%); background: #f9f5ec; border-radius: 2px; padding: 26px 26px 20px; box-shadow: 0 40px 90px rgba(0,0,0,0.45); }
        .rpl-dochead { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .rpl-mark { font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 16px; letter-spacing: 0.04em; color: var(--ink); }
        .rpl-mark span { color: var(--gold); }
        .rpl-kicker { font-size: 9px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-soft); }
        .rpl-hr { height: 1px; background: rgba(26,26,24,0.12); margin: 16px 0 18px; }
        .rpl-shots { display: flex; gap: 10px; }
        .rpl-shot { flex: 1 1 0; min-width: 0; }
        .rpl-frame { aspect-ratio: 4 / 3; border: 1px solid rgba(184,151,90,0.5); background: rgba(184,151,90,0.12); position: relative; }
        .rpl-frame::before { content: ''; position: absolute; inset: 4px; border: 1px solid rgba(184,151,90,0.35); }
        .rpl-frame span { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(128,101,50,0.6); font-size: 12px; }
        .rpl-time { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; color: rgba(26,26,24,0.75); margin-top: 7px; }
        .rpl-bars { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
        .rpl-bar { display: block; height: 5px; background: rgba(26,26,24,0.13); position: relative; overflow: hidden; transform-origin: left; }
        .rpl-bar::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(184,151,90,0.4), transparent); background-size: 42% 100%; background-repeat: no-repeat; }
        .rpl-docfoot { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .rpl-docfoot span:first-child { font-size: 9px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
        .rpl-seal { color: var(--gold-deep); font-size: 11px; display: inline-block; }

        @media (prefers-reduced-motion: no-preference) {
          .rpl-frame { animation: rplFlash 5.2s ease-in-out infinite; }
          .rpl-shot:nth-child(2) .rpl-frame { animation-delay: 1s; }
          .rpl-shot:nth-child(3) .rpl-frame { animation-delay: 2s; }
          .rpl-frame span { animation: rplDia 5.2s ease-in-out infinite; }
          .rpl-shot:nth-child(2) .rpl-frame span { animation-delay: 1s; }
          .rpl-shot:nth-child(3) .rpl-frame span { animation-delay: 2s; }
          .rpl-shot { animation: rplPop 0.68s cubic-bezier(.16,1,.3,1) both; }
          .rpl-shot:nth-child(2) { animation-delay: 0.24s; }
          .rpl-shot:nth-child(3) { animation-delay: 0.48s; }
          .rpl-bar { animation: rplGrow 1s cubic-bezier(.16,1,.3,1) 0.85s both; }
          .rpl-bar:nth-child(2) { animation-delay: 1s; }
          .rpl-bar::after { animation: rplFlow 3.4s linear infinite; }
          .rpl-bar:nth-child(2)::after { animation-delay: 1.2s; }
          .rpl-seal { animation: rplTurn 14s linear infinite; }
        }
        @keyframes rplFlash { 0%, 9%, 100% { background-color: rgba(184,151,90,0.12); box-shadow: 0 0 0 rgba(184,151,90,0); } 3.5% { background-color: rgba(184,151,90,0.36); box-shadow: 0 0 16px rgba(184,151,90,0.3); } }
        @keyframes rplDia { 0%, 9%, 100% { opacity: 0.55; transform: scale(1); } 3.5% { opacity: 1; transform: scale(1.3); } }
        @keyframes rplPop { from { opacity: 0; transform: scale(.82) translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes rplGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes rplFlow { from { background-position: -42% 0; } to { background-position: 142% 0; } }
        @keyframes rplTurn { to { transform: rotate(360deg); } }
      `}</style>

      <section className="rpl">
        <Rings className="rings--br rings--lg" />
        <div className="container">
          <div className="rpl-text">
            <p className="rpl-eye">Compte rendu</p>
            <h2 className="rpl-title">Le propriétaire voit ce qui a été fait.</h2>
            <div className="rpl-pts">
              {points.map((t) => (
                <p key={t} className="rpl-pt" data-reveal>
                  <span className="rpl-dia" aria-hidden="true">◈</span>
                  <span>{t}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="rpl-side">
            <div className="rpl-doc" aria-hidden="true">
              <div className="rpl-dochead">
                <span className="rpl-mark">FORTIS<span>.</span></span>
                <span className="rpl-kicker">Rapport d&apos;intervention</span>
              </div>
              <div className="rpl-hr" />
              <div className="rpl-shots">
                {cliches.map(({ h, l }) => (
                  <div key={l} className="rpl-shot">
                    <div className="rpl-frame"><span>◈</span></div>
                    <p className="rpl-time">{h} · {l}</p>
                  </div>
                ))}
              </div>
              <div className="rpl-bars">
                <span className="rpl-bar" style={{ width: '92%' }} />
                <span className="rpl-bar" style={{ width: '64%' }} />
              </div>
              <div className="rpl-hr" />
              <div className="rpl-docfoot">
                <span>Transmis à la remise des clés</span>
                <span className="rpl-seal">◈</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
