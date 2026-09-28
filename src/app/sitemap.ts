import type { MetadataRoute } from "next";
import { cities } from "@/content/cities";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/proyectos",
    "/ubicacion",
    "/historia",
    "/actualidad",
    "/contacto",
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/proyectos/${project.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...cities.map((city) => ({
      url: absoluteUrl(`/ubicacion/${city.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/actualidad/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
