import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../archive-chrome'

export const metadata: Metadata = {
  title: 'Privacy — Off The Record',
  description: 'How the Off The Record website handles visits, archive records and submissions.',
}

export default function PrivacyPage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <article className="text-page privacy-page">
        <header>
          <p className="eyebrow">Privacy notice</p>
          <h1>Minimal by<br /><em>design.</em></h1>
        </header>
        <div className="text-page-grid">
          <aside><span>NO ANALYTICS</span><span>NO COOKIES</span><span>STATIC SITE</span></aside>
          <div className="prose">
            <p className="prose-lead">
              This site is a static archive. Its application code does not use analytics, advertising trackers,
              cookies, browser storage or fingerprinting, and it has no runtime database or account system.
            </p>
            <h2>Hosting requests</h2>
            <p>
              The site is hosted on Vercel. Like other hosting providers, Vercel necessarily receives ordinary request
              data such as IP addresses, user agents, requested URLs and timestamps to deliver and protect the service.
              That infrastructure data is outside this repository.
            </p>
            <h2>Public archive data</h2>
            <p>
              Archive entries intentionally publish installation locations, including coordinates or street-level
              directions. Do not submit a private residence, a person&apos;s identity or any detail you are not prepared
              to make public.
            </p>
            <h2>Photographs</h2>
            <p>
              Remove EXIF and GPS metadata before sending photographs. Check faces, reflections, number plates,
              documents and other background details that could identify someone unintentionally.
            </p>
            <h2>Email submissions</h2>
            <p>
              Submission links open your email application. Sending a message reveals your sender address and message
              metadata to the recipient and to the mail providers involved. The form preview on this site runs only in
              your browser and does not upload, store or transmit its fields or selected files.
            </p>
            <h2>External links</h2>
            <p>
              Links to GitHub, Dead Drops, Flickr and other sites are separate services with their own privacy
              practices. No third-party resource is loaded by this application before you choose to follow one of
              those links.
            </p>
          </div>
        </div>
      </article>
      <ArchiveFooter />
    </main>
  )
}
