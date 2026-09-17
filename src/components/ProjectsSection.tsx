import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ArrowUpRight, Code, Layers, LayoutGrid, Cpu } from "lucide-react";

const projects = [
  {
    title: "SaaS Application Platform",
    category: "Web Application",
    description:
      "A modular, responsive web app interface featuring real-time data visualizers, state synchronization, dynamic role-based permissions, and accessible dark mode UI.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    icon: Cpu,
  },
  {
    title: "Corporate Business Portal",
    category: "Business Website",
    description:
      "A modern corporate web presence built for high conversion, structured typography, responsive cross-device fidelity, and optimal SEO score performance.",
    tags: ["Next.js", "Responsive Design", "SEO Architecture", "Framer Motion"],
    icon: LayoutGrid,
  },
  {
    title: "Modern E-Commerce Experience",
    category: "E-Commerce",
    description:
      "A streamlined online storefront featuring rapid catalog filtering, performant checkout flow, and custom micro-interactions tailored for high transaction speed.",
    tags: ["Web Engineering", "Component System", "Performance Optimization"],
    icon: Layers,
  },
  {
    title: "Interactive Client Dashboard",
    category: "Frontend System",
    description:
      "A high-density analytics portal designed for multi-tier user workflows, dynamic filter engines, and clean responsive data tables.",
    tags: ["TypeScript", "UI/UX Architecture", "Data Visualization"],
    icon: Code,
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative isolate w-full py-32 md:py-44 border-t border-white/10 overflow-hidden bg-black"
    >
      {/* Full-width continuous subtle background visual treatment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Top Centered Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,transparent_70%)]" />

        {/* Visible Dots Matrix Texture across full width */}
        <div className="absolute inset-0 bg-dots-subtle opacity-55 [mask-image:radial-gradient(ellipse_85%_65%_at_50%_50%,black_30%,transparent_90%)]" />

        {/* Ambient Glow behind Cards */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_75%)]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            {...fadeUp(0.05)}
            className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-4 px-3.5 py-1 rounded-full liquid-glass"
          >
            FEATURED WORK
          </motion.span>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-medium tracking-tight text-foreground max-w-3xl leading-[1.15] mb-6"
          >
            Recent <span className="font-serif italic font-normal text-white">Project Archetypes</span> & Builds
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore archetypes of websites and custom web applications engineered with precision, responsive performance, and user-centric architecture.
          </motion.p>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                {...fadeUp(0.2 + idx * 0.1)}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="liquid-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between text-left border border-white/10 transition-all duration-300 hover:border-white/25 hover:shadow-2xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-white/60 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-2xl text-foreground mb-4 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground px-2.5 py-1 rounded-md bg-black/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground hover:text-white transition-colors pt-4 border-t border-white/10 w-full justify-between"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
