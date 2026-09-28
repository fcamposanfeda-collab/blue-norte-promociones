import Link from "next/link";
import type { Crumb } from "@/types/content";

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-ivory/80" : "text-muted";
  return (
    <nav aria-label="Migas de pan" className={`text-sm ${color}`}>
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.name}</span>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
