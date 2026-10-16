import { PageHero } from "@/components/layout/PageHero";
import { PendingText } from "@/components/ui/PendingText";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/types/content";

export function LegalArticle({
  title,
  lead,
  crumbs,
  sections,
}: {
  title: string;
  lead: string;
  crumbs: Crumb[];
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead={lead}
        image="/images/legal-hero.jpg"
        imageAlt="Fachada de piedra de un edificio institucional. Imagen de ambiente, no corresponde a una sede concreta."
        overlayClassName="bg-gradient-to-t from-navy via-navy/55 to-navy/10"
        crumbs={crumbs}
      />
      <article className="py-14">
        <Container className="max-w-3xl">
          {sections.map((section) => (
            <section key={section.heading} className="mt-8">
              <h2 className="text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-muted">
                  <PendingText text={paragraph} />
                </p>
              ))}
            </section>
          ))}
        </Container>
      </article>
    </>
  );
}
