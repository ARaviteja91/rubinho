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

      <section data-reveal className="nia-section" style={{ padding: '140px 0 0px 0' }}>
        <div className="case-grid-2col">
          <div>
            <h1 className="nia-title">Punk Anime</h1>
            <div style={{ marginTop: '32px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 300, lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>
                Shot by me <span style={{ color: 'var(--muted)' }}>@unfilteredstudio</span>
              </p>
              <p style={{ margin: '16px 0 0', color: 'var(--muted)' }}>
                Directed/ styled by @alejandra.chuc
              </p>
              <p style={{ margin: '24px 0 0', color: 'var(--muted)' }}>
                Models @e_lez_
              </p>
              <p style={{ margin: '4px 0 0', color: 'var(--muted)' }}>
                @cristinadeasischan
              </p>
              <p style={{ margin: '24px 0 0', color: 'var(--muted)' }}>
                MUA @o.dydymska
              </p>
            </div>
          </div>
          <div className="case-img-tile">
            <img
              src="/images/VisualDesign/9_PunkAnime/punk_anime.png"
              alt="Punk Anime photoshoot header"
              className="image-slot"
            />
          </div>
        </div>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img
            src="/images/VisualDesign/9_PunkAnime/pka_1.png"
            alt="Punk Anime photoshoot frame 1"
            className="image-slot"
          />
        </div>
        <div className="case-img-tile">
          <img
            src="/images/VisualDesign/9_PunkAnime/pka_2.png"
            alt="Punk Anime photoshoot frame 2"
            className="image-slot"
          />
        </div>
      </div>

      <div data-reveal className="case-single-img">
        <img
          src="/images/VisualDesign/9_PunkAnime/pka_3.png"
          alt="Punk Anime photoshoot sofa wide shot"
          className="image-slot"
        />
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
        {hovered != null && visualProjects[hovered]?.image && (
          <img
            src={visualProjects[hovered].image}
            alt={label}
            className="floating-preview-image"
          />
        )}
        <span className="image-placeholder-label">{label}</span>
      </div>
    </div>
  );
}
