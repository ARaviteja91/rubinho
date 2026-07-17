/* Placeholder image slot. Pass `src` to render a real image,
   otherwise a striped placeholder with the label is shown. */
export default function ImageSlot({ label, src, alt, style = {} }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label}
        className="image-slot"
        style={style}
      />
    );
  }
  return (
    <div className="image-placeholder" style={style}>
      <span className="image-placeholder-label">
        {label}
      </span>
    </div>
  );
}

