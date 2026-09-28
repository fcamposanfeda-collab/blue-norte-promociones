import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Política de cookies | Blue Norte",
  description:
    "Cookies técnicas y analítica opcional de esta web. GA4 solo se carga después de que aceptes.",
  path: "/politica-de-cookies",
});

export default function CookiesPage() {
  return (
    <>
      <LegalArticle
        title="Política de cookies"
        lead="Usamos una cookie técnica de preferencias y, solo si aceptas, la medición de Google Analytics 4."
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Política de cookies" },
        ]}
        sections={[
          {
            heading: "Qué es una cookie",
            paragraphs: [
              "Una cookie es un pequeño archivo que el sitio guarda en tu navegador. También usamos el almacenamiento local para recordar si aceptaste o rechazaste la analítica.",
            ],
          },
          {
            heading: "Cookies técnicas",
            paragraphs: [
              "La preferencia de consentimiento se guarda en localStorage con la clave bn-consent. Es necesaria para no volver a preguntarte en cada página y para no activar analítica si rechazaste. No requiere consentimiento según la guía de la AEPD, porque no mide audiencias.",
            ],
          },
          {
            heading: "Cookies de analítica",
            paragraphs: [
              "Si pulsas Aceptar, cargamos Google Analytics 4 con el identificador configurado en el servidor. Esas cookies miden visitas de forma agregada. Si pulsas Rechazar, el script no se inserta.",
              "Puedes cambiar de opinión cuando quieras con el botón de esta página. También puedes borrar el almacenamiento del navegador.",
            ],
          },
          {
            heading: "Cómo gestionarlas",
            paragraphs: [
              "Además del botón, tu navegador permite bloquear o borrar cookies. Si bloqueas las técnicas de consentimiento, el aviso puede volver a mostrarse.",
            ],
          },
        ]}
      />
      <Container className="pb-16">
        <CookieSettingsButton />
      </Container>
    </>
  );
}
