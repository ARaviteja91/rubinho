import { FadeLink } from '../fx.jsx';
import { T } from '../theme.js';

const linkStyle = {
  fontFamily: "'Untitled Sans Light', sans-serif",
  fontWeight: 300,
  fontSize: 'clamp(16px, 2.2vw, 32px)',
  whiteSpace: 'nowrap'
};

export default function Header({ active, hoverLabel }) {
  const nav = (key, to, text) => (
    <FadeLink to={to} style={{ ...linkStyle, opacity: active === key ? 0.5 : 1 }}>
      {text}
    </FadeLink>
  );
  return (
    <header
      className="rm-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '8px 16px',
        padding: '18px 24px',
        background: T.bg,
        color: T.fg
      }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <FadeLink to="/home" style={{ ...linkStyle, lineHeight: 1 }}>
          Rubinho Mulungo
        </FadeLink>
        <span
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            fontSize: 15,
            opacity: 0.65,
            minHeight: 17,
            whiteSpace: 'nowrap'
          }}
        >
          {hoverLabel || ''}
        </span>
      </div>
      <nav style={{ display: 'contents' }}>
        {nav('ux', '/ux-case-studies', 'UX Case Studies')}
        {nav('visual', '/visual-design', 'Visual Design')}
        {nav('info', '/info', 'Info')}
      </nav>
    </header>
  );
}
