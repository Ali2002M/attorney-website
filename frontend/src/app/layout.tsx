import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { identity, siteSettings } from "@/lib/content";

const vazirmatn = localFont({
  src: [
    { path: "../fonts/Vazirmatn-UI-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Vazirmatn-UI-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Vazirmatn-UI-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Vazirmatn-UI-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Vazirmatn-UI-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-vazirmatn",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: siteSettings.seo_title,
      template: `%s | ${siteSettings.site_name}`,
    },
    description: siteSettings.seo_description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    openGraph: {
      title: siteSettings.seo_title,
      description: siteSettings.seo_description,
      type: "website",
      locale: "fa_IR",
      siteName: siteSettings.site_name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings.seo_title,
      description: siteSettings.seo_description,
    },
  };
}

import { buildPersonSchema } from "@/lib/schema";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <JsonLd data={buildPersonSchema()} />
        <SiteHeader
          siteName={identity.name}
          tagline={identity.title}
          phone=""
        />
        {children}
        <SiteFooter
          siteName={identity.name}
          note={siteSettings.footer_note}
          whatsappUrl={siteSettings.whatsapp_url}
        />
      </body>
    </html>
  );
}
