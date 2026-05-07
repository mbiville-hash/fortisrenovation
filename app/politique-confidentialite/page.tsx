import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Fortis Rénovation',
  robots: 'noindex',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 40 }}>Politique de confidentialité</h1>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--ink-soft)', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p>Fortis Rénovation s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).</p>
            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 10 }}>Données collectées</h2>
              <p>Via le formulaire de contact : nom, téléphone, type de projet et message. Ces données sont utilisées uniquement pour répondre à votre demande.</p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 10 }}>Conservation</h2>
              <p>Vos données sont conservées le temps nécessaire au traitement de votre demande, au maximum 3 ans.</p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--ink)', marginBottom: 10 }}>Vos droits</h2>
              <p>Vous pouvez à tout moment accéder, rectifier ou supprimer vos données en écrivant à contact@fortis-renovation.fr.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
