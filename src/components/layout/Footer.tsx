import Link from "next/link";
import { legalEntity, nav, offices } from "@/content/brand";
import { cities } from "@/content/cities";
import { PendingText } from "@/components/ui/PendingText";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-serif text-3xl">Blue Norte</p>
          <p className="mt-3 text-sm text-sand">
            Promotora de vivienda de obra nueva en Málaga, Santander y Madrid.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-stone uppercase">Menú</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-stone uppercase">Ciudades</p>
          <ul className="mt-4 space-y-2">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/ubicacion/${city.slug}`} className="text-sm hover:underline">
                  Obra nueva en {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-stone uppercase">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            {offices.map((office) => (
              <li key={office.slug}>
                <p className="font-medium">{office.city}</p>
                <p>
                  <PendingText text={office.phone} />
                </p>
              </li>
            ))}
            <li>
              <PendingText text={legalEntity.email} />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-sand md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Blue Norte Promociones</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-4">
            <Link href="/aviso-legal" className="hover:underline">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:underline">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:underline">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
