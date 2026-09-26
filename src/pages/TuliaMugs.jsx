import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import FloatingPreview, { positionFloatingPreview } from '../components/FloatingPreview.jsx';

export default function TuliaMugs() {
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
      <Header active="visual" hoverLabel={label} />

      <section data-reveal className="nia-section" style={{ padding: '140px 0 0px 0' }}>
        <div className="case-grid-2col">
          <div className="case-img-tile" >
            <h1 className="nia-title">
              Mille Collines, <span style={{ color: 'var(--muted)' }}>Tulia mugs</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              The Tulia Mugs are a handcrafted ceramic collection created by Mille Collines in collaboration with Cape
              Town studio Mervyn Gers. I designed the interior graphics for the mugs, extending the collection’s
              playful visual language into the product itself. The designs complement Mille Collines’ signature prints
              while celebrating the handmade character of each piece.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/VisualDesign/3_MilleCollinesMugs/1.webp" alt="Tulia mugs pair" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-single-img" style={{padding:'10px'}}>
        <img src="/images/VisualDesign/3_MilleCollinesMugs/2.webp" alt="Group of handcrafted Tulia mugs" className="image-slot" />
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 3 ? 'is-muted' : ''}`}
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
        showLabel={false}
      />
    </div>
  );
}
