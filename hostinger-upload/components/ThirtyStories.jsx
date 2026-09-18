import Reveal from './Reveal';

export default function ThirtyStories() {
  return (
    <section className="alt stories">
      <Reveal className="wrap inner">
        <div className="num">30<small>Stories &middot; This year</small></div>
        <div>
          <span className="eyebrow">The new series</span>
          <h2>One north star. A whole life shaped by it.</h2>
          <p>
            This year, Choosing Well expands into thirty stories of people who chose one core
            thing, courage, craft, service, wonder, and let that single conscious choice shape
            who they became.
          </p>
          <p>
            Each story is a portrait of what it looks like to decide with both head and heart,
            and to keep deciding, year after year.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="/practice/stories">Follow the series</a>
            <a className="btn btn-ghost" href="#signup">Nominate a story</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
