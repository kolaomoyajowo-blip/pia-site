// app/membership/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Membership | Privacy Intelligence Academy",
  description:
    "Explore Privacy Intelligence Academy membership tiers, benefits, and how to join.",
};

export default function MembershipPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Membership</h1>
        <p className="mt-3 text-slate-600">
          Join a cross-disciplinary community advancing privacy, cybersecurity,
          and AI governance.
        </p>
      </header>

      {/* ===== Replace the placeholder below with your real content in the next step ===== */}
      <section className="space-y-8">
        <article className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-2 text-slate-700">
            This is a placeholder. In the next step, we’ll paste your full copy
            for each membership category and benefits.
          </p>
        </article>

        <div className="flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border px-4 py-2 font-medium"
          >
            Contact us
          </Link>
          <Link
            href="/membership#join"
            className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 font-medium text-white"
          >
            Join PIA
          </Link>
        </div>
      </section>
    </main>
  );
}
