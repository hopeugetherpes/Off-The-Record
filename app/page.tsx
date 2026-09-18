'use client'

import { useEffect, useMemo, useState } from 'react'
import type { ComponentProps } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import world from 'world-atlas/countries-110m.json'
import { featuredDrops, type Drop } from './archive-data'

const worldGeography = world as unknown as ComponentProps<typeof Geographies>['geography']

const installSteps = [
  {
    number: '01',
    title: 'Read the manifesto',
    text: 'Understand the project first, then choose a genuinely public, lawful and safely accessible location.',
  },
  {
    number: '02',
    title: 'Prepare a drive',
    text: 'Use a USB flash drive of any capacity. Remove unnecessary vendor software and format it for broad compatibility.',
  },
  {
    number: '03',
    title: 'Load the note',
    text: 'Add the project readme and manifesto, with the maker credit, installation date and any useful local context.',
  },
  {
    number: '04',
    title: 'Seal the hardware',
    text: 'Protect the body against moisture while leaving the connector clean, exposed and easy to reach.',
  },
  {
    number: '05',
    title: 'Fix it in place',
    text: 'Mount the drive securely without creating a hazard or damaging protected property. Check laptop clearance.',
  },
  {
    number: '06',
    title: 'Document & submit',
    text: 'Take an overview, a medium-distance photo and a close-up, then register the finished drop in the official database.',
  },
]

const faq = [
  {
    question: 'Can anyone install an Off The Record drop?',
    answer:
      'Participation is open, but local law and property rules still apply. Choose a safe public location, obtain permission when required and never damage protected, historic or privately owned surfaces.',
  },
  {
    question: 'What should be on the drive at installation?',
    answer:
      'The original approach is to begin with an otherwise empty, writable drive containing only a readme that explains the project and points back to the official site.',
  },
  {
    question: 'Is an unknown public USB drive safe?',
    answer:
      'No unknown USB device should be trusted. A drop can contain malicious files or altered hardware. Do not connect one to a daily-use computer; use isolated equipment, disable autorun and never execute unknown files.',
  },
  {
    question: 'Which capacity and file system work best?',
    answer:
      'Any capacity can work. The project historically recommends FAT32 because it is readable by many operating systems, though its 4 GB single-file limit is worth remembering.',
  },
  {
    question: 'Should the drive use an extension cable?',
    answer:
      'The original gesture is a bare connector emerging from the wall, but safe access matters more than purity. Leave enough clearance for different laptops and avoid any placement that strains a port.',
  },
  {
    question: 'What about rain or vandalism?',
    answer:
      'Shelter the installation, seal the drive body and expect that public hardware may fail, disappear or be altered. Document it well and treat impermanence as part of the project.',
  },
]

function ArchiveMap({ activeDrop, onSelect }: { activeDrop: Drop | null; onSelect: (drop: Drop) => void }) {
  return (
    <div className="map-card">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 155 }}
        className="world-map"
        aria-label="World map showing recent Off The Record locations"
      >
        <Geographies geography={worldGeography}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} className="map-country" />)
          }
        </Geographies>
        {featuredDrops.map((drop) => (
          <Marker key={drop.id} coordinates={drop.coordinates}>
            <circle
              r={activeDrop?.id === drop.id ? 7 : 5}
              className={`map-pin ${activeDrop?.id === drop.id ? 'selected' : ''}`}
              onClick={() => onSelect(drop)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelect(drop)
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${drop.name} in ${drop.city}`}
            />
          </Marker>
        ))}
      </ComposableMap>
      <span className="map-coord">WORLD / LATEST 05</span>
      <span className="map-note">
        Select a marker
        <br />
        to inspect a drop
      </span>
    </div>
  )
}

export default function Page() {
  const [query, setQuery] = useState('')
  const [activeDrop, setActiveDrop] = useState<Drop | null>(null)

  const filteredDrops = useMemo(
    () =>
      featuredDrops.filter((drop) =>
        `${drop.name} ${drop.city} ${drop.country} ${drop.id}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  )

  useEffect(() => {
    if (!activeDrop) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveDrop(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeDrop])

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Off The Record home">
          <img src="/otr-icon.png" alt="" className="wordmark-icon" />
          <span>OFF THE RECORD</span>
        </a>
        <div className="nav-links">
          <a href="#database">Database</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#install">How to</a>
          <a href="#faq">FAQ</a>
          <a className="nav-submit" href="mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission">
            Submit a drop <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Public-space file sharing</p>
          <h1>
            Un-cloud your files
            <br />
            <em>in cement.</em>
          </h1>
          <p className="hero-text">
            Off The Record is an anonymous, offline, peer-to-peer network of USB drives embedded in public space. Anyone
            can find a drive, exchange files or install a new one.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#database">
              Explore recent drops <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="/db">
              Open live database <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract network of public USB drops">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="pin pin-a" />
          <div className="pin pin-b" />
          <div className="pin pin-c" />
          <div className="pin pin-d" />
          <img src="/otr-icon.png" alt="" className="hero-usb" />
          <div className="art-label label-a">
            OFFLINE
            <br />
            READ / WRITE
          </div>
          <div className="art-label label-b">
            USB / 01
            <br />
            PUBLIC SPACE
          </div>
          <div className="crosshair">+</div>
          <div className="art-caption">
            THE NETWORK
            <br />
            HAS NO CLOUD
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Project principles">
        <span>ANONYMOUS</span>
        <span>·</span>
        <span>OFFLINE</span>
        <span>·</span>
        <span>PEER TO PEER</span>
        <span>·</span>
        <span>PUBLIC SPACE</span>
      </section>

      <section className="database-section section" id="database">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The living database</p>
            <h2>Recent drops</h2>
          </div>
          <span className="count">{filteredDrops.length.toString().padStart(2, '0')} shown</span>
        </div>

        <div className="stat-strip" aria-label="Off The Record database statistics">
          <div>
            <strong>2,385</strong>
            <span>USB drops indexed</span>
          </div>
          <div>
            <strong>≈ 76,188 GB</strong>
            <span>registered storage</span>
          </div>
          <div>
            <strong>2 years</strong>
            <span>of public exchange</span>
          </div>
        </div>

        <div className="archive-layout">
          <div className="drop-list">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search place, name or ID"
                aria-label="Search recent Off The Record drops"
              />
            </label>
            {filteredDrops.length ? (
              filteredDrops.map((drop) => (
                <button className="drop-row" key={drop.id} onClick={() => setActiveDrop(drop)}>
                  <span className="drop-id">{drop.id}</span>
                  <span className="drop-place">
                    {drop.city}
                    <small>{drop.country}</small>
                  </span>
                  <span className="drop-capacity">{drop.size}</span>
                  <span className="drop-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))
            ) : (
              <p className="empty-state">No recent drop matches that search.</p>
            )}
            <a className="database-link" href="/db">
              Browse all 2,385 entries <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ArchiveMap activeDrop={activeDrop} onSelect={setActiveDrop} />
        </div>
      </section>

      <section className="manifesto section" id="manifesto">
        <p className="eyebrow">02 / The idea</p>
        <div className="manifesto-grid">
          <h2>
            Data with
            <br />
            no <em>cloud.</em>
          </h2>
          <div className="manifesto-copy">
            <p>
              Each Off The Record drop is a stand-alone, writable drive in a place anyone can reach. It needs no account, no
              custom software, no wireless connection and no synchronization with another node.
            </p>
            <p>
              The project asks what public file sharing can mean when the network is a physical object, the interface is
              a wall and participation leaves dust on your jacket.
            </p>
            <a className="text-link" href="/manifesto">
              Read the full manifesto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Public</h3>
            <p>A true drop belongs in openly accessible space, not behind a membership, schedule or locked door.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Local</h3>
            <p>The drive mounts as ordinary read-and-write storage. The exchange happens at the object itself.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Singular</h3>
            <p>Every installation is independent. It does not need to connect, update or agree with any other drop.</p>
          </article>
        </div>
      </section>

      <section className="steps section" id="install">
        <div className="section-heading install-heading">
          <div>
            <p className="eyebrow">03 / Field guide</p>
            <h2>Make your own</h2>
          </div>
          <a className="text-link" href="/how-to">
            Full installation guide <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="step-grid">
          {installSteps.map((step) => (
            <article key={step.number}>
              <span className="step-num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="safety-card">
          <div>
            <p className="eyebrow">Security note</p>
            <h3>Assume every public USB device is untrusted.</h3>
          </div>
          <p>
            Use isolated or sacrificial hardware, keep autorun disabled, and never open unknown executables or connect a
            drop to a computer holding valuable accounts or files. File scanning reduces risk; it does not remove it.
          </p>
        </div>
        <div className="submit-panel">
          <div>
            <p className="eyebrow">Finished?</p>
            <h3>Put it on the map.</h3>
            <p>Your submission email should include the drop name, capacity, location, coordinates, story and three photographs.</p>
          </div>
          <a className="button button-light" href="mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission">
            Email your submission <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">04 / Practical questions</p>
            <h2>FAQ</h2>
            <p>Core guidance from the original project, updated with a clearer safety baseline.</p>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.question}
                  <b aria-hidden="true">+</b>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="wordmark" href="#top">
            <img src="/otr-icon.png" alt="" className="wordmark-icon" />
            <span>OFF THE RECORD</span>
          </a>
          <p>
            <a
              className="footer-license"
              href="https://github.com/hopeugetherpes/Off-The-Record?tab=CC0-1.0-1-ov-file"
              target="_blank"
              rel="noreferrer"
            >
              CC0 - Public Domain
            </a>{' '}
            - Open Source
          </p>
        </div>
        <div className="footer-links">
          <a href="#database">Database</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#install">How to</a>
          <a href="#faq">FAQ</a>
          <a href="https://github.com/hopeugetherpes/Off-The-Record" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </div>
        <div className="footer-meta">
          <span className="fork-credit">
            Forked from{' '}
            <a href="https://arambartholl.com/" target="_blank" rel="noreferrer">
              Aram Bartholl
            </a>
            &apos;s{' '}
            <a
              className="dead-drops-source"
              href="https://deaddrops.com/"
              target="_blank"
              rel="noreferrer"
            >
              Dead Drops
            </a>
          </span>
        </div>
      </footer>

      {activeDrop && (
        <div className="modal-backdrop" onClick={() => setActiveDrop(null)}>
          <section
            className="modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drop-title"
          >
            <button className="close" onClick={() => setActiveDrop(null)} aria-label="Close drop details">
              ×
            </button>
            <p className="eyebrow">DATABASE ENTRY / {activeDrop.id}</p>
            <h2 id="drop-title">{activeDrop.name}</h2>
            <p className="modal-country">
              {activeDrop.city} · {activeDrop.country}
            </p>
            <div className="modal-rule" />
            <dl className="drop-facts">
              <div>
                <dt>Capacity</dt>
                <dd>{activeDrop.size}</dd>
              </div>
              <div>
                <dt>Added</dt>
                <dd>{activeDrop.date}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{activeDrop.status}</dd>
              </div>
            </dl>
            <p className="modal-note">{activeDrop.note}</p>
            <a className="button button-dark" href={activeDrop.url}>
              Open full record <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>
      )}
    </main>
  )
}
