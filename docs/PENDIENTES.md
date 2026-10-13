# Pendientes de Blue Norte Promociones

Nada de esta lista debe inventarse. Cuando exista el dato, se sustituye el marcador `[COMPLETAR: …]` en el código y se borra la línea de aquí.

## Marca y legal

- Logotipo (hoy la marca es solo tipográfica).
- Razón social, CIF, domicilio social e inscripción en el Registro Mercantil.
- Email de privacidad.
- Dirección, teléfono, email y horario de las oficinas de Málaga, Santander, Madrid y Ciudad Real.
- Número de WhatsApp (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- Proveedor de email real (`EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
- Identificador de GA4 (`NEXT_PUBLIC_GA_ID`) y verificación de Search Console (`NEXT_PUBLIC_GSC_VERIFICATION`).
- URL canónica de producción (`NEXT_PUBLIC_SITE_URL`).

## Personas

- Nombre y texto de Dirección.
- Nombre y texto de Producto y obra.
- Nombre y texto de Atención al comprador.

## Inventario

Calle Sevilla 21 (La Trinidad, Málaga) está en comercialización, con entrega prevista en 2028 y precio por vivienda, sin IVA ni AJD. Las superficies siguen siendo las del proyecto visado. La ficha muestra las tres imágenes de la comercialización: fachada, piscina y plano de cubierta. La memoria de calidades ya está publicada en la ficha, en PDF. Siguen pendientes el certificado energético (letra, consumo y emisiones), los planos PDF de las viviendas y un reportaje propio. El entorno ya nombra paradas EMT, colegios y el metro: los minutos a pie son orientativos. En la comercialización no figura plaza de garaje.

Hay datos del anuncio de Redpiso que no se han copiado porque no coinciden con el proyecto visado: llama ático a la quinta planta, da dos baños en cuarta y quinta, sitúa el patio en planta baja y publica otras superficies construidas. Hay que confirmar cuál de las dos fuentes manda antes de cambiar la tabla.

El resto de promociones son **ejemplos editoriales**, no obra a la venta. Hay que sustituirlas o retirarlas:

- Cala Serena (Málaga, este)
- Altos de Teatinos (Málaga)
- Paseo Magdalena (Santander)
- Faro de Cueto (Santander)
- Patio del Retiro (Madrid)
- Jardín de Chamberí (Madrid). El estado «entregado» es solo de plantilla: Blue Norte no ha entregado esta promoción.

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
