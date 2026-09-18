import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../archive-chrome'

export const metadata: Metadata = {
  title: 'About — Off The Record',
  description: 'Origins and principles of the Off The Record public-space file-sharing project.',
}

const firstLocations = [
  '87 3rd Avenue, Brooklyn — MakerBot',
  'Empire Fulton Ferry Park, Brooklyn — DUMBO',
  '235 Bowery, Manhattan — New Museum',
  'Union Square, Manhattan — 14th Street station',
  '540 West 21st Street, Manhattan — Eyebeam',
]

export default function AboutPage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <article className="text-page about-page">
        <header>
          <p className="eyebrow">About the network</p>
          <h1>Files without<br /><em>the cloud.</em></h1>
        </header>
        <div className="text-page-grid">
          <aside><span>NYC / 2010</span><span>PUBLIC SPACE</span><span>PEER TO PEER</span></aside>
          <div className="prose">
            <p className="prose-lead">
              Off The Record is a network of USB drives embedded in publicly accessible places. Visitors connect
              directly to read, leave or exchange files without an account or online service.
            </p>
            <p>
              A new installation begins as writable storage with a short readme explaining the project. Anyone may
              participate by preparing a drive, placing it responsibly and documenting the finished location.
            </p>
            <h2>Origins</h2>
            <p>
              Berlin-based media artist <a href="https://arambartholl.com/" target="_blank" rel="noreferrer">Aram Bartholl</a>{' '}
              initiated the project while artist-in-residence at{' '}
              <a href="https://www.eyebeam.org/" target="_blank" rel="noreferrer">Eyebeam</a> in New York in October 2010.
              The work later appeared in MoMA’s 2011 exhibition “Talk to Me”.
            </p>
            <h2>The first five installations</h2>
            <ol className="location-list">
              {firstLocations.map((location) => <li key={location}>{location}</li>)}
            </ol>
            <div className="inline-actions">
              <a className="button button-dark" href="/db">Browse the database <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="https://www.flickr.com/photos/bartholl/sets/72157625170875990/" target="_blank" rel="noreferrer">
                View the 2010 photo set <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <ArchiveFooter />
    </main>
  )
}
