import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-6">Privacy Intelligence Academy</h1>
      <p className="leading-7 text-lg mb-8">
        Practical training for lawyers, compliance teams, and founders on turning privacy data
        into decisions.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
      >
        Contact us
      </Link>
    </section>
  );
}
