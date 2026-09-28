export const dictionary = {
  locale: "es",
  nav: {
    projects: "Proyectos",
    location: "Ubicación",
    history: "Historia",
    news: "Actualidad",
    contact: "Contacto",
    request: "Solicita información",
    menu: "Abrir menú",
    close: "Cerrar menú",
    skip: "Saltar al contenido",
  },
  search: {
    title: "Busca tu vivienda",
    city: "Provincia o ciudad",
    typology: "Tipología",
    bedrooms: "Dormitorios",
    status: "Estado",
    sort: "Ordenar",
    submit: "Ver promociones",
    all: "Todas",
    any: "Cualquiera",
  },
  form: {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    message: "Mensaje",
    promotion: "Promoción",
    consent: "He leído la política de privacidad y consiento el tratamiento de mis datos para atender esta solicitud.",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    success: "Gracias. Hemos recibido tu solicitud y te responderemos lo antes posible.",
    error: "No hemos podido enviar el formulario. Inténtalo de nuevo o usa los datos de contacto.",
  },
} as const;

export type Dictionary = {
  locale: string;
  nav: {
    projects: string;
    location: string;
    history: string;
    news: string;
    contact: string;
    request: string;
    menu: string;
    close: string;
    skip: string;
  };
  search: {
    title: string;
    city: string;
    typology: string;
    bedrooms: string;
    status: string;
    sort: string;
    submit: string;
    all: string;
    any: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    promotion: string;
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
};
