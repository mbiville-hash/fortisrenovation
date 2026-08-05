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
