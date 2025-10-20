"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* grid + blobs background */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/40 blob animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-10 h-64 w-64 rounded-full bg-sky-400/40 blob animate-blob" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-400/40 blob animate-blob" style={{ animationDelay: "3s" }} />

      <div className="section relative py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="h1">
              Privacy Intelligence Academy
            </h1>
            <p className="p mt-6">
              Practical training for lawyers, compliance teams, and founders —
              turn privacy data into confident, responsible decisions.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-700 transition"
              >
                Contact us
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-white transition"
              >
                Learn more
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Trusted, practical, and immediately applicable.
            </p>
          </div>

          {/* motion imagery (lightweight) */}
          <div className="relative aspect-[5/4] w-full">
            <Image
              fill
              priority
              alt="People collaborating on privacy strategy"
              className="rounded-2xl object-cover shadow-lg"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
