import type { Post } from "@/types/content";

export const calificacionEnergetica: Post = {
  slug: "calificacion-energetica-a",
  title: "Qué significa la calificación energética A",
  h1: "Qué significa la calificación energética A",
  seoTitle: "Qué es la calificación energética A | Blue Norte",
  seoDescription:
    "La letra A del certificado energético: qué mide, qué no garantiza y qué preguntar al comprar una vivienda de obra nueva.",
  date: "2026-08-18",
  category: "Eficiencia",
  categorySlug: "eficiencia",
  readingMinutes: 7,
  excerpt:
    "La A es la mejor letra del certificado energético español. Resume consumo y emisiones. No describe por sí sola cómo se vive la casa.",
  image: "/images/blog/energia.jpg",
  imageAlt: "Paneles solares bajo un cielo despejado.",
  blocks: [
    {
      type: "p",
      text: "En el anuncio de una vivienda nueva aparece, casi siempre, una letra. La A es la más alta de una escala que en España va de la A a la G. Verla impresa da tranquilidad y, a veces, demasiada. Esta nota explica qué está midiendo el certificado y qué conviene preguntar además.",
    },
    {
      type: "h2",
      id: "que-es",
      text: "Qué es el certificado",
    },
    {
      type: "p",
      text: "El certificado de eficiencia energética es un documento oficial del edificio o de la vivienda. Lo firma un técnico competente y asigna una letra según el consumo de energía primaria y las emisiones de dióxido de carbono estimadas en unas condiciones de uso normalizadas. No es una opinión comercial de la promotora ni una medición de tu factura futura al céntimo.",
    },
    {
      type: "p",
      text: "La escala coloca la A en el extremo más eficiente y la G en el menos. Entre medias, cada letra agrupa un tramo. Dos viviendas con la misma letra pueden consumir distinto dentro de ese tramo. Por eso el certificado también muestra indicadores numéricos, no solo el color de la etiqueta.",
    },
    {
      type: "h2",
      id: "que-tiene-en-cuenta",
      text: "Qué entra en el cálculo",
    },
    {
      type: "p",
      text: "El modelo tiene en cuenta la envolvente —muros, cubierta, suelos y huecos—, las instalaciones de calefacción, refrigeración, agua caliente y, cuando corresponde, ventilación. También influyen la zona climática y la orientación. Un mismo edificio no se certifica igual en Málaga, en Santander o en Madrid, porque el clima de partida no es el mismo.",
    },
    {
      type: "h3",
      id: "lo-que-no-mide",
      text: "Lo que la letra no cuenta",
    },
    {
      type: "ul",
      items: [
        "Si la terraza es usable o si el sol de la tarde la hace inhabitable.",
        "El ruido de la calle o del patio.",
        "La calidad percibida de un grifo o de una puerta, salvo en la medida en que la carpintería aisla.",
        "Tu factura real, que depende de cómo ventiles, de la temperatura a la que pongas el equipo y del precio de la energía.",
      ],
    },
    {
      type: "h2",
      id: "como-se-llega",
      text: "Cómo se acerca un edificio a la A",
    },
    {
      type: "p",
      text: "No hay un único truco. Ayuda una envolvente continua, huecos con prestacion suficiente y bien sombreados, y un sistema de climatización eficiente dimensionado para esa demanda, no para una casa imaginaria. La aerotermia aparece a menudo en obra nueva porque puede cubrir calor, frío y agua caliente con un solo equipo, siempre que la vivienda no pierda por otro lado lo que el equipo aporta.",
    },
    {
      type: "p",
      text: "El aislamiento es la pareja imprescindible de ese equipo. Anunciar aerotermia sin decir nada de la fachada es quedarse a medias. Lo mismo ocurre con la preinstalación de carga para el vehículo eléctrico: es una decisión de infraestructura, útil donde hay plaza, y no forma parte de la letra energética de la vivienda.",
    },
    {
      type: "h2",
      id: "al-comprar",
      text: "Qué pedir al comprar obra nueva",
    },
    {
      type: "p",
      text: "Pide el certificado del proyecto o, si la obra ya está terminada, el de la vivienda terminada. Comprueba que la letra y la dirección corresponden a lo que visitas. Pregunta qué ha pesado más para llegar a esa letra: ¿los huecos, la cubierta, el equipo? Y cruza el dato con la memoria de calidades. Si la promoción todavía no tiene certificado, desconfía de quien ya anuncia una A como si estuviera concedida.",
    },
    {
      type: "p",
      text: "Blue Norte no adelanta la letra de sus promociones. En cada ficha hay un apartado de eficiencia con el dato pendiente hasta que el técnico lo firme. Puedes verlo en [Edificio Pozuelo](/proyectos/calle-sevilla-21), y el contexto de clima en [Málaga](/ubicacion/malaga), [Santander](/ubicacion/santander), [Madrid](/ubicacion/madrid) o [Ciudad Real](/ubicacion/ciudad-real).",
    },
    {
      type: "p",
      text: "La etiqueta ayuda a comparar. No sustituye la visita ni la lectura del plano. Si estás al principio del proceso, combina esta nota con las [ventajas de comprar obra nueva](/actualidad/ventajas-comprar-obra-nueva) y con la [guía de compra sobre plano](/actualidad/guia-comprar-sobre-plano).",
    },
  ],
  faq: [
    {
      question: "¿Una vivienda A no paga casi energía?",
      answer:
        "Gasta menos que una vivienda mal aislada en las mismas condiciones, pero sigue consumiendo. La factura depende del uso, de la tarifa y del clima del año.",
    },
    {
      question: "¿La A es obligatoria en obra nueva?",
      answer:
        "La normativa exige un nivel de eficiencia alto en los edificios nuevos. Eso no autoriza a anunciarlo como letra A hasta que el certificado lo diga. Pregunta por el documento.",
    },
    {
      question: "¿El certificado caduca?",
      answer:
        "Sí, tiene un periodo de validez. En una compraventa debe estar en vigor. Revisa la fecha, no solo la letra.",
    },
  ],
};
