"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { filterProjects, hasProjectFilters, parseProjectQuery } from "@/lib/projects";

function useLocationSearch() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const read = () => setSearch(window.location.search);
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  return search;
}

export function ProjectBrowser() {
  const search = useLocationSearch();
  const params = new URLSearchParams(search);
  const query = parseProjectQuery({
    provincia: params.get("provincia") ?? undefined,
    ciudad: params.get("ciudad") ?? undefined,
    tipologia: params.get("tipologia") ?? undefined,
    dormitorios: params.get("dormitorios") ?? undefined,
    estado: params.get("estado") ?? undefined,
    orden: params.get("orden") ?? undefined,
  });
  const results = filterProjects(query);
  const label = results.length === 1 ? "1 promoción" : `${results.length} promociones`;

  return (
    <>
      <ProjectFilters key={search} query={query} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p>
          <strong>{label}</strong>
          {hasProjectFilters(query) ? " con estos filtros" : null}
        </p>
        {hasProjectFilters(query) ? (
          <Link href="/proyectos/" className="text-sm underline">
            Quitar filtros
          </Link>
        ) : null}
      </div>
      {results.length === 0 ? (
        <p className="mt-10 max-w-xl">
          Ninguna promoción coincide. Prueba con otros filtros o vuelve al listado completo.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
