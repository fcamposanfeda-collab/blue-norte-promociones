import type { ProjectStatus, Typology } from "@/types/content";

export const statusLabel: Record<ProjectStatus, string> = {
  "en-comercializacion": "En comercialización",
  "en-construccion": "En construcción",
  proximamente: "Próximamente",
  entregado: "Entregado",
};

export const typologyLabel: Record<Typology, string> = {
  piso: "Piso",
  atico: "Ático",
  adosado: "Adosado",
  unifamiliar: "Unifamiliar",
};

export const statusOrder: ProjectStatus[] = [
  "en-comercializacion",
  "en-construccion",
  "proximamente",
  "entregado",
];

export function formatBedrooms(bedrooms: number[]) {
  const sorted = [...bedrooms].sort((a, b) => a - b);
  if (sorted.length === 0) return "[COMPLETAR: dormitorios]";
  if (sorted.length === 1) {
    return sorted[0] === 1 ? "1 dormitorio" : `${sorted[0]} dormitorios`;
  }
  return `${sorted[0]}–${sorted[sorted.length - 1]} dormitorios`;
}

export function formatTypologies(typologies: Typology[]) {
  return typologies.map((item) => typologyLabel[item]).join(" · ");
}
