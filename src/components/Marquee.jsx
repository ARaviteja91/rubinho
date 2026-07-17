export default function Marquee({ border = true, padding = '18px 0' }) {
  return (
    <div
      className={`marquee-container ${border ? 'has-border' : ''}`}
      style={{ padding }}
    >
      <div className="marquee-content">
        {[0, 1].map((i) => (
          <span key={i} className="marquee-text">
            <span className="marquee-text-bold">
              Creativity in Every Form: Visual, Interactive, Experiential.
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

