"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/#resources", label: "Resources" },
  { href: "/#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl">
          Privacy Intelligence Academy
        </Link>

        <button
          className="md:hidden rounded border px-2 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "text-sm hover:text-indigo-600",
                  pathname === l.href && "text-indigo-600 font-medium"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile panel */}
      {open && (
        <ul className="md:hidden border-t bg-white px-4 py-3 space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-1 text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
