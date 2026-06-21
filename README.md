# MTG Game Night Catalogue

This is a fan-made working catalogue for Magic: The Gathering game-night formats and boxed-set ideas. It collects official-style, fan-made, and personal variants that are useful for casual prebuilt nights.

The boxed sets described here are personal play kits and catalogue entries, not products.

The site is intentionally still in Markdown. Treat these files as structured notes first and publishable pages later.

## Running The Site

This site is built with VitePress. Do not open the Markdown files, or a loose `index.html`, directly with a generic Live Preview extension. VitePress has to process the Markdown first so the theme, navigation, routing, search, and asset paths work correctly.

Install dependencies once:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Then open the local URL printed by the command, usually:

```text
http://127.0.0.1:5173/
```

## Publishing The Site

Build the static site:

```bash
npm run build
```

The publishable website will be generated in:

```text
.vitepress/dist/
```

Upload the contents of `.vitepress/dist/` to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or any ordinary web host. Do not upload the source Markdown files as the finished site unless the host is configured to run `npm run build` for you.

If you want a git-visible copy of the built site for local/root hosting, run:

```bash
npm run publish
```

That builds the site and copies the output into:

```text
docs/
```

The `docs/` folder is safe to track in git and can be used directly by GitHub Pages.

For local static testing, the server's document root must be `.vitepress/dist/`.

For example:

```bash
python -m http.server 5174 --directory .vitepress/dist
```

Or use the shortcut:

```bash
npm run serve:static
```

Then open:

```text
http://127.0.0.1:5174/
```

If you use a Live Server extension from the repo root and open `.vitepress/dist/index.html` as a nested path, the site may look unstyled because the generated HTML expects `/assets/...` to be served from the web root. Either open `.vitepress/dist/` as the served folder, or use `npm run preview`.

To test the tracked `docs/` copy:

```bash
npm run serve:docs
```

Then open:

```text
http://127.0.0.1:5175/
```

Use this local static test after `npm run publish`. If you build for GitHub project Pages with `npm run publish:github`, the generated site expects to live under `/magical-game-night-gatherings/`, which matches GitHub Pages but not a plain local server rooted at `docs/`.

## GitHub Pages

GitHub Pages can publish from the `/docs` folder on your `main` branch.

In GitHub:

1. Go to the repository's **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to `main`.
5. Set the folder to `/docs`.
6. Save.

For a normal project Pages URL like:

```text
https://YOUR-USER.github.io/magical-game-night-gatherings/
```

build the docs folder with:

```bash
npm run publish:github
```

That sets the VitePress base path to `/magical-game-night-gatherings/`, copies the build into `docs/`, and makes GitHub Pages asset paths resolve correctly.

Commit and push the updated `docs/` folder after running that command.

If you later use a custom domain or a `YOUR-USER.github.io` user site where the site lives at `/`, use `npm run publish` instead.

## Sections

- [Formats](formats/): Rulesets and play modes, including fan-maintained formats and personal variants.
- [Boxed Sets](boxed-sets/): Curated game-night boxes built around those formats.

## Organization

Each format folder should separate playable notes from archived reference material:

- `index.md`: The clean, readable publishable page. A matching `README.md` can be kept when GitHub/local browsing benefits from it.
- `sources/`: Copy-pasted or archived external material. Keep original links here.
- `variants/`: Local house variants or small twists.
- `assets/`: Images, printable cards, and other supporting files.

When a format comes from another fan site or community post, preserve the original URL in both the source archive and the relevant overview page.
