import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/">
              <span className="b1">Nithya Kishore</span>
              <span className="b2">Choosing Well</span>
            </Link>
            <p className="foot-note">
              &ldquo;Choosing well was never about choosing perfectly. It is about choosing
              consciously, and walking forward with both your head and your heart.&rdquo;
            </p>
          </div>
          <div>
            <h4>The Practice</h4>
            <ul>
              <li><Link href="/practice/reflections">The Reflections</Link></li>
              <li><Link href="/practice/conversations">The Conversations</Link></li>
              <li><Link href="/practice/stories">The Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="/#questions">The Ten Questions</a></li>
              <li><Link href="/resources/frameworks">Workshops &amp; Frameworks</Link></li>
              <li><a href="/#signup">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 Nithya Kishore</span>
          <span>Seeker &amp; Strategist · Founder, Knowmatrix</span>
        </div>
      </div>
    </footer>
  );
}
