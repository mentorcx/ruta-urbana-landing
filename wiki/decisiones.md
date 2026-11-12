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

## 2026-11-12 · Precio, checkout y mejoras de interacción

**Solicitud del responsable:** mostrar ARS 175.000, conectar https://mpago.la/1RumUCZ, ampliar imágenes con lupa, cambiar el color desde un selector, corregir el salto del titular y agregar WhatsApp.

**Decisión:** se habilita el enlace proporcionado y el precio de ARS 175.000 en la landing. La comprobación de que el enlace de Mercado Pago efectivamente cobra ese importe queda pendiente. Se agrega una lupa con visor modal y un selector negro/gris. **El gris se simula con un filtro digital** sobre la imagen negra existente, con aviso visible; no se presenta como fotografía del producto gris ni como stock confirmado. El título se ajusta a una tipografía más pequeña y a dos frases, evitando cortes forzados dentro de «La ciudad se mueve.».

**WhatsApp:** se incorporó un botón flotante que se activa cuando se configure el número comercial en `public/site-config.js`. No se inventó ningún número.

**Pendientes:** verificar importe y destinatario de Mercado Pago, obtener foto real de la mochila gris, confirmar stock y condiciones comerciales y recibir el número de WhatsApp.

## 2026-11-12 · Efectos visuales de la landing

Se añaden animaciones de entrada discretas en la portada, aparición progresiva de secciones al desplazarse, brillo que sigue al cursor sobre el producto, transición al cambiar fotografías y microinteracciones en tarjetas, botones y selector. Se mantiene la legibilidad y no se incorporan dependencias externas. Los efectos se desactivan con `prefers-reduced-motion`; la landing permanece utilizable sin JavaScript. No se alteran precio, enlace de pago ni datos comerciales.
