import type { CityPage } from "@/types/content";

export const madrid: CityPage = {
  slug: "madrid",
  name: "Madrid",
  provinceName: "Madrid",
  provinceSlug: "madrid",
  region: "Comunidad de Madrid",
  h1: "Promotora de obra nueva en Madrid",
  seoTitle: "Promotora de obra nueva en Madrid | Blue Norte",
  seoDescription:
    "Blue Norte es promotora de obra nueva en Madrid. Vivienda en barrios consolidados, sin reventa, con ficha clara y visita a demanda.",
  lead: "En Madrid, la obra nueva dentro de la ciudad consolidada es un producto escaso y muy mirado: lo compran familias que no quieren irse a la periferia e inversores que comparan renta, gastos y calidad del edificio. Blue Norte trabaja ese mercado como promotora, no como intermediaria de segunda mano.",
  image: "/images/cities/madrid.jpg",
  imageAlt: "La Gran Vía de Madrid, con el edificio Metrópolis en primer plano.",
  lat: 40.4168,
  lng: -3.7038,
  sections: [
    {
      id: "promotora",
      heading: "Qué hace una promotora y qué no hacemos",
      paragraphs: [
        "Una promotora de obra nueva en Madrid adquiere o concerta el suelo, encarga el proyecto, construye y vende las viviendas. No es lo mismo que una agencia que intermedia pisos usados, ni que un portal donde conviven alquiler y venta. Blue Norte se queda en el primer oficio y en cuatro ciudades: Madrid, Málaga, Santander y Ciudad Real.",
        "Esa limitación es deliberada. El comprador de un piso nuevo en Chamberí o en Retiro necesita saber quién responde de la memoria de calidades y de la entrega, no una ficha repleta de anuncios de particulares. Por eso cada promoción tendrá una sola página, con estado, tipología, planos y un formulario que llega al equipo de esa obra.",
        "Somos una marca nueva. No atribuimos décadas de actividad en la capital ni un número de viviendas entregadas. Cuando haya una primera promoción real, se contará con su licencia, su calendario y su precio, no con un relato de trayectoria prestada.",
      ],
    },
    {
      id: "barrios",
      heading: "Obra nueva en un barrio que ya existe",
      paragraphs: [
        "Gran parte de la vivienda nueva de la región se ha hecho en desarrollos de borde. Tiene lógica de precio y de suelo. Otra demanda, más estrecha, busca quedarse en distritos con metro, comercio y colegios ya asentados. Ahí la promoción sustituye un edificio o completa un solar difícil, y el comprador compara con un piso antiguo reformado de la misma calle.",
        "La comparación es justa solo si se ponen al lado la estructura, la eficiencia, la accesibilidad y los gastos futuros, no solo el precio por metro del anuncio. Un piso con cincuenta años y una reforma cosmética puede ser más caro de habitar que uno nuevo con una envolvente correcta. También puede ser la mejor opción si el nuevo está mal distribuido o si la comunidad nace con costes opacos. Hay que leer los dos.",
      ],
    },
    {
      id: "retiro",
      heading: "Retiro",
      level: "h3",
      paragraphs: [
        "Retiro combina el parque, una trama residencial tranquila en muchas de sus calles y una presión de demanda alta. La obra nueva, cuando aparece, se mira como rareza. Interesan plantas que aprovechen la orientación —el invierno madrileño es frío y el verano, seco y largo— y elementos comunes que no conviertan el portal en un gasto difícil de explicar.",
        "Todavía no hay una promoción publicada en Retiro. Si te encaja la zona, la [solicitud de información](/#solicitud) nos dice qué dormitorios buscas y si la casa es para vivir o para invertir.",
      ],
    },
    {
      id: "chamberi",
      heading: "Chamberí",
      level: "h3",
      paragraphs: [
        "Chamberí es centro sin ser el casco turístico. Calles con comercio, varias líneas de metro y una edificación densa donde una promoción nueva se nota. El comprador suele conocer ya el barrio y discute distribución, ruido de patio y plaza de garaje más que la «ubicación premium».",
        "Todavía no hay una promoción publicada en Chamberí. Cuando exista, la ficha tendrá licencia, calendario y precio. Blue Norte no ha entregado ninguna promoción.",
      ],
    },
    {
      id: "inversion-y-casa",
      heading: "Residencia e inversión, con la misma ficha",
      paragraphs: [
        "Parte de quien escribe desde Madrid compra para mudarse. Otra parte mira la obra nueva como activo: obra terminada o sobre plano, con un inquilino potencial en un barrio líquido. Las dos lecturas caben, pero no deben mezclarse en la promesa. No publicamos rentabilidades estimadas. Si en el futuro una promoción admite ese análisis, se hará con supuestos visibles y con la advertencia de que el alquiler no está garantizado.",
        "Lo que sí podemos adelantar como criterio de proyecto es la calidad que reduce gasto y discusión: aislamiento acorde al contraste térmico de la meseta, climatización eficiente —la aerotermia se valora vivienda a vivienda—, y preinstalación eléctrica para el coche cuando el garaje lo permite. Son decisiones de obra, no un anexo de marketing. La [nota sobre la letra A](/actualidad/calificacion-energetica-a) ayuda a leer el certificado cuando lo tengamos.",
        "Para el proceso de compra, la [guía sobre plano](/actualidad/guia-comprar-sobre-plano) y el artículo de [ventajas de la obra nueva](/actualidad/ventajas-comprar-obra-nueva) valen igual en Madrid que en la costa. Los documentos no cambian; cambia la pregunta de barrio.",
      ],
    },
    {
      id: "siguiente-paso",
      heading: "Cómo pedir información en Madrid",
      paragraphs: [
        "Filtra las [promociones de Madrid](/proyectos?ciudad=madrid) o escribe desde [el formulario](/#solicitud) con el distrito y los dormitorios. La oficina está en Paseo de la Castellana, 140, 14B.",
        "Si estás comparando ciudades, Málaga y Santander tienen su propia lectura: [obra nueva en Málaga](/ubicacion/malaga) y [viviendas de obra nueva en Santander](/ubicacion/santander). No repetimos el mismo texto en las tres porque no es el mismo modo de vivir.",
      ],
    },
  ],
  faq: [
    {
      question: "¿Sois una inmobiliaria de pisos usados en Madrid?",
      answer:
        "No. Somos promotora de obra nueva. No publicamos alquileres ni viviendas de segunda mano.",
    },
    {
      question: "¿En qué distritos de Madrid hay promociones?",
      answer:
        "Todavía no hay una promoción publicada en Madrid. Los distritos se anunciarán con cada proyecto.",
    },
    {
      question: "¿Publicáis la rentabilidad de la inversión?",
      answer:
        "No estimamos rentas ni porcentajes. Una decisión de inversión necesita números propios y asesoramiento, no una cifra de folleto.",
    },
  ],
};
