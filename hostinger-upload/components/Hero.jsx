'use client';

import { useEffect, useState } from 'react';

const PAIRS = [
  'holding on & letting go',
  'ambition & acceptance',
  'certainty & wonder',
  'the head & the heart'
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [heroIn, setHeroIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PAIRS.length);
        setVisible(true);
      }, 500);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className={`hero-enter${heroIn ? ' in' : ''}`} style={{ transitionDelay: '0ms' }}>
          <span className="eyebrow">Seeker &amp; Strategist</span>
          <h1>Choosing <em>Well</em></h1>
          <div className="byline">with Nithya Kishore</div>
          <div className="who">Where clear thinking meets an open heart</div>
          <p className="intro lede">
            For students, parents, and young professionals at life&apos;s crossroads. Learn to
            make your biggest decisions from clarity, courage, and heart, rather than fear,
            pressure, or borrowed ambition.
          </p>
          <div className="tension-line">
            We spend our lives between{' '}
            <span className="pair" style={{ opacity: visible ? 1 : 0 }}>{PAIRS[index]}</span>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-solid" href="#questions">Start with the Ten Questions</a>
            <a className="btn btn-ghost" href="#what">What is Choosing Well?</a>
          </div>
        </div>
        <div
          className={`portrait hero-enter${heroIn ? ' in' : ''}`}
          style={{ transitionDelay: '180ms' }}
          role="img"
          aria-label="Portrait of Nithya Kishore"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/nithya.jpeg" alt="Portrait of Nithya Kishore" />
          <div className="portrait-caption">Seeker &amp; Strategist · Founder, Knowmatrix</div>
        </div>
      </div>
    </section>
  );
}
