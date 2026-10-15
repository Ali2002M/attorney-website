import { identity, siteSettings } from "@/lib/content";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type JsonValue = Record<string, unknown>;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Generate Person structured data for SEO.
 * Does NOT claim any attorney license that is not held.
 */
export function buildPersonSchema(): JsonValue {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    alternateName: identity.nameEn,
    jobTitle: identity.title,
    description: siteSettings.seo_description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "اصفهان",
      addressRegion: "استان اصفهان",
      addressCountry: "IR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "دانشگاه تهران",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "دانشگاه شاهد تهران",
      },
    ],
    knowsLanguage: ["fa", "en"],
    knowsAbout: [
      "تنظیم دادخواست، شکواییه و لایحه",
      "قراردادنویسی و تحلیل قرارداد",
      "قانون کار و امور بیمه",
      "مسائل کیفری",
      "وصول مطالبات و اسناد تجاری",
    ],
    url: SITE_URL,
  };
}

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]): JsonValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: { label: string; href?: string }[]): JsonValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href && index < items.length - 1 ? absoluteUrl(item.href) : undefined,
    })),
  };
}
