# Ruta Urbana · Demo M8

Repositorio de ejemplo de la Certificación en Marketing e IA. **Caso ficticio** de mochilas.

## Empezar

Leé [AGENTS.md](AGENTS.md) y el [índice de la wiki](wiki/index.md).
La primera versión verificó la publicación básica. La versión actual presenta una landing de producto para Urbana 20.

## Estructura

- `fuentes/` conserva los materiales originales y su procedencia.
- `wiki/` contiene conocimiento con referencias, brief y decisiones.
- `public/` contiene la landing, los estilos y los scripts visibles en el sitio.
- `public/assets/` contiene las imágenes incorporadas al repositorio.
- `public/site-config.js` prepara la conexión de un canal de compra/contacto aprobado.
- `server.cjs` sirve únicamente `public/`.

## Ejecutar

Requiere Node.js 22 o superior:

```sh
npm start
```

Abrí http://localhost:3000. El servidor utiliza `PORT` cuando el hosting lo proporciona y escucha en `0.0.0.0`.

## Contenido y compra

La landing incluye galería de producto, ficha técnica, preguntas frecuentes y un comparador **orientativo** entre las medidas de la notebook y el compartimento de 36 × 25 × 2 cm.

El importe de ARS 79.000 es ficticio y sólo referencia el ejercicio. **La landing no procesa pagos, ni confirma stock o envíos.**

Para activar un CTA real, el responsable debe aprobar primero precio comercial y condiciones. Luego se puede completar `public/site-config.js` con `checkoutUrl` (HTTPS) o `whatsappNumber` (código de país y números). Sin alguno de ellos, el botón de compra no aparece.

## Railway

Conectá este repositorio y su rama `main` a un servicio de Railway. Comando de inicio: `npm start`. Generá el dominio público. El despliegue desde GitHub depende de la configuración del servicio.

## Comprobaciones

- La portada, CSS, JS y fotografías de `/assets/` cargan en móvil y escritorio.
- La galería alterna entre el producto y la imagen de uso.
- El comprobador compara ancho, alto y grosor sin prometer compatibilidad.
- Sin un canal configurado, no hay botón activo de compra.
- Los recursos internos `/wiki/ficha-producto.md` y `/fuentes/ficha-negocio.md` devuelven 404.

Registrá commit, URL y resultados observados en tu workbook; no confundas pruebas locales con pruebas sobre el dominio desplegado.
