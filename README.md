# Alva — sitio institucional

Sitio estático construido con [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Sin CMS, sin base de datos, sin backend: HTML/CSS/JS puro generado en build time.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build de producción

```bash
npm run build     # genera /dist
npm run preview   # sirve /dist localmente para verificar
```

## Deploy en GreenGeeks (cPanel / FTP)

1. Corré `npm run build`.
2. Subí **todo el contenido** de la carpeta `dist/` (no la carpeta en sí) a `public_html/` vía el Administrador de Archivos de cPanel o por FTP/SFTP.
3. No se necesita configurar Node, base de datos ni PHP: son archivos estáticos.

## Estructura

- `src/components/` — una sección de la home por componente (`Hero.astro`, `Servicios.astro`, etc).
- `src/scripts/main.js` — interactividad (menú mobile, acordeón de servicios, tabs de clientes, modal de casos, scroll reveal).
- `src/styles/global.css` — tokens de marca (color, tipografía, espaciado) vía `@theme` de Tailwind v4, más las fuentes autoalojadas.
- `public/img/alva/` — fotografías e imágenes optimizadas, extraídas del material de marca de Alva.
- `public/fonts/` — Archivo y Fraunces (variable fonts) autoalojadas, sin dependencia de Google Fonts en producción.

## Contenido

Todo el texto, clientes, casos, premios y equipo provienen del material institucional de Alva. El correo de contacto (`hola@alva.com.uy`) y el copy de "Hablemos" son el único punto de contacto del sitio.
