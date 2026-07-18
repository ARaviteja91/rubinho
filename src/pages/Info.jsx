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
      
      {/* Row 1: 4x3 passport size photo, aligned to leftside of page */}
      <section data-reveal className="info-row-1">
        <div className="info-passport-photo">
          <ImageSlot src="/images/portrait.png" label="Portrait photo" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>

      {/* Row 2: 2 columns (30%, 70%). 2nd column consist of text */}
      <section data-reveal className="info-row-2">
        <div className="info-row-2-col1"></div>
        <div className="info-row-2-col2 info-text-wrapper">
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

      {/* Row 3: 2 columns (50%, 50%). 2nd column consist of Services details */}
      <section data-reveal className="info-row-3">
        <div className="info-row-3-col1"></div>
        <div className="info-row-3-col2 info-services-wrapper">
          <h2 className="nia-subtitle" style={{ marginBottom: 20 }}>Services</h2>
          <ul className="info-services-list">
            {SERVICES.map((s) => (
              <li key={s} className="info-services-item">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Row 4: 1 column with contact details */}
      <section data-reveal className="info-row-4">
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

