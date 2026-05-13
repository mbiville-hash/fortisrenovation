import type { Metadata } from 'next'
import FormA from '@/components/FormA'
import { BASE_SCHEMA } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Étude de projet — Rénovation Rouen | Fortis Rénovation',
  description: 'Présentez votre projet de salle de bain ou maintenance immobilière à Rouen. Réponse claire sous 48h. Syndics, bailleurs, particuliers.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/devis' },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Étude de projet — Fortis Rénovation',
  description: 'Présentez votre projet de rénovation salle de bain ou maintenance immobilière à Rouen. Réponse sous 48h.',
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
              Étude de projet
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, marginBottom: 16 }}>
              Décrivez-nous votre projet.
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
              On vous répond sous 48h, gratuitement et sans engagement.
            </p>
          </div>
        </section>
        <FormA />
      </main>
    </>
  )
}
