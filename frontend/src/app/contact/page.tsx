import type { Metadata } from "next";
import Link from "next/link";
import { ClickReveal } from "@/components/click-reveal";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { identity, siteSettings } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "تماس با من",
  description: `راه‌های ارتباطی با ${identity.name}، کارشناس حقوقی — جهت پیگیری امور حقوقی، قراردادها، وصول مطالبات و مشاوره‌های تخصصی در اصفهان.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const crumbs = [
    { label: "خانه", href: "/" },
    { label: "تماس با من", href: "/contact" },
  ];

  return (
    <main className="bg-slate-50">
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تماس و ارتباط"
          title="تماس با من"
          description="برای ارتباط، بررسی نیازهای حقوقی، مشاوره یا طرح پروژه‌های همکاری، می‌توانید از راه‌های زیر اقدام نمایید."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact Details & Channels */}
          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-700">
                  📞
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-950">اطلاعات ارتباطی</h2>
                  <p className="text-xs text-slate-500">برای حفظ حریم خصوصی، شماره و ایمیل پس از کلیک نمایان می‌شوند.</p>
                </div>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                {/* Location */}
                <div className="flex flex-col gap-1 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <span>📍</span>
                    <span>موقعیت مکانی</span>
                  </div>
                  <span className="font-medium text-slate-700">{identity.location}</span>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <span>✉️</span>
                    <span>رایانامه (ایمیل)</span>
                  </div>
                  <ClickReveal
                    label="نمایش ایمیل"
                    value={identity.email}
                    href={`mailto:${identity.email}`}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <span>📱</span>
                    <span>شماره تماس</span>
                  </div>
                  <ClickReveal
                    label="نمایش شماره تماس"
                    value={identity.phone}
                    href={`tel:${identity.phone}`}
                  />
                </div>

                {/* WhatsApp */}
                {siteSettings.whatsapp_url ? (
                  <div className="flex flex-col gap-2 rounded-2xl bg-emerald-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 font-semibold text-emerald-950">
                      <span>💬</span>
                      <span>پیام در واتساپ</span>
                    </div>
                    <a
                      href={siteSettings.whatsapp_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <span>ارسال پیام در واتساپ</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </section>

            {/* CTA Card: Learn more */}
            <section className="rounded-[1.75rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-6 shadow-sm md:p-8">
              <span className="rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-amber-800">
                پیشینه و تخصص
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                مایلید اطلاعات بیشتری درباره سوابق من کسب کنید؟
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                برای مشاهده سوابق کاری در شرکت‌ها و دفاتر وکالت، پروژه‌های پیگیری‌شده و دوره‌های تخصصی، صفحات مرتبط را مرور کنید.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  درباره و سوابق من
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-950"
                >
                  مشاهده پروژه‌ها
                </Link>
              </div>
            </section>
          </div>

          {/* Direct Email Message Form */}
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-700">
                ✍️
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-950">ارسال پیام مستقیم</h2>
                <p className="text-xs text-slate-500">متن پیام مستقیماً از طریق نرم‌افزار ایمیل شما ارسال می‌شود.</p>
              </div>
            </div>

            <form
              action={`mailto:${identity.email}`}
              method="GET"
              className="mt-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  name="subject"
                  type="text"
                  required
                  placeholder="مثال: علی رضایی — درخواست همکاری حقوقی"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                  آدرس ایمیل شما
                </label>
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  placeholder="name@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
                  متن پیام یا شرح موضوع
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  required
                  placeholder="توضیحات مختصر پیرامون موضوع حقوقی، قرارداد یا نیاز به همکاری..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-slate-950 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                ارسال پیام از طریق ایمیل
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                با زدن دکمه ارسال، نرم‌افزار ایمیل پیش‌فرض شما با متن واردشده باز خواهد شد.
              </p>
            </form>
          </section>
        </div>

        {/* Disclaimer section */}
        {siteSettings.disclaimer ? (
          <div className="mt-12 rounded-[1.75rem] border border-amber-200 bg-amber-50/60 p-6 text-center text-sm leading-7 text-amber-900 shadow-sm md:p-8">
            <span className="font-semibold">سلب مسئولیت و یادداشت حقوقی: </span>
            {siteSettings.disclaimer}
          </div>
        ) : null}
      </div>
    </main>
  );
}
