import { dictionary, type Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";

export function getDictionary(locale: Locale = "es"): Dictionary {
  if (locale === "en") {
    return dictionary;
  }
  return dictionary;
}

export { dictionary };
