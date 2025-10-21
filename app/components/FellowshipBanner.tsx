"use client";

import Link from "next/link";

export default function FellowshipBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The PIA Global Fellowship
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-gray-700">
          Our annual fellowship brings together talent from every region to solve
          live industry and public-sector challenges — mentored by world-class
          faculty and practitioners.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Apply to the Fellowship
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Become a Host Organization
          </Link>
        </div>
      </div>
    </section>
  );
}
