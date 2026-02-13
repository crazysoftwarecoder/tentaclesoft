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
      </div>
    </section>
  );
}
