import { motion } from "motion/react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/assets/generated/hero-biryani.dim_1600x900.jpg",
    alt: "Andhra Biryani",
    caption: "Andhra Biryani",
  },
  {
    src: "/assets/generated/gallery-food-spread.dim_800x600.jpg",
    alt: "Andhra Food Spread",
    caption: "Andhra Food Spread",
  },
  {
    src: "/assets/generated/gallery-chicken65.dim_800x600.jpg",
    alt: "Bandi Style Chicken 65",
    caption: "Bandi Style Chicken 65",
  },
  {
    src: "/assets/generated/gallery-restaurant-interior.dim_800x600.jpg",
    alt: "Restaurant Interior",
    caption: "Restaurant Interior",
  },
  {
    src: "/assets/generated/gallery-mutton-biryani.dim_800x600.jpg",
    alt: "Mutton Shahi Biryani",
    caption: "Mutton Shahi Biryani",
  },
  {
    src: "/assets/generated/gallery-andhra-thali.dim_800x600.jpg",
    alt: "Andhra Thali",
    caption: "Andhra Thali",
  },
  {
    src: "/assets/generated/gallery-prawns-curry.dim_800x600.jpg",
    alt: "Prawns Curry",
    caption: "Prawns Malai Curry",
  },
  {
    src: "/assets/generated/gallery-gongura-mutton.dim_800x600.jpg",
    alt: "Gongura Mutton",
    caption: "Gongura Mutton",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.97 0.012 80)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, oklch(0.52 0.24 25) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="font-cabinet text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 block"
            style={{ color: "oklch(0.52 0.24 25)" }}
          >
            Visual Journey
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold section-title-decor"
            style={{ color: "oklch(0.18 0.03 40)" }}
          >
            Our Gallery
          </h2>
          <p
            className="font-sans text-base sm:text-lg mt-4 max-w-xl mx-auto"
            style={{ color: "oklch(0.4 0.02 50)" }}
          >
            A feast for the eyes — glimpses of our food, ambiance, and the
            Aromas of Andhra experience
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              data-ocid={`gallery.item.${index + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="gallery-item relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ minHeight: "220px", maxWidth: "100%" }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.12 0.04 35 / 0.9) 0%, oklch(0.12 0.04 35 / 0.4) 60%, transparent 100%)",
                }}
              />

              {/* Caption */}
              <div className="gallery-caption absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="font-display font-bold text-lg text-white"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {image.caption}
                </p>
                <div
                  className="w-10 h-0.5 mt-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.75 0.19 72), oklch(0.52 0.24 25))",
                  }}
                />
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "oklch(0.75 0.19 72 / 0.9)" }}
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                  fill="oklch(0.12 0.02 40)"
                  aria-hidden="true"
                >
                  <path d="M8 2l1.5 3h3.5l-2.8 2.1 1.1 3.4L8 8.7l-3.3 1.8 1.1-3.4L3 5h3.5z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ornamental strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.75 0.19 72 / 0.5))",
            }}
          />
          <div className="flex gap-2">
            {[
              "oklch(0.75 0.19 72)",
              "oklch(0.52 0.24 25)",
              "oklch(0.78 0.18 85)",
            ].map((c) => (
              <div
                key={c}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, oklch(0.75 0.19 72 / 0.5))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
