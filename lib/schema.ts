const AREA_SERVED = [
  'Rouen', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan', 'Bois-Guillaume',
  'Petit-Quevilly', 'Grand-Quevilly', 'Déville-lès-Rouen', 'Maromme',
  'Saint-Étienne-du-Rouvray',
].map(name => ({ '@type': 'City', name }))

const OPENING_HOURS = [{
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
}]

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
  description: 'Salle de bain design clé en main et maintenance immobilière à Rouen. Plan 3D inclus, devis clair sous 48h.',
  url: 'https://www.fortisrenovation.fr',
  telephone: '+33767491324',
  email: 'mbiville@fortisrenovation.fr',
  address: ADDRESS,
  areaServed: AREA_SERVED,
  openingHoursSpecification: OPENING_HOURS,
  priceRange: '€€',
  image: [
    'https://www.fortisrenovation.fr/salle-de-bain-3d.jpg',
    'https://www.fortisrenovation.fr/plan-salle-de-bain.png',
  ],
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

export function imageObjectSchema(url: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    name,
    description,
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
