import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "پروژه‌ها",
  description: "گزیده‌ای از پروژه‌ها و سوابق پیگیری حقوقی و وصول مطالبات به‌صورت تعمیم‌یافته جهت حفظ حریم خصوصی.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 py-12">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "خانه", href: "/" },
          { label: "پروژه‌ها", href: "/projects" },
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="سوابق و پروژه‌ها"
          title="پروژه‌ها"
          description="گزیده‌ای از فعالیت‌ها و سوابق حقوقی. اطلاعات پروژه‌ها به‌منظور رعایت اصول حرفه‌ای و حفظ حریم خصوصی موکلین به‌صورت کلی و تعمیم‌یافته درج شده است."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-xl text-amber-800">
                    ⚖️
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1 text-xs font-medium text-amber-800">
                    {project.dateRange}
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-bold text-slate-950">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-100/70 p-6 text-center text-sm text-slate-500">
          <p>
            به‌منظور حفظ حریم خصوصی، مشخصات موکلین و نتایج پرونده‌ها درج نشده است.
          </p>
        </div>
      </div>
    </main>
  );
}
