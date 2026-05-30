React + Tailwind portfolio scaffold

This scaffold imports your existing `index.html` content into React components and is configured for GitHub Pages deployment.

Quick start:

1. cd react-portfolio
2. npm install
3. npm run dev

Deployment:
- This app uses Vite with `base: '/Portfolio/'` in `vite.config.js`
- GitHub Actions will build the app and publish `react-portfolio/dist` to the `gh-pages` branch

Notes:
- `src/data/content.js` currently preserves the original portfolio text content.
- Components include `Navbar`, `Hero`, `Preloader`, `HeroStats`, and the migrated portfolio sections.
- After pushing to GitHub, set GitHub Pages source to `gh-pages` branch.
