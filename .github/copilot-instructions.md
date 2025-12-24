<!-- Copilot instructions for AI coding agents -->
# Project overview

This is a small, static personal portfolio site (HTML/CSS/JS) intended to be served from a simple web host or local XAMPP/htdocs folder. There are no build tools, package managers, or tests included.

Key files:
- `index.html` — single-page site and canonical source of content/structure.
- `styles.css` — site theming and layout; uses CSS variables in `:root` and CSS Grid.
- `script.js` — minimal DOM interactions: mobile nav toggle (`#nav-toggle`), dynamic footer year (`#year`), contact form spinner (`.contact-form`, `#formSpinner`, `#submitBtn`).

# What an agent should know (immediately actionable)

- Serving: site is intended to live in XAMPP's `htdocs` (workspace path: `c:\xampp\htdocs\Portfolio`). To preview, open `http://localhost/Portfolio/` or open `index.html` directly in a browser.
- No build step: do not add bundler assumptions. Code edits should be direct source edits to the three files above.
- State is purely client-side. The contact form posts to Formspree (`action="https://formspree.io/f/xrezonqy"`) — do not attempt to change server-side behavior.
- Minimal JS conventions:
  - Mobile nav toggling: `nav.classList.toggle('show')` is the pattern to show/hide the nav.
  - Form submit flow: spinner element `#formSpinner` is shown and `#submitBtn` disabled on submit event in `script.js`.
  - Footer year: updated via `document.getElementById('year').textContent = new Date().getFullYear();`

# Editing and examples

- To add a new nav link, edit `index.html` inside `<nav id="nav">` — the mobile behavior is automatic because `script.js` listens for clicks inside `#nav`.
- To change colors or theme, prefer editing CSS variables in `:root` in `styles.css` (e.g., `--accent`, `--bg`). This is the single source of colors for the design.
- When adjusting component layout, use the existing CSS Grid definitions (e.g., `.hero-container`, `.skills-grid`, `.projects-grid`) to keep consistent responsive behavior.

# Debugging & testing

- Open browser DevTools (Console/Network) to observe client-side errors and Formspree network calls.
- For local testing of images/assets, ensure `profile.jpg` (or replacements) are placed next to `index.html`.
- Since there are no automated tests, validate changes manually by reloading the page served from `http://localhost/Portfolio/`.

# Pull request / change guidance for AI agents

- Keep changes minimal and local to the three primary files unless adding explicit new assets.
- Preserve accessibility basics (semantic tags, `alt` on images). `index.html` already uses semantic sections (`header`, `section`, `footer`).
- When modifying forms, do not remove the hidden `_captcha` input or Formspree action unless the user requests a backend change.

# Files to reference for examples

- `index.html` — nav markup, contact form markup, project cards.
- `script.js` — nav toggle, form spinner pattern, footer year.
- `styles.css` — theming via `:root`, grid usage, `.form-spinner` styling and animation.

# If you need more info

Ask the user for any intended build tool, hosting target other than XAMPP, or assets that should be added (images, analytics, etc.).

-- End of instructions
