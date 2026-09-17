import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import {
  MessageSquare,
  FileCode,
  LayoutTemplate,
  Terminal,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discuss",
    description:
      "We begin with a discovery dialogue to understand your business goals, target audience, technical scope, and design preferences.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We outline detailed technical architecture, sitemap hierarchy, technology stack selection, and milestone delivery roadmaps.",
    icon: FileCode,
  },
  {
    step: "03",
    title: "Design",
    description:
      "We craft intuitive UI/UX wireframes and high-fidelity prototypes focusing on clarity, typography, and seamless user journeys.",
    icon: LayoutTemplate,
  },
  {
    step: "04",
    title: "Develop",
    description:
      "We engineer clean, modular, and performant code using modern TypeScript, responsive styling, and robust API integrations.",
    icon: Terminal,
  },
  {
    step: "05",
    title: "Test",
    description:
      "Rigorous quality assurance across screen sizes, modern browsers, accessibility standards, load speed, and edge cases.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    description:
      "Zero-downtime deployment, DNS configuration, search engine indexing verification, performance monitoring, and smooth handoff.",
    icon: Rocket,
  },
];

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full py-32 md:py-44 border-t border-white/10 overflow-hidden bg-black"
    >
      {/* Full-width continuous subtle background visual treatment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Top Centered Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,transparent_70%)]" />

        {/* Visible Dots Matrix Texture across full width */}
        <div className="absolute inset-0 bg-dots-subtle opacity-55 [mask-image:radial-gradient(ellipse_85%_65%_at_50%_50%,black_30%,transparent_90%)]" />

        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_75%)]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          {/* Label */}
          <motion.span
            {...fadeUp(0.05)}
            className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-4 px-3.5 py-1 rounded-full liquid-glass"
          >
            HOW WE WORK
          </motion.span>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-medium tracking-tight text-foreground max-w-3xl leading-[1.15] mb-6"
          >
            Our Web Development <span className="font-serif italic font-normal text-white">Process</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A transparent, disciplined approach to bringing your digital vision from initial concept to launch-ready web reality.
          </motion.p>
        </div>

        {/* 6-step process grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                {...fadeUp(0.2 + idx * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="liquid-glass rounded-3xl p-8 flex flex-col justify-between text-left border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-sm font-semibold text-white/40 tracking-wider">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-xl text-foreground mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
