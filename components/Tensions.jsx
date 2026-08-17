import Reveal from './Reveal';

const TENSIONS = [
  ['holding on', 'letting go'],
  ['ambition', 'acceptance'],
  ['certainty', 'wonder'],
  ['the head', 'the heart']
];

export default function Tensions() {
  return (
    <section className="dark tensions">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">The heart of the practice</span>
          <h2 style={{ color: 'var(--paper)' }}>Every quality carries its shadow.</h2>
        </Reveal>
        <Reveal className="tension-list">
          {TENSIONS.map(([left, right]) => (
            <div className="tension" key={left}>
              <div className="w left">{left}</div>
              <div className="track"><div className="dot" /></div>
              <div className="w right">{right}</div>
            </div>
          ))}
        </Reveal>
        <p className="coda reveal in">
          These tensions are never a problem to solve. They are a balance to navigate, and
          learning to hold both is what it means to choose well.
        </p>
      </div>
    </section>
  );
}
