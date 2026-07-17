import { T } from '../theme.js';

/* Placeholder image slot. Pass `src` to render a real image,
   otherwise a striped placeholder with the label is shown. */
export default function ImageSlot({ label, src, alt, style = {} }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      />
    );
  }
  return (
    <div
      style={{
        backgroundColor: T.tile,
        backgroundImage: `repeating-linear-gradient(135deg, ${T.stripe} 0 1px, transparent 1px 9px)`,
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        ...style
      }}
    >
      <span
        style={{
          fontFamily: "'Untitled Sans Light', sans-serif",
          fontSize: 10,
          letterSpacing: '0.04em',
          color: T.muted,
          padding: '8px 9px',
          textTransform: 'uppercase'
        }}
      >
        {label}
      </span>
    </div>
  );
}
