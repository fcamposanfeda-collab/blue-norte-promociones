import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(80, "El nombre es demasiado largo."),
  email: z.string().trim().email("Introduce un email válido.").max(120, "El email es demasiado largo."),
  phone: z
    .string()
    .trim()
    .min(9, "Introduce un teléfono de contacto.")
    .max(20, "El teléfono es demasiado largo.")
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede incluir números y símbolos habituales."),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más, al menos una frase.")
    .max(2000, "El mensaje es demasiado largo."),
  promotion: z.string().trim().max(140).optional(),
  consent: z.literal("yes", "Es necesario aceptar la política de privacidad."),
  company_website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
