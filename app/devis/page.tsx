import type { Metadata } from 'next'
import FormA from '@/components/FormA'

export const metadata: Metadata = {
  title: 'Devis gratuit — Rénovation Rouen | Fortis Rénovation',
  description: 'Demandez votre devis gratuit pour rénovation salle de bain ou maintenance immobilière à Rouen. Réponse sous 48h.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/devis' },
}

export default function DevisPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'var(--dark)', padding: '80px 0 60px', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            Devis gratuit
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
  )
}
