"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

const storageKey = "bn-consent";

type Consent = {
  necessary: true;
  analytics: boolean;
};

let preferencesOpen = false;

function readConsent(): Consent | null {
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Consent;
    if (typeof parsed.analytics !== "boolean") return null;
    return { necessary: true, analytics: parsed.analytics };
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("bn-consent-store", onChange);
  const timer = window.setTimeout(onChange, 0);
  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("bn-consent-store", onChange);
  };
}

function bannerSnapshot() {
  if (preferencesOpen || readConsent() === null) return "open";
  return "closed";
}

export function openCookieSettings() {
  preferencesOpen = true;
  window.dispatchEvent(new Event("bn-consent-store"));
}

function saveConsent(consent: Consent) {
  window.localStorage.setItem(storageKey, JSON.stringify(consent));
  preferencesOpen = false;
  window.dispatchEvent(new Event("bn-consent-store"));
  window.dispatchEvent(new Event("bn-consent-change"));
}

export function CookieBanner() {
  const pathname = usePathname();
  const visible = useSyncExternalStore(subscribe, bannerSnapshot, () => "closed") === "open";
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const raised = /^\/proyectos\/[^/]+$/.test(pathname);

  if (!visible) return null;

  return (
    <div
      className={`fixed left-4 z-50 w-[min(100%-2rem,26rem)] border border-line bg-ivory p-5 text-ink shadow-xl ${
        raised ? "bottom-28" : "bottom-5"
      }`}
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <p id="cookie-title" className="font-serif text-2xl">
        Cookies
      </p>
      <p className="mt-2 text-sm text-muted">
        Usamos cookies técnicas para que la web funcione. La analítica (GA4) solo se activa si la
        aceptas. Más detalle en la{" "}
        <Link href="/politica-de-cookies" className="underline">
          política de cookies
        </Link>
        .
      </p>
      {customize ? (
        <label className="mt-4 flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
          />
          <span>Permitir cookies de analítica</span>
        </label>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 bg-navy px-4 text-sm text-ivory"
          onClick={() => saveConsent({ necessary: true, analytics: true })}
        >
          Aceptar
        </button>
        <button
          type="button"
          className="min-h-11 border border-navy px-4 text-sm"
          onClick={() => saveConsent({ necessary: true, analytics: false })}
        >
          Rechazar
        </button>
        {customize ? (
          <button
            type="button"
            className="min-h-11 px-4 text-sm underline"
            onClick={() => saveConsent({ necessary: true, analytics })}
          >
            Guardar
          </button>
        ) : (
          <button
            type="button"
            className="min-h-11 px-4 text-sm underline"
            onClick={() => {
              setAnalytics(readConsent()?.analytics ?? false);
              setCustomize(true);
            }}
          >
            Configurar
          </button>
        )}
      </div>
    </div>
  );
}
