import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Maintenance immobilière Rouen — Syndics & gestionnaires',
  description: 'Maintenance immobilière à Rouen : petits travaux, dégâts des eaux, entretien immeuble. Réponse 48h, rapport écrit, un seul interlocuteur. Devis gratuit.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/maintenance-immobiliere-rouen' },
  openGraph: {
    title: 'Maintenance immobilière Rouen — Syndics & gestionnaires',
    description: 'Petits travaux, dégâts des eaux, entretien immeuble à Rouen. Réponse 48h, rapport écrit, un interlocuteur unique.',
    url: 'https://www.fortisrenovation.fr/maintenance-immobiliere-rouen',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

const faqs = [
  {
    q: 'Pouvez-vous intervenir en urgence sur un dégât des eaux ?',
    a: "Oui. Nous traitons les demandes urgentes en priorité. Contactez-nous directement au 07 67 49 13 24 et nous organisons l'intervention le plus rapidement possible.",
  },
  {
    q: 'Fournissez-vous des rapports après chaque intervention ?',
    a: 'Systématiquement. Chaque intervention donne lieu à un rapport écrit détaillé (photos, nature des travaux, matériaux) transmis sous 24h, utilisable pour votre assureur ou vos copropriétaires.',
  },
  {
    q: 'Travaillez-vous avec des syndics et des bailleurs privés ?',
    a: 'Oui, nos deux profils principaux. Syndics de copropriété, bailleurs institutionnels ou particuliers propriétaires de plusieurs biens — nous adaptons le suivi à chaque organisation.',
  },
]

export default function MaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Maintenance immobilière Rouen',
        'Maintenance immobilière à Rouen : petits travaux, dégâts des eaux, entretien immeuble. Réponse 48h, rapport écrit, un seul interlocuteur.',
        '/maintenance-immobiliere-rouen'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Maintenance immobilière Rouen', url: 'https://www.fortisrenovation.fr/maintenance-immobiliere-rouen' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
              Syndics · Bailleurs · Gestionnaires · Rouen
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Maintenance immobilière<br />à Rouen.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.75, marginBottom: 16 }}>
              Petits travaux, dégâts des eaux, entretien courant — on prend en charge toutes les demandes de votre parc. Un interlocuteur unique, zéro relance, rapport écrit à chaque intervention.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
              Fortis Rénovation · 193 Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold">07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Demander un devis</Link>
            </div>
          </div>
        </section>

        {/* Promesses */}
        <section style={{ background: 'var(--ink)', padding: '0', borderTop: '1px solid rgba(184,151,90,0.3)', borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {[
                { v: '48h', l: 'Délai de réponse', s: 'Garanti par écrit' },
                { v: '100%', l: 'Rapports écrits', s: 'Photos incluses' },
                { v: '0', l: 'Relance nécessaire', s: 'On vous rappelle' },
                { v: '1', l: 'Interlocuteur', s: 'Du début à la fin' },
              ].map(({ v, l, s }) => (
                <div key={l} style={{ padding: '32px 32px', borderRight: '1px solid rgba(184,151,90,0.2)' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>{v}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'white', marginBottom: 4 }}>{l}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16 }}>Nos prestations de maintenance</h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 600, lineHeight: 1.75, marginBottom: 48 }}>
              Nous intervenons sur tous les corps de métier du bâtiment dans un rayon de 30 km autour de Rouen — Sotteville, Mont-Saint-Aignan, Bois-Guillaume, Grand-Quevilly et toute la métropole normande.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                { title: 'Petits travaux courants', desc: 'Plomberie, électricité courante, menuiserie, peinture, serrurerie — toutes les demandes du quotidien traitées rapidement.' },
                { title: 'Dégâts des eaux', desc: 'Intervention rapide, recherche de fuite, remise en état complète. Rapport photos transmis sous 24h pour votre assureur.' },
                { title: 'Maintenance préventive', desc: 'Visites régulières programmées, détection des problèmes avant qu\'ils deviennent urgents, carnet de suivi immeuble.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: 36, background: 'white', border: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, marginBottom: 12, color: 'var(--ink)' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, textAlign: 'center', marginBottom: 56 }}>Comment ça marche ?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
              {[
                ['1', 'Vous nous contactez', 'Par téléphone ou formulaire. On vous répond dans les 48h, souvent le jour même.'],
                ['2', 'On évalue et on chiffre', 'Visite ou devis à distance selon la nature du problème. Tarif clair, sans surprise.'],
                ['3', 'Intervention planifiée', 'On intervient au moment qui vous convient. Pas de rendez-vous manqué.'],
                ['4', 'Rapport transmis', 'Photos, nature des travaux, coût — tout est consigné et envoyé sous 24h.'],
              ].map(([n, t, d]) => (
                <div key={n as string} style={{ padding: '40px 32px', borderRight: '1px solid rgba(26,26,24,0.08)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 48, color: 'var(--gold)', opacity: 0.3, lineHeight: 1, marginBottom: 16 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignage placeholder */}
        <section style={{ background: 'var(--paper)', padding: '72px 0' }}>
          <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 64, color: 'var(--gold)', opacity: 0.2, lineHeight: 1, marginBottom: 24 }}>"</div>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, lineHeight: 1.6, color: 'var(--ink)', marginBottom: 24 }}>
              Contrat de maintenance pour notre immeuble. Interlocuteur unique, rapports clairs, interventions rapides. Ça change de nos prestataires précédents.
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-soft)', letterSpacing: '0.06em' }}>Jerry K. — Syndic, Rouen centre</p>
            <div style={{ color: 'var(--gold)', fontSize: 18, letterSpacing: 4, marginTop: 8 }}>★★★★★</div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, marginBottom: 48 }}>Questions fréquentes</h2>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '28px 0', borderBottom: '1px solid rgba(26,26,24,0.1)' }}>
                <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zone & maillage — communes desservies */}
        <section style={{ background: 'var(--paper)', padding: '56px 0' }}>
          <div className="container">
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center' }}>
              Maintenance et plomberie sur tout le plateau et la métropole :{' '}
              <Link href="/plombier-mont-saint-aignan" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Mont-Saint-Aignan</Link>,{' '}
              <Link href="/plombier-bois-guillaume" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bois-Guillaume</Link>,{' '}
              <Link href="/plombier-bihorel" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bihorel</Link>,{' '}
              <Link href="/plombier-isneauville" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Isneauville</Link>,{' '}
              <Link href="/plombier-bonsecours" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bonsecours</Link>,{' '}
              <Link href="/plombier-le-mesnil-esnard" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Le Mesnil-Esnard</Link>,{' '}
              <Link href="/plombier-franqueville-saint-pierre" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Franqueville-Saint-Pierre</Link>{' '}
              et <Link href="/plombier-sotteville-les-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Sotteville-lès-Rouen</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: '72px 0', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>
              Un besoin sur votre parc ?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              Réponse garantie sous 48h — souvent le jour même.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold">07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Formulaire de contact</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
