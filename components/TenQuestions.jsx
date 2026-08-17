'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const QUESTIONS = [
  ['i.', 'If fear had a smaller vote, what would I choose?', 'Fear deserves a seat at the table, and it keeps taking the head of it. Notice what remains of the decision once fear speaks last instead of first.'],
  ['ii.', 'Whose ambition am I carrying, mine, or one I borrowed?', 'Some dreams are inherited, absorbed from parents, peers, or a version of success we never examined. Naming the owner of an ambition is the first step to choosing freely.'],
  ['iii.', 'What am I holding on to, and what is it time to release?', 'Every choice forward asks something of the past. Sit with what stays and what goes, gently, before the deadline decides for you.'],
  ['iv.', 'What does my head know that my heart resists, and the reverse?', 'Clear thinking and an open heart each see something the other misses. Write both columns honestly, and read them side by side.'],
  ['v.', 'Which choice would I defend, even if it disappoints someone I love?', 'A choice you can stand behind in a hard conversation is usually one that is genuinely yours.'],
  ['vi.', 'What is the quiet option the noise keeps drowning out?', 'Expectations, comparisons, and \u201cshoulds\u201d are loud. Somewhere beneath them, a quieter possibility has been waiting patiently to be heard.'],
  ['vii.', 'If this choice shapes who I become, who am I choosing to be?', 'We think we are choosing colleges, cities, and careers. Underneath, we are always choosing a self.'],
  ['viii.', 'What would I choose if I trusted myself a little more?', 'Often the decision is already made, and what is missing is permission. Practice extending yourself a little more trust, and see what surfaces.'],
  ['ix.', 'What would make this choice mine, even if it turns out imperfect?', 'Choosing well is different from choosing perfectly. A conscious, imperfect choice teaches you more than a flawless one made on autopilot.'],
  ['x.', 'Ten years from now, which version of this story would I be proud to tell?', 'Zoom out. The crossroads that feels overwhelming today becomes a single chapter in a longer story you are the author of.']
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
            <a className="btn btn-solid" href="/files/Ten-Questions-Choosing-Well.pdf" download>
              Get the questions as a keepsake PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
