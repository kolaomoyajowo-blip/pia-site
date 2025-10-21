"use client";

import Link from "next/link";

export default function Callout() {
  return (
    <section className="bg-blue-900 py-14 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight">Bring us your hardest problem</h2>
        <p className="mt-2 max-w-3xl text-sm opacity-90">
          Whether you’re shipping an AI feature, scaling SARs, or mapping cross-border
          data flows — we’ll co-design controls that work in production.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-100"
          >
            Request a Consultation
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-white px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            Download Capabilities Deck
          </Link>
        </div>
      </div>
    </section>
  );
}
