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
    projects.ts   Casos de éxito (ver abajo)
  assets/         Imágenes fuente (logos, fotos de equipo, logos de clientes, casos)
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

Cada integrante es un objeto con nombre, prefijo (Mag./Lic.), cargo, experiencia y foto:

```ts
{
  name: 'Fernanda Ariceta',
  prefix: 'Mag.',
  role: 'Dirección general y Dirección de Estrategia',
  experience: 'Más de 23 años de experiencia',
  photo: fernandaAriceta, // import de src/assets/team/fernanda-ariceta.jpeg
},
```

Para editar a alguien que ya está: cambiá el texto directamente. Para sumar o reemplazar a alguien:

1. Poné la foto (retrato, funciona mejor en blanco y negro o neutra) en `src/assets/team/`.
2. Arriba del archivo, agregá el `import` de esa foto (mismo patrón que las que ya están).
3. Agregá o editá el objeto correspondiente en el array `teamMembers`, usando esa foto en `photo`.
4. Para sacar a alguien, borrá su objeto del array.

El orden del array es el orden de aparición en la web.

### Casos de éxito (`src/data/projects.ts`)

La sección "Experiencia y proyectos" tiene 6 espacios. Mientras un caso tenga `active: false` se muestra como placeholder ("Caso en preparación"), nunca contenido inventado. Para cargar un caso real:

1. Poné la imagen en `src/assets/projects/` con el mismo nombre que el `slug` del caso (por ejemplo, slug `campana-mides` → `src/assets/projects/campana-mides.jpg`; también sirven `.png` o `.webp`).
2. Completá `category`, `name`, `client`, `description` y, si corresponde, `link` (URL a un caso ampliado; si no hay, se deja sin link y la tarjeta no es clickeable).
3. Cambiá `active` a `true`.

```ts
{
  slug: 'campana-mides',
  active: true,
  category: 'Campaña de sensibilización',
  name: 'Nombre del caso',
  client: 'MIDES',
  description: 'Una línea breve sobre el caso.',
  link: 'https://...', // opcional
},
```

No hace falta tocar `src/components/Projects.astro` para nada de esto. Se puede reordenar el array o agregar más de 6 objetos si en algún momento hacen falta más casos.

## Contenido e imágenes: origen

Todo el texto y las afirmaciones del sitio provienen del brochure institucional de Alva y del brief entregado por el cliente; no se agregó información no confirmada (por eso el footer solo incluye el email de contacto, sin teléfono, dirección ni redes sociales, ya que no figuraban en el material recibido).

Las imágenes (logo, fotos del equipo, logos de clientes, imagen de reconocimientos) fueron extraídas del material gráfico entregado por Alva; no se usaron bancos de imágenes ni logos descargados de internet.

## Sistema visual

- Base: negro `#0A0A0A` y blanco `#FFFFFF`. Sin fondos crema/beige.
- Acento por sección (definidos en `tailwind.config.mjs`): dorado `#C6A15B` (base/contacto/equipo/clientes), rojo `#DE4A2A` (hero/experiencia), rosa `#E17BAE` (mirada), violeta `#6C4CE0` (por qué Alva), verde `#3FAE55` (servicios).
- Tipografías: Onest (textos, nav, UI) y Playfair Display itálica (headline y títulos decorativos), auto-hospedadas vía `@fontsource` — no se usa Inter.
- Animaciones: apariciones suaves al hacer scroll (`prefers-reduced-motion` respetado), sin parallax ni autoplay.

## SEO

Metadatos, Open Graph/Twitter Card, datos estructurados `Organization` (JSON-LD) con la ubicación (Montevideo, Uruguay), meta tags de geolocalización, `sitemap-index.xml` (generado en el build con `@astrojs/sitemap`), `robots.txt` y favicon incluidos.
