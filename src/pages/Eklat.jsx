import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const brainstormImages = [
  '/images/UxCaseStudies/D_EKLAT/Brainstorming Process/1.webp',
  '/images/UxCaseStudies/D_EKLAT/Brainstorming Process/2.webp',
  '/images/UxCaseStudies/D_EKLAT/Brainstorming Process/3.webp',
  '/images/UxCaseStudies/D_EKLAT/Brainstorming Process/4.webp'
];

export default function Eklat() {
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
          Eklat, <span style={{ color: 'var(--muted)' }}>Fashion Brand</span>
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
          Eklat is a fashion brand built around timeless elegance, individuality, and empowerment. The project explores how this identity
          can be translated into an expressive digital shopping experience that communicates the brand's character while making its clothing,
          accessories, and collections easy to discover.
        </p>
      </section>

      <div data-reveal className="case-single-img" style={{ padding: '16px 28px' }}>
        <img src="/images/UxCaseStudies/D_EKLAT/1.gif" alt="Eklat brand banner" className="image-slot" />
      </div>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/2.gif" alt="Mobile app profile screen" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/3.webp" alt="Editorial campaign photo" className="image-slot" style={{ height: 'auto' }} />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The project was developed independently with a focus on art direction, brand identity, and UX/UI design. I defined the visual
          concept, typography, imagery, and creative direction, then translated the system into the website's structure and interface.
        </p>
      </section>

      <div data-reveal className="case-single-img-center">
        <img src="/images/UxCaseStudies/D_EKLAT/4.webp" alt="Billboard poster in nature" className="image-slot" style={{ width: '60%' }} />
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The design balanced immersive editorial storytelling with clear navigation and product browsing, creating a consistent journey
          between the homepage, clothing, accessories, and lookbook sections.
        </p>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/5.webp" alt="Editorial magazine spread left" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/6.webp" alt="Editorial magazine spread right" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The final concept is an e-commerce website that serves as the central expression of Eklat's identity. A cinematic homepage
          introduces the brand's world, while a minimal product grid and streamlined navigation support a clear and focused shopping
          experience.
        </p>
      </section>

      <div data-reveal className="case-grid-2col" style={{ gridTemplateColumns: '7fr 3fr' }} >
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/9.webp" alt="Branding & stationery layout" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/D_EKLAT/10.gif" alt="Product grid mobile view" className="image-slot" style={{ height: 'auto' }} />
        </div>
      </div>

      <div data-reveal className="case-grid-2col" style={{ gridTemplateColumns: '25fr 50fr 25fr' }} >
        <div className="case-img-tile" style={{ gridColumn: '2/3' }}>
          <img src="/images/UxCaseStudies/D_EKLAT/7.gif" alt="Social media feed" className="image-slot" />
        </div>
        <div className="case-img-tile" style={{ gridColumn: '3' }} >
          <img src="/images/UxCaseStudies/D_EKLAT/8.webp" alt="Packaging & brand tag" className="image-slot" style={{ height: 'auto' }} />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The wider art direction extends across social media, packaging, editorial design, and outdoor communication, creating a cohesive
          brand experience centred on timeless fashion and individuality. As a solo project, I led the art direction, branding, and website
          design.
        </p>
      </section>

      <div className="nia-video-feature">
        <div className="nia-video-container">
          <iframe
            src="https://www.youtube.com/embed/oqLsKK9fgfA?si=QhWtKrEqGr2W44xW"
            title="Eklat YouTube video player"
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
                className={`nia-index-item ${i === 3 ? 'is-muted' : ''}`}
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
