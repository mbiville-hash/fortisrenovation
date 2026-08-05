'use client'

import { useMemo, useState } from 'react'

const euros = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

/**
 * Ce que coûte un logement vide, jour par jour.
 * Arithmétique volontairement simple et affichée en clair : loyer mensuel ramené
 * au jour, multiplié par le nombre de jours de vacance. Pas de faux précis.
 */
export default function SimulateurVacance() {
  const [loyer, setLoyer] = useState(650)
  const [jours, setJours] = useState(30)

  const { parJour, total, gain } = useMemo(() => {
    const parJour = (loyer * 12) / 365
    return {
      parJour,
      total: parJour * jours,
      // Ce que représentent 15 jours gagnés sur le délai de relocation.
      gain: parJour * 15,
    }
  }, [loyer, jours])

  return (
    <>
      <style>{`
        .sv { background: var(--dark); color: #fff; border-radius: 2px; padding: 30px 28px; margin: 32px 0; }
        /* Les règles qui visent un <p> sont préfixées par .sv. Dans un guide, cet outil
           est rendu à l'intérieur de .guide-prose, dont la règle « .guide-prose p »
           (spécificité 0,1,1) écrase sinon les classes simples (0,1,0) : le texte
           repasserait en 16px #3a352e, illisible sur fond sombre. */
        .sv .sv-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: #fff; margin-bottom: 6px; }
        .sv .sv-s { font-size: 14px; color: rgba(255,255,255,0.68); line-height: 1.6; margin-bottom: 24px; }
        .sv-champs { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 22px; margin-bottom: 26px; }
        .sv-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .sv .sv-val { font-family: 'Bodoni Moda', serif; font-size: 26px; color: #fff; margin-bottom: 8px; }
        .sv-range { width: 100%; accent-color: var(--gold); cursor: pointer; }
        .sv-range:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }
        .sv-out { border-top: 1px solid rgba(184,151,90,0.35); padding-top: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; }
        .sv .sv-bloc-l { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .sv .sv-bloc-v { font-family: 'Bodoni Moda', serif; font-size: clamp(30px, 5vw, 44px); line-height: 1; color: var(--gold); font-variant-numeric: tabular-nums; margin: 0; }
        .sv .sv-bloc-d { font-size: 12.5px; color: rgba(255,255,255,0.6); margin: 8px 0 0; line-height: 1.5; }
        .sv .sv-note { font-size: 12.5px; line-height: 1.6; color: rgba(255,255,255,0.5); margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.12); }
      `}</style>

      <div className="sv" data-nosnippet>
        <p className="sv-t">Ce que vous coûte un logement vide</p>
        <p className="sv-s">Déplacez les curseurs&nbsp;: le calcul se met à jour.</p>

        <div className="sv-champs">
          <div>
            <label className="sv-lab" htmlFor="sv-loyer">Loyer mensuel hors charges</label>
            <p className="sv-val">{euros(loyer)}</p>
            <input
              id="sv-loyer" className="sv-range" type="range" min={200} max={2500} step={10}
              value={loyer} onChange={(e) => setLoyer(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="sv-lab" htmlFor="sv-jours">Jours sans locataire</label>
            <p className="sv-val">{jours} jours</p>
            <input
              id="sv-jours" className="sv-range" type="range" min={7} max={180} step={1}
              value={jours} onChange={(e) => setJours(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="sv-out" aria-live="polite">
          <div>
            <p className="sv-bloc-l">Coût de la vacance</p>
            <p className="sv-bloc-v">{euros(total)}</p>
            <p className="sv-bloc-d">soit {euros(parJour)} par jour de logement vide</p>
          </div>
          <div>
            <p className="sv-bloc-l">15 jours gagnés</p>
            <p className="sv-bloc-v">{euros(gain)}</p>
            <p className="sv-bloc-d">ce que rapporte le fait de relouer deux semaines plus tôt</p>
          </div>
        </div>

        <p className="sv-note">
          Calcul volontairement simple&nbsp;: loyer mensuel × 12 ÷ 365, multiplié par le nombre de jours. Il ne tient
          compte ni des charges non récupérables, ni de la taxe foncière, ni des frais de relocation — le coût réel
          d&apos;un logement vide est donc un peu supérieur à ce chiffre.
        </p>
      </div>
    </>
  )
}
