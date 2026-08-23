import { useState, useRef } from 'react';
import { visualProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function HotOnes() {
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
            <h1 className="nia-title">
              Hot Ones, <span style={{ color: 'var(--muted)' }}>data visualisation</span>
            </h1>
            <p className="nia-paragraph" style={{ marginTop: '24px' }}>
              First We Feast is a food-culture YouTube platform best known for Hot Ones, where celebrities answer
              interview questions while eating progressively spicier chicken wings. This data visualisation maps the
              top 10 most-watched episodes, comparing each guest’s sauce journey, Scoville levels, and reactions as
              the heat intensifies.
            </p>
            <p className="nia-paragraph" style={{ marginTop: '16px', color: 'var(--muted)' }}>
              Watch a compilation of the reactions.
            </p>
          </div>
          <div className="case-img-tile">
            <img src="/images/Visual Design/hot_ones.png" alt="Hot Ones graphic poster" className="image-slot" />
          </div>
        </div>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/Visual Design/7. Hot Ones, data visualisation/1.webp" alt="Top 10 videos table data" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/Visual Design/7. Hot Ones, data visualisation/2.webp" alt="Tags used in video description chart" className="image-slot" />
        </div>
      </div>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/Visual Design/7. Hot Ones, data visualisation/3.webp" alt="Celebrities featured in top videos infographic" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/Visual Design/7. Hot Ones, data visualisation/4.webp" alt="Scoville heat timeline chart" className="image-slot" />
        </div>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="vd-index-heading">Index</h2>
        <ul className="nia-index-list">
          {visualProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 6 ? 'is-muted' : ''}`}
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
