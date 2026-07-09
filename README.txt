=== MADZ ===
Theme for: Madsonz Ads & Marketing Pvt. Ltd. (madz.com)
Version: 1.0.0
Requires at least: WordPress 6.0
Requires PHP: 7.4

-----------------------------------------
1. HOW TO INSTALL
-----------------------------------------
1. In WordPress admin, go to Appearance > Themes > Add New > Upload Theme.
2. Choose "madz.zip" (this file) and click Install Now.
3. Click Activate.
4. Go to Settings > Reading and set "Your homepage displays" to a static
   page is NOT required -- this theme's front-page.php will render the
   MADZ homepage automatically regardless of that setting.

-----------------------------------------
2. WHAT'S IN THE THEME
-----------------------------------------
style.css        Theme header + all site CSS (colors, type, layout)
functions.php    Theme setup, menu registration, font/script loading
header.php       Top docket bar + navigation
footer.php       Sign-off CTA + closing markup
front-page.php   The full homepage (hero, services, results, work, note)
index.php        Fallback template for blog posts / search results
assets/js/stamp.js   The rotating hero "stamp" animation
screenshot.png   Admin theme-picker thumbnail

-----------------------------------------
3. EDITING CONTENT
-----------------------------------------
This is a hand-coded design theme, not a page-builder theme, so the
homepage copy lives directly in front-page.php. To update it:

- Headline, subhead, CTA text -> front-page.php, inside <section class="hero">
- Services list -> front-page.php, inside <div class="ledger-list">
  (each row is one <div class="ledger-row">...</div>)
- Stat numbers -> front-page.php, inside <section class="results">
- Case studies -> front-page.php, inside <div class="tear-grid">
  (each card is one <div class="tear-card">...</div>)
- Testimonial -> front-page.php, inside <section class="note-section">
- Footer email / legal name -> footer.php

Site title shown in the top docket bar comes from Settings > General
("Site Title" field) via bloginfo('name') -- no code edit needed there.

-----------------------------------------
4. NAVIGATION MENU
-----------------------------------------
Go to Appearance > Menus, create a menu, add your pages/links, and
assign it to the "Primary Menu" location. Until you do this, the theme
shows a default fallback menu (Services / Work / Approach / Contact).

-----------------------------------------
5. LOGO
-----------------------------------------
Go to Appearance > Customize > Site Identity to upload a custom logo
image. Until one is uploaded, the theme shows the "MADZ." text
wordmark defined in header.php.

-----------------------------------------
6. FONTS
-----------------------------------------
Big Shoulders Display, IBM Plex Sans, and IBM Plex Mono are loaded
from Google Fonts in functions.php (madz_scripts). If you need a
self-hosted / GDPR-local-only setup, download these families and swap
the wp_enqueue_style() call in functions.php for a local stylesheet.

-----------------------------------------
7. NEXT STEPS BEFORE LAUNCH
-----------------------------------------
- Replace placeholder stats (3.2x ROAS, 92% retention, etc.) with real numbers
- Replace the 3 sample case studies with real client work
- Replace the sample testimonial with a real quote
- Point "Book a call" / "Book a strategy call" to a real booking link
  or contact form (currently a mailto: link to hello@madz.com)
