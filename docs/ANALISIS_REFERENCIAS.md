# Análisis de referencias

## Estado de las capturas

No están en el repositorio las carpetas de capturas que pedía el encargo:

- `docs/referencias/adendia`
- `docs/referencias/aedas`

Tampoco aparecen en el resto de `DESARROLLO`. Este análisis no describe pantallas concretas de esas webs. Se apoya en el encargo (lujo editorial sobrio por un lado, buscador y ficha de conversión por el otro) y en criterios habituales de promotora premium, sin copiar textos, imágenes, logotipos ni la composición de ninguna marca.

Cuando se aporten las capturas, este documento se rehará con lo que se vea en ellas.

## Lectura que se toma de cada referencia

### Espíritu editorial (Adendia, según el encargo)

- Home con mucho aire y una fotografía a gran formato antes que un bloque de módulos.
- Titular serif, corto, y un subtítulo que no compite con la imagen.
- Cabecera ligera, casi invisible al empezar, para no recortar el hero.
- Tarjetas y fichas con poco borde y mucho margen. La exclusividad sale del silencio, no de ornamentos.

### Función comercial (AEDAS Homes, según el encargo)

- Buscador visible en la home: provincia o ciudad, y al menos tipología.
- Listado con estado de la promoción, ciudad y un dato de precio cuando existe.
- Ficha larga, orientada a pedir información: galería, resumen, calidades, energía, planos, mapa, entorno y formulario.
- Sostenibilidad y calidades como discurso propio, no como una frase suelta.
- Llamadas a la acción repetidas, también mientras se hace scroll.

## Decisiones de Blue Norte

No se reproduce la retícula ni la paleta de ninguna de las dos. La identidad propia es:

- **Cabecera.** Fija, transparente sobre un hero oscuro y azul marino sólido al hacer scroll. En móvil, el menú ocupa toda la pantalla.
- **Home.** Hero a pantalla completa, buscador solapado, promociones, propuesta de valor, proceso en cuatro pasos, tres ciudades, tres artículos y formulario.
- **Fotografía.** Protagonista, a sangre, con un degradado solo para que el texto cumpla contraste. Hoy son ilustraciones geométricas de reserva en `public/images`, a la espera de reportaje.
- **Tipo.** Cormorant Garamond en titulares y Outfit en texto. Escala amplia en los H1 (cerca de 4–4.5 rem en escritorio) y cuerpo en torno a 1 rem con interlineado holgado.
- **Color.** Azul marino `#0c1c2e`, marfil `#f7f4ef`, arena `#e6dfd4` y un bronce `#8d7352` solo en detalles. El texto pequeño usa un bronce más oscuro (`#5c4632`) para el contraste.
- **Espaciado.** Secciones con unos 5 rem de aire. El contenido de lectura se queda en una medida estrecha; las rejillas de fichas, no.
- **Movimiento.** Aparición suave al entrar en viewport. Se apaga con `prefers-reduced-motion`.
- **Tarjeta de promoción.** Imagen 16:10, estado, ciudad, tipología, dormitorios y «desde» solo si hay precio. Si no lo hay, se ve el marcador `[COMPLETAR]`.
- **Filtros.** Formulario GET, usable sin JavaScript. Provincia, ciudad, tipología, dormitorios, estado y orden. Las combinaciones no se indexan.
- **Ficha.** Galería, resumen, calidades, zonas comunes, energía, planos, mapa orientativo, entorno, formulario, preguntas, aviso no contractual, relacionadas y barra fija.
- **Contacto.** Nombre, email, teléfono, mensaje, consentimiento y un campo señuelo. El correo sale por una interfaz (`console` o `resend`).

## Plan de carpetas

```text
src/app                  rutas, sitemap, robots, API de contacto
src/components/layout    cabecera, pie, cookies, WhatsApp, hero
src/components/projects  tarjeta, filtros, CTA fijo
src/components/contact   formulario
src/components/ui        botones, imagen, revelado
src/content              proyectos, ciudades, artículos y marca (capa sustituible por un CMS)
src/lib                  consultas, SEO, esquema y email
src/i18n                 español activo; el tipo Locale ya reserva "en"
public/images            fotografías de reserva en WebP
docs                     este análisis y los pendientes
```
