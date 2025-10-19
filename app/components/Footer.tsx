import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Privacy Intelligence Academy</p>
          <nav className="flex gap-6">
            <Link href="/#courses" className="hover:text-indigo-600">Courses</Link>
            <Link href="/#consulting" className="hover:text-indigo-600">Consulting</Link>
            <Link href="/#resources" className="hover:text-indigo-600">Resources</Link>
            <Link href="/#contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
