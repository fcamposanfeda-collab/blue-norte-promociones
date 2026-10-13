import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { Container } from "@/components/ui/Container";
import { firstParam, buildMetadata } from "@/lib/site";
import { filterProjects, hasProjectFilters, parseProjectQuery } from "@/lib/projects";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const query = parseProjectQuery({
    provincia: firstParam(params.provincia),
    ciudad: firstParam(params.ciudad),
    tipologia: firstParam(params.tipologia),
    dormitorios: firstParam(params.dormitorios),
    estado: firstParam(params.estado),
    orden: firstParam(params.orden),
  });

  return buildMetadata({
    title: "Promociones de vivienda nueva | Blue Norte",
    description:
      "Listado de promociones de obra nueva en Málaga, Santander, Madrid y Ciudad Real. Filtra por ciudad y dormitorios.",
    path: "/proyectos",
    index: !hasProjectFilters(query),
  });
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const query = parseProjectQuery({
    provincia: firstParam(params.provincia),
    ciudad: firstParam(params.ciudad),
    tipologia: firstParam(params.tipologia),
    dormitorios: firstParam(params.dormitorios),
    estado: firstParam(params.estado),
    orden: firstParam(params.orden),
  });
  const results = filterProjects(query);
  const label =
    results.length === 1 ? "1 promoción" : `${results.length} promociones`;

  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Promociones de vivienda nueva"
        lead="Pisos, áticos, adosados y unifamiliares de obra nueva. Las fichas actuales son ejemplos hasta que publiquemos el inventario real."
        image="/images/hero.webp"
        imageAlt="Ilustración de reserva para el listado de promociones de Blue Norte."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Proyectos" },
        ]}
      />
      <section className="py-12">
        <Container>
          <ProjectFilters query={query} />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p>
              <strong>{label}</strong>
              {hasProjectFilters(query) ? " con estos filtros" : " en el catálogo de ejemplo"}
            </p>
            {hasProjectFilters(query) ? (
              <Link href="/proyectos" className="text-sm underline">
                Quitar filtros
              </Link>
            ) : null}
          </div>
          {results.length === 0 ? (
            <p className="mt-10 max-w-xl">
              Ninguna promoción de ejemplo coincide. Prueba con otros filtros o vuelve al listado
              completo.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
