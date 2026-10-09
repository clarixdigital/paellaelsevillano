'use client';

import { useState } from 'react';
import { NAV_LINKS, SITE, wa } from '@/lib/data';

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  if (next === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  try { localStorage.setItem('theme', next); } catch {}
}

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

        <div className="nav-tools">
          <button className="theme-btn" aria-label="Cambiar entre modo claro y oscuro" onClick={toggleTheme}>
            <svg className="ic-moon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8.5 8.5 0 1 0 11.5 11.5Z" />
            </svg>
            <svg className="ic-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <button
            className="menu-btn"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="navmenu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
