"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const raised = /^\/proyectos\/[^/]+$/.test(pathname);
  const href = number ? `https://wa.me/${number}` : "/contacto";
  const label = number
    ? "Escribir por WhatsApp"
    : "WhatsApp pendiente de configurar. Ir al formulario de contacto";

  return (
    <Link
      href={href}
      aria-label={label}
      className={`fixed right-4 z-30 inline-flex min-h-12 items-center bg-[#1f6b45] px-4 text-sm font-medium text-white shadow-lg ${
        raised ? "bottom-28" : "bottom-5"
      }`}
      {...(number ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      WhatsApp
    </Link>
  );
}
