import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function IoTInterface() {
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
            <h1 className="nia-title">IoT home interface</h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              A smart-home tablet dashboard that centralises everyday control through quick actions, live camera feeds,
              automated presets, room-based navigation, and device categories. The interface helps residents manage
              security, lighting, climate, appliances, locks, shutters, and plant watering from one clear, responsive
              system.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/1_IoTInterface/1.webp" alt="Smart home dashboard UI" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-single-img">
        <img src="/images/VisualDesign/1_IoTInterface/2.webp" alt="iPad Pro smart home control mockup" className="image-slot" />
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 5 ? 'is-muted' : ''}`}
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
