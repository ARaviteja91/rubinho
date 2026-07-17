import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

const SERVICES = [
  'Product Design', 'UX/UI Design', 'UX Research & Strategy',
  'Website Design', 'Design Systems', 'UX Audits & Testing'
];

export default function Info() {
  return (
    <div className="page-container">
      <Header active="info" />
      <section data-reveal className="project-desc-section" style={{ gap: 48, paddingBottom: 80 }}>
        <div className="info-portrait-wrapper">
          <ImageSlot label="Portrait photo" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="info-text-wrapper">
          <p className="large-paragraph" style={{ marginBottom: '1em', lineHeight: 1.35 }}>
            I'm a Product Designer with a background in visual communication and an MA in User Experience Design.
          </p>
          <p className="large-paragraph" style={{ lineHeight: 1.35 }}>
            I've spent the past years designing across digital platforms, education, fashion, brand systems, and
            campaign-led experiences. That range has taught me to look at design from different angles: the user's
            needs, the business context, the visual language, and the practical details needed to bring an idea to
            life.
          </p>
        </div>
      </section>
      <section data-reveal className="rm-services-indent info-services-section">
        <h2 className="nia-subtitle" style={{ marginBottom: 20 }}>Services</h2>
        <ul className="info-services-list">
          {SERVICES.map((s) => (
            <li key={s} className="info-services-item">{s}</li>
          ))}
        </ul>
      </section>
      <section data-reveal className="project-contacts-section" style={{ padding: '20px 24px 60px', borderTop: 'none' }}>
        <h2 className="nia-index-heading" style={{ marginBottom: 16 }}>Contacts</h2>
        <div className="info-contacts-list">
          <div><a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a></div>
          <div>Currently Based in Milan, Italy</div>
          <div>
            Social:{' '}
            <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" className="border-link">Instagram</a>,{' '}
            <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" className="border-link">LinkedIn</a>
          </div>
          <div>Read CV / Resume</div>
        </div>
      </section>
      <div className="info-credit-section">
        <div className="info-credit-text">Website designed by me</div>
        <div className="info-credit-text">&amp; developed by Ace and Spades Studio</div>
      </div>
      <Marquee border={false} padding="0 0 18px" />
    </div>
  );
}

