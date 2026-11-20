(() => {
  // Mobile nav
  const t = document.querySelector(".nav-toggle"), n = document.getElementById("nav");
  if (t && n) t.addEventListener("click", () => {
    const o = n.classList.toggle("open");
    t.setAttribute("aria-expanded", o);
  });
  // Year
  document.querySelectorAll("[data-year]").forEach(e => e.textContent = new Date().getFullYear());
  // Gallery filters
  const btns = document.querySelectorAll(".filters button");
  btns.forEach(b => b.addEventListener("click", () => {
    btns.forEach(x => x.setAttribute("aria-pressed", x === b));
    const c = b.dataset.cat;
    document.querySelectorAll("[data-cat]").forEach(i => { if (i.tagName !== "BUTTON") i.hidden = !(c === "All" || i.dataset.cat === c); });
  }));
  // Lightbox
  const lb = document.querySelector(".lightbox");
  if (lb) {
    const img = lb.querySelector("img");
    document.querySelectorAll(".tile[data-full]").forEach(tile => tile.addEventListener("click", () => {
      img.src = tile.dataset.full; img.alt = tile.dataset.title || ""; lb.classList.add("open");
    }));
    const close = () => { lb.classList.remove("open"); img.src = ""; };
    lb.addEventListener("click", e => { if (e.target !== img) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }
  // Preselect service on contact form via ?service=
  const sel = document.querySelector("select[name=service]");
  if (sel) { const v = new URLSearchParams(location.search).get("service"); if (v) [...sel.options].forEach(o => { if (o.value === v) sel.value = v; }); }
})();
