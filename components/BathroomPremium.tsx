import Image from 'next/image'
import Link from 'next/link'
import Realisations from '@/components/Realisations'
import AvisC from '@/components/AvisC'
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
  nearbyCommunes?: { href: string; name: string }[]
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

const finitions = [
  {
    label: 'Douche italienne et receveur extra-plat',
    icon: (<><rect x="9" y="10" width="14" height="3.4" rx="1.7" /><path d="M16 6 V10" /><path d="M12 16.5 V19.5" /><path d="M16 16.5 V20.8" /><path d="M20 16.5 V19.5" /></>),
  },
  {
    label: 'Robinetterie, colonne et paroi de douche',
    icon: (<><path d="M8 22 H14" /><path d="M11 22 V13 C11 8 22 8 22 14" /><path d="M11 16 H6" /><path d="M22 17 V19.5" /></>),
  },
  {
    label: 'Carrelage sol et murs, faïence et niches',
    icon: (<><rect x="8" y="8" width="16" height="16" rx="1" /><path d="M13.3 8 V24" /><path d="M18.7 8 V24" /><path d="M8 13.3 H24" /><path d="M8 18.7 H24" /></>),
  },
  {
    label: 'Meuble vasque, miroir, éclairage et prises',
    icon: (<><path d="M7 14 H25" /><path d="M11 14 C11 21 21 21 21 14" /><path d="M19 14 V10 H15" /><path d="M15 10 V12" /></>),
  },
  {
    label: 'Plomberie, évacuations et étanchéité',
    icon: (<><path d="M7 9 H13" /><path d="M19 9 H25" /><path d="M10 9 V18 a6 6 0 0 0 12 0 V9" /></>),
  },
  {
    label: 'Nettoyage et finitions de livraison',
    icon: (<><path d="M13 5 L14.6 11.4 L21 13 L14.6 14.6 L13 21 L11.4 14.6 L5 13 L11.4 11.4 Z" /><path d="M22.5 17 l0.9 3 3 0.9 -3 0.9 -0.9 3 -0.9 -3 -3 -0.9 3 -0.9 Z" /></>),
  },
]

export function BathroomPillar({ faqs }: { faqs: BathroomFaq[] }) {
  return (
    <>
      <style>{bathroomStyles}</style>
      <main className="bath-page">
        <section className="bath-hero bath-hero-pillar">
          <div className="bath-hero-rings" aria-hidden="true">
            <svg viewBox="-960 -540 1920 1080" preserveAspectRatio="xMidYMid slice">
              <g className="bath-rings-base">
                <circle r="150" strokeOpacity={0.16} />
                <circle r="280" strokeOpacity={0.12} />
                <circle r="430" strokeOpacity={0.085} />
                <circle r="600" strokeOpacity={0.06} />
                <circle r="800" strokeOpacity={0.04} />
              </g>
              <circle className="bath-ripple" r="170" />
              <circle className="bath-ripple" r="170" style={{ animationDelay: '2.1s' }} />
              <circle className="bath-ripple" r="170" style={{ animationDelay: '4.2s' }} />
            </svg>
          </div>
          <div className="container bath-hero-grid" data-reveal>
            <div className="bath-hero-copy">
              <p className="bath-eyebrow">Salle de bain design clé en main · Rouen</p>
              <h1>Rénovation de salle de bain à Rouen, du plan 3D à la livraison.</h1>
              <p>
                Fortis conçoit et réalise votre salle de bain avec une méthode simple :
                visualisation 3D, devis clair, chantier propre et résultat fini.
              </p>
              <ul className="bath-hero-chips">
                <li>Plan 3D inclus</li>
                <li>Prix fixe, délais tenus</li>
                <li>Chantier propre</li>
              </ul>
              <div className="bath-actions">
                <Link href="/devis" className="btn btn-gold">Demander mon plan 3D</Link>
                <a href="tel:+33767491324" className="btn btn-outline-white">Parler de mon projet</a>
              </div>
              <div className="bath-hero-trust"><span className="bath-stars">★★★★★</span>5/5 · 28 avis Google vérifiés</div>
            </div>
            <div className="bath-hero-media">
              <Image
                src="/salle-de-bain-rouen-hero.jpg"
                alt="Rénovation de salle de bain à Rouen : marbre, douche à l’italienne et meuble suspendu"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
              />
              <span className="bath-hero-badge">Plan 3D inclus</span>
            </div>
          </div>
        </section>

        <section className="bath-band bath-proof">
          <div className="container bath-proof-grid" data-reveal>
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
          <div className="container bath-split" data-reveal>
            <div>
              <p className="bath-eyebrow">Ce que vous recevez</p>
              <h2>Une méthode lisible, pensée pour éviter les surprises.</h2>
            </div>
            <ol className="bath-stepper">
              {process.map(([n, title, text]) => (
                <li className="bath-step" key={title} data-reveal>
                  <span className="bath-step-num">{n}</span>
                  <div className="bath-step-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bath-section bath-white">
          <div className="container bath-materials" data-reveal>
            <div>
              <p className="bath-eyebrow">Finitions</p>
              <h2>Le premium se voit surtout dans les détails.</h2>
              <p>
                Une belle salle de bain ne dépend pas seulement d’un carrelage.
                Elle dépend des alignements, de l’éclairage, de l’étanchéité, des joints,
                de la ventilation et de la cohérence entre chaque choix.
              </p>
              <p className="bath-brands">Selon votre projet et votre budget, nous posons les grandes marques — <strong>Geberit, Grohe, Villeroy &amp; Boch, Hansgrohe</strong>.</p>
            </div>
            <div className="bath-fin-grid">
              {finitions.map(({ label, icon }) => (
                <div className="bath-fin-item" key={label} data-reveal>
                  <span className="bath-fin-ic"><svg viewBox="0 0 32 32" aria-hidden="true"><g>{icon}</g></svg></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bath-section">
          <div className="container bath-split bath-budget" data-reveal>
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

        <Realisations />
        <AvisC />

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

        <BathroomFaqSection faqs={faqs} />
        <BathroomFinalCta />
      </main>
    </>
  )
}

export function BathroomSupportPage({ eyebrow, title, intro, heroImage, heroAlt, proof, sections, faqs, nearbyCommunes }: BathroomSupportPageProps) {
  return (
    <>
      <style>{bathroomStyles}</style>
      <main className="bath-page">
        <section className="bath-hero bath-hero-compact">
          <div className="container bath-hero-grid" data-reveal>
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
          <div className="container bath-proof-grid" data-reveal>
            {proof.map((item) => (
              <div className="bath-proof-item" key={item}>
                <strong>•</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bath-section bath-white">
          <div className="container bath-content-list" data-reveal>
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

        {nearbyCommunes && nearbyCommunes.length > 0 && (
          <section className="bath-section bath-white">
            <div className="container">
              <div className="bath-section-head">
                <p className="bath-eyebrow">À proximité</p>
                <h2>Rénovation de salle de bain près de chez vous.</h2>
              </div>
              <div className="bath-communes">
                {nearbyCommunes.map((c) => (
                  <Link key={c.href} href={c.href} className="bath-commune-chip">{c.name}</Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
.bath-hero-pillar { position: relative; overflow: hidden; }
.bath-hero-rings { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.bath-hero-rings svg { width: 100%; height: 100%; display: block; }
.bath-hero-rings circle { fill: none; stroke: var(--gold); }
.bath-rings-base { transform-box: fill-box; transform-origin: center; animation: bathRingsBreath 9s ease-in-out infinite; }
.bath-rings-base circle { stroke-width: 1.2; }
@keyframes bathRingsBreath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
.bath-ripple { stroke-width: 1.4; transform-box: fill-box; transform-origin: center; opacity: 0; animation: bathRipple 6.6s linear infinite; }
@keyframes bathRipple { 0% { transform: scale(.18); opacity: 0; } 9% { opacity: .26; } 100% { transform: scale(4); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .bath-rings-base, .bath-ripple { animation: none; } .bath-ripple { display: none; } }
.bath-hero-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 58px; align-items: center; }
.bath-hero-pillar .bath-hero-grid { position: relative; z-index: 1; }
.bath-hero-copy h1 { font-size: clamp(42px, 5vw, 72px); line-height: .98; max-width: 780px; margin-bottom: 24px; }
.bath-hero-pillar .bath-hero-copy h1 { font-size: clamp(38px, 4.4vw, 60px); }
.bath-hero-copy p:not(.bath-eyebrow) { max-width: 560px; color: rgba(255,255,255,.68); font-size: 16px; line-height: 1.85; }
.bath-eyebrow { color: var(--gold); font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 18px; }
.bath-section .bath-eyebrow { color: var(--gold-deep); }
.bath-hero-chips { list-style: none; margin: 26px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 24px; }
.bath-hero-chips li { font-size: 13px; color: rgba(255,255,255,.74); display: flex; align-items: center; gap: 10px; }
.bath-hero-chips li::before { content: ''; width: 16px; height: 1px; background: var(--gold); flex-shrink: 0; }
.bath-hero-trust { font-size: 13px; color: rgba(255,255,255,.62); margin-top: 24px; }
.bath-stars { color: var(--gold); letter-spacing: 3px; margin-right: 8px; }
.bath-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
.bath-actions-center { justify-content: center; }
.bath-hero-media { position: relative; min-height: 540px; border: 1px solid rgba(184,151,90,.34); overflow: hidden; }
.bath-hero-badge { position: absolute; top: 14px; left: 14px; z-index: 2; background: rgba(17,17,16,.66); -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); color: var(--gold); border: 1px solid rgba(184,151,90,.5); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: 7px 12px; }
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
.bath-stepper { list-style: none; margin: 0; padding: 0; position: relative; }
.bath-stepper::before { content: ''; position: absolute; left: 18px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(var(--gold), rgba(184,151,90,.12)); }
.bath-step { position: relative; display: grid; grid-template-columns: 56px minmax(0, 1fr); gap: 20px; padding-bottom: 30px; }
.bath-step:last-child { padding-bottom: 0; }
.bath-step-num { position: relative; z-index: 1; width: 37px; height: 37px; border-radius: 50%; border: 1px solid rgba(184,151,90,.5); background: var(--paper); color: var(--gold-deep); font-family: 'Bodoni Moda', serif; font-size: 16px; display: flex; align-items: center; justify-content: center; }
.bath-step-body h3 { font-size: 19px; margin-bottom: 6px; }
.bath-step-body p { color: var(--ink-soft); font-size: 14px; line-height: 1.8; }
.bath-card h3, .bath-content-list h2, .bath-faq h3 { font-size: 22px; margin-bottom: 8px; }
.bath-card p, .bath-content-list p, .bath-faq p { color: var(--ink-soft); font-size: 14px; line-height: 1.8; }
.bath-materials { display: grid; grid-template-columns: minmax(0, .75fr) minmax(0, 1fr); gap: 72px; align-items: center; }
.bath-materials h2 { font-size: clamp(32px, 4vw, 46px); margin-bottom: 18px; }
.bath-materials p { color: var(--ink-soft); line-height: 1.85; }
.bath-brands { margin-top: 18px; font-size: 14px; color: var(--ink-soft); line-height: 1.7; }
.bath-brands strong { color: var(--ink); font-weight: 600; }
.bath-fin-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.bath-fin-item { display: flex; align-items: center; gap: 14px; border: 1px solid rgba(26,26,24,.1); background: var(--paper); padding: 16px 18px; color: var(--ink-soft); font-size: 13.5px; line-height: 1.5; transition: border-color .2s, transform .2s; }
.bath-fin-item:hover { border-color: rgba(184,151,90,.6); transform: translateY(-2px); }
.bath-fin-ic { flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(184,151,90,.35); display: flex; align-items: center; justify-content: center; }
.bath-fin-ic svg { width: 24px; height: 24px; }
.bath-fin-ic svg g { fill: none; stroke: var(--gold-deep); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
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
.bath-communes { display: flex; flex-wrap: wrap; gap: 10px; }
.bath-commune-chip { display: inline-block; font-size: 13px; font-weight: 500; color: var(--ink); background: var(--paper); border: 1px solid rgba(184,151,90,0.45); border-radius: 40px; padding: 9px 18px; transition: transform .18s ease, border-color .18s ease, color .18s ease; }
.bath-commune-chip:hover { transform: translateY(-2px); border-color: var(--gold); color: var(--gold-deep); }
@media (max-width: 980px) {
  .bath-hero-grid, .bath-split, .bath-materials, .bath-faq, .bath-content-list article { grid-template-columns: 1fr; gap: 32px; }
  .bath-hero { padding: 58px 0 0; }
  .bath-hero-pillar { padding-bottom: 0; }
  .bath-hero-media { min-height: 360px; }
  .bath-proof-grid, .bath-card-grid, .bath-fin-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .bath-page { padding-top: 72px; }
  .bath-hero-copy h1 { font-size: 40px; }
  .bath-proof-grid, .bath-card-grid, .bath-fin-grid { grid-template-columns: 1fr; }
  .bath-proof-item { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.1); }
  .bath-section { padding: 58px 0; }
  .bath-price-list div { display: block; }
  .bath-price-list strong { display: block; text-align: left; margin-top: 6px; }
}
`
