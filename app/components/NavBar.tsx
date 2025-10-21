"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo stacked over the name */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="group flex flex-col items-center leading-none"
        >
          {/* Adjust the logo size here (36–56 look good in headers) */}
          <Logo size={44} />

          {/* Pull the label up so it “touches” the shield tip */}
          <span className="mt-[-6px] text-[11px] font-semibold tracking-tight text-blue-900 group-hover:underline">
            Privacy Intelligence Academy
          </span>
        </Link>

        {/* Right-side links */}
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
