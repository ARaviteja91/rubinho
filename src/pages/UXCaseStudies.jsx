import { useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function UXCaseStudies() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${uxProjects[hovered].client} / ${uxProjects[hovered].title}` : '';
  const tile = (p) => (
    <div className="grid-tile" style={{ aspectRatio: p.ratio }} />
  );
  return (
    <div className="page-container">
      <Header active="ux" hoverLabel={label} />
      <section className="ux-grid-section" onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid">
          {uxProjects.map((p, i) =>
            i === 0 ? (
              <FadeLink
                key={i}
                to="/ux-case-studies/nia"
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
                href="#index"
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
      <section data-reveal className="ux-footer-section">
        <div className="info-contacts-list">
          <div>
            <a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a>
          </div>
          <div>Currently Based in Milan, Italy</div>
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
          <div>Read CV / Resume</div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}

