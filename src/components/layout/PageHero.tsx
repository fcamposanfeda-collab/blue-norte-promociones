import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Crumb } from "@/types/content";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[68vh] items-end bg-navy text-ivory">
      <div className="absolute inset-0">
        <MediaFrame src={image} alt={imageAlt} priority sizes="100vw" className="h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/20" />
      <Container className="relative z-10 pt-32 pb-14">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        {eyebrow ? <p className="mt-4 text-xs tracking-[0.22em] text-sand uppercase">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-5xl md:text-7xl">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lg text-ivory/90">{lead}</p> : null}
      </Container>
    </section>
  );
}
