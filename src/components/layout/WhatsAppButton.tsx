"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalEntity } from "@/content/brand";

export function WhatsAppButton() {
  const pathname = usePathname();
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || legalEntity.phone;
  const number = raw.replace(/\D/g, "");
  const raised = /^\/proyectos\/[^/]+$/.test(pathname);
  const href = number ? `https://wa.me/${number}` : "/contacto";
  const label = number
    ? "Escribir por WhatsApp"
    : "WhatsApp pendiente de configurar. Ir al formulario de contacto";

  return (
    <Link
      href={href}
      aria-label={label}
      className={`fixed right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ${
        raised ? "bottom-28" : "bottom-5"
      }`}
      {...(number ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
        <path
          fill="#fff"
          d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16.01 3.2C9.4 3.2 4.04 8.56 4.04 15.17c0 2.11.55 4.17 1.6 5.99L4 28l6.99-1.83a11.9 11.9 0 0 0 5.02 1.14h.01c6.61 0 11.97-5.36 11.97-11.97C27.99 8.56 22.62 3.2 16.01 3.2zm0 21.85h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-4.15 1.09 1.11-4.04-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.91 9.91z"
        />
      </svg>
    </Link>
  );
}
