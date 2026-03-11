import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  restaurantName: string;
  tagline: string;
  zomatoUrl: string;
  scrollTo: (id: string) => void;
}

export default function HeroSection({
  restaurantName,
  tagline,
  zomatoUrl,
  scrollTo,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-biryani.dim_1600x900.jpg"
          alt="Andhra Biryani"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient overlay for rich depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.18 0.03 40 / 0.85) 0%, oklch(0.22 0.08 30 / 0.75) 50%, oklch(0.12 0.05 35 / 0.9) 100%)",
          }}
        />
        {/* Bottom fade for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, oklch(0.15 0.03 40 / 0.6), transparent)",
          }}
        />
      </div>

      {/* Decorative kolam-inspired corner patterns */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="3" fill="oklch(0.75 0.19 72)" />
          <circle cx="30" cy="10" r="2" fill="oklch(0.75 0.19 72)" />
          <circle cx="10" cy="30" r="2" fill="oklch(0.75 0.19 72)" />
          <path
            d="M5 5 Q50 50 95 5"
            stroke="oklch(0.75 0.19 72)"
            strokeWidth="1"
          />
          <path
            d="M5 5 Q5 50 5 95"
            stroke="oklch(0.75 0.19 72)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none rotate-90">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="3" fill="oklch(0.75 0.19 72)" />
          <circle cx="30" cy="10" r="2" fill="oklch(0.75 0.19 72)" />
          <circle cx="10" cy="30" r="2" fill="oklch(0.75 0.19 72)" />
          <path
            d="M5 5 Q50 50 95 5"
            stroke="oklch(0.75 0.19 72)"
            strokeWidth="1"
          />
          <path
            d="M5 5 Q5 50 5 95"
            stroke="oklch(0.75 0.19 72)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Ornamental line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div
            className="h-px w-16 sm:w-24"
            style={{ background: "oklch(0.75 0.19 72 / 0.6)" }}
          />
          <span
            className="text-xs sm:text-sm font-cabinet font-bold tracking-[0.25em] uppercase"
            style={{ color: "oklch(0.75 0.19 72)" }}
          >
            Est. Eluru, Andhra Pradesh
          </span>
          <div
            className="h-px w-16 sm:w-24"
            style={{ background: "oklch(0.75 0.19 72 / 0.6)" }}
          />
        </motion.div>

        {/* Restaurant Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-4"
        >
          {restaurantName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading italic text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed"
          style={{ color: "oklch(0.85 0.12 75)" }}
        >
          "{tagline}"
        </motion.p>

        {/* Decorative spice dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[
            { color: "oklch(0.75 0.19 72)", id: "dot-1" },
            { color: "oklch(0.52 0.24 25)", id: "dot-2" },
            { color: "oklch(0.78 0.18 85)", id: "dot-3" },
            { color: "oklch(0.52 0.24 25)", id: "dot-4" },
            { color: "oklch(0.75 0.19 72)", id: "dot-5" },
          ].map(({ color, id }) => (
            <div
              key={id}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            type="button"
            data-ocid="hero.menu.button"
            onClick={() => scrollTo("menu")}
            className="w-full sm:w-auto px-8 py-4 text-base font-cabinet font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.75 0.19 72), oklch(0.68 0.19 68))",
              color: "oklch(0.12 0.02 40)",
              boxShadow: "0 4px 20px oklch(0.75 0.19 72 / 0.4)",
            }}
          >
            Explore Menu
          </button>
          <a
            href={zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.order.button"
            className="w-full sm:w-auto px-8 py-4 text-base font-cabinet font-bold rounded-full border-2 text-white transition-all duration-300 hover:scale-105 active:scale-95 text-center block"
            style={{
              borderColor: "oklch(0.52 0.24 25)",
              backgroundColor: "oklch(0.52 0.24 25 / 0.85)",
              boxShadow: "0 4px 20px oklch(0.52 0.24 25 / 0.3)",
            }}
          >
            Order Now on Zomato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-cabinet tracking-widest uppercase">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
