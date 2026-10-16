# Pendientes de Blue Norte Promociones

Nada de esta lista debe inventarse. Cuando exista el dato, se sustituye el marcador `[COMPLETAR: …]` en el código y se borra la línea de aquí.

## Marca y legal

- Logotipo (hoy la marca es solo tipográfica).
- Dirección, teléfono, email y horario de las oficinas de Málaga, Santander y Ciudad Real. En Madrid ya está publicada la oficina de Paseo de la Castellana, 140, 14B; falta el horario.
- Proveedor de email real (`EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
- Identificador de GA4 (`NEXT_PUBLIC_GA_ID`) y verificación de Search Console (`NEXT_PUBLIC_GSC_VERIFICATION`).
- URL canónica de producción (`NEXT_PUBLIC_SITE_URL`).

## Inventario

Calle Sevilla 21 (La Trinidad, Málaga) está en comercialización, con entrega prevista en 2028. Superficies y precios de las viviendas son los de las fichas comerciales, desde 283.550 € P.V.P. El local no tiene ficha: sus metros siguen siendo los del visado. La ficha muestra las tres imágenes de la comercialización: fachada, piscina y plano de cubierta. La memoria de calidades ya está publicada en la ficha, en PDF. También están enlazados el plano de venta y la ficha comercial de cada vivienda y de los trasteros. Siguen pendientes el certificado energético (letra, consumo y emisiones) y un reportaje propio. La sección de eficiencia no se muestra en la ficha hasta que exista el certificado. La memoria básica y de ejecución visada el 21/11/2023 remite a un certificado HULC 2019, pero ese impreso no viene en el PDF: no trae letra, kWh ni emisiones. El entorno ya nombra paradas EMT, colegios y el metro: los minutos a pie son orientativos.

La tabla de viviendas usa las fichas comerciales, no el cuadro del visado ni el anuncio de Redpiso. Esas dos fuentes siguen sin coincidir con las fichas.

Las fichas de ejemplo se han retirado del sitio. En Santander, Madrid y Ciudad Real no hay todavía una promoción publicada.

En cada ficha real faltan, como mínimo:

- Precio desde.
- Superficies.
- Fecha estimada de entrega.
- Calificación energética, consumo y emisiones.
- Memoria de calidades cerrada.
- Zonas comunes reales.
- Planos PDF.
- Coordenadas de la parcela.
- Servicios, transporte y colegios con nombres y distancias comprobadas.
- Reportaje fotográfico (las imágenes actuales son ilustraciones generadas para la maqueta).

## Fotografía y vídeo

- Hero real o vídeo en `public/images` / `public/videos`.
- Fotos de ciudad, de obra y de interiores.
- Retratos del equipo, cuando se puedan publicar.

## Referencias de diseño

- Capturas en `docs/referencias/adendia`.
- Capturas en `docs/referencias/aedas`.
- Al recibirlas, revisar `docs/ANALISIS_REFERENCIAS.md`.

## Idioma

- Diccionario inglés. El tipo `Locale` ya incluye `en`, pero el sitio solo se sirve en español.
