import type { Metadata } from 'next'
import { ArchiveFooter, ArchiveHeader } from '../archive-chrome'

export const metadata: Metadata = {
  title: 'Manifesto — Off The Record',
  description: 'The principles behind Off The Record: public, offline and peer-to-peer file sharing.',
}

export default function ManifestoPage() {
  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <article className="text-page manifesto-page">
        <header>
          <p className="eyebrow">The Off The Record manifesto</p>
          <h1>Data belongs<br /><em>in public.</em></h1>
        </header>
        <div className="text-page-grid">
          <aside>
            <span>PUBLIC</span><span>OFFLINE</span><span>READ / WRITE</span><span>NO ACCOUNT</span>
          </aside>
          <div className="prose">
            <p className="prose-lead">
              Off The Record is an anonymous, offline and peer-to-peer file-sharing network made from ordinary USB
              storage placed in genuinely public space.
            </p>
            <h2>Public means accessible</h2>
            <p>
              Anyone should be able to reach an installation without membership, an appointment or a temporary pass.
              A device hidden inside a private or routinely locked building does not meet that standard.
            </p>
            <h2>The drive is the network</h2>
            <p>
              Each installation mounts as normal writable storage. It needs no special application, wireless link,
              user account or synchronization with another node. Exchange happens directly at the object.
            </p>
            <h2>Every node stands alone</h2>
            <p>
              An installation can exist, change and disappear independently. Its physical setting, contents and traces
              of use give it a character that a centralized cloud cannot reproduce.
            </p>
            <h2>Make data tangible again</h2>
            <p>
              As devices hide local files behind remote services, Off The Record asks people to reconsider how data can
              circulate without platforms, tracking or permission from an intermediary.
            </p>
            <blockquote>Un-cloud your files. Share locally. Leave the network in public space.</blockquote>
            <a className="button button-dark" href="/how-to">Build an installation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
      <ArchiveFooter />
    </main>
  )
}
