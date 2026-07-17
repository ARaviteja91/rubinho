import { FadeLink } from '../fx.jsx';

export default function Header({ active, hoverLabel }) {
  const nav = (key, to, text) => (
    <FadeLink to={to} className="header-link" style={{ opacity: active === key ? 0.5 : 1 }}>
      {text}
    </FadeLink>
  );
  return (
    <header className="rm-header site-header">
      <div className="logo-container">
        <FadeLink to="/home" className="header-link" style={{ lineHeight: 1 }}>
          Rubinho Mulungo
        </FadeLink>
        <span className="hover-label">
          {hoverLabel || ''}
        </span>
      </div>
      <nav className="nav-container">
        {nav('ux', '/ux-case-studies', 'UX Case Studies')}
        {nav('visual', '/visual-design', 'Visual Design')}
        {nav('info', '/info', 'Info')}
      </nav>
    </header>
  );
}

