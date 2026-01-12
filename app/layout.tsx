import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Husnain Khaliq - Full-Stack & AI Engineer',
  description: 'Computer Science senior at Brooklyn College. Building full-stack & AI-powered products. Available for full-time roles Spring 2026.',
  keywords: ['Full-Stack Developer', 'AI Engineer', 'Software Engineer', 'Next.js', 'React', 'FastAPI', 'Machine Learning'],
  authors: [{ name: 'Husnain Khaliq' }],
  openGraph: {
    title: 'Husnain Khaliq - Full-Stack & AI Engineer',
    description: 'Building full-stack & AI-powered products. Computer Science senior available for full-time roles Spring 2026.',
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
      <body>{children}</body>
    </html>
  )
}
