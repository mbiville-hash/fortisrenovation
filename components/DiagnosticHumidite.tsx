'use client'

import { useMemo, useState } from 'react'

type Cause = 'condensation' | 'remontee' | 'infiltration' | 'fuite'

type Option = { v: string; l: string; s: Partial<Record<Cause, number>> }
type Question = { id: string; label: string; options: Option[] }

/**
 * Identifier l'origine d'une humidité avant de refaire un support.
 *
 * Volontairement un faisceau d'indices, pas un arbre rigide : les trois
 * questions portent chacune un poids, et le verdict sort du cumul. Quand les
 * deux premières causes sont au coude à coude, l'outil le dit au lieu de
 * trancher — sur ce sujet, une fausse certitude coûte un chantier refait.
 *
 * Aucun diagnostic à distance ne remplace un relevé d'humidité sur place.
 */
const QUESTIONS: Question[] = [
  {
    id: 'ou',
    label: '1 · Où le désordre apparaît-il ?',
    options: [
      { v: 'pied', l: 'En pied de mur, jusqu’à un mètre du sol', s: { remontee: 3 } },
      { v: 'haut', l: 'En haut des murs, dans les angles, au plafond', s: { condensation: 3 } },
      { v: 'fenetre', l: 'Autour des fenêtres', s: { condensation: 2, infiltration: 2 } },
      { v: 'tache', l: 'Une tache localisée, au plafond ou sur un mur', s: { infiltration: 3, fuite: 3 } },
      { v: 'hauteur', l: 'Sur toute la hauteur d’un mur', s: { infiltration: 2, fuite: 1 } },
    ],
  },
  {
    id: 'quand',
    label: '2 · Quand est-ce le plus visible ?',
    options: [
      { v: 'hiver', l: 'L’hiver, ou quand il fait froid dehors', s: { condensation: 3 } },
      { v: 'pluie', l: 'Après une forte pluie ou du vent', s: { infiltration: 3 } },
      { v: 'toujours', l: 'Toute l’année, sans lien avec la météo', s: { remontee: 2, fuite: 2 } },
      { v: 'soudain', l: 'C’est apparu brutalement, en quelques jours', s: { fuite: 3 } },
    ],
  },
  {
    id: 'aspect',
    label: '3 · À quoi cela ressemble-t-il ?',
    options: [
      { v: 'moisi', l: 'Moisissures noires en surface, sur la peinture ou les joints', s: { condensation: 3 } },
      { v: 'salpetre', l: 'Dépôt blanc poudreux, plâtre qui s’effrite', s: { remontee: 3 } },
      { v: 'aureole', l: 'Une auréole brune, aux contours nets', s: { infiltration: 2, fuite: 2 } },
      { v: 'cloque', l: 'La peinture ou l’enduit cloque et se décolle', s: { remontee: 1, infiltration: 1, fuite: 1 } },
    ],
  },
]

const VERDICTS: Record<Cause, { titre: string; quoi: string; confirmer: string[]; traiter: string; nous: string }> = {
  condensation: {
    titre: 'Probablement de la condensation',
    quoi: 'L’air intérieur est chargé d’humidité et la vapeur se dépose sur les surfaces les plus froides — angles, encadrements, murs donnant sur l’extérieur. C’est de loin la cause la plus fréquente en logement locatif, et la plus souvent attribuée à tort à une infiltration.',
    confirmer: [
      'Les moisissures partent au nettoyage, mais reviennent quelques semaines plus tard.',
      'Le support reste sec en profondeur : c’est la surface qui est mouillée, pas le mur.',
      'Les bouches de ventilation sont encrassées, obstruées, ou la VMC ne tire plus.',
      'Le phénomène se concentre dans la salle d’eau et la cuisine.',
    ],
    traiter: 'On traite l’air, pas le mur. Remise en état de la ventilation, désencrassement ou remplacement des bouches, reprise du réseau, puis assainissement des supports et peinture adaptée aux pièces humides. Repeindre sans rétablir le renouvellement d’air ne tient pas une saison.',
    nous: 'La ventilation, l’assainissement des supports et la peinture relèvent de notre périmètre. Si le diagnostic conclut à un défaut d’isolation ou à un pont thermique, en revanche, cela sort de nos métiers et nous vous le dirons plutôt que de repeindre par-dessus.',
  },
  remontee: {
    titre: 'Probablement une remontée capillaire',
    quoi: 'L’eau du sol migre dans la maçonnerie par capillarité, faute de coupure étanche en pied de mur. Typique du bâti ancien, très présent sur les logements d’avant 1919 de la vallée et des rez-de-chaussée rouennais.',
    confirmer: [
      'Le désordre s’arrête à une hauteur assez régulière, souvent entre 50 cm et 1 m.',
      'Présence de salpêtre : un dépôt blanc, poudreux, qui réapparaît après nettoyage.',
      'Les plinthes et le bas des cloisons se dégradent, le plâtre se désagrège.',
      'Cela concerne un rez-de-chaussée, un mur enterré ou un mur en contact avec la terre.',
    ],
    traiter: 'La cause se traite en premier : coupure de capillarité, drainage ou assainissement du pied de mur, selon la configuration. Ensuite seulement viennent la reprise des supports et un enduit qui laisse respirer la maçonnerie.',
    nous: 'Nous intervenons sur la reprise des enduits et des peintures une fois la cause traitée. Le traitement de la remontée elle-même relève d’une entreprise spécialisée : nous ne le réalisons pas, et refaire les supports avant serait vous faire payer deux fois.',
  },
  infiltration: {
    titre: 'Probablement une infiltration',
    quoi: 'L’eau entre par l’enveloppe du bâtiment : façade fissurée ou poreuse, joint de menuiserie défaillant, appui de fenêtre, toiture-terrasse, gouttière débordante. Le lien avec la pluie est le meilleur indice.',
    confirmer: [
      'Le désordre suit les épisodes pluvieux, avec parfois un ou deux jours de décalage.',
      'La tache s’étend puis sèche, et laisse une auréole aux contours marqués.',
      'Le logement est en dernier étage, en pignon, ou sous une toiture-terrasse.',
      'Une fissure, un joint ouvert ou une descente d’eau bouchée est visible à l’extérieur.',
    ],
    traiter: 'On cherche le point d’entrée avant tout. Reprise des joints, des fissures, de l’étanchéité de l’appui ou de la couverture, puis assèchement complet du support, et seulement ensuite les enduits et la peinture.',
    nous: 'Nous traitons les reprises d’enduits, de fissures et de peinture, et nous coordonnons avec le syndic quand le point d’entrée est en partie commune — façade et toiture le sont presque toujours, ce qui change qui paie.',
  },
  fuite: {
    titre: 'Probablement une fuite de canalisation',
    quoi: 'Une canalisation d’alimentation ou d’évacuation fuit, dans le mur, sous le sol ou dans le lot du dessus. C’est la cause la plus urgente : elle ne se stabilise pas et le volume d’eau augmente tant qu’on n’a pas coupé.',
    confirmer: [
      'C’est apparu vite, et la zone humide s’étend sans lien avec la météo.',
      'Le désordre est proche d’une pièce d’eau, d’une colonne ou d’un passage de canalisation.',
      'La consommation d’eau a augmenté sans raison, ou le compteur tourne à robinets fermés.',
      'Le support est mouillé en profondeur, pas seulement en surface.',
    ],
    traiter: 'Localiser puis réparer, dans cet ordre, avant toute réfection. Le séchage est incompressible : reprendre les enduits sur un support encore humide, c’est refaire le chantier quelques mois plus tard.',
    nous: 'C’est notre cœur de métier : recherche de fuite non destructive, réparation, puis remise en état des supports. Nous délivrons aussi l’attestation qui permet de faire plafonner une facture d’eau anormale.',
  },
}

const ORDRE: Cause[] = ['condensation', 'remontee', 'infiltration', 'fuite']

export default function DiagnosticHumidite() {
  const [rep, setRep] = useState<Record<string, string>>({})

  const { verdict, incertain, complet } = useMemo(() => {
    const complet = QUESTIONS.every((q) => rep[q.id])
    if (!complet) return { verdict: null as Cause | null, incertain: false, complet }

    const scores: Record<Cause, number> = { condensation: 0, remontee: 0, infiltration: 0, fuite: 0 }
    for (const q of QUESTIONS) {
      const o = q.options.find((x) => x.v === rep[q.id])
      if (!o) continue
      for (const c of ORDRE) scores[c] += o.s[c] ?? 0
    }
    const classe = [...ORDRE].sort((a, b) => scores[b] - scores[a])
    // Moins d'un point d'écart entre les deux premières causes : on ne tranche pas.
    return { verdict: classe[0], incertain: scores[classe[0]] - scores[classe[1]] < 1, complet }
  }, [rep])

  const v = verdict ? VERDICTS[verdict] : null

  return (
    <>
      <style>{`
        .dh { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .dh : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0). */
        .dh .dh-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .dh .dh-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; }
        .dh-q { margin-bottom: 22px; }
        .dh-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 11px; }
        .dh-choix { display: flex; flex-direction: column; gap: 7px; }
        .dh-btn { font-family: 'Montserrat', sans-serif; font-size: 13.5px; font-weight: 500; text-align: left; padding: 11px 16px; border-radius: 2px; border: 1px solid rgba(26,26,24,0.14); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .dh-btn:hover { border-color: var(--gold); color: var(--gold-deep); }
        .dh-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); font-weight: 600; }
        .dh-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .dh-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 24px; }
        .dh .dh-attente { font-size: 14px; color: var(--ink-soft); line-height: 1.7; margin: 0; }
        .dh .dh-verdict { font-family: 'Bodoni Moda', serif; font-size: clamp(21px, 3vw, 26px); line-height: 1.25; color: var(--gold-deep); margin: 0 0 12px; }
        .dh .dh-quoi { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0 0 20px; }
        .dh-bloc { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(26,26,24,0.1); }
        .dh .dh-bloc-t { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 12px; }
        .dh .dh-bloc-p { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }
        /* Surcharge des puces de .guide-prose */
        .dh-liste { list-style: none; margin: 0; padding: 0; }
        .dh-liste li { display: flex; gap: 12px; padding: 7px 0; border-top: 0; font-size: 14px; line-height: 1.65; color: var(--ink-soft); }
        .dh-liste li::before { display: none; }
        .dh-puce { color: var(--gold); font-size: 11px; line-height: 1.9; flex: none; }
        .dh-doute { background: rgba(184,151,90,0.10); border: 1px solid rgba(184,151,90,0.3); border-radius: 2px; padding: 16px 18px; margin-bottom: 20px; }
        .dh .dh-doute-p { font-size: 13.5px; line-height: 1.7; color: var(--ink); margin: 0; }
        .dh .dh-note { font-size: 12.5px; line-height: 1.65; color: var(--ink-faint); margin: 24px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
        .dh .dh-note a { color: var(--ink-faint); text-decoration: underline; }
      `}</style>

      <div className="dh" data-nosnippet>
        <p className="dh-t">D’où vient cette humidité&nbsp;?</p>
        <p className="dh-s">
          Trois questions, et le faisceau d’indices penche vers une cause. C’est un point de départ
          pour orienter le diagnostic, pas un verdict.
        </p>

        {QUESTIONS.map((q) => (
          <div className="dh-q" key={q.id}>
            <span className="dh-lab">{q.label}</span>
            <div className="dh-choix">
              {q.options.map((o) => (
                <button
                  key={o.v}
                  type="button"
                  className="dh-btn"
                  aria-pressed={rep[q.id] === o.v}
                  onClick={() => setRep((r) => ({ ...r, [q.id]: o.v }))}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="dh-rep" aria-live="polite">
          {!complet || !v ? (
            <p className="dh-attente">Répondez aux trois questions pour obtenir une orientation.</p>
          ) : (
            <>
              {incertain && (
                <div className="dh-doute">
                  <p className="dh-doute-p">
                    Vos réponses désignent <strong>deux causes à égalité</strong>. C’est fréquent, et
                    c’est même souvent la réalité&nbsp;: une infiltration ancienne entretient de la
                    condensation, une fuite lente ressemble à une remontée. Dans ce cas, seul un
                    relevé sur place tranche. La piste ci-dessous reste la plus probable.
                  </p>
                </div>
              )}

              <p className="dh-verdict">{v.titre}</p>
              <p className="dh-quoi">{v.quoi}</p>

              <div className="dh-bloc">
                <p className="dh-bloc-t">Ce qui le confirmerait</p>
                <ul className="dh-liste">
                  {v.confirmer.map((c) => (
                    <li key={c}><span className="dh-puce" aria-hidden="true">◈</span><span>{c}</span></li>
                  ))}
                </ul>
              </div>

              <div className="dh-bloc">
                <p className="dh-bloc-t">Ce qu’il faut traiter, et dans quel ordre</p>
                <p className="dh-bloc-p">{v.traiter}</p>
              </div>

              <div className="dh-bloc">
                <p className="dh-bloc-t">Ce que nous faisons, et ce que nous ne faisons pas</p>
                <p className="dh-bloc-p">{v.nous}</p>
              </div>
            </>
          )}
        </div>

        <p className="dh-note">
          Outil d’orientation, pas un diagnostic. Aucune analyse à distance ne remplace un relevé
          d’humidité sur place&nbsp;: les causes se cumulent souvent, et c’est la mesure du taux
          d’humidité dans l’épaisseur du mur qui distingue une surface mouillée d’une maçonnerie
          gorgée d’eau. En cas de doute sur une fuite, voyez notre page{' '}
          <a href="/recherche-de-fuite-rouen">recherche de fuite</a>.
        </p>
      </div>
    </>
  )
}
