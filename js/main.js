/* ==========================================================
   Inicialização: links, slides, carrosséis, menu mobile.
   ========================================================== */
(function () {
  "use strict";

  var D = window.AFA_DATA;
  var WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  /* Insere a foto só se houver caminho; se falhar ao carregar, mantém o slot vazio. */
  function fillMedia(media, src, altAttrs) {
    if (!src) return;
    var img = el("img", null, altAttrs);
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", function () { img.remove(); media.classList.add("is-empty"); });
    img.src = src;
    media.classList.remove("is-empty");
    media.appendChild(img);
  }

  function buildServices(track) {
    D.services.forEach(function (s) {
      var li = el("li", "slide slide--service", { role: "group", "aria-roledescription": "slide" });
      var media = el("div", "slide__media is-empty");
      fillMedia(media, s.image, { "data-i18n-attr": "alt:services." + s.id + ".name" });
      var body = el("div", "slide__body");
      var h = el("h3", "slide__name", { "data-i18n": "services." + s.id + ".name" });
      var p = el("p", "slide__desc", { "data-i18n": "services." + s.id + ".desc" });
      body.appendChild(h); body.appendChild(p);
      li.appendChild(media); li.appendChild(body);
      track.appendChild(li);
    });
  }

  function buildProjects(track) {
    D.projects.forEach(function (p) {
      var li = el("li", "slide slide--project", { role: "group", "aria-roledescription": "slide" });
      var media = el("div", "slide__media is-empty");
      var attrs = p.alt ? { alt: p.alt } : { "data-i18n-attr": "alt:projects.slide" };
      fillMedia(media, p.image, attrs);
      li.appendChild(media);
      track.appendChild(li);
    });
  }

  function init() {
    // Links oficiais (vêm de data.js, um único lugar para editar)
    document.querySelectorAll("[data-link]").forEach(function (a) {
      a.href = D.links[a.getAttribute("data-link")];
    });
    document.querySelectorAll(".wa-path").forEach(function (p) { p.setAttribute("d", WA_PATH); });

    // Slides
    buildServices(document.querySelector("#carousel-services .carousel__track"));
    buildProjects(document.querySelector("#carousel-projects .carousel__track"));

    // Idioma (aplica textos aos slides recém-criados)
    window.AFA_I18N.init();

    // Carrosséis independentes
    var carousels = [
      new window.AFA_Carousel(document.getElementById("carousel-services")),
      new window.AFA_Carousel(document.getElementById("carousel-projects"))
    ];
    window.AFA_I18N.onChange(function () {
      carousels.forEach(function (c) { c.update(c.index); });
      syncMenuLabel();
    });

    // Ano do copyright
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    initMenu();
  }

  /* Menu mobile */
  var toggle, nav;
  function syncMenuLabel() {
    if (!toggle) return;
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", window.AFA_I18N.t(open ? "nav.close" : "nav.menu"));
  }
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", open);
    syncMenuLabel();
  }
  function initMenu() {
    toggle = document.querySelector(".menu-toggle");
    nav = document.getElementById("site-nav");
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function (m) {
      if (m.matches) setMenu(false);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
