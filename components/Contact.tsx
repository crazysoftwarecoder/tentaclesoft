export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
          Get Started
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to build
          <br />
          <span className="gradient-text">something great?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Book a free 30-minute consultation. We&apos;ll discuss your goals,
          explore how we can help, and see if there&apos;s a great fit. No
          strings attached.
        </p>

        <a
          href="https://calendly.com/ashyferny/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-brand-600/25 hover:-translate-y-0.5"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          Book a Free Consultation
        </a>

        <p className="mt-6 text-gray-500 text-sm">
          30-minute video call &middot; No commitment &middot; Actionable
          insights guaranteed
        </p>
      </div>
    </section>
  );
}
