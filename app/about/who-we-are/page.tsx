export const metadata = {
  title: "Who we are | Privacy Intelligence Academy",
  description:
    "Learn who we are at Privacy Intelligence Academy (PIA)—an internationally recognized think tank and professional hub advancing privacy, cybersecurity, and AI governance.",
};

export default function Page() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:underline">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/about" className="hover:underline">About</a>
          <span aria-hidden="true"> / </span>
          <span className="text-gray-700">Who we are</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            About Privacy Intelligence Academy
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            We are an internationally recognized think tank and professional hub
            advancing responsible innovation across privacy, cybersecurity, and AI governance.
          </p>
        </header>

        {/* Body */}
        <div className="prose prose-slate max-w-none">
          <p>
            Privacy Intelligence Academy (PIA) is an internationally recognized think tank of
            leading experts and experienced professionals in emerging technologies. Our members
            are seasoned and skilled in managing, administering, and tackling the arising privacy
            risks, governance risks, cybersecurity risks, policy issues, and associated legal
            exposures that accompany technological innovations such as artificial intelligence and
            other emerging technologies.
          </p>

          <p>
            PIA hosts leading experts and professionals from across the globe and draws its
            members from diverse skilled professionals, ranging from tech attorneys, policy
            regulators, cybersecurity experts, data privacy experts, information-management
            professionals, AI/ML experts, AI governance experts, project managers, data analysts,
            and database managers. This cross-disciplinary strength enables us to translate
            complex technology questions into practical legal, policy, and engineering solutions.
          </p>

          <p>
            PIA is that global hub for innovative research and creative ideas for tackling
            contemporary and emerging problems and issues in the technology marketplace—
            including the vulnerability of data security, the proliferation of large language
            models, the development of artificial intelligence and its marketplace applications
            (such as AI in Law), and more. We examine real-world systems, generate
            evidence-based guidance, and help organizations operationalize trustworthy practices
            at scale.
          </p>

          <p>
            While transforming the tech market with innovative solutions and creative ideas,
            PIA is also committed to the global equitable distribution of opportunities through
            its annual global fellowship program. The fellowship brings together talents from all
            continents and regions of the world to hone their skills and develop practical
            experience in varying areas by exposing them to marketplace practical problems to be
            solved, administered by world-class experts as faculty, and paired with exposure to
            career-enabling opportunities worldwide.
          </p>

          <p>
            To expand impact and accelerate adoption, Privacy Intelligence Academy partners with
            leading technology companies such as Amazon, Uber, Apple, Yahoo, Google, OpenAI,
            Samsung, PayPal, JPMorgan, Meta, and innovative tech startups, among others. These
            collaborations help us validate approaches in production environments and ensure our
            recommendations are both principled and implementable.
          </p>

          <p>
            Privacy Intelligence Academy is both a professional association and a hub that houses
            diverse professionals to tackle contemporary problems in the tech place, particularly
            privacy issues and AI-related problems. Leading tech companies look up to PIA for
            solutions for current and emerging problems and for creative ideas to advance
            technological development, and PIA is one of the leading corporate thought leaders
            for Tech, Data, and AI policy formation.
          </p>
        </div>

        {/* Next actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/about"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Back to About
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
