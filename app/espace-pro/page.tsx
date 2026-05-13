import type { Metadata } from 'next'
import EspaceProClient from '@/components/EspaceProClient'

export const metadata: Metadata = {
  title: 'Espace pro — Factures, devis et bons d’intervention',
  description: 'Accédez aux devis, factures et bons d’intervention Fortis Rénovation liés à votre entreprise.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.fortisrenovation.fr/espace-pro' },
}

export default function EspaceProPage() {
  return <EspaceProClient />
}
