import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../archive-chrome'
import DatabaseClient from './database-client'

export const metadata: Metadata = {
  title: 'Database — Off The Record',
  description: 'Browse the Off The Record archive of public-space USB installations.',
}

export default function DatabasePage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <DatabaseClient />
      <ArchiveFooter />
    </main>
  )
}
