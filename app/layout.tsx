import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Raymark LLavanes | Software Engineer',
  description: 'John Raymark LLavanes builds Python, Odoo ERP, backend automation, and full-stack business systems.',
  icons: {
    icon: '/icon.svg?v=2',
    shortcut: '/icon.svg?v=2',
    apple: '/icon.svg?v=2',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f0e9',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
