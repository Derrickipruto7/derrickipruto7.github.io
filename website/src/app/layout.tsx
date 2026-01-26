import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Geospatial Professional Portfolio',
  description: 'Professional portfolio showcasing geospatial science expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
