import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import FloatingPreview, { positionFloatingPreview } from '../components/FloatingPreview.jsx';

export default function JLPaPa() {
  const [hovered, setHovered] = useState(null);
  const previewRef = useRef(null);
  const label =
    hovered != null
      ? visualProjects[hovered].title
        ? `${visualProjects[hovered].client} / ${visualProjects[hovered].title}`
        : visualProjects[hovered].client
      : '';

  const movePreview = (e) => {
    positionFloatingPreview(previewRef.current, e);
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <Header active="visual" />

      <section data-reveal className="nia-section" style={{ padding: '140px 0 0px 0' }}>
        <div className="case-grid-2col">
          <div className="case-img-tile" >
            <h1 className="nia-title">
              J.L PaPa, <span style={{ color: 'var(--muted)' }}>blade catalogue</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              This catalogue showcases a curated range of knives for Just Like Papa, a premium outdoor adventure brand.
              Each product is presented through stories of how “Papa” tested it in real conditions, reflecting the
              brand’s hands-on approach to quality. The concept turns product performance into narrative, reinforcing
              trust, craftsmanship, and purpose.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/2_JLPaPaBladeCatalogue/1.webp" alt="J.L PaPa Blade Collection cover" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-single-img">
        <img src="/images/VisualDesign/2_JLPaPaBladeCatalogue/2.webp" alt="Blade catalogue spreads mockup" className="image-slot" />
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 4 ? 'is-muted' : ''}`}
              >
                <span className="index-client">{p.client}</span>
                {p.title ? <span className="index-title">, {p.title}</span> : ''}
              </FadeLink>
            </li>
          ))}
        </ul>
      </section>

      <Marquee border={false} />

      <FloatingPreview
        ref={previewRef}
        project={hovered != null ? visualProjects[hovered] : null}
        label={label}
      />
    </div>
  );
}
