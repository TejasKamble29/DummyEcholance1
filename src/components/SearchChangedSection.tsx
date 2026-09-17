import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import {
  Globe,
  Palette,
  Smartphone,
  Briefcase,
  Code2,
  Layout,
  Server,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, high-speed websites engineered with clean architecture, modern standards, and scalable codebases.",
    icon: Globe,
  },
  {
    title: "Web Design",
    description:
      "Intuitive UI/UX design with refined typography, balanced layouts, and conversion-focused aesthetic clarity.",
    icon: Palette,
  },
  {
    title: "Responsive Development",
    description:
      "Fluid, pixel-perfect digital experiences meticulously optimized for desktops, tablets, and smartphones.",
    icon: Smartphone,
  },
  {
    title: "Business Websites",
    description:
      "Professional online presences designed to communicate credibility, engage clients, and drive business growth.",
    icon: Briefcase,
  },
  {
    title: "Web Applications",
    description:
      "Interactive, full-featured web applications and platforms built with modern TypeScript and component systems.",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    description:
      "Performant client-side engineering featuring smooth micro-interactions, accessibility, and high visual polish.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description:
      "Secure API integration, efficient database architecture, and reliable server-side infrastructure.",
    icon: Server,
  },
  {
    title: "Website Maintenance",
    description:
      "Continuous technical maintenance, security patches, performance tuning, and ongoing feature enhancements.",
    icon: Wrench,
  },
];

export const SearchChangedSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative isolate w-full pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-black"
    >
      {/* Full-width continuous subtle background visual treatment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Continuous top radial glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_75%)]" />

        {/* Visible fine dot matrix pattern across full width */}
        <div className="absolute inset-0 bg-dots-subtle opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_30%,transparent_90%)]" />

        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-grid-subtle opacity-45 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_20%,transparent_85%)]" />

        {/* Concentric ambient accent circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.08] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full border border-white/[0.04] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            {...fadeUp(0.05)}
            className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-4 inline-block px-3.5 py-1 rounded-full liquid-glass"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px] text-foreground mb-6 leading-[1.08]"
          >
            Tailored <span className="font-serif italic font-normal text-white">Web Solutions</span> for Every Stage
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            From bespoke corporate websites to complex interactive web platforms, Echolance delivers complete end-to-end web development services.
          </motion.p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp(0.15 + (idx % 4) * 0.08)}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="liquid-glass rounded-3xl p-7 flex flex-col justify-between text-left group transition-all duration-300 hover:shadow-2xl hover:border-white/20 border border-white/10"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white/70 hover:text-white transition-colors duration-200 mt-auto pt-4 border-t border-white/5"
                >
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-muted-foreground text-xs md:text-sm tracking-widest text-center uppercase"
        >
          Engineered for performance, built for longevity.
        </motion.p>
      </div>
    </section>
  );
};
