import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-navy pt-32 pb-24 text-ivory">
      <Container>
        <p className="text-xs tracking-[0.2em] text-sand uppercase">Error 404</p>
        <h1 className="mt-4 max-w-xl text-5xl md:text-7xl">Esta página no está en el plano.</h1>
        <p className="mt-5 max-w-lg text-ivory/85">
          Puede que el enlace haya cambiado. Vuelve al inicio o mira las promociones de obra nueva.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center bg-ivory px-5 text-sm text-navy">
            Ir al inicio
          </Link>
          <Link href="/proyectos" className="inline-flex min-h-12 items-center border border-ivory px-5 text-sm">
            Ver proyectos
          </Link>
        </div>
      </Container>
    </section>
  );
}
