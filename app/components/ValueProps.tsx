"use client";

import Link from "next/link";

export default function ValueProps() {
  const items = [
    {
      title: "Cross-Disciplinary Excellence",
      body:
        "Tech attorneys, policy regulators, cybersecurity leaders, privacy engineers, and AI/ML experts.",
    },
    {
      title: "From Research to Deployment",
      body:
        "We turn evidence-based research into operational playbooks and product-grade guidance.",
    },
    {
      title: "Global Community & Standards",
      body:
        "We convene regulators, industry, and academia to shape practical, interoperable policy.",
    },
    {
      title: "Fellowship & Talent Pipeline",
      body:
        "A competitive program developing job-ready expertise on real-world projects.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Why teams choose PIA
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {it.title}
              </h3>
              <p className="text-sm text-gray-600">{it.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
