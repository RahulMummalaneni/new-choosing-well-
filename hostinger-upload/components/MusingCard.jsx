'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function MusingCard({ title, image, alt, paragraphs, series = 'Mundane Musings' }) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setShowImage(false);
    }
    if (showImage) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showImage]);

  const firstParagraph = paragraphs && paragraphs.length ? paragraphs[0] : '';

  const modal = showImage && typeof document !== 'undefined'
    ? createPortal(
      <div className="image-modal" role="dialog" aria-modal="true" onClick={() => setShowImage(false)}>
        <div className="image-modal__inner" onClick={(e) => e.stopPropagation()}>
          <button className="image-modal__close" aria-label="Close" onClick={() => setShowImage(false)}>×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} />
          <div className="image-modal__caption">{title}</div>
        </div>
      </div>,
      document.body
    ) : null;

  return (
    <>
      <article
        className="musing-card"
        role="button"
        tabIndex={0}
        onClick={() => setShowImage(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowImage(true); }}
      >
        <div className="musing-figure" onClick={() => setShowImage(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setShowImage(true); }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} loading="lazy" />
        </div>
        <div className="musing-body">
          <span className="musing-signature">{series}</span>
          <h2>{title}</h2>

          <div className="musing-text excerpt">
            <p>{firstParagraph}</p>
          </div>

          <button type="button" className="musing-toggle" onClick={(e) => { e.stopPropagation(); setShowImage(true); }}>
            Click to see more
          </button>
        </div>
      </article>
      {modal}
    </>
  );
}
