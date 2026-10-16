import { LegalArticle } from "@/components/legal/LegalArticle";
import { legalEntity } from "@/content/brand";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Política de privacidad | Blue Norte",
  description:
    "Cómo Blue Norte trata los datos del formulario de contacto, durante cuánto tiempo y cómo ejercer tus derechos.",
  path: "/politica-de-privacidad",
});

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Política de privacidad"
      lead="Explicamos qué datos pedimos, para qué y cómo puedes pedir acceso, rectificación o supresión."
      crumbs={[
        { name: "Inicio", href: "/" },
        { name: "Política de privacidad" },
      ]}
      sections={[
        {
          heading: "Responsable",
          paragraphs: [
            `Responsable: ${legalEntity.name.replace(/\.$/, "")}.`,
            `Contacto de privacidad: ${legalEntity.privacyEmail}.`,
            `Domicilio: ${legalEntity.address}.`,
          ],
        },
        {
          heading: "Qué datos recogemos",
          paragraphs: [
            "En el formulario: nombre, email, teléfono, mensaje, promoción de interés si la indicas y la prueba de que aceptaste esta política. No pedimos datos especialmente protegidos.",
            "El campo oculto anti-spam no debe rellenarse. Si llega con contenido, descartamos el envío.",
          ],
        },
        {
          heading: "Finalidad y legitimación",
          paragraphs: [
            "Usamos los datos para responder a tu solicitud de información o de visita. La base es el consentimiento que marcas en el formulario y, en su caso, la aplicación de medidas precontractuales que tú pides.",
            "No cedemos los datos para publicidad de terceros ni tomamos decisiones automatizadas.",
          ],
        },
        {
          heading: "Conservación",
          paragraphs: [
            "Conservamos la consulta el tiempo necesario para atenderla y, después, durante los plazos de prescripción de posibles responsabilidades. Si no llega a haber relación comercial, el criterio será el mínimo imprescindible.",
          ],
        },
        {
          heading: "Destinatarios",
          paragraphs: [
            "El correo se envía a través del proveedor configurado en el servidor (por ejemplo, un servicio de email transaccional). Ese proveedor actúa como encargado del tratamiento cuando hay contrato al efecto.",
            "Si más adelante una visita exige compartir datos con la gestoría o la entidad financiera, te lo diremos en ese momento.",
          ],
        },
        {
          heading: "Derechos",
          paragraphs: [
            `Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${legalEntity.privacyEmail}. También puedes retirar el consentimiento sin que eso afecte a la licitud del tratamiento previo.`,
            "Si consideras que no hemos atendido tu derecho, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
          ],
        },
      ]}
    />
  );
}
