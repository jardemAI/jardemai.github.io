# Järdem AI Landing Page

Static multilingual landing page and interactive prototype for **Järdem AI** — open AI help for Central Asia.

[Try the demo](https://jardemai.github.io)

## Languages

The site supports:

- Russian: `ru`
- Kazakh: `kk`
- English: `en`

The language switcher is visible in the header. The selected language is saved in `localStorage`, so returning users see the same language again.

Language URLs for GitHub Pages:

```text
https://jardemai.github.io/?lang=en
https://jardemai.github.io/?lang=ru
https://jardemai.github.io/?lang=kk
```

## Multilingual SEO

The page includes:

- dynamic `<html lang="">`
- translated title and meta description
- `hreflang` tags
- canonical URL
- query-param language structure for GitHub Pages

For a larger production version, this can later be upgraded to language-prefixed routes: `/en/`, `/ru/`, `/kk/`.

## Files

- `index.html` — landing page
- `styles.css` — responsive design
- `i18n.js` — translations, localStorage, URL language, SEO/meta updates
- `script.js` — interactive demo scenarios
- `assets/favicon.svg` — favicon

## Publish on GitHub Pages

1. Upload all files into the repository root.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save.


## Local testing note

Do not test by double-clicking `index.html` if the browser blocks `file://` behavior. Run a tiny local server instead:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/?lang=en
```
