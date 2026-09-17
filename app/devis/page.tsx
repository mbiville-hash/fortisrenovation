import type { Metadata } from 'next'
import FormA from '@/components/FormA'
import { BASE_SCHEMA } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Devis gratuit — Dépannage et travaux à Rouen',
  description: 'Plomberie, électricité, peinture, carrelage, sols, remise en état locative à Rouen. Du dépannage au chantier complet. Réponse sous 48h, devis gratuit.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/devis' },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Devis gratuit — Fortis Rénovation',
  description: 'Dépannage et travaux à Rouen : plomberie, électricité, peinture, carrelage, sols. Réponse sous 48h.',
  url: 'https://www.fortisrenovation.fr/devis',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Fortis Rénovation',
    telephone: '+33767491324',
    email: 'mbiville@fortisrenovation.fr',
    address: BASE_SCHEMA.address,
  },
}

export default function DevisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <main style={{ paddingTop: 68 }}>
        <section style={{ background: 'var(--dark)', padding: '80px 0 60px', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Devis gratuit
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, marginBottom: 16 }}>
              Dites-nous ce qu’il vous faut.
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
              D’une fuite à réparer à un chantier complet. Nous vous répondons sous 48h,
              gratuitement et sans engagement. Pour un dépannage urgent, appelez-nous :
              nous intervenons en quelques heures.
            </p>
          </div>
        </section>
        <FormA />
        <section style={{ background: 'var(--paper)', padding: '64px 0' }}>
          <div className="container" data-reveal style={{ maxWidth: 880 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: 14 }}>Nous trouver</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(22px,2.6vw,30px)', marginBottom: 8 }}>193C Rue du Renard, 76000 Rouen</h2>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 24 }}>Rouen & métropole normande · Astreinte dépannage 24h/24, 7j/7</p>
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '0.5px solid rgba(26,26,24,0.15)' }}>
              <iframe
                src="https://www.google.com/maps?q=193C+Rue+du+Renard,+76000+Rouen&output=embed"
                width="100%"
                height="340"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fortis Rénovation — 193C Rue du Renard, 76000 Rouen"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
