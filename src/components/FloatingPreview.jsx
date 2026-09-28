import { forwardRef } from 'react';

export function positionFloatingPreview(element, event) {
  if (!element) return;

  const { width, height } = element.getBoundingClientRect();
  const maxX = Math.max(0, window.innerWidth - width);
  const maxY = Math.max(0, window.innerHeight - height);
  const x = Math.min(event.clientX + 18, maxX);
  const y = Math.min(event.clientY + 18, maxY);

  element.style.transform = `translate(${x}px, ${y}px)`;
}

const FloatingPreview = forwardRef(function FloatingPreview(
  { project, label, showLabel = true },
  ref
) {
  return (
    <div
      ref={ref}
      className="floating-preview"
      style={{
        opacity: project ? 1 : 0,
        transform: 'translate(-9999px,-9999px)'
      }}
    >
      {project?.image && (
        <img
          src={project.image}
          alt={label}
          className="floating-preview-image"
        />
      )}
    </div>
  );
});

export default FloatingPreview;