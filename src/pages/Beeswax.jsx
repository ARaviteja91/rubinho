import { useRef, useState } from 'react';
import { workProjects } from '../data.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

export default function Beeswax() {
  const [hovered, setHovered] = useState(null);
  const previewRef = useRef(null);
  const label = hovered != null ? `${workProjects[hovered].client} / ${workProjects[hovered].title}` : '';
  const movePreview = (e) => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <Header active="visual" hoverLabel={label} />
      <section data-reveal className="project-desc-section">
        <div className="project-desc-text-wrapper">
          <p className="project-desc-text">
            Beeswax is a visual identity and packaging project celebrating the warmth, versatility, and natural
            origins of beeswax. The design combines organic forms, earthy colours, and refined typography to
            communicate craftsmanship and sustainability. The project includes brand direction, packaging,
            illustration, and supporting promotional materials.
          </p>
        </div>
        <div className="project-desc-image-wrapper">
          <ImageSlot label="Hero shot" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>
      <section data-reveal className="project-media-section">
        <div className="project-media-wrapper-left">
          <ImageSlot label="Packaging photo" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="project-media-wrapper-right">
          <ImageSlot label="Video: gun3.mp4" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>
      
      {/* Index replacing Contacts */}
      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="nia-index-heading">Index</h2>
        <ul className="nia-index-list">
          {workProjects.map((p, i) => (
            <li
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseMove={movePreview}
              className="nia-index-item"
              style={{ opacity: i === 0 ? 0.4 : 1 }}
            >
              <span style={{ color: 'var(--muted)' }}>{p.client}</span>
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee />

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

