import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Maintenance & entretien',
    desc: 'Contrats annuels adaptés à votre parc. Plomberie, électricité, menuiserie, peinture — un seul prestataire, une seule facture.',
    tags: ['Contrat annuel', "Multi-corps d'état", 'Rapport mensuel'],
  },
  {
    num: '02',
    title: "Interventions d'urgence",
    desc: 'Fuite, panne, sinistre — on intervient sous 48h avec un compte rendu complet pour votre assureur.',
    tags: ['Réponse 48h', 'Compte rendu', 'Prise en charge assurance'],
  },
  {
    num: '03',
    title: 'Rénovation & mise aux normes',
    desc: "Travaux de réhabilitation, mise aux normes électriques, rénovation complète d'appartements entre deux locataires.",
    tags: ['Devis détaillé', 'Délais garantis', 'Clé en main'],
  },
]

export default function ProsA() {
  return (
    <>
      <style>{`
        .pros {
          background: var(--dark);
          color: var(--white);
        }
        .pros-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 64px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .pros-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .pros-eyebrow::before {
          content: ''; display: block;
          width: 32px; height: 1px; background: var(--gold);
        }
        .pros-heading {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.15;
        }
        .pros-cta-top {
          flex-shrink: 0;
          margin-left: 40px;
        }
        .pros-list { display: flex; flex-direction: column; gap: 0; }
        .pros-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0 40px;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s;
          margin: 0 -24px; padding: 40px 24px;
        }
        .pros-item:hover { background: rgba(255,255,255,0.02); }
        .pros-num {
          font-family: 'Bodoni Moda', serif;
          font-size: 48px;
          color: rgba(184,151,90,0.3);
          line-height: 1;
          padding-top: 4px;
        }
        .pros-content {}
        .pros-title {
          font-family: 'Bodoni Moda', serif;
          font-size: 24px;
          color: var(--white);
          margin-bottom: 12px;
        }
        .pros-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 20px;
        }
        .pros-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .pros-tag {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(184,151,90,0.3);
          padding: 5px 12px;
        }
        @media (max-width: 768px) {
          .pros-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          .pros-cta-top { margin-left: 0; }
          .pros-item { grid-template-columns: 48px 1fr; gap: 0 20px; }
          .pros-num { font-size: 32px; }
        }
      `}</style>

      <section className="pros" id="professionnels">
        <div className="container">
          <div className="pros-header">
            <div>
              <p className="pros-eyebrow">Syndics · Bailleurs · Entreprises</p>
              <h2 className="pros-heading">Ce qu'on fait<br />pour les pros.</h2>
            </div>
            <Link href="/devis" className="btn btn-gold pros-cta-top">Demander un devis</Link>
          </div>

          <div className="pros-list">
            {services.map((s) => (
              <div key={s.num} className="pros-item">
                <div className="pros-num">{s.num}</div>
                <div className="pros-content">
                  <h3 className="pros-title">{s.title}</h3>
                  <p className="pros-desc">{s.desc}</p>
                  <div className="pros-tags">
                    {s.tags.map((t) => <span key={t} className="pros-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
