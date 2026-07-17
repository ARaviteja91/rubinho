import { T } from '../theme.js';

export default function Marquee({ border = true, padding = '18px 0' }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        borderTop: border ? `1px solid ${T.rule}` : 'none',
        padding
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          whiteSpace: 'nowrap',
          animation: 'marquee 40s linear infinite'
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.45em',
              fontSize: 'clamp(48px, 11vw, 150px)',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              paddingRight: '0.6em',
              color: T.muted
            }}
          >
            <span style={{ fontWeight: 900 }}>
              Creativity in Every Form: Visual, Interactive, Experiential.
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
