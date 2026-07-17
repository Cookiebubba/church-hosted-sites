# NPBC Committee Guidelines Site

Static site for the New Providence Baptist Church Committee Guidelines Notebook (2026–2027), ready to deploy on Vercel (no build step — plain HTML/CSS/JS).

## Pages

- `index.html` — landing page offering both versions of the notebook.
- `original.html` — the notebook exactly as published, embedded PDF viewer with a download button.
- `guidelines.html` — the reformatted web edition in the sanctuary-aligned palette, with:
  - the NPBC logo in the header,
  - a hamburger button that opens a collapsible chapters sidebar (closes on any selection),
  - a borderless download glyph on the right of the header that downloads the reformatted PDF.

## Assets

- `assets/NPBC_Committee_Guidelines_Notebook_2026-2027.pdf` — original notebook.
- `assets/NPBC_Committee_Guidelines_Reformatted_2026-2027.pdf` — PDF rendition of the reformatted page. Regenerate with `node tools/make_pdf.mjs` (Playwright) followed by `python3 tools/cream_underlay.py` (paints the full-bleed cream background; Chromium leaves page margins unpainted).
- `assets/npbc-logo.jpeg` — church logo.
- `assets/qr/` — high-resolution QR-code posters (2800×3720 PNG) for the landing page, the original PDF page, and the reformatted guide, styled in the palette with the logo embedded.

## Design

Palette (Sanctuary Aligned): Warm Navy `#1C2E4A`, Cream `#F6F4EF`, Heritage Green `#2F4F3E`, Pastoral Blue `#8FA6B2`, Camel `#CBA46B`, Terracotta `#EB7045`, Heritage Burgundy `#7A2633`. Typography: Cormorant Garamond (display) and EB Garamond (body) via Google Fonts.

Note: the reformatted edition is a faithful transcription — typos and inconsistencies present in the original notebook are intentionally preserved.
