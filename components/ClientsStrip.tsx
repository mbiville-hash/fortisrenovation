export default function ClientsStrip() {
  const clients = ['Foncia', 'Citya', 'Oxia', 'Nexity', 'Seine ADB']

  return (
    <>
      <style>{`
        .clients {
          background: var(--paper);
          padding: 40px 0;
          border-bottom: 1px solid rgba(26,26,24,0.08);
        }
        .clients-label {
          text-align: center;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 28px;
        }
        .clients-logos {
          display: flex;
          align-items: center; justify-content: center;
          gap: 56px;
          flex-wrap: wrap;
        }
        .client-logo {
          font-family: 'Bodoni Moda', serif;
          font-size: 15px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .client-logo:hover { opacity: 0.8; }
        @media (max-width: 600px) {
          .clients-logos { gap: 32px; }
        }
      `}</style>

      <div className="clients">
        <div className="container">
          <p className="clients-label">Ils nous font confiance</p>
          <div className="clients-logos" data-reveal>
            {clients.map((c) => (
              <span key={c} className="client-logo">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
