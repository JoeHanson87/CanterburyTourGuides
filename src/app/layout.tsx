import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Canterbury Guided Tours',
    default: 'Canterbury Guided Tours | Official Green Badge Walking Tours',
  },
  description:
    'Canterbury Guided Tours offers official walking tours of Canterbury led by fully qualified Green Badge City Guides. Explore the Cathedral, medieval streets and Roman heritage.',
  keywords:
    'Canterbury tours, walking tours, cathedral tours, Green Badge guides, Canterbury city guide',
  openGraph: {
    siteName: 'Canterbury Guided Tours',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-brand-cream">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
