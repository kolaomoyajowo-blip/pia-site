import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 text-sm">
        <p>© {new Date().getFullYear()} Privacy Intelligence Academy</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
