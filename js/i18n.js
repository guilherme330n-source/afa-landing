/* ==========================================================
   Traduções (EN padrão, PT, ES) e seletor de idioma.
   Elementos usam data-i18n="chave" (texto) ou
   data-i18n-attr="atributo:chave" (aria-label, content, etc.).
   ========================================================== */
(function () {
  "use strict";

  var STRINGS = {
    en: {
      "meta.title": "AFA Excavation | Pavers — Professional Excavation & Paving Services",
      "meta.description": "AFA Excavation | Pavers delivers excavation, pavers, driveways, patios, pool decks and outdoor construction for residential and commercial properties. Get a free quote.",
      "nav.home": "Home", "nav.services": "Services", "nav.projects": "Projects", "nav.about": "About", "nav.contact": "Contact",
      "nav.menu": "Open menu", "nav.close": "Close menu", "nav.main": "Main navigation", "lang.label": "Language",
      "hero.title": "Professional Excavation & Paving Services",
      "hero.subtitle": "Building pathways, making straight.",
      "hero.text": "Quality outdoor construction solutions for residential and commercial properties.",
      "hero.cta": "GET A FREE QUOTE",
      "services.title": "OUR SERVICES",
      "services.subtitle": "Outdoor solutions built with structure, precision, and quality.",
      "services.excavation.name": "Excavation", "services.excavation.desc": "Proper ground preparation for construction projects.",
      "services.pavers.name": "Pavers", "services.pavers.desc": "Durable and attractive paving solutions.",
      "services.driveways.name": "Driveways", "services.driveways.desc": "Strong and elegant driveways for everyday use.",
      "services.poolDecks.name": "Pool Decks", "services.poolDecks.desc": "Beautiful and functional outdoor pool areas.",
      "services.patios.name": "Patios", "services.patios.desc": "Outdoor spaces designed for comfort and functionality.",
      "services.walkways.name": "Walkways", "services.walkways.desc": "Professionally installed pathways.",
      "services.sidewalks.name": "Sidewalks", "services.sidewalks.desc": "Durable and well-finished pedestrian surfaces.",
      "services.entryways.name": "Entryways", "services.entryways.desc": "Attractive and functional property entrances.",
      "services.parkingAreas.name": "Parking Areas", "services.parkingAreas.desc": "Practical paving solutions for parking spaces.",
      "services.sitePreparation.name": "Site Preparation", "services.sitePreparation.desc": "Professional preparation for construction projects.",
      "services.basePreparation.name": "Base Preparation", "services.basePreparation.desc": "Proper foundation preparation for durable surfaces.",
      "services.drainage.name": "Drainage", "services.drainage.desc": "Solutions to help manage water flow and drainage.",
      "projects.title": "OUR PROJECTS",
      "projects.subtitle": "A closer look at our work.",
      "projects.slide": "Project photo",
      "carousel.prev": "Previous slide", "carousel.next": "Next slide", "carousel.goto": "Go to slide", "carousel.of": "of",
      "about.title": "ABOUT AFA",
      "about.p1": "AFA Excavation | Pavers is dedicated to delivering quality outdoor construction solutions, combining proper preparation, precision, and attention to detail.",
      "about.p2": "From excavation and site preparation to paving and outdoor improvements, our goal is to provide reliable solutions for residential and commercial properties.",
      "about.imgAlt": "Paver driveway finished by AFA Excavation | Pavers",
      "hero.imgAlt": "Paver driveway in front of a modern home at dusk",
      "cta.title": "LET'S BUILD SOMETHING GREAT",
      "cta.subtitle": "Have a project in mind? Get in touch with us and request your free quote.",
      "cta.button": "CONTACT US",
      "cta.instagram": "Follow us on Instagram",
      "footer.tagline": "Building pathways, making straight.",
      "footer.nav": "Footer navigation", "footer.rights": "All rights reserved.",
      "float.whatsapp": "Chat with AFA on WhatsApp", "float.instagram": "Visit AFA on Instagram",
      "social.whatsapp": "WhatsApp", "social.instagram": "Instagram",
      "logo.alt": "AFA Excavation | Pavers"
    },
    pt: {
      "meta.title": "AFA Excavation | Pavers — Serviços Profissionais de Escavação e Pavimentação",
      "meta.description": "A AFA Excavation | Pavers realiza escavação, pavers, entradas de garagem, pátios, decks de piscina e obras externas para propriedades residenciais e comerciais. Peça um orçamento grátis.",
      "nav.home": "Início", "nav.services": "Serviços", "nav.projects": "Projetos", "nav.about": "Sobre", "nav.contact": "Contato",
      "nav.menu": "Abrir menu", "nav.close": "Fechar menu", "nav.main": "Navegação principal", "lang.label": "Idioma",
      "hero.title": "Serviços Profissionais de Escavação e Pavimentação",
      "hero.subtitle": "Construindo caminhos, mantendo o rumo.",
      "hero.text": "Soluções de qualidade em obras externas para propriedades residenciais e comerciais.",
      "hero.cta": "PEÇA UM ORÇAMENTO GRÁTIS",
      "services.title": "NOSSOS SERVIÇOS",
      "services.subtitle": "Soluções externas feitas com estrutura, precisão e qualidade.",
      "services.excavation.name": "Escavação", "services.excavation.desc": "Preparação adequada do terreno para obras de construção.",
      "services.pavers.name": "Pavers", "services.pavers.desc": "Soluções de pavimentação duráveis e atraentes.",
      "services.driveways.name": "Entradas de Garagem", "services.driveways.desc": "Entradas de garagem resistentes e elegantes para o uso diário.",
      "services.poolDecks.name": "Decks de Piscina", "services.poolDecks.desc": "Áreas de piscina bonitas e funcionais.",
      "services.patios.name": "Pátios", "services.patios.desc": "Espaços externos pensados para conforto e funcionalidade.",
      "services.walkways.name": "Caminhos", "services.walkways.desc": "Caminhos instalados com profissionalismo.",
      "services.sidewalks.name": "Calçadas", "services.sidewalks.desc": "Superfícies para pedestres duráveis e bem acabadas.",
      "services.entryways.name": "Entradas", "services.entryways.desc": "Entradas de propriedade atraentes e funcionais.",
      "services.parkingAreas.name": "Áreas de Estacionamento", "services.parkingAreas.desc": "Soluções práticas de pavimentação para vagas de estacionamento.",
      "services.sitePreparation.name": "Preparação do Terreno", "services.sitePreparation.desc": "Preparação profissional para obras de construção.",
      "services.basePreparation.name": "Preparação da Base", "services.basePreparation.desc": "Preparação correta da fundação para superfícies duráveis.",
      "services.drainage.name": "Drenagem", "services.drainage.desc": "Soluções para ajudar a controlar o fluxo de água e a drenagem.",
      "projects.title": "NOSSOS PROJETOS",
      "projects.subtitle": "Um olhar mais de perto sobre o nosso trabalho.",
      "projects.slide": "Foto de projeto",
      "carousel.prev": "Slide anterior", "carousel.next": "Próximo slide", "carousel.goto": "Ir para o slide", "carousel.of": "de",
      "about.title": "SOBRE A AFA",
      "about.p1": "A AFA Excavation | Pavers se dedica a entregar soluções de qualidade em obras externas, combinando preparação adequada, precisão e atenção aos detalhes.",
      "about.p2": "Da escavação e preparação do terreno à pavimentação e melhorias externas, nosso objetivo é oferecer soluções confiáveis para propriedades residenciais e comerciais.",
      "about.imgAlt": "Entrada de garagem em pavers finalizada pela AFA Excavation | Pavers",
      "hero.imgAlt": "Entrada de garagem em pavers diante de uma casa moderna ao entardecer",
      "cta.title": "VAMOS CONSTRUIR ALGO GRANDIOSO",
      "cta.subtitle": "Tem um projeto em mente? Fale com a gente e peça seu orçamento grátis.",
      "cta.button": "FALE CONOSCO",
      "cta.instagram": "Siga-nos no Instagram",
      "footer.tagline": "Construindo caminhos, mantendo o rumo.",
      "footer.nav": "Navegação do rodapé", "footer.rights": "Todos os direitos reservados.",
      "float.whatsapp": "Fale com a AFA no WhatsApp", "float.instagram": "Visite a AFA no Instagram",
      "social.whatsapp": "WhatsApp", "social.instagram": "Instagram",
      "logo.alt": "AFA Excavation | Pavers"
    },
    es: {
      "meta.title": "AFA Excavation | Pavers — Servicios Profesionales de Excavación y Pavimentación",
      "meta.description": "AFA Excavation | Pavers realiza excavación, adoquines, entradas de vehículos, patios, terrazas de piscina y obras exteriores para propiedades residenciales y comerciales. Solicite una cotización gratis.",
      "nav.home": "Inicio", "nav.services": "Servicios", "nav.projects": "Proyectos", "nav.about": "Nosotros", "nav.contact": "Contacto",
      "nav.menu": "Abrir menú", "nav.close": "Cerrar menú", "nav.main": "Navegación principal", "lang.label": "Idioma",
      "hero.title": "Servicios Profesionales de Excavación y Pavimentación",
      "hero.subtitle": "Construyendo caminos, haciéndolos rectos.",
      "hero.text": "Soluciones de calidad en obras exteriores para propiedades residenciales y comerciales.",
      "hero.cta": "SOLICITE UNA COTIZACIÓN GRATIS",
      "services.title": "NUESTROS SERVICIOS",
      "services.subtitle": "Soluciones exteriores construidas con estructura, precisión y calidad.",
      "services.excavation.name": "Excavación", "services.excavation.desc": "Preparación adecuada del terreno para proyectos de construcción.",
      "services.pavers.name": "Adoquines (Pavers)", "services.pavers.desc": "Soluciones de pavimentación duraderas y atractivas.",
      "services.driveways.name": "Entradas de Vehículos", "services.driveways.desc": "Entradas de vehículos resistentes y elegantes para el uso diario.",
      "services.poolDecks.name": "Terrazas de Piscina", "services.poolDecks.desc": "Áreas de piscina hermosas y funcionales.",
      "services.patios.name": "Patios", "services.patios.desc": "Espacios exteriores diseñados para la comodidad y la funcionalidad.",
      "services.walkways.name": "Senderos", "services.walkways.desc": "Caminos instalados profesionalmente.",
      "services.sidewalks.name": "Aceras", "services.sidewalks.desc": "Superficies peatonales duraderas y bien terminadas.",
      "services.entryways.name": "Accesos", "services.entryways.desc": "Accesos de propiedad atractivos y funcionales.",
      "services.parkingAreas.name": "Áreas de Estacionamiento", "services.parkingAreas.desc": "Soluciones prácticas de pavimentación para estacionamientos.",
      "services.sitePreparation.name": "Preparación del Sitio", "services.sitePreparation.desc": "Preparación profesional para proyectos de construcción.",
      "services.basePreparation.name": "Preparación de la Base", "services.basePreparation.desc": "Preparación adecuada de la base para superficies duraderas.",
      "services.drainage.name": "Drenaje", "services.drainage.desc": "Soluciones para ayudar a controlar el flujo de agua y el drenaje.",
      "projects.title": "NUESTROS PROYECTOS",
      "projects.subtitle": "Una mirada más cercana a nuestro trabajo.",
      "projects.slide": "Foto de proyecto",
      "carousel.prev": "Diapositiva anterior", "carousel.next": "Siguiente diapositiva", "carousel.goto": "Ir a la diapositiva", "carousel.of": "de",
      "about.title": "SOBRE AFA",
      "about.p1": "AFA Excavation | Pavers se dedica a ofrecer soluciones de calidad en obras exteriores, combinando preparación adecuada, precisión y atención al detalle.",
      "about.p2": "Desde la excavación y la preparación del sitio hasta la pavimentación y las mejoras exteriores, nuestro objetivo es brindar soluciones confiables para propiedades residenciales y comerciales.",
      "about.imgAlt": "Entrada de vehículos con adoquines terminada por AFA Excavation | Pavers",
      "hero.imgAlt": "Entrada de adoquines frente a una casa moderna al anochecer",
      "cta.title": "CONSTRUYAMOS ALGO GRANDIOSO",
      "cta.subtitle": "¿Tiene un proyecto en mente? Contáctenos y solicite su cotización gratis.",
      "cta.button": "CONTÁCTENOS",
      "cta.instagram": "Síganos en Instagram",
      "footer.tagline": "Construyendo caminos, haciéndolos rectos.",
      "footer.nav": "Navegación del pie de página", "footer.rights": "Todos los derechos reservados.",
      "float.whatsapp": "Escriba a AFA por WhatsApp", "float.instagram": "Visite AFA en Instagram",
      "social.whatsapp": "WhatsApp", "social.instagram": "Instagram",
      "logo.alt": "AFA Excavation | Pavers"
    }
  };

  var DEFAULT = "en";
  var KEY = "afa-lang";
  var current = DEFAULT;
  var listeners = [];

  function t(key) {
    var d = STRINGS[current] || STRINGS[DEFAULT];
    return d[key] != null ? d[key] : (STRINGS[DEFAULT][key] != null ? STRINGS[DEFAULT][key] : key);
  }

  function apply() {
    document.documentElement.lang = current;
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", t("meta.title"));
    var ogd = document.querySelector('meta[property="og:description"]');
    if (ogd) ogd.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    var sel = document.getElementById("lang-select");
    if (sel) sel.value = current;
    listeners.forEach(function (fn) { fn(current); });
  }

  function set(lang) {
    if (!STRINGS[lang]) lang = DEFAULT;
    current = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage indisponível */ }
    apply();
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
    if (saved && STRINGS[saved]) current = saved;
    var sel = document.getElementById("lang-select");
    if (sel) sel.addEventListener("change", function () { set(sel.value); });
    apply();
  }

  window.AFA_I18N = { t: t, set: set, init: init, onChange: function (fn) { listeners.push(fn); } };
})();
