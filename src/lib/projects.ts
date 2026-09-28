import { projects } from "@/content/projects";
import { statusOrder } from "@/lib/labels";
import type { Project, ProjectStatus, ProvinceSlug, Typology } from "@/types/content";

const typologies: Typology[] = ["piso", "atico", "adosado", "unifamiliar"];
const provinces: ProvinceSlug[] = ["malaga", "cantabria", "madrid"];
const cities = ["malaga", "santander", "madrid"] as const;
const statuses: ProjectStatus[] = [
  "en-comercializacion",
  "en-construccion",
  "proximamente",
  "entregado",
];

export type ProjectQuery = {
  provincia?: ProvinceSlug;
  ciudad?: (typeof cities)[number];
  tipologia?: Typology;
  dormitorios?: "1" | "2" | "3" | "4";
  estado?: ProjectStatus;
  orden?: "destacadas" | "nombre" | "estado";
};

function oneOf<T extends string>(value: string | undefined, allowed: readonly T[]) {
  return allowed.find((item) => item === value);
}

export function parseProjectQuery(source: Record<string, string | undefined>): ProjectQuery {
  return {
    provincia: oneOf(source.provincia, provinces),
    ciudad: oneOf(source.ciudad, cities),
    tipologia: oneOf(source.tipologia, typologies),
    dormitorios: oneOf(source.dormitorios, ["1", "2", "3", "4"] as const),
    estado: oneOf(source.estado, statuses),
    orden: oneOf(source.orden, ["destacadas", "nombre", "estado"] as const) ?? "destacadas",
  };
}

export function hasProjectFilters(query: ProjectQuery) {
  return Boolean(
    query.provincia ||
      query.ciudad ||
      query.tipologia ||
      query.dormitorios ||
      query.estado ||
      (query.orden && query.orden !== "destacadas"),
  );
}

export function filterProjects(query: ProjectQuery) {
  const filtered = projects.filter((project) => {
    if (query.provincia && project.provinceSlug !== query.provincia) return false;
    if (query.ciudad && project.citySlug !== query.ciudad) return false;
    if (query.tipologia && !project.typologies.includes(query.tipologia)) return false;
    if (query.estado && project.status !== query.estado) return false;
    if (query.dormitorios) {
      const minimum = Number(query.dormitorios);
      const matches =
        query.dormitorios === "4"
          ? project.bedrooms.some((bedrooms) => bedrooms >= 4)
          : project.bedrooms.includes(minimum);
      if (!matches) return false;
    }
    return true;
  });

  return filtered.sort((a, b) => compareProjects(a, b, query.orden ?? "destacadas"));
}

function compareProjects(a: Project, b: Project, orden: NonNullable<ProjectQuery["orden"]>) {
  if (orden === "nombre") return a.name.localeCompare(b.name, "es");
  if (orden === "estado") return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return a.name.localeCompare(b.name, "es");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(slug: string) {
  const current = getProject(slug);
  if (!current) return [];
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aCity = a.citySlug === current.citySlug ? 0 : 1;
      const bCity = b.citySlug === current.citySlug ? 0 : 1;
      return aCity - bCity;
    })
    .slice(0, 3);
}

export function getAllProjects() {
  return projects;
}
