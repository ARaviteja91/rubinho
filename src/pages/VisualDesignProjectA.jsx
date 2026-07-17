import Header from '../components/Header';
import Marquee from '../components/Marquee';
import ImageSlot from '../components/ImageSlot';

export default function VisualDesignProjectA() {
  return (
    <div className="page-container">
      <Header active="visual" />

      {/* Description + hero image */}
      <section className="project-desc-section alt-padding">
        <div className="project-desc-text-wrapper">
          <p className="project-desc-text">
            Beeswax is a visual identity and packaging project celebrating the warmth, versatility, and natural origins of beeswax. The design combines organic forms, earthy colours, and refined typography to communicate craftsmanship and sustainability. The project includes brand direction, packaging, illustration, and supporting promotional materials.
          </p>
        </div>
        <div className="project-desc-image-wrapper">
          <ImageSlot label="Hero shot" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>

      {/* Media pair */}
      <section className="project-media-section">
        <div className="project-media-wrapper-left">
          <ImageSlot label="Packaging photo" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="project-media-wrapper-right">
          <ImageSlot label="Video: gun3.mp4" className="full-size" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </section>

      {/* Contact */}
      <section className="project-contacts-section">
        <h2 className="nia-index-heading">Contacts</h2>
        <div className="info-contacts-list">
          <div><a href="mailto:info@rubinhomulungo.com">info@rubinhomulungo.com</a></div>
          <div>
            Social:{' '}
            <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" className="border-link">Instagram</a>,{' '}
            <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" className="border-link">LinkedIn</a>
          </div>
        </div>
      </section>

      <Marquee />

      <footer className="project-footer">
        <a href="https://www.instagram.com/unfilteredstudio/" target="_blank" rel="noopener noreferrer" className="border-link">Instagram</a>
        <a href="https://www.linkedin.com/in/rubinhomulungo/" target="_blank" rel="noopener noreferrer" className="border-link">LinkedIn</a>
      </footer>
    </div>
  );
}

