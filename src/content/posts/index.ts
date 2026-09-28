import type { Post } from "@/types/content";
import { calificacionEnergetica } from "@/content/posts/calificacion-energetica";
import { sobrePlano } from "@/content/posts/sobre-plano";
import { ventajasObraNueva } from "@/content/posts/ventajas-obra-nueva";

export const posts: Post[] = [ventajasObraNueva, calificacionEnergetica, sobrePlano].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export const postCategories = [
  { slug: "guias", name: "Guías de compra" },
  { slug: "eficiencia", name: "Eficiencia" },
  { slug: "proceso", name: "Proceso de compra" },
] as const;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
