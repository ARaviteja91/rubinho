import { useState } from 'react';
import { workProjects, INTRO } from '../data.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${workProjects[hovered].client} / ${workProjects[hovered].title}` : '';
  return (
    <div className="page-container">
      <Header hoverLabel={label} />
      <section data-reveal className="hero-section">
        <p className="hero-text">{INTRO}</p>
      </section>
      <section className="grid-section" onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid">
          {workProjects.map((p, i) => (
            <a
              key={i}
              href="#work"
              data-tile
              onMouseEnter={() => setHovered(i)}
              onClick={(e) => e.preventDefault()}
              className="grid-item"
              style={{ gridColumn: `span ${p.span}` }}
            >
              <div className="grid-tile" style={{ aspectRatio: p.ratio }} />
            </a>
          ))}
        </div>
      </section>
      <section data-reveal className="contacts-section">
        <div className="contacts-inner">
          <div>
            <div className="contacts-heading">Rubinho Mulungo</div>
            <a href="mailto:info@rubinhomulungo.com" className="contacts-email">
              info@rubinhomulungo.com
            </a>
            <div className="contacts-heading">Currently Based in Milan, Italy</div>
            <div className="contacts-row">
              <a
                href="https://www.instagram.com/unfilteredstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-link"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/rubinhomulungo/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-link"
              >
                LinkedIn
              </a>
            </div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="contacts-link"
            >
              Read CV / Resume
            </a>
          </div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}

