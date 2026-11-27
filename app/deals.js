// Bargain Beacon — deal data.
//
// Every deal below was found and checked by the entry's maker on
// 27 November 2026 (Black Friday itself), by reading the store's own
// product page or a deals roundup that names the store and the price.
// `checked` is when this entry verified the price; `source` says where
// it was read. `verdict` is the maker's honest call:
//   "new-low" — the lowest price ever seen for this product.
//   "strong"  — a genuinely good price, but not a record low.
// `evidence` is the fact behind the verdict, in one or two sentences.
// Prices move fast on Black Friday; the store page is the final word.

export const CHECKED_AT = "27 Nov 2026, 15:30 WIB (08:30 UTC)";
export const SALE_WINDOW = "Black Friday Week, 19–30 Nov 2026 · Cyber Monday 30 Nov";

export const DEALS = [
  {
    id: "airpods-pro-3",
    name: "Apple AirPods Pro 3",
    detail: "Wireless earbuds with active noise cancellation, live translation and heart-rate sensing. USB-C MagSafe case.",
    store: "Amazon",
    storeUrl: "https://www.amazon.com/dp/B0FQFB8FMG",
    category: "Audio",
    sale: 149.0,
    usual: 249.0,
    checked: CHECKED_AT,
    source: "Amazon product page, via CNN Underscored (26 Nov) and MacRumors",
    verdict: "new-low",
    evidence:
      "Lowest price ever. Trackers put the previous low at $169 in June 2026, and the price was still $179 earlier in the week; it fell to $149 on 23 Nov and held through Black Friday.",
    note: "Apple's own event (27–30 Nov) gives a $50 gift card instead of a price cut, so $149 at Amazon is the cheaper buy.",
    tag: "Lowest ever",
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    detail: "Over-ear wireless noise-cancelling headphones, black. Industry-leading ANC, 30-hour battery.",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/-/6505727.p?skuId=6505727",
    category: "Audio",
    sale: 169.99,
    usual: 398.0,
    checked: CHECKED_AT,
    source: "Best Buy product page (SKU 6505727), via HotHardware",
    verdict: "new-low",
    evidence:
      "All-time low. Best Buy lists it as a Black Friday Doorbuster at $169.99, $29 below the previous front-page deal of $199, and $228 under the $398 list price.",
    note: "Previous generation (the XM6 is $348); the discount is the clearance of a still-excellent flagship.",
    tag: "Doorbuster",
  },
  {
    id: "bose-quietcomfort",
    name: "Bose QuietComfort Headphones (Gen 1)",
    detail: "Over-ear wireless noise-cancelling headphones, Cypress Green limited edition. 24-hour battery, multipoint Bluetooth.",
    store: "Amazon",
    storeUrl: "https://www.amazon.com/dp/B0CCZ1SQ8G",
    category: "Audio",
    sale: 169.0,
    usual: 359.0,
    checked: CHECKED_AT,
    source: "Amazon product page, via XDA Developers and TechTimes",
    verdict: "new-low",
    evidence:
      "Record low. The Gen 1 bottomed near $170 on Black Friday 2025; $169 beats that floor, and the newer Gen 2 (Aug 2026) sells for $219, so the old model is the value pick.",
    note: "Gen 2 adds Immersive Audio; the core drivers, ANC and battery are the same.",
    tag: "Lowest ever",
  },
  {
    id: "kindle-paperwhite-2024",
    name: "Kindle Paperwhite (2024) 16 GB",
    detail: "7-inch glare-free e-reader, warm light, waterproof, up to 12 weeks of battery. Black, with ads.",
    store: "Amazon",
    storeUrl: "https://www.amazon.com/dp/B0CFPJYX7P",
    category: "E-Readers",
    sale: 129.99,
    usual: 199.99,
    checked: CHECKED_AT,
    source: "Amazon product page, via The Verge and PopSci",
    verdict: "strong",
    evidence:
      "Near the lowest ever and $20 under its Prime Day price — but honest context: this is the 2024 model. Amazon replaced it in October 2026 and the new Paperwhite sells at $199.99 with no discount.",
    note: "Same screen, warm light and waterproofing as the 2026 model, for $70 less.",
    tag: "Near lowest ever",
  },
  {
    id: "apple-watch-series-12",
    name: "Apple Watch Series 12 GPS 42 mm",
    detail: "Black aluminium case, black Sport Band S/M. S11 chip, ECG, sleep-apnoea and hypertension notifications, up to 24-hour battery.",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/-/6572728.p?skuId=6572728",
    category: "Wearables",
    sale: 329.0,
    usual: 399.0,
    checked: CHECKED_AT,
    source: "Best Buy product page (SKU 6572728), via 9to5Toys",
    verdict: "new-low",
    evidence:
      "Lowest price since launch. The watch only came out in September 2026, and $329 is the first cut below $399 — every configuration is $70 off for Black Friday.",
    note: "Apple's own event gives a $50 gift card at full price; $70 off the price beats it.",
    tag: "Lowest ever",
  },
  {
    id: "hp-omnibook-5",
    name: "HP OmniBook 5 14\" 2K OLED Touch",
    detail: "14-inch 2K OLED touchscreen laptop, Intel Core 5 Series 3, 8 GB RAM, 256 GB SSD. Starlit Blue.",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/-/6690110.p?skuId=6690110",
    category: "Laptops",
    sale: 449.99,
    usual: 799.99,
    checked: CHECKED_AT,
    source: "Best Buy product page (SKU 6690110)",
    verdict: "strong",
    evidence:
      "A genuine doorbuster: $350 off a 2026 OLED touchscreen laptop, 44% under list. It is a first-year model, so there is no long price history to call it a record — the cut itself is the story.",
    note: "Doorbuster, ends 28 Nov. Open-box units start at $394.99.",
    tag: "Doorbuster · ends 28 Nov",
  },
  {
    id: "tcl-65-s4cf",
    name: "TCL 65\" S4CF Series 4K Fire TV (2026)",
    detail: "65-inch 4K UHD HDR smart TV with Fire TV, Alexa voice remote. Model 65S4CF.",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/-/6687112.p?skuId=6687112",
    category: "TVs",
    sale: 229.99,
    usual: 469.99,
    checked: CHECKED_AT,
    source: "Best Buy product page (SKU 6687112), via DealNews",
    verdict: "new-low",
    evidence:
      "Best price ever seen for this model: $40 lower than two weeks ago and $240 under the $469.99 comparable value. DealNews calls it the best deal it has seen for this TV.",
    note: "Doorbuster, ends 28 Nov. 60 Hz panel — a living-room TV, not a gaming display.",
    tag: "Doorbuster · ends 28 Nov",
  },
  {
    id: "insignia-40-f40",
    name: "Insignia 40\" F40 Series Fire TV",
    detail: "40-inch Full HD (1080p) LED smart Fire TV with Alexa voice remote. Model NS-40F401NA26.",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/-/6614066.p?skuId=6614066",
    category: "TVs",
    sale: 84.98,
    usual: 149.99,
    checked: CHECKED_AT,
    source: "Best Buy product page (SKU 6614066)",
    verdict: "strong",
    evidence:
      "43% off, and the price kept falling during the week — $89.99 on 15 Nov, $84.98 when checked on Black Friday. A cheap second-room TV at a genuinely cheap price.",
    note: "1080p only; fine for a bedroom or kitchen, not a main living-room set.",
    tag: "Price still falling",
  },
  {
    id: "dyson-v9-motorbar",
    name: "Dyson V9 Motorbar Cordless Vacuum",
    detail: "Cordless stick vacuum, 100 Air Watts, up to 40 minutes runtime, Motorbar anti-tangle head, LCD run-time screen. 4.6 lb.",
    store: "Amazon",
    storeUrl: "https://www.amazon.com/dp/B0FCVM3PZN",
    category: "Home",
    sale: 269.95,
    usual: 599.99,
    checked: CHECKED_AT,
    source: "Amazon product page, via 9to5Toys and PopSci",
    verdict: "new-low",
    evidence:
      "New all-time low. The V9 had previously bottomed near $350; $269.95 is $330 (55%) under the $599.99 list, and Dyson's own store matches it at $269.99.",
    note: "Dyson's lightest stick vacuum; 100 Air Watts is less suction than the V15, but the price is half of one.",
    tag: "Lowest ever",
  },
  {
    id: "kitchenaid-artisan-5qt",
    name: "KitchenAid Artisan 5-Qt Stand Mixer",
    detail: "Tilt-head stand mixer, 5-qt stainless bowl, 325 W, 10 speeds, pouring shield, flat beater, dough hook and whip. Model KSM150PS.",
    store: "Amazon",
    storeUrl: "https://www.amazon.com/dp/B00007IT2R",
    category: "Kitchen",
    sale: 349.95,
    usual: 499.99,
    checked: CHECKED_AT,
    source: "Amazon product page (ASIN B00007IT2R), verified 27 Nov 02:50 UTC",
    verdict: "strong",
    evidence:
      "Lowest price this year and 8% under October's Prime Day price — but only in some colours (Empire Red, Onyx Black, White, Pistachio). Other colours sit near list, so check the colour before you buy.",
    note: "KitchenAid's own store matches $349.99. The year's busiest baking season starts now, so this is the mixer most bakers picture.",
    tag: "Lowest this year",
  },
];

export function discountOf(deal) {
  return Math.round(((deal.usual - deal.sale) / deal.usual) * 100);
}

export function savingOf(deal) {
  return deal.usual - deal.sale;
}

export function money(n) {
  return "$" + n.toFixed(2).replace(/\.00$/, "");
}

export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();
export const STORES = [...new Set(DEALS.map((d) => d.store))].sort();
