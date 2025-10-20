"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold">
          Privacy Intelligence Academy
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
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
