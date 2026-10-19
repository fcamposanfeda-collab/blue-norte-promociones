import type { Project } from "@/types/content";

const sevillaDoc = "/documents/calle-sevilla-21";

export const projects: Project[] = [
  {
    slug: "calle-sevilla-21",
    name: "Edificio Pozuelo (Calle Sevilla, 21)",
    isExample: false,
    address: "Calle Sevilla 21, 29009 Málaga",
    citySlug: "malaga",
    cityName: "Málaga",
    provinceSlug: "malaga",
    provinceName: "Málaga",
    zone: "La Trinidad",
    typologies: ["piso"],
    bedrooms: [1, 2],
    surfaceLabel: "37,28–64,90 m² útiles en viviendas",
    priceFromLabel: "283.550 € P.V.P.",
    status: "en-comercializacion",
    deliveryLabel: "2028",
    featured: true,
    excerpt:
      "Edificio Pozuelo, en Calle Sevilla 21, barrio de La Trinidad, en Málaga. Ocho viviendas y un local en bruto. Entrega prevista en 2028. Superficies y precios de las viviendas, según las fichas comerciales.",
    description: [
      "Edificio Pozuelo está en Calle Sevilla 21, en el barrio de La Trinidad, distrito Centro de Málaga. El programa tiene ocho viviendas y un local en bruto en planta baja. La entrega prevista es 2028.",
      "En las viviendas, la superficie útil, la parte de zonas comunes y la superficie construida son las de la ficha comercial de cada una. El precio es el P.V.P. de esa ficha. El local no tiene ficha comercial: sus metros siguen siendo los del proyecto visado.",
      "La quinta planta es la última del edificio y no es un ático. Hay dos plantas, la tercera y la cuarta, con una sola vivienda. Según la fase de obra se puede reservar y personalizar acabados. La memoria de calidades se puede descargar en esta ficha.",
    ],
    unitsNote:
      "Superficies y precios de las viviendas según su ficha comercial. «Zonas comunes» es la parte proporcional que figura en la ficha, y «construida» es el total que figura en ella. El precio es el P.V.P. El local no tiene ficha: 26,57 m² útiles y 31,10 m² construidos, según el proyecto visado.",
    units: [
      {
        floor: "Baja",
        door: "A",
        situation: "Bajo",
        type: "1 dormitorio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "48,63",
        privateBuiltM2: "17,25",
        builtWithCommonM2: "65,88",
        outdoor: "—",
        price: "316.848 €",
      },
      {
        floor: "Baja",
        door: "Local",
        situation: "Bajo",
        type: "Local en bruto",
        bedrooms: "—",
        bathrooms: "—",
        usefulM2: "26,57",
        privateBuiltM2: "—",
        builtWithCommonM2: "31,10",
        outdoor: "—",
      },
      {
        floor: "1ª",
        door: "A",
        situation: "Piso",
        type: "Estudio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "37,54",
        privateBuiltM2: "13,22",
        builtWithCommonM2: "50,50",
        outdoor: "—",
        price: "283.550 €",
      },
      {
        floor: "1ª",
        door: "B",
        situation: "Piso",
        type: "1 dormitorio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "44,80",
        privateBuiltM2: "15,41",
        builtWithCommonM2: "60,69",
        outdoor: "15,41",
        price: "435.480 €",
      },
      {
        floor: "2ª",
        door: "A",
        situation: "Piso",
        type: "Estudio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "37,28",
        privateBuiltM2: "13,22",
        builtWithCommonM2: "50,50",
        outdoor: "—",
        price: "290.358 €",
      },
      {
        floor: "2ª",
        door: "B",
        situation: "Piso",
        type: "1 dormitorio",
        bedrooms: "1",
        bathrooms: "1",
        usefulM2: "44,80",
        privateBuiltM2: "15,89",
        builtWithCommonM2: "60,69",
        outdoor: "—",
        price: "351.144 €",
      },
      {
        floor: "3ª",
        door: "A",
        situation: "Piso (única en planta)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "2",
        usefulM2: "64,90",
        privateBuiltM2: "23,02",
        builtWithCommonM2: "87,92",
        outdoor: "14,88",
        price: "560.260 €",
      },
      {
        floor: "4ª",
        door: "A",
        situation: "Piso (única en planta)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "1",
        usefulM2: "60,22",
        privateBuiltM2: "21,36",
        builtWithCommonM2: "81,58",
        outdoor: "5",
        price: "504.845 €",
      },
      {
        floor: "5ª",
        door: "A",
        situation: "Última planta (no ático)",
        type: "2 dormitorios",
        bedrooms: "2",
        bathrooms: "1",
        usefulM2: "60,22",
        privateBuiltM2: "21,36",
        builtWithCommonM2: "81,58",
        outdoor: "5",
        price: "512.736 €",
      },
    ],
    qualityDocument: {
      href: "/documents/calle-sevilla-21/memoria-de-calidades.pdf",
      label: "Ver la memoria de calidades (PDF)",
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
          "Cocina amueblada a elección del cliente, con equipamiento básico y previsión para lavavajillas o mueble. Inodoro Roca Meridian a suelo, rimless. Plato de ducha de resina. Lavabo con mueble y espejo. Grifería de ducha en superficie y grifo de lavabo monoblock, en inox. Mampara de vidrio templado de más de 8 mm. La ducha se independiza con un murete.",
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
        detail:
          "Parcela de 108,41 m². A Calle Sevilla, planta baja y cinco alturas; al Pasaje César de Haro, planta baja y dos. Altura libre de 3,80 m en planta baja y de 2,70 m en las plantas altas. Ascensor hasta la cubierta y acceso adaptado.",
      },
      {
        label: "Piscina",
        detail: "Piscina comunitaria en la cubierta.",
      },
      {
        label: "Trasteros",
        detail:
          "Seis trasteros en planta baja. La superficie total de cada uno, con su parte de zona común, va de 3,03 m² a 5,21 m². Según las fichas comerciales, llevan trastero la planta baja, la 1ª A, la 2ª A, la 2ª B, la 4ª A y la 5ª A. La 1ª B y la 3ª A, no.",
      },
      {
        label: "Seguridad",
        detail: "Circuito cerrado de seguridad.",
      },
    ],
    energyCertificate: {
      intro:
        "Certificado del proyecto del bloque completo, de 10 de octubre de 2023, en zona climática A3.",
      ratings: [
        {
          label: "Consumo de energía primaria no renovable",
          letter: "B",
          value: "19,89 kWh/m²·año",
        },
        {
          label: "Emisiones de CO₂",
          letter: "B",
          value: "3,49 kgCO₂/m²·año",
        },
      ],
    },
    highlights: [
      { label: "Dormitorios", value: "1–2" },
      { label: "Baños", value: "1–2" },
      { label: "Cocina", value: "1 en las viviendas" },
      { label: "Trastero", value: "6 en planta baja" },
    ],
    plans: [
      {
        name: "Trasteros en planta baja",
        href: `${sevillaDoc}/plano-trasteros.pdf`,
        fileName: "plano-trasteros-calle-sevilla-21.pdf",
      },
      {
        name: "Planta baja, vivienda A",
        href: `${sevillaDoc}/plano-planta-baja.pdf`,
        fileName: "plano-planta-baja-calle-sevilla-21.pdf",
      },
      {
        name: "1ª planta, vivienda A",
        href: `${sevillaDoc}/plano-1a.pdf`,
        fileName: "plano-1a-calle-sevilla-21.pdf",
      },
      {
        name: "1ª planta, vivienda B",
        href: `${sevillaDoc}/plano-1b.pdf`,
        fileName: "plano-1b-calle-sevilla-21.pdf",
      },
      {
        name: "2ª planta, vivienda A",
        href: `${sevillaDoc}/plano-2a.pdf`,
        fileName: "plano-2a-calle-sevilla-21.pdf",
      },
      {
        name: "2ª planta, vivienda B",
        href: `${sevillaDoc}/plano-2b.pdf`,
        fileName: "plano-2b-calle-sevilla-21.pdf",
      },
      {
        name: "3ª planta",
        href: `${sevillaDoc}/plano-3a.pdf`,
        fileName: "plano-3a-calle-sevilla-21.pdf",
      },
      {
        name: "4ª planta",
        href: `${sevillaDoc}/plano-4a.pdf`,
        fileName: "plano-4a-calle-sevilla-21.pdf",
      },
      {
        name: "5ª planta",
        href: `${sevillaDoc}/plano-5a.pdf`,
        fileName: "plano-5a-calle-sevilla-21.pdf",
      },
    ],
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
    seoTitle: "Edificio Pozuelo, obra nueva en Málaga | Blue Norte",
    seoDescription:
      "Edificio Pozuelo, en Calle Sevilla 21, La Trinidad (Málaga): ocho viviendas y un local. Entrega prevista en 2028. Desde 283.550 € P.V.P.",
  },
];
