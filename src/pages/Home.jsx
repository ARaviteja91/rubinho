import { useState } from 'react';
import { pageStyle, T } from '../theme.js';
import { workProjects, INTRO } from '../data.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${workProjects[hovered].client} / ${workProjects[hovered].title}` : '';
  return (
    <div style={pageStyle}>
      <Header hoverLabel={label} />
      <section data-reveal style={{ padding: '140px 0 12px', minHeight: '88vh', display: 'flex', alignItems: 'flex-end' }}>
        <p style={{ fontSize: 36, lineHeight: 1.5, width: '100%', padding: '0 24px', margin: 0 }}>{INTRO}</p>
      </section>
      <section style={{ padding: '60px 12px 120px', width: '100%' }} onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12, gridAutoFlow: 'dense' }}>
          {workProjects.map((p, i) => (
            <a key={i} href="#work" data-tile onMouseEnter={() => setHovered(i)}
               onClick={(e) => e.preventDefault()}
               style={{ gridColumn: `span ${p.span}`, display: 'block' }}>
              <div style={{
                position: 'relative', width: '100%', aspectRatio: p.ratio,
                backgroundColor: T.tile,
                backgroundImage: `repeating-linear-gradient(135deg, ${T.stripe} 0 1px, transparent 1px 9px)`,
                overflow: 'hidden'
              }} />
            </a>
          ))}
        </div>
      </section>
      <section data-reveal style={{ padding: '14px 24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <div style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}>Rubinho Mulungo</div>
            <a href="mailto:info@rubinhomulungo.com" style={{ fontSize: 'clamp(18px, 4vw, 26px)', display: 'block', width: 'fit-content' }}>info@rubinhomulungo.com</a>
            <div style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}>Currently Based in Milan, Italy</div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer"
                 style={{ borderBottom: `1px solid ${T.rule}`, fontSize: 'clamp(18px, 4vw, 26px)' }}>Instagram</a>
              <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer"
                 style={{ borderBottom: `1px solid ${T.rule}`, fontSize: 'clamp(18px, 4vw, 26px)' }}>LinkedIn</a>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()}
               style={{ borderBottom: `1px solid ${T.rule}`, width: 'fit-content', display: 'block', fontSize: 'clamp(18px, 4vw, 26px)' }}>Read CV / Resume</a>
          </div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}
