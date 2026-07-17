import { useEffect, useRef, useState } from 'react';
import { useFadeNavigate } from '../fx.jsx';
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
    <div className="page-container landing-page">
      <div ref={containerRef} className="landing-name-container">
        <span className="landing-name" style={{ fontSize }}>
          Rubinho Mulungo
        </span>
      </div>
      <div className="landing-center">
        <div className="landing-frame-container">
          {FRAMES.map((label, i) => (
            <div key={i} className="landing-frame" style={{ opacity: i === frame ? 1 : 0 }}>
              <ImageSlot label={label} className="full-size" />
            </div>
          ))}
        </div>
      </div>
      <p className="landing-intro">
        {INTRO}
      </p>
    </div>
  );
}

