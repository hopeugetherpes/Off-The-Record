import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArchiveFooter, ArchiveHeader } from '../../archive-chrome'
import { drops, getDrop } from '../../archive-data'

type PageProps = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return drops.map((drop) => ({ id: drop.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const drop = getDrop(id)
  if (!drop) return { title: 'Record not found — Off The Record' }
  return {
    title: `${drop.name} — Off The Record Database`,
    description: `${drop.name}, a ${drop.size} Off The Record installation in ${drop.city}, ${drop.country}.`,
  }
}

function formatCoordinate(value: number, positive: string, negative: string) {
  return `${Math.abs(value).toFixed(5)}° ${value >= 0 ? positive : negative}`
}

export default async function DropPage({ params }: PageProps) {
  const { id } = await params
  const drop = getDrop(id)
  if (!drop) notFound()

  const index = drops.findIndex((entry) => entry.slug === drop.slug)
  const newer = index > 0 ? drops[index - 1] : null
  const older = index < drops.length - 1 ? drops[index + 1] : null
  const [longitude, latitude] = drop.coordinates

  return (
    <main className="site-shell archive-shell">
      <ArchiveHeader />
      <section className="record-page archive-page">
        <nav className="record-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span><a href="/db">Database</a><span>/</span><strong>{drop.id}</strong>
        </nav>
        <header className="record-header">
          <div>
            <p className="eyebrow">Database entry / {drop.id}</p>
            <h1>{drop.name}</h1>
          </div>
          <div className="record-place"><span>{drop.city}{drop.state ? `, ${drop.state}` : ''}</span><strong>{drop.country}</strong></div>
        </header>

        <div className="record-layout">
          <section className="record-information">
            <h2>Information</h2>
            <dl className="record-facts">
              <div><dt>ID</dt><dd>{drop.slug}</dd></div>
              <div><dt>Type</dt><dd>{drop.type}</dd></div>
              <div><dt>Capacity</dt><dd>{drop.size}</dd></div>
              <div><dt>Date created</dt><dd><time dateTime={drop.dateIso}>{drop.date}</time></dd></div>
              <div><dt>Address</dt><dd>{drop.address}, {drop.city}{drop.state ? ` ${drop.state}` : ''}, {drop.countryCode}</dd></div>
              <div><dt>Coordinates</dt><dd>{formatCoordinate(latitude, 'N', 'S')} · {formatCoordinate(longitude, 'E', 'W')}</dd></div>
              {drop.format && <div><dt>Format</dt><dd>{drop.format}</dd></div>}
              <div><dt>Status</dt><dd className="working-status"><i aria-hidden="true" />{drop.status}</dd></div>
            </dl>
          </section>

          <section className="record-about">
            <h2>About</h2>
            <p className="record-note">{drop.note}</p>
            {drop.details.map((detail) => <p key={detail}>{detail}</p>)}
          </section>
        </div>

        <nav className="record-pagination" aria-label="Adjacent database entries">
          {newer ? <a href={newer.url}><span>← Newer</span><strong>{newer.name}</strong></a> : <span />}
          {older ? <a href={older.url}><span>Older →</span><strong>{older.name}</strong></a> : <span />}
        </nav>
      </section>
      <ArchiveFooter />
    </main>
  )
}
