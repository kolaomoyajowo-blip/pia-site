"use client";

import Link from "next/link";

export default function Events() {
  const events = [
    "DPIA in 60 Minutes: From Policy to Product",
    "De-ID Trade-offs: Utility, Bias, and Compliance",
    "AI Governance Clinic: Real System Design Reviews",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
          Events & webinars
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {events.map((e) => (
            <li key={e} className="rounded-xl border bg-white p-4 text-sm text-gray-700">
              {e}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/blog" className="text-sm font-medium text-blue-900 underline">
            See All Events
          </Link>
          <Link href="/blog" className="text-sm font-medium text-blue-900 underline">
            Get Recordings
          </Link>
        </div>
      </div>
    </section>
  );
}
