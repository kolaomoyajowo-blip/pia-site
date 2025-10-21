"use client";

import Link from "next/link";

export default function ResearchFeatured() {
  const items = [
    "Operational AI Governance: A Playbook for Model Transparency & Risk Scoring.",
    "Scaling SARs: Automation without Dark Patterns.",
    "Synthetic Data for Policy Testing: Bias & Utility Trade-offs.",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
          Featured research & thought leadership
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <article
              key={t}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-gray-900">{t}</h3>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/blog" className="text-sm font-medium text-blue-900 underline">
            Browse All Research
          </Link>
        </div>
      </div>
    </section>
  );
}
