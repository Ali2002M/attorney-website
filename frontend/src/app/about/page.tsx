import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import {
  certifications,
  educations,
  experiences,
  identity,
  shortBio,
} from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "معرفی علیرضا افضلی، کارشناس حقوقی — سوابق تحصیلی در دانشگاه تهران و شاهد، افتخارات علمی، و سوابق حرفه‌ای حقوقی.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "خانه", href: "/" },
    { label: "درباره من", href: "/about" },
  ]);

  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <section className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-square w-full max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-md">
            <Image
              src="/images/profile.jpeg"
              alt={identity.name}
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
                {identity.tagline}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                {identity.name}
              </h1>
              <p className="text-xl font-semibold text-amber-800">
                {identity.title} — {identity.location}
              </p>
            </div>

            {/* Full shortBio text */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                درباره من و مسیر حرفه‌ای
              </h2>
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                {shortBio}
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <SectionHeading
            eyebrow="تحصیلات"
            title="سوابق دانشگاهی"
            description="مسیر آموزشی و تحصیلات تخصصی در رشته حقوق"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-800 border border-amber-200/60">
                      {edu.degree}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {edu.dateRange}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {edu.degree} {edu.field}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-amber-800">
                    {edu.university}
                  </p>
                </div>
                {edu.details ? (
                  <p className="mt-6 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {edu.details}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Honors Section */}
        <section className="space-y-8">
          <SectionHeading
            eyebrow="شایستگی‌ها"
            title="افتخارات و آزمون‌های تخصصی"
            description="موفقیت‌های علمی و پذیرش‌های رسمی در مراجع حقوقی کشور"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700">
                      {cert.date}
                    </span>
                    {cert.note ? (
                      <span className="text-xs text-slate-500 font-medium">
                        {cert.note}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    مرجع صادرکننده: <span className="font-semibold text-slate-800">{cert.issuer}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Overview / CTA Card */}
        <section className="rounded-[2rem] bg-slate-950 p-8 sm:p-12 text-white shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-bold sm:text-3xl">
                سوابق کاری و ارتباط مستقیم
              </h2>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                مجموعه سوابق کاری شامل {experiences.length} موقعیت شغلی در دفاتر حقوقی، مجموعه‌های مالی و صنعتی، و وصول مطالبات است. برای مشاهده جزئیات یا ارتباط مستقیم، از پیوندهای زیر استفاده نمایید.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/files/alireza-afzali-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="رزومه_علیرضا_افضلی.pdf"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                دانلود رزومه (PDF)
              </a>
              <Link
                href="/experience"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:border-slate-600"
              >
                مشاهده سوابق
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:border-slate-600"
              >
                تماس با من
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
