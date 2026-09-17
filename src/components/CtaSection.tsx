import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ConcentricLogo } from "./ConcentricLogo";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const projectTypes = [
  "Website Development",
  "Web Application",
  "Web Design & UI/UX",
  "Business Website",
  "Frontend / Backend",
  "Website Maintenance",
];

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Website Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please describe your project or requirements.");
      return;
    }

    setStatus("submitting");

    // Frontend interaction simulation
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Website Development",
        message: "",
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 md:py-44 border-t border-white/10 overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Subtle ambient monochrome background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Central ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

        {/* Subtle dot matrix pattern */}
        <div className="absolute inset-0 bg-dots-subtle opacity-45 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_25%,transparent_85%)]" />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-grid-subtle opacity-35 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_20%,transparent_80%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Header Branding */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <ConcentricLogo size="lg" showText={false} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.15)}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-4 text-center"
        >
          Start Your <span className="font-serif italic font-normal text-white">Project</span> With Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-14 text-center leading-relaxed font-normal"
        >
          Have a website or web application in mind? Tell us about your project requirements and we will be in touch with you.
        </motion.p>

        {/* Contact Form Card */}
        <motion.div
          {...fadeUp(0.25)}
          className="w-full max-w-2xl liquid-glass rounded-3xl p-8 md:p-12 border border-white/15 shadow-2xl backdrop-blur-xl"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Inquiry Received
              </h3>
              <p className="text-muted-foreground text-base max-w-md mb-8 leading-relaxed">
                Thank you for reaching out to Echolance. We have received your project details and will review your inquiry.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="liquid-glass text-xs uppercase tracking-wider font-semibold text-foreground px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Email Address <span className="text-white">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone (Optional) & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Phone <span className="text-white/40">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="projectType" className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Project Type <span className="text-white">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-black text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-medium text-white/70">
                  Project Details <span className="text-white">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project goals, timelines, and specific requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all resize-none"
                />
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-2 text-xs text-red-400 bg-red-950/40 border border-red-800/50 p-3 rounded-lg text-left"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold text-sm rounded-xl py-4 transition-all duration-200 hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99] shadow-xl disabled:opacity-50 cursor-pointer mt-2"
              >
                {status === "submitting" ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
