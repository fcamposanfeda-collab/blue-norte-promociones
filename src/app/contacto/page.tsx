import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { PendingText } from "@/components/ui/PendingText";
import { Container } from "@/components/ui/Container";
import { offices } from "@/content/brand";
import { getAllProjects } from "@/lib/projects";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solicita información | Blue Norte",
  description:
    "Pide información o una visita sobre obra nueva en Málaga, Santander y Madrid. Oficinas pendientes de publicar.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Solicita información"
        lead="Cuéntanos la ciudad, los dormitorios y si buscas vivienda para vivir o para invertir."
        image="/images/contacto.webp"
        imageAlt="Ilustración de reserva de la página de contacto."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Contacto" },
        ]}
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            {offices.map((office) => (
              <article key={office.slug} className="border border-line bg-white p-5">
                <h2 className="text-3xl">{office.city}</h2>
                <p className="mt-3 text-sm">
                  <PendingText text={office.address} />
                </p>
                <p className="text-sm">
                  <PendingText text={office.phone} />
                </p>
                <p className="text-sm">
                  <PendingText text={office.email} />
                </p>
                <p className="text-sm">
                  <PendingText text={office.hours} />
                </p>
              </article>
            ))}
          </div>
          <ContactForm projects={getAllProjects()} />
        </Container>
      </section>
    </>
  );
}
