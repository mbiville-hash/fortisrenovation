import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Maintenance immobilière Rouen — Syndics & Bailleurs | Fortis Rénovation',
  description: 'Contrats de maintenance immobilière à Rouen pour syndics, bailleurs et entreprises. Un interlocuteur unique, interventions 48h, rapport systématique.',
  alternates: { canonical: 'https://www.fortisrenovation.fr/professionnels' },
  openGraph: {
    title: 'Maintenance immobilière Rouen — Syndics & Bailleurs',
    description: 'Contrats de maintenance immobilière à Rouen. Un interlocuteur unique, interventions 48h, rapport systématique.',
    url: 'https://www.fortisrenovation.fr/professionnels',
  },
}

const faqs = [
  {
    q: 'Quels types de travaux couvrez-vous ?',
    a: 'Plomberie, électricité, menuiserie, peinture, carrelage, petits travaux de maçonnerie. Tout ce dont un parc immobilier a besoin.',
  },
  {
    q: "Quel est votre délai d'intervention ?",
    a: 'Nous garantissons une réponse sous 48h pour les demandes standard. Pour les urgences (fuite, sinistre), nous faisons notre maximum pour intervenir le jour même.',
  },
  {
    q: 'Comment fonctionne le contrat de maintenance ?',
    a: "Un forfait annuel adapté à la taille de votre parc, avec un nombre d'interventions incluses et un tarif préférentiel sur les travaux supplémentaires. Rapport mensuel fourni.",
  },
  {
    q: 'Intervenez-vous dans toute la Seine-Maritime ?',
    a: 'Nous intervenons principalement dans un rayon de 30 km autour de Rouen (métropole normande). Contactez-nous pour les zones plus éloignées.',
  },
]

export default function ProsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Maintenance immobilière Rouen',
        'Contrats de maintenance immobilière pour syndics, bailleurs et entreprises à Rouen.',
        '/professionnels'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Professionnels', url: 'https://www.fortisrenovation.fr/professionnels' },
      ]))}} />
      <main style={{ paddingTop: 68 }}>
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
              Syndics · Bailleurs · Entreprises
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1, marginBottom: 24 }}>
              Maintenance immobilière<br />à Rouen — un seul<br />prestataire.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.75, marginBottom: 16 }}>
              Plomberie, électricité, menuiserie, peinture. Contrats annuels ou interventions ponctuelles — vous décidez. Un interlocuteur unique, des rapports clairs.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
              Fortis Rénovation · 193 Rue du Renard · 76000 Rouen · <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis pro</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
              {[
                { title: 'Contrat de maintenance annuel', desc: 'Forfait adapté à votre parc. Visites préventives, interventions incluses, rapport mensuel, tarif préférentiel.' },
                { title: 'Interventions ponctuelles', desc: "Besoin urgent ou travaux spécifiques ? On intervient à la demande avec devis rapide et rapport d'intervention." },
                { title: 'Rénovation entre locataires', desc: 'Remise en état complète entre deux locataires. Peinture, sol, salle de bain — appartement prêt à relouer.' },
                { title: 'Mise aux normes', desc: 'Électricité, accessibilité, DPE — on diagnostique et on met aux normes pour vous.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: 32, border: '1px solid rgba(26,26,24,0.1)', background: 'white' }}>
                  <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, marginBottom: 12 }}>{title}</h2>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 32, marginBottom: 48 }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ padding: '28px 0', borderBottom: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{q}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--dark)', padding: '72px 0', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 36, marginBottom: 16, color: 'white' }}>
              Parlons de votre parc.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              Devis gratuit sous 48h. Un rendez-vous, un interlocuteur.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Demander mon devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
