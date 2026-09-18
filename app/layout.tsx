import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Off The Record — Offline File Sharing in Public Space',
  description:
    'Off The Record is an editorial archive for the anonymous offline peer-to-peer network of USB drives embedded in public space.',
  applicationName: 'Off The Record',
  openGraph: {
    title: 'Off The Record — Offline File Sharing in Public Space',
    description:
      'Explore the Off The Record network, browse recent public USB drops and learn how to install your own.',
    siteName: 'Off The Record',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Off The Record — Offline File Sharing in Public Space',
    description:
      'Explore the Off The Record network, browse recent public USB drops and learn how to install your own.',
  },
  icons: {
    icon: '/otr-icon.png',
    shortcut: '/otr-icon.png',
    apple: '/otr-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f1efe9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
