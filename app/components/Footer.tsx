import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Larger logo in footer, a bit tighter to the point */}
          <Logo size={56} tight textColorClass="text-blue-900" />

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </nav>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Privacy Intelligence Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
