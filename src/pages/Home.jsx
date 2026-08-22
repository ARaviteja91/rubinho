import { useState } from 'react';
import { workProjects, INTRO } from '../data.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import { FadeLink } from '../fx.jsx';

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
          {workProjects.map((p, i) => {
            const gridStyle = {
              gridColumn: p.start ? `${p.start} / span ${p.span}` : `span ${p.span}`
            };
            const content = (
              <div className="grid-tile" style={{ aspectRatio: p.ratio }}>
                <img src={p.image} alt="" className="grid-image" />
              </div>
            );

            if (p.link) {
              return (
                <FadeLink
                  key={i}
                  to={p.link}
                  data-tile
                  onMouseEnter={() => setHovered(i)}
                  className="grid-item"
                  style={gridStyle}
                >
                  {content}
                </FadeLink>
              );
            }

            return (
              <a
                key={i}
                href="#work"
                data-tile
                onMouseEnter={() => setHovered(i)}
                onClick={(e) => e.preventDefault()}
                className="grid-item"
                style={gridStyle}
              >
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <section data-reveal className="contacts-section">
        <div className="contacts-inner">
          <div className="contacts-text-block">
            <div className="contacts-line">Rubinho Mulungo</div>
            <a href="mailto:info@rubinhomulungo.com" className="contacts-email">
              info@rubinhomulungo.com
            </a>
            <div className="contacts-line">Currently Based in Milan, Italy</div>
            <div className="contacts-line">
              Social: {' '}
              <a
                href="https://www.instagram.com/unfilteredstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-sublink"
              >
                Instagram
              </a>
              , {' '}
              <a
                href="https://www.linkedin.com/in/rubinhomulungo/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-sublink"
              >
                LinkedIn
              </a>
            </div>
            <div className="contacts-line">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="contacts-sublink"
              >
                Read CV/ Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}

