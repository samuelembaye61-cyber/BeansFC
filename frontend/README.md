# BeansFC frontend

This React and Vite frontend is a green-and-white website concept for BeansFC,
with home, squad, news, league, sponsors, and joining pages. Navigation uses
URL fragments so the concept can also be previewed as a static site.

All players, fixtures, results, articles, sponsor cards, photos, and Instagram
highlights are examples or placeholders, not live club information. Forms are
demonstrations only: they do not send or save information. No frontend page
currently connects to the Django backend. Replace the sample badge and content
with club-approved assets and details before launch.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite. Run `npm run build` to build the site
and `npm run lint` to check the code.
