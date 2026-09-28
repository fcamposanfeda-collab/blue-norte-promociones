import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { StickyCta } from "@/components/projects/StickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PendingText } from "@/components/ui/PendingText";
import { brand } from "@/content/brand";
import { formatBedrooms, formatTypologies, statusLabel } from "@/lib/labels";
import { getAllProjects, getProject, getRelatedProjects } from "@/lib/projects";
import { breadcrumbSchema, faqSchema, graphSchema, projectSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/site";
import type { FaqItem } from "@/types/content";

const faq: FaqItem[] = [
  {
    question: "¿Las imágenes de la promoción son contractuales?",
    answer:
      "No. Las imágenes, infografías y planos son orientativos y no tienen carácter contractual.",
  },
  {
    question: "¿Cómo solicito información o una visita?",
    answer:
      "Desde el formulario de esta ficha. Indica tu teléfono y qué te interesa. Te responderemos cuando podamos concretar la visita.",
  },
];

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/proyectos/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug);
  const crumbs = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: project.name },
  ];
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${project.lng - 0.04}%2C${project.lat - 0.025}%2C${project.lng + 0.04}%2C${project.lat + 0.025}&layer=mapnik&marker=${project.lat}%2C${project.lng}`;

  return (
    <article className="pb-28">
      <JsonLd
        data={graphSchema([
          breadcrumbSchema(crumbs),
          projectSchema(project),
          faqSchema(faq),
        ])}
      />
      <section className="relative flex min-h-[78vh] items-end bg-navy text-ivory">
        <div className="absolute inset-0">
          <MediaFrame src={project.image} alt={project.imageAlt} priority sizes="100vw" className="h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/20" />
        <Container className="relative z-10 pt-32 pb-12">
          <Breadcrumbs items={crumbs} />
          <p className="mt-4 text-xs tracking-[0.2em] text-sand uppercase">
            {statusLabel[project.status]} · Ejemplo editorial
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl">{project.name}</h1>
          <p className="mt-3 text-lg">
            {project.cityName}, {project.zone}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-4 text-muted">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="grid gap-4 border border-line bg-white p-6 text-sm">
            <Fact term="Ciudad" value={project.cityName} />
            <Fact term="Zona" value={project.zone} />
            <Fact term="Tipologías" value={formatTypologies(project.typologies)} />
            <Fact term="Dormitorios" value={formatBedrooms(project.bedrooms)} />
            <Fact term="Superficie" value={project.surfaceLabel} pending />
            <Fact term="Estado" value={statusLabel[project.status]} />
            <Fact term="Entrega estimada" value={project.deliveryLabel} pending />
            <Fact term="Precio" value={`Desde ${project.priceFromLabel}`} pending />
            <div>
              <Link href={`/ubicacion/${project.citySlug}`} className="underline">
                Obra nueva en {project.cityName}
              </Link>
            </div>
          </dl>
        </Container>
      </section>

      <Section title="Memoria de calidades">
        <SpecList items={project.qualities} />
      </Section>
      <Section title="Zonas comunes" tone="white">
        <SpecList items={project.commonAreas} />
      </Section>
      <Section title="Eficiencia energética">
        {project.energy.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl text-muted">
            <PendingText text={paragraph} />
          </p>
        ))}
        <p className="mt-4">
          <Link href="/actualidad/calificacion-energetica-a" className="underline">
            Qué significa la calificación energética A
          </Link>
        </p>
      </Section>
      <Section title="Planos descargables" tone="white">
        <ul className="mt-6 grid gap-3">
          {project.plans.map((plan) => (
            <li key={plan.name} className="border border-line bg-ivory px-4 py-3">
              <p className="font-medium">{plan.name}</p>
              <p className="text-sm">
                <PendingText text={plan.note} />
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Situación y entorno">
        <p className="max-w-3xl text-muted">{project.surroundings.intro}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <iframe
            title={`Mapa orientativo de ${project.zone}, ${project.cityName}`}
            src={mapSrc}
            className="h-80 w-full border border-line"
            loading="lazy"
          />
          <div className="space-y-4 text-sm">
            <p className="text-muted">
              El marcador sitúa la zona, no una parcela. Dirección exacta:{" "}
              <PendingText text="[COMPLETAR: coordenadas de la promoción]." />
            </p>
            <List title="Servicios" items={project.surroundings.services} />
            <List title="Transporte" items={project.surroundings.transport} />
            <List title="Colegios" items={project.surroundings.schools} />
          </div>
        </div>
      </Section>

      <section id="solicitud" className="bg-ivory-deep py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl">Información de {project.name}</h2>
            <p className="mt-4 text-muted">
              Deja tus datos si quieres el dossier, una visita o aviso cuando esta ficha deje de ser
              un ejemplo.
            </p>
          </div>
          <ContactForm promotion={project.name} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-4xl">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4">
            {faq.map((item) => (
              <details key={item.question} className="border border-line bg-white p-4">
                <summary className="cursor-pointer font-medium">{item.question}</summary>
                <p className="mt-3 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-muted">{brand.disclaimer}</p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-4xl">Otras promociones</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Container>
      </section>
      <StickyCta name={project.name} />
    </article>
  );
}

function Fact({ term, value, pending = false }: { term: string; value: string; pending?: boolean }) {
  return (
    <div>
      <dt className="text-xs tracking-[0.14em] text-muted uppercase">{term}</dt>
      <dd className="mt-1">{pending ? <PendingText text={value} /> : value}</dd>
    </div>
  );
}

function Section({
  title,
  children,
  tone = "ivory",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "ivory" | "white";
}) {
  return (
    <section className={`py-14 ${tone === "white" ? "bg-white" : ""}`}>
      <Container>
        <h2 className="text-4xl">{title}</h2>
        {children}
      </Container>
    </section>
  );
}

function SpecList({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.label} className="border border-line p-4">
          <p className="font-medium">{item.label}</p>
          <p className="mt-2 text-sm text-muted">
            <PendingText text={item.detail} />
          </p>
        </li>
      ))}
    </ul>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item}>
            <PendingText text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
