# Ruta Urbana · Demo M8

Repositorio de ejemplo de la Certificación en Marketing e IA. Caso ficticio de mochilas.

## Empezar

Leé [AGENTS.md](AGENTS.md) y el [índice de la wiki](wiki/index.md).
La práctica 1 organiza la memoria del proyecto. La práctica 2 publica una portada con la leyenda «Primera versión de clase».

## Estructura

- fuentes/ conserva los materiales originales y su procedencia.
- wiki/ contiene conocimiento con referencias, brief y decisiones.
- public/ contiene los archivos visibles en el sitio.
- server.cjs sirve únicamente public/.

## Ejecutar

Requiere Node.js 22 o superior. Ejecutá npm start y abrí http://localhost:3000.
El servidor usa PORT cuando el hosting lo proporciona y escucha en 0.0.0.0.

## Railway

Conectá este repositorio y su rama main a un servicio de Railway. El comando de inicio es npm start. Generá el dominio público del servicio. Cada cambio aprobado se guarda en un commit y se sube a main para desplegarlo.

## Comprobar la memoria

En una sesión nueva con acceso al repo, pedí «¿Qué protección ofrece Urbana 20 bajo lluvia fuerte? Citá archivo y fragmento. ¿Qué necesito verificar para saber si entra mi notebook?». Contrastá la respuesta con fuentes/ficha-negocio.md.

## Comprobar la web

Abrí la portada en móvil y verificá que los estilos carguen. Pedí /wiki/ficha-producto.md y /fuentes/ficha-negocio.md por URL pública. Ambas solicitudes deben devolver 404.
Registrá commit, URL y resultado observado en tu workbook.
