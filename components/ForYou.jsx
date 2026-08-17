import Reveal from './Reveal';

const ITEMS = [
  ['i.', <>You&apos;re standing at a crossroads, <strong>school, college, career, or something deeper</strong>, and the path ahead feels less clear than you&apos;d like.</>],
  ['ii.', <>You want to <strong>choose with intention</strong>, instead of merely reacting to deadlines, pressure, or the fear of falling behind.</>],
  ['iii.', <>You hold opposing feelings at once, <strong>ambition and uncertainty, excitement and fear, hope and doubt</strong>, and you&apos;re learning that this is a tension to navigate rather than a problem to solve.</>],
  ['iv.', <>You sense there&apos;s a choice that is <strong>truly yours to make</strong>, but the noise of expectations, comparisons, and &ldquo;shoulds&rdquo; keeps drowning it out.</>],
  ['v.', <>You&apos;re tired of optimizing for the resume and want to <strong>remember what actually matters to you</strong>.</>],
  ['vi.', <>You want to walk forward with both <strong>clarity and heart</strong>, knowing the choice may be imperfect, but it will be yours.</>]
];

export default function ForYou() {
  return (
    <section id="foryou">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">An honest invitation</span>
          <h2>Choosing Well is for you if&hellip;</h2>
        </Reveal>
        <Reveal className="foryou-grid">
          {ITEMS.map(([mark, text], i) => (
            <div className="fy" key={i}>
              <div className="mark">{mark}</div>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
