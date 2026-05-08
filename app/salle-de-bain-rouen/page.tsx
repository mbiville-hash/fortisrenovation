import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rénovation Salle de Bain Rouen — Plan 3D inclus | Fortis Rénovation',
  description: 'Rénovation complète de salle de bain à Rouen. Plan 3D inclus, devis sous 48h, prix fixe. Particuliers et propriétaires. Travaux clé en main.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
  openGraph: {
    title: 'Rénovation Salle de Bain Rouen — Plan 3D inclus',
    description: 'Rénovation complète de salle de bain à Rouen. Plan 3D inclus, devis sous 48h, prix fixe.',
    url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

export default function SalleDeBainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Rénovation salle de bain Rouen',
        'Rénovation complète de salle de bain à Rouen. Plan 3D inclus, devis sous 48h, prix fixe.',
        '/salle-de-bain-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Rénovation salle de bain Rouen', url: 'https://www.fortisrenovation.fr/salle-de-bain-rouen' },
      ]))}} />
      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24 }}>
                Particuliers · Rouen & métropole
              </p>
              <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, marginBottom: 20 }}>
                Rénovation salle de bain à Rouen.
              </h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 16 }}>
                Du projet à la pose, on s'occupe de tout. Et on commence par vous offrir le <strong style={{ color: 'white' }}>plan 3D</strong> de votre future salle de bain.
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
                Prix fixe · Délais respectés · Travaux garantis
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>
                Fortis Rénovation · 193 Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
                <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
              </div>
            </div>
            <div style={{ position: 'relative', height: 380, borderRadius: 2, overflow: 'hidden' }}>
              <Image
                src="/salle-de-bain-3d.jpg"
                alt="Rénovation salle de bain Rouen — plan 3D Fortis Rénovation"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Steps */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, textAlign: 'center', marginBottom: 56 }}>
              Comment ça se passe ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
              {[
                ['1', 'Visite gratuite', "On vient mesurer et comprendre votre projet. Pas de frais, pas d'engagement."],
                ['2', 'Plan 3D sous 48h', 'Vous recevez la visualisation 3D de votre future salle de bain. Modifiable selon vos envies.'],
                ['3', 'Devis fixe', 'Un devis détaillé, sans surprise. Le prix signé est le prix final.'],
                ['4', 'Clé en main', 'On gère tout : démolition, plomberie, carrelage, pose. Vous récupérez les clés.'],
              ].map(([n, t, d]) => (
                <div key={n} style={{ padding: '40px 32px', borderRight: '1px solid rgba(26,26,24,0.08)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 48, color: 'var(--gold)', opacity: 0.4, lineHeight: 1, marginBottom: 16 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 32 }}>
                  Tout est inclus.
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Plan 3D de votre projet (inclus)',
                    'Démolition et évacuation des gravats',
                    'Plomberie & installation sanitaire',
                    'Électricité et éclairage',
                    'Carrelage sol & murs',
                    'Faïence et joints',
                    'Menuiserie et finitions',
                    'Nettoyage de fin de chantier',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--ink-soft)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'var(--dark)', padding: 48, color: 'white' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
                  Notre promesse
                </p>
                <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 24, lineHeight: 1.5, marginBottom: 24, color: 'white' }}>
                  Le prix signé au devis est le prix que vous payez.
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 32 }}>
                  Pas de surcoût surprise. Pas de mauvaise découverte. Si un imprévu arrive, on vous en parle avant d'agir.
                </p>
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: '72px 0', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>
              Votre projet commence ici.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              Visite gratuite · Plan 3D inclus · Devis sous 48h
            </p>
            <Link href="/devis" className="btn btn-gold">Demander mon devis</Link>
          </div>
        </section>
      </main>
    </>
  )
}
