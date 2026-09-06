import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const brainstormImages = [
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/1.webp',
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/2.webp',
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/3.webp',
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/4.webp',
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/5.webp',
  '/images/UxCaseStudies/E_MONUMENTALE/Brainstorming Process/6.webp'
];

export default function Monumentale() {
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
          Monumentale, <span style={{ color: 'var(--muted)' }}>Website Redesign</span>
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
          {brainstormImages.concat(brainstormImages).map((src, i) => (
            <div key={i} className="filmstrip-item">
              <img src={src} alt="Brainstorming notes" className="image-slot" />
            </div>
          ))}
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          Cimitero Monumentale is one of Milan's most iconic historical landmarks. This website redesign project reimagines the digital
          experience for visitors, art lovers, and researchers by bringing its rich sculpture, architecture, and historical archives into an
          accessible, intuitive online space.
        </p>
      </section>

      <div data-reveal className="case-single-img">
        <img src="/images/UxCaseStudies/E_MONUMENTALE/1.webp" alt="Monumentale cover artwork" className="image-slot" />
      </div>

      <div data-reveal className="case-grid-2col" style={{ gridTemplateColumns: '25% 50% 25%',gap:0 }} >
        <div className="case-img-tile" style={{ gridColumn: '2/3' }} >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/2.gif" alt="Monumentale website layout" className="image-slot" style={{padding:'0 10px'}} />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/E_MONUMENTALE/3.webp" alt="Interactive monument map screen" className="image-slot" style={{ height: 'auto' }} />
        </div>
      </div>

      <section data-reveal className="nia-section" style={{ padding: ' 80px 24px' }} >
        <p className="nia-paragraph">
          The project was developed collaboratively around questions of accessibility, audience, content relevance, and how the digital experience could support visitors both on-site and off-site. The redesign focused on simplifying navigation, modernising the visual language, improving access to historical information, and creating clearer pathways between practical visitor needs and cultural discovery. I was responsible for the complete mobile experience, including the adaptation of the interface, navigation, and content hierarchy for
          smaller screens.
        </p>
      </section>
       

      <div data-reveal className="case-grid-2col" style={{gridTemplateColumns:'20% 50% 25%',gap:0}} >
        <div className="case-img-tile" style={{gridColumn:2}}>
          <img src="/images/UxCaseStudies/E_MONUMENTALE/5.gif" alt="Monuments archive gallery" className="image-slot" />
        </div>
        <div className="case-img-tile" style={{gridColumn:1/3}}>
          <img src="/images/UxCaseStudies/E_MONUMENTALE/4.gif" alt="Mobile responsive layout" className="image-slot" style={{paddingTop:'16px',width:'40%'}} />
        </div>
      </div>
      
      <div data-reveal className="case-grid-2col" >
        <div className="case-img-tile" >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/6.webp" alt="Monuments archive gallery" className="image-slot"    />
        </div>
        <div className="case-img-tile" >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/7.webp" alt="Mobile responsive layout" className="image-slot" style={{height:'auto'}} />
        </div>
      </div>
      
      <div data-reveal className="case-grid-2col" style={{gridTemplateColumns:'auto auto auto'}}  >
        <div className="case-img-tile" >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/8.gif" alt="Monuments archive gallery" className="image-slot" />
        </div>
        <div className="case-img-tile" >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/9.gif" alt="Mobile responsive layout" className="image-slot" style={{height:'auto'}} />
        </div>
        <div className="case-img-tile" >
          <img src="/images/UxCaseStudies/E_MONUMENTALE/10.gif" alt="Mobile responsive layout" className="image-slot" style={{height:'auto'}} />
        </div>
      </div>

      <section data-reveal className="nia-section" style={{padding:'80px 24px'}} >
        <p className="nia-paragraph">
          The final concept, “Discovering Secrets Beneath the Facade,” transforms the website into a digital companion for exploring the cemetery's architecture, monuments, and hidden histories. The mobile experience incorporates an augmented reality feature that reveals additional stories and contextual information around selected monuments, creating a more immersive tour while helping the Monumentale reach a broader audience and extend the experience beyond the physical site.
        </p>
      </section>

      <div className="nia-video-feature">
        <div className="nia-video-container">
          <iframe
            src="https://www.youtube.com/embed/TmlJ9SkmqXc?si=_0PLxaEgE8Kt_P4z"
            title="Monumentale YouTube video player"
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
                className={`nia-index-item ${i === 4 ? 'is-muted' : ''}`}
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
