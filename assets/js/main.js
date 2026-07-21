(function () {
  "use strict";

  // Reemplazar por el número de WhatsApp real de Providencia (formato: 598XXXXXXXX)
  var WHATSAPP_NUMBER = "59800000000";

  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  var form = document.getElementById("storyForm");
  var result = document.getElementById("storyResult");
  var storyText = document.getElementById("storyText");
  var whatsappCta = document.getElementById("whatsappCta");
  var resetBtn = document.getElementById("storyReset");
  var submitBtn = form.querySelector("button[type=submit]");
  var submitLabel = submitBtn.querySelector(".btn-label");

  function clearErrors(formEl) {
    formEl.querySelectorAll(".error-msg").forEach(function (el) { el.textContent = ""; });
    formEl.querySelectorAll(".is-invalid").forEach(function (el) { el.classList.remove("is-invalid"); });
  }

  function setError(formEl, field, message) {
    field.classList.add("is-invalid");
    var msg = formEl.querySelector('[data-error-for="' + field.name + '"]');
    if (msg) msg.textContent = message;
  }

  function onlyDigits(value) {
    return (value || "").replace(/\D/g, "");
  }

  function validate(data) {
    var valid = true;

    if (!data.nombre.trim() || data.nombre.trim().length < 3) {
      setError(form, form.nombre, "Ingresá tu nombre y apellido.");
      valid = false;
    }

    var celularDigits = onlyDigits(data.celular);
    if (celularDigits.length < 8) {
      setError(form, form.celular, "Ingresá un celular válido.");
      valid = false;
    }

    var cedulaDigits = onlyDigits(data.cedula);
    if (cedulaDigits.length < 7 || cedulaDigits.length > 8) {
      setError(form, form.cedula, "Ingresá una cédula válida.");
      valid = false;
    }

    if (!data.motivacion.trim()) {
      setError(form, form.motivacion, "Contanos qué te motiva.");
      valid = false;
    }

    if (!data.expectativa.trim()) {
      setError(form, form.expectativa, "Contanos qué esperás lograr.");
      valid = false;
    }

    return valid;
  }

  function firstName(fullName) {
    return fullName.trim().split(/\s+/)[0];
  }

  function buildStory(data) {
    var name = firstName(data.nombre);
    return (
      "Querido/a " + name + ":\n\n" +
      "Hay historias que empiezan en una casa de Casabó, en 1994, cuando un grupo de " +
      "familias y voluntarios decidió no mirar para el costado.\n\n" +
      "Hoy esa historia te suma un capítulo: dijiste que te motiva colaborar porque " +
      "“" + data.motivacion.trim() + "”, y que esperás " +
      "“" + data.expectativa.trim() + "”.\n\n" +
      "Con tu número, un niño o joven de Providencia tiene una nueva oportunidad de " +
      "seguir estudiando, jugar y construir su propio camino.\n\n" +
      "Esta historia recién empieza. Y ahora, " + name + ", también es tuya."
    );
  }

  function buildWhatsappUrl(data) {
    var message = "Hola! Soy " + data.nombre.trim() +
      " y quiero ser parte de la Rifa Providencia.";
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors(form);

    var data = {
      nombre: form.nombre.value,
      celular: form.celular.value,
      cedula: form.cedula.value,
      motivacion: form.motivacion.value,
      expectativa: form.expectativa.value
    };

    if (!validate(data)) {
      var firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    submitBtn.disabled = true;
    submitLabel.textContent = "Escribiendo tu historia...";

    window.setTimeout(function () {
      storyText.textContent = buildStory(data);
      whatsappCta.href = buildWhatsappUrl(data);

      form.hidden = true;
      result.hidden = false;
      result.focus();

      submitBtn.disabled = false;
      submitLabel.textContent = "Crear mi historia";
    }, 700);
  });

  resetBtn.addEventListener("click", function () {
    form.reset();
    clearErrors(form);
    form.hidden = false;
    result.hidden = true;
    form.nombre.focus();
  });

  // No hay backend conectado: valida y muestra confirmación, pero no envía los datos a ningún lado todavía.
  var contactForm = document.getElementById("contactForm");
  var contactResult = document.getElementById("contactResult");
  var contactResetBtn = document.getElementById("contactReset");
  var contactSubmitBtn = contactForm.querySelector("button[type=submit]");
  var contactSubmitLabel = contactSubmitBtn.querySelector(".btn-label");

  function validateContact(data) {
    var valid = true;

    if (!data.nombre.trim() || data.nombre.trim().length < 3) {
      setError(contactForm, contactForm.contactNombre, "Ingresá tu nombre.");
      valid = false;
    }

    if (!data.medio.trim() || data.medio.trim().length < 5) {
      setError(contactForm, contactForm.contactMedio, "Ingresá un email o celular válido.");
      valid = false;
    }

    if (!data.mensaje.trim()) {
      setError(contactForm, contactForm.contactMensaje, "Contanos tu pregunta.");
      valid = false;
    }

    return valid;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors(contactForm);

    var data = {
      nombre: contactForm.contactNombre.value,
      medio: contactForm.contactMedio.value,
      mensaje: contactForm.contactMensaje.value
    };

    if (!validateContact(data)) {
      var firstInvalid = contactForm.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    contactSubmitBtn.disabled = true;
    contactSubmitLabel.textContent = "Enviando...";

    window.setTimeout(function () {
      contactForm.hidden = true;
      contactResult.hidden = false;
      contactResult.focus();

      contactSubmitBtn.disabled = false;
      contactSubmitLabel.textContent = "Enviar pregunta";
    }, 500);
  });

  contactResetBtn.addEventListener("click", function () {
    contactForm.reset();
    clearErrors(contactForm);
    contactForm.hidden = false;
    contactResult.hidden = true;
    contactForm.contactNombre.focus();
  });
})();
