// Bargain Beacon — list rendering, search, filters, sorting and deal pages.
// No network requests: every deal comes from deals.js. Filter state is
// kept in the URL hash so a filtered view can be linked and screenshotted.

import { CHECKED_AT, SALE_WINDOW, DEALS, CATEGORIES, STORES, discountOf, savingOf, money } from "./deals.js";

const grid = document.getElementById("deal-grid");
const detailBox = document.getElementById("detail");
const emptyBox = document.getElementById("empty");
const resultLine = document.getElementById("result-line");
const statsBox = document.getElementById("stats");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const storeSelect = document.getElementById("store");
const minDiscountSelect = document.getElementById("min-discount");
const verdictSelect = document.getElementById("verdict");
const sortSelect = document.getElementById("sort");

document.getElementById("checked-line").textContent =
  "Prices checked " + CHECKED_AT + " · " + SALE_WINDOW + ".";

function option(select, value, label) {
  const el = document.createElement("option");
  el.value = value;
  el.textContent = label;
  select.appendChild(el);
}

option(categorySelect, "all", "All categories");
for (const c of CATEGORIES) option(categorySelect, c, c);
option(storeSelect, "all", "All stores");
for (const s of STORES) option(storeSelect, s, s);

const VERDICT_LABEL = { "new-low": "New low", strong: "Strong price" };

function verdictBadge(deal) {
  const span = document.createElement("span");
  span.className = "verdict " + deal.verdict;
  span.textContent = "★ " + VERDICT_LABEL[deal.verdict];
  return span;
}

function storeBadge(deal) {
  const span = document.createElement("span");
  span.className = "store-badge";
  span.textContent = deal.store;
  return span;
}

function dealCard(deal) {
  const card = document.createElement("article");
  card.className = "deal-card";

  const top = document.createElement("div");
  top.className = "deal-top";
  top.append(storeBadge(deal), verdictBadge(deal));
  card.appendChild(top);

  const title = document.createElement("h2");
  const titleLink = document.createElement("a");
  titleLink.href = "#/deal/" + deal.id;
  titleLink.textContent = deal.name;
  title.appendChild(titleLink);
  card.appendChild(title);

  const blurb = document.createElement("p");
  blurb.className = "deal-blurb";
  blurb.textContent = deal.detail;
  card.appendChild(blurb);

  const prices = document.createElement("p");
  prices.className = "price-row";
  const sale = document.createElement("span");
  sale.className = "sale-price";
  sale.textContent = money(deal.sale);
  const was = document.createElement("span");
  was.className = "was-price";
  was.textContent = money(deal.usual);
  const save = document.createElement("span");
  save.className = "save-chip";
  save.textContent = "Save " + money(savingOf(deal)) + " (" + discountOf(deal) + "% off)";
  prices.append(sale, was, save);
  card.appendChild(prices);

  const tag = document.createElement("p");
  tag.className = "deal-tag";
  tag.textContent = deal.category + " · " + deal.tag;
  card.appendChild(tag);

  const meta = document.createElement("p");
  meta.className = "deal-meta";
  meta.textContent = "Checked " + deal.checked + " · Source: " + deal.source;
  card.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "deal-actions";
  const buy = document.createElement("a");
  buy.className = "btn";
  buy.href = deal.storeUrl;
  buy.target = "_blank";
  buy.rel = "noopener";
  buy.textContent = "View at " + deal.store + " →";
  const details = document.createElement("a");
  details.className = "btn ghost";
  details.href = "#/deal/" + deal.id;
  details.textContent = "Why this is a deal";
  actions.append(buy, details);
  card.appendChild(actions);

  return card;
}

function readFilters() {
  return {
    q: searchInput.value.trim().toLowerCase(),
    category: categorySelect.value,
    store: storeSelect.value,
    minDiscount: Number(minDiscountSelect.value),
    verdict: verdictSelect.value,
    sort: sortSelect.value,
  };
}

function applyFilters(list, f) {
  return list.filter((d) => {
    if (f.q && !(d.name + " " + d.detail + " " + d.category + " " + d.store).toLowerCase().includes(f.q)) return false;
    if (f.category !== "all" && d.category !== f.category) return false;
    if (f.store !== "all" && d.store !== f.store) return false;
    if (discountOf(d) < f.minDiscount) return false;
    if (f.verdict !== "all" && d.verdict !== f.verdict) return false;
    return true;
  });
}

function sortList(list, mode) {
  const copy = [...list];
  if (mode === "discount") copy.sort((a, b) => discountOf(b) - discountOf(a) || savingOf(b) - savingOf(a));
  else if (mode === "saving") copy.sort((a, b) => savingOf(b) - savingOf(a));
  else if (mode === "price") copy.sort((a, b) => a.sale - b.sale);
  else if (mode === "new-low") copy.sort((a, b) => (a.verdict === "new-low" ? 0 : 1) - (b.verdict === "new-low" ? 0 : 1) || discountOf(b) - discountOf(a));
  return copy;
}

function renderStats(list) {
  const lows = list.filter((d) => d.verdict === "new-low").length;
  const total = list.reduce((sum, d) => sum + savingOf(d), 0);
  statsBox.innerHTML = "";
  const entries = [
    [String(list.length), list.length === 1 ? "deal listed" : "deals listed"],
    [String(lows), "new all-time lows"],
    [money(total), "total savings vs usual prices"],
  ];
  for (const [value, label] of entries) {
    const div = document.createElement("div");
    div.className = "stat";
    const b = document.createElement("b");
    b.textContent = value;
    const span = document.createElement("span");
    span.textContent = label;
    div.append(b, span);
    statsBox.appendChild(div);
  }
}

function renderList() {
  detailBox.hidden = true;
  detailBox.innerHTML = "";
  const f = readFilters();
  const filtered = sortList(applyFilters(DEALS, f), f.sort);
  grid.innerHTML = "";
  for (const deal of filtered) grid.appendChild(dealCard(deal));
  emptyBox.hidden = filtered.length !== 0;
  resultLine.textContent =
    filtered.length === DEALS.length
      ? "Showing all " + DEALS.length + " deals, sorted by " + sortSelect.selectedOptions[0].textContent.toLowerCase() + "."
      : "Showing " + filtered.length + " of " + DEALS.length + " deals.";
  renderStats(filtered);
}

function renderDetail(id) {
  const deal = DEALS.find((d) => d.id === id);
  grid.innerHTML = "";
  statsBox.innerHTML = "";
  resultLine.textContent = "";
  emptyBox.hidden = true;
  detailBox.hidden = false;
  detailBox.innerHTML = "";
  if (!deal) {
    const p = document.createElement("p");
    p.textContent = "No such deal. ";
    const back = document.createElement("a");
    back.href = "#/";
    back.textContent = "Back to all deals";
    p.appendChild(back);
    detailBox.appendChild(p);
    return;
  }

  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "#/";
  back.textContent = "← All deals";
  detailBox.appendChild(back);

  const top = document.createElement("div");
  top.className = "deal-top";
  top.append(storeBadge(deal), verdictBadge(deal));
  detailBox.appendChild(top);

  const title = document.createElement("h2");
  title.textContent = deal.name;
  detailBox.appendChild(title);

  const blurb = document.createElement("p");
  blurb.textContent = deal.detail;
  detailBox.appendChild(blurb);

  const prices = document.createElement("p");
  prices.className = "price-row";
  const sale = document.createElement("span");
  sale.className = "sale-price";
  sale.textContent = money(deal.sale);
  const was = document.createElement("span");
  was.className = "was-price";
  was.textContent = "usually " + money(deal.usual);
  const save = document.createElement("span");
  save.className = "save-chip";
  save.textContent = "Save " + money(savingOf(deal)) + " (" + discountOf(deal) + "% off)";
  prices.append(sale, was, save);
  detailBox.appendChild(prices);

  const evidence = document.createElement("div");
  evidence.className = "evidence";
  const evTitle = document.createElement("h3");
  evTitle.textContent = "Why this is a " + VERDICT_LABEL[deal.verdict].toLowerCase();
  const evText = document.createElement("p");
  evText.textContent = deal.evidence;
  evidence.append(evTitle, evText);
  detailBox.appendChild(evidence);

  const facts = document.createElement("dl");
  const rows = [
    ["Store", deal.store],
    ["Category", deal.category],
    ["Checked", deal.checked],
    ["Price read at", deal.source],
    ["Worth knowing", deal.note],
  ];
  for (const [term, value] of rows) {
    const dt = document.createElement("dt");
    dt.textContent = term;
    const dd = document.createElement("dd");
    dd.textContent = value;
    facts.append(dt, dd);
  }
  detailBox.appendChild(facts);

  const actions = document.createElement("div");
  actions.className = "deal-actions";
  const buy = document.createElement("a");
  buy.className = "btn";
  buy.href = deal.storeUrl;
  buy.target = "_blank";
  buy.rel = "noopener";
  buy.textContent = "View at " + deal.store + " →";
  actions.appendChild(buy);
  detailBox.appendChild(actions);
}

function route() {
  const hash = location.hash || "#/";
  if (hash.startsWith("#/deal/")) {
    renderDetail(hash.slice("#/deal/".length).split("?")[0]);
  } else {
    renderList();
  }
}

// Filter state can arrive in the hash, e.g. #/?store=Best+Buy&min=50,
// so a filtered view is a real link, not a staged screenshot.
function applyHashFilters() {
  const hash = location.hash || "";
  const query = hash.startsWith("#/?") ? hash.slice(3) : "";
  if (!query) return;
  const params = new URLSearchParams(query);
  if (params.get("q")) searchInput.value = params.get("q");
  if (params.get("category")) categorySelect.value = params.get("category");
  if (params.get("store")) storeSelect.value = params.get("store");
  if (params.get("min")) minDiscountSelect.value = params.get("min");
  if (params.get("verdict")) verdictSelect.value = params.get("verdict");
  if (params.get("sort")) sortSelect.value = params.get("sort");
}

for (const el of [searchInput, categorySelect, storeSelect, minDiscountSelect, verdictSelect, sortSelect]) {
  el.addEventListener("input", () => {
    if (!location.hash.startsWith("#/deal/")) renderList();
  });
}

document.getElementById("clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  categorySelect.value = "all";
  storeSelect.value = "all";
  minDiscountSelect.value = "0";
  verdictSelect.value = "all";
  sortSelect.value = "discount";
  renderList();
});

window.addEventListener("hashchange", () => {
  applyHashFilters();
  route();
});

applyHashFilters();
route();
