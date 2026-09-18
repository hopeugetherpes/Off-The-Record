import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../../archive-chrome'
import SubmitForm from './submit-form'

export const metadata: Metadata = {
  title: 'Submit a drop — Off The Record',
  description: 'Prepare a new Off The Record public USB installation entry.',
}

export default function SubmitPage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <section className="archive-hero compact-archive-hero">
        <div>
          <p className="eyebrow">Database / Submission</p>
          <h1>Submit an<br /><em>installation.</em></h1>
        </div>
        <p>Document the hardware, public location, coordinates, maker story and three useful views.</p>
      </section>
      <section className="archive-page form-page">
        <SubmitForm />
      </section>
      <ArchiveFooter />
    </main>
  )
}
