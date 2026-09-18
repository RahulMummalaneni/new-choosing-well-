export const metadata = { title: 'The Reflections — Choosing Well' };

const reflections = [
  ['Choose to Help Others Win', 'https://www.linkedin.com/posts/nithyakishore_reflectandgrow-personalgrowth-lifeofchoice-activity-7202719616161255424-iOAr'],
  ['Choose to Trust', 'https://www.linkedin.com/posts/nithyakishore_choosetrust-reflectandgrow-personalgrowth-activity-7203040049645449216-P9Fw'],
  ['Choose Compassion', 'https://www.linkedin.com/posts/nithyakishore_choosecompassion-reflectandgrow-personalgrowth-activity-7203407549558132736-8LI8'],
  ['Choose Gratitude', 'https://www.linkedin.com/posts/nithyakishore_choosegratitude-reflectandgrow-personalgrowth-activity-7203755916528111617-8uWs'],
  ['Choose Resilience', 'https://www.linkedin.com/posts/nithyakishore_chooseresilience-reflectandgrow-personalgrowth-activity-7204095638949486592-X-71'],
  ['Choose to Share', 'https://www.linkedin.com/posts/nithyakishore_choosetoshare-reflectandgrow-personalgrowth-activity-7204446456697479169-u3V5'],
  ['Choose Positivity', 'https://www.linkedin.com/posts/nithyakishore_choosepositivity-reflectandgrow-personalgrowth-activity-7204795480021635073-vKcj'],
  ['Choose Laughter', 'https://www.linkedin.com/posts/nithyakishore_chooselaughter-reflectandgrow-personalgrowth-activity-7205165127409491968-9GkU'],
  ['Choose Balance', 'https://www.linkedin.com/posts/nithyakishore_choosebalance-reflectandgrow-personalgrowth-activity-7205542379540410368-LjuL'],
  ['Choose Determination', 'https://www.linkedin.com/posts/nithyakishore_choosedetermination-reflectandgrow-personalgrowth-activity-7205918008920219649-PSQd'],
  ['Choose Inner Success', 'https://www.linkedin.com/posts/nithyakishore_chooseinnersuccess-reflectandgrow-personalgrowth-activity-7206252581403205632-bzop'],
  ['Choose Mindfulness', 'https://www.linkedin.com/posts/nithyakishore_choosemindfulness-reflectandgrow-personalgrowth-activity-7206645168664379393-0ofn'],
  ['Choose to Speak', 'https://www.linkedin.com/posts/nithyakishore_choosetospeak-reflectandgrow-personalgrowth-activity-7206986807786233856-d9m4'],
  ['Choose Selfcare', 'https://www.linkedin.com/posts/nithyakishore_chooseselfcare-reflectandgrow-personalgrowth-activity-7207370317780971520-1YhC'],
  ['Choose to Defy', 'https://www.linkedin.com/posts/nithyakishore_choosetodefy-agewithgrace-reflectandgrow-activity-7207782541733367808-W3BJ'],
  ['Choose Joy', 'https://www.linkedin.com/posts/nithyakishore_choosejoy-celebratefathers-reflectandgrow-activity-7208148826694516736-KZSx'],
  ['Choose Empowerment', 'https://www.linkedin.com/posts/nithyakishore_chooseempowerment-reflectandgrow-personalgrowth-activity-7208421096281264129-ONI5'],
  ['Choose Courage', 'https://www.linkedin.com/posts/nithyakishore_choosecourage-reflectandgrow-personalgrowth-activity-7208830214544531456-ikpf'],
  ['Choose Action', 'https://www.linkedin.com/posts/nithyakishore_chooseaction-reflectandgrow-personalgrowth-activity-7209170589020733440-QHnu'],
  ['Choose to Learn', 'https://www.linkedin.com/posts/nithyakishore_choosetolearn-reflectandgrow-personalgrowth-activity-7209525422483492864-qqIH'],
  ['Choose Effort', 'https://www.linkedin.com/posts/nithyakishore_chooseeffort-reflectandgrow-personalgrowth-activity-7209915510744842240-a3x6'],
  ['Choose Friendship', 'https://www.linkedin.com/posts/nithyakishore_choosefriendship-reflectandgrow-personalgrowth-activity-7210227532015521792-JBwQ'],
  ['Choose Kindness', 'https://www.linkedin.com/posts/nithyakishore_choosekindness-reflectandgrow-personalgrowth-activity-7210621469762932736-WY77'],
  ['Choose Humility', 'https://www.linkedin.com/posts/nithyakishore_choosehumility-reflectandgrow-personalgrowth-activity-7211014053199065089-My2a'],
  ['Choose Simplicity', 'https://www.linkedin.com/posts/nithyakishore_choosesimplicity-reflectandgrow-personalgrowth-activity-7211404319051460608-UZkG'],
  ['Choose to Listen', 'https://www.linkedin.com/posts/nithyakishore_choosetolisten-reflectandgrow-personalgrowth-activity-7211710288679591936-C7i6'],
  ['Choose Spontaneity', 'https://www.linkedin.com/posts/nithyakishore_choosespontaneity-reflectandgrow-personalgrowth-activity-7212068335687983104-P4y3'],
  ['Choose to Adapt', 'https://www.linkedin.com/posts/nithyakishore_choosetoadapt-beflexible-reflectandgrow-activity-7212402385611079680-vtWW'],
  ['Choose to Wonder', 'https://www.linkedin.com/posts/nithyakishore_choosetowonder-reflectandgrow-personalgrowth-activity-7212792873920913408-Ygqs'],
  ['Choose Hope', 'https://www.linkedin.com/posts/nithyakishore_choosehope-reflectandgrow-personalgrowth-activity-7213163084033507329-Yux0']
];

export default function Page() {
  return (
    <section className="stub-page">
      <div className="wrap">
        <a className="back-link" href="/">&larr; Back to Choosing Well</a>
        <span className="eyebrow">The Practice</span>
        <h1>The Reflections</h1>
        <p className="lede">
          When your own words struggle to make their way through, you sometimes have to borrow
          the wisdom of others. In 2024, that became one quote, one choice, and its reflection,
          one day at a time for 30 days.
        </p>
        <p className="page-copy">
          The original writings on LinkedIn did not carry an image. Here you will find a
          collection of nature-inspired quote cards, numbered for the journey. Enjoy them as is,
          or read the corresponding reflections on LinkedIn.
        </p>
        <ol className="reflection-list">
          {reflections.map(([title, href], index) => (
            <li key={title}>
              <img
                className="reflection-image"
                src={`/images/reflections/${index + 1}.jpg`}
                alt={`${title} reflection card`}
                loading="lazy"
              />
              <a className="reflection-link" href={href} target="_blank" rel="noreferrer">
                Read on LinkedIn
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
