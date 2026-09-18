import Reveal from './Reveal';

export default function Signup() {
  return (
    <section className="signup" id="signup">
      <Reveal className="wrap">
        <span className="eyebrow" style={{ color: '#D98CA0' }}>Stay close to the practice</span>
        <h2>One reflection. <em>Once a week.</em></h2>
        <p>
          Receive the reflections, the stories, and the questions worth sitting with, written
          to help you choose with both your head and your heart.
        </p>
        <a className="btn whatsapp-btn" href="https://whatsapp.com/channel/0029VbDREZd05MUjozcmsA1I" target="_blank" rel="noopener noreferrer">
          Join on WhatsApp Channel
        </a>
      </Reveal>
    </section>
  );
}
