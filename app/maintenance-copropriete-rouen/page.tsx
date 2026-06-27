import type { Metadata } from 'next'
import Link from 'next/link'
import Rings from '@/components/Rings'
import Breadcrumb from '@/components/Breadcrumb'
import ClientsStrip from '@/components/ClientsStrip'
import ReactiviteTimeline from '@/components/ReactiviteTimeline'
import MethodePro from '@/components/MethodePro'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

const SLUG = '/maintenance-copropriete-rouen'

export const metadata: Metadata = {
  title: 'Maintenance de copropriété à Rouen — syndics & conseils syndicaux',
  description: 'Entretien et dépannage des parties communes en copropriété à Rouen : maintenance corrective et préventive, un interlocuteur unique, devis clair et comptes-rendus pour vos assemblées générales.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: 'Maintenance de copropriété à Rouen — syndics & conseils syndicaux',
    description: 'Entretien des parties communes, maintenance corrective et préventive, un seul interlocuteur. Devis clair et comptes-rendus pour vos AG.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'website',
  },
}

const faqs = [
  { q: 'Intervenez-vous sur les parties communes d’une copropriété ?', a: 'Oui : entretien et dépannage des parties communes — plomberie, électricité, peinture des cages d’escalier, carrelage et sols, dégâts des eaux, mise aux normes. Un seul interlocuteur coordonne tout, du diagnostic à la facture.' },
  { q: 'Travaillez-vous avec les syndics et les conseils syndicaux ?', a: 'Oui, c’est notre cœur de cible côté professionnels. Nous remettons des devis clairs et des comptes-rendus écrits, exploitables en assemblée générale et pour la reddition de charges.' },
  { q: 'Maintenance corrective ou préventive ?', a: 'Les deux. Le dépannage au fil des incidents, et — si vous le souhaitez — un suivi régulier qui anticipe les pannes et aide à maîtriser les coûts d’entretien.' },
  { q: 'Quel délai en cas d’urgence (fuite, dégât des eaux) ?', a: 'Astreinte 24h/24 et 7j/7. Pour une urgence (fuite, sinistre), nous intervenons en quelques heures, avec un rapport et des photos utiles à votre assurance.' },
  { q: 'Quelles copropriétés desservez-vous ?', a: 'Rouen et sa métropole, dans un rayon d’environ 30 km. Contactez-nous pour les copropriétés plus éloignées.' },
]

const reassurance: [string, string][] = [
  ['Interlocuteur unique', 'Du diagnostic à la facture'],
  ['Réponse sous 48h', 'Sur les demandes courantes'],
  ['Comptes-rendus écrits', 'Exploitables en AG'],
  ['Astreinte 24/7', 'Urgence en quelques heures'],
]

const audiences: [string, string][] = [
  ['Syndics de copropriété', 'Entretien des parties communes, dépannages et mise aux normes, avec des comptes-rendus clairs pour vos assemblées générales et la reddition de charges.'],
  ['Conseils syndicaux', 'Un interlocuteur réactif et transparent, des devis lisibles à présenter aux copropriétaires, et un suivi sans relance.'],
  ['Gestionnaires & administrateurs de biens', 'Un seul contact pour tout un portefeuille de copropriétés, des interventions tracées et facturées proprement.'],
]

const prestations: [string, string][] = [
  ['Parties communes', 'Plomberie, électricité, peinture des cages d’escalier, carrelage et sols, serrurerie courante — l’entretien du quotidien.'],
  ['Dégâts des eaux & sinistres', 'Intervention rapide, recherche de fuite, remise en état et rapport photo pour l’assurance.'],
  ['Mise aux normes', 'Électricité, accessibilité, sécurité des parties communes — diagnostic et travaux.'],
  ['Suivi régulier (sur demande)', 'Maintenance préventive : visites programmées et budget d’entretien maîtrisé, sans engagement rigide.'],
]

const darkSection: React.CSSProperties = { background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden' }
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }
const eyebrowGold: React.CSSProperties = { ...eyebrow, color: '#9a7c45' }
const Dash = () => <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />

export default function MaintenanceCoproprietePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Maintenance de copropriété Rouen', 'Entretien et dépannage des parties communes en copropriété à Rouen : maintenance corrective et préventive, un interlocuteur unique, comptes-rendus pour les AG.', SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Professionnels', url: 'https://www.fortisrenovation.fr/professionnels' },
        { name: 'Maintenance de copropriété Rouen', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ ...darkSection, padding: '100px 0 80px' }}>
          <Rings className="rings--tr" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Professionnels', href: '/professionnels' }, { name: 'Maintenance de copropriété' }]} />
            <p style={eyebrow}><Dash />Syndics · Conseils syndicaux · Gestionnaires</p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Maintenance de copropriété <br />à Rouen.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', maxWidth: 580, lineHeight: 1.75, marginBottom: 16 }}>
              Entretien et dépannage des parties communes, maintenance corrective et préventive — avec un seul interlocuteur, des devis clairs et des comptes-rendus exploitables en assemblée générale.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
              Une offre dédiée copropriété, au sein de notre <Link href="/professionnels" style={{ color: 'var(--gold)' }}>offre pro complète</Link>.
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

        {/* Réactivité */}
        <ReactiviteTimeline />

        {/* Confiance */}
        <ClientsStrip />

        {/* Pour qui */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <p style={eyebrowGold}><Dash />Pour qui</p>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 44, color: 'var(--ink)' }}>Pensé pour la gestion de copropriété.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              {audiences.map(([t, d], i) => (
                <div key={t} data-reveal style={{ padding: 30, background: 'white', border: '1px solid rgba(154,124,69,0.2)', transitionDelay: `${i * 70}ms` }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, marginBottom: 10, color: 'var(--ink)' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prestations copro */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container">
            <p style={eyebrowGold}><Dash />En copropriété</p>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 44, color: 'var(--ink)' }}>Ce que nous prenons en charge.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
              {prestations.map(([t, d], i) => (
                <div key={t} data-reveal style={{ padding: 30, border: '1px solid rgba(26,26,24,0.1)', background: 'var(--paper)', transitionDelay: `${i * 70}ms` }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, marginBottom: 12, color: 'var(--ink)' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corrective & préventive */}
        <section style={{ ...darkSection, padding: '80px 0' }}>
          <Rings className="rings--bl" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 780 }}>
            <p style={eyebrow}><Dash />Notre approche</p>
            <h2 data-reveal style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2, marginBottom: 22, color: 'white' }}>
              Maintenance corrective et préventive.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85 }}>
              On dépanne au fil des incidents — fuite, panne, dégât des eaux — et, pour les copropriétés qui le souhaitent, on met en place un suivi régulier qui anticipe les problèmes plutôt que de les subir. Résultat : moins d’urgences, des coûts d’entretien lissés, et un parc commun toujours en bon état. Le tout avec un interlocuteur unique et des comptes-rendus écrits à chaque passage.
            </p>
          </div>
        </section>

        {/* Méthode */}
        <MethodePro />

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

        {/* Zone */}
        <section style={{ background: 'var(--paper)', padding: '56px 0', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
          <div className="container" data-reveal>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center' }}>
              Maintenance de copropriété à Rouen et sur la métropole :{' '}
              <Link href="/plombier-mont-saint-aignan" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Mont-Saint-Aignan</Link>,{' '}
              <Link href="/plombier-bois-guillaume" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bois-Guillaume</Link>,{' '}
              <Link href="/plombier-bihorel" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Bihorel</Link>,{' '}
              <Link href="/plombier-sotteville-les-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Sotteville-lès-Rouen</Link>{' '}
              et toute l’agglomération.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ ...darkSection, padding: '72px 0', textAlign: 'center' }}>
          <Rings className="rings--br" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>Un parc de copropriétés à entretenir ?</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', marginBottom: 40 }}>Devis sous 48h. Un rendez-vous, un interlocuteur, des comptes-rendus clairs.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 30 }}>
              Fortis Rénovation · 193C Rue du Renard, 76000 Rouen
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
