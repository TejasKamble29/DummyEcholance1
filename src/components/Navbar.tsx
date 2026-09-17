import React, { useState, useEffect } from "react";
import { ConcentricLogo } from "./ConcentricLogo";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-8 md:px-20 py-4 ${
        scrolled ? "backdrop-blur-md bg-black/50 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-8 lg:gap-12">
          <a href="#hero" className="focus:outline-none focus:ring-1 focus:ring-ring rounded-md">
            <ConcentricLogo size="md" />
          </a>

          <nav className="hidden lg:flex items-center gap-3 text-sm font-medium text-muted-foreground">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-foreground focus:outline-none focus:text-foreground"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-white/20 select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right: Quick Action CTA & Social Links */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <a
            href="#contact"
            className="liquid-glass inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground px-4 py-2 rounded-full border border-white/20 transition-all duration-200 hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 liquid-glass rounded-2xl p-6 bg-black/95 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-1 font-medium"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 bg-foreground text-background font-semibold text-sm rounded-full py-3 flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
