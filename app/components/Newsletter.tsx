"use client";

export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Privacy Patterns — monthly
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-gray-700">
          Practical patterns for privacy, cyber, and AI governance — straight to your inbox.
        </p>

        <form
          className="mt-6 flex max-w-xl gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Check your inbox for a confirmation link.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
