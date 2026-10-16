import { LegalArticle } from "@/components/legal/LegalArticle";
import { legalEntity } from "@/content/brand";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Aviso legal | Blue Norte",
  description:
    "Datos identificativos, condiciones de uso y propiedad intelectual del sitio de Blue Norte Promociones.",
  path: "/aviso-legal",
});

export default function LegalNoticePage() {
  return (
    <LegalArticle
      title="Aviso legal"
      lead="Información exigida por la Ley de servicios de la sociedad de la información sobre el titular de esta web."
      crumbs={[
        { name: "Inicio", href: "/" },
        { name: "Aviso legal" },
      ]}
      sections={[
        {
          heading: "Titular",
          paragraphs: [
            `Denominación: ${legalEntity.name.replace(/\.$/, "")}.`,
            `CIF: ${legalEntity.cif}.`,
            `Domicilio: ${legalEntity.address}.`,
            `Inscripción: ${legalEntity.registry}.`,
            `Contacto: ${legalEntity.email}. Teléfono: ${legalEntity.phone}.`,
          ],
        },
        {
          heading: "Objeto",
          paragraphs: [
            "Este sitio presenta a Blue Norte Promociones y sus promociones de vivienda de obra nueva. La información comercial —precios, superficies, planos e imágenes— es orientativa hasta que se incorpore a un contrato.",
          ],
        },
        {
          heading: "Condiciones de uso",
          paragraphs: [
            "Quien navega se compromete a usar los contenidos de forma lícita y a no intentar acceder a áreas restringidas ni alterar el funcionamiento del sitio.",
            "Blue Norte puede actualizar textos y fichas sin aviso previo cuando cambie un dato real de una promoción.",
          ],
        },
        {
          heading: "Propiedad intelectual",
          paragraphs: [
            "Los textos, la marca verbal Blue Norte y la estructura de esta web pertenecen a su titular o se usan con autorización. No está permitida su reproducción con fines comerciales sin consentimiento escrito.",
          ],
        },
        {
          heading: "Responsabilidad",
          paragraphs: [
            "Procuramos que la información esté actualizada. Un error tipográfico no constituye una oferta contractual. Los enlaces externos, si los hubiera, llevan a sitios de terceros sobre los que no tenemos control.",
          ],
        },
      ]}
    />
  );
}
