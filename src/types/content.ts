export type CitySlug = "malaga" | "santander" | "madrid" | "ciudad-real";
export type ProvinceSlug = "malaga" | "cantabria" | "madrid" | "ciudad-real";
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

export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectPlan = {
  name: string;
  note?: string;
  href?: string;
  fileName?: string;
};

export type DwellingUnit = {
  floor: string;
  door: string;
  situation: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  usefulM2: string;
  privateBuiltM2: string;
  builtWithCommonM2: string;
  outdoor: string;
  price?: string;
};

export type Project = {
  slug: string;
  name: string;
  isExample: boolean;
  address?: string;
  units?: DwellingUnit[];
  unitsNote?: string;
  citySlug: CitySlug;
  cityName: string;
  provinceSlug: ProvinceSlug;
  provinceName: string;
  zone: string;
  typologies: Typology[];
  bedrooms: number[];
  surfaceLabel: string;
  priceFromLabel: string;
  status?: ProjectStatus;
  deliveryLabel: string;
  featured: boolean;
  excerpt: string;
  description: string[];
  qualities: SpecItem[];
  qualityDocument?: { href: string; label: string; fileName: string };
  commonAreas: SpecItem[];
  energyCertificate?: {
    intro: string;
    ratings: { label: string; letter: string; value: string }[];
  };
  highlights?: ProjectHighlight[];
  plans: ProjectPlan[];
  surroundings: {
    intro: string;
    services: string[];
    transport: string[];
    schools: string[];
    places?: string[];
  };
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  photoPending?: boolean;
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

export type ImageCredit = {
  author: string;
  authorUrl: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
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
  imageCredit?: ImageCredit;
  photoPending?: boolean;
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
