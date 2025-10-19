"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          Privacy Intelligence Academy
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
