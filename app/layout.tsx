import type { Metadata } from 'next'
import { Bodoni_Moda, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fortisrenovation.fr'),
  title: {
    default: 'Fortis Rénovation',
    template: '%s | Fortis Rénovation',
  },
  description: 'Salle de bain design clé en main et maintenance immobilière à Rouen. Plan 3D inclus, devis clair sous 48h, chantier propre.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Fortis Rénovation',
    locale: 'fr_FR',
    type: 'website',
    title: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
    description: 'Salle de bain design clé en main et maintenance immobilière à Rouen. Plan 3D inclus, devis clair sous 48h, chantier propre.',
    url: 'https://www.fortisrenovation.fr',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Fortis Rénovation — Maintenance immobilière & salle de bain à Rouen',
    description: 'Salle de bain design clé en main et maintenance immobilière à Rouen. Plan 3D inclus, devis clair sous 48h.',
    images: ['/web-app-manifest-512x512.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoni.variable} ${montserrat.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
