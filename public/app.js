(function () {
  "use strict";

  const image = document.getElementById("gallery-main");
  const thumbnails = Array.from(document.querySelectorAll(".gallery-thumb"));

  if (image && thumbnails.length) {
    thumbnails.forEach((button) => {
      button.addEventListener("click", () => {
        const src = button.dataset.image;
        const alt = button.dataset.alt || "Mochila Urbana 20";
        if (!src || !src.startsWith("/assets/")) return;
        image.src = src;
        image.alt = alt;
        thumbnails.forEach((item) => {
          const current = item === button;
          item.classList.toggle("is-current", current);
          item.setAttribute("aria-pressed", String(current));
        });
      });
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

  const whatsapp = String(config.whatsappNumber || "").replace(/\D/g, "");
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
