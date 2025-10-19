export default function HomePage() {
  return (
    <section className="py-10">
      <h1 className="mb-6 text-4xl font-bold">
        Privacy Intelligence Academy
      </h1>
      <p className="mb-8 max-w-2xl text-lg leading-relaxed">
        Practical training for lawyers, compliance teams, and founders on
        turning privacy data into decisions.
      </p>
      <a
        href="/contact"
        className="inline-block rounded border px-4 py-2 hover:bg-gray-50"
      >
        Contact us
      </a>
    </section>
  );
}
