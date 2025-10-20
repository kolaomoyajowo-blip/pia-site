import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Programs */}
      <section className="section py-16">
        <h2 className="h2">Programs</h2>
        <p className="p mt-2">
          Choose a path that matches your team’s goals and maturity.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Privacy Foundations</h3>
            <p className="mt-2 text-slate-600">
              Core concepts, frameworks (GDPR/CCPA), and culture-building. Designed
              for non-lawyers and mixed teams.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-600">
              <li>Risk-based approach to data</li>
              <li>Data mapping & DPIAs</li>
              <li>Practical governance playbook</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-lg">Operational Mastery</h3>
            <p className="mt-2 text-slate-600">
              Turn policy into repeatable action: workflows, automation, and
              measurable outcomes.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-600">
              <li>Vendor & AI assessments</li>
              <li>Incident response drills</li>
              <li>Metrics that matter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section py-16">
        <h2 className="h2">Who we help</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold">Legal Teams</h3>
            <p className="mt-2 text-slate-600">
              Translate legal obligations into clear, business-friendly actions.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Compliance & Security</h3>
            <p className="mt-2 text-slate-600">
              Harmonize privacy with risk, security, and product development.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Founders & Product</h3>
            <p className="mt-2 text-slate-600">
              Build privacy into your roadmap without slowing down delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section py-16">
        <h2 className="h2">What teams say</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <figure className="card p-6">
            <blockquote className="text-slate-700">
              “Clear, practical, and immediately useful. Our engineers finally know
              what to do without hand-holding.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              — VP Engineering, SaaS
            </figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-slate-700">
              “They turned our privacy program into a growth enabler. Audits are
              smoother and we ship faster.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              — Head of Legal, Fintech
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-20">
        <div className="card p-8 text-center">
          <h2 className="h2">Ready to make privacy a superpower?</h2>
          <p className="p mt-2">
            Tell us about your team. We’ll propose a focused plan within 48 hours.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-700 transition"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
