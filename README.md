# Olive & Ember (fictional concept)

Demo website for a made-up restaurant. Next.js, TypeScript, Tailwind. Builds to static files.

## Run

```
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
```

## Edit

- Menu, hours, address, phone, email, gallery: `lib/restaurant.ts`
- Colors: `tailwind.config.ts`
- Use real photos: put files in `public/photos/` and set `src: "/photos/name.jpg"` on a gallery item in `lib/restaurant.ts`. For the hero and dish cards, pass `src` to the `Photo` component in `app/page.tsx`.
- Reservation link: set `reserveHref` in `lib/restaurant.ts` and the button on `app/visit/page.tsx`.

## Demo content

The address, phone (555-01xx), email (.example) and menu are invented. Replace them before showing this as a real restaurant site.

## Deploy to Cloudflare Pages

Build command `npm run build`, output directory `out`. Fonts (Cormorant Garamond, DM Sans) download at build time.

## Publish on GitHub Pages

The `docs` folder holds the built site. GitHub Pages serves it at https://yhou30-lgtm.github.io/Olive-Ember/ (Settings, Pages, Branch main, folder /docs). GitHub does not run the build, so after changing the site, rebuild and push:

```
MSYS_NO_PATHCONV=1 BASE_PATH=/Olive-Ember npx next build   # in Git Bash
rm -rf docs && cp -r out docs && touch docs/.nojekyll
```
