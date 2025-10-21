"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Top row: stacked logo + name, plus simple nav */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Stacked logo + name */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group inline-flex flex-col items-center"
          >
            {/* Adjust size as you like (56–72 look good) */}
            <Logo size={56} />

            {/* Pull the name up so it “touches” the pointed edge */}
            <span className="mt-[-6px] text-sm font-semibold tracking-tight text-blue-900 group-hover:underline">
              Privacy Intelligence Academy
            </span>
          </Link>

          {/* Simple footer nav (edit as needed) */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>

        {/* Bottom row: copyright + policies */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Privacy Intelligence Academy</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
