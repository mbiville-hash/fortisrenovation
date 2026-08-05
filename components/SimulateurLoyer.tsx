'use client'

import { useMemo, useState } from 'react'

const euros = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const pct = (n: number) => `${n.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`
const ans = (n: number) => `${n.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} ans`

/**
 * Ce que rapporte une hausse de loyer, et en combien de temps les travaux
 * sont amortis.
 *
 * Aucun plafond légal n'est calculé, et c'est volontaire : Rouen et les 71
 * communes de la Métropole sont classées « non tendue » (décret du 10 mai 2013,
 * liste consolidée au 22 décembre 2025), donc le loyer de relocation y est
 * librement fixable. La seule limite qui subsiste est le gel des loyers des
 * logements classés F ou G — applicable partout, y compris à la relocation —
 * d'où le sélecteur de classe énergétique, qui bloque tout le reste.
 *
 * L'IRL est un curseur et non une constante : l'indice est révisé chaque
 * trimestre, une valeur figée dans le code serait fausse en quelques semaines.
 */
export default function SimulateurLoyer() {
  const [loyer, setLoyer] = useState(650)
  const [irl, setIrl] = useState(2)
  const [hausse, setHausse] = useState(60)
  const [travaux, setTravaux] = useState(6000)
  const [passoire, setPassoire] = useState(false)

  const { loyerIndexe, gainIrlAn, loyerApres, gainHausseAn, retour, cumul } = useMemo(() => {
    const loyerIndexe = loyer * (1 + irl / 100)
    const gainHausseAn = hausse * 12
    // Écart cumulé sur cinq ans face au scénario « indexation seule » : les deux
    // loyers suivant le même indice, l'écart annuel se réduit à la hausse indexée.
    let cumul = 0
    for (let n = 1; n <= 5; n += 1) cumul += gainHausseAn * (1 + irl / 100) ** n
    return {
      loyerIndexe,
      gainIrlAn: (loyerIndexe - loyer) * 12,
      loyerApres: loyer + hausse,
      gainHausseAn,
      retour: gainHausseAn > 0 ? travaux / gainHausseAn : null,
      cumul,
    }
  }, [loyer, irl, hausse, travaux])

  const curseurs = [
    { id: 'sl-loyer', lab: 'Loyer mensuel actuel', val: euros(loyer), v: loyer, set: setLoyer, min: 200, max: 2500, pas: 10 },
    { id: 'sl-irl', lab: 'Variation annuelle de l’IRL', val: pct(irl), v: irl, set: setIrl, min: 0, max: 6, pas: 0.1 },
    { id: 'sl-hausse', lab: 'Hausse visée à la relocation', val: `+ ${euros(hausse)}`, v: hausse, set: setHausse, min: 0, max: 300, pas: 5 },
    { id: 'sl-travaux', lab: 'Montant des travaux TTC', val: euros(travaux), v: travaux, set: setTravaux, min: 0, max: 25000, pas: 250 },
  ]

  return (
    <>
      <style>{`
        .sl { background: var(--dark); color: #fff; border-radius: 2px; padding: 30px 28px; margin: 32px 0; }
        /* Les règles qui visent un <p> sont préfixées par .sl : cet outil est rendu
           dans .guide-prose, dont la règle « .guide-prose p » (spécificité 0,1,1)
           écraserait sinon les classes simples (0,1,0) et repasserait tout le texte
           en 16px #3a352e — illisible sur fond sombre. */
        .sl .sl-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: #fff; margin-bottom: 6px; }
        .sl .sl-s { font-size: 14px; color: rgba(255,255,255,0.68); line-height: 1.6; margin-bottom: 24px; }
        .sl-champs { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 22px; margin-bottom: 24px; }
        .sl-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .sl .sl-val { font-family: 'Bodoni Moda', serif; font-size: 26px; color: #fff; margin-bottom: 8px; }
        .sl-range { width: 100%; accent-color: var(--gold); cursor: pointer; }
        .sl-range:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }
        .sl-dpe { margin-bottom: 26px; }
        .sl-choix { display: flex; flex-wrap: wrap; gap: 8px; }
        .sl-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 40px; border: 1px solid rgba(184,151,90,0.45); background: transparent; color: rgba(255,255,255,0.72); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .sl-btn:hover { border-color: var(--gold); color: #fff; }
        .sl-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); }
        .sl-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .sl-out { border-top: 1px solid rgba(184,151,90,0.35); padding-top: 24px; }
        .sl-blocs { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 20px; }
        .sl .sl-bloc-l { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .sl .sl-bloc-v { font-family: 'Bodoni Moda', serif; font-size: clamp(28px, 4.4vw, 40px); line-height: 1; color: var(--gold); font-variant-numeric: tabular-nums; margin: 0; }
        .sl .sl-bloc-d { font-size: 12.5px; color: rgba(255,255,255,0.6); margin: 8px 0 0; line-height: 1.5; }
        .sl-cumul { margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.12); }
        .sl .sl-cumul-p { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.75); margin: 0; }
        .sl .sl-cumul-p strong { color: var(--gold); font-weight: 600; }
        .sl-gel { border: 1px solid rgba(184,151,90,0.5); background: rgba(184,151,90,0.10); border-radius: 2px; padding: 22px 24px; }
        .sl .sl-gel-t { font-family: 'Bodoni Moda', serif; font-size: clamp(22px, 3.2vw, 28px); line-height: 1.2; color: var(--gold); margin-bottom: 12px; }
        .sl .sl-gel-d { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.78); margin: 0 0 12px; }
        .sl .sl-gel-d:last-child { margin-bottom: 0; }
        .sl .sl-note { font-size: 12.5px; line-height: 1.65; color: rgba(255,255,255,0.5); margin: 24px 0 0; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.12); }
      `}</style>

      <div className="sl" data-nosnippet>
        <p className="sl-t">Ce que rapporte une hausse de loyer</p>
        <p className="sl-s">Déplacez les curseurs&nbsp;: le calcul se met à jour.</p>

        <div className="sl-champs">
          {curseurs.map((c) => (
            <div key={c.id}>
              <label className="sl-lab" htmlFor={c.id}>{c.lab}</label>
              <p className="sl-val">{c.val}</p>
              <input
                id={c.id} className="sl-range" type="range" min={c.min} max={c.max} step={c.pas}
                value={c.v} onChange={(e) => c.set(Number(e.target.value))}
              />
            </div>
          ))}
        </div>

        <div className="sl-dpe">
          <span className="sl-lab">Classe énergétique du logement</span>
          <div className="sl-choix">
            {([false, true] as const).map((v) => (
              <button
                key={String(v)} type="button" className="sl-btn"
                aria-pressed={passoire === v} onClick={() => setPassoire(v)}
              >
                {v ? 'F ou G' : 'A à E'}
              </button>
            ))}
          </div>
        </div>

        <div className="sl-out" aria-live="polite">
          {passoire ? (
            <div className="sl-gel">
              <p className="sl-gel-t">Aucune augmentation possible</p>
              <p className="sl-gel-d">
                Un logement classé F ou G ne peut voir son loyer ni révisé selon l’IRL, ni majoré
                pour travaux, ni réévalué au renouvellement. Et à la relocation, le nouveau loyer ne
                peut pas dépasser le dernier loyer appliqué au locataire précédent. La règle vaut
                <strong> partout depuis le 24 août 2022</strong>, zone tendue ou non.
              </p>
              <p className="sl-gel-d">
                La seule sortie est d’atteindre au moins la <strong>classe E</strong>, constatée par
                un nouveau DPE. Cela relève de l’isolation et du chauffage&nbsp;: ce n’est pas notre
                métier, et aucun de nos lots de travaux ne débloquera à lui seul cette situation.
              </p>
            </div>
          ) : (
            <>
              <div className="sl-blocs">
                <div>
                  <p className="sl-bloc-l">Après révision IRL</p>
                  <p className="sl-bloc-v">{euros(loyerIndexe)}</p>
                  <p className="sl-bloc-d">
                    {euros(gainIrlAn)} par an — et seulement si le bail contient une clause de révision
                  </p>
                </div>
                <div>
                  <p className="sl-bloc-l">Après travaux, à la relocation</p>
                  <p className="sl-bloc-v">{euros(loyerApres)}</p>
                  <p className="sl-bloc-d">
                    {euros(gainHausseAn)} par an — le loyer de relocation est libre à Rouen
                  </p>
                </div>
                <div>
                  <p className="sl-bloc-l">Travaux amortis en</p>
                  <p className="sl-bloc-v">
                    {retour === null ? '—' : travaux === 0 ? 'immédiat' : ans(retour)}
                  </p>
                  <p className="sl-bloc-d">
                    {retour === null
                      ? 'fixez une hausse pour calculer l’amortissement'
                      : 'durée au bout de laquelle la hausse a remboursé les travaux'}
                  </p>
                </div>
              </div>

              {hausse > 0 && (
                <div className="sl-cumul">
                  <p className="sl-cumul-p">
                    Sur cinq ans, cette hausse représente <strong>{euros(cumul)}</strong> de loyers
                    encaissés en plus par rapport au scénario où vous vous contentez d’indexer.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <p className="sl-note">
          Ordre de grandeur, pas un avis juridique. La hausse retenue est celle que vous visez&nbsp;:
          à Rouen elle n’est plafonnée par aucun texte, c’est le marché local et l’état du logement
          qui l’arbitrent. Le calcul ignore la fiscalité, la valorisation du bien, la vacance évitée
          et les réparations qu’un logement remis à neuf ne réclame pas&nbsp;: le gain réel est donc
          plutôt supérieur à ce chiffre.
        </p>
      </div>
    </>
  )
}
