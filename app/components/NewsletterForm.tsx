"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-4 flex max-w-md gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks! Check your inbox for a confirmation link.");
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
      >
        Subscribe
      </button>
    </form>
  );
}
