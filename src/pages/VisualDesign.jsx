import { useState } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function VisualDesign() {
  const [hovered, setHovered] = useState(null);

  const label =
    hovered != null
      ? visualProjects[hovered].title
        ? `${visualProjects[hovered].client} / ${visualProjects[hovered].title}`
        : visualProjects[hovered].client
      : '';

  return (
    <div className="page-container">
      <Header active="visual" hoverLabel={label} />

      <section data-reveal className="vd-new-intro">
        <h1 className="vd-intro-text">
          A broader look at my creative practice. This collection brings together images, interfaces, systems and
          experiments that reflect how I think, create and explore visual language.
        </h1>
      </section>

      <section className="vd-new-grid-section" onMouseLeave={() => setHovered(null)}>
        <div className="vd-3col-grid">
          {/* Column 1 */}
          <div className="vd-column">
            <FadeLink
              to={visualProjects[0].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(0)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '1/1' }}>
                <img src={visualProjects[0].image} alt="Bloomy" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[3].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(3)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '4/5' }}>
                <img src={visualProjects[3].image} alt="Tulia Mugs" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[6].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(6)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '1/1' }}>
                <img src={visualProjects[6].image} alt="Hot Ones" className="grid-image" />
              </div>
            </FadeLink>
          </div>

          {/* Column 2 */}
          <div className="vd-column">
            <FadeLink
              to={visualProjects[1].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(1)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '16/9' }}>
                <img src={visualProjects[1].image} alt="NotePad" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[4].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(4)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '1/1' }}>
                <img src={visualProjects[4].image} alt="J.L PaPa" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[7].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(7)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '4/5' }}>
                <img src={visualProjects[7].image} alt="DrivR" className="grid-image" />
              </div>
            </FadeLink>
          </div>

          {/* Column 3 */}
          <div className="vd-column">
            <FadeLink
              to={visualProjects[2].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(2)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '4/5' }}>
                <img src={visualProjects[2].image} alt="Simbisi Sweater" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[5].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(5)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '16/9' }}>
                <img src={visualProjects[5].image} alt="IoT Interface" className="grid-image" />
              </div>
            </FadeLink>
            <FadeLink
              to={visualProjects[8].link}
              data-tile
              data-reveal
              onMouseEnter={() => setHovered(8)}
              className="grid-item"
            >
              <div className="grid-tile" style={{ aspectRatio: '4/5' }}>
                <img src={visualProjects[8].image} alt="Punk Anime" className="grid-image" />
              </div>
            </FadeLink>
          </div>
        </div>
      </section>

      <section data-reveal className="contacts-section">
        <div className="contacts-text-block">
          <a href="mailto:info@rubinhomulungo.com" className="contacts-sublink">
            info@rubinhomulungo.com
          </a>
          <div className="contacts-sublink">
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

      <Marquee border={false} />
    </div>
  );
}
