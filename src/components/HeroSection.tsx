import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ArrowRight, Layers } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle darkening overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-[2] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-20 flex flex-col items-center text-center">
        {/* Badge / Pill */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 mb-8 liquid-glass px-4 py-1.5 rounded-full border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-muted-foreground text-xs md:text-sm font-medium tracking-wide uppercase">
            Web Development Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground mb-6 leading-[1.05]"
        >
          Engineering <span className="font-serif italic font-normal text-white">Modern Websites</span> & Applications
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          style={{ color: "hsl(var(--hero-subtitle))" }}
        >
          Echolance is a dedicated web development agency. We build bespoke, responsive websites and high-performance web applications tailored to elevate your business.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-foreground text-background font-semibold text-sm rounded-full px-8 py-4 transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="liquid-glass w-full sm:w-auto inline-flex items-center justify-center gap-2 text-foreground font-semibold text-sm rounded-full px-8 py-4 transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/20"
          >
            <Layers className="w-4 h-4 text-white/70" />
            <span>Explore Services</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
