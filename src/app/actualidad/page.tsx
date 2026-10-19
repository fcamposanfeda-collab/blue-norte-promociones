import { PageHero } from "@/components/layout/PageHero";
import { NewsBrowser } from "@/components/news/NewsBrowser";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Actualidad y consejos de compra | Blue Norte",
  description:
    "Artículos sobre obra nueva, calificación energética y compra sobre plano. Guías de Blue Norte Promociones.",
  path: "/actualidad",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualidad"
        title="Ideas para comprar con calma"
        lead="Tres guías para empezar: por qué obra nueva, qué dice la letra energética y cómo se compra sobre plano."
        image="/images/blog/obra-nueva.jpg"
        imageAlt="Vivienda contemporánea de obra nueva al anochecer, con el interior iluminado y jardín."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Actualidad" },
        ]}
      />
      <section className="py-14">
        <Container>
          <NewsBrowser />
        </Container>
      </section>
    </>
  );
}
