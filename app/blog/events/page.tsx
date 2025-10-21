export const metadata = {
  title: "AI & Data Security Events | PIA",
  description:
    "Global meetups, webinars, and clinics where practitioners turn policy into shipping controls.",
};

const upcoming = [
  "DPIA in 60 Minutes: From Policy to Product",
  "LLM Transparency Notes: Model Cards That Stakeholders Actually Read",
  "Cross-Border Data Flows: SCCs, TIAs, and Practical Evidence",
];

const filters = [
  "Format: Webinar, Clinic, Roundtable",
  "Level: Intro, Advanced",
  "Region",
  "Month",
];

export default function EventsLanding() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-900">
          AI &amp; Data Security Events
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-700">
          Global meetups, webinars, and clinics where practitioners turn policy into shipping controls.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Join expert briefings, hands-on labs, and roundtables with counsel, engineers, and policymakers.
          Most sessions include templates or checklists you can take back to your team.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/blog/events/calendar" className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">View Upcoming Events</a>
          <a href="/blog/events/recordings" className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">Watch Past Recordings</a>
          <a href="/blog/events/call-for-speakers" className="rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50">Propose a Session</a>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-900">Filters</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filters.map((f) => (
            <li key={f} className="rounded-xl border bg-white p-4 text-sm text-gray-800">{f}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-900">Featured Upcoming</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((u) => (
            <li key={u} className="rounded-xl border bg-white p-4 text-sm text-gray-800">{u}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
