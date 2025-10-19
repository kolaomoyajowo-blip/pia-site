export const metadata = {
  title: "Privacy Policy | Privacy Intelligence Academy",
  description: "How we collect, use, and protect personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 space-y-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="leading-7">
        We collect only what’s necessary to provide our services, improve content, and
        respond to inquiries. We do not sell personal data. Contact us if you have
        questions about this policy.
      </p>
      <p className="text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}
