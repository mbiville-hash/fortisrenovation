export default function StatsA() {
  const stats = [
    { value: '★★★★★', label: 'Avis clients Google', sub: 'Note 5/5' },
    { value: '48h', label: 'Délai de réponse', sub: 'Devis garanti' },
    { value: '1', label: 'Interlocuteur unique', sub: 'Du début à la fin' },
    { value: '3D', label: 'Plan inclus', sub: 'Visualisez avant travaux' },
  ]

  return (
    <>
      <style>{`
        .stats {
          background: var(--dark);
          padding: 0;
          border-top: 1px solid rgba(184,151,90,0.3);
          border-bottom: 1px solid rgba(184,151,90,0.3);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-col {
          padding: 40px 40px;
          display: flex; flex-direction: column;
          gap: 8px;
          border-right: 1px solid rgba(184,151,90,0.2);
          transition: background 0.2s;
        }
        .stat-col:last-child { border-right: none; }
        .stat-col:hover { background: rgba(184,151,90,0.05); }
        .stat-value {
          font-family: 'Bodoni Moda', serif;
          font-size: 36px;
          color: var(--gold);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .stat-label {
          font-size: 13px; font-weight: 600;
          color: var(--white);
          letter-spacing: 0.04em;
        }
        .stat-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-col {
            padding: 28px 24px;
            border-right: 1px solid rgba(184,151,90,0.2);
            border-bottom: 1px solid rgba(184,151,90,0.2);
          }
          .stat-col:nth-child(2n) { border-right: none; }
          .stat-col:nth-child(3), .stat-col:nth-child(4) { border-bottom: none; }
        }
      `}</style>

      <div className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-col">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
