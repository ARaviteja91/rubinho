import { useRef, useState } from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import { uxProjects } from '../data/projects';

const FILMSTRIP = [
  { width: 180, ratio: '292/405', src: '/assets/nia-film-1.png' },
  { width: 180, ratio: '292/405', src: '/assets/nia-film-2.png' },
  { width: 468, ratio: '758/405', src: '/assets/nia-film-3.png' },
  { width: 180, ratio: '292/405', src: '/assets/nia-film-4.png' }
];

export default function NiaCaseStudy() {
  const [hovered, setHovered] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [filmPaused, setFilmPaused] = useState(false);
  const previewRef = useRef(null);

  const projects = uxProjects.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0'), label: `${p.client} / ${p.title}` }));
  const hoveredP = hovered != null ? projects[hovered] : null;

  const movePreview = (e) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      {/* Hover zone to reveal header */}
      <div onMouseEnter={() => setHeaderVisible(true)} className="header-hover-zone"></div>

      {/* Header (hidden until cursor reaches top) */}
      <div
        onMouseLeave={() => setHeaderVisible(false)}
        className="sticky-header-container"
        style={{ maxHeight: headerVisible ? 120 : 0 }}
      >
        <Header active="ux" hoverLabel={hoveredP ? hoveredP.label : ''} sticky={false} />
      </div>

      {/* Case study title row */}
      <div className="nia-title-row alt-padding">
        <h1 className="nia-title">
          Nia, <span style={{ color: 'var(--muted)' }}>AI for the Global South</span>
        </h1>
        <span className="nia-subtitle">Brainstorming Process</span>
      </div>

      {/* Filmstrip (auto-scrolling, clipped to 3/4 width, pauses on hover) */}
      <div className="rm-filmstrip">
        <div
          onMouseEnter={() => setFilmPaused(true)}
          onMouseLeave={() => setFilmPaused(false)}
          className="filmstrip-inner"
          style={{ animationPlayState: filmPaused ? 'paused' : 'running' }}
        >
          {FILMSTRIP.concat(FILMSTRIP).map((f, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: f.width, aspectRatio: f.ratio, overflow: 'hidden' }}>
              <img src={f.src} alt="Brainstorming notes" className="image-slot" />
            </div>
          ))}
        </div>
      </div>

      <section className="nia-section">
        <p className="nia-paragraph">AI is often designed around the realities of wealthier, highly connected countries. This project investigates what happens when those systems are introduced into developing regions where users may face low digital literacy, unreliable internet, limited electricity, outdated devices, language barriers, and culturally misaligned interfaces.</p>
      </section>

      {/* Offset image pair */}
      <div className="nia-offset-images">
        <div className="nia-phone-img-wrapper">
          <img src="/assets/nia-phone.png" alt="Phone in hand showing Nia app" className="image-slot" />
        </div>
        <div className="nia-landscape-img-wrapper">
          <img src="/assets/nia-landscape.png" alt="Landscape with Nia logo overlay" className="image-slot" />
        </div>
      </div>

      <section className="nia-section">
        <p className="nia-paragraph">The project combines academic research, global AI adoption analysis, case studies, user interviews, and a survey of 111 students from developing regions. Key findings revealed the need for simplified AI education, local-language support, offline access, transparent outputs, affordable tools, and culturally grounded design.</p>
      </section>

      {/* Gallery block */}
      <div className="nia-gallery-block">
        <div className="nia-billboard-wrapper">
          <img src="/assets/nia-billboard.png" alt="Billboard: The Internet is Far, Nia is Here" className="image-slot" />
        </div>
        <div className="nia-pavilion-wrapper">
          <img src="/assets/nia-pavilion.png" alt="Solar-powered community pavilion" className="image-slot" />
        </div>
        <div className="rm-gallery-row" style={{ width: 1184, height: 773 }}>
          <div className="nia-voice-img-wrapper">
            <img src="/assets/nia-voice.png" alt="Phone showing Nia voice interface" className="image-slot" />
          </div>
          <div className="nia-charging-img-wrapper">
            <img src="/assets/nia-charging.png" alt="Community members using solar charging stations" className="image-slot" />
          </div>
        </div>
      </div>

      <section className="nia-section">
        <p className="nia-paragraph">The final concept is a voice-first AI application designed for low-bandwidth environments. It uses spoken interaction, offline functionality, local data hubs, modular content, and human support to make AI more understandable, accessible, and trustworthy for communities across the Global South. Access the full paper.</p>
      </section>

      {/* Video feature */}
      <div className="nia-video-feature">
        <span className="nia-video-label">Video</span>
      </div>

      {/* Index */}
      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="nia-index-heading alt-font">Index</h2>
        <ul className="nia-index-list">
          {projects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview} className="nia-index-item" style={{ opacity: i === 0 ? 0.4 : 1 }}>
              <span className="nia-index-num">{p.num}</span>
              <span style={{ color: 'var(--muted)' }}>{p.client}</span>
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee />

      {/* Floating index preview */}
      <div
        ref={previewRef}
        className="floating-preview"
        style={{
          opacity: hoveredP ? 1 : 0,
          transform: 'translate(-9999px,-9999px)'
        }}
      >
        <span className="image-placeholder-label">{hoveredP ? hoveredP.label : ''}</span>
      </div>
    </div>
  );
}

