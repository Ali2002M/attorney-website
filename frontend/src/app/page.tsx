import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { identity, shortBio, experiences } from "@/lib/content";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const revalidate = 300;

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: "خانه", href: "/" }]);
  const highlights = [
    { label: "سوابق کاری", value: "۵ جایگاه حقوقی" },
    { label: "تحصیلات", value: "کارشناسی ارشد — دانشگاه تهران" },
    { label: "معدل کارشناسی", value: "۱۸" },
  ];

  return (
    <main className="bg-[linear-gradient(180deg,#f8f7f3_0%,#ffffff_35%,#f5f7fb_100%)] text-slate-900">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
            {identity.tagline}
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {identity.name}
            </h1>
            <p className="text-xl font-semibold text-amber-800">{identity.title} — {identity.location}</p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              دانش‌آموخته کارشناسی حقوق دانشگاه شاهد (معدل ۱۸)، پذیرفته‌شده کانون وکلای اصفهان، با تمرکز بر تنظیم دادخواست و قرارداد، پیگیری حقوقی، وصول مطالبات و امور کار و بیمه.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" href="/contact">
              تماس با من
            </Link>
            <Link className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950" href="/experience">
              مشاهده سوابق
            </Link>
            <a
              href="/files/alireza-afzali-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="رزومه_علیرضا_افضلی.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100 hover:border-amber-400"
              title="مشاهده یا دانلود فایل رزومه PDF"
            >
              <span>📥</span>
              <span>دانلود / مشاهده رزومه (PDF)</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-amber-200/30 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
            <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
              <Image
                src="/images/profile.jpeg"
                alt={identity.name}
                width={640}
                height={640}
                priority
                className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 text-white">
                <h2 className="text-2xl font-bold">{identity.name}</h2>
                <p className="mt-1 text-sm font-medium text-amber-300">{identity.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-x-reverse divide-slate-100 border-t border-slate-100 text-center">
              {highlights.map((item) => (
                <div key={item.label} className="p-4">
                  <div className="text-sm font-bold text-slate-950">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="leading-8 text-slate-600">{shortBio}</p>
        </div>
      </section>

      {/* Quick links to main sections */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="مرور سریع" title="بخش‌های اصلی وب‌سایت" description="برای مشاهده سوابق، مهارت‌ها و مستندات، هر بخش را جداگانه مرور فرمایید." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/experience", title: "سوابق کاری", desc: "۵ جایگاه حقوقی — از دستیاری وکیل تا وصول مطالبات" },
            { href: "/skills", title: "مهارت‌ها و تخصص‌ها", desc: "گروه‌بندی‌شده بر اساس حوزه‌های حقوقی و سطوح تسلط" },
            { href: "/education", title: "تحصیلات و افتخارات", desc: "ارشد جزا و جرم‌شناسی دانشگاه تهران و کانون وکلای اصفهان" },
            { href: "/projects", title: "پروژه‌ها", desc: "گزیده تجارب حقوقی و وصول مطالبات به‌صورت تعمیم‌یافته" },
            { href: "/courses", title: "دوره‌ها و آموزش‌ها", desc: "دوره‌های مالیاتی، حقوق کار، قراردادها و دیوان عدالت" },
            { href: "/contact", title: "تماس با من", desc: "اصفهان — ایمیل و تلفن با امکان نمایش امن" },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{card.desc}</p>
              <div className="mt-4 text-sm font-semibold text-slate-950 group-hover:text-amber-700">مشاهده ←</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest experience teaser */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="سوابق" title="آخرین تجربه‌ها" description="سه جایگاه اخیر — جزئیات کامل در صفحه سوابق کاری." />
        <div className="mt-8 grid gap-4">
          {experiences.slice(0, 3).map((exp) => (
            <div key={exp.id} className="flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div>
                <div className="font-bold text-slate-950">{exp.role} — {exp.organization}</div>
                <div className="mt-1 text-sm text-slate-500">{exp.dateRange}{exp.note ? ` · ${exp.note}` : ""}</div>
              </div>
              <Link href="/experience" className="text-sm font-semibold text-amber-700 hover:text-amber-800">جزئیات ←</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
