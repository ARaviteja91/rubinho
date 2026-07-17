import { useState } from 'react';
import { pageStyle, T } from '../theme.js';
import { workProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function VisualDesign() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${workProjects[hovered].client} / ${workProjects[hovered].title}` : '';
  const tile = (p) => (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: p.ratio,
      backgroundColor: T.tile,
      backgroundImage: `repeating-linear-gradient(135deg, ${T.stripe} 0 1px, transparent 1px 9px)`,
      overflow: 'hidden'
    }} />
  );
  return (
    <div style={pageStyle}>
      <Header active="visual" hoverLabel={label} />
      <section data-reveal style={{ padding: '170px 12px 80px' }}>
        <p style={{ fontSize: 'clamp(20px, 4.5vw, 34px)', lineHeight: 1.5, margin: 0 }}>
          What we love doing, what we love seeing, and what we are pleased to share. Unfinished, provocative,
          expressive, thoughtful… a collection of pictures fueling the creative minds at Unknown Untitled office
          and abroad.
        </p>
      </section>
      <section style={{ padding: '0 12px 120px' }} onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12, gridAutoFlow: 'dense' }}>
          {workProjects.map((p, i) =>
            i === 0 ? (
              <FadeLink key={i} to="/visual-design/beeswax" data-tile="true" data-reveal="true"
                        onMouseEnter={() => setHovered(i)}
                        style={{ gridColumn: `span ${p.span}`, display: 'block' }}>
                {tile(p)}
              </FadeLink>
            ) : (
              <a key={i} href="#" data-tile data-reveal onMouseEnter={() => setHovered(i)}
                 onClick={(e) => e.preventDefault()}
                 style={{ gridColumn: `span ${p.span}`, display: 'block' }}>
                {tile(p)}
              </a>
            )
          )}
        </div>
      </section>
      <section data-reveal style={{ padding: '60px 12px', borderTop: `1px solid ${T.rule}` }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 'clamp(18px, 4vw, 26px)' }}>
          <div><a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a></div>
          <div>
            Social:{' '}
            <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${T.rule}` }}>Instagram</a>,{' '}
            <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${T.rule}` }}>LinkedIn</a>
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
}
