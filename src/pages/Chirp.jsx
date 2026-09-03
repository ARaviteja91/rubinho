import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const brainstormImages = [
  '/images/UxCaseStudies/C_CHIRP/Brainstorming Process/1.webp',
  '/images/UxCaseStudies/C_CHIRP/Brainstorming Process/2.webp',
  '/images/UxCaseStudies/C_CHIRP/Brainstorming Process/3.webp',
  '/images/UxCaseStudies/C_CHIRP/Brainstorming Process/4.webp'
];

export default function Chirp() {
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);
  const previewRef = useRef(null);
  const label = hovered != null ? `${uxProjects[hovered].client} / ${uxProjects[hovered].title}` : '';

  const movePreview = (e) => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <Header active="ux" hoverLabel={label} />

      <div className="nia-title-row">
        <h1 className="nia-title">
          Chirp, <span style={{ color: 'var(--muted)' }}>Audiovisual Weather App</span>
        </h1>
        <span className="nia-subtitle nia-br">Brainstorming Process</span>
      </div>

      <div className="rm-filmstrip">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="filmstrip-inner"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {brainstormImages.concat(brainstormImages).concat(brainstormImages).map((src, i) => (
            <div key={i} className="filmstrip-item">
              <img src={src} alt="Brainstorming notes" className="image-slot" />
            </div>
          ))}
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          Chirp explores how weather information can be communicated through a more immersive and accessible digital experience. The
          application combines real-time forecasts, dynamic gradient visuals, and responsive soundscapes to help users understand changing
          conditions across the next 12 hours, 24 hours, and seven days.
        </p>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/C_CHIRP/1.webp" alt="Chirp brand cover" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/C_CHIRP/2.webp" alt="Sound catalog mobile screen" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The project was developed independently with a focus on creating a multi-sensory experience for visually impaired and
          hearing-impaired users. The design process explored how colour, movement, sound, and interface feedback could communicate
          weather conditions through multiple forms of interaction rather than relying entirely on conventional text and weather icons.
        </p>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/C_CHIRP/3.gif" alt="12 hour forecast screen" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/C_CHIRP/4.webp" alt="24 hour forecast screen" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The final concept is a weather application that visually and sonically responds to current and upcoming conditions. A
          progressing loading line and rhythmic ticking sound represent the passing of time, while changing gradients and atmospheric
          audio help users interpret shifts in weather throughout the forecast. As a solo project, I developed the concept, visual
          direction, interface, and interaction approach.
        </p>
      </section>

      <div data-reveal className="case-single-img">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/C_CHIRP/6.webp" alt="Weekly forecast screen" className="image-slot" style={{ width: '70%' }} />
        </div>
      </div>

      <div className="nia-video-feature">
        <div className="nia-video-container">
          <iframe
            src="https://www.youtube.com/embed/-99Kguw5nLY?si=D0IkercM4Eiwm05e"
            title="Chirp YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <ul className="nia-index-list">
          {uxProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 2 ? 'is-muted' : ''}`}
              >
                <span className="index-client">{p.client},</span>{' '}
                <span className="index-title">{p.title}</span>
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
        {hovered != null && uxProjects[hovered]?.image && (
          <img
            src={uxProjects[hovered].image}
            alt={label}
            className="floating-preview-image"
          />
        )}
        <span className="image-placeholder-label">{label}</span>
      </div>
    </div>
  );
}
