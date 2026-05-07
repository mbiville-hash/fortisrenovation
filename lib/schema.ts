const AREA_SERVED = [
  'Rouen', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan', 'Bois-Guillaume',
  'Petit-Quevilly', 'Grand-Quevilly', 'Déville-lès-Rouen', 'Maromme',
  'Saint-Étienne-du-Rouvray',
].map(name => ({ '@type': 'City', name }))

const OPENING_HOURS = [{
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '08:00',
  closes: '19:00',
}]

const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '5',
  reviewCount: '25',
  bestRating: '5',
}

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '193 Rue du Renard',
  addressLocality: 'Rouen',
  postalCode: '76000',
  addressCountry: 'FR',
}

export const BASE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Fortis Rénovation',
  description: 'Rénovation salle de bain et maintenance immobilière à Rouen. Plan 3D inclus, devis sous 48h.',
  url: 'https://www.fortisrenovation.fr',
  telephone: '+33767491324',
  email: 'mbiville@fortisrenovation.fr',
  address: ADDRESS,
  areaServed: AREA_SERVED,
  aggregateRating: AGGREGATE_RATING,
  openingHoursSpecification: OPENING_HOURS,
  priceRange: '€€',
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://www.fortisrenovation.fr${slug}`,
    provider: {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      name: 'Fortis Rénovation',
      telephone: '+33767491324',
      address: ADDRESS,
      aggregateRating: AGGREGATE_RATING,
      openingHoursSpecification: OPENING_HOURS,
    },
    areaServed: AREA_SERVED,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
