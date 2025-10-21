export const metadata = {
  title: "Milestones | Privacy Intelligence Academy",
  description:
    "Our journey at a glance — key milestones, impact metrics, featured highlights, and the PIA roadmap.",
};

type TimelineItem = { date: string; title: string; text: string };

const timeline: TimelineItem[] = [
  {
    date: "2020",
    title: "Founding Vision",
    text:
      "Launched as an international hub uniting tech attorneys, policy regulators, cybersecurity leaders, privacy engineers, and AI/ML experts to solve real-world risks.",
  },
  {
    date: "2023",
    title: "First Global Fellowship",
    text:
      "Inaugurated the PIA Global Fellowship, welcoming talent from multiple regions to work on production-grade privacy and AI governance challenges with world-class faculty.",
  },
  {
    date: "2023",
    title: "Research Lab Debut",
    text:
      "Published our first evidence-based playbooks on privacy engineering (PETs), LLM transparency notes, and cross-border data transfer assessments.",
  },
  {
    date: "2024",
    title: "Solutions Studio Launch",
    text:
      "Opened our Solutions Studio to co-design DPIAs/TIAs, AI risk controls, and incident-response frameworks with industry and public institutions.",
  },
  {
    date: "2024",
    title: "Curriculum Expansion",
    text:
      "Rolled out PIA-Foundations, PIA-Pro, PIA-Engineer, and PIA-Gov & Policy tracks plus micro-credentials (SARs at scale, children’s privacy, AI model governance).",
  },
  {
    date: "2024",
    title: "Global Community Growth",
    text:
      "Reached a multi-continent membership base; formed expert circles spanning Legal, Policy, Cybersecurity, AI/ML, Data, and Product.",
  },
  {
    date: "2024",
    title: "Policy & Standards Impact",
    text:
      "Contributed to cross-industry dialogues on Tech, Data, and AI policy; supported adoption of interoperable, real-world governance practices.",
  },
];

const impactMetrics = [
  { big: "150+", label: "organizations supported" },
  { big: "40+", label: "jurisdictions covered" },
  { big: "1,000+", label: "practitioners trained" },
  { big: "30–50%", label: "faster privacy reviews in partner SDLCs (median)" },
  { big: "25–40%", label: "reduced vendor-onboarding risk after Pro program" },
  { big: "X", label: "peer-reviewed/industry papers & playbooks published" },
];

const highlights = [
  "Operational AI Governance Playbook — model cards, risk scoring, and transparency patterns",
  "Scaling SARs Responsibly — automation without dark patterns",
  "Synthetic Data for Policy Testing — balancing utility, bias, and compliance",
];

const roadmap = [
  "Fellowship scale-up: more regions, sector-specific tracks (health, finance, public sector)",
  "Open templates: DPIA/DPA/SCCs and AI transparency notes under a permissive license",
  "Benchmark initiatives: reproducible PETs demos and privacy review benchmarks",
  "Partner residencies: embedded PIA experts for time-boxed delivery sprints",
];

export default function MilestonesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a>
        <span aria-hidden="true"> / </span>
        <a href="/about" className="hover:underline">About</a>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-700">Milestones</span>
      </nav>

      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Milestones
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          <strong>Our Journey at a Glance.</strong> From a cross-disciplinary idea to a
          globally recognized hub, PIA advances responsible innovation across privacy,
          cybersecurity, governance, and AI.
        </p>
      </header>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="mt-6">
        <h2
          id="timeline-heading"
          className="text-2xl font-bold text-gray-900"
        >
          Timeline
        </h2>

        <ol className="mt-6 space-y-6">
          {timeline.map((t, i) => (
            <li key={`${t.date}-${i}`} className="relative flex gap-4">
              {/* dot + line */}
              <div className="flex flex-col items-center">
                <div className="mt-1 h-3 w-3 rounded-full bg-blue-900" />
                {i !== timeline.length - 1 && (
                  <div className="h-full w-px flex-1 bg-blue-100" />
                )}
              </div>

              <div>
                <div className="text-sm font-semibold text-blue-900">{t.date}</div>
                <div className="text-lg font-semibold text-gray-900">{t.title}</div>
                <p className="mt-1 text-sm text-gray-700">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Impact */}
      <section aria-labelledby="impact-heading" className="mt-12">
        <h2 id="impact-heading" className="text-2xl font-bold text-gray-900">
          Impact by the Numbers
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-extrabold text-blue-900">{m.big}</div>
              <div className="mt-1 text-sm text-gray-700">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <figure className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <blockquote className="text-gray-800">
            “PIA helped us translate policy goals into engineering controls we could ship.”
          </blockquote>
          <figcaption className="mt-3 text-sm text-gray-500">— GC, Global SaaS</figcaption>
        </figure>
      </section>

      {/* Featured highlights */}
      <section aria-labelledby="highlights-heading" className="mt-12">
        <h2 id="highlights-heading" className="text-2xl font-bold text-gray-900">
          Featured Highlights
        </h2>
        <ul className="mt-6 grid gap-3">
          {highlights.map((h) => (
            <li key={h} className="rounded-xl border bg-white p-4 text-sm text-gray-800">
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* Roadmap */}
      <section aria-labelledby="roadmap-heading" className="mt-12">
        <h2 id="roadmap-heading" className="text-2xl font-bold text-gray-900">
          Roadmap (What’s Next?)
        </h2>
        <ul className="mt-6 grid gap-3">
          {roadmap.map((r) => (
            <li key={r} className="rounded-xl border bg-white p-4 text-sm text-gray-800">
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="/about"
          className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Back to About
        </a>
        <a
          href="/contact"
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Contact us
        </a>
      </div>
    </main>
  );
}
