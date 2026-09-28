export type CitySlug = "malaga" | "santander" | "madrid";
export type ProvinceSlug = "malaga" | "cantabria" | "madrid";
export type Typology = "piso" | "atico" | "adosado" | "unifamiliar";
export type ProjectStatus =
  | "en-comercializacion"
  | "en-construccion"
  | "proximamente"
  | "entregado";

export type SpecItem = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  isExample: true;
  citySlug: CitySlug;
  cityName: string;
  provinceSlug: ProvinceSlug;
  provinceName: string;
  zone: string;
  typologies: Typology[];
  bedrooms: number[];
  surfaceLabel: string;
  priceFromLabel: string;
  status: ProjectStatus;
  deliveryLabel: string;
  featured: boolean;
  excerpt: string;
  description: string[];
  qualities: SpecItem[];
  commonAreas: SpecItem[];
  energy: string[];
  plans: { name: string; note: string }[];
  surroundings: {
    intro: string;
    services: string[];
    transport: string[];
    schools: string[];
  };
  image: string;
  imageAlt: string;
  lat: number;
  lng: number;
  seoTitle: string;
  seoDescription: string;
};

export type CitySection = {
  id: string;
  heading: string;
  level?: "h2" | "h3";
  paragraphs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CityPage = {
  slug: CitySlug;
  name: string;
  provinceName: string;
  provinceSlug: ProvinceSlug;
  region: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  image: string;
  imageAlt: string;
  lat: number;
  lng: number;
  sections: CitySection[];
  faq: FaqItem[];
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  category: string;
  categorySlug: string;
  readingMinutes: number;
  excerpt: string;
  image: string;
  imageAlt: string;
  blocks: PostBlock[];
  faq: FaqItem[];
};

export type Crumb = {
  name: string;
  href?: string;
};
