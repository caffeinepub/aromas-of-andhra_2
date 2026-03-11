import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

interface ContactSectionProps {
  phone: string;
  address: string;
  mapUrl: string;
}

export default function ContactSection({
  phone,
  address,
  mapUrl,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.14 0.025 35)" }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.75 0.19 72), oklch(0.52 0.24 25), oklch(0.78 0.18 85), oklch(0.52 0.24 25), oklch(0.75 0.19 72))",
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
            style={{ color: "oklch(0.75 0.19 72)" }}
          >
            Reach Us
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold"
            style={{ color: "white" }}
          >
            Contact Us
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.19 72), oklch(0.52 0.24 25))",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Phone Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "oklch(0.2 0.03 35)",
                border: "1px solid oklch(0.28 0.04 35)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.75 0.19 72 / 0.2), oklch(0.68 0.19 68 / 0.1))",
                    border: "1px solid oklch(0.75 0.19 72 / 0.3)",
                  }}
                >
                  <Phone size={22} style={{ color: "oklch(0.75 0.19 72)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-cabinet text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "oklch(0.6 0.04 60)" }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${phone}`}
                    data-ocid="contact.phone.link"
                    className="font-display text-2xl font-bold transition-colors hover:underline block"
                    style={{ color: "white" }}
                  >
                    {phone}
                  </a>
                  <p
                    className="font-sans text-sm mt-1"
                    style={{ color: "oklch(0.6 0.04 60)" }}
                  >
                    Call us to book a table or for any enquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "oklch(0.2 0.03 35)",
                border: "1px solid oklch(0.28 0.04 35)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.52 0.24 25 / 0.2), oklch(0.45 0.2 25 / 0.1))",
                    border: "1px solid oklch(0.52 0.24 25 / 0.3)",
                  }}
                >
                  <MapPin size={22} style={{ color: "oklch(0.65 0.2 25)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-cabinet text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "oklch(0.6 0.04 60)" }}
                  >
                    Address
                  </p>
                  <p
                    className="font-sans text-base leading-relaxed mb-3"
                    style={{ color: "white" }}
                  >
                    {address}
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.map.link"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-cabinet font-bold text-sm transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "oklch(0.52 0.24 25)",
                      color: "white",
                    }}
                  >
                    <MapPin size={14} />
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "oklch(0.2 0.03 35)",
                border: "1px solid oklch(0.28 0.04 35)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.6 0.12 185 / 0.2), oklch(0.55 0.1 185 / 0.1))",
                    border: "1px solid oklch(0.6 0.12 185 / 0.3)",
                  }}
                >
                  <Clock size={22} style={{ color: "oklch(0.6 0.12 185)" }} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-cabinet text-sm font-bold uppercase tracking-wider mb-2"
                    style={{ color: "oklch(0.6 0.04 60)" }}
                  >
                    Hours
                  </p>
                  <div className="space-y-1">
                    {[
                      { day: "Mon – Fri", time: "11:00 AM – 10:30 PM" },
                      { day: "Sat – Sun", time: "11:00 AM – 11:00 PM" },
                    ].map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between items-center gap-4"
                      >
                        <span
                          className="font-cabinet text-sm font-semibold"
                          style={{ color: "oklch(0.75 0.03 60)" }}
                        >
                          {h.day}
                        </span>
                        <span
                          className="font-sans text-sm"
                          style={{ color: "white" }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.28 0.04 35)",
              minHeight: "360px",
            }}
          >
            {/* Styled map placeholder with Google Maps embed */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "66.67%", minHeight: "360px" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Aromas+of+andhra,+25-5-13,+R.R.Pet+Main+Road,+Powerpet,+Eluru,+Andhra+Pradesh+534002&output=embed"
                title="Aromas of Andhra Location"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "sepia(0.2) saturate(1.1)" }}
              />
            </div>
            {/* Map footer */}
            <div
              className="p-4 flex items-center justify-between"
              style={{ backgroundColor: "oklch(0.2 0.03 35)" }}
            >
              <div>
                <p
                  className="font-cabinet font-bold text-sm"
                  style={{ color: "white" }}
                >
                  Aromas of Andhra
                </p>
                <p
                  className="font-sans text-xs"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  Powerpet, Eluru, AP 534002
                </p>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-cabinet font-bold transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.75 0.19 72)",
                  color: "oklch(0.12 0.02 40)",
                }}
              >
                Open in Maps
                <ExternalLink size={10} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
