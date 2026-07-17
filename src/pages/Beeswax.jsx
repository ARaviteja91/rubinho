import { pageStyle, T } from '../theme.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

export default function Beeswax() {
  return (
    <div style={pageStyle}>
      <Header active="visual" />
      <section data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: '160px 24px 24px' }}>
        <div style={{ flex: '1 1 420px', maxWidth: 640 }}>
          <p style={{ fontSize: 'clamp(20px, 4vw, 32px)', lineHeight: 1.3, fontWeight: 300, margin: 0 }}>
            Beeswax is a visual identity and packaging project celebrating the warmth, versatility, and natural
            origins of beeswax. The design combines organic forms, earthy colours, and refined typography to
            communicate craftsmanship and sustainability. The project includes brand direction, packaging,
            illustration, and supporting promotional materials.
          </p>
        </div>
        <div style={{ flex: '1 1 420px', position: 'relative', aspectRatio: '934/1181', overflow: 'hidden' }}>
          <ImageSlot label="Hero shot" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        </div>
      </section>
      <section data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 0, padding: '0 0 80px' }}>
        <div style={{ flex: '1 1 480px', position: 'relative', aspectRatio: '954/1236', overflow: 'hidden' }}>
          <ImageSlot label="Packaging photo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        </div>
        <div style={{ flex: '1 1 480px', position: 'relative', aspectRatio: '952/1236', overflow: 'hidden' }}>
          <ImageSlot label="Video: gun3.mp4" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        </div>
      </section>
      <section data-reveal style={{ padding: '60px 24px', borderTop: `1px solid ${T.rule}` }}>
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
