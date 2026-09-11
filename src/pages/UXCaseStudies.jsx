import { useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function UXCaseStudies() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${uxProjects[hovered].client} / ${uxProjects[hovered].title}` : '';

  return (
    <div className="page-container">
      <Header active="ux" hoverLabel={label} />
      <section className="ux-grid-section" onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid">
          {uxProjects.map((p, i) => {
            const gridStyle = {
              gridColumn: p.start ? `${p.start} / span ${p.span}` : `span ${p.span}`
            };
            const content = (
              <div className="grid-tile" style={{ aspectRatio: p.ratio }}>
                <img src={p.image} alt={p.title} className="grid-image" />
              </div>
            );

            return (
              <FadeLink
                key={i}
                to={p.link}
                data-tile
                data-reveal
                onMouseEnter={() => setHovered(i)}
                className="grid-item"
                style={gridStyle}
              >
                {content}
              </FadeLink>
            );
          })}
        </div>
      </section>
      <section data-reveal className="contacts-section">
        <div className="contacts-text-block">
          <div className="contacts-heading">Rubinho Mulungo</div>
          <a href="mailto:info@rubinhomulungo.com" className="contacts-sublink">
            info@rubinhomulungo.com
          </a>
          <div className="contacts-sublink">Currently Based in Milan, Italy</div>
          <div className="contacts-sublink">
            Social:{' '}
            <a
              href="https://www.instagram.com/rubinhomulungo"
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
          <div className="contacts-sublink">
            <a href="#" onClick={(e) => e.preventDefault()} className="border-link">
              Read CV/ Resume
            </a>
          </div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}
