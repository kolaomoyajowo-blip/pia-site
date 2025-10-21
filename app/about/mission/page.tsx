export const metadata = {
  title: "Our Mission | Privacy Intelligence Academy",
  description:
    "PIA’s mission: cross-disciplinary excellence, research-to-practice, AI governance, privacy & security by design, global equity, and policy leadership.",
};

type MissionItem = { title: string; body: string };

const statements: MissionItem[] = [
  {
    title: "A. Core professionalism",
    body:
      "Unite leading experts across law, policy, cybersecurity, data, and AI to manage arising privacy, governance, and security risks—turning innovative research into deployable solutions for organizations and society.",
  },
  {
    title: "B. Outcomes-focused",
    body:
      "Translate evidence-based research into practical playbooks that safeguard data, govern AI responsibly, and reduce legal and policy exposure in the technology marketplace.",
  },
  {
    title: "C. Global & equitable",
    body:
      "Build a global hub where diverse professionals tackle contemporary technology problems—and expand equitable opportunities through our fellowship and career pathways.",
  },
  {
    title: "D. Policy & standards",
    body:
      "Serve as a corporate thought leader shaping Tech, Data, and AI policy—bridging regulators, industry, and academia for interoperable, real-world governance.",
  },
  {
    title: "E. Research → Deployment",
    body:
      "Convert cutting-edge work in privacy engineering, AI governance, and cybersecurity into operational controls that work in production at scale.",
  },
  {
    title: "F. Trusted partner",
    body:
      "Be the trusted partner for organizations seeking solutions to current and emerging risks—from large language models to cross-border data challenges.",
  },
  {
    title: "G. Professional association hub",
    body:
      "Convene a cross-disciplinary community—tech attorneys, regulators, privacy engineers, AI/ML experts, and data professionals—advancing shared practice, templates, and mentorship.",
  },
  {
    title: "H. AI-era focus",
    body:
      "Steer AI innovation with privacy by design, transparency, and accountability—so teams can deploy powerful models without compromising rights or safety.",
  },
  {
    title: "I. Public interest & resilience",
    body:
      "Protect individuals, strengthen institutions, and enable responsible innovation through rigorous governance, robust security, and practical compliance.",
  },
  {
    title: "J. Innovation with safeguards",
    body:
      "Accelerate technological progress while embedding privacy, security, and policy safeguards that earn trust and withstand real-world scrutiny.",
  },
];

const pillars: MissionItem[] = [
  {
    title: "Cross-disciplinary excellence",
    body: "Law, policy, cybersecurity, data, and AI/ML working as one.",
  },
  {
    title: "Research-to-practice",
    body: "Evidence turned into templates, controls, and operations.",
  },
  {
    title: "AI governance",
    body: "Transparency, risk scoring, and accountability for LLMs and models.",
  },
  {
    title: "Privacy & security by design",
    body: "Resilient architectures and practices that reduce exposure.",
  },
  {
    title: "Global & equitable",
    body: "Fellowship and mentorship opening pathways across regions.",
  },
  {
    title: "Policy leadership",
    body: "Interoperable standards shaped with regulators and industry.",
  },
];

export default function MissionPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a>
        <span aria-hidden="true"> / </span>
        <a href="/about" className="hover:underline">About</a>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-700">Our Mission</span>
      </nav>

      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Our Mission
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-700">
          We unite disciplines, translate research into practice, and help
          organizations deploy trustworthy privacy, security, and AI governance at scale.
        </p>
      </header>

      {/* Mission statements */}
      <section aria-labelledby="statements-heading" className="space-y-6">
        <h2
          id="statements-heading"
          className="text-2xl font-bold text-gray-900"
        >
          Mission Statements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {statements.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section aria-labelledby="pillars-heading" className="mt-12">
        <h2
          id="pillars-heading"
          className="text-2xl font-bold text-gray-900"
        >
          Mission Pillars
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">{p.body}</p>
            </article>
          ))}
        </div>
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
