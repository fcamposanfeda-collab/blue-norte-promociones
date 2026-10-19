import Link from "next/link";
import { notFound } from "next/navigation";
import { RichParagraph } from "@/components/content/RichText";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/posts";
import { blogPostingSchema, breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/actualidad/${post.slug}`,
    type: "article",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug);
  const crumbs = [
    { name: "Inicio", href: "/" },
    { name: "Actualidad", href: "/actualidad" },
    { name: post.title },
  ];
  const date = new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(new Date(post.date));

  return (
    <article>
      <JsonLd data={graphSchema([breadcrumbSchema(crumbs), blogPostingSchema(post), faqSchema(post.faq)])} />
      <header className="bg-navy pt-28 text-ivory">
        <Container className="pb-10">
          <Breadcrumbs items={crumbs} />
          <p className="mt-6 text-xs tracking-[0.18em] text-sand uppercase">{post.category}</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">{post.h1}</h1>
          <p className="mt-4 text-sm text-sand">
            <time dateTime={post.date}>{date}</time> · {post.readingMinutes} min de lectura
          </p>
        </Container>
        <Container className="pb-12">
          <MediaFrame src={post.image} alt={post.imageAlt} priority sizes="(min-width: 1024px) 70vw, 100vw" className="aspect-[16/8]" />
        </Container>
      </header>
      <div className="py-12">
        <Container className="max-w-3xl">
          {post.blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={block.id} id={block.id} className="mt-10 text-4xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={block.id} id={block.id} className="mt-8 text-3xl">
                  {block.text}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={`ul-${index}`} className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <RichParagraph key={`p-${index}`} text={block.text} className="mt-4 text-muted" />;
          })}
          <h2 className="mt-12 text-4xl">Preguntas frecuentes</h2>
          <div className="mt-4 grid gap-4">
            {post.faq.map((item) => (
              <details key={item.question} className="border border-line p-4">
                <summary className="cursor-pointer font-medium">{item.question}</summary>
                <p className="mt-3 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <h2 className="mt-12 text-3xl">Sigue leyendo</h2>
          <ul className="mt-4 space-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/actualidad/${item.slug}`} className="underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </article>
  );
}
