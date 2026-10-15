"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = { siteName: string; tagline: string; phone: string };

const navigation = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/about", label: "درباره من" },
  { href: "/experience", label: "سوابق کاری" },
  { href: "/skills", label: "مهارت‌ها" },
  { href: "/education", label: "تحصیلات" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/courses", label: "دوره‌ها" },
  { href: "/contact", label: "تماس با من" },
];

export function SiteHeader({ siteName, tagline }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="صفحه اصلی">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-amber-400">ع</div>
          <div>
            <div className="font-bold text-slate-950">{siteName}</div>
            <div className="text-xs text-slate-500">{tagline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-amber-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex">
            تماس با من
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 lg:hidden"
          >
            {isOpen ? "بستن" : "منو"}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden sm:px-6">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
