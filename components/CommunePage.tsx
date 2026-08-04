import Link from 'next/link'
import Rings from '@/components/Rings'
import Breadcrumb from '@/components/Breadcrumb'
import ReactiviteTimeline from '@/components/ReactiviteTimeline'
import GuidesLies from '@/components/GuidesLies'
import { type Commune, SOURCE_INSEE, hrefCommune } from '@/lib/communes'
import { guidesPro } from '@/lib/guides'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

const BASE = 'https://www.fortisrenovation.fr'

const METIERS: [string, string, string][] = [
  ['/plombier-rouen', 'Plomberie', 'Fuites, colonnes, sanitaires, évacuations.'],
  ['/electricien-rouen', 'Électricité', 'Tableaux, mise aux normes, appareillage.'],
  ['/peintre-rouen', 'Peinture & enduits', 'Remise en peinture, reprises de supports.'],
  ['/pose-de-sol-rouen', 'Pose de sols', 'Parquet, stratifié, PVC, carrelage.'],
]

export default function CommunePage({ c }: { c: Commune }) {
  const slug = `/maintenance-immobiliere-${c.slug}`
  const dominante = c.periodes.reduce((a, b) => (b.pct > a.pct ? b : a))
  const maxPct = dominante.pct

  const faqs = [
    {
      q: `Intervenez-vous ${c.a} ?`,
      a: `Oui. ${c.nom} fait partie de notre zone d’intervention habituelle, dans un rayon d’environ 30 km autour de notre atelier rouennais. Devis gratuit et déplacement offert pour l’établir.`,
    },
    {
      q: `Quel est votre délai d’intervention ${c.a} ?`,
      a: 'Nous chiffrons sous 48h les demandes courantes. Pour une urgence — fuite, dégât des eaux, coupure — nous intervenons en quelques heures, avec une astreinte 24h/24 et 7j/7.',
    },
    {
      q: `Travaillez-vous pour les bailleurs et les gestionnaires ${c.a} ?`,
      a: `C’est notre cœur d’activité. ${c.locatairesPct} % des logements de ${c.nom} sont occupés par des locataires : nous intervenons entre deux baux, sur les parties communes et sur les demandes isolées, avec un rapport photo à chaque passage.`,
    },
    {
      q: 'Faites-vous les diagnostics amiante ou plomb ?',
      a: 'Non, ces diagnostics relèvent d’un diagnostiqueur certifié, et le désamiantage d’une entreprise spécialisée. Nous travaillons à partir de vos rapports existants et nous adaptons notre mode opératoire en conséquence.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        `Maintenance immobilière ${c.nom}`,
        `Maintenance immobilière et remise en état de logements locatifs ${c.a} : plomberie, électricité, peinture et sols. Devis sous 48h, rapport photo.`,
        slug
      )) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: BASE },
        { name: 'Maintenance immobilière', url: `${BASE}/maintenance-immobiliere-rouen` },
        { name: c.nom, url: `${BASE}${slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <style>{`
        .cp-hero { background: var(--dark); color: #fff; position: relative; overflow: hidden; padding: 100px 0 72px; }
        .cp-hero .container { position: relative; z-index: 1; }
        .cp-hero .breadcrumb span[aria-current] { color: rgba(255,255,255,0.55); }
        .cp-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 22px; display: flex; align-items: center; gap: 10px; }
        .cp-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .cp-h1 { font-family: 'Bodoni Moda', serif; font-size: clamp(32px, 4.4vw, 56px); line-height: 1.1; margin-bottom: 22px; }
        .cp-lead { font-size: 16px; color: rgba(255,255,255,0.68); max-width: 620px; line-height: 1.8; margin-bottom: 34px; }
        .cp-actions { display: flex; gap: 16px; flex-wrap: wrap; }

        .cp-chiffres { background: var(--ink); border-top: 1px solid rgba(184,151,90,0.3); border-bottom: 1px solid rgba(184,151,90,0.3); }
        .cp-chiffres-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
        .cp-ch { padding: 30px 26px; border-right: 1px solid rgba(184,151,90,0.2); }
        .cp-ch-v { font-family: 'Bodoni Moda', serif; font-size: 32px; color: var(--gold); line-height: 1; margin-bottom: 8px; font-variant-numeric: tabular-nums; }
        .cp-ch-l { font-size: 12.5px; font-weight: 600; color: #fff; margin-bottom: 4px; }
        .cp-ch-s { font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.08em; }

        .cp-sec { padding: 80px 0; }
        .cp-sec h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3.4vw, 40px); color: var(--ink); margin-bottom: 18px; }
        .cp-p { font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 680px; }

        .cp-barres { max-width: 680px; margin-top: 36px; }
        .cp-barre { display: grid; grid-template-columns: 96px 1fr 52px; align-items: center; gap: 14px; margin-bottom: 11px; }
        .cp-barre-l { font-size: 12.5px; color: var(--ink-soft); }
        .cp-barre-piste { height: 12px; background: rgba(26,26,24,0.08); border-radius: 2px; overflow: hidden; }
        .cp-barre-jauge { height: 100%; background: rgba(184,151,90,0.45); border-radius: 2px; }
        .cp-barre.est-max .cp-barre-jauge { background: var(--gold); }
        .cp-barre.est-max .cp-barre-l { color: var(--ink); font-weight: 600; }
        .cp-barre-v { font-size: 12.5px; color: var(--ink-soft); text-align: right; font-variant-numeric: tabular-nums; }
        .cp-src { font-size: 12px; color: #8a857a; font-style: italic; margin-top: 20px; }
        .cp-src a { color: #8a857a; text-decoration: underline; }

        .cp-patho { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; margin-top: 40px; }
        .cp-patho-c { background: #fff; border: 1px solid rgba(26,26,24,0.1); border-top: 2px solid var(--gold); padding: 28px 26px; }
        .cp-patho-c h3 { font-family: 'Bodoni Moda', serif; font-size: 19px; color: var(--ink); margin-bottom: 10px; }
        .cp-patho-c p { font-size: 14px; line-height: 1.7; color: var(--ink-soft); }

        .cp-metiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 36px; }
        .cp-metier { display: block; background: #fff; border: 1px solid rgba(184,151,90,0.28); padding: 24px 22px; transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s; }
        .cp-metier:hover { transform: translateY(-3px); border-color: var(--gold); }
        .cp-metier-t { font-family: 'Bodoni Moda', serif; font-size: 19px; color: var(--ink); margin-bottom: 8px; }
        .cp-metier-d { font-size: 13.5px; color: var(--ink-soft); line-height: 1.6; }

        .cp-faq { max-width: 760px; }
        .cp-faq-q { padding: 26px 0; border-bottom: 1px solid rgba(26,26,24,0.1); }
        .cp-faq-q h3 { font-family: 'Bodoni Moda', serif; font-size: 18px; color: var(--ink); margin-bottom: 10px; }
        .cp-faq-q p { font-size: 14px; color: var(--ink-soft); line-height: 1.75; }

        .cp-voisines { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
        .cp-voisine { display: inline-block; font-size: 13px; font-weight: 500; color: var(--ink); background: #fff; border: 1px solid rgba(184,151,90,0.45); border-radius: 40px; padding: 9px 18px; transition: transform .2s ease, border-color .2s ease, color .2s ease; }
        a.cp-voisine:hover { transform: translateY(-2px); border-color: var(--gold); color: var(--gold-deep); }
        a.cp-voisine:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .cp-voisine--inerte { color: var(--ink-soft); border-color: rgba(184,151,90,0.28); }

        .cp-cta { background: var(--dark); color: #fff; padding: 80px 0; text-align: center; position: relative; overflow: hidden; }
        .cp-cta .container { position: relative; z-index: 1; }
        .cp-cta h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3.6vw, 40px); color: #fff; margin-bottom: 16px; }
        .cp-cta p { font-size: 15px; color: rgba(255,255,255,0.65); margin-bottom: 32px; }
      `}</style>

      <main>
        {/* Hero */}
        <section className="cp-hero">
          <Rings className="rings--tr rings--lg" />
          <div className="container" data-reveal>
            <Breadcrumb items={[
              { name: 'Accueil', href: '/' },
              { name: 'Maintenance immobilière', href: '/maintenance-immobiliere-rouen' },
              { name: c.nom },
            ]} />
            <p className="cp-eye">Bailleurs · Gestionnaires · Syndics</p>
            <h1 className="cp-h1">Maintenance immobilière<br />{c.a}.</h1>
            <p className="cp-lead">
              Remise en état entre deux locataires, dépannages et entretien courant {c.a} —
              plomberie, électricité, peinture et sols réunis chez un seul interlocuteur.
              Devis sous 48h, rapport photo à chaque passage.
            </p>
            <div className="cp-actions">
              <Link href="/devis" className="btn btn-gold">Demander un devis gratuit</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>

        {/* Chiffres INSEE */}
        <section className="cp-chiffres">
          <div className="container">
            <div className="cp-chiffres-grid">
              <div className="cp-ch">
                <div className="cp-ch-v">{c.logements.toLocaleString('fr-FR')}</div>
                <div className="cp-ch-l">Logements</div>
                <div className="cp-ch-s">Parc total</div>
              </div>
              <div className="cp-ch">
                <div className="cp-ch-v">{c.locatairesPct.toString().replace('.', ',')} %</div>
                <div className="cp-ch-l">de locataires</div>
                <div className="cp-ch-s">Résidences principales</div>
              </div>
              <div className="cp-ch">
                <div className="cp-ch-v">{c.hlmPct.toString().replace('.', ',')} %</div>
                <div className="cp-ch-l">en logement social</div>
                <div className="cp-ch-s">Part du parc</div>
              </div>
              <div className="cp-ch">
                <div className="cp-ch-v">{c.vacantsPct.toString().replace('.', ',')} %</div>
                <div className="cp-ch-l">de logements vacants</div>
                <div className="cp-ch-s">Taux de vacance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Le parc */}
        <section className="cp-sec" style={{ background: 'var(--paper)' }}>
          <div className="container" data-reveal>
            <h2>Le parc de {c.nom}, en un coup d&apos;œil</h2>
            <p className="cp-p">{c.contexte}</p>

            <div className="cp-barres">
              {c.periodes.map((p) => (
                <div key={p.label} className={`cp-barre${p.pct === maxPct ? ' est-max' : ''}`}>
                  <span className="cp-barre-l">{p.label}</span>
                  <span className="cp-barre-piste">
                    <span className="cp-barre-jauge" style={{ width: `${(p.pct / maxPct) * 100}%` }} />
                  </span>
                  <span className="cp-barre-v">{p.pct.toString().replace('.', ',')} %</span>
                </div>
              ))}
            </div>
            <p className="cp-src">
              Source&nbsp;: <a href={SOURCE_INSEE.url} target="_blank" rel="noopener nofollow">{SOURCE_INSEE.label}</a>,
              commune {c.codeInsee}. Chiffres relevés le {SOURCE_INSEE.releve}.
            </p>
          </div>
        </section>

        {/* Ce que ce parc implique */}
        <section className="cp-sec" style={{ background: '#fff' }}>
          <div className="container" data-reveal>
            <h2>Ce que ce parc implique concrètement</h2>
            <p className="cp-p">
              Un parc a des habitudes. Voici ce que nous rencontrons le plus souvent sur des logements
              de cette époque {c.a} — des constats de terrain, pas des diagnostics&nbsp;: seule une visite
              engage un chiffrage.
            </p>
            <div className="cp-patho">
              {c.pathologies.map((p) => (
                <div key={p.t} className="cp-patho-c">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pour un gestionnaire */}
        <section className="cp-sec" style={{ background: 'var(--paper)' }}>
          <div className="container" data-reveal>
            <h2>Ce que ça change si vous gérez des lots ici</h2>
            <p className="cp-p">{c.gestionnaire}</p>
            <div className="cp-metiers">
              {METIERS.map(([href, t, d]) => (
                <Link key={href} href={href} className="cp-metier">
                  <p className="cp-metier-t">{t}</p>
                  <p className="cp-metier-d">{d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ReactiviteTimeline />

        {/* FAQ */}
        <section className="cp-sec" style={{ background: '#fff' }}>
          <div className="container cp-faq" data-reveal>
            <h2>Questions fréquentes</h2>
            {faqs.map(({ q, a }) => (
              <div key={q} className="cp-faq-q">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maillage */}
        <section className="cp-sec" style={{ background: 'var(--paper)', paddingTop: 56, paddingBottom: 56 }}>
          <div className="container" data-reveal>
            <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}>Autour de {c.nom}</h2>
            <p className="cp-p" style={{ fontSize: 15 }}>
              Nous intervenons également dans les communes voisines, et notre offre complète est détaillée
              sur la page <Link href="/maintenance-immobiliere-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>maintenance immobilière à Rouen</Link>.
              Pour un logement entre deux baux, voyez la <Link href="/remise-en-etat-locative-rouen" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>remise en état locative</Link>{' '}
              et notre guide <Link href="/guides/qui-paie-quoi-bailleur-locataire" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>qui paie quoi entre bailleur et locataire</Link>.
            </p>
            <div className="cp-voisines">
              {c.voisines.map((v) => {
                const href = hrefCommune(v)
                return href
                  ? <Link key={v} href={href} className="cp-voisine">{v}</Link>
                  : <span key={v} className="cp-voisine cp-voisine--inerte">{v}</span>
              })}
            </div>
          </div>
        </section>

        <GuidesLies
          guides={guidesPro}
          titre="Les questions qui reviennent en gestion locative"
          intro="Trois guides pour trancher vite : la répartition des réparations, la vétusté, et le coût réel d’un logement vide."
          fond="blanc"
        />

        {/* CTA */}
        <section className="cp-cta">
          <Rings className="rings--bl" />
          <div className="container" data-reveal>
            <h2>Un lot à remettre en état {c.a}&nbsp;?</h2>
            <p>Envoyez photos et adresse : nous revenons avec un chiffrage et une date sous 48h.</p>
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
