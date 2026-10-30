# Card Night (Austin)

A family-friendly local guide to Pokémon card leagues, card shows and shops around Austin, TX. Built with [Astro](https://astro.build) as a static site.

- Listings live in `src/data/listings.json` (type: League / Show / Shop). Each one links to its source.
- No invented events or prices. The fair-price page is a stub.
- The newsletter is a placeholder (mailto). No email provider is wired up yet.

```sh
npm install
npm run dev
npm run build   # outputs to dist/
```

Deployed on Vercel (framework preset: Astro).
