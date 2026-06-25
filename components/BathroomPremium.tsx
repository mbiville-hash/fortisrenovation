import Image from 'next/image'
import Link from 'next/link'
import Realisations from '@/components/Realisations'
import Breadcrumb from '@/components/Breadcrumb'

export type BathroomFaq = {
  q: string
  a: string
}

export type BathroomSupportPageProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroAlt: string
  proof: string[]
  sections: Array<{
    title: string
    text: string
  }>
  faqs: BathroomFaq[]
}

const supportLinks = [
  {
    href: '/douche-italienne-rouen',
    title: 'Douche italienne',
    text: 'Plain-pied, étanchéité, carrelage, paroi et finitions propres.',
  },
  {
    href: '/prix-renovation-salle-de-bain-rouen',
    title: 'Budget & prix',
    text: 'Comprendre les fourchettes selon surface, dépose et matériaux.',
  },
  {
    href: '/renovation-salle-de-bain-cle-en-main-rouen',
    title: 'Clé en main',
    text: 'Un seul interlocuteur, du plan 3D à la livraison finale.',
  },
]

const process = [
  ['01', 'Visite & mesures', 'On relève les contraintes, les arrivées, les évacuations et vos usages réels.'],
  ['02', 'Plan 3D', 'Vous visualisez la salle de bain avant travaux, avec une base claire pour décider.'],
  ['03', 'Devis détaillé', 'Postes, matériaux, calendrier et limites du chantier sont posés avant signature.'],
  ['04', 'Chantier propre', 'Coordination, protection, nettoyage et points réguliers pendant les travaux.'],
  ['05', 'Livraison', 'Contrôle des finitions, photos, conseils d’entretien et garanties.'],
]

export function BathroomPillar({ faqs }: { faqs: BathroomFaq[] }) {
  return (
    <>
      <style>{bathroomStyles}</style>
      <main className="bath-page">
        <section className="bath-hero">
          <div className="container bath-hero-grid">
            <div className="bath-hero-copy">
              <p className="bath-eyebrow">Salle de bain design clé en main · Rouen</p>
              <h1>Rénovation de salle de bain à Rouen, du plan 3D à la livraison.</h1>
              <p>
                Fortis conçoit et réalise votre salle de bain avec une méthode simple :
                visualisation 3D, devis clair, chantier propre et résultat fini.
              </p>
              <div className="bath-actions">
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
                <a href="tel:+33767491324" className="btn btn-outline-white">Parler de mon projet</a>
              </div>
            </div>
            <div className="bath-hero-media">
              <Image
                src="/salle-de-bain-3d.jpg"
                alt="Salle de bain design en 3D pour une rénovation à Rouen"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        <section className="bath-band bath-proof">
          <div className="container bath-proof-grid">
            {[
              ['48h', 'pour recevoir une première proposition claire'],
              ['3D', 'incluse pour visualiser avant de signer'],
              ['1', 'interlocuteur pour coordonner tous les corps d’état'],
              ['Rouen', 'et toute la métropole normande'],
            ].map(([value, label]) => (
              <div className="bath-proof-item" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bath-section">
          <div className="container bath-split">
            <div>
              <p className="bath-eyebrow">Ce que vous recevez</p>
              <h2>Une méthode lisible, pensée pour éviter les surprises.</h2>
            </div>
            <div className="bath-process">
              {process.map(([n, title, text]) => (
                <div className="bath-process-row" key={title}>
                  <span>{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bath-section bath-white">
          <div className="container bath-materials">
            <div>
              <p className="bath-eyebrow">Finitions</p>
              <h2>Le premium se voit surtout dans les détails.</h2>
              <p>
                Une belle salle de bain ne dépend pas seulement d’un carrelage.
                Elle dépend des alignements, de l’éclairage, de l’étanchéité, des joints,
                de la ventilation et de la cohérence entre chaque choix.
              </p>
            </div>
            <div className="bath-material-grid">
              {[
                'Douche italienne et receveur extra-plat',
                'Robinetterie, colonne et paroi de douche',
                'Carrelage sol et murs, faïence et niches',
                'Meuble vasque, miroir, éclairage et prises',
                'Plomberie, évacuations et étanchéité',
                'Nettoyage et finitions de livraison',
              ].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="bath-section">
          <div className="container bath-split bath-budget">
            <div>
              <p className="bath-eyebrow">Budget indicatif</p>
              <h2>Un prix dépend de la pièce, pas d’une promesse générique.</h2>
              <p>
                Nous donnons une fourchette après visite, puis un devis détaillé.
                Les postes qui changent le plus le budget sont la dépose, la plomberie,
                le carrelage, la gamme sanitaire et l’accessibilité.
              </p>
            </div>
            <div className="bath-price-list">
              {[
                ['Rafraîchissement ciblé', '3 500 à 7 500 €'],
                ['Rénovation complète standard', '8 000 à 15 000 €'],
                ['Salle de bain design clé en main', '15 000 € et plus'],
              ].map(([label, price]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bath-section bath-white">
          <div className="container">
            <div className="bath-section-head">
              <p className="bath-eyebrow">Guides utiles</p>
              <h2>Approfondir votre projet salle de bain.</h2>
            </div>
            <div className="bath-card-grid">
              {supportLinks.map((item) => (
                <Link className="bath-card" href={item.href} key={item.href}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>Lire le guide</span>
                </Link>
              ))}
              <Link className="bath-card" href="/salle-de-bain-senior">
                <h3>Salle de bain senior</h3>
                <p>Adapter la pièce pour le maintien à domicile et les aides possibles.</p>
                <span>Voir la page</span>
              </Link>
            </div>
          </div>
        </section>

        <Realisations />
        <BathroomFaqSection faqs={faqs} />
        <BathroomFinalCta />
      </main>
    </>
  )
}

export function BathroomSupportPage({ eyebrow, title, intro, heroImage, heroAlt, proof, sections, faqs }: BathroomSupportPageProps) {
  return (
    <>
      <style>{bathroomStyles}</style>
      <main className="bath-page">
        <section className="bath-hero bath-hero-compact">
          <div className="container bath-hero-grid">
            <div className="bath-hero-copy">
              <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Salle de bain Rouen', href: '/salle-de-bain-rouen' }, { name: eyebrow.split('·').pop()?.trim() ?? 'Salle de bain' }]} />
              <p className="bath-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p>{intro}</p>
              <div className="bath-actions">
                <Link href="/devis" className="btn btn-gold">Étudier mon projet</Link>
                <Link href="/salle-de-bain-rouen" className="btn btn-outline-white">Voir la méthode Fortis</Link>
              </div>
            </div>
            <div className="bath-hero-media">
              <Image src={heroImage} alt={heroAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="bath-band bath-proof">
          <div className="container bath-proof-grid">
            {proof.map((item) => (
              <div className="bath-proof-item" key={item}>
                <strong>•</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bath-section bath-white">
          <div className="container bath-content-list">
            {sections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bath-section">
          <div className="container">
            <div className="bath-section-head">
              <p className="bath-eyebrow">À lire aussi</p>
              <h2>Construire un projet cohérent.</h2>
            </div>
            <div className="bath-card-grid">
              {supportLinks.map((item) => (
                <Link className="bath-card" href={item.href} key={item.href}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>Lire le guide</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BathroomFaqSection faqs={faqs} />
        <BathroomFinalCta />
      </main>
    </>
  )
}

function BathroomFaqSection({ faqs }: { faqs: BathroomFaq[] }) {
  return (
    <section className="bath-section bath-white">
      <div className="container bath-faq">
        <div>
          <p className="bath-eyebrow">Questions fréquentes</p>
          <h2>Les réponses avant le premier rendez-vous.</h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BathroomFinalCta() {
  return (
    <section className="bath-final">
      <div className="container">
        <p className="bath-eyebrow">Votre projet</p>
        <h2>Une salle de bain claire à imaginer, simple à suivre, belle à livrer.</h2>
        <div className="bath-actions bath-actions-center">
          <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
          <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
        </div>
      </div>
    </section>
  )
}

const bathroomStyles = `
.bath-page { padding-top: 72px; background: var(--paper); color: var(--ink); }
.bath-hero { background: var(--dark); color: white; padding: 84px 0 72px; }
.bath-hero-compact { padding-bottom: 64px; }
.bath-hero-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 58px; align-items: center; }
.bath-hero-copy h1 { font-size: clamp(42px, 5vw, 72px); line-height: .98; max-width: 780px; margin-bottom: 24px; }
.bath-hero-copy p:not(.bath-eyebrow) { max-width: 560px; color: rgba(255,255,255,.68); font-size: 16px; line-height: 1.85; }
.bath-eyebrow { color: var(--gold); font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 18px; }
.bath-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 34px; }
.bath-actions-center { justify-content: center; }
.bath-hero-media { position: relative; min-height: 540px; border: 1px solid rgba(184,151,90,.34); overflow: hidden; }
.bath-band { padding: 0; background: var(--dark); color: white; }
.bath-proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.1); }
.bath-proof-item { padding: 24px 22px; border-right: 1px solid rgba(255,255,255,.1); }
.bath-proof-item:last-child { border-right: 0; }
.bath-proof-item strong { display: block; font-family: 'Bodoni Moda', serif; color: var(--gold); font-size: 34px; line-height: 1; margin-bottom: 10px; }
.bath-proof-item span { color: rgba(255,255,255,.68); font-size: 13px; line-height: 1.55; }
.bath-section { padding: 86px 0; }
.bath-white { background: white; }
.bath-split { display: grid; grid-template-columns: minmax(0, .72fr) minmax(0, 1fr); gap: 72px; align-items: start; }
.bath-split h2, .bath-section-head h2, .bath-faq h2, .bath-final h2 { font-size: clamp(32px, 4vw, 48px); line-height: 1.08; margin-bottom: 18px; }
.bath-split p { color: var(--ink-soft); font-size: 15px; line-height: 1.85; max-width: 560px; }
.bath-process { border-top: 1px solid rgba(26,26,24,.12); }
.bath-process-row { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 22px; padding: 22px 0; border-bottom: 1px solid rgba(26,26,24,.12); }
.bath-process-row span { font-family: 'Bodoni Moda', serif; color: var(--gold); font-size: 28px; line-height: 1; }
.bath-process-row h3, .bath-card h3, .bath-content-list h2, .bath-faq h3 { font-size: 22px; margin-bottom: 8px; }
.bath-process-row p, .bath-card p, .bath-content-list p, .bath-faq p { color: var(--ink-soft); font-size: 14px; line-height: 1.8; }
.bath-materials { display: grid; grid-template-columns: minmax(0, .75fr) minmax(0, 1fr); gap: 72px; align-items: center; }
.bath-materials h2 { font-size: clamp(32px, 4vw, 46px); margin-bottom: 18px; }
.bath-materials p { color: var(--ink-soft); line-height: 1.85; }
.bath-material-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.bath-material-grid div { border: 1px solid rgba(26,26,24,.1); padding: 18px; color: var(--ink-soft); font-size: 13px; line-height: 1.6; background: var(--paper); }
.bath-price-list { background: var(--dark); color: white; padding: 28px; }
.bath-price-list div { display: flex; justify-content: space-between; gap: 24px; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,.12); }
.bath-price-list div:last-child { border-bottom: 0; }
.bath-price-list span { color: rgba(255,255,255,.68); font-size: 14px; }
.bath-price-list strong { color: var(--gold); text-align: right; white-space: nowrap; }
.bath-section-head { max-width: 680px; margin-bottom: 36px; }
.bath-card-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.bath-card { display: block; background: white; border: 1px solid rgba(26,26,24,.12); padding: 24px; min-height: 210px; transition: border-color .2s, transform .2s; }
.bath-white .bath-card { background: var(--paper); }
.bath-card:hover { border-color: rgba(184,151,90,.65); transform: translateY(-2px); }
.bath-card span { display: inline-block; margin-top: 18px; color: var(--gold); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.bath-content-list { display: grid; gap: 0; max-width: 920px; }
.bath-content-list article { display: grid; grid-template-columns: minmax(240px, .48fr) minmax(0, 1fr); gap: 44px; padding: 34px 0; border-bottom: 1px solid rgba(26,26,24,.1); }
.bath-content-list article:first-child { padding-top: 0; }
.bath-faq { display: grid; grid-template-columns: minmax(0, .55fr) minmax(0, 1fr); gap: 72px; }
.bath-faq article { padding: 24px 0; border-bottom: 1px solid rgba(26,26,24,.1); }
.bath-final { background: var(--dark); color: white; padding: 86px 0; text-align: center; }
.bath-final h2 { max-width: 760px; margin: 0 auto; color: white; }
@media (max-width: 980px) {
  .bath-hero-grid, .bath-split, .bath-materials, .bath-faq, .bath-content-list article { grid-template-columns: 1fr; gap: 32px; }
  .bath-hero { padding: 58px 0 0; }
  .bath-hero-media { min-height: 360px; }
  .bath-proof-grid, .bath-card-grid, .bath-material-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .bath-page { padding-top: 72px; }
  .bath-hero-copy h1 { font-size: 40px; }
  .bath-proof-grid, .bath-card-grid, .bath-material-grid { grid-template-columns: 1fr; }
  .bath-proof-item { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.1); }
  .bath-section { padding: 58px 0; }
  .bath-price-list div { display: block; }
  .bath-price-list strong { display: block; text-align: left; margin-top: 6px; }
}
`
