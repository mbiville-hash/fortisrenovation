import type { Metadata } from 'next'
import Link from 'next/link'
import Rings from '@/components/Rings'
import AvisC from '@/components/AvisC'
import Realisations from '@/components/Realisations'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

const SLUG = '/plombier-rouen'

export const metadata: Metadata = {
  title: 'Plombier à Rouen — dépannage 24h/24 & devis gratuit',
  description: 'Plombier à Rouen : dépannage en quelques heures, recherche de fuite, dégât des eaux, sanitaires et chauffe-eau. Astreinte 24/7, devis gratuit, 5/5 sur Google.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: 'Plombier à Rouen — dépannage 24h/24 & devis gratuit',
    description: 'Dépannage plomberie en quelques heures à Rouen : fuite, dégât des eaux, sanitaires, chauffe-eau. Astreinte 24/7, devis gratuit.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

const faqs = [
  { q: 'Intervenez-vous en urgence à Rouen ?', a: 'Oui, astreinte 24h/24 et 7j/7. Sur une fuite ou un dégât des eaux, nous intervenons en quelques heures. Appelez le 07 67 49 13 24.' },
  { q: 'Le devis est-il gratuit ?', a: 'Oui. Le devis et le déplacement pour l’établir sont gratuits à Rouen et dans la métropole.' },
  { q: 'Quels types d’intervention de plomberie réalisez-vous ?', a: 'Recherche et réparation de fuite, robinetterie, WC, lavabo, évacuations et canalisations, chauffe-eau et ballon d’eau chaude, dégâts des eaux, et rénovation complète de salle de bain.' },
  { q: 'Intervenez-vous pour les syndics et les bailleurs ?', a: 'Oui : particuliers, syndics et bailleurs. Un interlocuteur unique et un rapport écrit avec photos à chaque intervention.' },
  { q: 'Quels secteurs couvrez-vous autour de Rouen ?', a: 'Rouen et la métropole, dans un rayon d’environ 30 km : Bois-Guillaume, Mont-Saint-Aignan, Bihorel, Isneauville, Bonsecours, Le Mesnil-Esnard, Franqueville-Saint-Pierre, Sotteville-lès-Rouen.' },
]

const darkSection: React.CSSProperties = { background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden' }
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }
const Dash = () => <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />

const services: [string, string, string?][] = [
  ['Recherche & réparation de fuite', 'Détection de l’origine, réparation durable et remise en état. Nous traitons la cause, pas seulement le symptôme.'],
  ['Dégât des eaux', 'Mise hors d’eau, séchage, remise en état et rapport photos sous 48h pour votre assurance.', '/degat-des-eaux-rouen'],
  ['Robinetterie & sanitaires', 'Remplacement de robinet, mitigeur, WC, lavabo, évier — pose propre et parfaitement étanche.'],
  ['Chauffe-eau & ballon', 'Dépannage et remplacement de chauffe-eau et ballon d’eau chaude, électrique ou thermodynamique.'],
  ['Évacuations & canalisations', 'Débouchage, reprise d’évacuation, raccordements PVC et fonte, sans casse inutile.'],
  ['Rénovation de salle de bain', 'Au-delà du dépannage, nous refaisons votre salle de bain clé en main — plan 3D inclus.', '/salle-de-bain-rouen'],
]

const promesses: [string, string, string][] = [
  ['24/7', 'Astreinte dépannage', '7j/7, jours fériés inclus'],
  ['Quelques heures', 'Sur une urgence', 'Fuite, dégât des eaux'],
  ['Devis gratuit', 'Clair et détaillé', 'Déplacement offert'],
  ['5/5', 'Sur Google', '28 avis vérifiés'],
]

const process: [string, string, string][] = [
  ['1', 'Vous nous appelez', 'Par téléphone ou formulaire. Pour une urgence, nous décrochons et nous vous guidons tout de suite.'],
  ['2', 'Diagnostic & devis', 'Nous identifions le problème et nous le chiffrons clairement avant d’intervenir. Devis gratuit.'],
  ['3', 'Intervention', 'Nous réparons proprement — en quelques heures pour les urgences, au créneau qui vous convient sinon.'],
  ['4', 'Rapport & garantie', 'Photos, nature des travaux et facture détaillée transmis sous 48h. Travaux garantis.'],
]

const communes: [string, string][] = [
  ['/plombier-bois-guillaume', 'Bois-Guillaume'],
  ['/plombier-mont-saint-aignan', 'Mont-Saint-Aignan'],
  ['/plombier-bihorel', 'Bihorel'],
  ['/plombier-isneauville', 'Isneauville'],
  ['/plombier-bonsecours', 'Bonsecours'],
  ['/plombier-le-mesnil-esnard', 'Le Mesnil-Esnard'],
  ['/plombier-franqueville-saint-pierre', 'Franqueville-Saint-Pierre'],
  ['/plombier-sotteville-les-rouen', 'Sotteville-lès-Rouen'],
]

export default function PlombierRouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Plombier Rouen',
        'Plombier à Rouen : dépannage rapide, recherche de fuite, dégât des eaux, sanitaires et chauffe-eau. Astreinte 24h/24 et 7j/7, devis gratuit.',
        SLUG
      )) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Plombier Rouen', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ ...darkSection, padding: '100px 0 80px' }}>
          <Rings className="rings--tr" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }} data-reveal>
            <p style={eyebrow}><Dash />Plomberie & dépannage · Rouen & métropole</p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Plombier à Rouen — <br />dépannage et travaux.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.66)', maxWidth: 560, lineHeight: 1.8, marginBottom: 16 }}>
              De la fuite urgente au remplacement de sanitaires, nous intervenons rapidement à Rouen et dans la métropole. Astreinte 24h/24, devis gratuit, et un seul interlocuteur du diagnostic à la facture.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold">07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Demander un devis gratuit</Link>
            </div>
          </div>
        </section>

        {/* Promesses */}
        <section style={{ background: 'var(--ink)', borderTop: '1px solid rgba(184,151,90,0.3)', borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
          <div className="container" data-reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {promesses.map(([v, l, s]) => (
                <div key={l} style={{ padding: '32px 28px', borderRight: '1px solid rgba(184,151,90,0.2)' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 30, color: 'var(--gold)', lineHeight: 1, marginBottom: 8 }}>{v}</div>
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
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: 16 }}>
              Nos interventions de plomberie à Rouen
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 620, lineHeight: 1.75, marginBottom: 48 }}>
              Dépannage comme travaux planifiés : nous couvrons toute la plomberie du quotidien à Rouen et dans la métropole, pour les particuliers comme pour les syndics.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {services.map(([title, desc, href]) => (
                <div key={title} style={{ padding: 32, background: 'white', border: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 21, marginBottom: 12, color: 'var(--ink)' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: href ? 14 : 0 }}>{desc}</p>
                  {href && <Link href={href} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>En savoir plus →</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 42px)', textAlign: 'center', marginBottom: 56 }}>
              Comment ça se passe ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
              {process.map(([n, t, d]) => (
                <div key={n} style={{ padding: '36px 30px', borderRight: '1px solid rgba(26,26,24,0.08)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 46, color: 'var(--gold)', opacity: 0.32, lineHeight: 1, marginBottom: 14 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AvisC />

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
        <section style={{ background: 'var(--paper)', padding: '64px 0' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: 18, textAlign: 'center' }}>Votre plombier près de chez vous</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
              {communes.map(([href, name]) => (
                <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', background: 'white', border: '1px solid rgba(184,151,90,0.45)', borderRadius: 40, padding: '9px 18px' }}>{name}</Link>
              ))}
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              Un <Link href="/degat-des-eaux-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>dégât des eaux</Link> à gérer ? Vous rénovez votre <Link href="/salle-de-bain-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>salle de bain</Link> ? Vous êtes syndic ou gestionnaire : découvrez notre <Link href="/professionnels" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière</Link> et la <Link href="/maintenance-copropriete-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance de copropriété</Link>.
            </p>
          </div>
        </section>

        <Realisations />

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: '80px 0', color: 'white', textAlign: 'center' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 40px)', marginBottom: 16, color: 'white' }}>
              Besoin d’un plombier à Rouen ?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', marginBottom: 16 }}>
              Astreinte 24h/24 — sur une urgence, nous intervenons en quelques heures.
            </p>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(34px, 5vw, 44px)', color: 'var(--gold)', marginBottom: 8 }}>
              <a href="tel:+33767491324" style={{ color: 'inherit' }}>07 67 49 13 24</a>
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+33767491324" className="btn btn-gold">07 67 49 13 24</a>
              <Link href="/devis" className="btn btn-outline-white">Demander un devis gratuit</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
