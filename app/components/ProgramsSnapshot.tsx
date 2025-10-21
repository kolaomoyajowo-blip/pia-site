"use client";

import Link from "next/link";

export default function ProgramsSnapshot() {
  const tracks = [
    "PIA-Foundations — Law & data basics, DPIAs, incident response.",
    "PIA-Pro — Vendor risk, cross-border transfers, algorithmic accountability.",
    "PIA-Engineer — PETs labs (DP, k-anonymity, synthetic data), logging governance.",
    "PIA-Gov & Policy — Impact assessments, procurement clauses, public-sector rules.",
    "Micro-Credentials — SARs at scale, children’s privacy, AI governance, health/fin.",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
          Programs (snapshot)
        </h2>

        <ul className="grid gap-3">
          {tracks.map((t) => (
            <li
              key={t}
              className="rounded-xl border bg-white p-4 text-sm text-gray-700"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            View Full Curriculum
          </Link>
        </div>
      </div>
    </section>
  );
}
