import Link from 'next/link'

const offres = [
  {
    n: '01',
    t: 'Remise en état de logement locatif',
    d: 'Peinture, sols, sanitaires, petite plomberie et électricité courante entre deux locataires. Nous chiffrons dès l’état des lieux de sortie et nous calons l’intervention sur votre date de relocation.',
    href: '/remise-en-etat-locative-rouen',
    cta: 'Voir la méthode',
  },
  {
    n: '02',
    t: 'Intervention ponctuelle',
    d: 'Un WC à remplacer, une fuite sous un évier, une pièce à repeindre avant une visite. Sans contrat et sans volume minimum : une intervention, un devis, une facture.',
    href: '/professionnels',
    cta: 'Ce que nous prenons',
  },
  {
    n: '03',
    t: 'Bailleurs, gestionnaires & syndics',
    d: 'Parties communes, dépannages, dossiers de sinistre. Un interlocuteur unique, un rapport photo à chaque passage, une astreinte 24h/24 · 7j/7 pour les urgences.',
    href: '/maintenance-copropriete-rouen',
    cta: 'Voir l’offre copropriété',
  },
]

/** Bloc « Professionnels de l'immobilier » — le cœur de l'offre sur la page d'accueil. */
export default function ProLocatif() {
  return (
    <>
      <style>{`
        .prol { background: var(--paper); }
        .prol-head { max-width: 640px; margin-bottom: clamp(36px, 5vw, 52px); }
        .prol-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .prol-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .prol-title { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3.4vw, 44px); color: var(--ink); line-height: 1.15; margin-bottom: 16px; }
        .prol-sub { font-size: 16px; line-height: 1.75; color: var(--ink-soft); }

        .prol-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 18px; }
        .prol-card { position: relative; overflow: hidden; display: flex; flex-direction: column; background: var(--white); border: 1px solid rgba(184,151,90,0.22); border-radius: 2px; padding: 32px 30px 28px; transition: transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.5s, border-color 0.3s; }
        .prol-card:hover { transform: translateY(-3px); box-shadow: 0 18px 44px rgba(26,26,24,0.10); border-color: var(--gold); }
        .prol-filet { position: absolute; top: 0; left: 0; width: 36px; height: 2px; background: var(--gold); transition: width 0.7s cubic-bezier(.16,1,.3,1); }
        .prol-card:hover .prol-filet { width: 100%; }
        .prol-n { font-family: 'Bodoni Moda', serif; font-size: 15px; color: var(--gold-deep); letter-spacing: 0.08em; margin-bottom: 16px; }
        .prol-ct { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); line-height: 1.2; margin-bottom: 12px; }
        .prol-cd { font-size: 14.5px; line-height: 1.7; color: var(--ink-soft); margin-bottom: 24px; flex: 1; }
        .prol-link { font-size: 11.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-deep); display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; }
        .prol-link span { transition: transform 0.3s cubic-bezier(.16,1,.3,1); }
        .prol-card:hover .prol-link span { transform: translateX(5px); }

        .prol-foot { margin-top: 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px 32px; }
        .prol-note { font-size: 13.5px; color: var(--ink-soft); max-width: 46ch; }
      `}</style>

      <section className="prol" id="professionnels">
        <div className="container">
          <div className="prol-head" data-reveal>
            <p className="prol-eye">Professionnels de l&apos;immobilier</p>
            <h2 className="prol-title">Un lot à relouer, <br />un parc à entretenir.</h2>
            <p className="prol-sub">
              Bailleurs privés, gestionnaires locatifs et syndics : nous reprenons les logements entre
              deux locataires et nous traitons les demandes isolées, à Rouen et dans la métropole.
              Devis sous 48h, photos horodatées, une seule facture.
            </p>
          </div>

          <div className="prol-grid">
            {offres.map(({ n, t, d, href, cta }, i) => (
              <div key={n} className="prol-card" data-reveal style={{ animationDelay: `${i * 80}ms` }}>
                <span className="prol-filet" aria-hidden="true" />
                <p className="prol-n">{n}</p>
                <h3 className="prol-ct">{t}</h3>
                <p className="prol-cd">{d}</p>
                <Link href={href} className="prol-link">
                  {cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="prol-foot" data-reveal>
            <Link href="/professionnels" className="btn btn-outline">Découvrir l&apos;offre professionnels</Link>
            <p className="prol-note">
              Une urgence sur un lot&nbsp;? Astreinte 24h/24 · 7j/7, intervention en quelques heures.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
