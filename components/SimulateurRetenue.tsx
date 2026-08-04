'use client'

import { useMemo, useState } from 'react'

const euros = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const pct = (n: number) => `${n.toFixed(0).replace('.', ',')} %`

/**
 * Part imputable au locataire, une fois la vétusté déduite.
 *
 * Méthode standard d'une grille de vétusté : franchise de départ, abattement
 * annuel linéaire jusqu'à une part résiduelle plancher. Les valeurs varient
 * d'une grille à l'autre — l'outil illustre la méthode, il ne fait pas barème.
 */
export default function SimulateurRetenue() {
  const [montant, setMontant] = useState(1200)
  const [age, setAge] = useState(5)
  const [dureeVie, setDureeVie] = useState(7)
  const [franchise, setFranchise] = useState(1)
  const [residuelle, setResiduelle] = useState(20)

  const { vetuste, locataire, bailleur, incoherent } = useMemo(() => {
    const incoherent = dureeVie <= franchise || montant <= 0 || residuelle < 0 || residuelle >= 100
    if (incoherent) return { vetuste: 0, locataire: 0, bailleur: 0, incoherent }
    const annees = Math.max(0, age - franchise)
    const abattementAnnuel = (100 - residuelle) / (dureeVie - franchise)
    const vetuste = Math.min(100 - residuelle, annees * abattementAnnuel)
    const locataire = montant * (1 - vetuste / 100)
    return { vetuste, locataire, bailleur: montant - locataire, incoherent }
  }, [montant, age, dureeVie, franchise, residuelle])

  const champs: [string, string, number, (v: number) => void, string, number][] = [
    ['sr-montant', 'Montant du devis', montant, setMontant, '€', 50],
    ['sr-age', 'Âge de l’élément', age, setAge, 'ans', 1],
    ['sr-duree', 'Durée de vie théorique', dureeVie, setDureeVie, 'ans', 1],
    ['sr-franchise', 'Franchise de départ', franchise, setFranchise, 'ans', 1],
    ['sr-res', 'Part résiduelle', residuelle, setResiduelle, '%', 5],
  ]

  return (
    <>
      <style>{`
        .sr { background: var(--dark); color: #fff; border-radius: 2px; padding: 30px 28px; margin: 32px 0; }
        .sr-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: #fff; margin-bottom: 6px; }
        .sr-s { font-size: 14px; color: rgba(255,255,255,0.68); line-height: 1.6; margin-bottom: 24px; }
        .sr-champs { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 18px; margin-bottom: 26px; }
        .sr-lab { display: block; font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
        .sr-in { width: 100%; padding: 11px 13px; font-family: 'Bodoni Moda', serif; font-size: 21px; color: #fff; background: rgba(255,255,255,0.06); border: 1px solid rgba(184,151,90,0.4); border-radius: 2px; }
        .sr-in:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .sr-unite { font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 6px; }
        .sr-out { border-top: 1px solid rgba(184,151,90,0.35); padding-top: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; }
        .sr-bloc-l { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .sr-bloc-v { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 4vw, 38px); line-height: 1; color: var(--gold); font-variant-numeric: tabular-nums; }
        .sr-bloc-d { font-size: 12.5px; color: rgba(255,255,255,0.6); margin-top: 8px; line-height: 1.5; }
        .sr-err { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.7; }
        .sr-note { font-size: 12.5px; line-height: 1.65; color: rgba(255,255,255,0.5); margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.12); }
      `}</style>

      <div className="sr" data-nosnippet>
        <p className="sr-t">Combien pouvez-vous réellement retenir&nbsp;?</p>
        <p className="sr-s">
          Reprenez les paramètres de la grille annexée à votre bail. Les valeurs par défaut sont
          celles de l’exemple ci-dessus.
        </p>

        <div className="sr-champs">
          {champs.map(([id, label, valeur, setter, unite, pas]) => (
            <div key={id}>
              <label className="sr-lab" htmlFor={id}>{label}</label>
              <input
                id={id} className="sr-in" type="number" min={0} step={pas} inputMode="numeric"
                value={valeur} onChange={(e) => setter(Number(e.target.value))}
              />
              <p className="sr-unite">{unite}</p>
            </div>
          ))}
        </div>

        <div className="sr-out" aria-live="polite">
          {incoherent ? (
            <p className="sr-err">
              Vérifiez vos paramètres&nbsp;: la durée de vie doit être supérieure à la franchise, le
              montant supérieur à zéro et la part résiduelle comprise entre 0 et 99&nbsp;%.
            </p>
          ) : (
            <>
              <div>
                <p className="sr-bloc-l">Vétusté déduite</p>
                <p className="sr-bloc-v">{pct(vetuste)}</p>
                <p className="sr-bloc-d">l’usure du temps, jamais imputable au locataire</p>
              </div>
              <div>
                <p className="sr-bloc-l">Part du locataire</p>
                <p className="sr-bloc-v">{euros(locataire)}</p>
                <p className="sr-bloc-d">le maximum défendable sur le dépôt de garantie</p>
              </div>
              <div>
                <p className="sr-bloc-l">Reste à votre charge</p>
                <p className="sr-bloc-v">{euros(bailleur)}</p>
                <p className="sr-bloc-d">à prévoir dans votre budget d’entretien</p>
              </div>
            </>
          )}
        </div>

        <p className="sr-note">
          Illustration de méthode, pas un barème&nbsp;: chaque grille a ses propres durées de vie et
          coefficients, et la grille ne s’applique que si elle a été prévue dès la signature du bail.
          Rappel utile&nbsp;: une retenue ne se défend qu’avec des pièces — état des lieux
          comparatifs, photos et devis daté.
        </p>
      </div>
    </>
  )
}
