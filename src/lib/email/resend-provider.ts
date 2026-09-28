import type { EmailPayload, EmailProvider } from "@/lib/email/types";

export class ResendEmailProvider implements EmailProvider {
  readonly name = "resend";

  async send(payload: EmailPayload) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Falta RESEND_API_KEY.");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: payload.from,
        to: [payload.to],
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
        reply_to: payload.replyTo,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend respondió ${response.status}.`);
    }
  }
}
