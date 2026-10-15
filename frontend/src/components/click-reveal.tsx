"use client";

import { useState } from "react";

interface ClickRevealProps {
  label: string;
  value: string;
  href?: string;
  dir?: "ltr" | "rtl";
  className?: string;
}

export function ClickReveal({
  label,
  value,
  href,
  dir = "ltr",
  className = "",
}: ClickRevealProps) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-amber-400 hover:bg-amber-50/60 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 active:scale-[0.99] ${className}`}
        aria-label={label}
      >
        <span aria-hidden="true" className="text-base">👁️</span>
        <span>{label}</span>
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        dir={dir}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50/80 px-5 py-3 text-sm font-bold text-amber-950 shadow-sm transition hover:bg-amber-100 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${className}`}
      >
        <span>{value}</span>
      </a>
    );
  }

  return (
    <span
      dir={dir}
      className={`inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 ${className}`}
    >
      {value}
    </span>
  );
}
