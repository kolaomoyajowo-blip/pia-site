"use client";

import Link from "next/link";

export default function WhatWeDo() {
  const cards = [
    {
      title: "Solutions Studio",
      body:
        "Advisory on AI governance, privacy engineering, DPIAs/TIAs, cyber risk, model transparency, and policy alignment.",
      links: [
        { href: "/contact", label: "Request an Engagement" },
        { href: "/about", label: "Download Capabilities" },
      ],
    },
    {
      title: "Research Lab",
      body:
        "Independent research on PETs, audit frameworks, SARs at scale, and trustworthy AI in the marketplace.",
      links: [
        { href: "/blog", label: "View Research" },
        { href: "/contact", label: "Partner on a Study" },
      ],
    },
    {
      title: "The Academy",
      body:
        "Cohorts and workshops — GDPR/CCPA, privacy engineering, AI model governance, and incident response.",
      links: [
        { href: "/about", label: "Browse Courses" },
        { href: "/contact", label: "Apply for Scholarships" },
      ],
    },
    {
      title: "Global Fellowship",
      body:
        "Competitive program placing emerging leaders on mentored, real-world projects with industry/public sector.",
      links: [
        { href: "/contact", label: "Apply" },
        { href: "/contact", label: "Sponsor a Fellow" },
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          What we do
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border bg-white p-5 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {c.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{c.body}</p>
              <div className="mt-auto flex flex-col gap-2">
                {c.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-blue-900 underline hover:no-underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
