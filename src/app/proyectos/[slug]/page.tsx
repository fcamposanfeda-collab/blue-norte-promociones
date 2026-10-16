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
          {project.photoPending ? (
            <div className="h-full bg-sand" />
          ) : (
            <MediaFrame src={project.image} alt={project.imageAlt} priority sizes="100vw" className="h-full" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/20" />
        <Container className="relative z-10 pt-32 pb-12">
          <Breadcrumbs items={crumbs} />
          <p className="mt-4 text-xs tracking-[0.2em] text-sand uppercase">
            {project.status ? (
              statusLabel[project.status]
            ) : (
              <PendingText text="[COMPLETAR: estado de la promoción]" />
            )}
            {project.isExample ? " · Ejemplo editorial" : null}
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl">{project.name}</h1>
          <p className="mt-3 text-lg">
            {project.cityName}, {project.zone}
          </p>
          {project.photoPending ? <p className="mt-3 text-sm text-sand">Fotografía del edificio pendiente.</p> : null}
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
            {project.address ? <Fact term="Dirección" value={project.address} /> : null}
            <Fact term="Zona" value={project.zone} />
            <Fact term="Tipologías" value={formatTypologies(project.typologies)} />
            <Fact term="Dormitorios" value={formatBedrooms(project.bedrooms)} />
            <Fact term="Superficie" value={project.surfaceLabel} pending />
            <Fact
              term="Estado"
              value={project.status ? statusLabel[project.status] : "[COMPLETAR: estado de la promoción]"}
              pending={!project.status}
            />
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

      {project.highlights?.length ? (
        <Section title="Características">
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {project.highlights.map((item) => (
              <li key={item.label} className="border border-line bg-white px-4 py-5 text-center">
                <HighlightIcon label={item.label} />
                <p className="mt-3 text-xs tracking-[0.14em] text-muted uppercase">{item.label}</p>
                <p className="mt-1 font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">Información orientativa, sin carácter contractual.</p>
        </Section>
      ) : null}

      {project.gallery?.length ? (
        <Section title="Imágenes">
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.gallery.map((item) => (
              <MediaFrame
                key={item.src}
                src={item.src}
                alt={item.alt}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3]"
                fit="contain"
              />
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted">
            Infografías y plano de la comercialización. Son orientativos y no tienen carácter contractual.
          </p>
        </Section>
      ) : null}

      {project.units ? (
        <Section title="Programa de viviendas">
          {project.unitsNote ? <p className="mt-4 max-w-3xl text-muted">{project.unitsNote}</p> : null}
          <div className="mt-6 overflow-x-auto border border-line">
            <table className="w-full min-w-[72rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Superficies y precios por vivienda de {project.name}. Medidas en metros cuadrados.
              </caption>
              <thead className="bg-ivory text-xs tracking-wide uppercase">
                <tr>
                  {[
                    "Planta",
                    "Puerta",
                    "Situación",
                    "Tipo",
                    "Dormitorios",
                    "Baños",
                    "Útil (m²)",
                    "Zonas comunes (m²)",
                    "Construida (m²)",
                    "Terraza o patio (m²)",
                    ...(project.units.some((unit) => unit.price) ? ["Precio"] : []),
                  ].map((heading) => (
                    <th key={heading} scope="col" className="px-3 py-3 font-medium">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {project.units.map((unit) => (
                  <tr key={`${unit.floor}-${unit.door}`} className="border-t border-line">
                    <th scope="row" className="px-3 py-3 font-medium">
                      {unit.floor}
                    </th>
                    <td className="px-3 py-3">{unit.door}</td>
                    <td className="px-3 py-3">{unit.situation}</td>
                    <td className="px-3 py-3">{unit.type}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.bedrooms}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.bathrooms}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.usefulM2}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.privateBuiltM2}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.builtWithCommonM2}</td>
                    <td className="px-3 py-3 tabular-nums">{unit.outdoor}</td>
                    {project.units?.some((item) => item.price) ? (
                      <td className="px-3 py-3 tabular-nums">{unit.price ?? "—"}</td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}
      <Section title="Memoria de calidades">
        {project.qualityDocument ? (
          <p className="mt-6">
            <a
              href={project.qualityDocument.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {project.qualityDocument.label}
            </a>
          </p>
        ) : null}
        <SpecList items={project.qualities} as="details" />
      </Section>
      <Section title="Zonas comunes" tone="white">
        <SpecList items={project.commonAreas} />
      </Section>
      {project.energyCertificate ? (
        <Section title="Eficiencia energética">
          <p className="mt-4 max-w-3xl text-muted">{project.energyCertificate.intro}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.energyCertificate.ratings.map((item) => (
              <li key={item.label} className="border border-line bg-white px-4 py-5 text-center">
                <p className="font-serif text-5xl text-accent">{item.letter}</p>
                <p className="mt-3 text-xs tracking-[0.14em] text-muted uppercase">{item.label}</p>
                <p className="mt-1 font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/actualidad/calificacion-energetica-a" className="underline">
              Qué significa la calificación energética
            </Link>
          </p>
        </Section>
      ) : null}
      <Section title="Planos" tone="white">
        <p className="mt-4 max-w-3xl text-muted">
          Plano general de venta y ficha comercial de cada vivienda y de los trasteros. Son orientativos y no
          tienen carácter contractual. Las superficies y los precios de la tabla de esta página son los de
          esas fichas.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {project.plans.map((plan) => (
            <li key={plan.name} className="border border-line bg-ivory">
              {plan.href ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-between gap-4 px-4 py-3"
                >
                  <span className="font-medium">{plan.name}</span>
                  <span className="text-sm underline">PDF</span>
                </a>
              ) : (
                <div className="px-4 py-3">
                  <p className="font-medium">{plan.name}</p>
                  {plan.note ? (
                    <p className="text-sm">
                      <PendingText text={plan.note} />
                    </p>
                  ) : null}
                </div>
              )}
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
              {project.address ? (
                <>El marcador corresponde a {project.address}.</>
              ) : (
                <>
                  El marcador sitúa la zona, no una parcela. Dirección exacta:{" "}
                  <PendingText text="[COMPLETAR: coordenadas de la promoción]." />
                </>
              )}
            </p>
            <List title="Servicios" items={project.surroundings.services} />
            <List title="Transporte" items={project.surroundings.transport} />
            <List title="Colegios" items={project.surroundings.schools} />
            {project.surroundings.places?.length ? (
              <List title="Alrededores" items={project.surroundings.places} />
            ) : null}
          </div>
        </div>
      </Section>

      <section id="solicitud" className="bg-ivory-deep py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl">Información de {project.name}</h2>
            <p className="mt-4 text-muted">
              {project.isExample
                ? "Deja tus datos si quieres el dossier, una visita o aviso cuando esta ficha deje de ser un ejemplo."
                : "Deja tus datos si quieres el cuadro de superficies, una visita o más información de esta promoción."}
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

      {related.length > 0 ? (
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
      ) : null}
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

function SpecList({
  items,
  as = "cards",
}: {
  items: { label: string; detail: string }[];
  as?: "cards" | "details";
}) {
  if (as === "details") {
    return (
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item.label} className="border border-line bg-white">
            <details>
              <summary className="cursor-pointer px-4 py-3 font-medium">{item.label}</summary>
              <p className="px-4 pb-4 text-sm text-muted">
                <PendingText text={item.detail} />
              </p>
            </details>
          </li>
        ))}
      </ul>
    );
  }

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

function HighlightIcon({ label }: { label: string }) {
  const common = "mx-auto h-8 w-8 text-navy";
  if (label === "Baños") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14v3a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-3z" />
        <path d="M7 12V8a2 2 0 0 1 2-2h1" />
        <path d="M8 21v-1M16 21v-1" />
      </svg>
    );
  }
  if (label === "Cocina") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 10h14v9H5z" />
        <path d="M8 10V6M12 10V5M16 10V6" />
        <path d="M9 14h.01M15 14h.01" />
      </svg>
    );
  }
  if (label === "Garaje") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20V10l8-6 8 6v10" />
        <path d="M8 20v-6h8v6" />
      </svg>
    );
  }
  if (label === "Trastero") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8h16v12H4z" />
        <path d="M4 12h16M12 12v8" />
        <path d="M8 8V6h8v2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20V11l4-3V6h3v2.2L20 14v6" />
      <path d="M10 20v-4h4v4" />
    </svg>
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
