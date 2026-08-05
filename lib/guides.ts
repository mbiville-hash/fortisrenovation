/**
 * Source unique des guides du site.
 *
 * Sert à la fois à l'index /guides et aux blocs « guides liés » posés sur les
 * pages pro, métier et commune. Un seul endroit à modifier quand un guide
 * change de titre — les ancres de liens internes restent cohérentes partout,
 * ce qui compte autant pour le référencement que pour le lecteur.
 */

export type Public = 'pro' | 'particulier'

export type Guide = {
  slug: string
  categorie: string
  titre: string
  /** Résumé long, pour l'index. */
  extrait: string
  /** Accroche courte, pour les blocs « à lire aussi ». */
  court: string
  date: string
  public: Public
}

export const GUIDES: Guide[] = [
  {
    slug: '/guides/diagnostic-electrique-location',
    categorie: 'Électricité',
    titre: 'Diagnostic électrique : ce qui oblige vraiment',
    extrait:
      'Le diagnostic constate, il n’impose aucun travaux — c’est la décence qui oblige. Les six points de sécurité, ce qui bloque la relocation, et ce qui peut attendre la rotation suivante.',
    court: 'Le rapport n’oblige à rien. La décence, si.',
    date: '5 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/logement-decent-est-il-louable',
    categorie: 'Décence',
    titre: 'Logement décent : votre bien est-il louable ?',
    extrait:
      'Sécurité, équipements, surface, énergie : les critères du décret de 2002 en une checklist. Un seul manquement suffit à bloquer la location, et le juge peut suspendre le loyer.',
    court: 'Un seul critère manquant, et le lot n’est plus louable.',
    date: '5 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/humidite-identifier-la-cause',
    categorie: 'Humidité',
    titre: 'Humidité : condensation, remontée ou infiltration ?',
    extrait:
      'Quatre causes, trois observations pour les distinguer, et un outil d’orientation. Plus l’ordre des opérations, parce que repeindre sans traiter la cause ne tient jamais une saison.',
    court: 'Trouver la cause avant de repeindre — sinon on repeint deux fois.',
    date: '5 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/degat-des-eaux-qui-paie',
    categorie: 'Dégât des eaux',
    titre: 'Dégât des eaux : qui déclare, qui paie, dans quel ordre',
    extrait:
      'Cinq jours ouvrés pour déclarer, un seul assureur qui pilote, et l’erreur qui coûte le plus cher : engager la réfection avant l’accord. Un outil pour trancher en deux questions.',
    court: 'Qui pilote, qui paie — et l’erreur qui coûte le plus cher.',
    date: '5 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/augmentation-de-loyer-rouen',
    categorie: 'Loyers',
    titre: 'Augmenter le loyer à Rouen : les trois moments possibles',
    extrait:
      'Rouen n’est pas en zone tendue : à la relocation, le loyer y est librement fixable. Révision annuelle, réévaluation au renouvellement, relocation — et l’étiquette énergétique qui bloque tout. Simulateur inclus.',
    court: 'À Rouen le loyer de relocation est libre — sauf en F ou G.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/qui-paie-quoi-bailleur-locataire',
    categorie: 'Réparations locatives',
    titre: 'Qui paie quoi entre bailleur et locataire ?',
    extrait:
      'La règle, les quatre exceptions qui protègent le locataire, et un outil pour trancher pièce par pièce : cliquez sur la pièce, puis sur ce qui est cassé.',
    court: 'Un outil pièce par pièce pour trancher, sources officielles à l’appui.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/charges-recuperables-locataire',
    categorie: 'Charges locatives',
    titre: 'Charges récupérables : ce que vous pouvez refacturer',
    extrait:
      'La liste du décret du 26 août 1987 est limitative : ce qui n’y figure pas ne se récupère pas. Un outil poste par poste, et les trois erreurs qui reviennent le plus.',
    court: 'Entretien oui, remplacement non — et l’outil pour trancher.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/grille-de-vetuste-location',
    categorie: 'Vétusté',
    titre: 'Grille de vétusté : comment la lire et l’appliquer',
    extrait:
      'Durée de vie théorique, abattement annuel, part résiduelle. Un exemple chiffré, et le piège du décret de 2016 que presque tout le monde rate.',
    court: 'Déduire l’usure du temps au lieu de la négocier, avec un exemple chiffré.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/permis-de-louer-rouen',
    categorie: 'Permis de louer',
    titre: 'Permis de louer à Rouen : secteurs, dossier et délais',
    extrait:
      'Six secteurs de Rouen imposent l’accord de la Ville avant toute nouvelle mise en location. Un outil pour savoir si vous êtes concerné, le contenu du dossier, le délai de 30 jours et les sanctions.',
    court: 'Six secteurs concernés — et l’amende monte à 5 000 €.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/facture-eau-fuite-loi-warsmann',
    categorie: 'Facture d’eau',
    titre: 'Fuite d’eau : faire plafonner sa facture (loi Warsmann)',
    extrait:
      'Au-delà du double de votre consommation habituelle, vous pouvez ne rien devoir. Les conditions, les exclusions, le délai d’un mois — et un simulateur pour chiffrer ce que ça représente.',
    court: 'Ce que vous pouvez ne pas payer, et comment l’obtenir.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/etat-des-lieux-de-sortie',
    categorie: 'État des lieux',
    titre: 'État des lieux de sortie : le réussir sans litige',
    extrait:
      'Ce qu’impose l’article 3-2 de la loi de 1989, la méthode pièce par pièce, et comment transformer un constat en devis défendable face au locataire.',
    court: 'Le cadre légal, la méthode, et les trois erreurs qui coûtent le plus.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/cout-vacance-locative',
    categorie: 'Vacance locative',
    titre: 'Ce que coûte vraiment un logement vide',
    extrait:
      'Le calcul à la journée, les vrais postes de délai entre deux locataires, et quatre leviers pour relouer plus tôt. Simulateur inclus.',
    court: 'Le calcul à la journée, et les leviers pour relouer plus tôt.',
    date: '4 août 2026',
    public: 'pro',
  },
  {
    slug: '/guides/prix-renovation-salle-de-bain',
    categorie: 'Prix & budget',
    titre: 'Combien coûte une rénovation de salle de bain à Rouen ?',
    extrait:
      'Des fourchettes claires, les postes de dépense et ce qui fait vraiment varier le prix de votre projet.',
    court: 'Fourchettes, postes de dépense et ce qui fait varier le prix.',
    date: '25 juin 2026',
    public: 'particulier',
  },
  {
    slug: '/guides/douche-italienne-etancheite',
    categorie: 'Douche italienne',
    titre: 'Douche à l’italienne : réussir l’étanchéité',
    extrait:
      'Le carrelage seul n’étanche pas. Ce qu’impose la norme (DTU 52.2) pour éviter le dégât des eaux.',
    court: 'Pourquoi le carrelage seul n’étanche pas, et ce qu’impose le DTU 52.2.',
    date: '25 juin 2026',
    public: 'particulier',
  },
  {
    slug: '/guides/duree-renovation-salle-de-bain',
    categorie: 'Méthode',
    titre: 'Combien de temps dure une rénovation de salle de bain ?',
    extrait:
      'Les étapes jour par jour, les temps de séchage et ce qui rallonge (ou raccourcit) un chantier.',
    court: 'Les étapes jour par jour et les temps de séchage incompressibles.',
    date: '25 juin 2026',
    public: 'particulier',
  },
  {
    slug: '/guides/salle-de-bain-senior-maprimeadapt-rouen',
    categorie: 'Salle de bain senior',
    titre: 'Salle de bain senior à Rouen : MaPrimeAdapt’ et les aides 2026',
    extrait:
      'Qui peut bénéficier de MaPrimeAdapt’, combien (50 ou 70 %, plafond 22 000 € HT), quels travaux et quelles démarches. Vérifié sur les sources officielles.',
    court: 'Conditions, montants et démarches de MaPrimeAdapt’.',
    date: '25 juin 2026',
    public: 'particulier',
  },
]

export const guidesPro = GUIDES.filter((g) => g.public === 'pro')
export const guidesParticulier = GUIDES.filter((g) => g.public === 'particulier')

/** Récupère des guides par slug, dans l'ordre demandé, en ignorant les slugs inconnus. */
export const getGuides = (...slugs: string[]): Guide[] =>
  slugs.map((s) => GUIDES.find((g) => g.slug === s)).filter((g): g is Guide => Boolean(g))

/** Les guides pro, en excluant la page courante si elle en fait partie. */
export const guidesProSauf = (slugCourant?: string): Guide[] =>
  guidesPro.filter((g) => g.slug !== slugCourant)
