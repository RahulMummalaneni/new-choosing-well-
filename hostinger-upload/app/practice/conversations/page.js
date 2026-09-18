export const metadata = { title: 'The Conversations — Choosing Well' };

const posts = [
  ["When Choosing Isn't Always Clear, but Always Present", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7334813465607372800-aAJl'],
  ["What would your voice say if it didn't need approval first?", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7335175845021458432-hjnz'],
  ["What would happen if you stopped questioning whether you're enough?", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7335500488139821056-j8oG'],
  ["What if clarity isn't something you find, but something you feel?", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7335885540963078145-oY4C'],
  ["What if slowing down isn't a waste of time?", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7336225267121561602-5EWi'],
  ["What do you do when someone else's win feels louder than your own?", 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7336599226161709060-bJOq'],
  ["What if guilt isn't there to punish us, but to remind us of what truly matters?", 'https://www.linkedin.com/posts/nithyakishore_presence-guilt-growth-activity-7337082238565609472-LSba'],
  ['A week of Self & Identity, held together', 'https://www.linkedin.com/posts/nithyakishore_choosewell-mundanemusingsmatter-reflectandgrow-activity-7337319967668752384-bNv4'],
  ['When fear feels safer than not knowing, how do we still move forward?', 'https://www.linkedin.com/posts/nithyakishore_fear-publicspeaking-caution-activity-7337805772837269507-3Jat'],
  ['When do we really feel ready?', 'https://www.linkedin.com/posts/nithyakishore_later-now-careercoaching-activity-7338195767985090561-wTzb'],
  ["When something feels right, but we're not sure if it makes sense?", 'https://www.linkedin.com/posts/nithyakishore_head-heart-permission-activity-7338558086711824384-Fvc3'],
  ['When hope itself feels hopeless to hold, what helps you lift it again?', 'https://www.linkedin.com/posts/nithyakishore_determination-hope-choosewell-activity-7338822393819222017-ScSY'],
  ["When the outcome doesn't match your effort, does your intention still matter?", 'https://www.linkedin.com/posts/nithyakishore_outcome-mountaineering-transformation-activity-7339282181132906496-LP8g'],
  ['When chasing your goals starts draining you, is it still ambition?', 'https://www.linkedin.com/posts/nithyakishore_northstar-fatigue-ambition-activity-7339620589332025345-4Mtd'],
  ['A week of Desire & Direction, held together', 'https://www.linkedin.com/posts/nithyakishore_desire-direction-head-activity-7339849136059371520-Tc0I'],
  ["How do I begin when I know I can't finish?", 'https://www.linkedin.com/posts/nithyakishore_perfection-momentum-progress-activity-7340230397072457730-FARU'],
  ['How do I know if walking away is the braver choice?', 'https://www.linkedin.com/posts/nithyakishore_risk-responsibility-maturity-activity-7340592783474245634-NxMj'],
  ["How do I trust a decision I can't fully explain?", 'https://www.linkedin.com/posts/nithyakishore_chess-strategy-intuition-activity-7340940866234064897-fdN8'],
  ["How do I choose peace without pretending nothing ever broke?", 'https://www.linkedin.com/posts/nithyakishore_closure-peace-resilience-activity-7341298694673092609-Ee-k'],
  ["How do I move forward when I don't know what's ahead?", 'https://www.linkedin.com/posts/nithyakishore_moana-control-chaos-activity-7341662100089368576-PXJr'],
  ['How do I choose between what grounds me and what grows me?', 'https://www.linkedin.com/posts/nithyakishore_stability-possibility-nature-activity-7342031031845179393-oPd2'],
  ['A week of Decisions & Change, held together', 'https://www.linkedin.com/posts/nithyakishore_potential-expectation-choosewell-activity-7342394446283448320-A7EV'],
  ['Where did we forget how to play?', 'https://www.linkedin.com/posts/nithyakishore_ramayana-productivity-wonder-activity-7342744462197985282-IZS3'],
  ["Where do you turn for courage, when the world assumes you've got it all figured out?", 'https://www.linkedin.com/posts/nithyakishore_confidence-courage-vulnerability-activity-7343181579499839489-GHM2'],
  ['Where do rules end and freedom begin?', 'https://www.linkedin.com/posts/nithyakishore_rules-freedom-discipline-activity-7343631782371651585-PsgR'],
  ['Where do we belong, and could we choose not to be seen?', 'https://www.linkedin.com/posts/nithyakishore_visibility-privacy-belonging-activity-7343847573226405888-0rNO'],
  ['Where do I draw the line between leading alone and building together?', 'https://www.linkedin.com/posts/nithyakishore_solopreneurs-autonomy-dabbawalas-activity-7344205652623335424-xEWg'],
  ['Where do I end, and where does what I serve begin?', 'https://www.linkedin.com/posts/nithyakishore_purpose-strength-self-activity-7344578314373689344-gRLd'],
  ['A week of People & Possibility, held together', 'https://www.linkedin.com/posts/nithyakishore_balance-wonder-strength-activity-7344933522341621760-IuoN'],
  ['The Afterthought That Matters Most', 'https://www.linkedin.com/posts/nithyakishore_choices-change-win-activity-7345281177081008129-BVLc']
];
export default function Page() {
  return (
    <section className="stub-page">
      <div className="wrap">
        <a className="back-link" href="/">&larr; Back to Choosing Well</a>
        <span className="eyebrow">The Practice</span>
        <h1>The Conversations</h1>
        <p className="lede">
          A series exploring the balance between opposing feelings, with people brave enough
          to hold both at once. Read the series in order on LinkedIn.
        </p>
        <ol className="conversation-post-list">
          {posts.map(([label, href], index) => (
            <li key={href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
              <a href={href} target="_blank" rel="noreferrer">Read on LinkedIn</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
