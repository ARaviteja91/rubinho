import { useRef, useState } from 'react';
import { pageStyle, T } from '../theme.js';
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
const P = { fontSize: 'clamp(20px, 4.5vw, 34px)', lineHeight: 1.35, fontWeight: 300, margin: 0 };

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
    <div style={{ ...pageStyle, position: 'relative' }}>
      <Header active="ux" hoverLabel={label} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, padding: '160px 24px 0' }}>
        <h1 style={{ fontSize: 'clamp(24px, 6vw, 40px)', fontWeight: 300, letterSpacing: '-0.02em', margin: '-12px 0 0' }}>
          Nia, <span style={{ color: T.muted }}>AI for the Global South</span>
        </h1>
        <span style={{ fontSize: 'clamp(24px, 6vw, 40px)', fontWeight: 300, letterSpacing: '-0.02em' }}>Brainstorming Process</span>
      </div>

      <div className="rm-filmstrip" style={{ width: '75%', marginLeft: 'auto', overflow: 'hidden', padding: '40px 0 60px' }}>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
             style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'filmScroll 22s linear infinite', animationPlayState: paused ? 'paused' : 'running', padding: '0 12px' }}>
          {filmstrip.map((f, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: f.width, aspectRatio: f.ratio, overflow: 'hidden' }}>
              <img src={f.src} alt="Brainstorming notes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>

      <section data-reveal style={{ padding: '0 24px 60px' }}>
        <p style={P}>
          AI is often designed around the realities of wealthier, highly connected countries. This project
          investigates what happens when those systems are introduced into developing regions where users may face
          low digital literacy, unreliable internet, limited electricity, outdated devices, language barriers, and
          culturally misaligned interfaces.
        </p>
      </section>

      <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 12, width: '75%', padding: '0 12px 60px' }}>
        <div style={{ flex: '1 1 220px', maxWidth: '29%', aspectRatio: '467.5/647.69', overflow: 'hidden' }}>
          <img src="/images/nia-phone.png" alt="Phone in hand showing Nia app" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ flex: '2 1 400px', aspectRatio: '945/1154.89', overflow: 'hidden' }}>
          <img src="/images/nia-landscape.png" alt="Landscape with Nia logo overlay" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <section data-reveal style={{ padding: '0 24px 60px' }}>
        <p style={P}>
          The project combines academic research, global AI adoption analysis, case studies, user interviews, and a
          survey of 111 students from developing regions. Key findings revealed the need for simplified AI
          education, local-language support, offline access, transparent outputs, affordable tools, and culturally
          grounded design.
        </p>
      </section>

      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 12px 60px' }}>
        <div style={{ width: '100%', aspectRatio: '1900/1121', overflow: 'hidden' }}>
          <img src="/images/nia-billboard.png" alt="Billboard: The Internet is Far, Nia is Here" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ width: '75%', aspectRatio: '1264/788', overflow: 'hidden' }}>
          <img src="/images/nia-pavilion.png" alt="Solar-powered community pavilion" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="rm-gallery-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 12, width: '100%' }}>
          <div style={{ flex: '0 0 auto', width: 'calc(50% - 6px)', aspectRatio: '945/1236', overflow: 'hidden' }}>
            <img src="/images/nia-voice.png" alt="Phone showing Nia voice interface" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: '0 0 auto', width: 'calc(50% - 6px)', aspectRatio: '16/9', overflow: 'hidden' }}>
            <img src="/images/nia-charging.png" alt="Community members using solar charging stations" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      <section data-reveal style={{ padding: '0 24px 60px' }}>
        <p style={P}>
          The final concept is a voice-first AI application designed for low-bandwidth environments. It uses spoken
          interaction, offline functionality, local data hubs, modular content, and human support to make AI more
          understandable, accessible, and trustworthy for communities across the Global South. Access the full paper.
        </p>
      </section>

      <div style={{ width: '100%', aspectRatio: '1900/1121', backgroundColor: '#080804', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 80px' }}>
        <span style={{ fontSize: 'min(12vw, 150px)', fontWeight: 300, letterSpacing: '-0.02em', color: '#AEAEAE', textTransform: 'uppercase' }}>Video</span>
      </div>

      <section id="index" style={{ borderTop: `1px solid ${T.rule}`, padding: '14px 24px 160px' }} onMouseLeave={() => setHovered(null)}>
        <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 300, margin: '0 0 12px' }}>Index</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {uxProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}
                style={{ display: 'flex', gap: 14, padding: '9px 0', borderBottom: `1px solid ${T.rule}`, cursor: 'default', fontSize: 20, opacity: i === 0 ? 0.4 : 1 }}>
              <span style={{ color: T.muted }}>{p.client}</span>
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee />

      <div ref={previewRef}
           style={{
             position: 'fixed', top: 0, left: 0, width: 280, aspectRatio: '4/3', pointerEvents: 'none', zIndex: 80,
             opacity: hovered != null ? 1 : 0, transition: 'opacity .15s',
             backgroundColor: T.tile,
             backgroundImage: `repeating-linear-gradient(135deg, ${T.stripe} 0 1px, transparent 1px 9px)`,
             display: 'flex', alignItems: 'flex-end', transform: 'translate(-9999px,-9999px)'
           }}>
        <span style={{ fontSize: 10, letterSpacing: '0.04em', color: T.muted, padding: '8px 9px', textTransform: 'uppercase' }}>{label}</span>
      </div>
    </div>
  );
}
