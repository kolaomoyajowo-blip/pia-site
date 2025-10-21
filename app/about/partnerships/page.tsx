export const metadata = {
  title: "Partnerships | Privacy Intelligence Academy",
  description:
    "Partner with PIA for deployable privacy, cybersecurity, and AI-governance solutions—advisory, research, talent, learning, standards, and more.",
};

export default function PartnershipsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a>
        <span aria-hidden="true"> / </span>
        <a href="/about" className="hover:underline">About</a>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-700">Partnerships</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-900">
          Partnerships
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-700">
          <strong>Why Partner with PIA.</strong> PIA is the cross-disciplinary partner for
          organizations seeking deployable privacy, cyber, and AI-governance solutions—
          grounded in research and built for production.
        </p>
        <div className="mt-4 text-sm text-gray-700">
          <p><strong>You bring:</strong> products, datasets, policy goals, and real constraints.</p>
          <p className="mt-1">
            <strong>We bring:</strong> expert faculty, privacy engineers, policy analysts, model-governance specialists, and proven playbooks.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Request a Consultation
          </a>
        </div>
      </header>

      {/* Partnership Models */}
      <section aria-labelledby="models-heading" className="mt-10">
        <h2 id="models-heading" className="text-2xl font-bold text-blue-900">
          Partnership Models
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Advisory & Co-Design (Solutions Studio)"
            body="Time-boxed sprints to build DPIAs/TIAs, AI risk registers, model cards, incident playbooks, vendor-risk scorecards, and governance KPIs."
          />
          <Card
            title="Research Collaborations"
            body="Joint studies on PETs, auditability, bias/utility trade-offs, and LLM transparency—publishable findings with optional open artifacts."
          />
          <Card
            title="Talent & Fellowship Programs"
            body="Host fellows on real projects; access a vetted talent pipeline in Legal, Policy, Cyber, Data, AI/ML, and Product."
          />
          <Card
            title="Learning Partnerships"
            body="Private cohorts, executive briefings, and hands-on labs mapped to your stack and jurisdictions."
          />
          <Card
            title="Public-Interest & Standards"
            body="Multi-stakeholder convenings and policy roundtables to shape interoperable, real-world governance."
          />
        </div>
      </section>

      {/* What Partners Gain */}
      <section aria-labelledby="gain-heading" className="mt-12">
        <h2 id="gain-heading" className="text-2xl font-bold text-blue-900">
          What Partners Gain
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Operational outcomes: controls you can ship (not just slideware)",
            "Speed & rigor: research-backed methods translated into product-grade guidance",
            "Cross-functional buy-in: legal, policy, engineering, and product aligned around the same artifacts",
            "Global perspective: multi-jurisdiction coverage and market awareness",
            "Talent access: fellows, mentors, and member experts for hiring pipelines",
          ].map((line) => (
            <li
              key={line}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-800"
            >
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a
            href="/about"
            className="inline-flex items-center rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Download Capabilities Deck
          </a>
        </div>
      </section>

      {/* Engagement Flow */}
      <section aria-labelledby="flow-heading" className="mt-12">
        <h2 id="flow-heading" className="text-2xl font-bold text-blue-900">
          Engagement Flow
        </h2>

        <ol className="mt-6 space-y-3">
          {[
            { k: "Discovery", v: "goals, systems, jurisdictions, constraints" },
            { k: "Scoping", v: "deliverables (e.g., DPIA, model card), milestones, data needs" },
            { k: "Design Sprint", v: "interviews, architecture review, risk mapping" },
            { k: "Build & Validate", v: "templates, metrics, and implementation guidance" },
            { k: "Handover", v: "final artifacts, training, and adoption plan (with optional follow-ups)" },
          ].map((step) => (
            <li key={step.k} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-900" />
              <p className="text-sm text-gray-800">
                <strong>{step.k}:</strong> {step.v}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Governance, Data, and IP */}
      <section aria-labelledby="gip-heading" className="mt-12">
        <h2 id="gip-heading" className="text-2xl font-bold text-blue-900">
          Governance, Data, and IP (Principles)
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Data minimization & access control for any shared materials",
            "Confidentiality & conflict management aligned with your policies",
            "Attribution options for co-authored research; IP terms defined per project",
            "Ethics & compliance: privacy-by-design, safety reviews, and transparent assumptions",
          ].map((p) => (
            <li
              key={p}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-800"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Sponsorship & Support */}
      <section aria-labelledby="sponsor-heading" className="mt-12">
        <h2 id="sponsor-heading" className="text-2xl font-bold text-blue-900">
          Sponsorship & Support (Optional Tiers)
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <Card
            title="Strategic Partner"
            body="Multi-workstream collaboration + co-authorships + executive roundtables."
          />
          <Card
            title="Program Sponsor"
            body="Cohorts, workshops, or track underwriting (branding + talent access)."
          />
          <Card
            title="Fellowship Host/Sponsor"
            body="Project briefs, mentor seats, and hiring opportunities."
          />
        </div>

        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            View Sponsorship Options
          </a>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section aria-labelledby="areas-heading" className="mt-12">
        <h2 id="areas-heading" className="text-2xl font-bold text-blue-900">
          Collaboration Areas
        </h2>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Privacy reviews for LLM/GenAI features and product telemetry",
            "Cross-border data mapping, SCCs, and TIA templates",
            "Vendor-risk scorecards and DPA clause libraries",
            "Incident preparedness and tabletop exercises",
            "PETs pilots: differential privacy, k-anonymity, synthetic data",
            "Policy briefs and regulator-facing transparency notes",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-800"
            >
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-heading" className="mt-14">
        <h2 id="cta-heading" className="text-2xl font-bold text-blue-900">
          Partner With Us
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-gray-700">
          <strong>Bring us your hardest problem.</strong> Whether launching AI features, scaling SARs,
          or aligning with evolving policy, we’ll co-design controls that work in production.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Request a Consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Become a Fellowship Host
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Propose a Research Project
          </a>
        </div>
      </section>
    </main>
  );
}

/** Small card component */
function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{body}</p>
    </article>
  );
}
