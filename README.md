# Blue Norte Promociones

Web corporativa de Blue Norte, promotora de obra nueva en Málaga, Santander y Madrid. Next.js (App Router), TypeScript y Tailwind CSS.

Los textos comerciales que aún no existen están marcados como `[COMPLETAR: …]`. La lista viva está en [docs/PENDIENTES.md](docs/PENDIENTES.md).

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build
npm run lint
npm run format
```

## Contenido

Los proyectos, las ciudades y los artículos viven en `src/content`. Las páginas no leen esos archivos directamente: pasan por `src/lib`, para poder cambiar luego la fuente por un CMS sin rehacer las rutas.

El idioma activo es el español de España. `src/i18n` deja el tipo de locale preparado para el inglés.

## Formulario

El formulario de contacto valida con Zod, ignora el campo señuelo `company_website` y exige la casilla de privacidad. El envío sale del navegador hacia Web3Forms con `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

## Analítica

El aviso de cookies guarda la decisión en `localStorage` (`bn-consent`). Google Analytics 4 solo se inserta si la persona acepta y si `NEXT_PUBLIC_GA_ID` tiene forma `G-…`. Search Console se verifica con `NEXT_PUBLIC_GSC_VERIFICATION`.

## Publicación

La web pública es un sitio estático en GitHub Pages. El dominio `bluepromociones.com` apunta con cuatro registros A a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`. El formulario sale del navegador hacia Web3Forms.

## SEO

Cada página tiene title, description, canonical, Open Graph y Twitter. Las combinaciones de filtros de `/proyectos` y las categorías o páginas de `/actualidad` apuntan con canonical a la URL base y van con `noindex`.
