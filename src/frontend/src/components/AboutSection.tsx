import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.97 0.012 80)" }}
    >
      {/* Decorative background element */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.19 72), transparent)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.52 0.24 25), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="font-cabinet text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 block"
            style={{ color: "oklch(0.52 0.24 25)" }}
          >
            Our Story
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold section-title-decor"
            style={{ color: "oklch(0.18 0.03 40)" }}
          >
            About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Highlighted tagline */}
            <blockquote
              className="font-heading text-2xl sm:text-3xl italic font-bold leading-relaxed mb-6 relative pl-6"
              style={{ color: "oklch(0.68 0.19 68)" }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.75 0.19 72), oklch(0.52 0.24 25))",
                }}
              />
              "Where every plate tells a story of Andhra."
            </blockquote>

            {/* Body text */}
            <p
              className="font-sans text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: "oklch(0.35 0.02 40)" }}
            >
              Aromas of Andhra brings iconic Andhra flavors to life with a warm,
              inviting dining space. Our menu fuses heritage recipes with modern
              presentation, using fresh, locally sourced ingredients.
            </p>
            <p
              className="font-sans text-base sm:text-lg leading-relaxed"
              style={{ color: "oklch(0.35 0.02 40)" }}
            >
              Join us for flavorful meals inspired by home kitchens, crafted
              with care, and served with hospitality.
            </p>

            {/* Decorative spice stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "100+", label: "Menu Items" },
                { value: "Fresh", label: "Daily Ingredients" },
                { value: "Heritage", label: "Recipes" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl"
                  style={{
                    backgroundColor: "oklch(0.94 0.02 75)",
                    border: "1px solid oklch(0.88 0.025 75)",
                  }}
                >
                  <div
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.52 0.24 25)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-cabinet text-xs font-semibold tracking-wide uppercase mt-1"
                    style={{ color: "oklch(0.5 0.03 60)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Food Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative frame */}
            <div
              className="absolute -inset-4 rounded-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.19 72 / 0.3), oklch(0.52 0.24 25 / 0.2))",
                transform: "rotate(2deg)",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/gallery-andhra-thali.dim_800x600.jpg"
                alt="Andhra Thali"
                className="w-full h-auto max-w-full object-cover"
                loading="lazy"
              />
              {/* Image overlay badge */}
              <div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-full font-cabinet text-sm font-bold"
                style={{
                  backgroundColor: "oklch(0.52 0.24 25)",
                  color: "white",
                }}
              >
                Authentic Andhra Thali
              </div>
            </div>

            {/* Floating spice accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 opacity-40 pointer-events-none"
            >
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full"
                aria-hidden="true"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke="oklch(0.75 0.19 72)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="30" cy="30" r="4" fill="oklch(0.75 0.19 72)" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
