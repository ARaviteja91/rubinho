import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

export default function Beeswax() {
  return (
    <div className="page-container">
      <Header active="visual" />
      <section data-reveal className="project-desc-section">
        <div className="project-desc-text-wrapper">
          <p className="project-desc-text">
            Beeswax is a visual identity and packaging project celebrating the warmth, versatility, and natural
            origins of beeswax. The design combines organic forms, earthy colours, and refined typography to
            communicate craftsmanship and sustainability. The project includes brand direction, packaging,
            illustration, and supporting promotional materials.
          </p>
        </div>
        <div className="project-desc-image-wrapper">
          <ImageSlot label="Hero shot" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>
      <section data-reveal className="project-media-section">
        <div className="project-media-wrapper-left">
          <ImageSlot label="Packaging photo" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="project-media-wrapper-right">
          <ImageSlot label="Video: gun3.mp4" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>
      <section data-reveal className="project-contacts-section">
        <div className="info-contacts-list">
          <div>
            <a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a>
          </div>
          <div>
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
      <Marquee />
    </div>
  );
}

