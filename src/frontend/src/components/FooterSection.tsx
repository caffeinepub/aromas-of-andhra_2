import { Heart, MapPin, Phone } from "lucide-react";

interface FooterSectionProps {
  restaurantName: string;
  phone: string;
  address: string;
  scrollTo: (id: string) => void;
}

export default function FooterSection({
  restaurantName,
  phone,
  address,
  scrollTo,
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "oklch(0.1 0.02 35)" }}
      className="relative"
    >
      {/* Top decorative border */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.75 0.19 72), oklch(0.52 0.24 25), oklch(0.78 0.18 85), oklch(0.52 0.24 25), oklch(0.75 0.19 72))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-saffron/40">
                <img
                  src="/assets/generated/restaurant-logo-transparent.dim_300x300.png"
                  alt="Aromas of Andhra Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="font-display font-bold text-xl"
                style={{ color: "white" }}
              >
                {restaurantName}
              </span>
            </div>

            <p
              className="font-sans text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "oklch(0.55 0.03 60)" }}
            >
              Bringing iconic Andhra flavors to life with heritage recipes,
              modern presentation, and warm hospitality in the heart of Eluru.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 transition-colors group"
              >
                <Phone
                  size={14}
                  style={{ color: "oklch(0.75 0.19 72)" }}
                  className="flex-shrink-0"
                />
                <span
                  className="font-cabinet text-sm font-semibold group-hover:underline"
                  style={{ color: "oklch(0.8 0.03 60)" }}
                >
                  {phone}
                </span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin
                  size={14}
                  style={{ color: "oklch(0.65 0.2 25)" }}
                  className="flex-shrink-0 mt-0.5"
                />
                <span
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "oklch(0.55 0.03 60)" }}
                >
                  {address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-cabinet font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.75 0.19 72)" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us", id: "about", ocid: "footer.about_link" },
                { label: "Our Menu", id: "menu", ocid: "footer.menu_link" },
                {
                  label: "Gallery",
                  id: "gallery",
                  ocid: "footer.gallery_link",
                },
                {
                  label: "Contact Us",
                  id: "contact",
                  ocid: "footer.contact_link",
                },
              ].map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid={link.ocid}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-sans text-sm transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  style={{ color: "oklch(0.55 0.03 60)" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Order Online */}
          <div>
            <h4
              className="font-cabinet font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.75 0.19 72)" }}
            >
              Order Online
            </h4>
            <p
              className="font-sans text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.55 0.03 60)" }}
            >
              Get your favourite Andhra dishes delivered to your doorstep.
            </p>
            <a
              href="https://www.zomato.com/eluru/aromas-of-andhra-power-pet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-cabinet font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "oklch(0.52 0.24 25)",
                color: "white",
              }}
            >
              Order on Zomato
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-10 pt-8 border-t"
          style={{ borderColor: "oklch(0.2 0.03 35)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="font-sans text-sm text-center sm:text-left"
              style={{ color: "oklch(0.4 0.02 50)" }}
            >
              © {currentYear} {restaurantName}. All rights reserved.
            </p>
            <p
              className="font-sans text-sm flex items-center gap-1.5"
              style={{ color: "oklch(0.4 0.02 50)" }}
            >
              Built with{" "}
              <Heart
                size={14}
                className="inline"
                style={{
                  color: "oklch(0.65 0.2 25)",
                  fill: "oklch(0.65 0.2 25)",
                }}
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
                style={{ color: "oklch(0.6 0.03 60)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
