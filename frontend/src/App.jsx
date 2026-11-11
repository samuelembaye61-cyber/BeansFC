import { useEffect, useState } from 'react'
import './App.css'

const stories = [
  {
    number: '01',
    category: 'CLUB NEWS',
    title: 'A new season, a shared goal.',
    description: 'A sample announcement about coming together for a new season.',
  },
  {
    number: '02',
    category: 'MATCH REPORT',
    title: 'A matchday to remember.',
    description: 'A sample match report celebrating teamwork on and off the pitch.',
  },
  {
    number: '03',
    category: 'COMMUNITY',
    title: 'The people behind the club.',
    description: 'A sample story about the community that makes a club feel like home.',
  },
]

const navigation = [
  ['Home', 'home'],
  ['Squad', 'squad'],
  ['News', 'news'],
  ['League', 'league'],
  ['Sponsors', 'sponsors'],
]

const seasons = {
  '2026': {
    fixtures: [
      { date: 'May 16', opponent: 'Riverside FC', venue: 'Home', result: 'Upcoming' },
      { date: 'May 23', opponent: 'City Athletic', venue: 'Away', result: 'Upcoming' },
    ],
    results: [{ date: 'May 9', opponent: 'Valley United', venue: 'Home', result: '2 – 1' }],
    record: ['1', '1', '0', '0'],
  },
  '2025': {
    fixtures: [],
    results: [
      { date: 'Oct 18', opponent: 'Riverside FC', venue: 'Away', result: '1 – 1' },
      { date: 'Oct 11', opponent: 'City Athletic', venue: 'Home', result: '2 – 0' },
    ],
    record: ['2', '1', '1', '0'],
  },
}

function ClubMark({ light = false }) {
  return (
    <span className={`club-mark${light ? ' club-mark-light' : ''}`} aria-hidden="true">
      <span>B</span>
      <small>FC</small>
    </span>
  )
}

function Home() {
  return (
    <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> THE HOME OF BEANSFC</p>
            <h1 id="hero-title">TOGETHER,<br />WE <em>PLAY.</em></h1>
            <p className="hero-description">
              A love for the game. A club for the community. This is where we come together.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#/join">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#/squad">MEET THE SQUAD <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-bottom">
              <span>ROOTED IN COMMUNITY</span>
              <span>POWERED BY FOOTBALL</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="pitch pitch-outer"><div className="pitch-circle" /><div className="pitch-line" /></div>
            <span className="art-label art-label-top">TEAM PHOTO<br />PLACEHOLDER</span>
            <span className="art-number">FC</span>
            <div className="crest">
              <div className="crest-inner">
                <span>BEANS</span>
                <strong>B</strong>
                <span>FOOTBALL CLUB</span>
              </div>
            </div>
            <span className="art-label art-label-bottom">PLAY WITH PRIDE<br />STAND TOGETHER</span>
            <span className="art-coordinate">GREEN. WHITE. TOGETHER.</span>
          </div>
        </section>

        <div className="ticker" aria-label="Our club values">
          <span>FOOTBALL FOR EVERYONE</span><span className="ticker-star" aria-hidden="true">✳</span>
          <span>ONE CLUB, ONE COMMUNITY</span><span className="ticker-star" aria-hidden="true">✳</span>
          <span>THIS IS BEANSFC</span><span className="ticker-star" aria-hidden="true">✳</span>
          <span>FOOTBALL FOR EVERYONE</span>
        </div>

        <section className="intro section-wrap" id="club">
          <div>
            <p className="section-label"><span>01</span> GET TO KNOW US</p>
            <h2>IT STARTS<br />WITH <em>US.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">Football brings us together.<br />Community makes us a club.</p>
            <p>BeansFC is about more than the final score. It&apos;s about showing up for each other, sharing the game we love, and making everyone feel at home.</p>
            <a className="inline-link" href="#/squad">MEET THE SQUAD <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="matchday section-wrap" id="matchday">
          <div className="matchday-heading">
            <div>
              <p className="section-label"><span>02</span> THE MATCHDAY EXPERIENCE</p>
              <h2>BETTER<br /><em>TOGETHER.</em></h2>
            </div>
            <p>From the first whistle to the final moment, there&apos;s nothing quite like matchday.</p>
          </div>
          <div className="match-card">
            <div className="match-card-top"><span>MATCHDAY AT BEANSFC</span><span>THE BEAUTIFUL GAME <span aria-hidden="true">↗</span></span></div>
            <div className="match-card-content">
              <div className="match-emblem"><ClubMark light /><span>BEANSFC</span></div>
              <div className="match-message"><span>SAMPLE NEXT MATCH · MAY 16</span><strong>BEANSFC<br /><em>VS RIVERSIDE FC</em></strong><p className="match-detail">HOME · EXAMPLE FIXTURE</p></div>
              <div className="match-ball" aria-hidden="true">✳</div>
            </div>
            <div className="match-card-bottom"><span>HOME IS WHERE THE GAME IS</span><span>GREEN &amp; WHITE FOREVER</span></div>
          </div>
          <a className="inline-link" href="#/league">VIEW FIXTURES &amp; RESULTS <span aria-hidden="true">↗</span></a>
          <p className="sample-note">Example fixture shown for design purposes only.</p>
        </section>

        <section className="stories section-wrap" id="stories">
          <div className="section-heading">
            <div><p className="section-label"><span>03</span> THE BEANSFC WAY</p><h2>OUR <em>STORIES.</em></h2></div>
            <p>It&apos;s the people and the moments that make the club.</p>
          </div>
          <div className="story-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.number}>
                <div className={`story-art story-art-${story.number}`} aria-hidden="true">
                  <span>{story.number}</span><strong>{story.number === '01' ? 'B' : story.number === '02' ? '✳' : 'FC'}</strong>
                </div>
                <p className="story-category">{story.category} <span> / BEANSFC</span></p>
                <h3><a href={`#/news/${story.number}`}>{story.title} <span aria-hidden="true">↗</span></a></h3>
                <p>{story.description}</p>
              </article>
            ))}
          </div>
          <a className="inline-link" href="#/news">VIEW ALL NEWS <span aria-hidden="true">↗</span></a>
        </section>

        <section className="instagram section-wrap">
          <div className="section-heading">
            <div><p className="section-label"><span>04</span> FROM THE SIDELINES</p><h2>FOLLOW THE <em>JOURNEY.</em></h2></div>
            <p>A place for three Instagram highlights. Real posts and links can be added after the team review.</p>
          </div>
          <InstagramPreview />
        </section>

        <section className="community" id="community">
          <p className="eyebrow"><span className="status-dot" /> THERE&apos;S A PLACE FOR YOU HERE</p>
          <h2>THIS IS YOUR<br /><em>CLUB, TOO.</em></h2>
          <p>Players, supporters, neighbors, friends. However you love the game, you belong here.</p>
          <a className="button button-light" href="#/join">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
        </section>
    </>
  )
}

function InstagramPreview() {
  return (
    <div className="instagram-grid">
      {['MATCHDAY', 'THE SQUAD', 'OUR COMMUNITY'].map((label, index) => (
        <div className={`instagram-tile instagram-tile-${index + 1}`} key={label}>
          <span>INSTAGRAM PLACEHOLDER</span><strong>{label}</strong><small>POST &amp; LINK TO BE ADDED</small>
        </div>
      ))}
    </div>
  )
}

function PageIntro({ label, title, highlight, description }) {
  return (
    <section className="page-intro">
      <p className="eyebrow"><span className="status-dot" /> {label}</p>
      <h1>{title} <em>{highlight}</em></h1>
      <p>{description}</p>
    </section>
  )
}

function Squad() {
  const players = [
    { number: '01', position: 'GOALKEEPER' },
    { number: '04', position: 'DEFENDER' },
    { number: '08', position: 'MIDFIELDER' },
    { number: '10', position: 'FORWARD' },
  ]
  return (
    <>
      <PageIntro label="THE PEOPLE BEHIND THE BADGE" title="MEET THE" highlight="SQUAD." description="One team, many stories. Meet the people who bring BeansFC to life." />
      <section className="page-content section-wrap">
        <div className="section-heading"><div><p className="section-label">THE TEAM / EXAMPLE PROFILES</p><h2>OUR <em>PLAYERS.</em></h2></div><p>Player names, photos, and bios shown here are placeholders for the team to complete.</p></div>
        <div className="player-grid">
          {players.map((player) => (
            <article className="player-card" key={player.number}>
              <div className="player-photo"><span>PLAYER PHOTO PLACEHOLDER</span><strong>{player.number}</strong></div>
              <p className="story-category">{player.position} / #{player.number}</p>
              <h3>Player name</h3><p>A short player bio or quote can go here.</p>
            </article>
          ))}
        </div>
        <div className="page-callout"><div><h2>READY TO <em>PLAY?</em></h2><p>There could be a place for you in the squad.</p></div><a className="button button-green" href="#/join">JOIN THE CLUB <span aria-hidden="true">↗</span></a></div>
      </section>
    </>
  )
}

function News({ articleId }) {
  const [category, setCategory] = useState('ALL')
  const selected = stories.find((story) => story.number === articleId)
  if (articleId) {
    return selected ? (
      <>
        <PageIntro label={selected.category} title="OUR" highlight="STORIES." description="A sample article layout for the team to review." />
        <article className="article-content section-wrap">
          <a className="inline-link" href="#/news">← BACK TO NEWS</a>
          <p className="story-category">{selected.category} / SAMPLE ARTICLE</p>
          <h2>{selected.title}</h2>
          <div className={`story-art story-art-${selected.number}`} aria-hidden="true"><strong>{selected.number === '01' ? 'B' : selected.number === '02' ? '✳' : 'FC'}</strong></div>
          <p>{selected.description}</p>
          <p>This is example content to demonstrate how a full article could look. The club can replace it with an approved story and photos.</p>
        </article>
      </>
    ) : <NotFound />
  }
  const filtered = category === 'ALL' ? stories : stories.filter((story) => story.category === category)
  return (
    <>
      <PageIntro label="THE LATEST FROM BEANSFC" title="OUR" highlight="STORIES." description="The moments, people, and stories that bring our club together." />
      <section className="page-content section-wrap">
        <div className="section-heading"><div><p className="section-label">LATEST / SAMPLE STORIES</p><h2>CLUB <em>NEWS.</em></h2></div><p>Explore example stories and filter them by category.</p></div>
        <div className="filter-buttons" aria-label="Filter news by category">
          {['ALL', 'CLUB NEWS', 'MATCH REPORT', 'COMMUNITY'].map((item) => <button type="button" className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>{item}</button>)}
        </div>
        <div className="story-grid">
          {filtered.map((story) => (
            <article className="story-card" key={story.number}>
              <div className={`story-art story-art-${story.number}`} aria-hidden="true"><span>{story.number}</span><strong>{story.number === '01' ? 'B' : story.number === '02' ? '✳' : 'FC'}</strong></div>
              <p className="story-category">{story.category} / SAMPLE</p><h3><a href={`#/news/${story.number}`}>{story.title} <span aria-hidden="true">↗</span></a></h3><p>{story.description}</p>
            </article>
          ))}
        </div>
        <div className="social-section"><h2>FROM THE <em>SIDELINES.</em></h2><p>Instagram highlights are placeholders until the club provides posts.</p><InstagramPreview /></div>
      </section>
    </>
  )
}

function MatchList({ title, matches }) {
  return (
    <div className="fixture-group">
      <h3>{title}</h3>
      {matches.length ? matches.map((match) => (
        <div className="fixture-row" key={`${match.date}-${match.opponent}`}>
          <span>{match.date}</span><strong>BeansFC vs {match.opponent}</strong><span>{match.venue}</span><b>{match.result}</b>
        </div>
      )) : <p className="empty-message">No example fixtures for this season.</p>}
    </div>
  )
}

function League() {
  const [season, setSeason] = useState('2026')
  const selected = seasons[season]
  return (
    <>
      <PageIntro label="MATCHDAY / SEASON HUB" title="THE" highlight="LEAGUE." description="Fixtures, results, and the story of our season, all in one place." />
      <section className="page-content section-wrap">
        <div className="section-heading"><div><p className="section-label">MATCHDAY / EXAMPLE DATA</p><h2>FOLLOW THE <em>GAME.</em></h2></div><p>These fixtures and results are fictional examples, not the actual club schedule.</p></div>
        <div className="league-filters">
          <label>LEAGUE<select defaultValue="example"><option value="example">Example League</option></select></label>
          <label>SEASON<select value={season} onChange={(event) => setSeason(event.target.value)}><option value="2026">2026</option><option value="2025">2025</option></select></label>
        </div>
        <div className="record-grid">{['PLAYED', 'WON', 'DRAWN', 'LOST'].map((label, index) => <div key={label}><strong>{selected.record[index]}</strong><span>{label}</span></div>)}</div>
        <MatchList title="UPCOMING FIXTURES" matches={selected.fixtures} />
        <MatchList title="RECENT RESULTS" matches={selected.results} />
        <p className="sample-note">The official league standings link will be added when the club provides it.</p>
      </section>
    </>
  )
}

function DemoForm({ kind }) {
  const [submitted, setSubmitted] = useState(false)
  const sponsor = kind === 'sponsor'
  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }
  return (
    <form className="demo-form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
      <p className="form-notice">DEMO ONLY: Please use sample details. This form does not send or save information.</p>
      {sponsor && <label>Business name<input name="business" required placeholder="Example business" /></label>}
      <label>{sponsor ? 'Contact name' : 'Your name'}<input name="name" required placeholder="Example name" /></label>
      <label>Email address<input name="email" type="email" required placeholder="name@example.com" /></label>
      <label>Phone number<input name="phone" type="tel" required placeholder="Example phone number" /></label>
      {sponsor ? <label>Interested in<select name="tier" required defaultValue=""><option value="" disabled>Select a tier</option><option>Diamond</option><option>Platinum</option><option>Gold</option><option>Not sure yet</option></select></label> : <label>Preferred position<select name="position" defaultValue=""><option value="">Select a position (optional)</option><option>Goalkeeper</option><option>Defender</option><option>Midfielder</option><option>Forward</option></select></label>}
      <label>Message <span>(optional)</span><textarea name="message" rows="4" placeholder="Tell us a little more" /></label>
      <button className="button button-green" type="submit">{sponsor ? 'PREVIEW INQUIRY' : 'PREVIEW JOIN REQUEST'} <span aria-hidden="true">↗</span></button>
      {submitted && <p className="form-feedback" role="status">Demo complete. Nothing was sent or saved.</p>}
    </form>
  )
}

function Sponsors() {
  return (
    <>
      <PageIntro label="STRONGER TOGETHER" title="OUR" highlight="PARTNERS." description="The people and businesses who help make the game possible." />
      <section className="page-content section-wrap">
        <div className="section-heading"><div><p className="section-label">OUR PARTNERS / SAMPLE TIERS</p><h2>SUPPORT THE <em>CLUB.</em></h2></div><p>These are placeholder sponsor cards. Real partners and benefits will be added after club approval.</p></div>
        <div className="sponsor-grid">
          {['DIAMOND', 'PLATINUM', 'GOLD'].map((tier) => <article className="sponsor-card" key={tier}><p className="story-category">{tier} PARTNER</p><div className="sponsor-logo">LOGO<br />PLACEHOLDER</div><h3>Partner name</h3><p>A short description and website link can be added here.</p></article>)}
        </div>
        <div className="form-layout"><div><p className="section-label">PARTNER WITH BEANSFC</p><h2>LET&apos;S GROW <em>TOGETHER.</em></h2><p>Interested in supporting local football? This sample inquiry form shows how future partners could get in touch.</p><p>Partnership benefits and packages will be added once approved by the club.</p></div><DemoForm kind="sponsor" /></div>
      </section>
    </>
  )
}

function Join() {
  return (
    <>
      <PageIntro label="FIND YOUR PLACE" title="JOIN THE" highlight="CLUB." description="Whether you are new to the game or ready for your next chapter, there is a place for you here." />
      <section className="page-content section-wrap">
        <div className="form-layout"><div><p className="section-label">PLAY WITH PRIDE</p><h2>YOUR NEXT MOVE <em>STARTS HERE.</em></h2><p>This sample form shows how interested players could contact BeansFC. The team can decide what information to collect before it goes live.</p><p>For now, nothing you enter is sent to the club.</p></div><DemoForm kind="join" /></div>
      </section>
    </>
  )
}

function NotFound() {
  return <section className="page-content section-wrap"><h1>PAGE NOT <em>FOUND.</em></h1><p>This sample page is not available.</p><a className="inline-link" href="#/home">RETURN HOME →</a></section>
}

function App() {
  const [route, setRoute] = useState(() => window.location.hash.startsWith('#/') ? window.location.hash.slice(2) || 'home' : 'home')
  useEffect(() => {
    function updateRoute() {
      setRoute(window.location.hash.startsWith('#/') ? window.location.hash.slice(2) || 'home' : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])
  const [page, articleId] = route.split('/')
  let content
  if (page === 'home' && !articleId) content = <Home />
  else if (page === 'squad' && !articleId) content = <Squad />
  else if (page === 'news') content = <News key={articleId || 'list'} articleId={articleId} />
  else if (page === 'league' && !articleId) content = <League />
  else if (page === 'sponsors' && !articleId) content = <Sponsors />
  else if (page === 'join' && !articleId) content = <Join />
  else content = <NotFound />

  return (
    <>
      <div className="announcement"><span>BEANSFC WEBSITE CONCEPT</span><span>DEMO ONLY · EXAMPLE CONTENT</span></div>
      <header className="site-header">
        <a className="brand" href="#/home" aria-label="BeansFC home"><ClubMark /><span>BEANS<span>FC</span><small>FOOTBALL CLUB</small></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([label, path]) => <a href={`#/${path}`} aria-current={page === path ? 'page' : undefined} key={path}>{label}</a>)}
        </nav>
        <a className="header-link" href="#/join">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
      </header>
      <main>{content}</main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#/home" aria-label="BeansFC home"><ClubMark light /><span>BEANS<span>FC</span><small>FOOTBALL CLUB</small></span></a>
        <nav className="footer-nav" aria-label="Footer navigation">{navigation.map(([label, path]) => <a href={`#/${path}`} key={path}>{label}</a>)}</nav>
        <p>WEBSITE CONCEPT · EXAMPLE CONTENT</p>
        <a href="#/join">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  )
}

export default App
