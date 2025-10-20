export const metadata = {
  title: "Privacy Policy | Privacy Intelligence Academy",
  description:
    "How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().getFullYear()}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Overview</h2>
      <p className="leading-7">
        We collect minimal data to operate this site, improve content, and respond to inquiries.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Data we collect</h2>
      <ul className="list-disc pl-6 leading-7">
        <li>Basic analytics (page views, referrers, approximate location).</li>
        <li>Contact details you voluntarily submit (name, email, message).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Your choices</h2>
      <p className="leading-7">
        You may request access or deletion of your data by emailing{" "}
        <a className="underline" href="mailto:privacy@privacyintelligenceacademy.org">
          privacy@privacyintelligenceacademy.org
        </a>.
      </p>
    </section>
  );
}
