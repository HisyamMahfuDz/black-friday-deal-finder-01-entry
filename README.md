# black-friday-deal-finder-01-entry

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/HisyamMahfuDz/black-friday-deal-finder-01-entry/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/HisyamMahfuDz/black-friday-deal-finder-01-entry/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

# Bargain Beacon — Real Black Friday Deals, Checked by Hand

A static deal finder for Black Friday and Cyber Monday 2026. Ten real
deals, each found and price-checked at its store on 27 November 2026
(Black Friday itself), with an honest verdict on whether it is really
a deal: **New low** (lowest price ever seen) or **Strong price**
(genuinely good, not a record).

## The deals

| Deal | Store | Sale | Usual | Verdict |
| --- | --- | --- | --- | --- |
| Apple AirPods Pro 3 | Amazon | $149 | $249 | New low |
| Sony WH-1000XM5 | Best Buy | $169.99 | $398 | New low |
| Bose QuietComfort Headphones (Gen 1) | Amazon | $169 | $359 | New low |
| Kindle Paperwhite (2024) 16 GB | Amazon | $129.99 | $199.99 | Strong price |
| Apple Watch Series 12 GPS 42 mm | Best Buy | $329 | $399 | New low |
| HP OmniBook 5 14" 2K OLED Touch | Best Buy | $449.99 | $799.99 | Strong price |
| TCL 65" S4CF Series 4K Fire TV | Best Buy | $229.99 | $469.99 | New low |
| Insignia 40" F40 Series Fire TV | Best Buy | $84.98 | $149.99 | Strong price |
| Dyson V9 Motorbar Cordless Vacuum | Amazon | $269.95 | $599.99 | New low |
| KitchenAid Artisan 5-Qt Stand Mixer | Amazon | $349.95 | $499.99 | Strong price |

Total savings vs usual prices: **$1,793.10**. Every card on the site
shows the product, store, store link, sale price, usual price,
discount, when the price was checked and where it was read, plus the
evidence behind the verdict.

## Use it

Serve `app/` with any static server (or `node serve.ts`, then open
http://localhost:8080). No build step, no network request: the deals
live in `app/deals.js` and the page renders them with `app/app.js`.

Search by name, and filter by category, store, minimum discount and
verdict; sort by biggest discount, biggest saving, lowest price, or
new lows first. Click a deal for its detail page: the evidence, the
source, and what is worth knowing before you buy. Filter state lives
in the URL hash, e.g. `#/?store=Best+Buy&min=50`.

## How the prices were checked

Each price was read on 27 November 2026 from the store's own product
page, or from a deals roundup that names the store and the price.
Prices move fast on Black Friday — the store page is the final word.
No affiliate links, no invented prices.

## Files

- `app/index.html` — page shell and controls
- `app/style.css` — the whole look, no frameworks
- `app/deals.js` — the ten checked deals and their evidence
- `app/app.js` — rendering, search, filters, sorting, deal pages
- `main.ts` — hands the site in (copies `app/` + `screenshots/`,
  writes `dossier.json` with the vendored make.fun library)
- `screenshots/` — real renders of the site in a browser
- `vendor/makefun-frontend.ts` — the kit's copy, unchanged

<sub>Entered on [make.fun](https://make.fun/?ref=0a6j83jv&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
