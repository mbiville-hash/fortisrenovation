import type { Metadata } from 'next'
import Link from 'next/link'
import Rings from '@/components/Rings'
import Breadcrumb from '@/components/Breadcrumb'
import ClientsStrip from '@/components/ClientsStrip'
import ReactiviteTimeline from '@/components/ReactiviteTimeline'
import BeneficesPro from '@/components/BeneficesPro'
import MetiersPro from '@/components/MetiersPro'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Maintenance immobilière Rouen — Syndics & Bailleurs',
  description: 'Maintenance et dépannage immobilier à Rouen pour syndics, bailleurs et entreprises. Un interlocuteur unique, interventions sous 48h, devis clair, rapport systématique.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/professionnels' },
  openGraph: {
    title: 'Maintenance immobilière Rouen — Syndics & Bailleurs',
    description: 'Maintenance et dépannage immobilier à Rouen. Un interlocuteur unique, interventions sous 48h, devis clair, rapport systématique.',
    url: 'https://www.fortisrenovation.fr/professionnels',
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqs = [
  { q: 'Quels types de travaux couvrez-vous ?', a: 'Plomberie, électricité, menuiserie, peinture, carrelage, petits travaux de maçonnerie et dégâts des eaux. Tout ce dont un parc immobilier a besoin au quotidien.' },
  { q: 'Quel est votre délai d’intervention ?', a: 'Nous garantissons une réponse sous 48h pour les demandes standard. Pour les urgences (fuite, sinistre), nous faisons notre maximum pour intervenir le jour même, avec une astreinte 24h/24 et 7j/7.' },
  { q: 'Travaillez-vous au forfait ou au devis ?', a: 'Le plus souvent au devis, intervention par intervention : un chiffrage clair, sans engagement. Pour un parc important, on peut mettre en place un suivi régulier sur-mesure si vous le souhaitez.' },
  { q: 'Une seule facture pour plusieurs corps de métier ?', a: 'Oui. Multi-corps d’état, un seul devis et une seule facture : vous n’avez qu’un interlocuteur à gérer, pas cinq.' },
  { q: 'Gérez-vous les dossiers d’assurance (dégât des eaux, sinistre) ?', a: 'Oui. Nous établissons des rapports détaillés et des devis adaptés à la prise en charge assurance, et nous intervenons en urgence pour limiter les dégâts.' },
  { q: 'Intervenez-vous dans toute la Seine-Maritime ?', a: 'Nous intervenons principalement dans un rayon de 30 km autour de Rouen (métropole normande). Contactez-nous pour les zones plus éloignées.' },
]

const reassurance = [
  ['Interlocuteur unique', 'Du diagnostic à la facture'],
  ['Réponse sous 48h', 'Souvent le jour même'],
  ['Rapport écrit', 'À chaque intervention'],
  ['Astreinte 24/7', 'Dépannage en urgence'],
]

const audiences = [
  { t: 'Syndics de copropriété', d: 'Entretien des parties communes, dépannages, mise aux normes — avec des comptes-rendus clairs pour vos assemblées générales.' },
  { t: 'Bailleurs privés', d: 'Remise en état entre locataires, petits travaux, dépannages. Votre bien reste louable et entretenu sans y penser.' },
  { t: 'Gestionnaires & administrateurs', d: 'Un point de contact unique pour tout un portefeuille, des interventions tracées et facturées proprement.' },
  { t: 'Entreprises & locaux pro', d: 'Maintenance de vos locaux : plomberie, électricité, second œuvre — sans interrompre votre activité.' },
]

const method: [string, string, string][] = [
  ['01', 'Premier contact & visite', 'On fait le tour de votre parc et de vos besoins, gratuitement.'],
  ['02', 'Devis clair', 'Un chiffrage précis avant toute intervention. Sans engagement.'],
  ['03', 'Interventions & urgences', 'Travaux programmés, et réponse sous 48h en cas d’urgence.'],
  ['04', 'Rapport systématique', 'Compte-rendu écrit à chaque passage, photos à l’appui.'],
  ['05', 'Suivi & bilan', 'Un interlocuteur dédié, un bilan régulier, une facturation lisible.'],
]

const darkSection: React.CSSProperties = { background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden' }
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }
const eyebrowGold: React.CSSProperties = { ...eyebrow, color: '#9a7c45' }
const Dash = () => <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />

export default function ProsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Maintenance immobilière Rouen', 'Maintenance et dépannage immobilier pour syndics, bailleurs et entreprises à Rouen. Interventions au devis, réponse sous 48h.', '/professionnels')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Professionnels', url: 'https://www.fortisrenovation.fr/professionnels' },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ ...darkSection, padding: '100px 0 80px' }}>
          <Rings className="rings--tr" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Professionnels' }]} />
            <p style={eyebrow}><Dash />Syndics · Bailleurs · Entreprises</p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1, marginBottom: 24 }}>
              Maintenance &amp; dépannage <br />immobilier à Rouen — <br />un seul prestataire.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', maxWidth: 560, lineHeight: 1.75, marginBottom: 16 }}>
              Plomberie, électricité, menuiserie, peinture. Au devis, à l’intervention ou en suivi régulier — vous décidez. Un interlocuteur unique, des rapports clairs, une seule facture.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

        {/* Réassurance */}
        <section style={{ background: 'var(--paper)', borderBottom: '1px solid rgba(26,26,24,0.08)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {reassurance.map(([t, d], i) => (
                <div key={t} data-reveal style={{ padding: '36px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(26,26,24,0.08)' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, color: 'var(--ink)', marginBottom: 6 }}>{t}</div>
                  <div style={{ fontSize: 12.5, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réactivité — timeline animée */}
        <ReactiviteTimeline />

        {/* Ils nous font confiance */}
        <ClientsStrip />

        {/* Bénéfices — comment on vous fait gagner du temps */}
        <BeneficesPro />

        {/* Pour qui */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <p style={eyebrowGold}><Dash />Pour qui</p>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 44, color: 'var(--ink)' }}>Pensé pour les gestionnaires de parc.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              {audiences.map(({ t, d }, i) => (
                <div key={t} data-reveal style={{ padding: 30, background: 'white', border: '1px solid rgba(154,124,69,0.2)', transitionDelay: `${i * 70}ms` }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, marginBottom: 10, color: 'var(--ink)' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section style={{ ...darkSection, padding: '80px 0' }}>
          <Rings className="rings--bl" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={eyebrow}><Dash />Notre méthode</p>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 48, color: 'white' }}>Simple, lisible, sans surprise.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
              {method.map(([n, t, d]) => (
                <div key={n} data-reveal>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, color: 'rgba(184,151,90,0.45)', marginBottom: 10 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 19, color: 'white', marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domaines — corps d'état en icônes */}
        <MetiersPro />

        {/* Zone d'intervention — pastilles */}
        <section style={{ background: 'var(--paper)', padding: '64px 0', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
          <style>{`
            .zone-chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 720px; margin: 0 auto; }
            .zone-chip { font-size: 13px; font-weight: 500; color: var(--ink); background: white; border: 1px solid rgba(184,151,90,0.45); border-radius: 40px; padding: 9px 18px; transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease; }
            .zone-chip:hover { transform: translateY(-2px); border-color: var(--gold); color: var(--gold-deep); }
          `}</style>
          <div className="container" data-reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9a7c45', textAlign: 'center', marginBottom: 22 }}>
              Zone d&apos;intervention · 30 km autour de Rouen
            </p>
            <div className="zone-chips">
              <Link href="/plombier-mont-saint-aignan" className="zone-chip">Mont-Saint-Aignan</Link>
              <Link href="/plombier-bois-guillaume" className="zone-chip">Bois-Guillaume</Link>
              <Link href="/plombier-bihorel" className="zone-chip">Bihorel</Link>
              <Link href="/plombier-isneauville" className="zone-chip">Isneauville</Link>
              <Link href="/plombier-bonsecours" className="zone-chip">Bonsecours</Link>
              <Link href="/plombier-le-mesnil-esnard" className="zone-chip">Le Mesnil-Esnard</Link>
              <Link href="/plombier-franqueville-saint-pierre" className="zone-chip">Franqueville-Saint-Pierre</Link>
              <Link href="/plombier-sotteville-les-rouen" className="zone-chip">Sotteville-lès-Rouen</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, marginBottom: 40, color: 'var(--ink)' }}>Questions fréquentes</h2>
            <div>
              {faqs.map(({ q, a }) => (
                <div key={q} data-reveal style={{ padding: '26px 0', borderBottom: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{q}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ ...darkSection, padding: '72px 0', textAlign: 'center' }}>
          <Rings className="rings--br" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>Parlons de votre parc.</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', marginBottom: 40 }}>Devis sous 48h. Un rendez-vous, un interlocuteur.</p>
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
