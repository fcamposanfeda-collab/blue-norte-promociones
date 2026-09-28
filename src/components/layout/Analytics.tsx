"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("bn-consent-change", onChange);
  return () => window.removeEventListener("bn-consent-change", onChange);
}

function analyticsEnabled() {
  const raw = window.localStorage.getItem("bn-consent");
  if (!raw) return false;
  try {
    const parsed = JSON.parse(raw) as { analytics?: boolean };
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function Analytics() {
  const enabled = useSyncExternalStore(subscribe, analyticsEnabled, () => false);
  const measurementId = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const validId = /^G-[A-Z0-9]+$/.test(measurementId);

  if (!enabled || !validId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
