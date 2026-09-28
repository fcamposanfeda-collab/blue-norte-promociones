import type { EmailPayload, EmailProvider } from "@/lib/email/types";

export class ConsoleEmailProvider implements EmailProvider {
  readonly name = "console";

  async send(payload: EmailPayload) {
    console.info("[email:console]", {
      to: payload.to,
      from: payload.from,
      replyTo: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
    });
  }
}
