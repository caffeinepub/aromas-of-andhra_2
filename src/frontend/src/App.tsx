import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { RestaurantInfo } from "./backend.d";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Navigation from "./components/Navigation";
import { useActor } from "./hooks/useActor";

const ZOMATO_URL = "https://www.zomato.com/eluru/aromas-of-andhra-power-pet";

const DEFAULT_INFO: RestaurantInfo = {
  name: "Aromas of Andhra",
  tagline: "Where every plate tells a story of Andhra",
  address: "25-5-13, R.R.Pet Main Road, Powerpet, Eluru, Andhra Pradesh 534002",
  mapUrl:
    "https://www.google.com/maps/dir//Aromas+of+andhra,+Eluru,+25-5-13,+R.R.Pet+Main+Road,+Powerpet,+Eluru,+Andhra+Pradesh+534002/@12.459758,79.8373251,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a36150079d9d417:0x33d52a54c7d82810!2m2!1d81.0984814!2d16.7101072?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
  phone: "9494260099",
  zomatoUrl: ZOMATO_URL,
};

export default function App() {
  const { actor, isFetching } = useActor();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: restaurantInfo } = useQuery<RestaurantInfo>({
    queryKey: ["restaurantInfo"],
    queryFn: async () => {
      if (!actor) return DEFAULT_INFO;
      try {
        return await actor.getRestaurantInfo();
      } catch {
        return DEFAULT_INFO;
      }
    },
    enabled: !!actor && !isFetching,
    placeholderData: DEFAULT_INFO,
  });

  const info = restaurantInfo ?? DEFAULT_INFO;

  // Update page title
  useEffect(() => {
    document.title = `${info.name} — Authentic Andhra Cuisine`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Aromas of Andhra — Authentic Andhra cuisine in Eluru. Experience heritage recipes with modern presentation.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Aromas of Andhra — Authentic Andhra cuisine in Eluru. Experience heritage recipes with modern presentation.";
      document.head.appendChild(meta);
    }
  }, [info.name]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation
        restaurantName={info.name}
        zomatoUrl={info.zomatoUrl || ZOMATO_URL}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />

      <main>
        <HeroSection
          restaurantName={info.name}
          tagline={info.tagline}
          zomatoUrl={info.zomatoUrl || ZOMATO_URL}
          scrollTo={scrollTo}
        />

        <AboutSection />

        <MenuSection />

        <GallerySection />

        <ContactSection
          phone={info.phone}
          address={info.address}
          mapUrl={info.mapUrl}
        />
      </main>

      <FooterSection
        restaurantName={info.name}
        phone={info.phone}
        address={info.address}
        scrollTo={scrollTo}
      />
    </div>
  );
}
