'use client'

import { useMemo, useState } from 'react'

type Qui = 'oui' | 'non' | 'partiel'
type Poste = { l: string; cat: string; qui: Qui; d: string }

const VERDICT: Record<Qui, { texte: string; fond: string; bord: string; couleur: string }> = {
  oui: { texte: 'Récupérable', fond: 'rgba(184,151,90,0.14)', bord: 'var(--gold)', couleur: 'var(--gold-deep)' },
  non: { texte: 'Non récupérable', fond: 'rgba(26,26,24,0.06)', bord: 'rgba(26,26,24,0.35)', couleur: 'var(--ink)' },
  partiel: { texte: 'En partie', fond: 'transparent', bord: 'rgba(26,26,24,0.22)', couleur: 'var(--ink-soft)' },
}

/**
 * Charges récupérables sur le locataire — décret n°87-713 du 26 août 1987.
 *
 * La liste du décret est LIMITATIVE : ce qui n'y figure pas ne se récupère pas.
 * D'où la règle de lecture retenue ici : l'entretien et la consommation se
 * récupèrent, le remplacement d'un équipement et les gros travaux non.
 */
const POSTES: Poste[] = [
  // Ascenseur
  { l: 'Électricité de l’ascenseur', cat: 'Ascenseur', qui: 'oui', d: 'La consommation électrique liée au fonctionnement figure dans la liste du décret.' },
  { l: 'Contrat d’entretien de l’ascenseur', cat: 'Ascenseur', qui: 'oui', d: 'Maintenance périodique, nettoyage, examen des câbles et petites réparations de la cabine et des paliers.' },
  { l: 'Remplacement de la cabine ou de la machinerie', cat: 'Ascenseur', qui: 'non', d: 'Le remplacement d’un équipement relève de l’investissement du propriétaire, jamais des charges.' },
  { l: 'Mise aux normes de l’ascenseur', cat: 'Ascenseur', qui: 'non', d: 'Travaux d’amélioration ou de conformité : à la charge exclusive du bailleur.' },

  // Eau & chauffage collectif
  { l: 'Eau froide et chaude des occupants', cat: 'Eau & chauffage', qui: 'oui', d: 'La consommation d’eau de l’ensemble des occupants est récupérable, y compris celle des parties communes.' },
  { l: 'Combustible du chauffage collectif', cat: 'Eau & chauffage', qui: 'oui', d: 'L’énergie nécessaire au fonctionnement de l’installation collective est récupérable.' },
  { l: 'Entretien annuel de la chaudière collective', cat: 'Eau & chauffage', qui: 'oui', d: 'L’entretien courant et les menues réparations de l’installation sont récupérables.' },
  { l: 'Réparation d’une fuite sur joint', cat: 'Eau & chauffage', qui: 'oui', d: 'Le décret vise expressément la réparation des fuites sur joints.' },
  { l: 'Remplacement de la chaudière collective', cat: 'Eau & chauffage', qui: 'non', d: 'Remplacer un équipement en fin de vie incombe au propriétaire.' },
  { l: 'Remplacement d’une colonne montante', cat: 'Eau & chauffage', qui: 'non', d: 'Gros travaux sur le réseau : hors liste, donc non récupérable.' },

  // Parties communes
  { l: 'Électricité des parties communes', cat: 'Parties communes', qui: 'oui', d: 'Éclairage des circulations, halls et caves : récupérable.' },
  { l: 'Nettoyage et produits d’entretien', cat: 'Parties communes', qui: 'oui', d: 'Le nettoyage courant des communs et les produits employés sont récupérables.' },
  { l: 'Entretien des minuteries et de l’interphone', cat: 'Parties communes', qui: 'oui', d: 'Maintenance des équipements des parties communes : récupérable.' },
  { l: 'Remplacement de l’interphone', cat: 'Parties communes', qui: 'non', d: 'Remplacement d’équipement : à la charge du bailleur.' },
  { l: 'Remise en peinture de la cage d’escalier', cat: 'Parties communes', qui: 'non', d: 'Travaux d’embellissement ou de rénovation : hors liste limitative.' },
  { l: 'Ravalement de façade', cat: 'Parties communes', qui: 'non', d: 'Gros œuvre : jamais récupérable sur le locataire.' },

  // Espaces extérieurs
  { l: 'Entretien des espaces verts', cat: 'Extérieurs', qui: 'oui', d: 'Tonte, taille, arrosage des espaces verts communs : récupérable.' },
  { l: 'Entretien des voies et des parkings', cat: 'Extérieurs', qui: 'oui', d: 'Nettoyage et entretien courant des voies, aires de stationnement et équipements de jeux.' },
  { l: 'Réfection complète de la voirie', cat: 'Extérieurs', qui: 'non', d: 'Réfection lourde : investissement du propriétaire.' },

  // Taxes & redevances
  { l: 'Taxe d’enlèvement des ordures ménagères', cat: 'Taxes', qui: 'oui', d: 'Expressément récupérable, au même titre que la taxe de balayage.' },
  { l: 'Redevance d’assainissement', cat: 'Taxes', qui: 'oui', d: 'Récupérable sur le locataire.' },
  { l: 'Taxe foncière', cat: 'Taxes', qui: 'non', d: 'Impôt du propriétaire : jamais récupérable, contrairement à une idée tenace.' },
  { l: 'Assurance de l’immeuble', cat: 'Taxes', qui: 'non', d: 'La prime d’assurance de l’immeuble reste à la charge du bailleur.' },

  // Gardiennage
  { l: 'Salaire du gardien ou concierge', cat: 'Gardiennage', qui: 'partiel', d: 'Récupérable à 75 % s’il assure à la fois l’entretien des parties communes et l’élimination des déchets ; à 40 % s’il n’assure qu’une seule de ces deux tâches. Aucune récupération s’il n’en assure aucune.' },
  { l: 'Logement de fonction du gardien', cat: 'Gardiennage', qui: 'non', d: 'La mise à disposition du logement ne se récupère pas.' },

  // Équipements du logement
  { l: 'Entretien de la VMC', cat: 'Équipements', qui: 'oui', d: 'Nettoyage des bouches et entretien courant de la ventilation : récupérable.' },
  { l: 'Remplacement du moteur de VMC', cat: 'Équipements', qui: 'non', d: 'Remplacement d’équipement : à la charge du bailleur.' },
  { l: 'Ramonage des conduits', cat: 'Équipements', qui: 'oui', d: 'Le ramonage figure dans la liste des charges récupérables.' },
  { l: 'Remplacement du chauffe-eau', cat: 'Équipements', qui: 'non', d: 'Équipement en fin de vie : propriétaire.' },

  // Gestion
  { l: 'Honoraires du syndic', cat: 'Gestion', qui: 'non', d: 'Les frais de gestion et honoraires du syndic ne sont pas récupérables.' },
  { l: 'Frais de gestion locative', cat: 'Gestion', qui: 'non', d: 'La rémunération du gestionnaire reste à la charge du bailleur.' },
]

const CATS = ['Tout', ...Array.from(new Set(POSTES.map((p) => p.cat)))]

export default function ChargesRecuperables() {
  const [cat, setCat] = useState('Tout')
  const liste = useMemo(() => (cat === 'Tout' ? POSTES : POSTES.filter((p) => p.cat === cat)), [cat])

  return (
    <>
      <style>{`
        .chr { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .chr : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0), ramenant
           tous les textes de l'outil à 16px. */
        .chr .chr-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .chr .chr-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 20px; }
        .chr-cats { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 8px; }
        .chr-cat { font-family: 'Montserrat', sans-serif; font-size: 11.5px; font-weight: 600; letter-spacing: 0.04em; padding: 7px 14px; border-radius: 40px; border: 1px solid rgba(184,151,90,0.45); background: transparent; color: var(--ink-soft); cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .chr-cat:hover { border-color: var(--gold); color: var(--gold-deep); }
        .chr-cat[aria-pressed="true"] { background: var(--gold); border-color: var(--gold); color: var(--ink); }
        .chr-cat:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .chr .chr-nb { font-size: 12.5px; color: #8a857a; margin: 14px 0 4px; }
        /* Surcharge des puces de .guide-prose */
        .chr-liste { list-style: none; margin: 0; padding: 0; max-height: 520px; overflow-y: auto; }
        .chr-liste li { display: block; padding: 15px 0; border-top: 1px solid rgba(26,26,24,0.1); }
        .chr-liste li::before { display: none; }
        .chr-row { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; }
        .chr-l { font-size: 15px; font-weight: 600; color: var(--ink); }
        .chr-badge { flex: none; font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 11px; border-radius: 40px; border: 1px solid; }
        .chr .chr-d { font-size: 13.5px; line-height: 1.65; color: var(--ink-soft); margin: 7px 0 0; }
        .chr .chr-note { font-size: 12.5px; line-height: 1.65; color: #8a857a; margin: 20px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
      `}</style>

      <div className="chr" data-nosnippet>
        <p className="chr-t">Récupérable ou pas&nbsp;?</p>
        <p className="chr-s">
          Filtrez par catégorie. La règle de lecture est simple&nbsp;: l’entretien et la
          consommation se récupèrent, le remplacement d’un équipement et les gros travaux non.
        </p>

        <div className="chr-cats">
          {CATS.map((c) => (
            <button key={c} type="button" className="chr-cat" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <p className="chr-nb" aria-live="polite">{liste.length} poste{liste.length > 1 ? 's' : ''}</p>

        <ul className="chr-liste">
          {liste.map((p) => {
            const v = VERDICT[p.qui]
            return (
              <li key={p.l}>
                <div className="chr-row">
                  <span className="chr-l">{p.l}</span>
                  <span className="chr-badge" style={{ background: v.fond, borderColor: v.bord, color: v.couleur }}>{v.texte}</span>
                </div>
                <p className="chr-d">{p.d}</p>
              </li>
            )
          })}
        </ul>

        <p className="chr-note">
          Outil d’information, pas un avis juridique. La liste du décret du 26 août 1987 est
          <strong> limitative</strong>&nbsp;: une dépense qui n’y figure pas ne peut pas être
          refacturée au locataire, même si elle paraît légitime. En cas de doute sur un poste précis,
          rapprochez-vous d’un professionnel du droit ou de la commission départementale de
          conciliation.
        </p>
      </div>
    </>
  )
}
