import { useRef, useState } from 'react';
import { uxProjects } from '../data.js';
import { FadeLink } from '../fx.jsx';
import Header from '../components/Header.jsx';
import Marquee from '../components/Marquee.jsx';

const brainstormImages = [
  '/images/UxCaseStudies/B_DAVAI/Brainstorming Process/1.webp',
  '/images/UxCaseStudies/B_DAVAI/Brainstorming Process/2.webp',
  '/images/UxCaseStudies/B_DAVAI/Brainstorming Process/3.webp',
  '/images/UxCaseStudies/B_DAVAI/Brainstorming Process/4.webp',
  '/images/UxCaseStudies/B_DAVAI/Brainstorming Process/5.webp'
];

export default function Davai() {
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);
  const previewRef = useRef(null);
  const label = hovered != null ? `${uxProjects[hovered].client} / ${uxProjects[hovered].title}` : '';

  const movePreview = (e) => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`;
  };

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <Header active="ux" hoverLabel={label} />

      <div className="nia-title-row">
        <h1 className="nia-title">
          Davai, <span style={{ color: 'var(--muted)' }}>Low Budget Travel App</span>
        </h1>
        <span className="nia-subtitle nia-br">Brainstorming Process</span>
      </div>

      <div className="rm-filmstrip">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="filmstrip-inner"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {brainstormImages.concat(brainstormImages).map((src, i) => (
            <div key={i} className="filmstrip-item">
              <img src={src} alt="Brainstorming notes" className="image-slot" />
            </div>
          ))}
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          Davai explores the social and financial barriers that make travel difficult for young people, including finding
          compatible companions, coordinating plans, managing costs, and building trust with strangers. The project responds with
          a social travel platform that helps users connect through shared preferences, plan collaboratively, manage their budgets,
          and discover curated group experiences.
        </p>
      </section>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/1 Davai Cover.gif" alt="Davai cover animation" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/2.webp" alt="Where is your mind UI" className="image-slot" />
        </div>
      </div>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/4.gif" alt="Onboarding savings screen" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/3.webp" alt="Activity destinations grid" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The project combined primary and secondary research, empathy mapping, user interviews, competitive analysis, prototyping,
          and usability testing. Key findings revealed the importance of compatibility, safety, financial transparency, simplified
          planning tools, and greater user control when arranging trips and connecting with new travel companions.
        </p>
      </section>

      <div data-reveal className="case-single-img-center">
        <img src="/images/UxCaseStudies/B_DAVAI/5.gif" alt="Davai puzzle luggage logo" className="icon-center-img" />
      </div>

      <div data-reveal className="case-grid-2col">
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/6.webp" alt="Trip matching and profile details" className="image-slot" />
        </div>
        <div className="case-img-tile">
          <img src="/images/UxCaseStudies/B_DAVAI/7.gif" alt="Mobile home screen widget" className="image-slot" />
        </div>
      </div>

      <section data-reveal className="nia-section">
        <p className="nia-paragraph">
          The final concept is a mobile application built around three connected features: a preference-based matching system,
          collaborative budget tracking, and Crafted Journeys, a collection of curated destinations and group travel opportunities. My
          contribution focused on designing the budget-tracking experience, helping users set savings goals, monitor expenses, and
          manage shared travel costs more transparently. Together, these features make travel more accessible, social, and manageable,
          helping young travelers form meaningful connections and turn shared ambitions into real journeys. Davai was nominated in the
          New Talent category of the 2024 UX Design Awards.
        </p>
      </section>

      <div className="nia-video-feature">
        <div className="video-placeholder">VIDEO</div>
      </div>

      <section id="index" className="nia-index-section" onMouseLeave={() => setHovered(null)}>
        <ul className="nia-index-list">
          {uxProjects.map((p, i) => (
            <li key={i} onMouseEnter={() => setHovered(i)} onMouseMove={movePreview}>
              <FadeLink
                to={p.link}
                className={`nia-index-item ${i === 1 ? 'is-muted' : ''}`}
              >
                <span className="index-client">{p.client},</span>{' '}
                <span className="index-title">{p.title}</span>
              </FadeLink>
            </li>
          ))}
        </ul>
      </section>

      <Marquee border={false} />

      <div
        ref={previewRef}
        className="floating-preview"
        style={{
          opacity: hovered != null ? 1 : 0,
          transform: 'translate(-9999px,-9999px)'
        }}
      >
        {hovered != null && uxProjects[hovered]?.image && (
          <img
            src={uxProjects[hovered].image}
            alt={label}
            className="floating-preview-image"
          />
        )}
        <span className="image-placeholder-label">{label}</span>
      </div>
    </div>
  );
}
