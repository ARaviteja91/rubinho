import { useEffect, useRef, useState } from 'react';
import { useFadeNavigate } from '../fx.jsx';
import { pageStyle, T } from '../theme.js';
import { INTRO } from '../data.js';
import ImageSlot from '../components/ImageSlot.jsx';

const FRAMES = [
  'Portrait photo 1', 'Landscape photo 1', 'Portrait photo 2',
  'Landscape photo 2', 'Portrait photo 3', 'Landscape photo 3'
];

export default function Landing() {
  const go = useFadeNavigate();
  const [frame, setFrame] = useState(0);
  const [fontSize, setFontSize] = useState(160);
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % 6), 320);
    const redirect = setTimeout(() => go('/home'), 2500);
    return () => { clearInterval(t); clearTimeout(redirect); };
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const fit = () => {
      const container = containerRef.current;
      if (!container) return;
      const base = 160;
      const ctx = canvas.getContext('2d');
      ctx.font = `300 ${base}px 'Untitled Sans Light', sans-serif`;
      const textWidth = ctx.measureText('Rubinho Mulungo').width;
      const cs = getComputedStyle(container);
      const w = container.clientWidth - parseFloat(cs.paddingLeft || 0) - parseFloat(cs.paddingRight || 0);
      if (textWidth && w) setFontSize(Math.floor(base * (w / textWidth)));
    };
    if (document.fonts?.ready) document.fonts.ready.then(fit);
    requestAnimationFrame(fit);
    const late = setTimeout(fit, 300);
    window.addEventListener('resize', fit);
    return () => { window.removeEventListener('resize', fit); clearTimeout(late); };
  }, []);

  return (
    <div style={{ ...pageStyle, display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', padding: '18px 24px 0', overflow: 'hidden' }}>
        <span style={{ fontWeight: 300, fontSize, lineHeight: 0.95, display: 'inline-block', whiteSpace: 'nowrap' }}>
          Rubinho Mulungo
        </span>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 220, aspectRatio: '11/7', overflow: 'hidden' }}>
          {FRAMES.map((label, i) => (
            <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === frame ? 1 : 0, transition: 'opacity .3s linear' }}>
              <ImageSlot label={label} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 36, lineHeight: 1.5, color: T.fg, width: '100%', padding: '0 24px', margin: '0 0 12px' }}>
        {INTRO}
      </p>
    </div>
  );
}
