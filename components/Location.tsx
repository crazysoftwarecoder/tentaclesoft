export default function Location() {
  return (
    <section id="location" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
          Our Location
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Based in{" "}
          <span className="gradient-text">Sydney, Australia</span>
        </h2>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            We&apos;re located in Sydney, Australia and are always happy to meet
            in person. Whether you want to chat over coffee, workshop ideas at
            your office, or simply prefer face-to-face conversations,
            we&apos;re available anytime.
          </p>
          <p>
            For US-based teams, we have extensive experience working with
            distributed teams across Pacific and Eastern timezones, with
            flexible overlap hours to keep projects moving.
          </p>
        </div>

        <div className="mt-12 glass-card p-8 inline-flex items-center gap-4">
          <svg
            className="w-8 h-8 text-brand-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="text-gray-300 font-medium text-lg">
            Sydney, NSW &middot; Available for in-person meetings anytime
          </span>
        </div>

        <div className="mt-4 glass-card p-8 inline-flex items-center gap-4">
          <svg
            className="w-8 h-8 text-brand-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span className="text-gray-300 font-medium text-lg">
            US timezone overlap &middot; Experienced with distributed teams
          </span>
        </div>
      </div>
    </section>
  );
}
