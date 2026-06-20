# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static splash page for devtriplesecops.com — counts down 10 seconds then redirects to simonmerrick.com. Deployed to Cloudflare Pages; `src/` is the build output directory (no build step).

## Dev server

```sh
npx wrangler pages dev   # http://localhost:8788
# or simpler:
npx serve src
```

No package.json, no install step — `npx` fetches wrangler on demand.

## Architecture

All logic lives in four files in `src/`:

- **[index.html](src/index.html)** — single page; splash image + countdown `<span>` + redirect text
- **[main.js](src/main.js)** — `requestAnimationFrame` loop driving a 10-second countdown; skips the redirect when `window.location.hostname !== 'devtriplesecops.com'` (i.e. any dev/local environment)
- **[style.css](src/style.css)** — light/dark mode via `color-scheme` + `prefers-color-scheme`; responsive image sizing with `min(500px, 90vw)`
- **[image.png](src/image.png)** — splash graphic

Deployment is configured in [wrangler.toml](wrangler.toml): production branch is `main`.
