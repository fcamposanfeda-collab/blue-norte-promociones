import { PageHero } from "@/components/layout/PageHero";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Promociones de vivienda nueva | Blue Norte",
  description:
    "Listado de promociones de obra nueva en Málaga, Santander, Madrid y Ciudad Real. Filtra por ciudad y dormitorios.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Promociones de vivienda nueva"
        image="/images/proyectos-hero.jpg"
        imageAlt="Render de referencia de un edificio de viviendas de obra nueva."
        imageClassName="object-[center_45%]"
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Proyectos" },
        ]}
      />
      <section className="py-12">
        <Container>
          <ProjectBrowser />
        </Container>
      </section>
    </>
  );
}
