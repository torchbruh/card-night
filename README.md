# Card Night Austin — Pokémon TCG leagues, card shows & shops for families

**Live site: https://card-night-atx.vercel.app**

A family-friendly local guide to Pokémon card leagues, card shows and game shops around Austin, TX — written for parents whose kids just got into Pokémon cards. Where to play on a weeknight, which shows are coming up, which shops are welcoming to kids, and how to not overpay.

| Page | URL |
|---|---|
| Home | https://card-night-atx.vercel.app/ |
| Places: leagues, shows & shops (18 listings) | https://card-night-atx.vercel.app/places |
| Parents' guide | https://card-night-atx.vercel.app/parents |
| Fair prices | https://card-night-atx.vercel.app/prices |
| Featured | https://card-night-atx.vercel.app/featured |

Covers shops like Game Kastle, Card Traders of Austin, Dragon's Lair, Pat's Games, Bamboo Trading Card Shop, Card Gurus, Rogues Gallery and Multiverse Hobbies, plus recurring shows (ATX Card Show Weekend, Home Town Card Show, Mom and Pop Card Show, ATX North in Belton).

Know a league night or show we're missing? Open an issue or use the contact page.

Keywords: Pokémon league Austin, Pokémon card shop Austin, Austin card show, Pokémon TCG kids Austin, Round Rock / Cedar Park / Leander Pokémon cards.

## How it works

Built with [Astro](https://astro.build) as a static site.

- Listings live in `src/data/listings.json` (type: League / Show / Shop). Each one links to its source.
- No invented events or prices. The fair-price page is a stub.
- The newsletter is a placeholder (mailto). No email provider is wired up yet.
- `robots.txt` and `sitemap.xml` live in `public/`. The `<key>.txt` file in `public/` is an IndexNow key for Bing/Yandex URL submission.

```sh
npm install
npm run dev
npm run build   # outputs to dist/
```

Deployed on Vercel (framework preset: Astro).

*Not affiliated with Nintendo, The Pokémon Company, or any listed shop.*
