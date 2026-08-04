/**
 * Image de partage social, commune à tout le site.
 *
 * Elle vit dans public/ plutôt qu'en convention de fichier `opengraph-image` :
 * une page qui déclare son propre bloc `openGraph` perd l'image héritée du
 * layout, il faut donc pouvoir la réinjecter explicitement. Une seule source,
 * référencée partout.
 */
export const OG_IMAGE = [
  {
    url: 'https://www.fortisrenovation.fr/og-fortis.jpg',
    width: 1200,
    height: 630,
    alt: 'Fortis Rénovation — maintenance immobilière et remise en état locative à Rouen',
  },
]
