import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-slate-50 px-4 text-center">
      <div className="max-w-xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-950">صفحه پیدا نشد</h1>
        <p className="mt-4 leading-8 text-slate-600">صفحه‌ای که به‌دنبال آن بودید وجود ندارد یا منتقل شده است.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
          بازگشت به خانه
        </Link>
      </div>
    </main>
  );
}
