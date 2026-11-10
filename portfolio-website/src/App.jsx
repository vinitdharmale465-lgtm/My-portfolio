import { useState, useEffect } from 'react';
import './App.css';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// TODO: replace with your real projects
const PROJECTS = [
  {
    title: 'Weather App',
    desc: 'Shows live weather for any city using a public API.',
    tech: ['React', 'API', 'CSS'],
    github: 'https://github.com/vinitdharmale465-lgtm',
    live: '',
  },
  {
    title: 'Portfolio Website',
    desc: 'This site: responsive, built with React and plain CSS.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/vinitdharmale465-lgtm',
    live: '',
  },
  {
    title: 'CI/CD Pipeline Demo',
    desc: 'A Docker image built and deployed automatically with GitHub Actions.',
    tech: ['Docker', 'GitHub Actions', 'Linux'],
    github: 'https://github.com/vinitdharmale465-lgtm',
    live: '',
  },
];

const SKILLS = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
  { group: 'Learning', items: ['Docker', 'AWS', 'CI/CD', 'Networking'] },
];

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem('introSeen');
    } catch {
      return true;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const finishIntro = () => {
    try {
      sessionStorage.setItem('introSeen', '1');
    } catch {
      /* storage unavailable, ignore */
    }
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(finishIntro, 2500);
    return () => clearTimeout(timer);
  }, [showIntro]);

  if (showIntro) {
    return (
      <div className="intro-screen">
        <div className="intro-content">
          <div className="intro-icon">&lt;/&gt;</div>
          <h1>
            Welcome to my
            <br />
            <span>portfolio</span>
          </h1>
          <p>Vinit Dharmale | Developer</p>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <button className="skip-btn" onClick={finishIntro}>
            Skip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="website">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Vinit.
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Home */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-heading">Hello, I'm Vinit</p>

          <h1>
            Frontend
            <br />
            <span>Developer</span>
          </h1>

          <h3>ENTC Student | Aspiring Cloud &amp; DevOps Engineer</h3>

          <p className="description">
            I build web applications and I'm learning cloud and DevOps tools to
            ship them properly. Take a look at what I've made so far.
          </p>

          <div className="chips">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="button-row">
            <a href="#portfolio" className="btn">
              My Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/vinitdharmale465-lgtm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {/* TODO: put your real LinkedIn profile URL here */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="glow"></div>

          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-top">● ● ●</div>
              <pre className="code">
                <code>
                  <span>const</span> developer = {'{'}
                  {'\n  '}name: "Vinit",
                  {'\n  '}skills: ["React", "JS"],
                  {'\n  '}passion: "Coding"
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
            <div className="laptop-base"></div>
          </div>

          <div className="floating-icon icon-one">&lt;/&gt;</div>
          <div className="floating-icon icon-two">⚙</div>
          <div className="floating-icon icon-three">✦</div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <h2>
            About <span>Me</span>
          </h2>
          <p>Turning ideas into working software</p>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h3>
              Hello, I'm <span>Vinit Dharmale</span>
            </h3>

            <p>
              I'm an Electronics and Telecommunication Engineering student
              interested in technology and software development.
            </p>
            <p>
              I enjoy building applications, solving coding problems and
              exploring modern tools.
            </p>
            <p>
              Right now I'm learning web development, cloud computing and
              DevOps, with the goal of building real-world projects.
            </p>

            <div className="button-row">
              <a href="/Vinit-CV.pdf" className="btn" download>
                Download CV
              </a>
              <a href="#portfolio" className="btn secondary">
                View Projects
              </a>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/profile.jpg"
              alt="Vinit Dharmale"
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-heading">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>What I use and what I'm learning</p>
        </div>

        <div className="card-grid">
          {SKILLS.map((s) => (
            <div className="card" key={s.group}>
              <h3>{s.group}</h3>
              <div className="chips">
                {s.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="portfolio">
        <div className="section-heading">
          <h2>
            My <span>Projects</span>
          </h2>
          <p>Things I've built while learning</p>
        </div>

        <div className="card-grid">
          {PROJECTS.map((p) => (
            <article className="card project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="button-row">
                <a
                  href={p.github}
                  className="btn secondary small"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    className="btn small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>Have an opportunity or a question? Send me an email.</p>
        </div>

        <a href="mailto:vinitdharmale465@gmail.com" className="btn">
          Send Email
        </a>
      </section>

      <footer>
        <p>© 2026 Vinit Dharmale. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
