import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function DrivR() {
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

      <section data-reveal className="nia-section" style={{ padding: '140px 0 0px 0' }} >
        <div className="case-grid-2col">
          <div className="case-img-tile" >
            <h1 className="nia-title">
              DrivR, <span style={{ color: 'var(--muted)' }}>luxury car rental app</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              DrivR is a luxury car rental app designed to make accessing premium vehicles simple, intuitive, and
              seamless. The experience guides users through discovering available cars, exploring vehicle details,
              selecting rental options, and completing a booking through a refined mobile interface that reflects the
              exclusivity and ease associated with luxury mobility.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/8_DrivR/drivr.png" alt="DrivR luxury car artwork" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-single-img" style={{padding:'10px'}} >
        <img src="/images/VisualDesign/8_DrivR/drivR_1.png" alt="DrivR mobile splash screen mockup" className="image-slot" />
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 7 ? 'is-muted' : ''}`}
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
