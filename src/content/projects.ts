import type { Project, SpecItem } from "@/types/content";

const surfaceLabel = "[COMPLETAR: superficie construida]";
const priceFromLabel = "[COMPLETAR: precio desde]";
const deliveryLabel = "[COMPLETAR: fecha estimada de entrega]";

function qualities(): SpecItem[] {
  return [
    { label: "Fachada y carpintería", detail: "[COMPLETAR: materiales y prestaciones]" },
    { label: "Solados y revestimientos", detail: "[COMPLETAR: acabados interiores]" },
    { label: "Cocina y baños", detail: "[COMPLETAR: equipamiento]" },
    { label: "Climatización", detail: "[COMPLETAR: sistema previsto, como aerotermia si aplica]" },
    { label: "Aislamiento", detail: "[COMPLETAR: solución de envolvente]" },
    {
      label: "Movilidad eléctrica",
      detail: "[COMPLETAR: preinstalación de carga de vehículo eléctrico, si aplica]",
    },
  ];
}

function plans(name: string) {
  return [
    { name: `Plano de situación de ${name}`, note: "[COMPLETAR: archivo PDF]" },
    { name: "Plantas tipo", note: "[COMPLETAR: archivo PDF]" },
    { name: "Memoria de superficies", note: "[COMPLETAR: archivo PDF]" },
  ];
}

export const projects: Project[] = [
  {
    slug: "calle-sevilla-21",
    name: "Calle Sevilla 21",
    isExample: false,
    address: "Calle Sevilla 21, 29009 Málaga",
    citySlug: "malaga",
    cityName: "Málaga",
    provinceSlug: "malaga",
    provinceName: "Málaga",
    zone: "La Trinidad",
    typologies: ["piso"],
    bedrooms: [0, 1, 2],
    surfaceLabel: "31,39–54,35 m² útiles en viviendas",
    priceFromLabel: "245.993 €, IVA y AJD no incluidos",
    status: "en-comercializacion",
    deliveryLabel: "2028",
    featured: true,
    excerpt:
      "Edificio de ocho viviendas y un local en bruto en Calle Sevilla 21, barrio de La Trinidad, en Málaga. Entrega prevista en 2028. Las superficies son las del proyecto visado.",
    description: [
      "Calle Sevilla 21 es un edificio de viviendas en el barrio de La Trinidad, distrito Centro de Málaga. El programa tiene ocho viviendas y un local en bruto en planta baja. La entrega prevista es 2028.",
      "Las superficies útiles, construidas privativas y construidas con zonas comunes son las del proyecto visado y coinciden con la tasación. En las viviendas, «construida con zonas comunes» incluye la parte proporcional de esas zonas. En el local, esa superficie coincide con la construida privativa.",
      "La quinta planta es la última del edificio y no es un ático. Hay dos plantas, la tercera y la cuarta, con una sola vivienda. Los precios son los de la comercialización, sin IVA ni AJD. Según la fase de obra se puede reservar y personalizar acabados. La memoria de calidades se puede descargar en esta ficha.",
    ],
    unitsNote:
      "Las superficies coinciden entre el proyecto visado y la tasación. «Con zonas comunes» es la superficie construida con la parte proporcional de zonas comunes. Los precios son de comercialización, sin IVA ni AJD. Notaría y gestoría no están incluidos.",
    units: [
      {
        floor: "Baja",
        door: "A",
        situation: "Bajo",
        type: "Estudio",
        bedrooms: "0",
        bathrooms: "1",
        usefulM2: "35,43",
        privateBuiltM2: "40,87",
        builtWithCommonM2: "56,01",
        outdoor: "—",
        price: "370.872 €",
      },
      {
        floor: "Baja",
        door: "Local",
        situation: "Bajo",
        type: "Local en bruto",
        bedrooms: "—",
        bathrooms: "—",
        usefulM2: "26,57",
        privateBuiltM2: "31,10",
        builtWithCommonM2: "31,10",
        outdoor: "—",
      },
      {
        floor: "1ª",
        door: "A",
        situation: "Piso",
        type: "Estudio",
        bedrooms: "0",
        bathrooms: "1",
        usefulM2: "31,39",
        privateBuiltM2: "37,28",
        builtWithCommonM2: "50,69",
        outdoor: "—",
        price: "245.993 €",
      },
      {
        floor: "1ª",
        door: "B",
        situation: "Piso",
        type: "1 dormitorio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "38,41",
        privateBuiltM2: "44,80",
        builtWithCommonM2: "61,21",
        outdoor: "15,71 (patio)",
        price: "298.265 €",
      },
      {
        floor: "2ª",
        door: "A",
        situation: "Piso",
        type: "Estudio",
        bedrooms: "0",
        bathrooms: "1",
        usefulM2: "31,39",
        privateBuiltM2: "37,28",
        builtWithCommonM2: "50,69",
        outdoor: "—",
        price: "262.100 €",
      },
      {
        floor: "2ª",
        door: "B",
        situation: "Piso",
        type: "1 dormitorio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "38,41",
        privateBuiltM2: "44,80",
        builtWithCommonM2: "61,21",
        outdoor: "—",
        price: "352.479 €",
      },
      {
        floor: "3ª",
        door: "A",
        situation: "Piso (única en planta)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "2",
        usefulM2: "54,35",
        privateBuiltM2: "64,90",
        builtWithCommonM2: "88,12",
        outdoor: "14,88",
        price: "449.130 €",
      },
      {
        floor: "4ª",
        door: "A",
        situation: "Piso (única en planta)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "1",
        usefulM2: "50,46",
        privateBuiltM2: "60,22",
        builtWithCommonM2: "81,78",
        outdoor: "4,75",
        price: "438.786 €",
      },
      {
        floor: "5ª",
        door: "A",
        situation: "Última planta (no ático)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "1",
        usefulM2: "50,46",
        privateBuiltM2: "60,22",
        builtWithCommonM2: "81,78",
        outdoor: "—",
        price: "498.000 €",
      },
    ],
    qualityDocument: {
      href: "/documents/calle-sevilla-21/memoria-de-calidades.pdf",
      label: "Descargar la memoria de calidades (PDF)",
      fileName: "memoria-de-calidades-calle-sevilla-21.pdf",
    },
    qualities: [
      {
        label: "Albañilería y tabiquería",
        detail:
          "Paramentos entre viviendas de ladrillo de hormigón fonorresistente. Tabiquería de yeso con doble placa. Cerramiento de capuchina: ladrillo al exterior y trasdosado interior de pladur con doble placa de 13 mm.",
      },
      {
        label: "Fachada",
        detail:
          "Aplacado cerámico antracita con grapa oculta, y tablero fenólico sobre rastreles. Ladrillo cara vista en tono ahumado tostado, ceniza o negro.",
      },
      {
        label: "Carpintería exterior",
        detail:
          "Ventanas de PVC en antracita, con jambeado de chapa del color de la carpintería. La memoria deja este punto abierto hasta cerrar la fachada. Persianas de aluminio gris antracita, sin motor. Puerta de acceso de acero inoxidable o aluminio, en color.",
      },
      {
        label: "Carpintería interior",
        detail:
          "Puerta de entrada de seguridad de tres puntos, con llaves maestras, en antracita o blanco RAL 9003. Puertas de paso lisas, antracita y correderas, con el riel visto. En el dormitorio principal, armario empotrado de obra: frente de carpintería, cajonera, barra e interior de melamina blanca. Barandillas metálicas tipo Oxirón, antracita.",
      },
      {
        label: "Solados y revestimientos",
        detail:
          "Pavimento de las viviendas en cerámico imitación madera. En cocina y baño, cerámico clase 2; en exterior, cerámico clase 3. Zonas comunes en cerámico técnico. Alicatado en los paramentos de la cocina. En baños, pieza de 60×40, con la zona de ducha diferenciada. Recibidor con revestimiento porcelánico. Falso techo de placa de yeso, con registro. Rodapié de PVC.",
      },
      {
        label: "Cocina y baños",
        detail:
          "Cocina amueblada, con equipamiento básico y previsión para lavavajillas o mueble. Inodoro Roca Meridian a suelo, rimless. Plato de ducha de resina. Lavabo con mueble y espejo. Grifería de ducha en superficie y grifo de lavabo monoblock, en inox. Mampara de vidrio templado de más de 8 mm. La ducha se independiza con un murete.",
      },
      {
        label: "Climatización y agua caliente",
        detail:
          "Climatización por conductos. Agua caliente sanitaria por aerotermia, con hidrokit. Sin ventiladores.",
      },
      {
        label: "Electricidad e iluminación",
        detail:
          "Mecanismos antracita en toda la vivienda, sin potenciómetro. Iluminación LED con downlight en baños y cocinas. En el hall, LED en foseados. En zonas comunes, detector de presencia.",
      },
      {
        label: "Saneamiento y telecomunicaciones",
        detail:
          "Tubería de saneamiento insonorizada. Tomas de televisión y teléfono en el salón y en el dormitorio principal. Videoportero. En la terraza comunitaria, previsión de grifo y saneamiento.",
      },
    ],
    commonAreas: [
      {
        label: "Portal y núcleos",
        detail: "Planta baja y cinco alturas, con ascensor y acceso adaptado.",
      },
      {
        label: "Piscina",
        detail: "Piscina comunitaria en la cubierta.",
      },
      {
        label: "Trasteros y garaje",
        detail:
          "Las viviendas de la primera a la quinta planta se comercializan con trastero. El estudio de planta baja, no. En la comercialización no figura plaza de garaje.",
      },
      {
        label: "Seguridad",
        detail: "Circuito cerrado de seguridad.",
      },
    ],
    energy: [
      "La calificación energética se publicará con el certificado del proyecto. Hasta entonces no indicamos letra ni consumo.",
      "[COMPLETAR: calificación energética, consumo de energía primaria y emisiones]",
    ],
    plans: plans("Calle Sevilla 21"),
    surroundings: {
      intro:
        "El edificio está en Calle Sevilla 21, en el barrio de La Trinidad, distrito Centro de Málaga. El centro de salud Trinidad-Jesús Cautivo está en el número 23 de la misma calle. Los tiempos a pie son orientativos, calculados por calle desde el portal, y se redondean al alza.",
      services: [
        "Centro de salud Trinidad-Jesús Cautivo, Calle Sevilla 23.",
        "Hospital Civil, en la avenida del Doctor Gálvez Ginachero, a unos 5 minutos a pie.",
        "Hospital Materno Infantil, en la avenida Arroyo de los Ángeles, en el mismo entorno.",
      ],
      transport: [
        "Parada Velarde, a unos 5 minutos a pie: líneas 15, 18, circular C2 y nocturno N2.",
        "Parada Hospital Civil, avenida del Doctor Gálvez Ginachero, a unos 5 minutos: líneas 7, 15, 17, 18 y circular C1. La línea 7 llega a la Alameda Principal.",
        "Parada Calzada de la Trinidad, en la calle principal del barrio: líneas 15, 18 y circular C1.",
        "Metro en servicio: estación Guadalmedina, a unos 20 minutos a pie. Desde allí se enlaza con El Perchel y la estación de tren María Zambrano.",
        "La estación de metro La Trinidad, prevista en la calle Eugenio Gross, está en obras y todavía no se puede usar.",
      ],
      schools: [
        "Escuela infantil Los Enanitos, Calle San Quintín 51, en el barrio.",
        "Colegio San José de la Montaña, concertado, avenida del Doctor Gálvez Ginachero 4, junto al Hospital Civil.",
        "CEIP Bergamín, público, Calle Pelayo 16, a unos 10 minutos a pie.",
        "IES Nuestra Señora de la Victoria, Paseo de Martiricos 11, a unos 10 minutos a pie.",
      ],
      places: [
        "Jardines de Madre Petra, en La Trinidad.",
        "La Alameda Principal y el centro histórico se alcanzan en autobús con la línea 7 y la circular C1.",
      ],
    },
    image: "/images/projects/calle-sevilla-21/fachada.jpg",
    imageAlt:
      "Infografía de la fachada de Calle Sevilla 21, un edificio en esquina de La Trinidad, en Málaga.",
    gallery: [
      {
        src: "/images/projects/calle-sevilla-21/fachada.jpg",
        alt: "Infografía de la fachada de Calle Sevilla 21, un edificio en esquina de La Trinidad, en Málaga.",
      },
      {
        src: "/images/projects/calle-sevilla-21/piscina.jpg",
        alt: "Infografía de referencia de la piscina en la cubierta, de día y de noche.",
      },
      {
        src: "/images/projects/calle-sevilla-21/plano-cubierta.jpg",
        alt: "Plano de referencia de la cubierta, con la piscina y la zona de estancia.",
      },
    ],
    lat: 36.72552,
    lng: -4.42957,
    seoTitle: "Calle Sevilla 21, obra nueva en Málaga | Blue Norte",
    seoDescription:
      "Calle Sevilla 21, en La Trinidad (Málaga): ocho viviendas y un local, entrega prevista en 2028. Precios sin IVA ni AJD, desde 245.993 €.",
  },
  {
    slug: "cala-serena",
    name: "Cala Serena",
    isExample: true,
    citySlug: "malaga",
    cityName: "Málaga",
    provinceSlug: "malaga",
    provinceName: "Málaga",
    zone: "Este de Málaga",
    typologies: ["piso", "atico"],
    bedrooms: [2, 3],
    surfaceLabel,
    priceFromLabel,
    status: "en-comercializacion",
    deliveryLabel,
    featured: true,
    excerpt:
      "Ficha de ejemplo para una promoción de pisos y áticos en el este de Málaga, pensada como primera o segunda residencia.",
    description: [
      "Cala Serena es una ficha editorial de ejemplo. Representa el tipo de promoción que Blue Norte quiere desarrollar en el este de Málaga: vivienda de obra nueva, con luz, terraza o azotea según la planta, y una relación directa con el barrio.",
      "La ficha recoge la estructura comercial de una promoción real —estado, tipologías, calidades, entorno y visita— sin inventar precios, metros ni fechas. Esos datos se sustituirán cuando exista el proyecto.",
      "Quien busque obra nueva en Málaga puede usar esta página para ver cómo se pide información y cómo se explica una promoción antes de reservar.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Portal y núcleos", detail: "[COMPLETAR: descripción de accesos]" },
      { label: "Zonas ajardinadas", detail: "[COMPLETAR: si la promoción incluye jardín]" },
      { label: "Piscina", detail: "[COMPLETAR: si aplica]" },
      { label: "Trasteros y garaje", detail: "[COMPLETAR: plazas y régimen]" },
    ],
    energy: [
      "La calificación energética se publicará con el certificado del proyecto. Hasta entonces no indicamos letra ni consumo.",
      "[COMPLETAR: calificación energética, consumo de energía primaria y emisiones]",
    ],
    plans: plans("Cala Serena"),
    surroundings: {
      intro:
        "El este de Málaga combina barrios residenciales, costa y servicios de ciudad. Las distancias concretas de esta promoción están pendientes.",
      services: ["[COMPLETAR: comercio, salud y vida de barrio]"],
      transport: ["[COMPLETAR: paradas de autobús, coche y conexión con el centro]"],
      schools: ["[COMPLETAR: centros educativos de referencia]"],
    },
    image: "/images/projects/cala-serena.webp",
    imageAlt: "Ilustración de reserva de una fachada junto al mar para la ficha de ejemplo Cala Serena en Málaga.",
    lat: 36.7213,
    lng: -4.385,
    seoTitle: "Cala Serena, obra nueva en Málaga | Blue Norte",
    seoDescription:
      "Ficha de ejemplo de Cala Serena, pisos y áticos de obra nueva en el este de Málaga. Solicita información o una visita.",
  },
  {
    slug: "altos-de-teatinos",
    name: "Altos de Teatinos",
    isExample: true,
    citySlug: "malaga",
    cityName: "Málaga",
    provinceSlug: "malaga",
    provinceName: "Málaga",
    zone: "Teatinos",
    typologies: ["adosado"],
    bedrooms: [3, 4],
    surfaceLabel,
    priceFromLabel,
    status: "en-construccion",
    deliveryLabel,
    featured: true,
    excerpt:
      "Ejemplo de adosados de obra nueva en Teatinos, un entorno universitario y residencial al oeste de Málaga.",
    description: [
      "Altos de Teatinos ilustra una promoción de adosados en una zona de Málaga que ha crecido con vivienda nueva, campus y servicios. Es contenido de ejemplo, no una obra en marcha.",
      "La plantilla deja sitio a la memoria de calidades, las zonas comunes y los planos descargables. Nada de eso se rellena con cifras estimadas.",
      "Sirve para enseñar el estado «en construcción» y el tipo de casa con jardín o patio que busca parte de quien se muda a Málaga.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Accesos y viales interiores", detail: "[COMPLETAR: descripción]" },
      { label: "Zonas verdes", detail: "[COMPLETAR: si aplica]" },
      { label: "Garaje", detail: "[COMPLETAR: plazas]" },
    ],
    energy: [
      "En un adosado, la envolvente y la orientación pesan tanto como el sistema de climatización. El dato oficial irá en el certificado.",
      "[COMPLETAR: calificación energética y medidas de aislamiento]",
    ],
    plans: plans("Altos de Teatinos"),
    surroundings: {
      intro:
        "Teatinos es un distrito del oeste de Málaga, con universidad, vivienda y ejes comerciales. El plano exacto de la parcela está pendiente.",
      services: ["[COMPLETAR: servicios cotidianos en Teatinos]"],
      transport: ["[COMPLETAR: transporte público y accesos]"],
      schools: ["[COMPLETAR: colegios e institutos cercanos]"],
    },
    image: "/images/projects/altos-de-teatinos.webp",
    imageAlt: "Ilustración de reserva de viviendas adosadas para la ficha de ejemplo Altos de Teatinos.",
    lat: 36.721,
    lng: -4.475,
    seoTitle: "Altos de Teatinos, adosados en Málaga | Blue Norte",
    seoDescription:
      "Ejemplo de adosados de obra nueva en Teatinos, Málaga. Estado, calidades y formulario para pedir información.",
  },
  {
    slug: "paseo-magdalena",
    name: "Paseo Magdalena",
    isExample: true,
    citySlug: "santander",
    cityName: "Santander",
    provinceSlug: "cantabria",
    provinceName: "Cantabria",
    zone: "Magdalena",
    typologies: ["piso"],
    bedrooms: [1, 2, 3],
    surfaceLabel,
    priceFromLabel,
    status: "en-comercializacion",
    deliveryLabel,
    featured: true,
    excerpt:
      "Ejemplo de pisos de obra nueva junto al entorno de la Magdalena, en Santander, para vivir todo el año.",
    description: [
      "Paseo Magdalena es una ficha de ejemplo en Santander. Recoge la idea de una promoción de pisos en un barrio reconocido de la ciudad, con el clima atlántico como condición de proyecto y no como eslogan.",
      "Aislamiento, carpintería y ventilación importan aquí de otra manera que en la costa mediterránea. Esos detalles se documentarán en la memoria cuando haya un edificio real.",
      "La página muestra cómo se presenta una vivienda de obra nueva en Santander a quien compara comprar sobre plano con buscar en el parque de segunda mano.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Portal", detail: "[COMPLETAR: materiales y accesibilidad]" },
      { label: "Cubierta y tendederos", detail: "[COMPLETAR: solución prevista]" },
      { label: "Garaje y trasteros", detail: "[COMPLETAR: dotación]" },
    ],
    energy: [
      "El clima húmedo de la bahía pide una envolvente bien resuelta. No adelantamos letra energética.",
      "[COMPLETAR: calificación energética]",
    ],
    plans: plans("Paseo Magdalena"),
    surroundings: {
      intro:
        "La península de la Magdalena y su entorno son una de las referencias residenciales de Santander. Las distancias de esta ficha son orientativas de la ciudad, no de una parcela concreta.",
      services: ["[COMPLETAR: comercio y paseo]"],
      transport: ["[COMPLETAR: autobús y conexión con el centro]"],
      schools: ["[COMPLETAR: centros educativos]"],
    },
    image: "/images/projects/paseo-magdalena.webp",
    imageAlt: "Ilustración de reserva de un edificio frente a la bahía para Paseo Magdalena, en Santander.",
    lat: 43.4623,
    lng: -3.79,
    seoTitle: "Paseo Magdalena, obra nueva en Santander | Blue Norte",
    seoDescription:
      "Ficha de ejemplo de pisos de obra nueva en Santander, zona Magdalena. Pide información o una visita.",
  },
  {
    slug: "faro-de-cueto",
    name: "Faro de Cueto",
    isExample: true,
    citySlug: "santander",
    cityName: "Santander",
    provinceSlug: "cantabria",
    provinceName: "Cantabria",
    zone: "Cueto",
    typologies: ["unifamiliar"],
    bedrooms: [4],
    surfaceLabel,
    priceFromLabel,
    status: "proximamente",
    deliveryLabel,
    featured: false,
    excerpt:
      "Ejemplo de unifamiliares de obra nueva en Cueto, al norte de Santander, todavía sin fecha de salida comercial.",
    description: [
      "Faro de Cueto representa una promoción que aún no está a la venta. El estado «próximamente» sirve para recoger interés sin simular una comercialización abierta.",
      "La tipología es unifamiliar, la que suele buscar quien quiere jardín y más independencia dentro del municipio de Santander. Metros, parcela y precio quedan por definir.",
      "Si esta ficha se sustituye por un proyecto real, el aviso de interés de esta página puede convertirse en la lista de espera de la promoción.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Urbanización", detail: "[COMPLETAR: si las viviendas comparten viales o zonas verdes]" },
      { label: "Parcela privada", detail: "[COMPLETAR: jardín y linderos]" },
    ],
    energy: [
      "Una vivienda unifamiliar tiene más envolvente expuesta. El certificado dirá cómo se resuelve.",
      "[COMPLETAR: calificación energética]",
    ],
    plans: plans("Faro de Cueto"),
    surroundings: {
      intro:
        "Cueto es un barrio del norte de Santander, más residencial y abierto que el centro. El emplazamiento exacto está pendiente.",
      services: ["[COMPLETAR: servicios de barrio]"],
      transport: ["[COMPLETAR: accesos y transporte]"],
      schools: ["[COMPLETAR: colegios]"],
    },
    image: "/images/projects/faro-de-cueto.webp",
    imageAlt: "Ilustración de reserva de casas unifamiliares para la ficha de ejemplo Faro de Cueto.",
    lat: 43.487,
    lng: -3.792,
    seoTitle: "Faro de Cueto, unifamiliares en Santander | Blue Norte",
    seoDescription:
      "Ejemplo de unifamiliares de obra nueva en Cueto, Santander, en estado próximamente. Deja tus datos para recibir noticia.",
  },
  {
    slug: "patio-del-retiro",
    name: "Patio del Retiro",
    isExample: true,
    citySlug: "madrid",
    cityName: "Madrid",
    provinceSlug: "madrid",
    provinceName: "Madrid",
    zone: "Retiro",
    typologies: ["piso", "atico"],
    bedrooms: [2, 3, 4],
    surfaceLabel,
    priceFromLabel,
    status: "proximamente",
    deliveryLabel,
    featured: true,
    excerpt:
      "Ejemplo de pisos y áticos de obra nueva en el distrito de Retiro, para residencia o inversión en Madrid.",
    description: [
      "Patio del Retiro es una ficha de ejemplo en Madrid. Habla de obra nueva dentro de un distrito consolidado, donde comprar suele significar reformar un edificio antiguo o esperar una promoción muy concreta.",
      "Blue Norte quiere explicar ese producto con la misma claridad que una promoción de ensanche: qué se entrega, qué calificación tendrá y cómo se visita.",
      "Hasta que exista la promoción, esta página no publica precio ni superficie. El formulario sirve para medir interés real por esa zona.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Portal y escalera", detail: "[COMPLETAR: accesibilidad]" },
      { label: "Patio", detail: "[COMPLETAR: uso del patio, si existe]" },
      { label: "Cubierta", detail: "[COMPLETAR: azoteas privativas o comunitarias]" },
      { label: "Garaje", detail: "[COMPLETAR: plazas en el edificio o en el entorno]" },
    ],
    energy: [
      "La obra nueva en un tejido consolidado puede mejorar de forma notable el comportamiento energético respecto al edificio que sustituye. La letra se publica con el certificado, no antes.",
      "[COMPLETAR: calificación energética]",
    ],
    plans: plans("Patio del Retiro"),
    surroundings: {
      intro:
        "Retiro es uno de los distritos residenciales de referencia de Madrid, junto al parque del mismo nombre. El marcador del mapa es el del distrito, no el de una parcela.",
      services: ["[COMPLETAR: comercio, cultura y vida diaria]"],
      transport: ["[COMPLETAR: metro, autobús y bicicleta]"],
      schools: ["[COMPLETAR: oferta educativa]"],
    },
    image: "/images/projects/patio-del-retiro.webp",
    imageAlt: "Ilustración de reserva de un patio residencial para Patio del Retiro, en Madrid.",
    lat: 40.411,
    lng: -3.676,
    seoTitle: "Patio del Retiro, obra nueva en Madrid | Blue Norte",
    seoDescription:
      "Ejemplo de pisos y áticos de obra nueva en Retiro, Madrid. Promoción próximamente: solicita información.",
  },
  {
    slug: "jardin-de-chamberi",
    name: "Jardín de Chamberí",
    isExample: true,
    citySlug: "madrid",
    cityName: "Madrid",
    provinceSlug: "madrid",
    provinceName: "Madrid",
    zone: "Chamberí",
    typologies: ["piso"],
    bedrooms: [2, 3],
    surfaceLabel,
    priceFromLabel,
    status: "entregado",
    deliveryLabel,
    featured: false,
    excerpt:
      "Ejemplo de ficha en estado entregado, para mostrar cómo se cuenta una promoción de Chamberí cuando ya no está a la venta.",
    description: [
      "Jardín de Chamberí no es una promoción entregada por Blue Norte. Es un ejemplo de cómo quedaría la ficha cuando una obra nueva ya se ha entregado y solo permanece como referencia.",
      "Blue Norte es una promotora nueva y no atribuye a esta página viviendas reales, premios ni un histórico de entregas. El estado existe en el filtro para el día en que haya promociones terminadas.",
      "Mientras tanto, quien busque pisos de obra nueva en Chamberí puede dejar sus datos y le avisaremos si abrimos algo en el distrito.",
    ],
    qualities: qualities(),
    commonAreas: [
      { label: "Elementos comunes", detail: "[COMPLETAR: descripción una vez definidos]" },
      { label: "Garaje", detail: "[COMPLETAR: régimen]" },
    ],
    energy: [
      "En una promoción entregada, el certificado forma parte de la documentación de la vivienda. Aquí todavía no hay certificado porque no hay edificio.",
      "[COMPLETAR: calificación energética]",
    ],
    plans: plans("Jardín de Chamberí"),
    surroundings: {
      intro:
        "Chamberí es un distrito céntrico de Madrid, con calles comerciales y buena red de metro. El mapa marca el barrio, no una dirección de obra.",
      services: ["[COMPLETAR: servicios de Chamberí]"],
      transport: ["[COMPLETAR: estaciones de metro y autobuses]"],
      schools: ["[COMPLETAR: colegios]"],
    },
    image: "/images/projects/jardin-de-chamberi.webp",
    imageAlt: "Ilustración de reserva de un edificio de viviendas para Jardín de Chamberí, en Madrid.",
    lat: 40.434,
    lng: -3.704,
    seoTitle: "Jardín de Chamberí, pisos en Madrid | Blue Norte",
    seoDescription:
      "Ficha de ejemplo en Chamberí, Madrid, con estado entregado. Blue Norte aún no tiene promociones terminadas.",
  },
];
