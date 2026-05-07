import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | Fortis Rénovation',
  robots: 'noindex',
}

export default function MentionsLegalesPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 40 }}>Mentions légales</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-soft)' }}>
            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 12 }}>Éditeur du site</h2>
              <p>Fortis Rénovation<br />
              SIRET : 937 628 428 00016<br />
              RCS Rouen<br />
              TVA intracommunautaire : FR 12 937628428<br />
              Rouen (76000), France<br />
              Téléphone : 06 00 00 00 00<br />
              Email : contact@fortis-renovation.fr</p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 12 }}>Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 12 }}>Propriété intellectuelle</h2>
              <p>L'ensemble des contenus de ce site (textes, images, graphismes) est la propriété exclusive de Fortis Rénovation, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.</p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 12 }}>Données personnelles</h2>
              <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant contact@fortis-renovation.fr.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
