export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-700/5 rounded-full blur-[200px]" />
      </div>

      {/* Sydney map background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/sydney.png"
          alt=""
          className="w-full h-full object-cover opacity-20 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950/80" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Sydney, Australia &middot; Elite Software Consulting
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
          We build software
          <br />
          <span className="gradient-text">that scales.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          From high-performance platforms to AI-driven automation, we partner
          with ambitious teams to ship world-class software and accelerate
          engineering excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/ashyferny/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-brand-600/25 hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-lg transition-all border border-white/10 hover:border-white/20"
          >
            See What We Do
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
