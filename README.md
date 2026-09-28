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

`POST /api/contacto` valida con Zod, ignora el campo señuelo `company_website` y exige la casilla de privacidad.

- `EMAIL_PROVIDER=console` deja el mensaje en el log del servidor. Sirve en local.
- `EMAIL_PROVIDER=resend` envía con la API de Resend. Hacen falta `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL`.

## Analítica

El aviso de cookies guarda la decisión en `localStorage` (`bn-consent`). Google Analytics 4 solo se inserta si la persona acepta y si `NEXT_PUBLIC_GA_ID` tiene forma `G-…`. Search Console se verifica con `NEXT_PUBLIC_GSC_VERIFICATION`.

## Despliegue en Vercel

1. Importa este repositorio en Vercel.
2. Framework: Next.js. No hace falta comando de build distinto de `npm run build`.
3. Copia las variables de `.env.example` al proyecto, con `NEXT_PUBLIC_SITE_URL` en la URL real (sin barra final).
4. El `sitemap.xml` y el `robots.txt` salen de esa URL.

## SEO

Cada página tiene title, description, canonical, Open Graph y Twitter. Las combinaciones de filtros de `/proyectos` y las categorías o páginas de `/actualidad` apuntan con canonical a la URL base y van con `noindex`.
