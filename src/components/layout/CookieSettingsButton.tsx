"use client";

import { openCookieSettings } from "@/components/layout/CookieBanner";

export function CookieSettingsButton() {
  return (
    <button type="button" className="min-h-11 border border-navy px-4 text-sm" onClick={openCookieSettings}>
      Cambiar preferencias de cookies
    </button>
  );
}
