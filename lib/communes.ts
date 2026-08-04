/**
 * Parc de logements des communes où nous intervenons.
 *
 * Chiffres : INSEE, dossier complet par commune, millésime 2023
 * (https://www.insee.fr/fr/statistiques/2011101?geo=COM-<code>).
 * Relevés le 4 août 2026. À revérifier à chaque nouveau millésime.
 *
 * La lecture technique (`pathologies`) décrit ce que nous rencontrons
 * habituellement sur un parc de cette époque — ce sont des constats de terrain,
 * pas des diagnostics : seul un passage sur place engage un chiffrage.
 */

export type Periode = { label: string; pct: number }

export type Commune = {
  slug: string
  nom: string
  /** Forme utilisée dans les phrases : « à Sotteville-lès-Rouen », « au Petit-Quevilly ». */
  a: string
  codeInsee: string
  logements: number
  locatairesPct: number
  hlmPct: number
  vacantsPct: number
  periodes: Periode[]
  /** Ce qui caractérise la commune et son parc, en propre. */
  contexte: string
  /** Ce que ce parc implique concrètement, métier par métier. */
  pathologies: { t: string; d: string }[]
  /** Ce que ça change pour quelqu'un qui gère des lots ici. */
  gestionnaire: string
  /** Communes voisines citées en maillage. */
  voisines: string[]
}

const P = (avant1919: number, e1945: number, e1970: number, e1990: number, e2005: number, e2020: number): Periode[] => [
  { label: 'Avant 1919', pct: avant1919 },
  { label: '1919-1945', pct: e1945 },
  { label: '1946-1970', pct: e1970 },
  { label: '1971-1990', pct: e1990 },
  { label: '1991-2005', pct: e2005 },
  { label: '2006-2020', pct: e2020 },
]

export const COMMUNES: Commune[] = [
  {
    slug: 'sotteville-les-rouen',
    nom: 'Sotteville-lès-Rouen',
    a: 'à Sotteville-lès-Rouen',
    codeInsee: '76681',
    logements: 15193,
    locatairesPct: 49.4,
    hlmPct: 31.0,
    vacantsPct: 6.1,
    periodes: P(4.4, 7.1, 39.5, 22.9, 8.5, 7.6),
    contexte:
      'Sotteville-lès-Rouen porte encore la marque de sa reconstruction : près de quatre logements sur dix ont été bâtis entre 1946 et 1970, la proportion la plus forte de la rive gauche. C’est un parc homogène, majoritairement collectif, avec une part de logement social d’environ un tiers et un équilibre presque parfait entre propriétaires et locataires.',
    pathologies: [
      { t: 'Colonnes et alimentations d’origine', d: 'Sur un immeuble d’après-guerre non repris, les alimentations en acier galvanisé se percent aux coudes et les évacuations en fonte se fissurent aux emboîtements. Une fuite en pied de colonne touche souvent plusieurs lots à la fois.' },
      { t: 'Électricité sous-dimensionnée', d: 'Tableaux à fusibles, absence de terre dans les pièces d’eau, circuits chargés : sur ce millésime, la remise à niveau est fréquemment le premier poste d’un logement remis en location.' },
      { t: 'Ventilation absente', d: 'La ventilation mécanique ne s’est généralisée qu’à partir des années 1970. Sur ce parc, l’humidité en salle de bain et en cuisine est un motif de litige récurrent à l’état des lieux de sortie.' },
      { t: 'Sols collés à reprendre', d: 'Dalles et lés posés sur colle des décennies 1950 à 1980. Leur dépose demande une vérification préalable, la question de l’amiante se posant sur tout bâti antérieur à 1997.' },
    ],
    gestionnaire:
      'Avec un logement sur deux occupé par un locataire et un parc concentré sur une seule époque, les demandes se ressemblent d’un lot à l’autre. C’est une bonne nouvelle : les remises en état y sont prévisibles, et un chiffrage type se cale vite.',
    voisines: ['Le Petit-Quevilly', 'Le Grand-Quevilly', 'Saint-Étienne-du-Rouvray'],
  },
  {
    slug: 'saint-etienne-du-rouvray',
    nom: 'Saint-Étienne-du-Rouvray',
    a: 'à Saint-Étienne-du-Rouvray',
    codeInsee: '76575',
    logements: 13539,
    locatairesPct: 54.5,
    hlmPct: 34.3,
    vacantsPct: 6.1,
    periodes: P(4.1, 7.4, 35.5, 22.3, 11.5, 19.2),
    contexte:
      'Saint-Étienne-du-Rouvray a le parc le plus contrasté de la métropole : 35,5 % de logements d’après-guerre côtoient 19,2 % de constructions postérieures à 2006, fruit du renouvellement urbain. Plus d’un occupant sur deux est locataire, et le logement social représente environ un tiers du parc.',
    pathologies: [
      { t: 'Deux parcs, deux métiers', d: 'Sur les ensembles des années 1950-1970, ce sont les réseaux et l’électricité qui commandent. Sur les programmes récents, ce sont les finitions et l’usure d’usage entre deux locataires. Le même devis type ne fonctionne pas des deux côtés.' },
      { t: 'Tableaux et circuits d’époque', d: 'Sur le parc ancien, protections différentielles manquantes et sections insuffisantes sont la règle plutôt que l’exception.' },
      { t: 'Rotation locative rapide', d: 'Sur les logements récents, l’enjeu n’est pas la panne mais la vitesse : peinture, sols et petites reprises à enchaîner entre deux baux sans immobiliser le lot.' },
      { t: 'Reprises après infiltration', d: 'Les toitures-terrasses et façades des ensembles des années 1960-1970 génèrent des reprises d’enduits et de peinture récurrentes en étage supérieur.' },
    ],
    gestionnaire:
      'Gérer ici, c’est arbitrer entre deux logiques. Nous chiffrons les deux séparément plutôt que d’appliquer une grille unique — un logement de 2015 et un logement de 1962 n’appellent ni les mêmes postes ni les mêmes budgets.',
    voisines: ['Sotteville-lès-Rouen', 'Oissel', 'Le Grand-Quevilly'],
  },
  {
    slug: 'le-grand-quevilly',
    nom: 'Le Grand-Quevilly',
    a: 'au Grand-Quevilly',
    codeInsee: '76322',
    logements: 13470,
    locatairesPct: 75.1,
    hlmPct: 66.2,
    vacantsPct: 2.9,
    periodes: P(0.8, 5.0, 34.4, 40.7, 10.0, 9.0),
    contexte:
      'Le Grand-Quevilly est la commune la plus locative de la métropole : trois logements sur quatre sont loués, et les deux tiers relèvent du logement social. Le parc est né en deux vagues, 1946-1970 puis surtout 1971-1990. Point remarquable : seuls 2,9 % des logements sont vacants, le taux le plus bas de notre zone.',
    pathologies: [
      { t: 'Première génération de VMC', d: 'Les immeubles des années 1970-1980 ont été équipés des premières ventilations mécaniques. Quarante ans plus tard, moteurs fatigués et bouches encrassées entretiennent condensation et moisissures.' },
      { t: 'Électricité avec terre mais tableaux datés', d: 'Le parc 1971-1990 dispose généralement d’une prise de terre, mais les tableaux et les différentiels demandent une mise à niveau, notamment dans les pièces d’eau.' },
      { t: 'Sols souples en fin de vie', d: 'Lés collés posés à la construction, arrivés au bout de leur durée de vie théorique. Leur remplacement est un poste récurrent, et la vétusté y est presque toujours intégralement acquise.' },
      { t: 'Parties communes sollicitées', d: 'Halls et cages d’escalier de collectifs à forte densité : la remise en peinture y revient plus souvent que sur un parc pavillonnaire.' },
    ],
    gestionnaire:
      'Un taux de vacance de 2,9 % veut dire une chose : la demande est là, et chaque jour d’immobilisation est un jour de loyer perdu pour rien. C’est la commune où le délai de remise en état pèse le plus lourd dans l’équation.',
    voisines: ['Le Petit-Quevilly', 'Sotteville-lès-Rouen', 'Saint-Étienne-du-Rouvray'],
  },
  {
    slug: 'le-petit-quevilly',
    nom: 'Le Petit-Quevilly',
    a: 'au Petit-Quevilly',
    codeInsee: '76498',
    logements: 11727,
    locatairesPct: 60.1,
    hlmPct: 30.8,
    vacantsPct: 9.1,
    periodes: P(9.1, 13.2, 20.5, 26.2, 10.3, 20.8),
    contexte:
      'Le Petit-Quevilly a le parc le plus étalé dans le temps de la rive gauche : 22 % du bâti est antérieur à 1946, mais 20,8 % date d’après 2006. Six occupants sur dix sont locataires. Et le taux de vacance, à 9,1 %, est l’un des plus élevés de la métropole.',
    pathologies: [
      { t: 'Bâti d’avant-guerre à surveiller', d: 'Sur les 22 % de logements antérieurs à 1946, les peintures anciennes peuvent contenir du plomb : un constat de risque d’exposition au plomb est exigé pour tout bâti d’avant 1949 mis en location, et il conditionne la façon de préparer les supports.' },
      { t: 'Réseaux hétérogènes', d: 'Plomb, acier, cuivre et PER peuvent cohabiter dans le même immeuble au fil des reprises successives. Les raccords entre matériaux sont les points faibles à traiter.' },
      { t: 'Humidité en rez-de-chaussée', d: 'Sur le bâti ancien sans coupure de capillarité, les remontées se traduisent par des enduits qui cloquent en pied de mur. Repeindre sans traiter la cause ne tient pas une saison.' },
      { t: 'Logements récents en rotation', d: 'À l’autre bout du parc, les programmes d’après 2006 demandent surtout des remises en état rapides et légères entre deux baux.' },
    ],
    gestionnaire:
      'Avec 9,1 % de logements vides, relouer vite n’est pas un confort mais une nécessité. C’est aussi la commune où le diagnostic préalable compte le plus : un même immeuble peut mêler une aile de 1930 et une extension de 2010.',
    voisines: ['Le Grand-Quevilly', 'Sotteville-lès-Rouen', 'Rouen'],
  },
  {
    slug: 'deville-les-rouen',
    nom: 'Déville-lès-Rouen',
    a: 'à Déville-lès-Rouen',
    codeInsee: '76216',
    logements: 6141,
    locatairesPct: 62.4,
    hlmPct: 30.8,
    vacantsPct: 6.6,
    periodes: P(9.2, 7.3, 30.5, 30.8, 11.0, 11.3),
    contexte:
      'Déville-lès-Rouen est nettement plus collectif que ses voisins de la vallée du Cailly : près de 63 % du parc est constitué d’appartements, et 62,4 % des logements sont loués. Le bâti se répartit à parts égales entre l’après-guerre et les années 1971-1990, avec une frange ancienne de 9,2 % antérieure à 1919.',
    pathologies: [
      { t: 'Copropriétés de taille moyenne', d: 'Le tissu dominant est celui du petit collectif. Les interventions y touchent souvent autant les parties communes que les lots privatifs, et la coordination avec le syndic conditionne le planning.' },
      { t: 'Colonnes montantes vieillissantes', d: 'Sur les immeubles 1946-1970, les colonnes d’eau et les chutes d’évacuation arrivent en fin de vie. Une reprise se prépare, elle ne s’improvise pas en urgence.' },
      { t: 'Ventilation de première génération', d: 'Comme partout sur le parc 1971-1990, les VMC installées à la construction demandent aujourd’hui une remise en état complète.' },
      { t: 'Frange ancienne en fond de vallée', d: 'Les logements d’avant 1919 cumulent murs épais, absence d’isolation et sensibilité à l’humidité : la préparation des supports y prend plus de temps qu’ailleurs.' },
    ],
    gestionnaire:
      'La proportion d’appartements change la façon de travailler : accès, horaires, protection des communs et information des occupants pèsent autant que le chantier lui-même. Nous intervenons avec un seul interlocuteur, ce qui évite de multiplier les passages dans l’immeuble.',
    voisines: ['Maromme', 'Rouen', 'Mont-Saint-Aignan'],
  },
  {
    slug: 'maromme',
    nom: 'Maromme',
    a: 'à Maromme',
    codeInsee: '76410',
    logements: 6116,
    locatairesPct: 61.6,
    hlmPct: 43.0,
    vacantsPct: 8.0,
    periodes: P(4.8, 5.6, 32.0, 42.8, 3.8, 11.0),
    contexte:
      'Maromme concentre l’essentiel de son parc sur une période courte : 42,8 % des logements datent de 1971-1990, un pic très marqué, et 32 % de l’après-guerre. Six logements sur dix sont loués, et le logement social représente 43 % du parc — la deuxième proportion de notre zone après Le Grand-Quevilly.',
    pathologies: [
      { t: 'Un parc qui arrive au même âge', d: 'Quand 43 % des logements ont été construits sur vingt ans, les équipements atteignent leur fin de vie en même temps : VMC, sols souples et tableaux électriques arrivent groupés.' },
      { t: 'Salles d’eau d’origine', d: 'Sur ce millésime, faïences, receveurs et robinetteries d’origine sont souvent encore en place. La reprise complète d’une salle d’eau est un poste fréquent en remise en état.' },
      { t: 'Menuiseries et volets', d: 'Volets roulants de première génération, sangles cassées et tabliers fatigués : de la menue réparation à répétition, sauf à traiter le mécanisme.' },
      { t: 'Vacance à surveiller', d: 'Avec 8 % de logements vides, la vitesse de remise en état pèse directement sur le rendement du lot.' },
    ],
    gestionnaire:
      'L’homogénéité du parc est un atout pour qui gère plusieurs lots ici : les mêmes postes reviennent, les chiffrages se standardisent et les interventions se groupent. C’est typiquement le contexte où un interlocuteur unique fait gagner du temps.',
    voisines: ['Déville-lès-Rouen', 'Mont-Saint-Aignan', 'Rouen'],
  },
]

/** Rouen figure dans le tableau comparatif mais garde sa page pilier, sans page commune dédiée. */
export const ROUEN = {
  nom: 'Rouen',
  href: '/maintenance-immobiliere-rouen',
  logements: 77187,
  locatairesPct: 70.8,
  hlmPct: 19.3,
  vacantsPct: 9.7,
}

export const SOURCE_INSEE = {
  label: 'INSEE — Dossier complet par commune, millésime 2023 (logement)',
  url: 'https://www.insee.fr/fr/statistiques/2011101',
  releve: '4 août 2026',
}

export const getCommune = (slug: string) => COMMUNES.find((c) => c.slug === slug)
