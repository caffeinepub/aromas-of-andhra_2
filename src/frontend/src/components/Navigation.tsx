import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationProps {
  restaurantName: string;
  zomatoUrl: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navigation({
  restaurantName,
  zomatoUrl,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", id: "about", ocid: "nav.about.link" },
    { label: "Menu", id: "menu", ocid: "nav.menu.link" },
    { label: "Gallery", id: "gallery", ocid: "nav.gallery.link" },
    { label: "Contact Us", id: "contact", ocid: "nav.contact.link" },
  ];

  return (
    <header
      data-ocid="nav.section"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-espresso/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Name */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-saffron/20 flex-shrink-0 ring-2 ring-saffron/40 group-hover:ring-saffron transition-all">
              <img
                src="/assets/generated/restaurant-logo-transparent.dim_300x300.png"
                alt="Aromas of Andhra Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`font-display font-bold text-lg leading-tight transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              {restaurantName}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={link.ocid}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-cabinet font-semibold transition-all duration-200 ${
                  scrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.order.button"
            >
              <Button
                className="ml-3 bg-chili hover:bg-chili/90 text-white font-cabinet font-bold px-6 py-2 rounded-full shadow-chili transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "oklch(0.52 0.24 25)",
                  color: "white",
                }}
              >
                Order Now
              </Button>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            data-ocid="nav.mobile_toggle"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-white hover:bg-white/10"
                : "text-white hover:bg-white/15"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid={link.ocid}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-cabinet font-semibold text-base transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.order.button"
                className="mt-2"
              >
                <Button
                  className="w-full font-cabinet font-bold text-base py-3 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.52 0.24 25)",
                    color: "white",
                  }}
                >
                  Order Now on Zomato
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
