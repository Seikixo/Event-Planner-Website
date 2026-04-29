import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-stone-900 w-full py-20 px-12 tonal-shift-no-lines flat fade-in transition-all">
      <div className="grid grid-cols-1 md:grid-cols-3 items-end w-full max-w-[1920px] mx-auto gap-12">
        <div>
          <Link
            className="font-serif text-xl text-surface-tint dark:text-primary-container"
            href="/"
          >
            Event Planner
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:justify-center font-sans text-xs tracking-widest uppercase">
          <Link
            className="text-on-surface-variant dark:text-stone-400 hover:opacity-60 transition-opacity"
            href="/contact"
          >
            Inquiry
          </Link>
          <Link
            className="text-on-surface-variant dark:text-stone-400 hover:opacity-60 transition-opacity"
            href="#"
          >
            Press
          </Link>
          <Link
            className="text-on-surface-variant dark:text-stone-400 hover:opacity-60 transition-opacity"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-on-surface-variant dark:text-stone-400 hover:opacity-60 transition-opacity"
            href="#"
          >
            Careers
          </Link>
        </div>
        <div className="md:text-right font-sans text-xs tracking-widest uppercase text-on-surface-variant dark:text-stone-400">
          © 2026 Event Planner. Curated with intention.
        </div>
      </div>
    </footer>
  );
}
