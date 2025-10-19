export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Intelligence Academy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Practical training for lawyers, compliance teams, and founders on
            turning privacy data into decisions.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Contact us
            </a>
            <a
              href="#courses"
              className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
            >
              Explore courses
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Short, applied courses on privacy fundamentals, DPIAs, vendor risk,
          and building privacy-by-design processes.
        </p>
      </section>

      {/* Consulting */}
      <section id="consulting" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Consulting</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Fractional DPO, program reviews, and practical playbooks for startups
          and legal teams.
        </p>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Resources</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Checklists, templates, and how-to guides to put privacy into motion.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Tell us what you’re building and where privacy needs to help.
        </p>
        <a
          href="mailto:hello@privacyintelligenceacademy.org"
          className="mt-6 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          hello@privacyintelligenceacademy.org
        </a>
      </section>
    </>
  );
}
