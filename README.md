# Alva — Web institucional

Sitio institucional de una sola página para Alva, construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Salida 100% estática, sin CMS ni backend.

## Requisitos

- Node.js 18.20.8+ o 20.3.0+ (recomendado 20 LTS)
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:4321`.

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `/dist`. Esa carpeta se puede subir **tal cual** a `public_html` en GreenGeeks (cPanel o FTP): no requiere Node, PHP ni base de datos en el servidor.

Para previsualizar el build localmente antes de publicar:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
  components/     Un componente Astro por sección (Nav, Hero, Servicios, Equipo, Clientes, ...)
  data/           Contenido y datos editables, separados de los componentes
    site.ts       Textos institucionales (hero, experiencia, mirada, servicios, etc.)
    team.ts       Equipo: nombre, cargo, experiencia y foto
    clients.ts    Selección de logos de clientes (ver abajo)
    belongs.ts    Organizaciones y redes de las que Alva forma parte
  assets/         Imágenes fuente (logos, fotos de equipo, logos de clientes)
  layouts/        Layout base con metadatos SEO / Open Graph
  pages/          index.astro (única página del sitio)
  styles/         global.css (tokens de color, tipografía, utilidades)
public/           Archivos estáticos servidos tal cual: favicon, robots.txt, og-image
```

## Editar el contenido

Todo el texto institucional vive en `src/data/site.ts`. No hace falta tocar los componentes `.astro` para cambiar una frase, un título o un ítem de una lista.

### Clientes (`src/data/clients.ts`)

La sección "Clientes" muestra **máximo 10 logos por categoría** (marcas/empresas privadas y organismos públicos), tal como pide el brief. La lista completa de logos recibidos está en el archivo, cada uno con un flag `active`:

```ts
{ slug: 'nestle', name: 'Nestlé', active: true },
```

- Para mostrar/ocultar un cliente, cambiá `active` a `true`/`false`.
- El orden en el archivo es el orden en que aparecen en la web.
- Si activás más de 10 en una categoría, el componente igual corta en los primeros 10 del archivo (no rompe el layout).
- Los archivos de imagen correspondientes viven en `src/assets/clients/<slug>-black.png` y `<slug>-white.png` (versión monocromática para fondo claro/oscuro).

### Pertenencias y redes (`src/data/belongs.ts`)

Mismo mecanismo, sin límite de 10 (la sección es intencionalmente chica).

### Equipo (`src/data/team.ts`)

Nombre, cargo, experiencia y foto de cada integrante, tal como figuran en el brochure institucional. El orden del array es el orden de aparición.

### Proyectos / casos

La sección "Experiencia y proyectos" (`src/components/Projects.astro`) todavía no tiene casos reales cargados: el brief no incluyó información completa de proyectos, así que se dejaron **placeholders identificados como tales** ("Caso en preparación"), sin inventar clientes, resultados ni usar imágenes de stock. Está preparada para 6–8 casos futuros; cuando haya material, se puede convertir el array de placeholders en un `src/data/projects.ts` con imagen, categoría, cliente y descripción por caso, siguiendo el mismo patrón que `clients.ts`.

## Contenido e imágenes: origen

Todo el texto y las afirmaciones del sitio provienen del brochure institucional de Alva y del brief entregado por el cliente; no se agregó información no confirmada (por eso el footer solo incluye el email de contacto, sin teléfono, dirección ni redes sociales, ya que no figuraban en el material recibido).

Las imágenes (logo, fotos del equipo, logos de clientes, imagen de reconocimientos) fueron extraídas del material gráfico entregado por Alva; no se usaron bancos de imágenes ni logos descargados de internet.

## Sistema visual

- Colores: negro `#0A0A0A`, blanco `#FFFFFF`, dorado `#C6A15B` como único acento. Sin fondos crema/beige.
- Tipografías: Space Grotesk (display/nav) y Fraunces (serif editorial para palabras destacadas), auto-hospedadas vía `@fontsource` — no se usa Inter.
- Animaciones: apariciones suaves al hacer scroll (`prefers-reduced-motion` respetado), sin parallax ni autoplay.

## SEO

Metadatos, Open Graph/Twitter Card, `sitemap-index.xml` (generado en el build con `@astrojs/sitemap`), `robots.txt` y favicon incluidos.
