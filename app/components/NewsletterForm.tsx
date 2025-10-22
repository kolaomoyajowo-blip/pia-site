// app/components/Newsletter.tsx
import NewsletterForm from "./NewsletterForm";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white/60 p-8 shadow-sm backdrop-blur">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium tracking-wide text-blue-700 uppercase">
          Subscribe
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Privacy Patterns — monthly, practical, no spam
        </h2>
        <p className="mt-2 text-gray-600">
          Get templates, playbooks, and real-world lessons on privacy, security, and AI
          governance. Unsubscribe anytime.
        </p>
      </div>

      {/* No props passed here (especially no onSubmit). */}
      <NewsletterForm />
      
      <p className="mt-3 text-center text-xs text-gray-500">
        By subscribing, you agree to receive emails from PIA. Unsubscribe anytime.
      </p>
    </section>
  );
}
