import Rings from '@/components/Rings'

const steps: [string, string, string][] = [
  ['01', 'Contact', 'Un appel, nous cernons votre besoin.'],
  ['02', 'Devis', 'Un chiffrage clair et précis, sans engagement.'],
  ['03', 'Intervention', 'Nous planifions et intervenons proprement.'],
  ['04', 'Rapport', 'Compte-rendu écrit et photos à chaque passage.'],
  ['05', 'Bilan', 'Un interlocuteur dédié, un suivi régulier.'],
]

export default function MethodePro() {
  return (
    <section style={{ background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden', padding: '84px 0' }}>
      <Rings className="rings--bl" />
      <style>{`
        .mt-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .mt-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .mt-track { position: relative; display: flex; gap: 14px; margin-top: 8px; }
        .mt-line { position: absolute; top: 27px; left: 9%; right: 9%; height: 1px; background: rgba(184,151,90,0.3); z-index: 0; }
        .mt-step { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .mt-num { width: 54px; height: 54px; border-radius: 50%; border: 1px solid var(--gold); background: #15140f; color: var(--gold-light); font-family: 'Bodoni Moda', serif; font-size: 22px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .mt-t { font-family: 'Bodoni Moda', serif; font-size: 17px; color: #fff; margin-bottom: 9px; line-height: 1.25; }
        .mt-d { font-size: 13px; color: rgba(255,255,255,0.62); line-height: 1.6; max-width: 185px; }
        @media (max-width: 760px) {
          .mt-track { flex-direction: column; gap: 26px; }
          .mt-line { display: none; }
          .mt-step { flex-direction: row; text-align: left; gap: 18px; align-items: flex-start; }
          .mt-num { margin-bottom: 0; flex-shrink: 0; width: 48px; height: 48px; font-size: 19px; }
          .mt-d { max-width: none; }
        }
      `}</style>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="mt-eye">Notre méthode</p>
        <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 40, color: 'white' }}>
          Simple, lisible, sans surprise.
        </h2>
        <div className="mt-track">
          <div className="mt-line" />
          {steps.map(([n, t, d]) => (
            <div key={n} className="mt-step" data-reveal>
              <div className="mt-num">{n}</div>
              <div>
                <div className="mt-t">{t}</div>
                <p className="mt-d">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
