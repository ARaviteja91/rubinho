import { useRef, useState } from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import { t, pageStyle } from '../theme';
import { uxProjects } from '../data/projects';

const FILMSTRIP = [
  { width: 180, ratio: '292/405', src: '/assets/nia-film-1.png' },
  { width: 180, ratio: '292/405', src: '/assets/nia-film-2.png' },
  { width: 468, ratio: '758/405', src: '/assets/nia-film-3.png' },
  { width: 180, ratio: '292/405', src: '/assets/nia-film-4.png' }
];

const para = { fontSize: 'clamp(20px, 4.5vw, 34px)', lineHeight: 1.35, fontWeight: 300, margin: 0, color: t.fg, textAlign: 'justify' };
const img = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

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
    <div style={{ ...pageStyle, position: 'relative' }}>
      {/* Hover zone to reveal header */}
      <div onMouseEnter={() => setHeaderVisible(true)} style={{ position: 'sticky', top: 0, height: 24, marginBottom: -24, zIndex: 60 }}></div>

      {/* Header (hidden until cursor reaches top) */}
      <div onMouseLeave={() => setHeaderVisible(false)} style={{ position: 'sticky', top: 0, zIndex: 50, overflow: 'hidden', maxHeight: headerVisible ? 120 : 0, transition: 'max-height 0.25s ease' }}>
        <Header active="ux" hoverLabel={hoveredP ? hoveredP.label : ''} sticky={false} />
      </div>

      {/* Case study title row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, padding: '64px 24px 0' }}>
        <h1 style={{ fontSize: 'clamp(24px, 6vw, 40px)', fontWeight: 300, letterSpacing: '-0.02em', margin: '-12px 0 0', color: t.fg }}>
          Nia, <span style={{ color: t.muted }}>AI for the Global South</span>
        </h1>
        <span style={{ fontSize: 'clamp(24px, 6vw, 40px)', fontWeight: 300, letterSpacing: '-0.02em', color: t.fg }}>Brainstorming Process</span>
      </div>

      {/* Filmstrip (auto-scrolling, clipped to 3/4 width, pauses on hover) */}
      <div className="rm-filmstrip" style={{ width: '75%', marginLeft: 'auto', overflow: 'hidden', padding: '40px 0 60px' }}>
        <div
          onMouseEnter={() => setFilmPaused(true)}
          onMouseLeave={() => setFilmPaused(false)}
          style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'filmScroll 22s linear infinite', animationPlayState: filmPaused ? 'paused' : 'running', padding: '0 12px' }}
        >
          {FILMSTRIP.concat(FILMSTRIP).map((f, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: f.width, aspectRatio: f.ratio, overflow: 'hidden' }}>
              <img src={f.src} alt="Brainstorming notes" style={img} />
            </div>
          ))}
        </div>
      </div>

      <section style={{ padding: '0 24px 60px' }}>
        <p style={para}>AI is often designed around the realities of wealthier, highly connected countries. This project investigates what happens when those systems are introduced into developing regions where users may face low digital literacy, unreliable internet, limited electricity, outdated devices, language barriers, and culturally misaligned interfaces.</p>
      </section>

      {/* Offset image pair */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 12, width: '75%', padding: '0 12px 60px' }}>
        <div style={{ flex: '1 1 220px', maxWidth: '29%', aspectRatio: '467.5/647.69', overflow: 'hidden' }}>
          <img src="/assets/nia-phone.png" alt="Phone in hand showing Nia app" style={img} />
        </div>
        <div style={{ flex: '2 1 400px', aspectRatio: '945/1154.89', overflow: 'hidden' }}>
          <img src="/assets/nia-landscape.png" alt="Landscape with Nia logo overlay" style={img} />
        </div>
      </div>

      <section style={{ padding: '0 24px 60px' }}>
        <p style={para}>The project combines academic research, global AI adoption analysis, case studies, user interviews, and a survey of 111 students from developing regions. Key findings revealed the need for simplified AI education, local-language support, offline access, transparent outputs, affordable tools, and culturally grounded design.</p>
      </section>

      {/* Gallery block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 12px 60px' }}>
        <div style={{ width: '100%', aspectRatio: '1900/1121', overflow: 'hidden' }}>
          <img src="/assets/nia-billboard.png" alt="Billboard: The Internet is Far, Nia is Here" style={img} />
        </div>
        <div style={{ width: '75%', aspectRatio: '1264/788', overflow: 'hidden' }}>
          <img src="/assets/nia-pavilion.png" alt="Solar-powered community pavilion" style={img} />
        </div>
        <div className="rm-gallery-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 12, width: 1184, height: 773 }}>
          <div style={{ flex: '0 0 auto', width: 'calc(50% - 6px)', aspectRatio: '945/1236', overflow: 'hidden' }}>
            <img src="/assets/nia-voice.png" alt="Phone showing Nia voice interface" style={img} />
          </div>
          <div style={{ flex: '0 0 auto', width: 'calc(50% - 6px)', aspectRatio: '16/9', overflow: 'hidden' }}>
            <img src="/assets/nia-charging.png" alt="Community members using solar charging stations" style={img} />
          </div>
        </div>
      </div>

      <section style={{ padding: '0 24px 60px' }}>
        <p style={para}>The final concept is a voice-first AI application designed for low-bandwidth environments. It uses spoken interaction, offline functionality, local data hubs, modular content, and human support to make AI more understandable, accessible, and trustworthy for communities across the Global South. Access the full paper.</p>
      </section>

      {/* Video feature */}
      <div style={{ width: '100%', aspectRatio: '1900/1121', backgroundColor: '#080804', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 80px' }}>
        <span style={{ fontSize: 'min(12vw, 150px)', fontWeight: 300, letterSpacing: '-0.02em', color: '#AEAEAE', textTransform: 'uppercase' }}>Video</span>
      </div>

      {/* Index */}
      <section id="index" style={{ borderTop: `1px solid ${t.rule}`, padding: '14px 24px 160px' }} onMouseLeave={() => setHovered(null)}>
        <h2 style={{ fontSize: 13, fontWeight: 500, margin: '0 0 12px' }}>Index</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {projects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview} style={{ display: 'flex', gap: 14, padding: '9px 0', borderBottom: `1px solid ${t.rule}`, cursor: 'default', fontSize: 20, opacity: i === 0 ? 0.4 : 1 }}>
              <span style={{ minWidth: 42, color: t.muted, fontVariantNumeric: 'tabular-nums' }}>{p.num}</span>
              <span style={{ color: t.muted }}>{p.client}</span>
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee />

      {/* Floating index preview */}
      <div ref={previewRef} style={{ position: 'fixed', top: 0, left: 0, width: 280, aspectRatio: '4/3', pointerEvents: 'none', zIndex: 80, opacity: hoveredP ? 1 : 0, transition: 'opacity 0.15s', backgroundColor: t.tile, backgroundImage: `repeating-linear-gradient(135deg, ${t.stripe} 0 1px, transparent 1px 9px)`, display: 'flex', alignItems: 'flex-end', transform: 'translate(-9999px,-9999px)' }}>
        <span style={{ fontFamily: "'Untitled Sans Light', sans-serif", fontSize: 10, letterSpacing: '0.04em', color: t.muted, padding: '8px 9px', textTransform: 'uppercase' }}>{hoveredP ? hoveredP.label : ''}</span>
      </div>
    </div>
  );
}
