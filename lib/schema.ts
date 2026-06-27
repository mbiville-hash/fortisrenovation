const AREA_SERVED = [
  'Rouen', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan', 'Bois-Guillaume',
  'Petit-Quevilly', 'Grand-Quevilly', 'Déville-lès-Rouen', 'Maromme',
  'Saint-Étienne-du-Rouvray',
  'Barentin', 'Eslettes', 'Pavilly', 'Montville', 'Malaunay',
].map(name => ({ '@type': 'City', name }))

const OPENING_HOURS = [{
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
}]

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '193C Rue du Renard',
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
  logo: 'https://www.fortisrenovation.fr/web-app-manifest-512x512.png',
  telephone: '+33767491324',
  email: 'mbiville@fortisrenovation.fr',
  address: ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.450895,
    longitude: 1.0717932,
  },
  areaServed: AREA_SERVED,
  openingHoursSpecification: OPENING_HOURS,
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '28',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: ['https://share.google/mkY15MSbWQ41tC07S'],
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

export function articleSchema(opts: { title: string; description: string; slug: string; datePublished: string; dateModified?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Organization', name: 'Fortis Rénovation', url: 'https://www.fortisrenovation.fr' },
    publisher: {
      '@type': 'Organization',
      name: 'Fortis Rénovation',
      logo: { '@type': 'ImageObject', url: 'https://www.fortisrenovation.fr/web-app-manifest-512x512.png' },
    },
    mainEntityOfPage: `https://www.fortisrenovation.fr${opts.slug}`,
    image: 'https://www.fortisrenovation.fr/salle-de-bain-3d.jpg',
    inLanguage: 'fr-FR',
  }
}
