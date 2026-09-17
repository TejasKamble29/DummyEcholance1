import React from "react";
import { ConcentricLogo } from "./ConcentricLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12 px-6 sm:px-8 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Branding & Description */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ConcentricLogo size="sm" showText={true} />
          <p className="text-white/60 text-sm">
            © 2026 Echolance. Professional Web Development Agency.
          </p>
        </div>

        {/* Right Side: Essential Navigation Links ONLY */}
        <nav
          aria-label="Footer Navigation"
          className="flex items-center gap-6 text-sm font-semibold"
        >
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded px-1"
          >
            Privacy
          </a>
          <span className="text-white/20 select-none">•</span>
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded px-1"
          >
            Terms
          </a>
          <span className="text-white/20 select-none">•</span>
          <a
            href="#contact"
            className="text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 rounded px-1"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
