/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/logo.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // L'offre pro vit sur /maintenance-immobiliere-rouen (le mot-clé que
      // cherchent les gestionnaires). /professionnels, l'ancienne URL, y renvoie.
      // Ne jamais rétablir la redirection inverse : les deux ensemble = boucle.
      {
        source: '/professionnels',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      // Pages commune supprimees (aucun client sur ces secteurs) : on redirige
      // vers la page pilier plutot que de renvoyer des 404, pour lui transmettre
      // l'anciennete acquise par ces URLs.
      {
        source: '/salle-de-bain-barentin',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-eslettes',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-malaunay',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-montville',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-pavilly',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-sotteville-les-rouen',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      // Pages commune retirees le 7 octobre 2026 : seules Rouen, Mont-Saint-Aignan
      // et Bois-Guillaume gardent une page (communes ou nous avons des chantiers).
      // Google ignorait ces pages trop semblables ; le renvoi transmet leur
      // anciennete a la page Rouen du meme metier.
      {
        source: '/salle-de-bain-bihorel',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-bonsecours',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-franqueville-saint-pierre',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-isneauville',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/salle-de-bain-le-mesnil-esnard',
        destination: '/salle-de-bain-rouen',
        permanent: true,
      },
      {
        source: '/plombier-bihorel',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/plombier-bonsecours',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/plombier-franqueville-saint-pierre',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/plombier-isneauville',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/plombier-le-mesnil-esnard',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/plombier-sotteville-les-rouen',
        destination: '/plombier-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-deville-les-rouen',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-le-grand-quevilly',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-le-petit-quevilly',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-maromme',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-saint-etienne-du-rouvray',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      {
        source: '/maintenance-immobiliere-sotteville-les-rouen',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
      // /contact n'a jamais existe sur ce site mais Google la connait (404).
      {
        source: '/contact',
        destination: '/devis',
        permanent: true,
      },
      {
        source: '/demander-un-devis',
        destination: '/devis',
        permanent: true,
      },
      // Page d'une version antérieure du site : supprimée mais toujours indexée
      // par Google, elle renvoyait un 404. Constaté le 5 août 2026.
      {
        source: '/nos-prestations',
        destination: '/maintenance-immobiliere-rouen',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
