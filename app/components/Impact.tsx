"use client";

export default function Impact() {
  const metrics = [
    { k: "150+", v: "organizations supported" },
    { k: "40+", v: "jurisdictions covered" },
    { k: "1,000+", v: "practitioners trained" },
  ];

  const cases = [
    "Reduced vendor-onboarding risk by 38%",
    "Launched privacy review in SDLC for AI features",
    "Built AI transparency note in <30 days",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Outcomes & impact
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.k} className="rounded-2xl border bg-white p-6 text-center">
              <div className="text-3xl font-extrabold text-blue-900">{m.k}</div>
              <div className="mt-1 text-sm text-gray-600">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {cases.map((c) => (
            <div key={c} className="rounded-xl border bg-white p-4 text-sm text-gray-700">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
