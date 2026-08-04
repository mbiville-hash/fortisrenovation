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

/**
 * Href de la page maintenance d'une commune, à partir de son nom affiché.
 * Renvoie null quand aucune page n'existe : l'appelant affiche alors du texte
 * simple plutôt qu'un lien mort.
 */
export const hrefCommune = (nom: string): string | null => {
  if (nom === ROUEN.nom) return ROUEN.href
  const c = COMMUNES.find((x) => x.nom === nom)
  return c ? `/maintenance-immobiliere-${c.slug}` : null
}

/* ============================================================
   PARC PAR COMMUNE — angle plomberie
   Les pages /plombier-[commune] couvrent les plateaux nord et est,
   là où les pages maintenance couvrent la rive gauche. L'angle diffère :
   ce qui compte en plomberie, c'est l'époque des réseaux et la part de
   maisons individuelles (réseaux propres) face au collectif (colonnes
   montantes communes, donc sinistres qui touchent plusieurs lots).
   Chiffres INSEE 2023, relevés le 4 août 2026.
   ============================================================ */

export type CommunePlomberie = {
  slug: string
  nom: string
  a: string
  codeInsee: string
  logements: number
  locatairesPct: number
  maisonsPct: number
  vacantsPct: number
  periodes: Periode[]
  /** Ce que ce parc implique pour les réseaux d'eau. */
  reseaux: string
  /** Deux ou trois constats de terrain propres à ce parc. */
  constats: string[]
}

export const PARC_PLOMBERIE: CommunePlomberie[] = [
  {
    slug: 'bois-guillaume', nom: 'Bois-Guillaume', a: 'à Bois-Guillaume', codeInsee: '76108',
    logements: 7002, locatairesPct: 33.3, maisonsPct: 55.1, vacantsPct: 5.0,
    periodes: P(5.5, 6.1, 19.9, 31.3, 22.1, 15.0),
    reseaux: 'Plus de deux logements sur trois datent d’après 1970 : les alimentations y sont en cuivre ou en PER, les évacuations en PVC. Le plomb est rare, et les pathologies relèvent davantage de l’usure des équipements que des canalisations elles-mêmes.',
    constats: [
      'Chauffe-eau et ballons posés à la construction du parc 1971-1990, aujourd’hui en fin de vie : c’est le premier motif d’appel sur ce secteur.',
      'Une majorité de maisons, donc des réseaux propres à chaque logement — une fuite reste circonscrite, mais les réseaux enterrés de jardin sont plus difficiles à localiser.',
      'Les 44 % d’appartements sont surtout de petites copropriétés récentes, où la coordination avec le syndic reste simple.',
    ],
  },
  {
    slug: 'mont-saint-aignan', nom: 'Mont-Saint-Aignan', a: 'à Mont-Saint-Aignan', codeInsee: '76451',
    logements: 11421, locatairesPct: 49.8, maisonsPct: 29.4, vacantsPct: 6.5,
    periodes: P(6.3, 5.4, 27.9, 32.1, 14.2, 14.2),
    reseaux: 'Deux tiers d’appartements et un logement sur deux loué : c’est le profil d’une commune universitaire. Les collectifs des années 1960 à 1980 fonctionnent avec des colonnes montantes communes — une fuite en pied de colonne touche plusieurs lots à la fois.',
    constats: [
      'Beaucoup de studios et de petits logements à forte rotation : sanitaires compacts, robinetterie très sollicitée, joints à reprendre plus souvent qu’ailleurs.',
      'Les remises en état se concentrent sur juillet et août, entre deux années universitaires — un calendrier qu’il vaut mieux anticiper.',
      'Sur les immeubles d’avant 1980, les dégâts des eaux se propagent verticalement : l’intervention doit être rapide pour limiter le nombre de lots touchés.',
    ],
  },
  {
    slug: 'bihorel', nom: 'Bihorel', a: 'à Bihorel', codeInsee: '76095',
    logements: 4447, locatairesPct: 44.6, maisonsPct: 42.4, vacantsPct: 7.5,
    periodes: P(9.2, 7.9, 37.3, 33.1, 4.8, 7.6),
    reseaux: 'Sept logements sur dix ont été construits entre 1946 et 1990, et 9,2 % du parc est antérieur à 1919. C’est le secteur du plateau nord où les réseaux sont les plus anciens : acier galvanisé qui se perce aux coudes, évacuations fonte qui se fissurent aux emboîtements.',
    constats: [
      'Sur le bâti d’avant 1949, des alimentations en plomb subsistent parfois : leur remplacement se traite lors d’une reprise de salle d’eau plutôt qu’en urgence.',
      'Les colonnes montantes des collectifs d’après-guerre arrivent en fin de vie ; une reprise se prépare avec le syndic, elle ne s’improvise pas sur une fuite.',
      'Avec 7,5 % de vacance et 27 % de logement social, les remises en état entre deux baux sont fréquentes sur ce secteur.',
    ],
  },
  {
    slug: 'isneauville', nom: 'Isneauville', a: 'à Isneauville', codeInsee: '76377',
    logements: 1600, locatairesPct: 24.1, maisonsPct: 82.3, vacantsPct: 4.5,
    periodes: P(6.1, 2.5, 4.9, 32.7, 12.8, 41.0),
    reseaux: 'Le parc le plus récent de notre zone : 41 % des logements datent d’après 2006, et plus de huit sur dix sont des maisons. Les réseaux sont en PER ou en multicouche, les évacuations en PVC — très peu de pathologies liées à la vétusté.',
    constats: [
      'Les demandes portent surtout sur l’aménagement : ajout d’un point d’eau, extension, salle d’eau supplémentaire, raccordement d’équipements.',
      'Sur les maisons des années 1971-1990, ce sont les chauffe-eau et la robinetterie d’origine qui arrivent en fin de course.',
      'Peu de locatif (24 % de locataires) : la demande vient majoritairement de propriétaires occupants.',
    ],
  },
  {
    slug: 'bonsecours', nom: 'Bonsecours', a: 'à Bonsecours', codeInsee: '76103',
    logements: 3401, locatairesPct: 37.2, maisonsPct: 48.5, vacantsPct: 4.5,
    periodes: P(4.4, 3.9, 24.5, 44.9, 15.0, 7.2),
    reseaux: 'Près de la moitié du parc a été bâtie entre 1971 et 1990 : alimentations cuivre, évacuations PVC. Les canalisations tiennent, mais les équipements posés à la construction arrivent tous à échéance en même temps.',
    constats: [
      'Chauffe-eau, groupes de sécurité et robinetterie d’origine : sur un parc aussi homogène, les pannes arrivent groupées.',
      'Un équilibre entre maisons et appartements, donc deux logiques d’intervention selon qu’on traite un réseau privatif ou une colonne commune.',
      'Le relief du plateau est génère des pressions variables selon l’altitude du logement — un point à vérifier avant de conclure à un défaut d’équipement.',
    ],
  },
  {
    slug: 'le-mesnil-esnard', nom: 'Le Mesnil-Esnard', a: 'au Mesnil-Esnard', codeInsee: '76429',
    logements: 4064, locatairesPct: 40.8, maisonsPct: 62.3, vacantsPct: 4.3,
    periodes: P(4.4, 3.1, 11.8, 35.2, 15.8, 29.7),
    reseaux: 'Un parc en deux vagues : 35 % construit entre 1971 et 1990, et près de 30 % après 2006. Les réseaux vont du cuivre au multicouche selon l’âge du logement — le diagnostic commence donc par identifier la génération du bâti.',
    constats: [
      'Sur la vague 1971-1990, les équipements sanitaires d’origine sont à remplacer ; sur la vague récente, les demandes sont surtout des ajouts et des reprises de finition.',
      'Une majorité de maisons : réseaux privatifs, fuites circonscrites, mais canalisations enterrées à localiser.',
      'Seulement 11,8 % du parc date de 1946-1970 : très peu d’acier galvanisé et de fonte, contrairement à Bihorel ou Sotteville.',
    ],
  },
  {
    slug: 'franqueville-saint-pierre', nom: 'Franqueville-Saint-Pierre', a: 'à Franqueville-Saint-Pierre', codeInsee: '76475',
    logements: 2777, locatairesPct: 28.1, maisonsPct: 83.0, vacantsPct: 4.6,
    periodes: P(4.4, 2.2, 13.2, 35.2, 20.7, 24.2),
    reseaux: 'Commune très pavillonnaire — 83 % de maisons — et récente : 45 % du parc date d’après 1991. Réseaux cuivre, PER et multicouche, évacuations PVC, avec très peu de matériaux anciens.',
    constats: [
      'Les interventions concernent surtout des maisons individuelles : réseau propre au logement, compteur individuel, pas de colonne commune à coordonner.',
      'Sur les pavillons des années 1970-1980, chauffe-eau et robinetterie sont le poste récurrent.',
      'Faible part de locatif (28 %) : peu de remises en état entre deux baux, davantage d’entretien et d’amélioration.',
    ],
  },
  {
    slug: 'sotteville-les-rouen', nom: 'Sotteville-lès-Rouen', a: 'à Sotteville-lès-Rouen', codeInsee: '76681',
    logements: 15193, locatairesPct: 49.4, maisonsPct: 49.3, vacantsPct: 6.1,
    periodes: P(4.4, 7.1, 39.5, 22.9, 8.5, 7.6),
    reseaux: 'Près de quatre logements sur dix datent de la reconstruction d’après-guerre, la proportion la plus forte de notre zone. Sur ce millésime non repris, les alimentations en acier galvanisé se percent aux coudes et les évacuations en fonte se fissurent aux emboîtements.',
    constats: [
      'Une fuite en pied de colonne dans un immeuble d’après-guerre touche souvent plusieurs lots : la rapidité d’intervention limite l’ampleur du sinistre.',
      'Un logement sur deux est loué : les remises en état entre deux baux sont un motif d’appel constant.',
      'Parc réparti à parts égales entre maisons et appartements — les deux logiques d’intervention coexistent dans la même commune.',
    ],
  },
]

export const getParcPlomberie = (slug: string) => PARC_PLOMBERIE.find((c) => c.slug === slug)
