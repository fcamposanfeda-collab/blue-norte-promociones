import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cities } from "@/content/cities";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Ubicaciones de obra nueva | Blue Norte",
  description:
    "Blue Norte promociona vivienda nueva en Málaga, Santander y Madrid. Entra en cada ciudad y mira qué buscamos allí.",
  path: "/ubicacion",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ubicación"
        title="Dónde vamos a construir"
        lead="Tres ciudades y ningún discurso repetido. Cada una pide una casa distinta, y la página de cada ciudad lo cuenta con su propio texto."
        image="/images/cities/madrid.webp"
        imageAlt="Ilustración de reserva para la página de ubicaciones de Blue Norte."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Ubicación" },
        ]}
      />
      <section className="py-16">
        <Container className="grid gap-8">
          {cities.map((city) => (
            <article key={city.slug} className="grid items-center gap-6 border border-line bg-white md:grid-cols-2">
              <MediaFrame src={city.image} alt={city.imageAlt} className="aspect-[16/10] md:aspect-auto md:h-full" sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="p-6 md:p-10">
                <p className="text-xs tracking-[0.18em] text-accent-ink uppercase">{city.region}</p>
                <h2 className="mt-2 text-4xl">{city.h1}</h2>
                <p className="mt-4 text-muted">{city.lead}</p>
                <Link href={`/ubicacion/${city.slug}`} className="mt-6 inline-flex min-h-11 items-center text-sm underline">
                  Ver {city.name}
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
