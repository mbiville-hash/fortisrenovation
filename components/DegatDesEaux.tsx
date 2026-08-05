'use client'

import { useMemo, useState } from 'react'

type Origine = '' | 'privative' | 'commune' | 'voisin' | 'inconnue'
type Occupation = '' | 'locataire' | 'proprietaire' | 'vide'

const ORIGINES: { v: Origine; l: string }[] = [
  { v: 'privative', l: 'Dans le logement lui-même' },
  { v: 'commune', l: 'Dans les parties communes' },
  { v: 'voisin', l: 'Chez un voisin' },
  { v: 'inconnue', l: 'Je ne sais pas encore' },
]

const OCCUPATIONS: { v: Occupation; l: string }[] = [
  { v: 'locataire', l: 'Un locataire en place' },
  { v: 'proprietaire', l: 'Le propriétaire' },
  { v: 'vide', l: 'Personne, le logement est vide' },
]

type Reponse = { declare: string; recherche: string; cause: string; remise: string }

/**
 * Qui déclare, qui pilote, qui paie — dégât des eaux.
 *
 * Deux règles structurent les réponses :
 *  - c'est l'assureur de l'OCCUPANT du local sinistré qui organise la recherche
 *    de fuite, sauf logement vacant ou locataire non assuré, où l'assurance
 *    propriétaire non occupant prend le relais ; les parties communes relèvent
 *    de l'assureur de l'immeuble ;
 *  - la réparation de la CAUSE suit la répartition du décret 87-712, pas le
 *    contrat d'assurance : l'entretien courant au locataire, la vétusté et le
 *    gros œuvre au bailleur.
 *
 * L'outil ne chiffre rien : les montants dépendent du contrat et de l'expertise.
 */
function repondre(origine: Origine, occupation: Occupation): Reponse | null {
  if (!origine || !occupation) return null

  const occupantAssure = occupation === 'locataire'
  const cotePrive = origine === 'privative' || origine === 'inconnue'

  const declare = (() => {
    if (origine === 'commune') {
      return 'Le syndic déclare à l’assurance de l’immeuble. En parallèle, l’occupant déclare ses propres dommages à son assureur, et vous les vôtres à votre assurance propriétaire non occupant.'
    }
    if (origine === 'voisin') {
      return 'Chacun déclare à son assureur, et vous remplissez ensemble un constat amiable dégât des eaux. C’est lui qui fixe la version commune des faits — ne laissez pas le voisin le remplir seul.'
    }
    if (occupantAssure) {
      return 'Le locataire déclare à son assureur habitation, et vous informe le même jour. Déclarez de votre côté à votre assurance propriétaire non occupant : deux déclarations valent mieux qu’une omission.'
    }
    return 'C’est à vous de déclarer, à votre assurance propriétaire non occupant. Sans occupant assuré, aucune autre police ne prendra le dossier en charge.'
  })()

  const recherche = (() => {
    if (origine === 'commune') return 'L’assureur de l’immeuble la mandate, via le syndic.'
    if (occupantAssure) return 'L’assureur du locataire l’organise : c’est l’assureur de l’occupant du local sinistré qui pilote.'
    if (occupation === 'vide') return 'Votre assurance propriétaire non occupant prend le relais : le logement étant vacant, aucun contrat d’occupant ne joue.'
    return 'Votre propre assureur l’organise, puisque vous occupez le logement.'
  })()

  const cause = (() => {
    if (origine === 'commune') return 'La copropriété. Colonne montante, chute d’évacuation, toiture-terrasse ou façade relèvent des parties communes, quel que soit le lot où l’eau est apparue.'
    if (origine === 'voisin') return 'Le propriétaire de l’installation d’où vient l’eau. Votre rôle se limite à documenter vos dommages et à ne rien réparer chez vous avant l’accord.'
    return 'Cela dépend de la pièce défaillante, pas de l’assurance. Un joint, un flexible ou une bonde encrassée sont des réparations locatives. Une canalisation percée par vétusté, un chauffe-eau en fin de vie ou une colonne fuyarde restent à votre charge.'
  })()

  const remise = (() => {
    if (cotePrive && occupation === 'vide') {
      return 'Votre assurance, dans les limites de votre contrat. Profitez-en : le logement étant déjà vide, c’est le meilleur moment pour traiter la cause et refaire les supports en une seule intervention.'
    }
    return 'L’assurance qui indemnise, après expertise et dans les limites du contrat. La vétusté est généralement déduite des embellissements — peintures et revêtements anciens ne sont pas remboursés à neuf.'
  })()

  return { declare, recherche, cause, remise }
}

export default function DegatDesEaux() {
  const [origine, setOrigine] = useState<Origine>('')
  const [occupation, setOccupation] = useState<Occupation>('')

  const r = useMemo(() => repondre(origine, occupation), [origine, occupation])

  const lignes: { l: string; v: string }[] = r
    ? [
        { l: 'Qui déclare', v: r.declare },
        { l: 'Qui organise la recherche de fuite', v: r.recherche },
        { l: 'Qui paie la réparation de la cause', v: r.cause },
        { l: 'Qui paie la remise en état', v: r.remise },
      ]
    : []

  return (
    <>
      <style>{`
        .dde { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .dde : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0). */
        .dde .dde-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .dde .dde-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; }
        .dde-q { margin-bottom: 22px; }
        .dde-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 11px; }
        .dde-choix { display: flex; flex-wrap: wrap; gap: 8px; }
        .dde-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; padding: 11px 20px; border-radius: 40px; border: 1px solid rgba(184,151,90,0.45); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .dde-btn:hover { border-color: var(--gold); color: var(--gold-deep); }
        .dde-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); }
        .dde-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .dde-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 22px; }
        .dde .dde-attente { font-size: 14px; color: var(--ink-soft); line-height: 1.7; margin: 0; }
        /* Surcharge des puces de .guide-prose */
        .dde-liste { list-style: none; margin: 0; padding: 0; }
        .dde-liste li { display: block; padding: 16px 0; border-top: 1px solid rgba(26,26,24,0.1); }
        .dde-liste li:first-child { border-top: 0; padding-top: 0; }
        .dde-liste li::before { display: none; }
        .dde .dde-l { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 7px; }
        .dde .dde-v { font-size: 14.5px; line-height: 1.7; color: var(--ink-soft); margin: 0; }
        .dde-alerte { background: rgba(184,151,90,0.10); border: 1px solid rgba(184,151,90,0.3); border-radius: 2px; padding: 18px 20px; margin-top: 22px; }
        .dde .dde-alerte-p { font-size: 14px; line-height: 1.7; color: var(--ink); margin: 0; }
        .dde .dde-note { font-size: 12.5px; line-height: 1.65; color: #8a857a; margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
        .dde .dde-note a { color: #8a857a; text-decoration: underline; }
      `}</style>

      <div className="dde" data-nosnippet>
        <p className="dde-t">Qui déclare, qui paie&nbsp;?</p>
        <p className="dde-s">Deux questions suffisent à savoir dans quel ordre agir.</p>

        <div className="dde-q">
          <span className="dde-lab">1 · D’où vient l’eau&nbsp;?</span>
          <div className="dde-choix">
            {ORIGINES.map((o) => (
              <button key={o.v} type="button" className="dde-btn" aria-pressed={origine === o.v} onClick={() => setOrigine(o.v)}>
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div className="dde-q">
          <span className="dde-lab">2 · Qui occupe le logement sinistré&nbsp;?</span>
          <div className="dde-choix">
            {OCCUPATIONS.map((o) => (
              <button key={o.v} type="button" className="dde-btn" aria-pressed={occupation === o.v} onClick={() => setOccupation(o.v)}>
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div className="dde-rep" aria-live="polite">
          {!r ? (
            <p className="dde-attente">Répondez aux deux questions pour obtenir la marche à suivre.</p>
          ) : (
            <>
              <ul className="dde-liste">
                {lignes.map((x) => (
                  <li key={x.l}>
                    <p className="dde-l">{x.l}</p>
                    <p className="dde-v">{x.v}</p>
                  </li>
                ))}
              </ul>
              <div className="dde-alerte">
                <p className="dde-alerte-p">
                  <strong>Ne lancez pas la remise en état avant l’accord de l’assureur.</strong> Les
                  mesures conservatoires — couper l’eau, bâcher, assécher — se font tout de suite et
                  sont couvertes. Les travaux de réfection engagés avant validation, eux, risquent de
                  rester à votre charge.
                </p>
              </div>
            </>
          )}
        </div>

        <p className="dde-note">
          Outil d’information, pas un avis juridique ni un avis d’assurance. Ce sont votre contrat et
          la réponse de votre assureur qui font foi&nbsp;: les conventions entre assureurs organisent
          leurs relations entre eux, elles ne créent pas de droit direct pour l’assuré. Déclarez dans
          le délai prévu au contrat, jamais moins de cinq jours ouvrés. Nous intervenons sur la{' '}
          <a href="/recherche-de-fuite-rouen">recherche de fuite</a> et sur la{' '}
          <a href="/degat-des-eaux-rouen">remise en état après sinistre</a>.
        </p>
      </div>
    </>
  )
}
