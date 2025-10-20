"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Left: Logo (clickable) */}
        <Link href="/" aria-label="Go to homepage" className="shrink-0">
          {/* Adjust size to make the logo bigger/smaller in the navbar */}
          <Logo size={72} showName={false} />
        </Link>

        {/* Right: Navigation links */}
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded border px-3 py-1 hover:bg-gray-50"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
