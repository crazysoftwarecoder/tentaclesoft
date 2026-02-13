export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/tentacle_logo.png" alt="Tentacle Software" className="w-8 h-8 rounded-lg" />
            <span className="text-sm font-semibold tracking-tight">
              Tentacle <span className="text-brand-400">Software</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#services" className="hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Tentacle Software. Sydney,
            Australia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
