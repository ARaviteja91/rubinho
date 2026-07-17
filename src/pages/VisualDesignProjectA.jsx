import Header from '../components/Header';
import Marquee from '../components/Marquee';
import ImageSlot from '../components/ImageSlot';
import { t, pageStyle } from '../theme';

export default function VisualDesignProjectA() {
  return (
    <div style={pageStyle}>
      <Header active="visual" />

      {/* Description + hero image */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: '60px 24px 24px' }}>
        <div style={{ flex: '1 1 420px', maxWidth: 640 }}>
          <p style={{ fontSize: 'clamp(20px, 4vw, 32px)', lineHeight: 1.3, fontWeight: 300, margin: 0, color: t.fg, textAlign: 'justify' }}>
            Beeswax is a visual identity and packaging project celebrating the warmth, versatility, and natural origins of beeswax. The design combines organic forms, earthy colours, and refined typography to communicate craftsmanship and sustainability. The project includes brand direction, packaging, illustration, and supporting promotional materials.
          </p>
        </div>
        <div style={{ flex: '1 1 420px', position: 'relative', aspectRatio: '934/1181', overflow: 'hidden' }}>
          <ImageSlot label="Hero shot" />
        </div>
      </section>

      {/* Media pair */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: 0, padding: '0 0 80px' }}>
        <div style={{ flex: '1 1 480px', position: 'relative', aspectRatio: '954/1236', overflow: 'hidden' }}>
          <ImageSlot label="Packaging photo" />
        </div>
        <div style={{ flex: '1 1 480px', position: 'relative', aspectRatio: '952/1236', overflow: 'hidden' }}>
          <ImageSlot label="Video: gun3.mp4" />
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '60px 24px', borderTop: `1px solid ${t.rule}` }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, margin: '0 0 16px' }}>Contacts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, color: t.fg, fontSize: 'clamp(18px, 4vw, 26px)' }}>
          <div><a href="mailto:info@rubinhomulungo.com" style={{ color: t.fg }}>info@rubinhomulungo.com</a></div>
          <div>
            Social: <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${t.rule}` }}>Instagram</a>, <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${t.rule}` }}>LinkedIn</a>
          </div>
        </div>
      </section>

      <Marquee />

      <footer style={{ display: 'flex', justifyContent: 'center', gap: 24, padding: '20px 24px', borderTop: `1px solid ${t.rule}`, color: t.muted, fontSize: 11 }}>
        <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${t.rule}` }}>Instagram</a>
        <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: `1px solid ${t.rule}` }}>LinkedIn</a>
      </footer>
    </div>
  );
}
