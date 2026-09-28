import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps, valuePoints } from "@/content/brand";
import { cities } from "@/content/cities";
import { dictionary } from "@/i18n/get-dictionary";
import { typologyLabel } from "@/lib/labels";
import { getAllPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Obra nueva en Málaga, Santander y Madrid",
  description:
    "Promotora de obra nueva en Málaga, Santander y Madrid. Consulta promociones y solicita información o una visita.",
  path: "/",
});

export default function HomePage() {
  const featured = getFeaturedProjects();
  const posts = getAllPosts().slice(0, 3);
  const copy = dictionary.search;

  return (
    <>
      <section className="relative flex min-h-svh items-end bg-navy text-ivory">
        <div className="absolute inset-0">
          <MediaFrame
            src="/images/hero.webp"
            alt="Ilustración de reserva de una fachada residencial al amanecer. La fotografía real del proyecto está pendiente."
            priority
            sizes="100vw"
            className="h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/25" />
        <Container className="relative z-10 pt-32 pb-28">
          <p className="text-xs tracking-[0.22em] text-sand uppercase">Blue Norte Promociones</p>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl">Vivienda nueva, con calma y con criterio.</h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/90">
            Promociones de obra nueva en Málaga, Santander y Madrid. Para quien busca casa y para
            quien mira una inversión, con la información por delante del folleto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/proyectos" className="inline-flex min-h-12 items-center bg-ivory px-5 text-sm font-medium text-navy">
              Ver proyectos
            </Link>
            <Link href="/contacto" className="inline-flex min-h-12 items-center border border-ivory px-5 text-sm">
              Solicitar información
            </Link>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12 pb-8" aria-label="Buscador de promociones">
        <Container>
          <form action="/proyectos" method="get" className="grid gap-4 border border-line bg-ivory p-5 shadow-lg md:grid-cols-4">
            <label className="grid gap-2 text-sm">
              {copy.city}
              <select name="ciudad" className="min-h-12 border border-line bg-white px-3" defaultValue="">
                <option value="">{copy.all}</option>
                <option value="malaga">Málaga</option>
                <option value="santander">Santander</option>
                <option value="madrid">Madrid</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              {copy.typology}
              <select name="tipologia" className="min-h-12 border border-line bg-white px-3" defaultValue="">
                <option value="">{copy.all}</option>
                {Object.entries(typologyLabel).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              {copy.bedrooms}
              <select name="dormitorios" className="min-h-12 border border-line bg-white px-3" defaultValue="">
                <option value="">{copy.any}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4 o más</option>
              </select>
            </label>
            <div className="flex items-end">
              <button type="submit" className="min-h-12 w-full bg-navy px-4 text-sm font-medium text-ivory">
                {copy.submit}
              </button>
            </div>
          </form>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-accent-ink uppercase">Promociones</p>
            <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Una selección para empezar a mirar</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Las fichas de abajo son ejemplos editoriales. El precio, la superficie y la fecha de
              entrega se publicarán cuando sean reales.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="max-w-xl text-4xl md:text-5xl">Lo que cuidamos en cada casa</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {valuePoints.map((point) => (
              <Reveal key={point.title}>
                <h3 className="text-3xl">{point.title}</h3>
                <p className="mt-3 text-muted">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-4xl md:text-5xl">Cómo trabajamos</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <p className="font-serif text-4xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-navy py-20 text-ivory">
        <Container>
          <h2 className="text-4xl md:text-5xl">Tres ciudades, un mismo oficio</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cities.map((city) => (
              <Link key={city.slug} href={`/ubicacion/${city.slug}`} className="group block">
                <MediaFrame
                  src={city.image}
                  alt={city.imageAlt}
                  className="aspect-[4/5]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <h3 className="mt-4 text-4xl group-hover:underline">{city.name}</h3>
                <p className="text-sm text-sand">{city.provinceName}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl">Actualidad</h2>
            <Link href="/actualidad" className="text-sm underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="border border-line bg-white">
                <Link href={`/actualidad/${post.slug}`}>
                  <MediaFrame src={post.image} alt={post.imageAlt} sizes="(min-width: 768px) 30vw, 100vw" />
                </Link>
                <div className="p-5">
                  <p className="text-xs tracking-[0.16em] text-accent-ink uppercase">{post.category}</p>
                  <h3 className="mt-2 text-3xl">
                    <Link href={`/actualidad/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-deep py-20" id="solicitud">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl">Cuéntanos qué casa buscas</h2>
            <p className="mt-4 max-w-md text-muted">
              Ciudad, dormitorios y si es para vivir o para invertir. Te respondemos con lo que
              haya encaje, sin listas genéricas.
            </p>
          </div>
          <ContactForm compact />
        </Container>
      </section>
    </>
  );
}
