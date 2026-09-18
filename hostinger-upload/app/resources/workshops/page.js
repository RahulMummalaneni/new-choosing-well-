export const metadata = { title: 'Workshops — Choosing Well' };

const schoolSessions = [
  {
    title: 'Every Dream Has Multiple Pathways',
    format: 'Career guidance talk | Grades 8–10',
    description:
      'One exam, institution or setback does not, or rather should not, decide a student’s future. This session helps students distinguish between a dream and possible routes to it. They explore emerging fields, alternative education pathways and the skills and experiences that matter alongside marks. Students leave with three questions: What problems excite or challenge me? What subjects do I enjoy learning? What kind of person do I want to become?'
  },
  {
    title: 'From School to College',
    format: 'Hands-on workshop | Grades 9–12',
    description:
      'A guided workshop that helps students connect who they are with the choices ahead of them. Through individual and group activities, students examine their interests, strengths, preferred ways of working, subject choices and possible education pathways. They begin building a direction without being expected to have their entire future figured out.'
  },
  {
    title: 'Beyond Marks',
    format: 'Profile-building workshop | Grades 9–12',
    description:
      'Marks matter, but they are not the only evidence of a student’s ability. This workshop helps students understand how projects, competitions, reading, leadership, sports, creative work and community participation can develop real skills. The focus is not on collecting activities for a college application, but on doing meaningful work consistently that helps grow capability.'
  },
  {
    title: 'Navigating Your Child’s Future',
    format: 'Parent session | Grades 8–12',
    description:
      'Parents are making sense of changing careers, competitive exams, studying in India or abroad, costs, scholarships and the fear that their child may be falling behind. This session offers a clearer map of current education pathways and shows how parents can support exploration and early planning without adding to the pressure their child already feels.'
  }
];

const collegeSessions = [
  {
    title: 'Every Degree Has Multiple Pathways',
    format: 'Career possibilities talk | Undergraduate students',
    description:
      'A degree is just a starting point, not a final destination. This session shows students how one qualification can lead to different roles, industries and combinations of work. It introduces traditional, lateral, specialist and flexible career paths while helping students see possibilities beyond the most familiar campus choices.'
  },
  {
    title: 'From College to Career',
    format: 'Hands-on career workshop | Undergraduate and postgraduate students',
    description:
      'Students map four parts of their emerging career direction: their strengths, what they value in work, possible career paths, and their longer-term vision and immediate goals. They leave with a clearer understanding of the opportunities that may suit them, the skills they need to build and the next steps they can begin taking.',
    points: ['Their strengths', 'What they value in work', 'Possible career paths', 'Their longer-term vision and immediate goals']
  },
  {
    title: 'The First Step & What Comes Next',
    format: 'Early-career planning workshop | Final-year students and recent graduates',
    description:
      'Getting the first job is important. Knowing what to learn from it matters too. This session helps participants think about their first few years of work, including skill-building, career movement, communication, changing direction and making choices without treating every decision as permanent.'
  },
  {
    title: 'Who Am I? A Reflective Workshop',
    format: 'A guided workshop for senior-school students, college students, early-career professionals or small community groups',
    description:
      'Most introductions begin with a name, course, profession or role. But none of these tells the whole story. Who Am I? is a guided reflection on the experiences, influences, strengths, values, contradictions and choices that shape a person. Through writing, questions and conversation, participants look beyond the labels they usually use to describe themselves. The workshop does not promise one final answer. It helps each participant create a more honest personal map of:',
    points: ['What has shaped them', 'What matters to them', 'What they are still discovering', 'What they may be ready to choose next']
  }
];

const formats = [
  'School or college talks',
  'Interactive workshops',
  'Student and parent sessions',
  'Small-group conversations',
  'Faculty and counsellor sessions',
  'Café and community conversations'
];

function SessionList({ sessions }) {
  return (
    <div className="workshop-list">
      {sessions.map((session) => (
        <article className="workshop-item" key={session.title}>
          <p className="workshop-format">{session.format}</p>
          <h3>{session.title}</h3>
          <p>{session.description}</p>
          {session.points && (
            <ul>
              {session.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <section className="stub-page workshops-page">
      <div className="wrap">
        <a className="back-link" href="/">&larr; Back to Choosing Well</a>
        <span className="eyebrow">Talks &amp; Workshops</span>
        <h1>Conversations that open possibility.</h1>
        <p className="lede">
          Conversations that help students, families see more possibilities, understand themselves
          better and make thoughtful education and career choices. Each session is customised to
          the age of the students, the questions they are facing and the time available.
        </p>
        <div className="workshop-section">
          <span className="eyebrow">For Schools</span>
          <SessionList sessions={schoolSessions} />
        </div>
        <div className="workshop-section">
          <span className="eyebrow">For Colleges</span>
          <SessionList sessions={collegeSessions} />
        </div>
        <div className="workshop-section workshop-formats">
          <span className="eyebrow">Formats</span>
          <p>All the sessions can be customised as:</p>
          <ul>
            {formats.map((format) => <li key={format}>{format}</li>)}
          </ul>
          <p className="workshop-invitation">
            Tell me who the session is for and what you would like to take away. Together, we can
            shape the right conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
