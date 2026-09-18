import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../archive-chrome'

export const metadata: Metadata = {
  title: 'How to make your own — Off The Record',
  description: 'A practical guide to preparing, installing and documenting an Off The Record drop.',
}

const steps = [
  ['Read the manifesto', 'Understand the public, offline and independent nature of the project before choosing a site.'],
  ['Choose a drive', 'Use a USB flash drive of any capacity and format it for broad compatibility.'],
  ['Prepare the hardware', 'Remove unnecessary vendor software. Keep or remove the outer shell according to the mounting method.'],
  ['Seal the body', 'Protect the non-connector portion against moisture with suitable sealing tape or another durable enclosure.'],
  ['Load the project note', 'Add a readme with the project name, maker credit, installation date, safe-use warning and local context.'],
  ['Choose a lawful public site', 'Get permission where required. Never damage protected, historic or private property, and do not create a hazard.'],
  ['Mount it securely', 'Fix the drive or extension in place with a method appropriate to the surface and local conditions.'],
  ['Check laptop clearance', 'Test the angle and surrounding space so ports on both sides of different devices can reach it without strain.'],
  ['Orient the connector', 'Keep the exposed USB contacts clean and position the connector so visitors can identify the correct orientation.'],
  ['Finish the surface', 'Remove sharp edges, loose material and residue. The installation should be discreet, stable and safe to approach.'],
  ['Document and submit', 'Take an overview, a medium-distance view and a close-up, then add the location and story to the database.'],
]

export default function HowToPage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <section className="archive-hero compact-archive-hero">
        <div>
          <p className="eyebrow">Field guide</p>
          <h1>Make your<br /><em>own drop.</em></h1>
        </div>
        <p>A careful installation balances public access, physical durability, legality and digital safety.</p>
      </section>
      <section className="archive-page how-to-page">
        <div className="long-step-list">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>
                {index === 0 ? (
                  <a className="manifesto-step-link" href="/manifesto">{title}</a>
                ) : title}
              </h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="safety-card archive-safety-card">
          <div>
            <p className="eyebrow">Safety baseline</p>
            <h3>Treat public USB hardware as untrusted.</h3>
          </div>
          <p>
            Use isolated equipment, disable autorun, avoid unknown executables and never connect public hardware to a
            computer holding valuable accounts or files. Physical inspection and antivirus scanning reduce risk but do
            not make an unknown device trustworthy.
          </p>
        </div>
        <div className="archive-cta">
          <div><p className="eyebrow">Three photographs ready?</p><h2>Put it on the map.</h2></div>
          <a className="button button-dark" href="mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission">Email a submission <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <ArchiveFooter />
    </main>
  )
}
