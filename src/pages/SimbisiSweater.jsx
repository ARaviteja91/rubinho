import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function SimbisiSweater() {
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
          <div className="case-img-tile" >
            <h1 className="nia-title">
              Mille Collines, <span style={{ color: 'var(--muted)' }}>simbisi sweater</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              The Simbisi Sweater is a signature Mille Collines piece that combines a minimal silhouette with bold
              printed detailing. For an earlier version of the sweater, I designed the print featured across the
              sleeves, creating a graphic element that brought character and contrast to the garment while reflecting
              the brand’s contemporary African design language.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/4_MilleCollinesSimbisiSweater/1.webp" alt="Two models wearing Simbisi Sweater" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/VisualDesign/4_MilleCollinesSimbisiSweater/2.webp" alt="Yellow printed sleeve detail" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/VisualDesign/4_MilleCollinesSimbisiSweater/3.webp" alt="Black printed sleeve detail" className="image-slot" />
        </div>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 2 ? 'is-muted' : ''}`}
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
