# City of Hope Agentic AI Strategy

xVector Labs strategy brief for City of Hope: industry landscape, company context, data and AI stack, 10 use cases and a roadmap.

Live page: https://kiri01-dev.github.io/xv-city-of-hope-strategy/

## Files

- `index.html`: page shell. It holds the meta tags (including `noindex` and the Open Graph link-preview tags) and a static header that shows while the app loads.
- `app.js`: the app, precompiled so phones don't download and run Babel. React 18 loads from cdnjs.
- `src/app.jsx`: the editable source for `app.js`.
- `og-image.png`: the 1200x630 image shown in chat link previews.

## Editing

1. Edit `src/app.jsx`.
2. Rebuild `app.js`:

   ```bash
   npx esbuild src/app.jsx --outfile=app.js
   ```

3. Bump the `?v=` number on the `app.js` script tag in `index.html`, so cached copies refresh.
4. Commit and push to `main`. GitHub Pages redeploys in about a minute.

The layout adapts below 640px: a compact header, a sticky two-row tab bar and a vertical value chain.
