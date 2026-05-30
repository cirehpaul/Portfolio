# Portfolio Live Deployment

This repository contains the migrated React + Tailwind portfolio app in `react-portfolio/`.

## Live deployment setup

- The React app builds from `react-portfolio/`
- GitHub Actions will build and publish to the `gh-pages` branch
- The live URL will be `https://cirehpaul.github.io/Portfolio/`

## How it works

1. Push to `main`
2. GitHub Actions runs the workflow in `.github/workflows/deploy.yml`
3. The app is built from `react-portfolio/`
4. The compiled `dist/` output is published to `gh-pages`

## Activate GitHub Pages

After the first successful push, open GitHub repo Settings → Pages and select:
- Source: `gh-pages` branch
- Folder: `/ (root)`

Then visit `https://cirehpaul.github.io/Portfolio/`.

## Local development

```bash
cd react-portfolio
npm install
npm run dev
```
