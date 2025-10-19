import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Privacy Intelligence Academy
        </Link>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
