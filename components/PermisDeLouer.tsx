'use client'

import { useMemo, useState } from 'react'

/** Les six secteurs rouennais soumis à autorisation préalable de mise en location. */
const SECTEURS = [
  'Hôtel de Ville – Cathédrale',
  'Cauchoise',
  'Rive-Gauche',
  'Beauvoisine',
  'Saint-Nicaise',
  'Saint-Hilaire',
] as const

type Zone = (typeof SECTEURS)[number] | 'hors-secteur' | 'inconnu' | ''
type Oui = 'oui' | 'non' | ''
type Verdict = 'concerne' | 'non-concerne' | 'a-verifier' | 'incomplet'

const BADGE: Record<Verdict, { texte: string; fond: string; bord: string; couleur: string }> = {
  concerne: { texte: 'Autorisation obligatoire', fond: 'rgba(184,151,90,0.16)', bord: 'var(--gold)', couleur: 'var(--gold-deep)' },
  'non-concerne': { texte: 'A priori non concerné', fond: 'rgba(26,26,24,0.05)', bord: 'rgba(26,26,24,0.3)', couleur: 'var(--ink)' },
  'a-verifier': { texte: 'À vérifier rue par rue', fond: 'transparent', bord: 'rgba(26,26,24,0.22)', couleur: 'var(--ink-soft)' },
  incomplet: { texte: 'Répondez aux trois questions', fond: 'transparent', bord: 'rgba(26,26,24,0.18)', couleur: 'var(--ink-soft)' },
}

/** Pièces du dossier de diagnostics techniques exigé à l'appui de la demande. */
const DOSSIER = [
  'Le diagnostic de performance énergétique (DPE)',
  'Le constat de risque d’exposition au plomb, pour un bâti d’avant 1949',
  'L’état d’amiante, pour un bâti d’avant juillet 1997',
  'L’état de l’installation électrique, si elle a plus de quinze ans',
  'L’état de l’installation de gaz, si elle a plus de quinze ans',
  'Le mesurage de la surface habitable et l’état des risques',
]

/**
 * Suis-je soumis au permis de louer à Rouen ?
 *
 * Trois questions qualifiantes. Les périmètres étant définis rue par rue et
 * susceptibles d'évoluer, l'outil ne tranche jamais seul sur l'adresse : il
 * renvoie systématiquement à la carte officielle de la Ville.
 */
export default function PermisDeLouer() {
  const [zone, setZone] = useState<Zone>('')
  const [ancien, setAncien] = useState<Oui>('')
  const [nouvelle, setNouvelle] = useState<Oui>('')

  const verdict: Verdict = useMemo(() => {
    if (!zone || !ancien || !nouvelle) return 'incomplet'
    if (nouvelle === 'non') return 'non-concerne'
    if (zone === 'hors-secteur') return 'non-concerne'
    if (ancien === 'non') return 'non-concerne'
    if (zone === 'inconnu') return 'a-verifier'
    return 'concerne'
  }, [zone, ancien, nouvelle])

  const b = BADGE[verdict]

  const explication: Record<Verdict, string> = {
    concerne:
      'Votre logement réunit les trois conditions : secteur couvert, bâtiment de plus de quinze ans, nouvelle mise en location. Vous devez obtenir l’autorisation de la Ville AVANT de signer le bail. Vérifiez tout de même que votre rue figure bien dans le périmètre, celui-ci étant défini rue par rue.',
    'non-concerne':
      nouvelle === 'non'
        ? 'Le dispositif ne vise que les nouvelles mises en location. Un bail en cours, son renouvellement ou un avenant ne déclenchent pas de demande.'
        : zone === 'hors-secteur'
          ? 'Hors des six secteurs délimités, aucune autorisation préalable n’est exigée à Rouen. Les obligations de décence, elles, s’appliquent partout.'
          : 'Le dispositif ne vise que les bâtiments de plus de quinze ans. Votre logement n’est donc pas concerné — mais les obligations de décence restent dues.',
    'a-verifier':
      'Les périmètres sont définis rue par rue, et parfois par tronçon de rue. Reportez-vous à la carte officielle de la Ville de Rouen avant de conclure quoi que ce soit.',
    incomplet: '',
  }

  return (
    <>
      <style>{`
        .pdl { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .pdl : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0), ramenant
           tous les textes de l'outil à 16px. */
        .pdl .pdl-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .pdl .pdl-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; }
        .pdl-q { margin-bottom: 22px; }
        .pdl-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 11px; }
        .pdl-sel { width: 100%; padding: 12px 14px; font-family: 'Montserrat', sans-serif; font-size: 15px; color: var(--ink); background: var(--paper); border: 1px solid rgba(26,26,24,0.18); border-radius: 2px; }
        .pdl-sel:focus-visible { outline: 2px solid var(--gold); outline-offset: 1px; }
        .pdl-choix { display: flex; flex-wrap: wrap; gap: 8px; }
        .pdl-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; padding: 11px 22px; border-radius: 40px; border: 1px solid rgba(184,151,90,0.45); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .pdl-btn:hover { border-color: var(--gold); color: var(--gold-deep); }
        .pdl-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); }
        .pdl-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .pdl-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 22px; margin-top: 4px; }
        .pdl-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 16px; }
        .pdl .pdl-exp { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }
        .pdl-dossier { margin-top: 22px; padding-top: 20px; border-top: 1px solid rgba(26,26,24,0.1); }
        .pdl .pdl-dossier-t { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 14px; }
        /* Surcharge des puces de .guide-prose (losange doré + filet) */
        .pdl-liste { list-style: none; margin: 0; padding: 0; }
        .pdl-liste li { display: flex; gap: 12px; padding: 7px 0; border-top: 0; font-size: 14px; line-height: 1.6; color: var(--ink-soft); }
        .pdl-liste li::before { display: none; }
        .pdl-puce { color: var(--gold); font-size: 11px; line-height: 1.9; flex: none; }
        .pdl .pdl-note { font-size: 12.5px; line-height: 1.65; color: var(--ink-faint); margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
        .pdl-note a { color: var(--ink-faint); text-decoration: underline; }
      `}</style>

      <div className="pdl" data-nosnippet>
        <p className="pdl-t">Êtes-vous soumis au permis de louer&nbsp;?</p>
        <p className="pdl-s">Trois questions suffisent à le savoir.</p>

        <div className="pdl-q">
          <label className="pdl-lab" htmlFor="pdl-zone">1 · Dans quel secteur se trouve le logement&nbsp;?</label>
          <select id="pdl-zone" className="pdl-sel" value={zone} onChange={(e) => setZone(e.target.value as Zone)}>
            <option value="">— Choisissez —</option>
            {SECTEURS.map((s) => <option key={s} value={s}>{s}</option>)}
            <option value="hors-secteur">Aucun de ces secteurs</option>
            <option value="inconnu">Je ne sais pas</option>
          </select>
        </div>

        <div className="pdl-q">
          <span className="pdl-lab">2 · Le bâtiment a-t-il plus de quinze ans&nbsp;?</span>
          <div className="pdl-choix">
            {(['oui', 'non'] as const).map((v) => (
              <button key={v} type="button" className="pdl-btn" aria-pressed={ancien === v} onClick={() => setAncien(v)}>
                {v === 'oui' ? 'Oui' : 'Non'}
              </button>
            ))}
          </div>
        </div>

        <div className="pdl-q">
          <span className="pdl-lab">3 · S’agit-il d’une nouvelle mise en location&nbsp;?</span>
          <div className="pdl-choix">
            {(['oui', 'non'] as const).map((v) => (
              <button key={v} type="button" className="pdl-btn" aria-pressed={nouvelle === v} onClick={() => setNouvelle(v)}>
                {v === 'oui' ? 'Oui, nouveau locataire' : 'Non, bail en cours'}
              </button>
            ))}
          </div>
        </div>

        <div className="pdl-rep" aria-live="polite">
          <span className="pdl-badge" style={{ background: b.fond, borderColor: b.bord, color: b.couleur }}>{b.texte}</span>
          {verdict !== 'incomplet' && <p className="pdl-exp">{explication[verdict]}</p>}

          {verdict === 'concerne' && (
            <div className="pdl-dossier">
              <p className="pdl-dossier-t">Ce que votre dossier doit contenir</p>
              <ul className="pdl-liste">
                {DOSSIER.map((d) => (
                  <li key={d}><span className="pdl-puce" aria-hidden="true">◈</span><span>{d}</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="pdl-note">
          Outil d’information, pas un avis juridique. Les périmètres sont fixés par la Ville de Rouen
          et peuvent évoluer&nbsp;: vérifiez toujours votre adresse sur{' '}
          <a href="https://rouen.fr/permisdelouer" target="_blank" rel="noopener nofollow">rouen.fr/permisdelouer</a>,
          seule source qui fait foi. Nous ne réalisons pas les diagnostics — ils relèvent d’un
          diagnostiqueur certifié — mais nous exécutons les travaux qu’ils imposent.
        </p>
      </div>
    </>
  )
}
