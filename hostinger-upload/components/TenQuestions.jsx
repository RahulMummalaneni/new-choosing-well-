'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const QUESTIONS = [
  ['i.', 'What would I choose if I temporarily muted everyone else\'s opinions?', 'Give yourself a moment without the expectations, advice, and judgments of other people. Notice what choice becomes easier to hear.'],
  ['ii.', 'Am I doing this because I actually want it, or because I\'m trying to make someone else proud?', 'Separate your own desire from the wish to earn approval. Both may be present, but they do not ask you to move in the same direction.'],
  ['iii.', 'Deep down, do I already know the right answer and I\'m just looking for permission?', 'Sometimes clarity is already there beneath the doubt. Ask whether you need more information, or simply the courage to trust what you know.'],
  ['iv.', "What would I do right now if I wasn't terrified of failing?", 'Imagine fear is no longer making the decision for you. Let the answer show you what matters, even if you still need to take a careful next step.'],
  ['v.', 'What do I need to let go of so I can actually move forward?', 'Progress often asks us to release a plan, expectation, identity, or attachment that no longer fits the life ahead.'],
  ['vi.', 'Does this look perfect on paper but feel completely wrong in my gut?', 'Logic matters, but so does the information carried by your body. Pay attention when a choice appears right while something in you keeps resisting it.'],
  ['vii.', "Am I willing to deal with an uncomfortable conversation to do what's right for me?", 'The choice that honours you may require honesty with someone else. Consider whether avoiding discomfort is quietly deciding for you.'],
  ['viii.', 'If this choice goes wrong, will I still be glad I took the risk?', 'You cannot guarantee an outcome, but you can ask whether the attempt itself would be meaningful, clarifying, or worth remembering.'],
  ['ix.', 'What kind of person will I become if I follow this path?', 'Look beyond the immediate result. Each choice rehearses a way of living and helps shape the person you are becoming.'],
  ['x.', 'When I look back on this moment in ten years, what will I wish I had done?', 'Let your future perspective loosen the grip of today\'s noise. Ask what action, honesty, or brave beginning you will be grateful you chose.']
];

function QuestionItem({ num, q, body, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className={`q-item${isOpen ? ' open' : ''}`}>
      <button className="q-btn" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="qn">{num}</span>{q}
      </button>
      <div className="q-body" style={{ maxHeight: height }}>
        <p ref={bodyRef}>{body}</p>
      </div>
    </div>
  );
}

export default function TenQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="tq" id="questions">
      <div className="wrap">
        <Reveal className="tq-frame" as="div">
          <span className="eyebrow">Begin here</span>
          <h2>Ten Questions That Help You Choose Well</h2>
          <p className="sub">
            Because the right question often matters more than the quick answer. Return to
            these whenever you&apos;re standing at a crossroads.
          </p>
          <div>
            {QUESTIONS.map(([num, q, body], i) => (
              <QuestionItem
                key={num}
                num={num}
                q={q}
                body={body}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="tq-cta">
            <a className="btn btn-solid" href="/Ten%20Questions%20That%20Help%20You%20Choose%20Well%20-%20Brochure.pdf" download>
              Get the questions as a keepsake PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
