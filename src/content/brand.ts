export const brand = {
  name: "Blue Norte Promociones",
  shortName: "Blue Norte",
  claim: "Obra nueva en Málaga, Santander, Madrid y Ciudad Real.",
  summary:
    "Blue Norte Promociones es una promotora de vivienda nueva. Desarrolla promociones en Málaga, Santander, Madrid y Ciudad Real para quien busca primera residencia, segunda residencia o una inversión en obra nueva.",
  disclaimer:
    "Las imágenes, infografías y planos son orientativos y no tienen carácter contractual. Las superficies, precios y fechas se publicarán cuando estén confirmados.",
};

export const offices = [
  {
    city: "Málaga",
    slug: "malaga" as const,
    address: "[COMPLETAR: dirección de la oficina de Málaga]",
    phone: "[COMPLETAR: teléfono Málaga]",
    email: "[COMPLETAR: email Málaga]",
    hours: "[COMPLETAR: horario Málaga]",
  },
  {
    city: "Santander",
    slug: "santander" as const,
    address: "[COMPLETAR: dirección de la oficina de Santander]",
    phone: "[COMPLETAR: teléfono Santander]",
    email: "[COMPLETAR: email Santander]",
    hours: "[COMPLETAR: horario Santander]",
  },
  {
    city: "Madrid",
    slug: "madrid" as const,
    address: "[COMPLETAR: dirección de la oficina de Madrid]",
    phone: "[COMPLETAR: teléfono Madrid]",
    email: "[COMPLETAR: email Madrid]",
    hours: "[COMPLETAR: horario Madrid]",
  },
  {
    city: "Ciudad Real",
    slug: "ciudad-real" as const,
    address: "[COMPLETAR: dirección de la oficina de Ciudad Real]",
    phone: "[COMPLETAR: teléfono Ciudad Real]",
    email: "[COMPLETAR: email Ciudad Real]",
    hours: "[COMPLETAR: horario Ciudad Real]",
  },
];

export const legalEntity = {
  name: "[COMPLETAR: razón social]",
  cif: "[COMPLETAR: CIF]",
  address: "[COMPLETAR: domicilio social]",
  registry: "[COMPLETAR: datos de inscripción en el Registro Mercantil]",
  email: "[COMPLETAR: email de contacto general]",
  privacyEmail: "[COMPLETAR: email de privacidad]",
  phone: "[COMPLETAR: teléfono general]",
};

export const nav = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/historia", label: "Historia" },
  { href: "/actualidad", label: "Actualidad" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const valuePoints = [
  {
    title: "Acabados cuidados",
    text: "Cada promoción se define con una memoria de calidades clara, antes de la reserva. Materiales, carpinterías y equipamiento se publican cuando están cerrados, sin promesas genéricas.",
  },
  {
    title: "Eficiencia y sostenibilidad",
    text: "Orientación, aislamiento y sistemas de climatización eficiente forman parte del proyecto. Donde encaja, se estudia aerotermia y preinstalación de carga para vehículo eléctrico.",
  },
  {
    title: "Entornos elegidos",
    text: "No buscamos solar por solar. Elegimos ubicaciones en Málaga, Santander, Madrid y Ciudad Real por su vida de barrio, la luz y la relación con la ciudad.",
  },
  {
    title: "Acompañamiento",
    text: "De la primera visita a la entrega, una misma persona explica plazos, documentación y siguientes pasos. Comprar obra nueva no debería sentirse opaco.",
  },
];

export const services = [
  {
    overlay: "Living",
    title: "Living",
    text: "¿Te gustaría disfrutar de tu casa desde el primer día? Living es el servicio de interiorismo y decoración de Blue Norte. Diseñamos la vivienda según cómo vas a vivirla, con un proyecto cercano y personalizado: asesoramiento, mobiliario y distribución de espacios para que la estrenes sin tener que organizarlo todo.",
    cta: "Descubre lo que Living puede hacer por ti",
    href: "/contacto",
    image: "/images/services/living.jpg",
    imageAlt: "Salón de una vivienda nueva con sofá, butacas y luz natural. Imagen de referencia.",
  },
  {
    overlay: "Benefits",
    title: "Benefits",
    text: "Queremos que entrar en la casa nueva sea sencillo. Benefits pone en marcha lo que suele quedarse para el último momento: suministros, mudanza y los servicios que hacen falta para vivirla desde el primer día. Según la promoción, puedes contratar solo lo que necesites.",
    cta: "Consulta los servicios de tu promoción",
    href: "/contacto",
    image: "/images/services/benefits.jpg",
    imageAlt: "Salón abierto a la cocina de una vivienda nueva, con grandes ventanales. Imagen de referencia.",
  },
  {
    overlay: "Select",
    title: "Select",
    text: "Select permite configurar la vivienda a tu manera. Según la fase de la obra puedes elegir distribución, acabados y equipamiento, y adaptar la casa a tus gustos. Las opciones de cada promoción se confirman en el punto de venta.",
    cta: "Descubre tus opciones de personalización",
    href: "/contacto",
    image: "/images/services/select.jpg",
    imageAlt: "Salón de una vivienda nueva con escalera de madera y sofás claros. Imagen de referencia.",
  },
];

export const processSteps = [
  {
    title: "Planificamos",
    text: "Estudiamos el lugar, la demanda de esa ciudad y el tipo de casa que tiene sentido allí: pisos, áticos, adosados o unifamiliares.",
  },
  {
    title: "Diseñamos",
    text: "El proyecto arquitectónico, la distribución y la memoria de calidades se explican con planos y materiales reales, no solo con un render.",
  },
  {
    title: "Construimos",
    text: "La obra avanza con hitos visibles. Quien ha reservado sabe en qué fase está la promoción y qué cabe esperar a continuación.",
  },
  {
    title: "Entregamos",
    text: "La entrega incluye recorrido de la vivienda, repaso de acabados y la documentación que corresponde. El después también forma parte del oficio.",
  },
];

export const team = [
  {
    role: "Dirección",
    name: "[COMPLETAR: nombre]",
    bio: "[COMPLETAR: presentación breve de la persona que dirige la promotora]",
  },
  {
    role: "Producto y obra",
    name: "[COMPLETAR: nombre]",
    bio: "[COMPLETAR: presentación de quien coordina proyecto y construcción]",
  },
  {
    role: "Atención al comprador",
    name: "[COMPLETAR: nombre]",
    bio: "[COMPLETAR: presentación de quien acompaña la información y las visitas]",
  },
];
