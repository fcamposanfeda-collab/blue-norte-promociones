import Link from "next/link";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PendingText } from "@/components/ui/PendingText";
import { formatBedrooms, formatTypologies, statusLabel } from "@/lib/labels";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white">
      <Link href={`/proyectos/${project.slug}`} className="block">
        <MediaFrame
          src={project.image}
          alt={project.imageAlt}
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs tracking-[0.16em] text-accent-ink uppercase">
          {statusLabel[project.status]}
        </p>
        <h3 className="text-3xl">
          <Link href={`/proyectos/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="text-sm text-muted">
          {project.cityName} · {project.zone}
        </p>
        <p className="text-sm">
          {formatTypologies(project.typologies)} · {formatBedrooms(project.bedrooms)}
        </p>
        <p className="mt-auto text-sm">
          Desde <PendingText text={project.priceFromLabel} />
        </p>
        <p className="text-xs tracking-wide text-muted uppercase">Ejemplo editorial</p>
      </div>
    </article>
  );
}
