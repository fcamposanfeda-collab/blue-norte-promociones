import Link from "next/link";

export function StickyCta({ name }: { name: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="font-serif text-2xl">{name}</p>
        <div className="flex gap-3">
          <Link href="#solicitud" className="inline-flex min-h-11 items-center bg-ivory px-4 text-sm text-navy">
            Solicitar información
          </Link>
          <Link href="/contacto" className="inline-flex min-h-11 items-center border border-ivory px-4 text-sm">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
