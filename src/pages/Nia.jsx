import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const brainstormImages = [
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/1.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/2.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/3.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/4.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/5.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/6.webp',
  '/images/UxCaseStudies/A _NIA/Brainstorming Process/7.webp'
];

export default function Nia() {
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
          Nia, <span style={{ color: 'var(--muted)' }}>AI for the Global South</span>
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
          AI is often designed around the realities of wealthier, highly connected countries. This project
          investigates what happens when those systems are introduced into developing regions where users may face
          low digital literacy, unreliable internet, limited electricity, outdated devices, language barriers, and
          culturally misaligned interfaces.
        </p>
      </section>

      <div data-reveal className="nia-offset-images">
        <div className="nia-phone-img-wrapper">
          <img src="/images/UxCaseStudies/A _NIA/1.webp" alt="Phone in hand showing Nia app" className="image-slot" />
        </div>
        <div className="nia-landscape-img-wrapper">
          <img src="/images/UxCaseStudies/A _NIA/2.webp" alt="Landscape with Nia logo overlay" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The project combines academic research, global AI adoption analysis, case studies, user interviews, and a
          survey of 111 students from developing regions. Key findings revealed the need for simplified AI
          education, local-language support, offline access, transparent outputs, affordable tools, and culturally
          grounded design.
        </p>
      </section>

      <div data-reveal className="nia-gallery-block">
        <div className="nia-billboard-wrapper">
          <img src="/images/UxCaseStudies/A _NIA/3.webp" alt="Billboard: The Internet is Far, Nia is Here" className="image-slot" />
        </div>
        <div className="nia-pavilion-wrapper">
          <img src="/images/UxCaseStudies/A _NIA/4.webp" alt="Solar-powered community pavilion" className="image-slot" />
        </div>
        <div className="rm-gallery-row">
          <div className="nia-voice-img-wrapper">
            <img src="/images/UxCaseStudies/A _NIA/5.webp" alt="Phone showing Nia voice interface" className="image-slot" />
          </div>
          <div className="nia-charging-img-wrapper">
            <img src="/images/UxCaseStudies/A _NIA/6.webp" alt="Community members using solar charging stations" className="image-slot" />
          </div>
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The final concept is a voice-first AI application designed for low-bandwidth environments. It uses spoken
          interaction, offline functionality, local data hubs, modular content, and human support to make AI more
          understandable, accessible, and trustworthy for communities across the Global South. Access the full paper.
        </p>
      </section>

      <div className="nia-video-feature">
        <div className="nia-video-container">
          <iframe
            src="https://www.youtube.com/embed/0S_urQD-YAI?si=gJdAyPON8F4zNbMV"
            title="Nia YouTube video player"
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
                className={`nia-index-item ${i === 0 ? 'is-muted' : ''}`}
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
