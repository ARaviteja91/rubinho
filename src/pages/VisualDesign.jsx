import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

export default function VisualDesign() {
  return (
    <div className="page-container">
      <Header active="visual" />

      {/* Intro Header */}
      <section data-reveal className="vd-new-intro">
        <p className="vd-intro-text">
          A broader look at my creative practice. This collection brings together images, interfaces, systems and experiments that reflect how I think, create and explore visual language.
        </p>
      </section>

      {/* 3-Column Grid Section */}
      <section className="vd-new-grid-section">
        <div className="vd-3col-grid">
          {/* Column 1 */}
          <div className="vd-column">
            <div data-reveal className="grid-tile" style={{ aspectRatio: '1/1' }}>
              <img src="/images/HomePage/8.webp" alt="Bloomy" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '4/5' }}>
              <img src="/images/Visual Design/3. Mille Collines Mugs/1.webp" alt="Mille Collines Tulia Mugs" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '1/1' }}>
              <img src="/images/Visual Design/hot_ones.png" alt="Hot Ones" className="grid-image" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="vd-column">
            <div data-reveal className="grid-tile" style={{ aspectRatio: '16/10' }}>
              <img src="/images/HomePage/5.webp" alt="NotePad" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '1/1' }}>
              <img src="/images/HomePage/7.webp" alt="J.L PaPa" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '4/5' }}>
              <img src="/images/Visual Design/drivr.png" alt="DRIVR" className="grid-image" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="vd-column">
            <div data-reveal className="grid-tile" style={{ aspectRatio: '4/5' }}>
              <img src="/images/HomePage/6.webp" alt="Mille Collines Sweater" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '16/10' }}>
              <img src="/images/Visual Design/1. IoT Interface/0.webp" alt="IoT Interface" className="grid-image" />
            </div>
            <div data-reveal className="grid-tile" style={{ aspectRatio: '4/5' }}>
              <img src="/images/Visual Design/punk_anime.png" alt="Punk Anime" className="grid-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contacts Section */}
      <section data-reveal className="vd-new-footer">
        <div className="contacts-text-block">
          <a href="mailto:info@rubinhomulungo.com" className="contacts-sublink">
            info@rubinhomulungo.com
          </a>
          <div className="contacts-sublink">
            Social:{' '}
            <a
              href="https://www.instagram.com/unfilteredstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-link"
            >
              Instagram
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/rubinhomulungo/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Marquee border={false} />
    </div>
  );
}
