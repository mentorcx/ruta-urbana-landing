(function () {
  "use strict";


  // Decorative motion is progressive enhancement and respects accessibility preferences.
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const revealTargets = document.querySelectorAll(
      ".lifestyle-photo, .lifestyle-copy, .section-heading, .benefit-card, .gallery, .product-info, .fit-intro, .fit-form, .purchase-inner > div, .faq-items"
    );
    if ("IntersectionObserver" in window) {
      document.documentElement.classList.add("js-motion");
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px 60px 0px" });
      revealTargets.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", String(index % 3 * 70) + "ms");
        observer.observe(element);
      });
    }
    const heroVisual = document.querySelector(".hero-visual");
    if (heroVisual && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      heroVisual.addEventListener("pointermove", (event) => {
        const rect = heroVisual.getBoundingClientRect();
        heroVisual.style.setProperty("--pointer-x", ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
        heroVisual.style.setProperty("--pointer-y", ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
      });
      heroVisual.addEventListener("pointerleave", () => {
        heroVisual.style.setProperty("--pointer-x", "50%");
        heroVisual.style.setProperty("--pointer-y", "50%");
      });
    }
  }

  const image = document.getElementById("gallery-main");
  const thumbnails = Array.from(document.querySelectorAll(".gallery-thumb"));

  if (image && thumbnails.length) {
    thumbnails.forEach((button) => {
      button.addEventListener("click", () => {
        const src = button.dataset.image;
        const alt = button.dataset.alt || "Mochila Urbana 20";
        if (!src || !src.startsWith("/assets/")) return;
        image.classList.add("is-changing");
        image.src = src;
        image.alt = alt;
        const finishChange = () => image.classList.remove("is-changing");
        if (image.complete) requestAnimationFrame(finishChange);
        else image.addEventListener("load", finishChange, { once: true });
        thumbnails.forEach((item) => {
          const current = item === button;
          item.classList.toggle("is-current", current);
          item.setAttribute("aria-pressed", String(current));
        });
      });
    });
  }


  const colorButtons = Array.from(document.querySelectorAll(".color-option"));
  const colorNote = document.getElementById("color-note");
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const zoomButton = document.getElementById("gallery-zoom");
  const lightboxClose = document.getElementById("lightbox-close");
  let selectedColor = "negro";

  function applySelectedColor() {
    const isProduct = image && image.getAttribute("src") === "/assets/mochila-urbana20-negra.png";
    const simulated = selectedColor === "gris" && isProduct;
    if (image) image.classList.toggle("color-preview-gray", simulated);
    if (colorNote) colorNote.textContent = selectedColor === "gris"
      ? "Vista gris ilustrativa por filtro digital, no fotografía real. Disponibilidad por confirmar."
      : "Imagen original en negro. Disponibilidad por confirmar.";
  }

  colorButtons.forEach((button) => button.addEventListener("click", () => {
    selectedColor = button.dataset.color === "gris" ? "gris" : "negro";
    colorButtons.forEach((option) => {
      const selected = option === button;
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-pressed", String(selected));
    });
    if (image && image.getAttribute("src") !== "/assets/mochila-urbana20-negra.png") {
      const product = thumbnails.find((item) => item.dataset.image === "/assets/mochila-urbana20-negra.png");
      if (product) product.click();
    }
    applySelectedColor();
  }));
  thumbnails.forEach((button) => button.addEventListener("click", applySelectedColor));

  if (zoomButton && lightbox && lightboxImage && image) {
    zoomButton.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxImage.classList.toggle("color-preview-gray", image.classList.contains("color-preview-gray"));
      if (lightboxCaption) lightboxCaption.textContent = image.alt +
        (image.classList.contains("color-preview-gray") ? " — gris simulado digitalmente" : "");
      lightbox.showModal();
    });
    if (lightboxClose) lightboxClose.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });
  }

  const form = document.getElementById("fit-form");
  const result = document.getElementById("fit-result");

  if (form && result) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      result.classList.remove("is-positive", "is-negative");

      const values = [
        document.getElementById("device-width"),
        document.getElementById("device-height"),
        document.getElementById("device-depth")
      ].map((field) => Number(field && field.value));

      if (!values.every((value) => Number.isFinite(value) && value > 0)) {
        result.textContent = "Ingresá medidas válidas mayores que cero para hacer la comparación.";
        return;
      }

      const limits = [36, 25, 2];
      const fits = values.every((value, index) => value <= limits[index]);
      if (fits) {
        result.classList.add("is-positive");
        result.textContent = "Las medidas que ingresaste están dentro de 36 × 25 × 2 cm. Es una comparación orientativa; confirmá también el ajuste real antes de comprar.";
      } else {
        result.classList.add("is-negative");
        result.textContent = "Al menos una medida supera las dimensiones de 36 × 25 × 2 cm. Esta notebook podría no entrar en el compartimento.";
      }
    });
  }

  const config = window.RUTA_URBANA_CONFIG || {};
  const purchaseAction = document.getElementById("purchase-action");
  const purchaseStatus = document.getElementById("purchase-status");

  const whatsappFloat = document.getElementById("whatsapp-float");
  const whatsapp = String(config.whatsappNumber || "").replace(/\D/g, "");
  if (whatsappFloat && whatsapp === "00000000") {
    whatsappFloat.hidden = false;
    whatsappFloat.removeAttribute("href");
    whatsappFloat.removeAttribute("target");
    whatsappFloat.setAttribute("aria-disabled", "true");
    whatsappFloat.setAttribute("title", "WhatsApp próximamente");
    whatsappFloat.addEventListener("click", (event) => event.preventDefault());
  }
  if (/^[1-9]\d{7,14}$/.test(whatsapp) && whatsappFloat) {
    const message = "Hola, quiero consultar por la mochila Urbana 20. ¿Tienen disponibilidad y cuánto cuesta el envío?";
    whatsappFloat.href = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(message);
    whatsappFloat.removeAttribute("aria-disabled");
    whatsappFloat.removeAttribute("role");
    whatsappFloat.removeAttribute("title");
    whatsappFloat.setAttribute("aria-label", "Consultar por WhatsApp");
    whatsappFloat.target = "_blank";
    whatsappFloat.hidden = false;
  }

  if (!purchaseAction || !purchaseStatus) return;

  const safeCheckout = (() => {
    try {
      const target = new URL(String(config.checkoutUrl || ""));
      return target.protocol === "https:" ? target.toString() : null;
    } catch {
      return null;
    }
  })();

  // Activar solo cuando haya un enlace y un precio comercial aprobados.
  if (safeCheckout) {
    purchaseAction.href = safeCheckout;
    purchaseAction.innerHTML = 'Ir a comprar <span aria-hidden="true">↗</span>';
    purchaseAction.target = "_blank";
    purchaseAction.rel = "noopener noreferrer";
    purchaseAction.hidden = false;
    purchaseStatus.textContent = "Verificá precio, disponibilidad y condiciones en la tienda antes de finalizar la compra.";
    return;
  }

  // El botón de WhatsApp se gestiona de forma independiente del enlace de pago.
  if (/^[1-9]\d{7,14}$/.test(whatsapp)) {
    const message = "Hola, quiero consultar por la mochila Urbana 20. ¿Me confirman el precio y la disponibilidad?";
    purchaseAction.href = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(message);
    purchaseAction.innerHTML = 'Consultar por WhatsApp <span aria-hidden="true">↗</span>';
    purchaseAction.target = "_blank";
    purchaseAction.rel = "noopener noreferrer";
    purchaseAction.hidden = false;
    purchaseStatus.textContent = "Consultá precio, stock y condiciones antes de concretar la compra.";
  }
})();
