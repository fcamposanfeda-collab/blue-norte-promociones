import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getPostCategories, paginatePosts } from "@/lib/posts";
import { firstParam, buildMetadata } from "@/lib/site";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filtered = Boolean(firstParam(params.categoria) || firstParam(params.pagina));
  return buildMetadata({
    title: "Actualidad y consejos de compra | Blue Norte",
    description:
      "Artículos sobre obra nueva, calificación energética y compra sobre plano. Guías de Blue Norte Promociones.",
    path: "/actualidad",
    index: !filtered,
  });
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const category = firstParam(params.categoria);
  const page = Number(firstParam(params.pagina) ?? "1");
  const result = paginatePosts(category, Number.isFinite(page) ? page : 1);
  const categories = getPostCategories();

  return (
    <>
      <PageHero
        eyebrow="Actualidad"
        title="Ideas para comprar con calma"
        lead="Tres guías para empezar: por qué obra nueva, qué dice la letra energética y cómo se compra sobre plano."
        image="/images/blog/obra-nueva.webp"
        imageAlt="Ilustración de reserva de la sección de actualidad."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Actualidad" },
        ]}
      />
      <section className="py-14">
        <Container>
          <div className="flex flex-wrap gap-3">
            <Link href="/actualidad" className="min-h-11 border border-line px-4 py-2 text-sm" aria-current={!category ? "page" : undefined}>
              Todas
            </Link>
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/actualidad?categoria=${item.slug}`}
                className="min-h-11 border border-line px-4 py-2 text-sm"
                aria-current={category === item.slug ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            {result.total} {result.total === 1 ? "artículo" : "artículos"}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {result.posts.map((post) => (
              <article key={post.slug} className="border border-line bg-white">
                <Link href={`/actualidad/${post.slug}`}>
                  <MediaFrame src={post.image} alt={post.imageAlt} sizes="(min-width: 768px) 30vw, 100vw" />
                </Link>
                <div className="p-5">
                  <p className="text-xs tracking-[0.16em] text-accent-ink uppercase">{post.category}</p>
                  <h2 className="mt-2 text-3xl">
                    <Link href={`/actualidad/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          {result.totalPages > 1 ? (
            <nav className="mt-10 flex gap-3" aria-label="Paginación">
              {Array.from({ length: result.totalPages }, (_, index) => {
                const number = index + 1;
                const query = new URLSearchParams();
                if (category) query.set("categoria", category);
                if (number > 1) query.set("pagina", String(number));
                const href = query.size ? `/actualidad?${query}` : "/actualidad";
                return (
                  <Link key={number} href={href} aria-current={number === result.currentPage ? "page" : undefined} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line">
                    {number}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </Container>
      </section>
    </>
  );
}
