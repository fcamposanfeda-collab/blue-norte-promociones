import { ConsoleEmailProvider } from "@/lib/email/console-provider";
import { ResendEmailProvider } from "@/lib/email/resend-provider";
import type { EmailProvider } from "@/lib/email/types";

export function getEmailProvider(): EmailProvider {
  const name = process.env.EMAIL_PROVIDER ?? "console";
  if (name === "resend") return new ResendEmailProvider();
  if (name === "console") return new ConsoleEmailProvider();
  throw new Error(`Proveedor de email no soportado: ${name}. Usa console o resend.`);
}
