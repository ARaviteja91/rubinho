import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function PunkAnime() {
  const [hovered, setHovered] = useState(null);
  const previewRef = useRef(null);
  const label =
    hovered != null
      ? visualProjects[hovered].title
        ? `${visualProjects[hovered].client} / ${visualProjects[hovered].title}`
        : visualProjects[hovered].client
      : '';

  const movePreview = (e) => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <Header active="visual" hoverLabel={label} />

      <section data-reveal className="nia-section">
        <div className="case-grid-2col">
          <div>
            <h1 className="nia-title">Punk Anime</h1>
            <div style={{ marginTop: '24px', fontSize: '1.25rem', color: 'var(--muted)', lineHeight: '1.8' }}>
              <p>Shot by me @unfilteredstudio</p>
              <p style={{ marginTop: '12px' }}>Directed/ styled by @alejandra.chuc</p>
              <p style={{ marginTop: '12px' }}>Models @e_lez_ @cristinadeasischan</p>
              <p style={{ marginTop: '12px' }}>MUA @o.dydymska</p>
            </div>
          </div>
          <div className="case-img-tile">
            <img src="/images/Visual Design/punk_anime.png" alt="Punk Anime photoshoot header" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/Visual Design/9. Punk Anime/1.webp" alt="Punk Anime photoshoot frame 1" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/Visual Design/9. Punk Anime/2.webp" alt="Punk Anime photoshoot frame 2" className="image-slot" />
        </div>
      </div>

      <div data-reveal className="case-single-img">
        <img src="/images/Visual Design/9. Punk Anime/3.webp" alt="Punk Anime photoshoot sofa wide shot" className="image-slot" />
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 8 ? 'is-muted' : ''}`}
              >
                <span className="index-client">{p.client}</span>
                {p.title ? <span className="index-title">, {p.title}</span> : ''}
              </FadeLink>
            </li>
          ))}
        </ul>
      </section>

      <Marquee border={false} />

      <div
        ref={previewRef}
        className="floating-preview"
        style={{
          opacity: hovered != null ? 1 : 0,
          transform: 'translate(-9999px,-9999px)'
        }}
      >
        <span className="image-placeholder-label">{label}</span>
      </div>
    </div>
  );
}
