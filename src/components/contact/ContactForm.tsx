"use client";

import Link from "next/link";
import { useState } from "react";
import { dictionary } from "@/i18n/get-dictionary";
import type { Project } from "@/types/content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({
  projects,
  promotion,
  compact = false,
}: {
  projects?: Project[];
  promotion?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const copy = dictionary.form;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { ok?: boolean; errors?: Record<string, string> };
      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company_website">Empresa</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label={copy.name} name="name" error={errors.name} autoComplete="name" />
      <Field label={copy.email} name="email" type="email" error={errors.email} autoComplete="email" />
      <Field label={copy.phone} name="phone" type="tel" error={errors.phone} autoComplete="tel" />
      {projects ? (
        <label className="grid gap-2 text-sm">
          {copy.promotion}
          <select name="promotion" defaultValue={promotion ?? ""} className="min-h-12 border border-line bg-white px-3">
            <option value="">Sin promoción concreta</option>
            {projects.map((project) => (
              <option key={project.slug} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <input type="hidden" name="promotion" value={promotion ?? ""} />
      )}
      <label className="grid gap-2 text-sm">
        {copy.message}
        <textarea
          name="message"
          required
          rows={compact ? 4 : 6}
          className="border border-line bg-white px-3 py-3"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="text-sm text-[#8a2e2e]">
            {errors.message}
          </span>
        ) : null}
      </label>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" value="yes" className="mt-1" required />
        <span>
          He leído la{" "}
          <Link href="/politica-de-privacidad" className="underline">
            política de privacidad
          </Link>{" "}
          y consiento el tratamiento de mis datos para atender esta solicitud.
        </span>
      </label>
      {errors.consent ? <p className="text-sm text-[#8a2e2e]">{errors.consent}</p> : null}
      <button
        type="submit"
        className="min-h-12 bg-navy px-5 text-sm font-medium text-ivory disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? copy.sending : copy.submit}
      </button>
      <p role="status" className="min-h-6 text-sm" aria-live="polite">
        {status === "success" ? copy.success : null}
        {status === "error" && Object.keys(errors).length === 0 ? copy.error : null}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="grid gap-2 text-sm">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 border border-line bg-white px-3"
      />
      {error ? (
        <span id={errorId} className="text-sm text-[#8a2e2e]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
