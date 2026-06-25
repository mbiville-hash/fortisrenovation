import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "Salle de bain senior Rouen — Adaptation & MaPrimeAdapt'",
  description: "Adaptation salle de bain pour senior à Rouen. Douche à l'italienne, barres d'appui. MaPrimeAdapt' jusqu'à 70 % pris en charge. Étude sous 48h.",
  alternates: { canonical: 'https://www.fortisrenovation.fr/salle-de-bain-senior' },
  openGraph: {
    title: "Salle de bain senior Rouen — Adaptation & MaPrimeAdapt'",
    description: "Adaptation salle de bain pour senior à Rouen. MaPrimeAdapt' jusqu'à 70 % pris en charge. Étude sous 48h.",
    url: 'https://www.fortisrenovation.fr/salle-de-bain-senior',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

const faqs = [
  {
    q: 'Pourquoi adapter la salle de bain de mes parents maintenant ?',
    a: "La salle de bain est la pièce la plus accidentogène pour les seniors : 80 % des chutes à domicile s'y produisent. Agir avant un incident est toujours moins coûteux — financièrement et humainement — qu'après. De plus, certaines aides comme MaPrimeAdapt' ont des plafonds de dossiers annuels : mieux vaut anticiper.",
  },
  {
    q: 'Quels travaux sont prioritaires pour une salle de bain senior ?',
    a: "Le remplacement de la baignoire par une douche à l'italienne (sans seuil) est généralement le premier chantier. On y ajoute des barres d'appui aux bons emplacements, un sol antidérapant et, si nécessaire, un WC surélevé avec accoudoirs. Ces quatre aménagements couvrent l'essentiel des risques.",
  },
  {
    q: "Qu'est-ce que MaPrimeAdapt' et mes parents peuvent-ils en bénéficier ?",
    a: "MaPrimeAdapt' est l'aide principale de l'État pour adapter un logement à la perte d'autonomie. Vos parents y sont éligibles s'ils ont 70 ans ou plus (sans autre condition), ou entre 60 et 69 ans avec une perte d'autonomie reconnue (GIR 1 à 6). Le logement doit être leur résidence principale, qu'ils soient propriétaires ou locataires du parc privé. Des plafonds de ressources s'appliquent.",
  },
  {
    q: "Quel est le montant de MaPrimeAdapt' pour une salle de bain ?",
    a: "L'aide couvre 50 % du montant des travaux pour les ménages aux revenus modestes, et 70 % pour les revenus très modestes, dans la limite d'un plafond de 22 000 € HT de dépenses. Concrètement, une rénovation de salle de bain senior complète à Rouen peut être prise en charge à hauteur de 8 000 à 15 000 € selon votre situation.",
  },
  {
    q: "Comment faire la demande de MaPrimeAdapt' ? Est-ce compliqué ?",
    a: "La demande se dépose en ligne sur la plateforme monprojetanah.fr. Un assistant à maîtrise d'ouvrage (AMO) agréé vous accompagne gratuitement : diagnostic du logement, constitution du dossier, mise en relation avec l'artisan. Chez Fortis Rénovation, nous vous guidons dès le premier rendez-vous pour identifier votre éligibilité et les démarches à suivre.",
  },
  {
    q: "MaPrimeAdapt' est-elle cumulable avec d'autres aides ?",
    a: "Oui. MaPrimeAdapt' se cumule avec les aides locales de votre mairie ou département, l'Allocation Personnalisée d'Autonomie (APA), la Prestation de Compensation du Handicap (PCH) et les aides à la rénovation énergétique (MaPrimeRénov'). Dans certains cas, le reste à charge peut être très faible.",
  },
  {
    q: 'Combien coûte une rénovation de salle de bain senior à Rouen ?',
    a: "Pour un aménagement ciblé (douche à l'italienne + barres d'appui + sol antidérapant), comptez entre 4 000 et 9 000 € TTC selon la configuration de la pièce et les matériaux choisis. Après MaPrimeAdapt', le reste à charge peut descendre à 1 500–3 000 € pour un ménage aux revenus modestes. Nous établissons un devis détaillé gratuitement sous 48h.",
  },
  {
    q: 'Combien de temps durent les travaux ? Mon parent doit-il partir ?',
    a: "Un chantier de salle de bain senior dure en moyenne 3 à 10 jours selon l'ampleur des travaux. Nous planifions les interventions pour limiter au maximum la gêne : accès aux sanitaires maintenus le soir, chantier propre chaque fin de journée. Dans la grande majorité des cas, il n'est pas nécessaire de quitter le logement.",
  },
]

const amenagements = [
  {
    title: "Douche à l'italienne",
    desc: "Remplacement de la baignoire par une douche de plain-pied, sans seuil ni marche. Entrée et sortie sécurisées, nettoyage facilité.",
  },
  {
    title: "Barres d'appui & poignées",
    desc: "Pose aux emplacements stratégiques (entrée douche, WC, lavabo) selon les recommandations ergonomiques.",
  },
  {
    title: 'WC surélevé & accessoires PMR',
    desc: "Rehausseur ou WC à hauteur adaptée avec accoudoirs relevables. Facilite l'assise et le lever en toute autonomie.",
  },
  {
    title: 'Sol antidérapant & accessibilité',
    desc: "Revêtement de sol adapté (coefficient R11 minimum) et élargissement de porte si nécessaire pour faciliter le passage avec une aide de marche.",
  },
]

export default function SalleDeBainSeniorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        'Adaptation salle de bain senior Rouen',
        "Rénovation et adaptation de salle de bain pour seniors à Rouen. MaPrimeAdapt' jusqu'à 70 % pris en charge.",
        '/salle-de-bain-senior'
      ))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Salle de bain senior', url: 'https://www.fortisrenovation.fr/salle-de-bain-senior' },
      ]))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <main style={{ paddingTop: 68 }}>

        {/* HERO */}
        <section style={{ background: 'var(--dark)', padding: '100px 0 80px', color: 'white' }}>
          <div className="container">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
              Pour vos proches · Maintien à domicile · Rouen
            </p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 24 }}>
              Une salle de bain adaptée.<br />
              On s&apos;occupe de tout.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 520, lineHeight: 1.8, marginBottom: 12 }}>
              Votre parent veut rester chez lui. Nous transformons sa salle de bain pour que ce soit possible, en toute sécurité. Des aides publiques comme MaPrimeAdapt&apos; peuvent financer jusqu&apos;à 70 % des travaux — les démarches se font directement sur{' '}
              <strong style={{ color: 'white' }}>monprojetanah.fr</strong>, avec l&apos;accompagnement gratuit d&apos;un conseiller France Rénov&apos;.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 40 }}>
              Fortis Rénovation · 193 Rue du Renard · 76000 Rouen ·{' '}
              <a href="tel:+33767491324" style={{ color: 'var(--gold)' }}>07 67 49 13 24</a>
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Étudier le projet</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

        {/* AMÉNAGEMENTS */}
        <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
          <div className="container">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Ce que nous réalisons
            </p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(28px, 3vw, 40px)', marginBottom: 48, color: 'var(--ink)' }}>
              Les aménagements qui changent tout.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
              {amenagements.map(({ title, desc }) => (
                <div key={title} style={{ padding: 32, border: '1px solid rgba(26,26,24,0.1)', background: 'white' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 19, marginBottom: 12, color: 'var(--ink)' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: 'var(--dark)', padding: '64px 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, textAlign: 'center' }}>
              {[
                { chiffre: '70 %', label: "pris en charge par MaPrimeAdapt'" },
                { chiffre: '22 000 €', label: 'de travaux subventionnables' },
                { chiffre: '48h', label: 'pour recevoir votre devis' },
                { chiffre: '3–10 j', label: 'de chantier selon les travaux' },
              ].map(({ chiffre, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 40, color: 'var(--gold)', marginBottom: 8 }}>{chiffre}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Vos questions
            </p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(28px, 3vw, 38px)', marginBottom: 48, color: 'var(--ink)' }}>
              Ce que les familles nous demandent.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ padding: '28px 0', borderBottom: '1px solid rgba(26,26,24,0.1)' }}>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{q}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.8 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: 'var(--dark)', padding: '80px 0', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 16, color: 'white' }}>
              Parlons de votre projet.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Étude sous 48h. Un rendez-vous, un interlocuteur. On vérifie votre éligibilité à MaPrimeAdapt&apos; dès le premier appel.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Étudier le projet</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
