"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.webp"           // if you used PNG: "/hero-optimized.png"
          alt="Interdisciplinary team aligning AI systems with privacy and governance requirements"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Where Law, Data &amp; AI Meet Real-World Governance
        </h1>
        <p className="mt-5 max-w-3xl text-lg md:text-xl text-gray-700">
          Privacy Intelligence Academy helps organizations manage privacy, cybersecurity,
          and AI governance risks—turning advanced research into practical frameworks
          and deployable controls.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/contact"
            className="rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800"
          >
            Work with PIA
          </a>
          <a
            href="/about"
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50"
          >
            Join as a Member
          </a>
        </div>
      </div>
    </section>
  );
}
