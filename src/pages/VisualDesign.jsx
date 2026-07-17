import { useState } from 'react';
import { workProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function VisualDesign() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${workProjects[hovered].client} / ${workProjects[hovered].title}` : '';
  const tile = (p) => (
    <div className="grid-tile" style={{ aspectRatio: p.ratio }} />
  );
  return (
    <div className="page-container">
      <Header active="visual" hoverLabel={label} />
      <section data-reveal className="vd-intro-section">
        <p className="large-paragraph">
          What we love doing, what we love seeing, and what we are pleased to share. Unfinished, provocative,
          expressive, thoughtful… a collection of pictures fueling the creative minds at Unknown Untitled office
          and abroad.
        </p>
      </section>
      <section className="vd-grid-section" onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid">
          {workProjects.map((p, i) =>
            i === 0 ? (
              <FadeLink
                key={i}
                to="/visual-design/beeswax"
                data-tile="true"
                data-reveal="true"
                onMouseEnter={() => setHovered(i)}
                className="grid-item"
                style={{ gridColumn: `span ${p.span}` }}
              >
                {tile(p)}
              </FadeLink>
            ) : (
              <a
                key={i}
                href="#"
                data-tile
                data-reveal
                onMouseEnter={() => setHovered(i)}
                onClick={(e) => e.preventDefault()}
                className="grid-item"
                style={{ gridColumn: `span ${p.span}` }}
              >
                {tile(p)}
              </a>
            )
          )}
        </div>
      </section>
      <section data-reveal className="vd-footer-section">
        <div className="info-contacts-list">
          <div>
            <a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a>
          </div>
          <div>
            Social:{' '}
            <a
              href="https://www.instagram.com/unfilteredstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-link"
            >
              Instagram
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/rubinhomulungo/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
}

