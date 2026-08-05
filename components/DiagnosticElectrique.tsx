'use client'

import { useMemo, useState } from 'react'

type Poids = 'danger' | 'info'

type Point = {
  id: string
  l: string
  poids: Poids
  quoi: string
  action: string
}

/**
 * Lire un état de l'installation intérieure d'électricité.
 *
 * Le diagnostic n'impose aucun travaux : il constate. Ce qui oblige, c'est
 * l'obligation de décence — un logement ne doit présenter aucun risque manifeste
 * pour la sécurité de ses occupants, et son réseau électrique doit permettre
 * l'éclairage de toutes les pièces et le fonctionnement des appareils courants
 * (décret du 30 janvier 2002, articles 2 et 3).
 *
 * D'où la distinction retenue ici : les six points de sécurité du diagnostic
 * touchent à la sécurité et rendent donc le logement non décent quand ils sont
 * en défaut ; les informations complémentaires, non.
 */
const POINTS: Point[] = [
  {
    id: 'agcp',
    poids: 'danger',
    l: 'Pas d’appareil général de commande et de protection, ou il est inaccessible',
    quoi: 'C’est l’organe qui permet de couper toute l’installation en cas d’urgence. Inaccessible, il ne sert à rien le jour où il faut agir vite.',
    action: 'Pose ou déplacement du disjoncteur général à un endroit atteignable sans outil.',
  },
  {
    id: 'differentiel',
    poids: 'danger',
    l: 'Pas de dispositif différentiel à haute sensibilité, ou il est inadapté',
    quoi: 'Le différentiel 30 mA est ce qui coupe le courant avant qu’une fuite ne devienne une électrocution. C’est le point le plus fréquemment en défaut sur le parc ancien.',
    action: 'Ajout des interrupteurs différentiels au tableau, avec répartition des circuits.',
  },
  {
    id: 'terre',
    poids: 'danger',
    l: 'Pas de prise de terre, ou installation de mise à la terre défaillante',
    quoi: 'Sans terre, le différentiel lui-même perd une grande part de son efficacité. Les deux vont ensemble.',
    action: 'Création de la prise de terre et raccordement des circuits, en priorité les pièces d’eau.',
  },
  {
    id: 'surintensite',
    poids: 'danger',
    l: 'Protection contre les surintensités absente ou inadaptée à la section des câbles',
    quoi: 'Un fusible ou un disjoncteur trop généreux laisse le câble chauffer au-delà de ce qu’il supporte. C’est un risque d’incendie, pas de panne.',
    action: 'Reprise du tableau : calibres ajustés à la section réelle des conducteurs.',
  },
  {
    id: 'salledeau',
    poids: 'danger',
    l: 'Liaison équipotentielle absente, ou règles non respectées dans la salle d’eau',
    quoi: 'Dans une pièce d’eau, les volumes de sécurité déterminent ce qui peut être installé et à quelle distance. C’est l’endroit où une anomalie devient dangereuse le plus vite.',
    action: 'Pose de la liaison équipotentielle, déplacement des appareils hors volumes, protection dédiée.',
  },
  {
    id: 'vetuste',
    poids: 'danger',
    l: 'Matériels vétustes, inadaptés, ou risque de contact direct avec des parties sous tension',
    quoi: 'Fils nus, prises cassées, boîtes non fermées, ancien matériel porcelaine : tout ce qui permet de toucher une partie sous tension.',
    action: 'Remplacement des appareillages concernés et fermeture des boîtes de connexion.',
  },
  {
    id: 'prises',
    poids: 'info',
    l: 'Des socles de prise ne comportent pas de broche de terre',
    quoi: 'Signalé au titre des informations complémentaires. Ce n’est pas un des six points de sécurité, mais c’est souvent le symptôme d’un réseau ancien non repris.',
    action: 'À traiter lors d’une reprise de circuits, rarement en urgence isolée.',
  },
  {
    id: 'usage',
    poids: 'info',
    l: 'Des matériels sont inadaptés à l’usage de la pièce',
    quoi: 'Également une information complémentaire. Le diagnostic le note sans le classer parmi les anomalies de sécurité.',
    action: 'À arbitrer selon la pièce et l’usage réel, sans caractère d’urgence.',
  },
]

export default function DiagnosticElectrique() {
  const [coches, setCoches] = useState<string[]>([])

  const bascule = (id: string) =>
    setCoches((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  const { dangers, infos, aucun } = useMemo(() => {
    const sel = POINTS.filter((p) => coches.includes(p.id))
    return {
      dangers: sel.filter((p) => p.poids === 'danger'),
      infos: sel.filter((p) => p.poids === 'info'),
      aucun: sel.length === 0,
    }
  }, [coches])

  return (
    <>
      <style>{`
        .elec { background: #fff; border: 1px solid rgba(184,151,90,0.35); border-radius: 2px; padding: 28px; margin: 32px 0; }
        /* Règles visant un <p> préfixées par .elec : dans un guide, « .guide-prose p »
           (spécificité 0,1,1) écraserait sinon ces classes simples (0,1,0). */
        .elec .elec-t { font-family: 'Bodoni Moda', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
        .elec .elec-s { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 22px; }
        .elec .elec-cat { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin: 20px 0 10px; }
        /* Surcharge des puces de .guide-prose */
        .elec-liste { list-style: none; margin: 0; padding: 0; }
        .elec-liste li { display: block; padding: 0; border-top: 0; }
        .elec-liste li::before { display: none; }
        .elec-item { width: 100%; display: flex; align-items: flex-start; gap: 12px; text-align: left; padding: 10px 12px; margin-bottom: 4px; background: transparent; border: 1px solid transparent; border-radius: 2px; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 13.5px; line-height: 1.55; color: var(--ink-soft); transition: background .2s, border-color .2s, color .2s; }
        .elec-item:hover { border-color: rgba(184,151,90,0.4); color: var(--ink); }
        .elec-item[aria-pressed="true"] { background: rgba(184,151,90,0.10); border-color: var(--gold); color: var(--ink); }
        .elec-item:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .elec-case { flex: none; width: 16px; height: 16px; margin-top: 2px; border: 1.5px solid rgba(26,26,24,0.3); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--ink); }
        .elec-item[aria-pressed="true"] .elec-case { background: var(--gold); border-color: var(--gold); }
        .elec-rep { border-top: 1px solid rgba(26,26,24,0.1); padding-top: 24px; margin-top: 24px; }
        .elec-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 16px; border-radius: 40px; border: 1px solid; margin-bottom: 16px; }
        .elec .elec-exp { font-size: 14.5px; line-height: 1.75; color: var(--ink-soft); margin: 0; }
        .elec-bloc { margin-top: 22px; }
        .elec .elec-bloc-t { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 14px; }
        .elec-detail { list-style: none; margin: 0; padding: 0; }
        .elec-detail li { display: block; padding: 14px 0; border-top: 1px solid rgba(26,26,24,0.1); }
        .elec-detail li::before { display: none; }
        .elec .elec-quoi { font-size: 14px; font-weight: 600; color: var(--ink); margin: 0 0 6px; }
        .elec .elec-d { font-size: 13.5px; line-height: 1.65; color: var(--ink-soft); margin: 0; }
        .elec .elec-a { font-size: 13.5px; line-height: 1.65; color: var(--ink); margin: 8px 0 0; }
        .elec .elec-a strong { color: var(--gold-deep); }
        .elec .elec-note { font-size: 12.5px; line-height: 1.65; color: var(--ink-faint); margin: 24px 0 0; padding-top: 16px; border-top: 1px solid rgba(26,26,24,0.1); }
      `}</style>

      <div className="elec" data-nosnippet>
        <p className="elec-t">Votre rapport signale quoi&nbsp;?</p>
        <p className="elec-s">
          Cochez ce que votre diagnostic mentionne. L’outil sépare ce qui touche à la sécurité — et
          rend donc le logement non décent — de ce qui n’est qu’une information complémentaire.
        </p>

        <p className="elec-cat">Les six points de sécurité</p>
        <ul className="elec-liste">
          {POINTS.filter((p) => p.poids === 'danger').map((p) => (
            <li key={p.id}>
              <button type="button" className="elec-item" aria-pressed={coches.includes(p.id)} onClick={() => bascule(p.id)}>
                <span className="elec-case" aria-hidden="true">{coches.includes(p.id) ? '✕' : ''}</span>
                <span>{p.l}</span>
              </button>
            </li>
          ))}
        </ul>

        <p className="elec-cat">Informations complémentaires</p>
        <ul className="elec-liste">
          {POINTS.filter((p) => p.poids === 'info').map((p) => (
            <li key={p.id}>
              <button type="button" className="elec-item" aria-pressed={coches.includes(p.id)} onClick={() => bascule(p.id)}>
                <span className="elec-case" aria-hidden="true">{coches.includes(p.id) ? '✕' : ''}</span>
                <span>{p.l}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="elec-rep" aria-live="polite">
          <span
            className="elec-badge"
            style={
              dangers.length > 0
                ? { background: 'rgba(26,26,24,0.06)', borderColor: 'rgba(26,26,24,0.35)', color: 'var(--ink)' }
                : { background: 'rgba(184,151,90,0.14)', borderColor: 'var(--gold)', color: 'var(--gold-deep)' }
            }
          >
            {dangers.length > 0 ? 'Travaux nécessaires' : aucun ? 'Rien de coché' : 'Pas de point de sécurité en défaut'}
          </span>

          <p className="elec-exp">
            {dangers.length > 0
              ? `Le diagnostic lui-même ne vous oblige à rien : il constate. Mais ${dangers.length === 1 ? 'ce point touche' : 'ces points touchent'} à la sécurité des occupants, ce qui rend le logement non décent — et là, l’obligation existe bel et bien.`
              : aucun
                ? 'Cochez les points signalés par votre rapport pour savoir lesquels imposent réellement des travaux.'
                : 'Aucun des six points de sécurité n’est en défaut. Les informations complémentaires ne rendent pas le logement indécent : elles se traitent au rythme de vos rénovations.'}
          </p>

          {dangers.length > 0 && (
            <div className="elec-bloc">
              <p className="elec-bloc-t">À traiter avant de relouer</p>
              <ul className="elec-detail">
                {dangers.map((p) => (
                  <li key={p.id}>
                    <p className="elec-quoi">{p.l}</p>
                    <p className="elec-d">{p.quoi}</p>
                    <p className="elec-a"><strong>Travaux&nbsp;:</strong> {p.action}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {infos.length > 0 && (
            <div className="elec-bloc">
              <p className="elec-bloc-t">Signalé, mais non bloquant</p>
              <ul className="elec-detail">
                {infos.map((p) => (
                  <li key={p.id}>
                    <p className="elec-quoi">{p.l}</p>
                    <p className="elec-d">{p.quoi}</p>
                    <p className="elec-a"><strong>Notre avis&nbsp;:</strong> {p.action}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="elec-note">
          Outil de lecture, pas un diagnostic. Nous ne réalisons pas les états de l’installation
          électrique — ils relèvent d’un diagnostiqueur certifié — mais nous exécutons les travaux
          qu’ils révèlent. La qualification d’un défaut en risque manifeste pour la sécurité relève
          in fine du juge, saisi par le locataire.
        </p>
      </div>
    </>
  )
}
