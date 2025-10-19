export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p>© {year} Privacy Intelligence Academy</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="/privacy">
              Privacy Policy
            </a>
            <a className="hover:underline" href="/terms">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
