export const metadata = {
  title: "Insights at the intersection of Law, Data & AI | PIA",
  description:
    "Track events, policies, and practical guidance shaping privacy, cybersecurity, and responsible AI—curated by PIA’s global community.",
};

const featured = [
  {
    href: "/blog/events",
    kicker: "Events",
    title:
      "DPIA in 60 Minutes: From Policy to Product",
    teaser:
      "A live clinic that turns governance requirements into shipping controls.",
  },
  {
    href: "/blog/news",
    kicker: "Data Security News & Policies",
    title:
      "Breach Notifications: Timing, Templates, Multi-Region Coordination",
    teaser:
      "Plain-English guidance and a downloadable starter pack.",
  },
  {
    href: "/blog/ai-policy",
    kicker: "AI Policy & Industry Updates",
    title:
      "Evaluations That Matter: Failure Modes, Abuse Testing, Sign-off",
    teaser:
      "A practical checklist that maps to launch gates.",
  },
  {
    href: "/blog/publications",
    kicker: "PIA Publications & Campaign",
    title:
      "Operational AI Governance: Risk Scoring & Transparency Patterns",
    teaser:
      "Research you can implement—paired with reusable artifacts.",
  },
];

const filters = [
  { label: "Events", href: "/blog/events" },
  { label: "Data Security News & Policies", href: "/blog/news" },
  { label: "AI Policy & Industry Updates", href: "/blog/ai-policy" },
  { label: "PIA Publications & Campaign", href: "/blog/publications" },
];

export default function BlogLanding() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* HERO */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Insights at the intersection of Law, Data &amp; AI
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-700">
          Track the events, policies, and practical guidance shaping privacy,
          cybersecurity, and responsible AI—curated by PIA’s global community.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/blog/publications"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Browse All Posts
          </a>
          <a
            href="#newsletter"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Subscribe to Privacy Patterns
          </a>
        </div>
      </header>

      {/* FILTERS / TABS */}
      <nav className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <a
            key={f.href}
            href={f.href}
            className="rounded-full border px-4 py-2 text-sm hover:bg-gray-50"
          >
            {f.label}
          </a>
        ))}
      </nav>

      {/* FEATURED STRIP (4 cards) */}
      <section aria-labelledby="featured-heading" className="mb-12">
        <h2 id="featured-heading" className="text-2xl font-bold text-gray-900">
          Featured
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-900">
                {item.kicker}
              </div>
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.teaser}</p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-900">
                View →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* RIGHT-RAIL IDEAS as a simple inline block for now */}
      <aside className="mb-12 rounded-2xl border bg-white p-5">
        <h2 className="text-lg font-semibold text-blue-900">Filters & Tags</h2>
        <div className="mt-3 text-sm text-gray-700">
          <p>
            Popular tags: DPIA, SCCs, LLMs, PETs, Incident Response • Region:
            US, EU, UK, Africa, APAC • Sector: Health, Finance, SaaS, Public Sector
          </p>
        </div>
      </aside>

      {/* NEWSLETTER BLOCK */}
      <section id="newsletter" className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Privacy Patterns — monthly
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Once a month. No spam. Practical templates and what actually works.
        </p>
        <form
          className="mt-4 flex max-w-md gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Check your inbox for a confirmation link.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-xs text-gray-500">
          By subscribing, you agree to receive emails from PIA. Unsubscribe anytime.
        </p>
      </section>
    </main>
  );
}
