'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

export default function NavDropdown({ label, icon, tag, description, links }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  function show() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function hide() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="nav-dd" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className="nav-dd-trigger"
        aria-expanded={open}
        onFocus={show}
        onBlur={hide}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className="nav-dd-caret" aria-hidden="true">▾</span>
      </button>
      <div className={`nav-dd-panel${open ? ' open' : ''}`} role="menu">
        <span className="icon" aria-hidden="true">{icon}</span>
        <h3>{label}</h3>
        <div className="nav-dd-tag">{tag}</div>
        <p>{description}</p>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
