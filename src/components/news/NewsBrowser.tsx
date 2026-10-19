"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getPostCategories, paginatePosts } from "@/lib/posts";

function useLocationSearch() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const read = () => setSearch(window.location.search);
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  return search;
}

export function NewsBrowser() {
  const params = new URLSearchParams(useLocationSearch());
  const category = params.get("categoria") ?? undefined;
  const page = Number(params.get("pagina") ?? "1");
  const result = paginatePosts(category, Number.isFinite(page) ? page : 1);
  const categories = getPostCategories();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Link href="/actualidad/" className="min-h-11 border border-line px-4 py-2 text-sm" aria-current={!category ? "page" : undefined}>
          Todas
        </Link>
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/actualidad/?categoria=${item.slug}`}
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
            const href = query.size ? `/actualidad/?${query}` : "/actualidad/";
            return (
              <Link key={number} href={href} aria-current={number === result.currentPage ? "page" : undefined} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line">
                {number}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
