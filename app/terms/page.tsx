export const metadata = {
  title: "Terms of Use | Privacy Intelligence Academy",
  description:
    "Terms and conditions for using this website and our content.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().getFullYear()}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Acceptance of Terms</h2>
      <p className="leading-7">
        By accessing this website, you agree to these terms and any applicable policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Use of Content</h2>
      <p className="leading-7">
        Content is for educational purposes only and does not constitute legal advice.
      </p>
    </section>
  );
}
