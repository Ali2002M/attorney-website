import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { educations, certifications } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "تحصیلات و افتخارات",
  description: "سوابق تحصیلی دانشگاهی، پذیرش در کانون وکلا و افتخارات علمی علیرضا افضلی.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <main className="bg-slate-50">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "خانه", href: "/" },
          { label: "تحصیلات و افتخارات", href: "/education" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="شایستگی‌های علمی"
          title="تحصیلات و افتخارات"
          description="سوابق دانشگاهی، رتبه‌های علمی در آزمون‌های سراسری و پذیرش در کانون وکلای دادگستری."
        />

        {/* Section 1: تحصیلات (Education) */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-2xl shadow-sm"
              aria-hidden="true"
            >
              🎓
            </span>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">تحصیلات دانشگاهی</h2>
              <p className="text-sm text-slate-500">مدارک و مقاطع تحصیلی در رشته حقوق</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((edu, index) => (
              <article
                key={`${edu.university}-${edu.degree}-${index}`}
                className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-800"
                      aria-hidden="true"
                    >
                      🎓
                    </span>
                    <span className="rounded-full border border-amber-200 bg-amber-50/70 px-3.5 py-1 text-xs font-medium text-amber-800">
                      {edu.dateRange}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {edu.degree} {edu.field}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {edu.university}
                  </p>
                </div>

                {edu.details ? (
                  <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-4 text-sm leading-relaxed text-amber-900">
                    <span className="font-semibold text-amber-800">توضیحات: </span>
                    {edu.details}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: گواهی‌ها و افتخارات (Certifications & Honors) */}
        <section className="mt-16 space-y-6">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-2xl shadow-sm"
              aria-hidden="true"
            >
              🏆
            </span>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">گواهی‌ها و افتخارات</h2>
              <p className="text-sm text-slate-500">پروانه‌های تخصصی و رتبه‌های کسب‌شده</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <article
                key={`${cert.title}-${index}`}
                className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-800"
                      aria-hidden="true"
                    >
                      🏆
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-lg font-bold text-slate-950">
                    {cert.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-amber-800">
                    مرجع صادرکننده: {cert.issuer}
                  </p>
                </div>

                {cert.note ? (
                  <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                    {cert.note}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
