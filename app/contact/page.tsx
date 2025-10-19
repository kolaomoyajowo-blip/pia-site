export const metadata = {
  title: "Contact | Privacy Intelligence Academy",
  description: "Get in touch with Privacy Intelligence Academy.",
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="leading-7 mb-6">
        Tell us what you’re working on and what you’d like help with.
      </p>

      {/* Replace the action URL with your Formspree endpoint when you have one */}
      <form
        className="space-y-4"
        method="post"
        action="https://formspree.io/f/your-id-here"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
        >
          Send
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        Prefer email? Write us at{" "}
        <a className="underline" href="mailto:hello@privacyintelligenceacademy.org">
          hello@privacyintelligenceacademy.org
        </a>.
      </p>
    </section>
  );
}
