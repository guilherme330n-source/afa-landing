/* ==========================================================
   Carrossel reutilizável.
   Usa CSS scroll-snap: o gesto de deslizar no celular é nativo
   (e não interfere na rolagem vertical). Setas, indicadores e
   teclado (← →) controlam o mesmo scroll.
   Cada instância é independente.
   ========================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function Carousel(root) {
    this.root = root;
    this.viewport = root.querySelector(".carousel__viewport");
    this.track = root.querySelector(".carousel__track");
    this.prev = root.querySelector(".carousel__btn--prev");
    this.next = root.querySelector(".carousel__btn--next");
    this.dotsEl = root.querySelector(".carousel__dots");
    this.countEl = root.querySelector(".carousel__count");
    this.slides = Array.prototype.slice.call(this.track.children);
    this.index = 0;
    this.ticking = false;
    this.buildDots();
    this.bind();
    this.update(0);
  }

  Carousel.prototype.buildDots = function () {
    var self = this;
    this.dotsEl.innerHTML = "";
    this.dots = this.slides.map(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "carousel__dot";
      b.addEventListener("click", function () { self.goTo(i); });
      self.dotsEl.appendChild(b);
      return b;
    });
  };

  Carousel.prototype.bind = function () {
    var self = this;
    this.prev.addEventListener("click", function () { self.goTo(self.index - 1); });
    this.next.addEventListener("click", function () { self.goTo(self.index + 1); });

    this.viewport.addEventListener("scroll", function () {
      if (self.ticking) return;
      self.ticking = true;
      requestAnimationFrame(function () {
        self.ticking = false;
        var w = self.viewport.clientWidth || 1;
        self.update(Math.round(self.viewport.scrollLeft / w));
      });
    }, { passive: true });

    this.viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); self.goTo(self.index + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); self.goTo(self.index - 1); }
      else if (e.key === "Home") { e.preventDefault(); self.goTo(0); }
      else if (e.key === "End") { e.preventDefault(); self.goTo(self.slides.length - 1); }
    });

    window.addEventListener("resize", function () {
      self.viewport.scrollTo({ left: self.index * self.viewport.clientWidth, behavior: "auto" });
    });
  };

  Carousel.prototype.goTo = function (i) {
    i = Math.max(0, Math.min(this.slides.length - 1, i));
    this.viewport.scrollTo({
      left: i * this.viewport.clientWidth,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
    this.update(i);
  };

  /* Atualiza indicadores, contador, estado das setas e rótulos (idioma). */
  Carousel.prototype.update = function (i) {
    var t = window.AFA_I18N.t;
    var total = this.slides.length;
    i = Math.max(0, Math.min(total - 1, i));
    this.index = i;

    this.slides.forEach(function (s, n) {
      s.setAttribute("aria-label", (n + 1) + " " + t("carousel.of") + " " + total);
    });
    this.dots.forEach(function (d, n) {
      d.setAttribute("aria-label", t("carousel.goto") + " " + (n + 1));
      if (n === i) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
    this.prev.setAttribute("aria-label", t("carousel.prev"));
    this.next.setAttribute("aria-label", t("carousel.next"));
    this.prev.disabled = i === 0;
    this.next.disabled = i === total - 1;
    if (this.countEl) {
      this.countEl.textContent = String(i + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
    }
  };

  window.AFA_Carousel = Carousel;
})();
