export const metadata = {
  title: "Terms of Service | Privacy Intelligence Academy",
  description: "The terms that govern your use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 space-y-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="leading-7">
        By using this site, you agree to follow these terms and applicable laws.
        This site and its content are provided “as-is” without warranties. Contact us
        with any questions.
      </p>
      <p className="text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}
