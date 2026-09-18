export function ArchiveHeader() {
  return (
    <header className="topbar archive-topbar">
      <a className="wordmark" href="/" aria-label="Off The Record home">
        <img src="/otr-icon.png" alt="" className="wordmark-icon" />
        <span>OFF THE RECORD</span>
      </a>
      <nav className="nav-links" aria-label="Archive navigation">
        <a href="/">Home</a>
        <a href="/db">Database</a>
        <a href="/manifesto">Manifesto</a>
        <a href="/how-to">How to</a>
        <a className="nav-submit" href="mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission">
          Submit a drop <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export function ArchiveFooter() {
  return (
    <footer className="footer">
      <div>
        <a className="wordmark" href="/">
          <img src="/otr-icon.png" alt="" className="wordmark-icon" />
          <span>OFF THE RECORD</span>
        </a>
        <p>
          <a
            className="footer-license"
            href="https://github.com/hopeugetherpes/Off-The-Record/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            CC0 - Public Domain
          </a>{' '}
          -{' '}
          <a
            className="footer-license"
            href="https://github.com/hopeugetherpes/Off-The-Record"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>
        </p>
      </div>
      <div className="footer-links">
        <a href="/db">Database</a>
        <a href="/manifesto">Manifesto</a>
        <a href="/how-to">How to</a>
        <a href="/#faq">FAQ</a>
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
  )
}
