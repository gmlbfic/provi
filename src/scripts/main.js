(function () {
  "use strict";

  /* Header scroll state ------------------------------------------- */
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav ------------------------------------------------------ */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  function closeNav() {
    mainNav.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  }
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-locked", isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  });
  mainNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  /* Scroll reveal ----------------------------------------------------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal, .reveal-draw");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Servicios accordion ------------------------------------------------ */
  document.querySelectorAll(".servicio-item").forEach(function (item) {
    var head = item.querySelector(".servicio-head");
    head.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".servicio-item").forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".servicio-head").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Clientes tabs -------------------------------------------------------- */
  document.querySelectorAll(".clientes-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".clientes-tab").forEach(function (t) {
        t.classList.remove("is-active", "bg-ink", "text-white");
        t.classList.add("bg-paper", "text-muted");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active", "bg-ink", "text-white");
      tab.classList.remove("bg-paper", "text-muted");
      tab.setAttribute("aria-selected", "true");
      var target = tab.getAttribute("data-target");
      document.querySelectorAll(".clientes-panel").forEach(function (panel) {
        var match = panel.id === target;
        panel.hidden = !match;
      });
    });
  });

  /* Casos: modal ----------------------------------------------------------- */
  var casos = {
    "caso-anii": {
      img: "/img/alva/cases/anii.jpg",
      categoria: "Estrategia & campaña institucional",
      nombre: "Promover la innovación",
      cliente: "ANII — Agencia Nacional de Investigación e Innovación",
      desc: "Trabajamos junto a ANII en el desarrollo de una estrategia de comunicación orientada a promover la innovación, especialmente en el ámbito empresarial, y a fortalecer la difusión de sus instrumentos de apoyo. El proyecto implicó comunicar una oferta diversa de herramientas y programas a públicos heterogéneos, incluyendo empresas de distintos sectores y niveles de desarrollo, tanto en Montevideo como en el interior del país. A partir de este marco, diseñamos una estrategia de comunicación y campaña que permitió traducir conceptos vinculados a innovación en mensajes claros y relevantes.",
      tags: ["Campaña institucional", "Alcance nacional"],
    },
    "caso-correo": {
      img: "/img/alva/cases/correo.jpg",
      categoria: "Diagnóstico & plataforma de marca",
      nombre: "Una campaña institucional pensada para evolucionar",
      cliente: "Correo Uruguayo",
      desc: "Trabajamos junto a Correo Uruguayo en un proceso de diagnóstico y desarrollo de su estrategia de comunicación, en un contexto de varios años sin comunicación institucional sostenida. Realizamos entrevistas y un trabajo de investigación con distintas áreas para relevar percepciones, necesidades y oportunidades de mejora. A partir de este diagnóstico, definimos lineamientos estratégicos y un concepto de comunicación que dio origen a una campaña institucional, concebida como plataforma para la evolución de la marca en el tiempo.",
      tags: ["Diagnóstico institucional", "Radio", "Audiovisual"],
    },
    "caso-heritage": {
      img: "/img/alva/cases/heritage.jpg",
      categoria: "Campañas institucionales y comerciales",
      nombre: "Comunicación integral de marca y producto",
      cliente: "Banque Heritage",
      desc: "Desarrollamos la comunicación institucional y comercial del Banque Heritage, con un abordaje integral: desde campañas masivas hasta los materiales de producto y las comunicaciones a clientes. Acompañamos al banco en la construcción de su identidad de marca corporativa, manualizando la marca principal y desarrollando la identidad de sus productos y programas, junto a la estrategia de medios masivos y presencia en eventos.",
      tags: ["Campañas institucionales y comerciales", "Campañas multimedios"],
    },
    "caso-carve": {
      img: "/img/alva/cases/carve.jpg",
      categoria: "Campaña multimedios · Alcance nacional",
      nombre: "Noticias que llegan a tiempo",
      cliente: "Carve 850",
      desc: "Desarrollamos junto a Carve una campaña de sensibilización sobre violencia de género. Nos anticipamos a las noticias antes de que ocurran: creamos una serie de piezas en radio y redes que presentaban situaciones de violencia como “noticias del futuro”, visibilizando sus primeras manifestaciones y formas de denuncia. La campaña buscó generar conciencia y promover la acción temprana, amplificando el impacto del mensaje y cuestionando la naturalización de estas situaciones.",
      tags: ["Alcance nacional", "Campaña multimedios", "Audiovisual"],
    },
    "caso-elsie": {
      img: "/img/alva/cases/elsie.jpg",
      categoria: "Estrategia de sensibilización",
      nombre: "Historias de Paz",
      cliente: "Ministerio de Defensa · Proyecto Elsie",
      desc: "Bajo el marco del Proyecto Elsie, una iniciativa que busca fortalecer el rol de las mujeres en las operaciones de las Fuerzas Armadas, lanzamos el libro “Historias de Paz”. Reúne 6 relatos breves escritos por integrantes de las Fuerzas Armadas que participaron en Misiones de Paz de la ONU. A través de testimonios personales comparten experiencias vividas en lugares como el Congo, Haití y Colombia, resaltando la entrega, el compromiso con la paz, el trabajo en equipo y el impacto emocional de estar lejos del hogar cumpliendo una misión humanitaria.",
      tags: ["Pioneras en plasmar historias nunca reconocidas", "Llegada a escuelas a nivel nacional", "Audiovisual"],
    },
    "caso-farmashop": {
      img: "/img/alva/cases/farmashop.jpg",
      categoria: "Planificación & campaña de movilidad sostenible",
      nombre: "Delivery más verde",
      cliente: "Farmashop",
      desc: "Desarrollamos la comunicación del delivery sostenible de Farmashop, posicionándolo como un diferencial de marca e integrándolo al programa Más Verde. La estrategia se implementó en redes, punto de venta, impresos y prensa, sensibilizando sobre movilidad sostenible sin perder el detalle técnico.",
      tags: ["Sensibilización sin perder lo técnico", "Adaptado a todos los medios propios"],
    },
  };

  var overlay = document.getElementById("modalOverlay");
  if (overlay) {
    var modalImg = document.getElementById("modalImg");
    var modalCategoria = document.getElementById("modalCategoria");
    var modalTitle = document.getElementById("modalTitle");
    var modalCliente = document.getElementById("modalCliente");
    var modalDesc = document.getElementById("modalDesc");
    var modalTags = document.getElementById("modalTags");
    var lastFocused = null;

    function openModal(key) {
      var data = casos[key];
      if (!data) return;
      modalImg.src = data.img;
      modalImg.alt = data.nombre;
      modalCategoria.textContent = data.categoria;
      modalTitle.textContent = data.nombre;
      modalCliente.textContent = data.cliente;
      modalDesc.textContent = data.desc;
      modalTags.innerHTML = "";
      data.tags.forEach(function (tag) {
        var li = document.createElement("li");
        li.className = "text-[.78rem] font-bold px-3.5 py-1.5 rounded-full bg-paper";
        li.textContent = tag;
        modalTags.appendChild(li);
      });
      lastFocused = document.activeElement;
      overlay.classList.add("is-open");
      document.body.classList.add("overflow-hidden");
      document.getElementById("modalClose").focus();
    }
    function closeModal() {
      overlay.classList.remove("is-open");
      document.body.classList.remove("overflow-hidden");
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll("[data-modal]").forEach(function (card) {
      card.addEventListener("click", function () {
        openModal(card.getAttribute("data-modal"));
      });
    });
    document.getElementById("modalClose").addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
    });
  }
})();
