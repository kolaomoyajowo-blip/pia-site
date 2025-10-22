// app/components/Newsletter.tsx
import NewsletterForm from './NewsletterForm';

export default function Newsletter() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            Subscribe to Privacy Patterns
          </h2>
          <p className="mt-2 text-gray-600">
            Once a month. No spam. Practical templates and what actually works.
          </p>
        </div>

        {/* Client form handles its own onSubmit internally */}
        <NewsletterForm />

        <p className="mt-3 text-xs text-gray-500">
          By subscribing, you agree to receive emails from PIA. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
