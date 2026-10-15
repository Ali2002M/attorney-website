import Link from "next/link";

type SiteFooterProps = {
  siteName: string;
  note: string;
  whatsappUrl?: string;
};

const footerLinks = [
  { href: "/about", label: "درباره من" },
  { href: "/experience", label: "سوابق کاری" },
  { href: "/skills", label: "مهارت‌ها" },
  { href: "/education", label: "تحصیلات" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/courses", label: "دوره‌ها" },
  { href: "/contact", label: "تماس با من" },
];

export function SiteFooter({ siteName, note, whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <div className="text-2xl font-bold">{siteName}</div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            برای ارتباط، ارسال پیام و مشاهده اطلاعات تماس، به{" "}
            <Link href="/contact" className="font-medium text-amber-400 hover:underline">
              صفحه تماس با من
            </Link>{" "}
            مراجعه نمایید.
          </p>
          {whatsappUrl ? (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-amber-400 hover:text-amber-300">
              ارتباط در واتساپ
            </a>
          ) : null}
        </div>
        <nav aria-label="پیوندهای فوتر" className="grid gap-3 sm:grid-cols-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-amber-500 hover:bg-white/5">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm leading-7 text-slate-400 sm:px-6 lg:px-8">{note}</div>
    </footer>
  );
}
