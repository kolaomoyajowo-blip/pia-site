export default function AboutPage() {
  const items = [
    {
      href: "/about/who-we-are",
      title: "Who we are",
      body:
        "The team, approach, and principles behind Privacy Intelligence Academy.",
    },
    {
      href: "/about/mission",
      title: "Our mission",
      body:
        "What we’re building, the problems we solve, and how we measure impact.",
    },
    {
      href: "/about/milestones",
      title: "Milestones",
      body:
        "A timeline of highlights: launches, research, and community programs.",
    },
    {
      href: "/about/partnerships",
      title: "Partnerships",
      body:
        "How we collaborate with companies, public sector, and universities.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">About PIA</h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          Learn more about the people, purpose, and collaborations behind the
          Privacy Intelligence Academy.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{c.body}</p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-900">
              Learn more →
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
