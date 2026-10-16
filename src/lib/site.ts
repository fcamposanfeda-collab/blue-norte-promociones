import type { Metadata } from "next";

export const siteName = "Blue Norte Promociones";

const canonicalProductionUrl = "https://bluepromociones.com";

function isLocalUrl(value: string) {
  return /localhost|127\.0\.0\.1/i.test(value);
}

function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured && !isLocalUrl(configured)) return configured;
  if (process.env.VERCEL) return canonicalProductionUrl;
  return configured || "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  type?: "website" | "article";
}): Metadata {
  if (input.title.length > 60) {
    throw new Error(`Title SEO demasiado largo (${input.title.length}): ${input.title}`);
  }
  if (input.description.length > 155) {
    throw new Error(
      `Description SEO demasiado larga (${input.description.length}): ${input.description}`,
    );
  }

  const index = input.index !== false && process.env.VERCEL_ENV !== "preview";

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: input.path },
    robots: { index, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      siteName,
      locale: "es_ES",
      type: input.type ?? "website",
      images: [
        {
          url: "/images/hero-fachada.jpg",
          alt: "Fachada de referencia de una vivienda de obra nueva de Blue Norte Promociones.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

export function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}
