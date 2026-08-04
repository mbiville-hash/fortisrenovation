import Link from 'next/link'
import { type CommunePlomberie, SOURCE_INSEE, hrefCommune } from '@/lib/communes'

/**
 * Section « le parc de la commune » posée sur les pages /plombier-[commune].
 *
 * Objectif : donner à chaque page une substance qui lui est propre. Sans elle,
 * deux pages commune ne diffèrent que par le nom de la ville — ce que Google
 * traite comme des pages satellites sans valeur.
 */
export default function ParcPlomberie({ c }: { c: CommunePlomberie }) {
  const dominante = c.periodes.reduce((a, b) => (b.pct > a.pct ? b : a))
  const href = hrefCommune(c.nom)

  return (
    <>
      <style>{`
        .pp { background: var(--paper); padding: 80px 0; }
        .pp-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
        .pp-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .pp h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 3.2vw, 38px); color: var(--ink); margin-bottom: 16px; }
        .pp-p { font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 680px; }

        .pp-chiffres { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; margin: 34px 0 40px; }
        .pp-ch { background: #fff; border: 1px solid rgba(26,26,24,0.1); border-top: 2px solid var(--gold); padding: 22px 20px; }
        .pp-ch-v { font-family: 'Bodoni Moda', serif; font-size: 28px; color: var(--gold-deep); line-height: 1; margin-bottom: 7px; font-variant-numeric: tabular-nums; }
        .pp-ch-l { font-size: 12.5px; color: var(--ink-soft); line-height: 1.45; }

        .pp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 32px 48px; align-items: start; }
        .pp-barres { max-width: 460px; }
        .pp-barre { display: grid; grid-template-columns: 92px 1fr 50px; align-items: center; gap: 12px; margin-bottom: 10px; }
        .pp-barre-l { font-size: 12px; color: var(--ink-soft); }
        .pp-barre-piste { height: 11px; background: rgba(26,26,24,0.08); border-radius: 2px; overflow: hidden; }
        .pp-barre-jauge { height: 100%; background: rgba(184,151,90,0.45); border-radius: 2px; }
        .pp-barre.est-max .pp-barre-jauge { background: var(--gold); }
        .pp-barre.est-max .pp-barre-l { color: var(--ink); font-weight: 600; }
        .pp-barre-v { font-size: 12px; color: var(--ink-soft); text-align: right; font-variant-numeric: tabular-nums; }

        .pp-constats { list-style: none; margin: 0; padding: 0; }
        .pp-constats li { display: flex; gap: 13px; font-size: 14.5px; line-height: 1.7; color: var(--ink-soft); margin-bottom: 16px; }
        .pp-dia { color: var(--gold); font-size: 12px; line-height: 2; flex: none; }

        .pp-src { font-size: 12px; color: #8a857a; font-style: italic; margin-top: 24px; }
        .pp-src a { color: #8a857a; text-decoration: underline; }
        .pp-suite { font-size: 14.5px; line-height: 1.8; color: var(--ink-soft); margin-top: 20px; }
        .pp-suite a { color: var(--ink); text-decoration: underline; }
      `}</style>

      <section className="pp">
        <div className="container" data-reveal>
          <p className="pp-eye">Le parc {c.a}</p>
          <h2>Ce que nous trouvons dans les logements {c.a}</h2>
          <p className="pp-p">{c.reseaux}</p>

          <div className="pp-chiffres">
            <div className="pp-ch">
              <div className="pp-ch-v">{c.logements.toLocaleString('fr-FR')}</div>
              <div className="pp-ch-l">logements</div>
            </div>
            <div className="pp-ch">
              <div className="pp-ch-v">{c.maisonsPct.toString().replace('.', ',')} %</div>
              <div className="pp-ch-l">de maisons individuelles</div>
            </div>
            <div className="pp-ch">
              <div className="pp-ch-v">{c.locatairesPct.toString().replace('.', ',')} %</div>
              <div className="pp-ch-l">de locataires</div>
            </div>
            <div className="pp-ch">
              <div className="pp-ch-v" style={{ fontSize: 22 }}>{dominante.label}</div>
              <div className="pp-ch-l">époque dominante ({dominante.pct.toString().replace('.', ',')} % du parc)</div>
            </div>
          </div>

          <div className="pp-grid">
            <div className="pp-barres">
              {c.periodes.map((p) => (
                <div key={p.label} className={`pp-barre${p.pct === dominante.pct ? ' est-max' : ''}`}>
                  <span className="pp-barre-l">{p.label}</span>
                  <span className="pp-barre-piste">
                    <span className="pp-barre-jauge" style={{ width: `${(p.pct / dominante.pct) * 100}%` }} />
                  </span>
                  <span className="pp-barre-v">{p.pct.toString().replace('.', ',')} %</span>
                </div>
              ))}
            </div>

            <ul className="pp-constats">
              {c.constats.map((t) => (
                <li key={t}><span className="pp-dia" aria-hidden="true">◈</span><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <p className="pp-src">
            Source&nbsp;: <a href={SOURCE_INSEE.url} target="_blank" rel="noopener nofollow">{SOURCE_INSEE.label}</a>,
            commune {c.codeInsee}. Chiffres relevés le {SOURCE_INSEE.releve}. Les constats ci-dessus décrivent ce que
            nous rencontrons habituellement sur un parc de cette époque&nbsp;: seule une visite engage un chiffrage.
          </p>

          {href && (
            <p className="pp-suite">
              Vous gérez plusieurs lots {c.a}&nbsp;? Voyez notre offre de{' '}
              <Link href={href}>maintenance immobilière {c.a}</Link>, qui réunit plomberie, électricité,
              peinture et sols chez un seul interlocuteur.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
