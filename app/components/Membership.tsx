"use client";

import Link from "next/link";

export default function Membership() {
  const bullets = [
    "Expert circles (Legal, AI/ML, Cyber, Policy)",
    "Template library (DPIA, DPA, SCCs, retention, AI model cards)",
    "Member events & mentorship",
    "Opportunities board & research collaboration",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          A global professional community
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-gray-700">
          Join a cross-disciplinary network for peer review, templates, policy
          trackers, job leads, and monthly clinics on AI & privacy engineering.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="rounded-xl border bg-white p-4 text-sm text-gray-700">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Join PIA
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
