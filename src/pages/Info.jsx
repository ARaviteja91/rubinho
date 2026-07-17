import { pageStyle, T } from '../theme.js';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

const SERVICES = [
  'Product Design', 'UX/UI Design', 'UX Research & Strategy',
  'Website Design', 'Design Systems', 'UX Audits & Testing'
];

export default function Info() {
  return (
    <div style={pageStyle}>
      <Header active="info" />
      <section data-reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 48, padding: '160px 24px 80px' }}>
        <div style={{ flex: '0 0 289px', position: 'relative', width: 289, maxWidth: '100%', aspectRatio: '289/361', overflow: 'hidden' }}>
          <ImageSlot label="Portrait photo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        </div>
        <div style={{ flex: '1 1 640px', maxWidth: 900 }}>
          <p style={{ fontSize: 'clamp(20px, 4.5vw, 34px)', lineHeight: 1.35, fontWeight: 300, margin: '0 0 1em' }}>
            I'm a Product Designer with a background in visual communication and an MA in User Experience Design.
          </p>
          <p style={{ fontSize: 'clamp(20px, 4.5vw, 34px)', lineHeight: 1.35, fontWeight: 300, margin: 0 }}>
            I've spent the past years designing across digital platforms, education, fashion, brand systems, and
            campaign-led experiences. That range has taught me to look at design from different angles: the user's
            needs, the business context, the visual language, and the practical details needed to bring an idea to
            life.
          </p>
        </div>
      </section>
      <section data-reveal className="rm-services-indent" style={{ padding: '0 24px 80px 337px' }}>
        <h2 style={{ fontSize: 'clamp(20px, 4.5vw, 34px)', fontWeight: 300, margin: '0 0 20px' }}>Services</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {SERVICES.map((s) => (
            <li key={s} style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 300 }}>{s}</li>
          ))}
        </ul>
      </section>
      <section data-reveal style={{ padding: '20px 24px 60px' }}>
        <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 300, margin: '0 0 16px' }}>Contacts</h2>
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
      <div style={{ padding: '0 24px 20px', color: T.muted }}>
        <div style={{ fontSize: 28 }}>Website designed by me</div>
        <div style={{ fontSize: 28 }}>&amp; developed by Ace and Spades Studio</div>
      </div>
      <Marquee border={false} padding="0 0 18px" />
    </div>
  );
}
