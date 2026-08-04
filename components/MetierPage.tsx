import Link from 'next/link'
import Rings from '@/components/Rings'
import AvisC from '@/components/AvisC'
import Realisations from '@/components/Realisations'
import GuidesLies from '@/components/GuidesLies'
import { hrefCommune } from '@/lib/communes'
import { guidesPro } from '@/lib/guides'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

/**
 * Gabarit des pages métier (électricité, peinture, sols…).
 * Reprend la structure de /plombier-rouen, qui est la page métier de référence.
 */
export type MetierPageProps = {
  slug: string
  /** Nom court du métier pour le fil d'Ariane et le schema Service. */
  nom: string
  /** Description reprise dans le JSON-LD Service. */
  schemaDescription: string
  eyebrow: string
  /** Le H1, en deux morceaux pour le retour à la ligne. */
  titre: [string, string]
  intro: string
  promesses: [string, string, string][]
  servicesTitre: string
  servicesIntro: string
  services: [string, string, string?][]
  process: [string, string, string][]
  faqs: { q: string; a: string }[]
  /** Communes couvertes — texte simple, il n'existe pas encore de page par commune pour ces métiers. */
  communes: string[]
  /** Phrase de maillage interne, en bas de page. */
  maillage: React.ReactNode
  ctaTitre: string
  ctaSous: string
}

const darkSection: React.CSSProperties = { background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden' }
const eyebrowStyle: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }
const Dash = () => <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />

const stylesCommunes = `
  .mp-commune { display: inline-block; font-size: 13px; font-weight: 500; color: var(--ink); background: #fff; border: 1px solid rgba(184,151,90,0.45); border-radius: 40px; padding: 9px 18px; transition: transform .2s ease, border-color .2s ease, color .2s ease; }
  a.mp-commune:hover { transform: translateY(-2px); border-color: var(--gold); color: var(--gold-deep); }
  a.mp-commune:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
  .mp-commune--inerte { color: var(--ink-soft); border-color: rgba(184,151,90,0.28); }
`

const BASE = 'https://www.fortisrenovation.fr'

export default function MetierPage(p: MetierPageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(p.nom, p.schemaDescription, p.slug)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: BASE },
        { name: 'Maintenance immobilière', url: `${BASE}/maintenance-immobiliere-rouen` },
        { name: p.nom, url: `${BASE}${p.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(p.faqs)) }} />

      <style>{stylesCommunes}</style>

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ ...darkSection, padding: '100px 0 80px' }}>
          <Rings className="rings--tr" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }} data-reveal>
            <p style={eyebrowStyle}><Dash />{p.eyebrow}</p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.1, marginBottom: 24 }}>
              {p.titre[0]} <br />{p.titre[1]}
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.66)', maxWidth: 580, lineHeight: 1.8, marginBottom: 16 }}>
              {p.intro}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis gratuit</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

        {/* Promesses */}
        <section style={{ background: 'var(--ink)', borderTop: '1px solid rgba(184,151,90,0.3)', borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
          <div className="container" data-reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {p.promesses.map(([v, l, s]) => (
                <div key={l} style={{ padding: '32px 28px', borderRight: '1px solid rgba(184,151,90,0.2)' }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 30, color: 'var(--gold)', lineHeight: 1, marginBottom: 8 }}>{v}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'white', marginBottom: 4 }}>{l}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.62)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: 16 }}>{p.servicesTitre}</h2>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: 620, lineHeight: 1.75, marginBottom: 48 }}>{p.servicesIntro}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {p.services.map(([titre, desc, href]) => (
                <div key={titre} style={{ padding: 32, background: 'white', border: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 21, marginBottom: 12, color: 'var(--ink)' }}>{titre}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: href ? 14 : 0 }}>{desc}</p>
                  {href && <Link href={href} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>En savoir plus →</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Déroulé */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 42px)', textAlign: 'center', marginBottom: 56 }}>
              Comment ça se passe ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {p.process.map(([n, t, d]) => (
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
            {p.faqs.map(({ q, a }) => (
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
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: 18, textAlign: 'center' }}>
              Zone d&apos;intervention · 30 km autour de Rouen
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
              {p.communes.map((c) => {
                const href = hrefCommune(c)
                // Une commune qui a sa page maintenance devient un lien ; les autres
                // restent en texte simple plutôt que de pointer dans le vide.
                return href
                  ? <Link key={c} href={href} className="mp-commune">{c}</Link>
                  : <span key={c} className="mp-commune mp-commune--inerte">{c}</span>
              })}
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 2, textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              {p.maillage}
            </p>
          </div>
        </section>

        <Realisations />

        <GuidesLies
          guides={guidesPro}
          titre="Pour aller plus loin, côté gestion locative"
          intro="Ce qui revient au bailleur, ce qui revient au locataire, et ce que coûte le temps perdu entre deux baux."
          fond="blanc"
        />

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: '80px 0', color: 'white', textAlign: 'center' }}>
          <div className="container" data-reveal>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(30px, 4vw, 40px)', marginBottom: 16, color: 'white' }}>{p.ctaTitre}</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', marginBottom: 16 }}>{p.ctaSous}</p>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(34px, 5vw, 44px)', color: 'var(--gold)', marginBottom: 8 }}>
              <a href="tel:+33767491324" style={{ color: 'inherit' }}>07 67 49 13 24</a>
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
              Fortis Rénovation · 193C Rue du Renard · 76000 Rouen
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis gratuit</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

/** Communes citées sur toutes les pages métier — cohérent avec lib/schema.ts. */
export const COMMUNES = [
  'Rouen', 'Bois-Guillaume', 'Mont-Saint-Aignan', 'Bihorel', 'Isneauville',
  'Bonsecours', 'Le Mesnil-Esnard', 'Franqueville-Saint-Pierre',
  'Sotteville-lès-Rouen', 'Déville-lès-Rouen', 'Maromme',
  'Le Grand-Quevilly', 'Le Petit-Quevilly', 'Saint-Étienne-du-Rouvray', 'Oissel',
]
