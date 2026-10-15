import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { coursesData } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "دوره‌ها و آموزش‌ها",
  description: "سوابق دوره‌ها و کارگاه‌های تخصصی گذرانده‌شده در حوزه‌های مالیات، حقوق کار، قراردادنویسی و دیوان عدالت اداری.",
  alternates: { canonical: "/courses" },
};

const categoryLabels: Record<string, string> = {
  tax: "مالیاتی",
  labor: "کار",
  contracts: "قراردادنویسی",
  administrative: "اداری",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "خانه", href: "/" },
          { label: "دوره‌ها و آموزش‌ها", href: "/courses" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="آموزش"
            title="دوره‌ها و آموزش‌ها"
            description="دوره‌ها و کارگاه‌های تخصصی تکمیلی که با هدف ارتقای تسلط کاربردی در موضوعات حقوقی و اقتصادی سپری کرده‌ام."
          />

          {/* Context Notice */}
          <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50/60 p-5 text-sm leading-7 text-amber-950 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="text-xl leading-none">🎓</span>
              <p>
                عناوین زیر شامل دوره‌ها و کارگاه‌های حرفه‌ای است که شخصاً در مؤسسات و مراکز دانشگاهی معتبر گذرانده‌ام و معرف سوابق یادگیری و تخصص کاربردی من است (نه دوره‌های آموزشی در حال برگزاری).
              </p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {coursesData.map((course) => (
            <article
              key={course.id}
              className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    <span>📚</span>
                    <span>{categoryLabels[course.category] ?? course.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    <span>گذرانده‌شده</span>
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">
                  {course.title}
                </h2>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">برگزارکننده:</span>
                    <span className="font-medium text-slate-900">{course.provider}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-700">📅</span>
                  <span>دوره زمانی: {course.dateRange}</span>
                </span>
                <span className="font-medium text-amber-800">تکمیل دوره</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
