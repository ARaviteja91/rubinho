# Rubinho Mulungo — Portfolio (React + Vite)

Portfolio site converted from the HTML design prototypes to a React app.

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/App.jsx` — routes (react-router-dom)
- `src/pages/` — Landing, Home, UXCaseStudies, Nia, VisualDesign, Beeswax, Info
- `src/components/` — Header, Marquee, ImageSlot (striped placeholder; pass `src` to show a real image)
- `src/fx.jsx` — page fade transitions + staggered scroll reveals (`data-reveal`)
- `src/theme.js` — color tokens + base page style
- `src/data.js` — project lists and intro copy
- `public/fonts/`, `public/images/` — static assets

## Routes

- `/` — Landing (auto-redirects to `/home` after ~2.5s)
- `/home`, `/ux-case-studies`, `/ux-case-studies/nia`, `/visual-design`, `/visual-design/beeswax`, `/info`

## Notes

- Placeholder tiles (work grids, hero frames) use `ImageSlot` — swap in real images by passing a `src` prop or replacing the component usage with `<img>`.
- For static hosting (Netlify/Vercel), enable SPA fallback so deep links resolve to `index.html`.
