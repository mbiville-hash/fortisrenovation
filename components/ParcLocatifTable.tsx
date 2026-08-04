'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { COMMUNES, ROUEN, SOURCE_INSEE } from '@/lib/communes'

type Cle = 'nom' | 'logements' | 'locatairesPct' | 'hlmPct' | 'vacantsPct'

type Ligne = {
  nom: string
  href: string
  logements: number
  locatairesPct: number
  hlmPct: number
  vacantsPct: number
}

const LIGNES: Ligne[] = [
  { nom: ROUEN.nom, href: ROUEN.href, logements: ROUEN.logements, locatairesPct: ROUEN.locatairesPct, hlmPct: ROUEN.hlmPct, vacantsPct: ROUEN.vacantsPct },
  ...COMMUNES.map((c) => ({
    nom: c.nom,
    href: `/maintenance-immobiliere-${c.slug}`,
    logements: c.logements,
    locatairesPct: c.locatairesPct,
    hlmPct: c.hlmPct,
    vacantsPct: c.vacantsPct,
  })),
]

const COLONNES: { cle: Cle; libelle: string; court: string }[] = [
  { cle: 'nom', libelle: 'Commune', court: 'Commune' },
  { cle: 'logements', libelle: 'Logements', court: 'Logts' },
  { cle: 'locatairesPct', libelle: 'Locataires', court: 'Locat.' },
  { cle: 'hlmPct', libelle: 'Logement social', court: 'Social' },
  { cle: 'vacantsPct', libelle: 'Vacance', court: 'Vacance' },
]

const pct = (n: number) => `${n.toString().replace('.', ',')} %`

/**
 * Comparatif du parc locatif de la métropole rouennaise.
 * Données INSEE, triables — pensé pour être consulté et cité, pas seulement lu.
 */
export default function ParcLocatifTable() {
  const [tri, setTri] = useState<Cle>('locatairesPct')
  const [desc, setDesc] = useState(true)

  const lignes = useMemo(() => {
    const l = [...LIGNES]
    l.sort((a, b) => {
      if (tri === 'nom') return a.nom.localeCompare(b.nom, 'fr')
      return (a[tri] as number) - (b[tri] as number)
    })
    return desc && tri !== 'nom' ? l.reverse() : l
  }, [tri, desc])

  const trier = (cle: Cle) => {
    if (cle === tri) setDesc((d) => !d)
    else { setTri(cle); setDesc(cle !== 'nom') }
  }

  return (
    <>
      <style>{`
        .plt { background: var(--paper); padding: 80px 0; }
        .plt-eye { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
        .plt-eye::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .plt h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 3.4vw, 40px); color: var(--ink); margin-bottom: 16px; }
        .plt-intro { font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 680px; margin-bottom: 34px; }
        .plt-wrap { overflow-x: auto; background: #fff; border: 1px solid rgba(26,26,24,0.1); }
        .plt-table { width: 100%; border-collapse: collapse; min-width: 620px; }
        .plt-table th, .plt-table td { text-align: right; padding: 14px 18px; font-size: 14px; border-bottom: 1px solid rgba(26,26,24,0.08); }
        .plt-table th:first-child, .plt-table td:first-child { text-align: left; }
        .plt-table thead th { background: var(--dark); padding: 0; border-bottom: 0; }
        .plt-th-btn { width: 100%; display: flex; align-items: center; justify-content: flex-end; gap: 7px; padding: 15px 18px; background: none; border: 0; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); transition: color .2s; }
        .plt-table thead th:first-child .plt-th-btn { justify-content: flex-start; }
        .plt-th-btn:hover { color: var(--gold); }
        .plt-th-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: -3px; }
        .plt-th-btn[data-actif="true"] { color: var(--gold); }
        .plt-fleche { font-size: 9px; opacity: .9; }
        .plt-table tbody tr:hover { background: rgba(184,151,90,0.05); }
        .plt-table td { color: var(--ink-soft); font-variant-numeric: tabular-nums; }
        .plt-table td:first-child { color: var(--ink); font-weight: 600; }
        .plt-table td:first-child a { color: var(--ink); }
        .plt-table td:first-child a:hover { color: var(--gold-deep); text-decoration: underline; }
        .plt-src { font-size: 12px; color: #8a857a; font-style: italic; margin-top: 16px; }
        .plt-src a { color: #8a857a; text-decoration: underline; }
        .plt-lecture { margin-top: 26px; font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); max-width: 680px; }
        .plt-lecture strong { color: var(--ink); }
      `}</style>

      <section className="plt" id="parc-locatif">
        <div className="container" data-reveal>
          <p className="plt-eye">Données INSEE</p>
          <h2>Le parc locatif de la métropole, commune par commune</h2>
          <p className="plt-intro">
            Nous intervenons sur des logements dont l&apos;âge et le statut d&apos;occupation varient beaucoup d&apos;une
            commune à l&apos;autre — et ça change ce qu&apos;on y trouve. Voici les chiffres, à comparer librement.
            Cliquez sur une colonne pour trier.
          </p>

          <div className="plt-wrap">
            <table className="plt-table">
              <caption className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Parc de logements des communes de la métropole rouennaise où intervient Fortis Rénovation
              </caption>
              <thead>
                <tr>
                  {COLONNES.map((col) => (
                    <th key={col.cle} scope="col" aria-sort={tri === col.cle ? (desc ? 'descending' : 'ascending') : 'none'}>
                      <button type="button" className="plt-th-btn" data-actif={tri === col.cle} onClick={() => trier(col.cle)}>
                        {col.libelle}
                        <span className="plt-fleche" aria-hidden="true">{tri === col.cle ? (desc ? '▼' : '▲') : '↕'}</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lignes.map((l) => (
                  <tr key={l.nom}>
                    <td><Link href={l.href}>{l.nom}</Link></td>
                    <td>{l.logements.toLocaleString('fr-FR')}</td>
                    <td>{pct(l.locatairesPct)}</td>
                    <td>{pct(l.hlmPct)}</td>
                    <td>{pct(l.vacantsPct)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="plt-src">
            Source&nbsp;: <a href={SOURCE_INSEE.url} target="_blank" rel="noopener nofollow">{SOURCE_INSEE.label}</a>.
            Chiffres relevés le {SOURCE_INSEE.releve}. Le taux de logement social est exprimé en part du parc total.
          </p>

          <p className="plt-lecture">
            <strong>Comment le lire.</strong> Un taux de locataires élevé annonce une rotation fréquente, donc des
            remises en état régulières. Un taux de vacance <em>bas</em> — 2,9 % au Grand-Quevilly — signifie que la
            demande est là et que chaque jour d&apos;immobilisation coûte un loyer pour rien. Un taux <em>haut</em> —
            9,1 % au Petit-Quevilly, 9,7 % à Rouen — signale au contraire qu&apos;un logement mal présenté peut rester
            vide longtemps.
          </p>
        </div>
      </section>
    </>
  )
}
