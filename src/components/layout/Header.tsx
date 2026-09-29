"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { nav } from "@/content/brand";
import { dictionary } from "@/i18n/get-dictionary";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 12, () => false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const solid = scrolled || open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-navy text-ivory" : "bg-transparent text-ivory"
      }`}
    >
      <div className="mx-auto flex h-[var(--header)] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="leading-none" aria-label="Blue Norte Promociones, inicio">
          <span className="block font-serif text-2xl tracking-tight">Blue Norte</span>
          <span className="block text-[0.68rem] tracking-[0.22em] uppercase">Promociones</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide ${active ? "underline decoration-accent underline-offset-8" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="inline-flex min-h-11 items-center bg-ivory px-4 text-sm font-medium text-navy"
          >
            {dictionary.nav.request}
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-12 origin-center items-center border border-ivory px-5 text-sm transition duration-300 ease-out motion-safe:hover:scale-105 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? dictionary.nav.close : dictionary.nav.menu}
        </button>
      </div>
      {open ? (
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 top-[var(--header)] z-40 flex flex-col bg-navy px-8 py-10 text-ivory lg:hidden"
        >
          <nav className="flex flex-col gap-6" aria-label="Móvil">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-serif text-5xl">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contacto"
            className="mt-10 inline-flex min-h-12 items-center justify-center bg-ivory text-navy"
          >
            {dictionary.nav.request}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
