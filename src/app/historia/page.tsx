import { PageHero } from "@/components/layout/PageHero";
import { PendingText } from "@/components/ui/PendingText";
import { Container } from "@/components/ui/Container";
import { processSteps, team } from "@/content/brand";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Nuestra historia | Blue Norte",
  description:
    "Blue Norte es una promotora nueva. Contamos la visión, los valores y la forma de trabajar, sin inventar una trayectoria.",
  path: "/historia",
});

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Historia"
        title="Una promotora que empieza"
        lead="No venimos a recitar décadas que no hemos vivido. Blue Norte nace para hacer vivienda nueva en Málaga, Santander y Madrid, y para explicarla con la misma claridad con la que se construye."
        image="/images/historia.webp"
        imageAlt="Ilustración de reserva para la página de historia de Blue Norte."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Historia" },
        ]}
      />
      <article className="py-16">
        <Container className="grid gap-12">
          <section className="max-w-3xl">
            <h2 className="text-4xl">La visión</h2>
            <p className="mt-4 text-muted">
              Hay compradores cansados de folletos que prometen y fichas que no dicen nada. La
              visión de Blue Norte es sencilla: promociones de obra nueva, pocas ciudades, y una
              página por proyecto donde quepan la memoria, el plano, el estado de la obra y una
              persona al otro lado del formulario.
            </p>
            <p className="mt-4 text-muted">
              Trabajamos para quien compra su primera casa, para quien busca segunda residencia y
              para quien invierte. A los tres les debemos lo mismo: datos ciertos y un proceso que
              se pueda seguir.
            </p>
          </section>
          <section>
            <h2 className="text-4xl">Valores</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ["Claridad", "Si un dato no está cerrado, se marca como pendiente. No se rellena con una cifra amable."],
                ["Lugar", "Málaga, Santander y Madrid no comparten el mismo clima ni el mismo comprador. El proyecto tiene que notarlo."],
                ["Acompañamiento", "De la primera pregunta a la entrega, el comprador sabe a quién escribir y en qué fase está la casa."],
              ].map(([title, text]) => (
                <div key={title} className="border border-line bg-white p-6">
                  <h3 className="text-3xl">{title}</h3>
                  <p className="mt-3 text-sm text-muted">{text}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl">La forma de trabajar</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-serif text-3xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="text-4xl">Equipo</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Los nombres se publicarán cuando las personas que representan a la marca den su
              conformidad. Hasta entonces, estos son los cometidos.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {team.map((person) => (
                <li key={person.role} className="border border-line p-5">
                  <p className="text-xs tracking-[0.16em] text-accent-ink uppercase">{person.role}</p>
                  <p className="mt-2 font-serif text-3xl">
                    <PendingText text={person.name} />
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    <PendingText text={person.bio} />
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </article>
    </>
  );
}
