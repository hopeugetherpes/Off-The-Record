'use client'

import { useMemo, useState } from 'react'
import { drops } from '../archive-data'

export default function DatabaseClient() {
  const [query, setQuery] = useState('')
  const normalized = query.trim().toLowerCase()
  const filtered = useMemo(
    () =>
      drops.filter((drop) =>
        `${drop.id} ${drop.name} ${drop.address} ${drop.city} ${drop.state} ${drop.country} ${drop.size}`
          .toLowerCase()
          .includes(normalized),
      ),
    [normalized],
  )

  return (
    <>
      <section className="archive-hero archive-hero-db">
        <div>
          <p className="eyebrow">Local archive / Database</p>
          <h1>Public drops,<br /><em>on record.</em></h1>
        </div>
        <p>
          Browse the latest Off The Record installations by place, capacity and identifier. Every record now stays
          inside this site.
        </p>
      </section>

      <section className="archive-page archive-database-page">
        <div className="archive-stats" aria-label="Off The Record database statistics">
          <div><strong>2,385</strong><span>USB drops indexed</span></div>
          <div><strong>≈ 76,188 GB</strong><span>registered storage</span></div>
          <div><strong>{drops.length}</strong><span>latest records mirrored here</span></div>
        </div>

        <div className="archive-toolbar">
          <label className="archive-search">
            <span>Search the archive</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Place, name, country or ID"
            />
          </label>
          <a className="button button-dark" href="mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission">
            Submit a drop <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="archive-table" role="table" aria-label="Latest Off The Record entries">
          <div className="archive-table-head" role="row">
            <span>Date</span><span>Name</span><span>Location</span><span>Size</span><span>Status</span>
          </div>
          {filtered.map((drop) => (
            <a className="archive-table-row" href={drop.url} key={drop.id} role="row">
              <time dateTime={drop.dateIso}>{drop.dateIso}</time>
              <strong>{drop.name}<small>{drop.id}</small></strong>
              <span>{drop.city}{drop.state ? `, ${drop.state}` : ''}<small>{drop.country}</small></span>
              <span>{drop.size}</span>
              <span className="working-status"><i aria-hidden="true" />{drop.status}</span>
            </a>
          ))}
          {!filtered.length && <p className="archive-empty">No local record matches “{query}”.</p>}
        </div>
      </section>
    </>
  )
}
