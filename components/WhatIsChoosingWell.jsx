import Reveal from './Reveal';

export default function WhatIsChoosingWell() {
  return (
    <section className="alt" id="what">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The idea</span>
          <h2>What is <em>Choosing Well?</em></h2>
        </Reveal>
        <Reveal className="story">
          <div className="big">
            Imagine making life&apos;s biggest decisions, what to study, where to go, who to
            become, from a place of <strong>clarity</strong>, <strong>courage</strong>, and{' '}
            <strong>heart</strong>, instead of fear, pressure, or borrowed ambition.
          </div>
          <div className="story-right">
            <p>
              Choosing Well began as a quiet daily practice, reflections I returned to each
              June on the ideas that shape a life. Wonder. Courage. Resilience. Joy. Over time,
              I noticed something. These qualities are never simple. Each carries its own
              shadow, and we spend our lives oscillating between opposites.
            </p>
            <p>
              That insight grew into a Conversation Series exploring the balance between
              opposing feelings. This year, it is expanding into{' '}
              <strong>thirty stories</strong> of people who chose one core thing as their
              north star, and let it shape who they became.
            </p>
            <p>
              <strong>Choosing Well is about choosing consciously.</strong> Knowing yourself,
              holding the tensions, and walking forward with both your head and your heart,
              even when the choice is imperfect. Especially then.
            </p>
          </div>
        </Reveal>
        <Reveal className="evolution">
          <div className="evo">
            <span className="stage">Where it began</span>
            <h3>The Reflections</h3>
            <p>A June practice of returning, each year, to the ideas that quietly shape a life, and writing honestly about them.</p>
          </div>
          <div className="evo">
            <span className="stage">Where it grew</span>
            <h3>The Conversations</h3>
            <p>A series exploring the balance between opposing feelings, with people brave enough to hold both at once.</p>
          </div>
          <div className="evo">
            <span className="stage">Where it is going</span>
            <h3>The Stories</h3>
            <p>Thirty portraits of people who chose one north star, and let that single conscious choice shape who they became.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
