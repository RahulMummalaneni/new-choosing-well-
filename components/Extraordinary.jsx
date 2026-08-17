import Reveal from './Reveal';

export default function Extraordinary() {
  return (
    <section className="extra" id="extra">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">Extra(ordinary) Matters</span>
          <h2>The extraordinary, held quietly within the ordinary.</h2>
        </Reveal>
        <Reveal className="extra-grid">
          <a className="extra-card ec-1" href="/extraordinary/unseen-sundays">
            <span className="tag">A weekly noticing</span>
            <h3>Unseen Sundays</h3>
            <p>What reveals itself when we slow down enough to look, one Sunday at a time.</p>
          </a>
          <a className="extra-card ec-2" href="/extraordinary/mundane-musings">
            <span className="tag">Field notes from daily life</span>
            <h3>Mundane Musings</h3>
            <p>Small observations from ordinary moments, and the quiet inspiration waiting inside them.</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
