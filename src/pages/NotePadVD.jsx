import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function NotePadVD() {
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

      <section data-reveal className="nia-section" style={{ paddingBottom: '0px' }}>
        <div className="case-grid-2col">
          <div>
            <h1 className="nia-title">
              NotePad, <span style={{ color: 'var(--muted)' }}>period calendar</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              NotePad is a conceptual National Geographic calendar designed to address limited access to menstrual
              products in parts of Africa. Each month transforms into a reusable sanitary pad, combining functional
              design with patterns inspired by contemporary African art. The project uses design as a tool for dignity,
              accessibility, and menstrual awareness, earning a Silver Loerie Award in 2019.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/6_NotePadCalendar/1.webp" alt="NotePad 2019 Silver Loerie Award cover" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/VisualDesign/6_NotePadCalendar/2.gif" alt="Pattern artwork" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/VisualDesign/6_NotePadCalendar/1.webp" alt="Unfolded pad calendar animation" className="image-slot" />
        </div>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 1 ? 'is-muted' : ''}`}
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
