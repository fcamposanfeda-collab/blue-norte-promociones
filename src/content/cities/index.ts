import type { CityPage, CitySlug } from "@/types/content";
import { madrid } from "@/content/cities/madrid";
import { malaga } from "@/content/cities/malaga";
import { santander } from "@/content/cities/santander";

export const cities: CityPage[] = [malaga, santander, madrid];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function isCitySlug(value: string): value is CitySlug {
  return cities.some((city) => city.slug === value);
}
