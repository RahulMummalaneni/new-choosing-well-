'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavDropdown from './NavDropdown';

const dropdowns = [
  {
    label: 'The Practice',
    icon: '01.',
    tag: 'An evolving practice, year on year',
    description:
      'The living body of Choosing Well, returned to and deepened every June, and now unfolding all year round.',
    links: [
      { name: 'The Reflections', href: '/practice/reflections' },
      { name: 'The Conversations', href: '/practice/conversations' },
      { name: 'The Stories', href: '/practice/stories' }
    ]
  },
  {
    label: 'Resources',
    icon: '02.',
    tag: 'Tools for your crossroads',
    description:
      'Explore the resources that get to the heart of what it means to choose well, made for real decisions, held in real lives.',
    links: [
      { name: 'Workshops', href: '/resources/workshops' },
      { name: 'Articles', href: '/resources/articles' },
      { name: 'Frameworks', href: '/resources/frameworks' }
    ]
  },
  {
    label: 'Extra(ordinary) Matters',
    icon: '03.',
    tag: 'The seeker in each of us',
    description:
      'There is a seeker in each of us that observes, creates, and finds inspiration in the mundane moments.',
    links: [
      { name: 'Unseen Sundays', href: '/extraordinary/unseen-sundays' },
      { name: 'Mundane Musings', href: '/extraordinary/mundane-musings' }
    ]
  },
  {
    label: 'My Work',
    icon: '04.',
    tag: 'The work I do',
    description:
      'Explore the projects and initiatives I am building.',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Consulting', href: '/consulting' },
      { name: 'Intelligence', href: '/intelligence' }
    ]
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          <span className="b1">Nithya Kishore</span>
          <span className="b2">Choosing Well</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="site-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="site-navigation" className={`main-nav${mobileMenuOpen ? ' mobile-open' : ''}`}>
          <a href="/#what" onClick={() => setMobileMenuOpen(false)}>What is Choosing Well</a>
          <a href="/#foryou" onClick={() => setMobileMenuOpen(false)}>Is this for you</a>
          {dropdowns.map((d) => (
            <NavDropdown key={d.label} {...d} />
          ))}
          <a className="mobile-nav-cta" href="/#questions" onClick={() => setMobileMenuOpen(false)}>
            Begin here
          </a>
        </nav>
        <a className="btn btn-solid" href="/#questions">Begin here</a>
      </div>
    </header>
  );
}
