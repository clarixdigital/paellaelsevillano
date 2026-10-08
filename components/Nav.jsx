'use client';

import { useState } from 'react';
import { NAV_LINKS, SITE, wa } from '@/lib/data';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#inicio" aria-label={`${SITE.name} — inicio`}>
          <span className="mark"><span>S</span></span>
          <span className="wordmark">
            <b>EL SEVILLANO</b>
            <small>{SITE.tagline}</small>
          </span>
        </a>

        <button
          className="menu-btn"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navmenu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-right${open ? ' open' : ''}`} id="navmenu">
          <nav className="nav-links" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
          </nav>
          <a
            className="nav-cta"
            href={wa('Hola, me gustaría pedir paella de El Sevillano')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </header>
  );
}
