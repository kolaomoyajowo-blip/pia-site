"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo on the left, links on the right */}
        <Link href="/" aria-label="Go to homepage">
          <Logo size={60} />
        </Link>

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
