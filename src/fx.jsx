import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useFadeNavigate() {
  const navigate = useNavigate();
  return (to) => {
    const root = document.getElementById('root');
    if (reduce || !root) {
      navigate(to);
      window.scrollTo(0, 0);
      return;
    }
    root.classList.add('fx-out');
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
      root.classList.remove('fx-out');
    }, 500);
  };
}

export function FadeLink({ to, children, ...rest }) {
  const go = useFadeNavigate();
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

/* Page fade-in + staggered scroll reveals for [data-reveal] elements.
   Ported from the original site-fx.js. */
export function usePageFx() {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.classList.remove('fx-in');
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.add('fx-in'))
      );
    }
    if (reduce) return;
    let pending = [];
    let scheduled = false;
    const timers = [];
    function flush() {
      scheduled = false;
      pending.sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );
      pending.forEach((el, i) => {
        const d = Math.min(i * 70, 490);
        el.style.transitionDelay = d + 'ms';
        el.classList.add('fx-visible');
        timers.push(
          setTimeout(() => {
            el.style.transitionDelay = '';
          }, 1200 + d)
        );
      });
      pending = [];
    }
    function queue(el) {
      if (el.classList.contains('fx-visible') || el.__fxQueued) return;
      el.__fxQueued = true;
      pending.push(el);
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush);
      }
    }
    function check() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll('[data-reveal]:not(.fx-visible)')
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.height === 0 && r.width === 0) return;
          if (r.top < vh * 0.96 && r.bottom > 0) queue(el);
        });
    }
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    let t = 0;
    const poll = setInterval(() => {
      check();
      if (++t > 40) clearInterval(poll);
    }, 250);
    check();
    const safety = setTimeout(() => {
      document
        .querySelectorAll('[data-reveal]:not(.fx-visible)')
        .forEach((el) => el.classList.add('fx-visible'));
    }, 4000);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      clearInterval(poll);
      clearTimeout(safety);
      timers.forEach(clearTimeout);
    };
  }, [pathname]);
}
