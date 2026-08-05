'use client'

import { useMemo, useState } from 'react'

type Perimetre = 'oui' | 'partiel' | 'non'

type Critere = {
  id: string
  cat: string
  /** Formulé comme un défaut : on ne coche que ce qui ne va pas. */
  l: string
  /** Article du décret du 30 janvier 2002 concerné. */
  art: string
  /** Ce qu'il faut faire pour rendre le logement décent. */
  action: string
  perimetre: Perimetre
}

/**
 * Votre bien est-il louable ? — décret n°2002-120 du 30 janvier 2002.
 *
 * On coche les défauts, pas les conformités : un critère non coché est réputé
 * satisfait. C'est plus rapide, et surtout ça évite le faux positif d'une
 * checklist vide qu'on prendrait pour un logement indécent.
 *
 * Un seul critère manquant suffit à rendre le logement non décent : la liste
 * n'est pas pondérée, elle est cumulative.
 */
const CRITERES: Critere[] = [
  // Article 2 — sécurité, santé, étanchéité
  { id: 'infil', cat: 'Sécurité & salubrité', art: 'article 2', l: 'Des infiltrations ou des remontées d’eau apparaissent', action: 'Traiter le point d’entrée d’eau ou le pied de mur, puis reprendre les supports.', perimetre: 'partiel' },
  { id: 'venti', cat: 'Sécurité & salubrité', art: 'article 2', l: 'La ventilation est absente, obstruée ou hors service', action: 'Remettre en état la ventilation : bouches, réseau, moteur.', perimetre: 'oui' },
  { id: 'elec', cat: 'Sécurité & salubrité', art: 'article 2', l: 'L’installation électrique présente un danger : pas de terre, pas de différentiel, fils apparents', action: 'Mise en sécurité de l’installation : terre, protections différentielles, reprise des circuits.', perimetre: 'oui' },
  { id: 'revet', cat: 'Sécurité & salubrité', art: 'article 2', l: 'Des revêtements dégradés créent un risque : peinture écaillée sur bâti ancien, garde-corps instable', action: 'Purger et reprendre les supports, sécuriser les garde-corps.', perimetre: 'oui' },

  // Article 3 — équipements et confort
  { id: 'chauf', cat: 'Équipements', art: 'article 3', l: 'Pas d’installation de chauffage, ou chauffage hors service', action: 'Remise en état ou installation d’un chauffage conforme.', perimetre: 'non' },
  { id: 'eau', cat: 'Équipements', art: 'article 3', l: 'L’eau manque de pression ou de débit', action: 'Diagnostic du réseau, reprise des alimentations.', perimetre: 'oui' },
  { id: 'evac', cat: 'Équipements', art: 'article 3', l: 'Une évacuation n’a pas de siphon, ou elle refoule', action: 'Reprise des évacuations et pose des siphons manquants.', perimetre: 'oui' },
  { id: 'cuis', cat: 'Équipements', art: 'article 3', l: 'Pas de coin cuisine pouvant recevoir un appareil de cuisson, ou évier non raccordé', action: 'Aménagement du coin cuisine et raccordement de l’évier en eau chaude et froide.', perimetre: 'oui' },
  { id: 'wc', cat: 'Équipements', art: 'article 3', l: 'Le WC n’est pas séparé de la cuisine ou de la pièce où l’on prend les repas', action: 'Cloisonnement et reprise des réseaux.', perimetre: 'partiel' },
  { id: 'douche', cat: 'Équipements', art: 'article 3', l: 'Pas de baignoire ni de douche, ou pas d’eau chaude', action: 'Création ou remise en état de la pièce d’eau, production d’eau chaude comprise.', perimetre: 'oui' },
  { id: 'eclair', cat: 'Équipements', art: 'article 3', l: 'L’éclairage ne couvre pas toutes les pièces et les accès, ou le réseau ne supporte pas les appareils courants', action: 'Reprise du tableau et des circuits, ajout de points lumineux et de prises.', perimetre: 'oui' },

  // Article 4 — surface
  { id: 'surface', cat: 'Surface', art: 'article 4', l: 'La pièce principale fait moins de 9 m² ou moins de 2,20 m sous plafond, sans atteindre 20 m³', action: 'Aucune solution par les travaux courants : le critère est structurel.', perimetre: 'non' },
]

type Dpe = 'AD' | 'E' | 'F' | 'G'

const DPE_OPTIONS: { v: Dpe; l: string }[] = [
  { v: 'AD', l: 'A à D' },
  { v: 'E', l: 'E' },
  { v: 'F', l: 'F' },
  { v: 'G', l: 'G' },
]

/** Calendrier légal de la décence énergétique en France métropolitaine. */
const DPE_VERDICT: Record<Dpe, { bloquant: boolean; texte: string }> = {
  AD: { bloquant: false, texte: 'Conforme, et hors de portée des échéances connues à ce jour.' },
  E: { bloquant: false, texte: 'Conforme aujourd’hui. La classe E ne sera plus décente à compter de 2034.' },
  F: { bloquant: false, texte: 'Conforme aujourd’hui. La classe F ne sera plus décente à compter de 2028 — l’échéance est proche à l’échelle d’un parc.' },
  G: { bloquant: true, texte: 'Non décent : depuis le 1ᵉʳ janvier 2025, un logement classé G ne peut plus être proposé à la location en métropole.' },
}

const PERIM: Record<Perimetre, { texte: string; couleur: string }> = {
  oui: { texte: 'Nous le faisons', couleur: 'var(--gold-deep)' },
  partiel: { texte: 'En partie', couleur: 'var(--ink-soft)' },
  non: { texte: 'Hors de notre périmètre', couleur: 'var(--ink-faint)' },
}

const CATS = Array.from(new Set(CRITERES.map((c) => c.cat)))

export default function LogementDecent() {
  const [coches, setCoches] = useState<string[]>([])
  const [dpe, setDpe] = useState<Dpe>('AD')

  const bascule = (id: string) =>
    setCoches((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  const { manquants, decent } = useMemo(() => {
    const manquants = CRITERES.filter((c) => coches.includes(c.id))
    return { manquants, decent: manquants.length === 0 && !DPE_VERDICT[dpe].bloquant }
  }, [coches, dpe])

  const d = DPE_VERDICT[dpe]

  return (
    <>
      <style>{`
        .ld { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .ld : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0). */
        .ld .ld-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .ld .ld-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; }
        .ld .ld-cat { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin: 22px 0 10px; }
        /* Surcharge des puces de .guide-prose */
        .ld-liste { list-style: none; margin: 0; padding: 0; }
        .ld-liste li { display: block; padding: 0; border-top: 0; }
        .ld-liste li::before { display: none; }
        .ld-item { width: 100%; display: flex; align-items: flex-start; gap: 12px; text-align: left; padding: 10px 12px; margin-bottom: 4px; background: transparent; border: 1px solid transparent; border-radius: 2px; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 13.5px; line-height: 1.55; color: var(--ink-soft); transition: background .2s, border-color .2s, color .2s; }
        .ld-item:hover { border-color: rgba(184,151,90,0.4); color: var(--ink); }
        .ld-item[aria-pressed="true"] { background: rgba(184,151,90,0.10); border-color: var(--gold); color: var(--ink); }
        .ld-item:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .ld-case { flex: none; width: 16px; height: 16px; margin-top: 2px; border: 1.5px solid rgba(26,26,24,0.3); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--ink); }
        .ld-item[aria-pressed="true"] .ld-case { background: var(--gold); border-color: var(--gold); }
        .ld-dpe { margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(26,26,24,0.1); }
        .ld-choix { display: flex; flex-wrap: wrap; gap: 8px; }
        .ld-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; padding: 10px 22px; border-radius: 40px; border: 1px solid rgba(184,151,90,0.45); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .ld-btn:hover { border-color: var(--gold); color: var(--gold-deep); }
        .ld-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); }
        .ld-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .ld .ld-dpe-r { font-size: 13.5px; line-height: 1.7; color: var(--ink-soft); margin: 12px 0 0; }
        .ld-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 24px; margin-top: 24px; }
        .ld-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 16px; }
        .ld .ld-exp { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }
        .ld-trav { margin-top: 22px; }
        .ld .ld-trav-t { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 14px; }
        .ld-trav-liste { list-style: none; margin: 0; padding: 0; }
        .ld-trav-liste li { display: block; padding: 13px 0; border-top: 1px solid rgba(26,26,24,0.1); }
        .ld-trav-liste li::before { display: none; }
        .ld-row { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; }
        .ld .ld-quoi { font-size: 14px; font-weight: 600; color: var(--ink); margin: 0; }
        .ld-tag { flex: none; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .ld .ld-action { font-size: 13.5px; line-height: 1.6; color: var(--ink-soft); margin: 6px 0 0; }
        .ld .ld-art { font-size: 11.5px; color: var(--ink-faint); margin: 4px 0 0; }
        .ld .ld-note { font-size: 12.5px; line-height: 1.65; color: var(--ink-faint); margin: 24px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
      `}</style>

      <div className="ld" data-nosnippet>
        <p className="ld-t">Votre bien est-il louable&nbsp;?</p>
        <p className="ld-s">
          Cochez uniquement ce qui <strong>ne va pas</strong>. Tout ce que vous laissez décoché est
          considéré comme conforme. Un seul critère manquant suffit à rendre le logement non décent.
        </p>

        {CATS.map((cat) => (
          <div key={cat}>
            <p className="ld-cat">{cat}</p>
            <ul className="ld-liste">
              {CRITERES.filter((c) => c.cat === cat).map((c) => (
                <li key={c.id}>
                  <button type="button" className="ld-item" aria-pressed={coches.includes(c.id)} onClick={() => bascule(c.id)}>
                    <span className="ld-case" aria-hidden="true">{coches.includes(c.id) ? '✕' : ''}</span>
                    <span>{c.l}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="ld-dpe">
          <p className="ld-cat" style={{ marginTop: 0 }}>Classe énergétique au DPE</p>
          <div className="ld-choix">
            {DPE_OPTIONS.map((o) => (
              <button key={o.v} type="button" className="ld-btn" aria-pressed={dpe === o.v} onClick={() => setDpe(o.v)}>
                {o.l}
              </button>
            ))}
          </div>
          <p className="ld-dpe-r">{d.texte}</p>
        </div>

        <div className="ld-rep" aria-live="polite">
          <span
            className="ld-badge"
            style={
              decent
                ? { background: 'rgba(184,151,90,0.14)', borderColor: 'var(--gold)', color: 'var(--gold-deep)' }
                : { background: 'rgba(26,26,24,0.06)', borderColor: 'rgba(26,26,24,0.35)', color: 'var(--ink)' }
            }
          >
            {decent ? 'A priori louable' : 'Non décent en l’état'}
          </span>

          <p className="ld-exp">
            {decent
              ? 'Aucun critère manquant d’après vos réponses. Cela ne vaut pas constat : la décence s’apprécie logement par logement, et un point non visible depuis un bureau peut manquer.'
              : `Le logement ne remplit pas ${manquants.length + (d.bloquant ? 1 : 0) > 1 ? 'plusieurs critères' : 'un critère'} de décence. Tant qu’il n’est pas remis en conformité, il ne peut pas être proposé à la location, et le locataire en place dispose de recours.`}
          </p>

          {(manquants.length > 0 || d.bloquant) && (
            <div className="ld-trav">
              <p className="ld-trav-t">Ce qu’il faut traiter</p>
              <ul className="ld-trav-liste">
                {manquants.map((c) => (
                  <li key={c.id}>
                    <div className="ld-row">
                      <p className="ld-quoi">{c.l}</p>
                      <span className="ld-tag" style={{ color: PERIM[c.perimetre].couleur }}>{PERIM[c.perimetre].texte}</span>
                    </div>
                    <p className="ld-action">{c.action}</p>
                    <p className="ld-art">Décret du 30 janvier 2002, {c.art}</p>
                  </li>
                ))}
                {d.bloquant && (
                  <li>
                    <div className="ld-row">
                      <p className="ld-quoi">Classe énergétique G</p>
                      <span className="ld-tag" style={{ color: PERIM.non.couleur }}>{PERIM.non.texte}</span>
                    </div>
                    <p className="ld-action">
                      Sortir de la classe G relève de l’isolation et du chauffage. Ce ne sont pas nos
                      métiers&nbsp;: aucun de nos lots de travaux ne fera bouger l’étiquette à lui seul.
                    </p>
                    <p className="ld-art">Critère de décence énergétique, France métropolitaine</p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <p className="ld-note">
          Outil d’information, pas un constat de décence ni un avis juridique. La liste reprend les
          critères du décret du 30 janvier 2002, mais leur appréciation dépend de l’état réel du
          logement, que seule une visite permet d’établir. En cas de litige, c’est le juge des
          contentieux de la protection qui tranche.
        </p>
      </div>
    </>
  )
}
