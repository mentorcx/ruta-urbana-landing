# Brief de la landing

## Objetivo

Una persona que llega desde Instagram puede evaluar si Urbana 20 sirve para llevar su notebook, comprender sus ventajas sin promesas infundadas y encontrar un camino de compra identificado.

## Público y tono

Personas que llevan una computadora al trabajo o a estudiar. Tono cercano, voseo y afirmaciones respaldadas por [la ficha original](../fuentes/ficha-negocio.md).

## Evolución del alcance

- Versión inicial: portada mínima con «Primera versión de clase» para comprobar GitHub → Railway → navegador.
- 12/11/2026: se incorpora una landing de producto responsive, con fotografía, beneficios respaldados, especificaciones, galería, comparador orientativo de medidas, FAQ y sección de precio de referencia.
- El proyecto sigue siendo **un caso ficticio didáctico**. Ni la compra ni el pago se habilitan sin aprobación del importe y del canal real.

## Stack

Markdown para fuentes y wiki. Git y GitHub para versiones. HTML, CSS y JavaScript sin dependencias para la página. Node.js para servir exclusivamente `public/`. Railway para ejecutar y publicar por HTTPS.

## Conversión y pendientes

El archivo `public/site-config.js` permite agregar URL HTTPS de compra aprobada o número de WhatsApp comercial aprobado. Sin configuración, no se muestra botón de compra operativo.

Pendientes: precio comercial real, confirmación de stock por color, condiciones y costos de envío, garantías, devoluciones, medios de pago y destino definitivo del CTA. Las imágenes disponibles son referencias visuales del caso.

## Verificación

Comprobar portada y CSS en móvil y escritorio, que carguen las imágenes desde `/assets/`, que funcionen la galería y el comparador, y que los archivos internos `/wiki/` y `/fuentes/` respondan 404. Distinguir pruebas locales de la URL desplegada.
