import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getEmailProvider } from "@/lib/email";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "No hemos podido leer el formulario." } }, { status: 400 });
  }

  if (
    typeof body === "object" &&
    body !== null &&
    "company_website" in body &&
    typeof body.company_website === "string" &&
    body.company_website.trim()
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? "pendiente@example.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "web@example.com";
  const providerName = process.env.EMAIL_PROVIDER ?? "console";

  if (providerName === "resend" && (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL)) {
    return NextResponse.json(
      { ok: false, errors: { form: "El envío de correo todavía no está configurado." } },
      { status: 503 },
    );
  }

  const subject = `Solicitud de información${data.promotion ? ` — ${data.promotion}` : ""}`;
  const text = [
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.phone}`,
    `Promoción: ${data.promotion || "Sin promoción concreta"}`,
    "",
    data.message,
  ].join("\n");

  try {
    await getEmailProvider().send({
      to,
      from,
      replyTo: data.email,
      subject,
      text,
      html: `<p>${escapeHtml(text).replaceAll("\n", "<br/>")}</p>`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, errors: { form: "No hemos podido enviar el formulario." } },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
