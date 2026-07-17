import { useState } from 'react';
import { pageStyle, T } from '../theme.js';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function UXCaseStudies() {
  const [hovered, setHovered] = useState(null);
  const label = hovered != null ? `${uxProjects[hovered].client} / ${uxProjects[hovered].title}` : '';
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
      <Header active="ux" hoverLabel={label} />
      <section style={{ padding: '130px 12px 0' }} onMouseLeave={() => setHovered(null)}>
        <div className="rm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12, gridAutoFlow: 'dense' }}>
          {uxProjects.map((p, i) =>
            i === 0 ? (
              <FadeLink key={i} to="/ux-case-studies/nia" data-tile="true" data-reveal="true"
                        onMouseEnter={() => setHovered(i)}
                        style={{ gridColumn: `span ${p.span}`, display: 'block' }}>
                {tile(p)}
              </FadeLink>
            ) : (
              <a key={i} href="#index" data-tile data-reveal onMouseEnter={() => setHovered(i)}
                 onClick={(e) => e.preventDefault()}
                 style={{ gridColumn: `span ${p.span}`, display: 'block' }}>
                {tile(p)}
              </a>
            )
          )}
        </div>
      </section>
      <section data-reveal style={{ padding: '120px 24px 60px', marginTop: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 'clamp(18px, 4vw, 26px)' }}>
          <div><a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a></div>
          <div>Currently Based in Milan, Italy</div>
          <div>
            Social:{' '}
            <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${T.rule}` }}>Instagram</a>,{' '}
            <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${T.rule}` }}>LinkedIn</a>
          </div>
          <div>Read CV / Resume</div>
        </div>
      </section>
      <Marquee border={false} />
    </div>
  );
}
