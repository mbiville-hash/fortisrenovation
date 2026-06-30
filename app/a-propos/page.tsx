import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_SCHEMA, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'À propos — Fortis Rénovation, entreprise de rénovation à Rouen',
  description: "L'histoire de Fortis Rénovation à Rouen : née du constat qu'on trouve d'excellents techniciens, mais peu de partenaires fiables. Rigueur, sécurité, parole tenue.",
  alternates: { canonical: 'https://www.fortisrenovation.fr/a-propos' },
  openGraph: {
    title: 'À propos — Fortis Rénovation',
    description: "L'histoire derrière Fortis Rénovation à Rouen : fiabilité, sécurité, parole tenue.",
    url: 'https://www.fortisrenovation.fr/a-propos',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'Fortis Rénovation' }],
  },
}

const storyP = { fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.85, marginBottom: 18 } as const
const eyebrowDark = { fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 22 } as const

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BASE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'À propos', url: 'https://www.fortisrenovation.fr/a-propos' },
      ]))}} />

      <style>{`
        @media (max-width: 768px) {
          .apropos-story { grid-template-columns: 1fr !important; gap: 40px !important; }
          .apropos-photo { max-width: 320px; margin: 0 auto; }
        }
      `}</style>

      <main style={{ paddingTop: 68 }}>
        {/* Hero */}
        <section style={{ background: 'var(--dark)', padding: '110px 0 84px', color: 'white' }}>
          <div className="container" data-reveal style={{ maxWidth: 860 }}>
            <p style={eyebrowDark}>Notre histoire</p>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.12, marginBottom: 22 }}>
              Le partenaire que nous aurions voulu trouver.
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 600 }}>
              Tout commence par un constat, vécu de l'intérieur.
            </p>
          </div>
        </section>

        {/* Le constat + Le saut */}
        <section style={{ background: 'var(--paper)', padding: '88px 0' }}>
          <div className="container" data-reveal>
            <div className="apropos-story" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 72, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(24px,2.6vw,30px)', marginBottom: 20, lineHeight: 1.25 }}>Le constat</h2>
                <p style={storyP}>
                  Le bâtiment ne manque pas de bons techniciens. Ce qui manque, c'est celui qui rappelle, qui chiffre clairement, qui tient ses délais et reste joignable une fois l'acompte versé. Marc-Antoine Biville l'a appris en investisseur : en 2022, il achète deux appartements à mettre en location, et se heurte au même obstacle à chaque chantier — trouver quelqu'un d'aussi fiable dans le suivi que dans le geste.
                </p>
                <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(24px,2.6vw,30px)', margin: '40px 0 20px', lineHeight: 1.25 }}>Le saut</h2>
                <p style={{ ...storyP, marginBottom: 0 }}>
                  Le talent n'était pas en cause. Le sérieux, si. Alors plutôt que de s'en accommoder, il quitte un poste de cadre qui ne l'animait plus, passe un CAP de Maintenance technique des bâtiments et fonde Fortis en 2024 — du latin, la force et le courage. Le nom n'a rien d'anodin : c'était un vrai saut dans l'inconnu, avec une idée tenant en une phrase — bâtir l'exact inverse de ce qui lui avait manqué.
                </p>
              </div>
              <div className="apropos-photo" style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: 2 }}>
                <Image
                  src="/IMG_4452.jpg"
                  alt="Marc-Antoine Biville, fondateur de Fortis Rénovation"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* La sécurité — la conviction */}
        <section style={{ background: 'var(--dark)', padding: '90px 0', color: 'white' }}>
          <div className="container" data-reveal style={{ maxWidth: 780 }}>
            <p style={eyebrowDark}>L'obsession</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.2, marginBottom: 24 }}>La sécurité, d'abord.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.85 }}>
              S'il fallait résumer notre différence à une obsession, ce serait la sécurité — un réflexe hérité de l'industrie, d'où vient notre fondateur. Dans le bâtiment, elle passe encore trop souvent après le reste, et personne n'en parle. Prenez la découpe du béton : sans aspiration, elle libère une poussière que les compagnons respirent toute la journée. Ce sont ces détails — invisibles pour le client, lourds de conséquences pour ceux qui travaillent — que Fortis refuse de laisser filer. Parce qu'un chantier bien tenu, c'est déjà la promesse d'un travail bien fait.
            </p>
          </div>
        </section>

        {/* La preuve */}
        <section style={{ background: 'white', padding: '90px 0' }}>
          <div className="container" data-reveal style={{ maxWidth: 780, textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: 22 }}>La preuve, sur le terrain</p>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(22px,2.8vw,30px)', lineHeight: 1.4, color: 'var(--ink)', marginBottom: 26 }}>
              Un vendredi soir, 23 heures, le téléphone sonne : une fuite. Sur place en une heure, réparée le lendemain. C'est précisément pour ces moments-là que Fortis existe.
            </p>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.8, maxWidth: 620, margin: '0 auto' }}>
              Du dépannage à 200 € à la réfection complète d'un appartement à 60 000 €, rien ne change : le même soin, le même interlocuteur, la même parole tenue.
            </p>
          </div>
        </section>

        {/* Pour qui + CTA */}
        <section style={{ background: 'var(--dark)', padding: '86px 0', textAlign: 'center', color: 'white' }}>
          <div className="container" data-reveal style={{ maxWidth: 720 }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(26px,3vw,40px)', marginBottom: 18 }}>Faisons connaissance.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 22px' }}>
              Syndics, gestionnaires locatifs, investisseurs, particuliers exigeants : à Rouen et dans sa métropole, Fortis s'adresse à celles et ceux qui cherchent, eux aussi, un partenaire sur qui compter.
            </p>
            <div style={{ marginBottom: 32 }}>
              <span style={{ color: 'var(--gold)', fontSize: 16, letterSpacing: 4 }}>★★★★★</span>
              <span style={{ fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)', marginLeft: 10 }}>29 avis Google vérifiés</span>
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/devis" className="btn btn-gold">Parler de votre projet</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
