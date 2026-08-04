'use client'

import { useMemo, useState } from 'react'

type Qui = 'locataire' | 'bailleur' | 'depend'
/** 'partout' = le poste se retrouve dans toutes les pièces (électricité, murs, sols…). */
type Piece = 'sdb' | 'cuisine' | 'wc' | 'sejour' | 'entree' | 'exterieur' | 'partout'
type Poste = { l: string; qui: Qui; d: string; pieces: Piece[] }

const PIECES: { id: Piece; nom: string; svg: React.ReactNode }[] = [
  {
    id: 'sdb', nom: 'Salle de bain',
    svg: <><path d="M8 26h32v6a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8z" /><path d="M14 26V13a4 4 0 0 1 8 0v2" /><path d="M16 44l-3 4M32 44l3 4" /></>,
  },
  {
    id: 'cuisine', nom: 'Cuisine',
    svg: <><rect x="9" y="12" width="30" height="24" rx="2" /><path d="M9 24h30" /><circle cx="17" cy="18" r="1.6" /><circle cx="17" cy="30" r="1.6" /><path d="M14 36v8M34 36v8" /></>,
  },
  {
    id: 'wc', nom: 'WC',
    svg: <><rect x="15" y="8" width="18" height="8" rx="1" /><path d="M17 16v4c0 6 3 9 7 9s7-3 7-9v-4" /><path d="M20 29l-1.5 8h11L28 29" /></>,
  },
  {
    id: 'sejour', nom: 'Chambre & séjour',
    svg: <><path d="M8 30v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v6" /><rect x="6" y="30" width="36" height="10" rx="2" /><path d="M10 40v4M38 40v4" /></>,
  },
  {
    id: 'entree', nom: 'Entrée & couloir',
    svg: <><rect x="13" y="7" width="22" height="34" rx="1.5" /><circle cx="29" cy="25" r="1.8" /><path d="M8 41h32" /></>,
  },
  {
    id: 'exterieur', nom: 'Extérieur & communs',
    svg: <><path d="M7 22 24 9l17 13" /><path d="M11 20v18h26V20" /><rect x="20" y="27" width="8" height="11" /></>,
  },
]

/**
 * Répartition des réparations entre bailleur et locataire.
 * Sources : décret n°87-712 du 26 août 1987 (liste des réparations locatives) et
 * loi n°89-462 du 6 juillet 1989, art. 7 d — le locataire n'est pas tenu des
 * réparations dues à la vétusté, à une malfaçon, à un vice de construction ou à
 * un cas de force majeure.
 */
const POSTES: Poste[] = [
  // Plomberie
  { l: 'Robinet qui goutte', qui: 'locataire', pieces: ['sdb', 'cuisine'], d: 'Le remplacement des joints, clapets et presse-étoupes des robinets fait partie des réparations locatives listées par le décret.' },
  { l: 'Évier ou douche bouché', qui: 'locataire', pieces: ['sdb', 'cuisine'], d: 'Le dégorgement des canalisations est expressément à la charge du locataire — sauf si le bouchon vient d’un défaut de la canalisation elle-même.' },
  { l: 'Flexible de douche', qui: 'locataire', pieces: ['sdb'], d: 'Le remplacement des tuyaux flexibles de douche est nommément cité dans le décret.' },
  { l: 'Dépôts de calcaire sur la robinetterie', qui: 'locataire', pieces: ['sdb', 'cuisine'], d: 'Le nettoyage des dépôts de calcaire relève de l’entretien courant.' },
  { l: 'Mitigeur usé à remplacer', qui: 'depend', pieces: ['sdb', 'cuisine'], d: 'Usé par le temps : c’est de la vétusté, donc au bailleur. Cassé ou arraché : au locataire. C’est l’état des lieux d’entrée qui tranche.' },
  { l: 'Fuite sur une canalisation encastrée', qui: 'bailleur', pieces: ['partout'], d: 'La dégradation de la canalisation elle-même n’est pas une réparation locative : elle incombe au bailleur.' },
  { l: 'Abattant de WC cassé', qui: 'locataire', pieces: ['wc', 'sdb'], d: 'Menue réparation d’un élément d’équipement — sauf si l’abattant était déjà hors d’usage à l’entrée.' },
  { l: 'Mécanisme de chasse d’eau', qui: 'depend', pieces: ['wc', 'sdb'], d: 'L’entretien courant et le rodage des sièges de clapets sont au locataire. Le remplacement complet d’un mécanisme hors d’usage par vétusté revient au bailleur.' },
  { l: 'Chauffe-eau à remplacer', qui: 'bailleur', pieces: ['sdb', 'cuisine'], d: 'Le remplacement d’un appareil en fin de vie incombe au bailleur ; le locataire n’assure que l’entretien et la vidange.' },

  // Électricité
  { l: 'Ampoules et tubes lumineux', qui: 'locataire', pieces: ['partout'], d: 'Nommément cités dans le décret comme réparation locative.' },
  { l: 'Interrupteur ou prise cassé', qui: 'locataire', pieces: ['partout'], d: 'Leur remplacement est à la charge du locataire — l’appareillage jauni par le temps relève en revanche de la vétusté.' },
  { l: 'Fusibles et coupe-circuit', qui: 'locataire', pieces: ['partout'], d: 'Cités dans le décret. Attention : si le circuit disjoncte en boucle, la cause est souvent une installation à revoir, donc au bailleur.' },
  { l: 'Baguettes et gaines de protection', qui: 'locataire', pieces: ['partout'], d: 'Leur réparation ou leur remplacement figure dans la liste des réparations locatives.' },
  { l: 'Tableau électrique vétuste', qui: 'bailleur', pieces: ['entree', 'partout'], d: 'Le remplacement d’un tableau ancien et la mise en conformité relèvent du bailleur, au titre du logement décent.' },
  { l: 'Installation électrique non conforme', qui: 'bailleur', pieces: ['partout'], d: 'Le bailleur doit délivrer un logement décent, ce qui inclut une installation électrique en bon état d’usage et de sécurité.' },

  // Murs & peinture
  { l: 'Trous de chevilles à reboucher', qui: 'locataire', pieces: ['partout'], d: 'Le rebouchage des trous et les menus raccords de peinture sont expressément prévus comme réparations locatives.' },
  { l: 'Peinture ternie par les années', qui: 'bailleur', pieces: ['partout'], d: 'Une peinture usée par le temps, c’est de la vétusté : le locataire n’a pas à financer la réfection.' },
  { l: 'Murs très dégradés, taches, dessins', qui: 'locataire', pieces: ['partout'], d: 'Au-delà de l’usage normal, il s’agit d’une dégradation. La vétusté doit toutefois être déduite du montant réclamé.' },
  { l: 'Papier peint décollé', qui: 'depend', pieces: ['sejour', 'entree'], d: 'Décollé par le temps ou par l’humidité du bâti : au bailleur. Arraché ou déchiré : au locataire.' },
  { l: 'Moisissures et humidité', qui: 'depend', pieces: ['sdb', 'cuisine', 'sejour'], d: 'Dues à une infiltration, à un pont thermique ou à une ventilation insuffisante du logement : au bailleur. Dues à un manque d’aération manifeste : au locataire. C’est le point le plus souvent disputé.' },

  // Sols
  { l: 'Lame ou dalle abîmée', qui: 'locataire', pieces: ['sejour', 'entree'], d: 'Le remplacement des lames et dalles de parquet abîmées par le locataire est une réparation locative.' },
  { l: 'Sol usé par le temps', qui: 'bailleur', pieces: ['partout'], d: 'Un sol arrivé en fin de vie relève de la vétusté. Une grille de vétusté permet de chiffrer la part résiduelle.' },
  { l: 'Brûlure ou tache indélébile au sol', qui: 'locataire', pieces: ['sejour', 'cuisine'], d: 'Dégradation caractérisée, au-delà de l’usage normal — sous réserve de la vétusté du revêtement.' },
  { l: 'Sol gonflé après un dégât des eaux', qui: 'depend', pieces: ['sdb', 'cuisine', 'sejour'], d: 'Si la fuite vient de la canalisation ou d’un voisin : au bailleur ou à son assurance. Si elle vient d’une négligence du locataire : à lui. Le constat et les photos font foi.' },

  // Ouvertures
  { l: 'Vitre cassée', qui: 'locataire', pieces: ['sejour', 'cuisine'], d: 'Le remplacement des vitrages détériorés est une réparation locative.' },
  { l: 'Porte qui grince', qui: 'locataire', pieces: ['partout'], d: 'Le graissage des gonds, paumelles et charnières figure dans le décret.' },
  { l: 'Clés perdues, serrure à changer', qui: 'locataire', pieces: ['entree'], d: 'Le remplacement des clés perdues et le graissage des serrures sont à la charge du locataire.' },
  { l: 'Fenêtre ou volet vétuste', qui: 'bailleur', pieces: ['sejour', 'cuisine'], d: 'Une menuiserie en fin de vie relève de la vétusté et donc du bailleur.' },
  { l: 'Sangle de volet roulant', qui: 'locataire', pieces: ['sejour'], d: 'Le remplacement de la sangle est une menue réparation. Le moteur ou le tablier complet relèvent du bailleur.' },

  // Équipements
  { l: 'Bouches de VMC encrassées', qui: 'locataire', pieces: ['sdb', 'cuisine', 'wc'], d: 'L’entretien courant de la ventilation est au locataire. Le moteur ou le caisson relèvent du bailleur.' },
  { l: 'Entretien annuel de la chaudière', qui: 'locataire', pieces: ['cuisine', 'partout'], d: 'L’entretien courant, y compris le contrat annuel, est à la charge du locataire.' },
  { l: 'Détecteur de fumée', qui: 'depend', pieces: ['entree', 'partout'], d: 'L’installation initiale est au bailleur ; l’entretien et le remplacement des piles reviennent à l’occupant.' },
  { l: 'Ramonage du conduit', qui: 'locataire', pieces: ['sejour'], d: 'Le ramonage est expressément à la charge du locataire.' },
  { l: 'Entretien du jardin privatif', qui: 'locataire', pieces: ['exterieur'], d: 'Tonte, taille et entretien des allées sont à la charge du locataire qui en a l’usage exclusif.' },
  { l: 'Gouttière bouchée', qui: 'locataire', pieces: ['exterieur'], d: 'Le dégorgement est au locataire, uniquement pour les parties extérieures dont il a l’usage exclusif.' },
]

const VERDICT: Record<Qui, { texte: string; fond: string; bord: string; couleur: string }> = {
  locataire: { texte: 'Locataire', fond: 'rgba(184,151,90,0.14)', bord: 'var(--gold)', couleur: 'var(--gold-deep)' },
  bailleur: { texte: 'Bailleur', fond: 'rgba(26,26,24,0.06)', bord: 'rgba(26,26,24,0.35)', couleur: 'var(--ink)' },
  depend: { texte: 'Ça dépend', fond: 'transparent', bord: 'rgba(26,26,24,0.22)', couleur: 'var(--ink-soft)' },
}

export default function QuiPaieQuoi() {
  const [piece, setPiece] = useState<Piece | null>(null)
  const [poste, setPoste] = useState<Poste | null>(null)

  const pieceCourante = PIECES.find((p) => p.id === piece)

  const { propres, generaux } = useMemo(() => {
    if (!piece) return { propres: [], generaux: [] }
    return {
      propres: POSTES.filter((p) => p.pieces.includes(piece)),
      generaux: POSTES.filter((p) => p.pieces.includes('partout') && !p.pieces.includes(piece)),
    }
  }, [piece])

  return (
    <>
      <style>{`
        .qpq { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .qpq : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0), ramenant
           tous les textes de l'outil à 16px. */
        .qpq .qpq-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .qpq .qpq-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 22px; }
        .qpq .qpq-etape { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 16px; }

        .qpq-pieces { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
        .qpq-piece { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 22px 12px; background: var(--paper); border: 1px solid rgba(184,151,90,0.3); border-radius: 2px; cursor: pointer; font-family: 'Montserrat', sans-serif; transition: transform .25s cubic-bezier(.16,1,.3,1), border-color .25s, background .25s; }
        .qpq-piece:hover { transform: translateY(-3px); border-color: var(--gold); background: #fff; }
        .qpq-piece:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .qpq-piece svg { width: 40px; height: 40px; fill: none; stroke: var(--gold); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .qpq-piece span { font-size: 12.5px; font-weight: 600; color: var(--ink); text-align: center; line-height: 1.35; }

        .qpq-retour { display: inline-flex; align-items: center; gap: 8px; background: none; border: 0; padding: 0; margin-bottom: 18px; font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold-deep); cursor: pointer; }
        .qpq-retour:hover { text-decoration: underline; }
        .qpq-retour:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

        .qpq-items { list-style: none; margin: 0; padding: 0; }
        .qpq-items li { border-top: 1px solid rgba(26,26,24,0.1); padding: 0; }
        .qpq-items li::before { display: none; }
        .qpq-item { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 15px 4px; background: none; border: 0; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 15px; color: var(--ink); text-align: left; transition: color .2s; }
        .qpq-item:hover { color: var(--gold-deep); }
        .qpq-item:focus-visible { outline: 2px solid var(--gold); outline-offset: -2px; }
        .qpq-fleche { color: var(--gold); flex: none; }
        .qpq .qpq-sous { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #8a857a; margin: 26px 0 4px; }

        .qpq-rep { border: 1px solid rgba(184,151,90,0.4); border-radius: 2px; padding: 24px; background: var(--paper); }
        .qpq .qpq-rep-l { font-family: 'Bodoni Moda', serif; font-size: 21px; color: var(--ink); margin-bottom: 14px; }
        .qpq-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 16px; }
        .qpq .qpq-rep-d { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }

        .qpq .qpq-note { font-size: 12.5px; line-height: 1.6; color: #8a857a; margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
      `}</style>

      <div className="qpq" data-nosnippet>
        <p className="qpq-t">Qui paie quoi&nbsp;?</p>
        <p className="qpq-s">
          Choisissez la pièce, puis ce qui est cassé. La réponse s&apos;appuie sur le décret du 26&nbsp;août 1987
          et sur la loi du 6&nbsp;juillet 1989.
        </p>

        {/* Étape 1 — la pièce */}
        {!piece && (
          <>
            <p className="qpq-etape">Étape 1 · Dans quelle pièce&nbsp;?</p>
            <div className="qpq-pieces">
              {PIECES.map((p) => (
                <button key={p.id} type="button" className="qpq-piece" onClick={() => { setPiece(p.id); setPoste(null) }}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">{p.svg}</svg>
                  <span>{p.nom}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Étape 2 — l'objet */}
        {piece && !poste && (
          <>
            <button type="button" className="qpq-retour" onClick={() => setPiece(null)}>← Changer de pièce</button>
            <p className="qpq-etape">Étape 2 · {pieceCourante?.nom} — qu&apos;est-ce qui est cassé&nbsp;?</p>
            <ul className="qpq-items">
              {propres.map((p) => (
                <li key={p.l}>
                  <button type="button" className="qpq-item" onClick={() => setPoste(p)}>
                    {p.l}<span className="qpq-fleche" aria-hidden="true">→</span>
                  </button>
                </li>
              ))}
            </ul>
            {generaux.length > 0 && (
              <>
                <p className="qpq-sous">Concerne tout le logement</p>
                <ul className="qpq-items">
                  {generaux.map((p) => (
                    <li key={p.l}>
                      <button type="button" className="qpq-item" onClick={() => setPoste(p)}>
                        {p.l}<span className="qpq-fleche" aria-hidden="true">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {/* Étape 3 — la réponse */}
        {poste && (
          <>
            <button type="button" className="qpq-retour" onClick={() => setPoste(null)}>← Retour à la liste</button>
            <div className="qpq-rep" aria-live="polite">
              <p className="qpq-rep-l">{poste.l}</p>
              <span className="qpq-badge" style={{ background: VERDICT[poste.qui].fond, borderColor: VERDICT[poste.qui].bord, color: VERDICT[poste.qui].couleur }}>
                {poste.qui === 'depend' ? 'Ça dépend' : `À la charge du ${VERDICT[poste.qui].texte.toLowerCase()}`}
              </span>
              <p className="qpq-rep-d">{poste.d}</p>
            </div>
          </>
        )}

        <p className="qpq-note">
          Outil d&apos;information, pas un avis juridique. La vétusté se déduit toujours de ce qui est réclamé au
          locataire, et un juge apprécie au cas par cas. En cas de litige, rapprochez-vous de la commission
          départementale de conciliation de Seine-Maritime ou d&apos;un professionnel du droit.
        </p>
      </div>
    </>
  )
}
