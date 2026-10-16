import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { RichParagraph } from "@/components/content/RichText";
import { Container } from "@/components/ui/Container";
import { ImageCredit } from "@/components/ui/ImageCredit";
import { cities, getCity } from "@/content/cities";
import { breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { filterProjects } from "@/lib/projects";
import { buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((city) => ({ ciudad: city.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ciudad: string }> }) {
  const { ciudad } = await params;
  const city = getCity(ciudad);
  if (!city) return {};
  return buildMetadata({
    title: city.seoTitle,
    description: city.seoDescription,
    path: `/ubicacion/${city.slug}`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ ciudad: string }> }) {
  const { ciudad } = await params;
  const city = getCity(ciudad);
  if (!city) notFound();
  const related = filterProjects({ ciudad: city.slug });
  const others = cities.filter((item) => item.slug !== city.slug);
  const crumbs = [
    { name: "Inicio", href: "/" },
    { name: "Ubicación", href: "/ubicacion" },
    { name: city.name },
  ];

  return (
    <>
      <JsonLd data={graphSchema([breadcrumbSchema(crumbs), faqSchema(city.faq)])} />
      <PageHero
        eyebrow={city.region}
        title={city.h1}
        lead={city.lead}
        image={city.photoPending ? undefined : city.image}
        imageAlt={city.imageAlt}
        imageClassName={city.slug === "ciudad-real" ? "object-[58%_42%]" : undefined}
        crumbs={crumbs}
      />
      <article className="py-16">
        <Container className="max-w-3xl">
          {city.imageCredit ? (
            <ImageCredit credit={city.imageCredit} className="text-xs leading-relaxed text-muted" />
          ) : null}
          {city.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-10">
              {section.level === "h3" ? (
                <h3 className="text-3xl">{section.heading}</h3>
              ) : (
                <h2 className="text-4xl">{section.heading}</h2>
              )}
              {section.paragraphs.map((paragraph) => (
                <RichParagraph key={paragraph} text={paragraph} className="mt-4 text-muted" />
              ))}
            </section>
          ))}
        </Container>
      </article>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-4xl">
            {`Promociones en ${city.name}`}
          </h2>
          {related.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-4 max-w-3xl text-muted">
              Todavía no hay una promoción publicada en {city.name}.
            </p>
          )}
          <h2 className="mt-14 text-3xl">Otras ciudades</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/ubicacion/${item.slug}`} className="underline">
                  {item.h1}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-4xl">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4">
            {city.faq.map((item) => (
              <details key={item.question} className="border border-line bg-white p-4">
                <summary className="cursor-pointer font-medium">{item.question}</summary>
                <p className="mt-3 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
