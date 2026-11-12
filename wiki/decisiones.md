# Decisiones

## 2026-11-12 · Primera versión de clase

- Se prepara una demo pública de Ruta Urbana para M8, autorizada por la coordinación.
- La fuente original mantiene su carácter ficticio.
- La memoria vive en Markdown con índice, referencias y pendientes explícitos.
- Se publica una portada mínima mediante GitHub y Railway.
- La persona responsable del caso revisa las actualizaciones antes de incorporarlas.
- La landing comercial y el destino de compra quedan para una versión posterior.

## 2026-11-12 · Landing de producto Urbana 20

**Necesidad:** convertir la portada en una landing para presentar y eventualmente vender Urbana 20, utilizando las imágenes incorporadas por el responsable.

**Decisión:** publicar una landing responsive con imagen de producto, fotografía urbana, beneficios respaldados por la ficha, tabla técnica, FAQ, galería y comprobador orientativo de medidas de notebook. Se mantiene HTML/CSS/JS y el servidor existente. No se modifica la fuente original.

**Fuente:** [ficha-negocio.md](../fuentes/ficha-negocio.md), sección «Producto · Urbana 20»; [ficha-producto.md](ficha-producto.md). Imágenes del propio repositorio: `public/assets/mochila-urbana20-negra.png` y `public/assets/alex-con-mochila-realista.png`.

**Límite:** el precio ARS 79.000 se indica expresamente como ficticio y de referencia; no se anuncian stock, pagos, descuentos, garantías ni entrega garantizados. El canal de compra está pendiente y no hay enlace real activo. El comparador de notebooks informa compatibilidad orientativa, no la asegura.

**Archivos afectados:** `public/index.html`, `public/style.css`, `public/app.js`, `public/site-config.js`, `server.cjs`, `README.md`, `wiki/brief.md`, `wiki/decisiones.md` y `wiki/index.md`.

**Pendiente:** aprobar canal de compra/contacto, precio real y condiciones; verificar la versión desplegada en Railway y probar el recorrido desde un dispositivo móvil.

## Cómo registrar un cambio

Anotá fecha, necesidad, decisión aprobada, fuente o evidencia, archivos afectados y prueba realizada. Registrá contradicciones como pendientes hasta resolverlas.
