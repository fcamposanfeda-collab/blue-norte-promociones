import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { madridOffice } from "@/content/brand";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solicita información | Blue Norte",
  description:
    "Pide información o una visita sobre obra nueva en Málaga, Santander, Madrid y Ciudad Real.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Solicita información"
        lead="Cuéntanos la ciudad, los dormitorios y si buscas vivienda para vivir o para invertir."
        image="/images/contacto.jpg"
        imageAlt="Entrada de una vivienda de obra nueva, con la puerta abierta y la luz del interior."
        imageClassName="object-[center_78%]"
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Contacto" },
        ]}
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="h-fit border border-line bg-white p-5">
            <h2 className="text-3xl">{madridOffice.city}</h2>
            <p className="mt-3 text-sm">{madridOffice.address}</p>
            <p className="text-sm">
              <a href={`tel:${madridOffice.phone.replaceAll(" ", "")}`} className="underline">
                {madridOffice.phone}
              </a>
            </p>
            <p className="text-sm">
              <a href={`mailto:${madridOffice.email}`} className="underline">
                {madridOffice.email}
              </a>
            </p>
          </article>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
