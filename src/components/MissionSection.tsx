import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollWordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
}

const ScrollWord: React.FC<ScrollWordProps> = ({
  children,
  progress,
  range,
  isHighlighted = false,
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{
        opacity,
        color: isHighlighted ? "hsl(var(--foreground))" : "hsl(var(--hero-subtitle))",
      }}
      className={`inline-block mr-[0.3em] last:mr-0 transition-colors duration-200 ${
        isHighlighted ? "font-semibold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" : ""
      }`}
    >
      {children}
    </motion.span>
  );
};

export const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const paragraph1Text =
    "At Echolance, we believe great web development balances engineering precision with design clarity — helping businesses establish meaningful, high-performance digital presence.";
  const paragraph2Text =
    "We build modern, responsive, and user-friendly digital experiences that turn complex business ideas into seamless websites and scalable web applications.";

  const words1 = paragraph1Text.split(" ");
  const words2 = paragraph2Text.split(" ");
  const totalWords = words1.length + words2.length;

  const highlightedWords = new Set(["echolance", "precision", "clarity", "modern", "responsive", "user-friendly"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full pt-16 pb-32 md:pb-44 overflow-hidden bg-black"
    >
      {/* Full-width continuous subtle background visual treatment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Ambient Halo behind Video */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_65%)]" />

        {/* Visible Fine Grid Texture with linear vertical fade */}
        <div className="absolute inset-0 bg-grid-subtle opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

        {/* Ambient Glow behind Scroll Typography */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center relative z-10">
        <motion.span
          {...fadeUp(0.05)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-8 inline-block px-3.5 py-1 rounded-full liquid-glass"
        >
          ABOUT ECHOLANCE
        </motion.span>

        {/* Centered 800x800 Looping Video */}
        <motion.div
          {...fadeUp(0.1)}
          className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden liquid-glass border border-white/10 mb-20 shadow-2xl relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </motion.div>

        {/* Scroll-Driven About Typography Content */}
        <div className="max-w-4xl text-center leading-relaxed select-none">
          {/* Paragraph 1 */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.25]">
            {words1.map((word, i) => {
              const cleanWord = word.replace(/[—.,]/g, "").toLowerCase();
              const isHighlighted = highlightedWords.has(cleanWord);
              const start = i / totalWords;
              const end = (i + 1) / totalWords;

              return (
                <ScrollWord
                  key={`p1-${i}-${word}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlighted={isHighlighted}
                >
                  {word}
                </ScrollWord>
              );
            })}
          </p>

          {/* Paragraph 2 */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-[1.4] text-muted-foreground">
            {words2.map((word, i) => {
              const globalIndex = words1.length + i;
              const start = globalIndex / totalWords;
              const end = (globalIndex + 1) / totalWords;

              return (
                <ScrollWord
                  key={`p2-${i}-${word}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlighted={false}
                >
                  {word}
                </ScrollWord>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
