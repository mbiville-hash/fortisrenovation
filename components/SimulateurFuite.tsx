'use client'

import { useMemo, useState } from 'react'

const euros = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const m3 = (n: number) => `${Math.round(n).toLocaleString('fr-FR')} m³`

type Verdict = 'eligible' | 'sous-plafond' | 'saisie'

const BADGE: Record<Verdict, { texte: string; fond: string; bord: string; couleur: string }> = {
  eligible: { texte: 'Vous êtes probablement concerné', fond: 'rgba(184,151,90,0.16)', bord: 'var(--gold)', couleur: 'var(--gold-light)' },
  'sous-plafond': { texte: 'L’écrêtement ne s’applique pas', fond: 'rgba(255,255,255,0.06)', bord: 'rgba(255,255,255,0.28)', couleur: 'rgba(255,255,255,0.8)' },
  saisie: { texte: 'Vérifiez vos chiffres', fond: 'transparent', bord: 'rgba(255,255,255,0.22)', couleur: 'rgba(255,255,255,0.6)' },
}

/**
 * Écrêtement de facture d'eau après une fuite — article L2224-12-4 du CGCT.
 *
 * L'abonné n'est pas tenu de payer la part de consommation excédant le double de
 * sa consommation moyenne, s'il produit une attestation de plomberie dans le mois.
 * Le calcul reste un ordre de grandeur : c'est le service d'eau qui décide.
 */
export default function SimulateurFuite() {
  const [habituelle, setHabituelle] = useState(120)
  const [facturee, setFacturee] = useState(400)
  const [prix, setPrix] = useState(4.5)

  const { plafond, surplus, economie, verdict } = useMemo(() => {
    const plafond = habituelle * 2
    const surplus = Math.max(0, facturee - plafond)
    const verdict: Verdict =
      habituelle <= 0 || facturee <= 0 ? 'saisie' : surplus > 0 ? 'eligible' : 'sous-plafond'
    return { plafond, surplus, economie: surplus * prix, verdict }
  }, [habituelle, facturee, prix])

  const b = BADGE[verdict]

  return (
    <>
      <style>{`
        .sf { background: var(--dark); color: #fff; border-radius: 2px; padding: 30px 28px; margin: 32px 0; }
        .sf-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: #fff; margin-bottom: 6px; }
        .sf-s { font-size: 14px; color: rgba(255,255,255,0.68); line-height: 1.6; margin-bottom: 24px; }
        .sf-champs { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 20px; margin-bottom: 26px; }
        .sf-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 9px; }
        .sf-in { width: 100%; padding: 12px 14px; font-family: 'Bodoni Moda', serif; font-size: 24px; color: #fff; background: rgba(255,255,255,0.06); border: 1px solid rgba(184,151,90,0.4); border-radius: 2px; }
        .sf-in:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .sf-unite { font-size: 11.5px; color: rgba(255,255,255,0.5); margin-top: 7px; }
        .sf-out { border-top: 1px solid rgba(184,151,90,0.35); padding-top: 24px; }
        .sf-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 22px; }
        .sf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; }
        .sf-bloc-l { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .sf-bloc-v { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 4vw, 38px); line-height: 1; color: var(--gold); font-variant-numeric: tabular-nums; }
        .sf-bloc-d { font-size: 12.5px; color: rgba(255,255,255,0.6); margin-top: 8px; line-height: 1.5; }
        .sf-note { font-size: 12.5px; line-height: 1.65; color: rgba(255,255,255,0.5); margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.12); }
        .sf-note a { color: var(--gold); text-decoration: underline; }
      `}</style>

      <div className="sf" data-nosnippet>
        <p className="sf-t">Votre facture peut-elle être plafonnée&nbsp;?</p>
        <p className="sf-s">
          Reportez les volumes en m³ qui figurent sur vos factures. Le calcul se met à jour tout seul.
        </p>

        <div className="sf-champs">
          <div>
            <label className="sf-lab" htmlFor="sf-hab">Consommation habituelle</label>
            <input
              id="sf-hab" className="sf-in" type="number" min={0} step={10} inputMode="numeric"
              value={habituelle} onChange={(e) => setHabituelle(Number(e.target.value))}
            />
            <p className="sf-unite">en m³ par an, hors fuite</p>
          </div>
          <div>
            <label className="sf-lab" htmlFor="sf-fac">Consommation facturée</label>
            <input
              id="sf-fac" className="sf-in" type="number" min={0} step={10} inputMode="numeric"
              value={facturee} onChange={(e) => setFacturee(Number(e.target.value))}
            />
            <p className="sf-unite">en m³, la facture anormale</p>
          </div>
          <div>
            <label className="sf-lab" htmlFor="sf-prix">Prix du m³</label>
            <input
              id="sf-prix" className="sf-in" type="number" min={0} step={0.1} inputMode="decimal"
              value={prix} onChange={(e) => setPrix(Number(e.target.value))}
            />
            <p className="sf-unite">en €, eau + assainissement</p>
          </div>
        </div>

        <div className="sf-out" aria-live="polite">
          <span className="sf-badge" style={{ background: b.fond, borderColor: b.bord, color: b.couleur }}>
            {b.texte}
          </span>

          {verdict === 'saisie' ? (
            <p className="sf-bloc-d" style={{ marginTop: 0 }}>
              Renseignez une consommation habituelle et une consommation facturée supérieures à zéro.
            </p>
          ) : (
            <div className="sf-grid">
              <div>
                <p className="sf-bloc-l">Plafond légal</p>
                <p className="sf-bloc-v">{m3(plafond)}</p>
                <p className="sf-bloc-d">le double de votre consommation habituelle</p>
              </div>
              <div>
                <p className="sf-bloc-l">Volume au-delà du plafond</p>
                <p className="sf-bloc-v">{m3(surplus)}</p>
                <p className="sf-bloc-d">{surplus > 0 ? 'la part que vous pourriez ne pas payer' : 'rien au-delà du double : le dispositif ne joue pas'}</p>
              </div>
              <div>
                <p className="sf-bloc-l">Économie possible</p>
                <p className="sf-bloc-v">{euros(economie)}</p>
                <p className="sf-bloc-d">ordre de grandeur, au prix du m³ indiqué</p>
              </div>
            </div>
          )}
        </div>

        <p className="sf-note">
          L’écrêtement n’a rien d’automatique&nbsp;: c’est le service d’eau qui l’accorde, sur
          présentation d’une attestation de plomberie, dans le mois suivant son courrier. Il ne
          couvre pas les fuites d’appareils ménagers, d’équipements sanitaires ou de chauffage. Le
          prix du m³ varie d’une commune à l’autre&nbsp;: le montant ci-dessus est un ordre de
          grandeur, pas un remboursement garanti. Nous établissons l’attestation après{' '}
          <a href="/recherche-de-fuite-rouen">recherche et réparation de la fuite</a>.
        </p>
      </div>
    </>
  )
}
