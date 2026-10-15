import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { SectionHeading } from '@/components/section-heading';
import { experiences } from '@/lib/content';
import { buildBreadcrumbSchema } from '@/lib/schema';
import type { ExperienceKind } from '@/lib/types';

export const metadata: Metadata = {
  title: 'سوابق کاری',
  description: 'سوابق کاری، تجارب حرفه‌ای و پیشینه فعالیت‌های حقوقی علیرضا افضلی.',
  alternates: { canonical: '/experience' },
};

const kindLabels: Record<ExperienceKind, string> = {
  legal: 'حقوقی و وکالت',
  hr: 'منابع انسانی',
  collection: 'وصول مطالبات',
};

const kindStyles: Record<ExperienceKind, string> = {
  legal: 'border-amber-200 bg-amber-50 text-amber-900',
  hr: 'border-sky-200 bg-sky-50 text-sky-900',
  collection: 'border-emerald-200 bg-emerald-50 text-emerald-900',
};

export default function ExperiencePage() {
  return (
    <main className="bg-slate-50 py-12">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: 'خانه', href: '/' },
          { label: 'سوابق کاری', href: '/experience' },
        ])}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="سوابق"
          title="سوابق کاری"
          description="مسیر حرفه‌ای، دستیاری وکالت، پیگیری پرونده‌های حقوقی و تجارب اجرایی."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Vertical continuous line along the right edge */}
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 right-4 sm:right-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-400 via-slate-300 to-slate-200"
          />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((item) => (
              <div key={item.id} className="relative flex items-start gap-4 sm:gap-6">
                {/* Timeline Dot */}
                <div
                  aria-hidden="true"
                  className="relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center"
                >
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-slate-950 shadow ring-4 ring-amber-100">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="flex-1 min-w-0 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
                  {/* Card Header: Titles and Badges */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
                        {item.role}
                      </h2>
                      <p className="mt-1 text-base sm:text-lg font-medium text-amber-800">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {/* Date Range Badge */}
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-slate-700">
                        {item.dateRange}
                      </span>

                      {/* Kind Badge */}
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-medium ${
                          kindStyles[item.kind]
                        }`}
                      >
                        {kindLabels[item.kind]}
                      </span>

                      {/* Optional Note Tag */}
                      {item.note && (
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm sm:text-base leading-7 text-slate-600">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
