import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dégât des eaux Rouen — Intervention rapide & rapport 48h',
  description: 'Dégât des eaux à Rouen ? Fortis Rénovation intervient rapidement : recherche de fuite, remise en état, rapport photos pour votre assureur sous 48h.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/degat-des-eaux-rouen' },
  openGraph: {
    title: 'Dégât des eaux Rouen — Intervention rapide',
    description: 'Intervention rapide sur dégât des eaux à Rouen. Recherche de fuite, remise en état, rapport photos sous 48h.',
    url: 'https://www.fortisrenovation.fr/degat-des-eaux-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

export default function DegatDesEauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Intervention dégât des eaux Rouen',
        'Intervention rapide sur dégât des eaux à Rouen. Recherche de fuite, remise en état complète, rapport photos sous 48h.',
        '/degat-des-eaux-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Dégât des eaux Rouen', url: 'https://www.fortisrenovation.fr/degat-des-eaux-rouen' },
      ]))}} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero urgence */}
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
              Urgence · Rouen & métropole
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Dégât des eaux à Rouen — <br />on intervient.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.75, marginBottom: 40 }}>
              Recherche de fuite, remise en état complète, rapport photos transmis sous 48h. On s'occupe de tout — du premier constat à la livraison finale.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold" style={{ fontSize: 16 }}>07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Formulaire de contact</Link>
            </div>
          </div>
        </section>

        {/* Étapes intervention */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16 }}>
              Notre intervention dégât des eaux
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 580, lineHeight: 1.75, marginBottom: 48 }}>
              Nous intervenons sur les dégâts des eaux dans tout Rouen et la métropole normande : Sotteville-lès-Rouen, Mont-Saint-Aignan, Bois-Guillaume, Grand-Quevilly, Déville-lès-Rouen, Maromme et Saint-Étienne-du-Rouvray.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
              {[
                ['1', 'Constat et recherche de fuite', 'On identifie l\'origine précise du problème avant toute intervention — pour ne traiter que la vraie cause.'],
                ['2', 'Mise hors d\'eau', 'Arrêt de la fuite, protection des zones touchées, premiers travaux d\'urgence si nécessaire.'],
                ['3', 'Remise en état complète', 'Séchage, plâtrerie, peinture, revêtements — on remet les lieux dans leur état initial.'],
                ['4', 'Rapport pour l\'assureur', 'Photos avant/après, nature et coût des travaux, rapport transmis sous 48h.'],
              ].map(([n, t, d]) => (
                <div key={n as string} style={{ padding: '40px 32px', borderRight: '1px solid rgba(26,26,24,0.08)', background: 'white' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 48, color: 'var(--gold)', opacity: 0.3, lineHeight: 1, marginBottom: 16 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rapport assureur */}
        <section style={{ background: 'var(--dark)', padding: '72px 0', color: 'white' }}>
          <div className="container" data-reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, color: 'white', marginBottom: 20 }}>
                  Rapport complet sous 48h
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32 }}>
                  Chaque intervention donne lieu à un rapport détaillé : photos avant et après travaux, description précise des dommages, nature et coût des réparations. Un document clé pour votre déclaration de sinistre.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                  {['Photos avant / pendant / après', 'Description des dommages constatés', 'Devis et facture détaillés', 'Transmis sous 48h par email'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/devis" className="btn btn-gold">Nous contacter</Link>
              </div>
              <div style={{ background: 'rgba(184,151,90,0.08)', border: '1px solid rgba(184,151,90,0.2)', padding: 48 }}>
                <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: 'var(--gold)', marginBottom: 16 }}>
                  Syndics & bailleurs
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
                  Nous sommes habitués à travailler avec les gestionnaires de copropriété. Rapport envoyé directement au gestionnaire et au copropriétaire. Devis et facture conformes aux exigences des assureurs.
                </p>
                <a href="tel:+33767491324" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 28, color: 'var(--gold)', display: 'block' }}>
                  07 67 49 13 24
                </a>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Lundi–Samedi 08h–19h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA urgence */}
        <section style={{ background: 'var(--paper)', padding: '72px 0', textAlign: 'center' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16 }}>
              Dégât des eaux en cours ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginBottom: 16 }}>
              Appelez-nous directement — on vous guide immédiatement.
            </p>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 48, color: 'var(--ink)', marginBottom: 8 }}>
              <a href="tel:+33767491324" style={{ color: 'inherit' }}>07 67 49 13 24</a>
            </p>
            <p style={{ fontSize: 12, color: 'var(--ink-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen
            </p>
            <Link href="/devis" className="btn btn-outline">Formulaire de contact</Link>
          </div>
        </section>
      </main>
    </>
  )
}
