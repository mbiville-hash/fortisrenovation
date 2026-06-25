import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_SCHEMA, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'À propos — Fortis Rénovation, entreprise de rénovation à Rouen',
  description: 'Fortis Rénovation, entreprise de rénovation et maintenance immobilière à Rouen depuis 2024. Transparence, réactivité, résultat conforme. 25 avis ★★★★★.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/a-propos' },
  openGraph: {
    title: 'À propos — Fortis Rénovation',
    description: 'Entreprise de rénovation et maintenance immobilière à Rouen. 25 avis ★★★★★.',
    url: 'https://www.fortisrenovation.fr/a-propos',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BASE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'À propos', url: 'https://www.fortisrenovation.fr/a-propos' },
      ]))}} />

      <main style={{ paddingTop: 68 }}>
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24 }}>
              Fortis Rénovation · Rouen
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Une entreprise de rénovation <br />bâtie sur la confiance.
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <span style={{ color: 'var(--gold)', fontSize: 20, letterSpacing: 4 }}>★★★★★</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>25 avis Google vérifiés</span>
            </div>
          </div>
        </section>

        {/* Histoire */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, marginBottom: 24 }}>Notre approche</h2>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: 20 }}>
                  Fortis Rénovation est une entreprise de rénovation et de maintenance immobilière basée à Rouen. Nous intervenons pour les syndics, les bailleurs et les particuliers dans toute la métropole normande.
                </p>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: 20 }}>
                  Notre conviction : un chantier bien fait commence par une communication honnête. On vous montre le résultat en 3D avant de commencer, on fixe un prix ferme, et on respecte les délais annoncés.
                </p>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                  Pour les professionnels, on devient votre prestataire technique de référence : un numéro unique, des rapports systématiques, aucune relance à faire.
                </p>
              </div>

              <div style={{ position: 'relative', aspectRatio: '4/5', maxWidth: 400, overflow: 'hidden' }}>
                <Image
                  src="/IMG_4452.jpg"
                  alt="Dirigeant Fortis Rénovation — Rouen"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, textAlign: 'center', marginBottom: 56 }}>Nos valeurs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {[
                { title: 'Transparence', desc: 'Prix fixé au devis, résultat visualisé en 3D avant les travaux. Aucune mauvaise surprise.' },
                { title: 'Réactivité', desc: 'Réponse sous 48h garantie. Pour les urgences, on fait tout pour intervenir le jour même.' },
                { title: 'Résultat conforme', desc: 'Le chantier livré correspond exactement à ce qui a été validé. Photos à la livraison.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: 36, border: '1px solid rgba(26,26,24,0.08)' }}>
                  <div style={{ width: 32, height: 2, background: 'var(--gold)', marginBottom: 20 }} />
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis badge */}
        <section style={{ background: 'var(--dark)', padding: '64px 0', textAlign: 'center' }}>
          <div className="container" data-reveal>
            <div style={{ color: 'var(--gold)', fontSize: 28, letterSpacing: 6, marginBottom: 12 }}>★★★★★</div>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 28, color: 'white', marginBottom: 8 }}>25 avis Google vérifiés</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>Note 5/5 · Rouen & métropole normande</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
