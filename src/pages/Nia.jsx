import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const filmstripBase = [
  { width: 180, ratio: '292/405', src: '/images/brainstorm-1.png' },
  { width: 180, ratio: '292/405', src: '/images/brainstorm-2.png' },
  { width: 468, ratio: '758/405', src: '/images/brainstorm-3.png' },
  { width: 180, ratio: '292/405', src: '/images/brainstorm-4.png' }
];
const filmstrip = [...filmstripBase, ...filmstripBase];

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
        <span className="nia-subtitle">Brainstorming Process</span>
      </div>

      <div className="rm-filmstrip">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="filmstrip-inner"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {filmstrip.map((f, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: f.width, aspectRatio: f.ratio, overflow: 'hidden' }}>
              <img src={f.src} alt="Brainstorming notes" className="image-slot" />
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
          <img src="/images/nia-phone.png" alt="Phone in hand showing Nia app" className="image-slot" />
        </div>
        <div className="nia-landscape-img-wrapper">
          <img src="/images/nia-landscape.png" alt="Landscape with Nia logo overlay" className="image-slot" />
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
          <img src="/images/nia-billboard.png" alt="Billboard: The Internet is Far, Nia is Here" className="image-slot" />
        </div>
        <div className="nia-pavilion-wrapper">
          <img src="/images/nia-pavilion.png" alt="Solar-powered community pavilion" className="image-slot" />
        </div>
        <div className="rm-gallery-row">
          <div className="nia-voice-img-wrapper">
            <img src="/images/nia-voice.png" alt="Phone showing Nia voice interface" className="image-slot" />
          </div>
          <div className="nia-charging-img-wrapper">
            <img src="/images/nia-charging.png" alt="Community members using solar charging stations" className="image-slot" />
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
        <span className="nia-video-label">Video</span>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <h2 className="nia-index-heading">Index</h2>
        <ul className="nia-index-list">
          {uxProjects.map((p, i) => (
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

