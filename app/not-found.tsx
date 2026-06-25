import Link from 'next/link'
import Rings from '@/components/Rings'

export default function NotFound() {
  return (
    <main style={{ minHeight: '78vh', background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 68 }}>
      <Rings className="rings--tr" />
      <Rings className="rings--bl" />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 620 }}>
        <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(64px, 12vw, 120px)', color: 'var(--gold)', lineHeight: 1, marginBottom: 8 }}>404</p>
        <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: 16 }}>Cette page a disparu.</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, marginBottom: 36 }}>
          Le lien est peut-être erroné, ou la page a été déplacée. Pas de panique — voici par où repartir.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-gold">Retour à l’accueil</Link>
          <Link href="/salle-de-bain-rouen" className="btn btn-outline-white">Rénovation salle de bain</Link>
          <Link href="/devis" className="btn btn-outline-white">Demander un devis</Link>
        </div>
      </div>
    </main>
  )
}
