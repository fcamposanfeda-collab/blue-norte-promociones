import { brand, legalEntity, madridOffice } from "@/content/brand";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";
import type { Crumb, FaqItem, Post, Project } from "@/types/content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    name: siteName,
    legalName: legalEntity.name,
    taxID: legalEntity.cif,
    url: siteUrl,
    description: brand.summary,
    areaServed: ["Málaga", "Santander", "Madrid", "Ciudad Real"],
    email: legalEntity.email.startsWith("[COMPLETAR") ? undefined : legalEntity.email,
    telephone: legalEntity.phone.startsWith("[COMPLETAR") ? undefined : legalEntity.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paseo de la Castellana, 140, planta 14, puerta B",
      postalCode: "28046",
      addressLocality: madridOffice.city,
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function projectSchema(project: Project) {
  return {
    "@type": "RealEstateListing",
    name: project.name,
    description: project.excerpt,
    url: absoluteUrl(`/proyectos/${project.slug}`),
    ...(project.photoPending ? {} : { image: absoluteUrl(project.image) }),
    address: {
      "@type": "PostalAddress",
      ...(project.address ? { streetAddress: project.address } : {}),
      addressLocality: project.cityName,
      addressRegion: project.provinceName,
      addressCountry: "ES",
    },
  };
}

export function blogPostingSchema(post: Post) {
  return {
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.date,
    image: absoluteUrl(post.image),
    inLanguage: "es-ES",
    mainEntityOfPage: absoluteUrl(`/actualidad/${post.slug}`),
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function graphSchema(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
