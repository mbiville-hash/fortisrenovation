import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import Realisations from '@/components/Realisations'

export const metadata: Metadata = {
  title: 'Plombier Franqueville-Saint-Pierre — Maintenance & dégâts',
  description: 'Plombier à Franqueville-Saint-Pierre : maintenance, dégâts des eaux, petits travaux. Intervention rapide sur le plateau est, rapport sous 48h.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/plombier-franqueville-saint-pierre' },
  openGraph: {
    title: 'Plombier Franqueville-Saint-Pierre — Fortis Rénovation',
    description: 'Maintenance immobilière et plomberie à Franqueville-Saint-Pierre. Intervention rapide, rapport sous 48h.',
    url: 'https://www.fortisrenovation.fr/plombier-franqueville-saint-pierre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

const faqs = [
  {
    q: 'Intervenez-vous en urgence à Franqueville-Saint-Pierre ?',
    a: "Oui. Pour les urgences (fuite, dégât des eaux), contactez-nous directement au 07 67 49 13 24. Nous organisons l'intervention le plus rapidement possible sur le plateau est.",
  },
  {
    q: 'Fournissez-vous un rapport après intervention ?',
    a: 'Systématiquement. Chaque intervention donne lieu à un rapport photos transmis sous 48h — utilisable pour votre assureur ou vos copropriétaires.',
  },
  {
    q: 'Intervenez-vous sur les maisons individuelles et copropriétés ?',
    a: "Oui. Franqueville-Saint-Pierre compte beaucoup de pavillons et de petites copropriétés : nous traitons aussi bien l'entretien d'une maison que la maintenance d'un immeuble ou d'un bien locatif.",
  },
]

export default function PlombierFranquevilleSaintPierrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Plombier Franqueville-Saint-Pierre',
        'Maintenance immobilière et plomberie à Franqueville-Saint-Pierre. Intervention rapide, rapport sous 48h.',
        '/plombier-franqueville-saint-pierre'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Maintenance immobilière Rouen', url: 'https://www.fortisrenovation.fr/professionnels' },
        { name: 'Plombier Franqueville-Saint-Pierre', url: 'https://www.fortisrenovation.fr/plombier-franqueville-saint-pierre' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
              Franqueville-Saint-Pierre · Plateau est de Rouen
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Plombier à Franqueville- <br />Saint-Pierre — rapidement.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.75, marginBottom: 16 }}>
              Fortis Rénovation intervient à Franqueville-Saint-Pierre et sur le plateau est pour tous vos travaux de plomberie, maintenance immobilière et dégâts des eaux. Un interlocuteur unique, des rapports écrits à chaque intervention.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold">07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Demander un devis</Link>
            </div>
          </div>
        </section>

        {/* Promesses */}
        <section style={{ background: 'var(--ink)', padding: '0', borderTop: '1px solid rgba(184,151,90,0.3)', borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
          <div className="container" data-reveal>
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
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.62)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16 }}>
              Nos interventions à Franqueville-Saint-Pierre
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 600, lineHeight: 1.75, marginBottom: 20 }}>
              Pavillons, petites copropriétés, biens locatifs : à Franqueville-Saint-Pierre nous intervenons sur tous les corps de métier du bâtiment. Plomberie, électricité courante, menuiserie, peinture, carrelage — un seul prestataire, une seule facture, pour l'entretien comme pour les imprévus.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 600, lineHeight: 1.75, marginBottom: 48 }}>
              Commune familiale du plateau est, Franqueville-Saint-Pierre est dominée par les pavillons et les lotissements, avec quelques petites copropriétés. On y intervient surtout pour l'entretien des maisons, les urgences plomberie et les remises en état — réponse sous 48h, souvent le jour même, et un compte rendu à chaque passage.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                { title: 'Plomberie & sanitaire', desc: 'Fuite, remplacement de robinetterie, chauffe-eau, WC, lavabo. Intervention le jour même pour les urgences.' },
                { title: 'Dégâts des eaux', desc: "Recherche de fuite, mise hors d'eau, remise en état complète. Rapport photos sous 48h pour votre assureur." },
                { title: 'Petits travaux courants', desc: 'Électricité courante, peinture, serrurerie, menuiserie — toutes les demandes du quotidien traitées rapidement.' },
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
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, textAlign: 'center', marginBottom: 56 }}>
              Comment ça marche ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
              {[
                ['1', 'Vous nous contactez', 'Par téléphone ou formulaire. On vous répond dans les 48h, souvent le jour même.'],
                ['2', 'On évalue et on chiffre', 'Visite ou devis à distance selon la nature du problème. Tarif clair, sans surprise.'],
                ['3', 'Intervention planifiée', 'On intervient au moment qui vous convient, à Franqueville-Saint-Pierre et alentours.'],
                ['4', 'Rapport transmis', 'Photos, nature des travaux, coût — tout est consigné et envoyé sous 48h.'],
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

        {/* Preuve sociale — note Google réelle (PAS de faux témoignage) */}
        {/* TODO Marc-Antoine : remplace ce bloc par un VRAI avis d'un client de Franqueville-Saint-Pierre quand tu en as un. */}
        <section style={{ background: 'var(--paper)', padding: '72px 0' }}>
          <div className="container" data-reveal style={{ maxWidth: 720, textAlign: 'center' }}>
            <div style={{ color: 'var(--gold)', fontSize: 22, letterSpacing: 6, marginBottom: 16 }}>★★★★★</div>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, lineHeight: 1.6, color: 'var(--ink)', marginBottom: 16 }}>
              Note 5/5 sur Google — 29 avis vérifiés.
            </p>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>
              Une intervention à Franqueville-Saint-Pierre ou sur le plateau est ? Demandez-nous les coordonnées de clients du secteur : on les communique volontiers.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" data-reveal style={{ maxWidth: 760 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, marginBottom: 48 }}>Questions fréquentes</h2>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '28px 0', borderBottom: '1px solid rgba(26,26,24,0.1)' }}>
                <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zone & maillage */}
        <section style={{ background: 'var(--paper)', padding: '56px 0' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center' }}>
              Fortis Rénovation intervient également à{' '}
              <Link href="/plombier-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Rouen</Link>,{' '}
              <Link href="/plombier-le-mesnil-esnard" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Le Mesnil-Esnard</Link>,{' '}
              <Link href="/plombier-bonsecours" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bonsecours</Link>{' '}
              et <Link href="/plombier-mont-saint-aignan" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Mont-Saint-Aignan</Link>.
            </p>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center', marginTop: 12 }}>
              Vous rénovez votre salle de bain à Franqueville-Saint-Pierre ?{' '}
              <Link href="/salle-de-bain-franqueville-saint-pierre" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Découvrez notre offre salle de bain clé en main</Link>.
            </p>
          </div>
        </section>

        <Realisations />

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: '72px 0', color: 'white', textAlign: 'center' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>
              Un besoin à Franqueville-Saint-Pierre ?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
              Réponse garantie sous 48h — souvent le jour même.
            </p>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 40, color: 'var(--gold)', marginBottom: 8 }}>
              <a href="tel:+33767491324" style={{ color: 'inherit' }}>07 67 49 13 24</a>
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen
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
