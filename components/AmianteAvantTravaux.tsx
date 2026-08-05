'use client'

import { useMemo, useState } from 'react'

type Periode = '' | 'avant' | 'apres' | 'inconnu'
type Travaux = '' | 'sol' | 'percement' | 'poncage' | 'surface' | 'inconnu'
type Raat = '' | 'oui' | 'non'
type Verdict = 'incomplet' | 'obligatoire' | 'transmettre' | 'hors-champ' | 'a-verifier' | 'prudence'

const PERIODES: { v: Periode; l: string }[] = [
  { v: 'avant', l: 'Avant le 1ᵉʳ juillet 1997' },
  { v: 'apres', l: 'Après le 1ᵉʳ juillet 1997' },
  { v: 'inconnu', l: 'Je ne sais pas' },
]

const TRAVAUX: { v: Travaux; l: string; intrusif: boolean }[] = [
  { v: 'sol', l: 'Dépose d’un revêtement de sol collé, de dalles ou de leur colle', intrusif: true },
  { v: 'percement', l: 'Perçage, saignée, dépose de cloison ou de faux plafond', intrusif: true },
  { v: 'poncage', l: 'Ponçage ou décapage d’un enduit, d’une peinture ou d’un support', intrusif: true },
  { v: 'surface', l: 'Peinture ou pose sans toucher au support existant', intrusif: false },
  { v: 'inconnu', l: 'Je ne sais pas encore', intrusif: true },
]

const BADGE: Record<Verdict, { texte: string; fond: string; bord: string; couleur: string }> = {
  obligatoire: { texte: 'Repérage obligatoire', fond: 'rgba(184,151,90,0.16)', bord: 'var(--gold)', couleur: 'var(--gold-deep)' },
  transmettre: { texte: 'Rapport à transmettre', fond: 'rgba(184,151,90,0.16)', bord: 'var(--gold)', couleur: 'var(--gold-deep)' },
  'hors-champ': { texte: 'A priori hors champ', fond: 'rgba(26,26,24,0.05)', bord: 'rgba(26,26,24,0.3)', couleur: 'var(--ink)' },
  prudence: { texte: 'À évaluer', fond: 'transparent', bord: 'rgba(26,26,24,0.22)', couleur: 'var(--ink-soft)' },
  'a-verifier': { texte: 'Vérifiez la date du permis', fond: 'transparent', bord: 'rgba(26,26,24,0.22)', couleur: 'var(--ink-soft)' },
  incomplet: { texte: 'Répondez aux trois questions', fond: 'transparent', bord: 'rgba(26,26,24,0.18)', couleur: 'var(--ink-soft)' },
}

/**
 * Faut-il un repérage amiante avant travaux ?
 *
 * Deux régimes se croisent et se confondent constamment :
 *  - le repérage avant travaux (code du travail, article R4412-97), qui pèse sur
 *    le DONNEUR D'ORDRE dès qu'une opération risque d'exposer des travailleurs ;
 *  - le dossier amiante immobilier (DTA en parties communes, dossier amiante des
 *    parties privatives), qui relève du code de la santé publique.
 *
 * Le second ne dispense jamais du premier. L'outil part donc du repérage, et
 * ne conclut jamais seul quand la date du permis est inconnue.
 */
export default function AmianteAvantTravaux() {
  const [periode, setPeriode] = useState<Periode>('')
  const [travaux, setTravaux] = useState<Travaux>('')
  const [raat, setRaat] = useState<Raat>('')

  const verdict: Verdict = useMemo(() => {
    if (!periode || !travaux || !raat) return 'incomplet'
    if (periode === 'apres') return 'hors-champ'
    if (periode === 'inconnu') return 'a-verifier'
    const t = TRAVAUX.find((x) => x.v === travaux)
    if (!t?.intrusif) return 'prudence'
    return raat === 'oui' ? 'transmettre' : 'obligatoire'
  }, [periode, travaux, raat])

  const b = BADGE[verdict]

  const explication: Record<Verdict, string> = {
    obligatoire:
      'Vos travaux touchent au support d’un bâtiment antérieur à l’interdiction de l’amiante, et vous n’avez pas de repérage. Il doit être réalisé avant le démarrage, par un opérateur certifié avec mention amiante. L’obligation pèse sur vous en tant que donneur d’ordre — pas sur l’entreprise qui exécute.',
    transmettre:
      'Vous avez déjà un repérage : transmettez-le à l’entreprise avant qu’elle commence. C’est ce document qui lui permet d’identifier les opérations empoussiérantes et de définir ses protections. Vérifiez qu’il couvre bien les matériaux que vos travaux vont toucher — un repérage porte sur un périmètre précis, pas sur le logement en général.',
    'hors-champ':
      'Un bâtiment autorisé après le 1ᵉʳ juillet 1997 n’entre pas dans le champ des diagnostics amiante immobiliers. Restez toutefois attentif aux matériaux rapportés depuis : une réfection ancienne peut avoir introduit des produits antérieurs.',
    prudence:
      'Repeindre ou poser sans toucher au support existant ne déclenche pas, en soi, de repérage. Mais la frontière est vite franchie : un simple ponçage de préparation, une reprise de fissure ou une cheville dans une dalle changent la réponse. Faites préciser la nature exacte des travaux avant de trancher.',
    'a-verifier':
      'Tout dépend de la date du permis de construire. Elle figure sur les documents de la copropriété, et la mairie peut la confirmer. Ne lancez pas de dépose de sol avant de l’avoir vérifiée : c’est le cas où l’erreur coûte le plus cher.',
    incomplet: '',
  }

  const ETAPES = [
    'Vérifier la date du permis de construire du bâtiment.',
    'Commander le repérage à un opérateur certifié avec mention amiante.',
    'Lui indiquer précisément le périmètre des travaux prévus : le repérage porte sur ce qui sera touché.',
    'Transmettre le rapport à chaque entreprise appelée à intervenir.',
    'Conserver le rapport : il servira aux interventions suivantes sur le même périmètre.',
  ]

  return (
    <>
      <style>{`
        .am { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .am : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0). */
        .am .am-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .am .am-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; }
        .am-q { margin-bottom: 22px; }
        .am-lab { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 11px; }
        .am-choix { display: flex; flex-direction: column; gap: 7px; }
        .am-choix--ligne { flex-direction: row; flex-wrap: wrap; gap: 8px; }
        .am-btn { font-family: 'Montserrat', sans-serif; font-size: 13.5px; font-weight: 500; text-align: left; padding: 11px 16px; border-radius: 2px; border: 1px solid rgba(26,26,24,0.14); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .am-choix--ligne .am-btn { border-radius: 40px; padding: 11px 22px; font-weight: 600; border-color: rgba(184,151,90,0.45); }
        .am-btn:hover { border-color: var(--gold); color: var(--gold-deep); }
        .am-btn[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); font-weight: 600; }
        .am-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .am-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 22px; }
        .am-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 16px; }
        .am .am-exp { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }
        .am-etapes { margin-top: 22px; padding-top: 20px; border-top: 1px solid rgba(26,26,24,0.1); }
        .am .am-etapes-t { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 14px; }
        /* Surcharge des puces de .guide-prose */
        .am-liste { list-style: none; margin: 0; padding: 0; counter-reset: amstep; }
        .am-liste li { display: flex; gap: 12px; padding: 7px 0; border-top: 0; font-size: 14px; line-height: 1.6; color: var(--ink-soft); counter-increment: amstep; }
        .am-liste li::before { display: none; }
        .am-num { flex: none; font-family: 'Bodoni Moda', serif; font-size: 15px; font-weight: 600; color: var(--gold); line-height: 1.5; }
        .am-rappel { background: rgba(184,151,90,0.10); border: 1px solid rgba(184,151,90,0.3); border-radius: 2px; padding: 16px 18px; margin-top: 22px; }
        .am .am-rappel-p { font-size: 13.5px; line-height: 1.7; color: var(--ink); margin: 0; }
        .am .am-note { font-size: 12.5px; line-height: 1.65; color: #8a857a; margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
      `}</style>

      <div className="am" data-nosnippet>
        <p className="am-t">Faut-il un repérage avant travaux&nbsp;?</p>
        <p className="am-s">Trois questions suffisent à le savoir.</p>

        <div className="am-q">
          <span className="am-lab">1 · Quand le bâtiment a-t-il été autorisé&nbsp;?</span>
          <div className="am-choix am-choix--ligne">
            {PERIODES.map((p) => (
              <button key={p.v} type="button" className="am-btn" aria-pressed={periode === p.v} onClick={() => setPeriode(p.v)}>
                {p.l}
              </button>
            ))}
          </div>
        </div>

        <div className="am-q">
          <span className="am-lab">2 · Quels travaux sont prévus&nbsp;?</span>
          <div className="am-choix">
            {TRAVAUX.map((t) => (
              <button key={t.v} type="button" className="am-btn" aria-pressed={travaux === t.v} onClick={() => setTravaux(t.v)}>
                {t.l}
              </button>
            ))}
          </div>
        </div>

        <div className="am-q">
          <span className="am-lab">3 · Avez-vous déjà un rapport de repérage avant travaux&nbsp;?</span>
          <div className="am-choix am-choix--ligne">
            {(['oui', 'non'] as const).map((v) => (
              <button key={v} type="button" className="am-btn" aria-pressed={raat === v} onClick={() => setRaat(v)}>
                {v === 'oui' ? 'Oui' : 'Non'}
              </button>
            ))}
          </div>
        </div>

        <div className="am-rep" aria-live="polite">
          <span className="am-badge" style={{ background: b.fond, borderColor: b.bord, color: b.couleur }}>{b.texte}</span>
          {verdict !== 'incomplet' && <p className="am-exp">{explication[verdict]}</p>}

          {verdict === 'obligatoire' && (
            <div className="am-etapes">
              <p className="am-etapes-t">La marche à suivre</p>
              <ul className="am-liste">
                {ETAPES.map((e, i) => (
                  <li key={e}><span className="am-num" aria-hidden="true">{i + 1}</span><span>{e}</span></li>
                ))}
              </ul>
            </div>
          )}

          {(verdict === 'obligatoire' || verdict === 'transmettre' || verdict === 'a-verifier') && (
            <div className="am-rappel">
              <p className="am-rappel-p">
                <strong>Le dossier amiante ne dispense pas du repérage.</strong> Le dossier technique
                amiante des parties communes et le dossier amiante des parties privatives relèvent
                d’un autre régime. Ils informent, ils ne remplacent pas le repérage avant travaux.
              </p>
            </div>
          )}
        </div>

        <p className="am-note">
          Outil d’information, pas un avis juridique. Nous ne réalisons ni les repérages ni les
          travaux de retrait d’amiante&nbsp;: ils relèvent d’opérateurs et d’entreprises certifiés.
          Nous intervenons sur les supports une fois le périmètre connu et, le cas échéant, traité.
          Sur un bâti ancien, nous demandons systématiquement le rapport avant de déposer un
          revêtement collé.
        </p>
      </div>
    </>
  )
}
