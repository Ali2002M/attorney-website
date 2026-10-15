import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "مهارت‌ها و تخصص‌ها",
  description:
    "مجموعه مهارت‌ها و شایستگی‌های تخصصی علیرضا افضلی در تنظیم و پیگیری دعاوی، قراردادنویسی، حقوق کار، امور کیفری و وصول مطالبات.",
  alternates: { canonical: "/skills" },
};

type SkillLevel = "advanced" | "professional" | "intermediate";

const LEVEL_CONFIG: Record<
  SkillLevel,
  {
    label: string;
    dotClass: string;
    badgeClass: string;
    description: string;
  }
> = {
  advanced: {
    label: "پیشرفته",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-100 text-emerald-700",
    description: "تسلط کامل و اجرایی",
  },
  professional: {
    label: "حرفه‌ای",
    dotClass: "bg-sky-500",
    badgeClass: "bg-sky-100 text-sky-700",
    description: "تجربه تخصصی و عملیاتی",
  },
  intermediate: {
    label: "متوسط",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-100 text-amber-700",
    description: "آشنایی و پیگیری عمومی",
  },
};

export default function SkillsPage() {
  return (
    <main className="bg-slate-50 py-12">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "خانه", href: "/" },
          { label: "مهارت‌ها و تخصص‌ها", href: "/skills" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="شایستگی‌های حرفه‌ای"
          title="مهارت‌ها و تخصص‌ها"
          description="دسته‌بندی جامع مهارت‌های حقوقی و اجرایی در حوزه‌های دعاوی، قراردادها، اسناد تجاری، امور کیفری و وصول مطالبات بر اساس سطح تسلط."
        />

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:gap-6">
          <span className="text-sm font-bold text-slate-900">راهنمای سطوح تسلط:</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {(Object.keys(LEVEL_CONFIG) as SkillLevel[]).map((level) => {
              const cfg = LEVEL_CONFIG[level];
              return (
                <div key={level} className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className={`h-2.5 w-2.5 rounded-full ${cfg.dotClass}`} aria-hidden="true" />
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.badgeClass}`}>
                    {cfg.label}
                  </span>
                  <span className="text-slate-500">— {cfg.description}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.heading}
              className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-2xl"
                      aria-hidden="true"
                    >
                      {group.icon}
                    </span>
                    <h2 className="text-lg font-bold text-slate-950 sm:text-xl">
                      {group.heading}
                    </h2>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {group.items.length} مهارت
                  </span>
                </div>

                <ul className="mt-6 divide-y divide-slate-100 border-t border-slate-100" role="list">
                  {group.items.map((item) => {
                    const cfg = LEVEL_CONFIG[item.level];
                    return (
                      <li
                        key={item.title}
                        className="flex items-center justify-between gap-3 py-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${cfg.dotClass}`}
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium leading-relaxed text-slate-800">
                            {item.title}
                          </span>
                        </div>
                        <span
                          className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.badgeClass}`}
                        >
                          {cfg.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
