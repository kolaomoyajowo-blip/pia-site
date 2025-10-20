export const metadata = {
  title: "Contact | Privacy Intelligence Academy",
  description:
    "Get in touch to ask a question or discuss training for your team.",
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg leading-7 mb-6">
        Email us at <a className="underline" href="mailto:hello@privacyintelligenceacademy.org">
          hello@privacyintelligenceacademy.org
        </a>
      </p>
      <p className="text-lg leading-7">
        Tell us about your team, goals, and timeline — we’ll reply shortly.
      </p>
    </section>
  );
}
