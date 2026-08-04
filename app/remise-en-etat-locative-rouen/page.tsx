import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Rings from '@/components/Rings'
import Breadcrumb from '@/components/Breadcrumb'
import ClientsStrip from '@/components/ClientsStrip'
import ReactiviteTimeline from '@/components/ReactiviteTimeline'
import CompteurLocatif from '@/components/CompteurLocatif'
import PrestationsLocatif from '@/components/PrestationsLocatif'
import ChiffresLocatif from '@/components/ChiffresLocatif'
import RapportPhotoLocatif from '@/components/RapportPhotoLocatif'
import DerouleLocatif from '@/components/DerouleLocatif'
import AvantApresLocatif from '@/components/AvantApresLocatif'
import GuidesLies from '@/components/GuidesLies'
import { guidesPro } from '@/lib/guides'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const TITRE = 'Remise en état de logements locatifs à Rouen'
const DESC =
  'Remise en état de logement locatif à Rouen : peinture, sols, sanitaires, plomberie et électricité. Chiffrage sous 48h, rapport photo, un seul interlocuteur.'
const URL = 'https://www.fortisrenovation.fr/remise-en-etat-locative-rouen'

export const metadata: Metadata = {
  title: TITRE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITRE, description: DESC, url: URL, locale: 'fr_FR', type: 'website',
    images: OG_IMAGE,
  },
}

const profils = [
  { t: 'Bailleurs privés', d: 'Vous suivez le chantier par photos, sans avoir à vous déplacer.' },
  { t: 'Gestionnaires locatifs et administrateurs de biens', d: 'Un chiffrage présentable au propriétaire tel quel.' },
  { t: 'Syndics de copropriété', d: 'Un seul interlocuteur, des parties privatives aux parties communes.' },
  { t: 'Conciergeries de courte durée', d: 'Des remises en état calées entre deux réservations.' },
]

export default function RemiseEnEtatLocativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(TITRE, DESC, '/remise-en-etat-locative-rouen')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
              { name: 'Maintenance immobilière', url: 'https://www.fortisrenovation.fr/maintenance-immobiliere-rouen' },
              { name: 'Remise en état locative', url: URL },
            ])
          ),
        }}
      />

      <style>{`
        .rel-hero { position: relative; overflow: hidden; background: var(--paper); padding: clamp(112px, 15vh, 160px) 0 clamp(56px, 7vw, 88px); }
        .rel-hero .container { display: flex; flex-wrap: wrap; align-items: center; gap: clamp(40px, 5vw, 72px); }
        .rel-hero-col { flex: 1 1 460px; min-width: 0; }
        .rel-hero-media { flex: 1 1 360px; min-width: 0; position: relative; }
        /* Le fil d'Ariane global est pensé pour les héros sombres : on le repasse en clair ici. */
        .rel-hero .breadcrumb span[aria-current] { color: var(--ink-faint); }
        .rel-hero .breadcrumb-sep { color: rgba(26,26,24,0.3); }
        .rel-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .rel-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .rel-h1 { font-family: 'Bodoni Moda', serif; font-size: clamp(34px, 4.3vw, 60px); line-height: 1.1; color: var(--ink); margin-bottom: 26px; }
        .rel-hline { display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em; }
        .rel-baseline { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: clamp(19px, 2.3vw, 24px); line-height: 1.4; color: var(--ink-soft); margin-bottom: 34px; max-width: 24ch; }
        .rel-cta { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 26px; }
        .rel-note { display: flex; align-items: center; gap: 12px; font-size: 13px; color: var(--ink-soft); }
        .rel-frame { position: relative; overflow: hidden; border-radius: 2px; aspect-ratio: 4 / 5; max-height: 620px; }
        .rel-cap { display: flex; align-items: center; gap: 10px; margin-top: 14px; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); }
        .rel-cap::before { content: ''; width: 24px; height: 1px; background: var(--gold); }

        .rel-profils { background: var(--paper); padding: clamp(64px, 9vw, 110px) 0; }
        .rel-profils-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 36px 64px; }
        .rel-profil { border-top: 1px solid rgba(26,26,24,0.10); padding-top: 24px; display: flex; gap: 16px; }
        .rel-profil-dia { color: var(--gold); font-size: 13px; line-height: 2; flex: none; }
        .rel-profil h3 { font-family: 'Bodoni Moda', serif; font-size: 21px; color: var(--ink); }
        .rel-profil p { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); margin-top: 6px; }

        .rel-final { position: relative; overflow: hidden; background: var(--dark); color: var(--white); padding: clamp(80px, 11vw, 136px) 0; text-align: center; }
        .rel-final .container { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .rel-final-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: inline-flex; align-items: center; gap: 10px; margin-bottom: 24px; }
        .rel-final-eye::before, .rel-final-eye::after { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .rel-final h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(32px, 4.5vw, 54px); max-width: 18ch; margin-bottom: 22px; }
        .rel-final p { font-size: 15.5px; line-height: 1.7; color: rgba(255,255,255,0.7); max-width: 44ch; margin-bottom: 36px; }
        .rel-final-mail { font-size: 13px; letter-spacing: 0.06em; color: rgba(255,255,255,0.6); margin-top: 26px; }
        .rel-final-mail span { display: inline-block; color: var(--gold); transition: transform 0.35s cubic-bezier(.16,1,.3,1); }
        .rel-final-mail:hover span { transform: translateX(5px); }

        @media (prefers-reduced-motion: no-preference) {
          .rel-hline > span { display: block; animation: relLine 0.95s cubic-bezier(.16,1,.3,1) both; }
          .rel-hline:nth-child(2) > span { animation-delay: 0.15s; }
          .rel-hline:nth-child(3) > span { animation-delay: 0.3s; }
          .rel-frame { animation: relWipe 1.2s cubic-bezier(.16,1,.3,1) 0.3s both; }
        }
        @keyframes relLine { from { transform: translateY(112%); } to { transform: translateY(0); } }
        @keyframes relWipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0% 0); } }
      `}</style>

      <main>
        {/* Hero */}
        <section className="rel-hero">
          <div className="container">
            <div className="rel-hero-col">
              <Breadcrumb
                items={[
                  { name: 'Accueil', href: '/' },
                  { name: 'Maintenance immobilière', href: '/maintenance-immobiliere-rouen' },
                  { name: 'Remise en état locative' },
                ]}
              />
              <p className="rel-eye">Gestion locative · Rouen et 30&nbsp;km</p>
              <h1 className="rel-h1">
                <span className="rel-hline"><span>Remise en état</span></span>
                <span className="rel-hline"><span>de logements locatifs</span></span>
                <span className="rel-hline"><span>et dépannage à Rouen.</span></span>
              </h1>
              <p className="rel-baseline">Optimisez vos travaux, récupérez vos loyers.</p>
              <div className="rel-cta">
                <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
                <a href="tel:+33767491324" className="btn btn-outline">07 67 49 13 24</a>
              </div>
              <p className="rel-note">
                <span className="stars" aria-hidden="true">★★★★★</span>
                <span>5/5 · 30 avis Google</span>
              </p>
            </div>

            <div className="rel-hero-media">
              <Rings className="rings--tr rings--lg" />
              <div className="rel-frame">
                <Image
                  src="/realisations/salle-eau-renovee-rouen.jpg"
                  alt="Salle d'eau remise en état dans un logement locatif à Rouen — douche, meuble vasque et sol neufs"
                  fill
                  priority
                  sizes="(max-width: 900px) 92vw, 480px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="rel-cap">Salle d&apos;eau — remise en état complète</p>
            </div>
          </div>
        </section>

        <ReactiviteTimeline />
        <CompteurLocatif />
        <PrestationsLocatif />
        <ChiffresLocatif />
        <ClientsStrip />
        <RapportPhotoLocatif />
        <DerouleLocatif />
        <AvantApresLocatif />

        {/* À qui nous nous adressons */}
        <section className="rel-profils">
          <div className="container">
            <p className="rel-eye">Interlocuteurs</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--ink)', maxWidth: '20ch', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
              À qui nous nous adressons.
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: '62ch', marginBottom: 'clamp(28px, 4vw, 40px)' }}>
              À Rouen, six secteurs imposent l&apos;accord de la Ville avant toute nouvelle mise en
              location&nbsp;: voyez notre guide sur le{' '}
              <Link href="/guides/permis-de-louer-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>permis de louer</Link>{' '}
              pour savoir si vos lots sont concernés.
            </p>
            <div className="rel-profils-grid">
              {profils.map(({ t, d }) => (
                <div key={t} className="rel-profil" data-reveal>
                  <span className="rel-profil-dia" aria-hidden="true">◈</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GuidesLies
          guides={guidesPro}
          titre="Avant de chiffrer, savoir qui paie quoi"
          intro="Nos guides sur la répartition des réparations, la vétusté et le coût de la vacance — sources officielles à l'appui."
        />

        {/* Appel final */}
        <section className="rel-final">
          <Rings className="rings--tr rings--lg" />
          <Rings className="rings--bl" />
          <div className="container">
            <p className="rel-final-eye">Devis sous 48h</p>
            <h2>Un logement à remettre en état&nbsp;?</h2>
            <p>
              Envoyez photos et adresse&nbsp;: nous revenons vers vous avec un chiffrage et une date.
              Urgences traitées en quelques heures, 24h/24 · 7j/7.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
            <a className="rel-final-mail" href="mailto:mbiville@fortisrenovation.fr?subject=Demande%20de%20devis%20%E2%80%94%20Remise%20en%20%C3%A9tat%20locative">
              mbiville@fortisrenovation.fr <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
