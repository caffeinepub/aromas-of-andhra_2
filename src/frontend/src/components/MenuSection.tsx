import { Leaf } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface MenuItem {
  name: string;
  price: number;
  type: "veg" | "non-veg";
  note?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "soups",
    label: "Soups",
    emoji: "🍲",
    items: [
      { name: "Kodi Miriyala Charu Soup", price: 259, type: "non-veg" },
      { name: "Mutton Dhaniya Rasam Soup", price: 363, type: "non-veg" },
      { name: "Chicken Shorba", price: 230, type: "non-veg" },
      { name: "Mutton Marag Soup", price: 389, type: "non-veg" },
    ],
  },
  {
    id: "veg-starters",
    label: "Veg Starters",
    emoji: "🥗",
    items: [
      { name: "Mokkajonna Vellulli Karam", price: 350, type: "veg" },
      {
        name: "Palateori Puttagodugula Vepudu",
        price: 350,
        type: "veg",
        note: "Veg preparation",
      },
      { name: "Konaseema Paneer", price: 389, type: "veg" },
      { name: "Paneer Karivepaku", price: 389, type: "veg" },
      { name: "Paneer Gongura", price: 389, type: "veg" },
      { name: "Mushroom Tikka", price: 389, type: "veg" },
      { name: "Veg Manchurian", price: 350, type: "veg" },
      { name: "Chilli Mushroom", price: 376, type: "veg" },
      { name: "Mushroom Hot Garlic", price: 389, type: "veg" },
      { name: "Crunchy Baby Corn", price: 376, type: "veg" },
      { name: "Paneer Hot Garlic", price: 415, type: "veg" },
      { name: "Honey Chilli Paneer", price: 415, type: "veg" },
      { name: "Cotton Paneer", price: 480, type: "veg" },
      { name: "Stuffed Paneer", price: 506, type: "veg" },
    ],
  },
  {
    id: "non-veg-starters",
    label: "Non-Veg Starters",
    emoji: "🍗",
    items: [
      { name: "Bandi Style Chicken 65", price: 428, type: "non-veg" },
      { name: "Kakinada Kodi Wings", price: 441, type: "non-veg" },
      { name: "Vellulli Kodi Wings", price: 454, type: "non-veg" },
      { name: "Jedipappu Kodi Vepudu", price: 493, type: "non-veg" },
      { name: "Chicken Manchurian", price: 415, type: "non-veg" },
      { name: "Pepper Chicken", price: 415, type: "non-veg" },
      { name: "Thai Garlic Chicken", price: 415, type: "non-veg" },
      { name: "Royal Chicken", price: 415, type: "non-veg" },
      { name: "Chilli Chicken", price: 415, type: "non-veg" },
      { name: "Chicken Drumstick", price: 428, type: "non-veg" },
      { name: "Chicken Oyster", price: 454, type: "non-veg" },
      { name: "Creamy Chicken", price: 450, type: "non-veg" },
      { name: "Chicken Chips", price: 402, type: "non-veg" },
    ],
  },
  {
    id: "seafood-starters",
    label: "Seafood Starters",
    emoji: "🦐",
    items: [
      { name: "Butter Pepper Fish", price: 480, type: "non-veg" },
      { name: "Hot Garlic Fish", price: 493, type: "non-veg" },
      { name: "Butter Garlic Prawns", price: 493, type: "non-veg" },
      { name: "Honey Chilli Prawns", price: 493, type: "non-veg" },
      { name: "Crunchy Prawns", price: 506, type: "non-veg" },
      { name: "Bhimavaram Chitti Royyala Roast", price: 519, type: "non-veg" },
      { name: "Vellulli Royyala", price: 519, type: "non-veg" },
      { name: "Tandoori Prawns", price: 519, type: "non-veg" },
    ],
  },
  {
    id: "tandoori",
    label: "Tandoori",
    emoji: "🔥",
    items: [
      { name: "Chicken Tikka [6 Pieces]", price: 450, type: "non-veg" },
      { name: "Cotton Cheese Kebab [7 Pieces]", price: 499, type: "veg" },
      { name: "Tandoori Chicken", price: 479, type: "non-veg" },
    ],
  },
  {
    id: "veg-main",
    label: "Veg Main Course",
    emoji: "🍛",
    items: [
      { name: "Gutti Vankaya Kura", price: 376, type: "veg" },
      { name: "Puttagodugula Masala", price: 415, type: "veg" },
      { name: "Gongura Paneer Kura", price: 454, type: "veg" },
      { name: "Ulavacharu Paneer Kura", price: 454, type: "veg" },
      { name: "Mushroom Masala", price: 389, type: "veg" },
      { name: "Veg Keema Masala", price: 389, type: "veg" },
      { name: "Veg Kolhapuri", price: 402, type: "veg" },
      { name: "Bajirao Mastani", price: 402, type: "veg" },
      { name: "Methi Chaman", price: 415, type: "veg" },
      { name: "Kaju Curry", price: 441, type: "veg" },
      { name: "Paneer Butter Masala", price: 441, type: "veg" },
      { name: "Kadhai Paneer", price: 441, type: "veg" },
      { name: "Paneer Kaju Curry", price: 441, type: "veg" },
      { name: "Paneer Tikka Masala", price: 480, type: "veg" },
    ],
  },
  {
    id: "non-veg-main",
    label: "Non-Veg Main Course",
    emoji: "🍖",
    items: [
      { name: "Egg Bhurji", price: 285, type: "non-veg" },
      { name: "Kodi Guddu Vellulli Karam", price: 376, type: "non-veg" },
      { name: "Kodi Guddu Iguru [3 Eggs]", price: 415, type: "non-veg" },
      { name: "Butter Chicken", price: 454, type: "non-veg" },
      { name: "Kadhai Chicken", price: 454, type: "non-veg" },
      { name: "Chicken Mughlai", price: 480, type: "non-veg" },
      { name: "Chicken Patiala", price: 480, type: "non-veg" },
      { name: "Chicken Malai Curry", price: 480, type: "non-veg" },
      { name: "Mutton Ghee Roast", price: 610, type: "non-veg" },
      { name: "Mutton Bhuna Masala", price: 610, type: "non-veg" },
      { name: "Mutton Sukka", price: 636, type: "non-veg" },
      { name: "Prawns Malai Curry", price: 584, type: "non-veg" },
      {
        name: "Mughlai Musallam",
        price: 584,
        type: "non-veg",
        note: "Tandoori style",
      },
    ],
  },
  {
    id: "breads",
    label: "Breads",
    emoji: "🫓",
    items: [
      { name: "Phulka", price: 39, type: "veg" },
      { name: "Roti", price: 79, type: "veg" },
      { name: "Butter Roti", price: 89, type: "veg" },
      { name: "Plain Naan", price: 79, type: "veg" },
      { name: "Butter Naan", price: 90, type: "veg" },
      { name: "Garlic Naan", price: 99, type: "veg" },
    ],
  },
  {
    id: "rice",
    label: "Rice & Pulao",
    emoji: "🍚",
    items: [
      { name: "Plain Pulao", price: 207, type: "veg" },
      { name: "Avakai Mudda Pappu Annam", price: 324, type: "veg" },
      { name: "Steamed Rice", price: 129, type: "veg" },
      { name: "Jeera Rice", price: 259, type: "veg" },
      { name: "Dal Khichdi", price: 272, type: "veg" },
      { name: "Gongura Veg Pulao", price: 506, type: "veg" },
      { name: "Mixed Veg Pulao", price: 519, type: "veg" },
      { name: "Ulavacharu Pulao", price: 450, type: "veg" },
      { name: "Kaju Pulao", price: 399, type: "veg" },
      { name: "Pachi Mirch Paneer Pulao", price: 399, type: "veg" },
      { name: "Kothimeera Paneer Pulao", price: 450, type: "veg" },
      { name: "Kodi Guddu Velluli Karam Pulao", price: 428, type: "non-veg" },
      { name: "Bhimavaram Royyala Vepudu Pulao", price: 597, type: "non-veg" },
      { name: "Kodi Guddu Pachi Royyala Pulao", price: 623, type: "non-veg" },
      {
        name: "Mixed Non Veg Pulao",
        price: 649,
        type: "non-veg",
        note: "Chicken, prawns and mutton",
      },
      { name: "Kodi Fry Pulao", price: 399, type: "non-veg" },
      { name: "Pottelu Mamsam Pulao", price: 599, type: "non-veg" },
    ],
  },
  {
    id: "biryani",
    label: "Biryani",
    emoji: "🍛",
    items: [
      { name: "Boneless Chicken Biryani", price: 519, type: "non-veg" },
      { name: "Special Chicken Fry Biryani", price: 506, type: "non-veg" },
      { name: "Special Chicken Keema Biryani", price: 506, type: "non-veg" },
      {
        name: "Special Mutton Shahi Gosht Biryani",
        price: 740,
        type: "non-veg",
      },
    ],
  },
  {
    id: "fried-rice",
    label: "Fried Rice",
    emoji: "🍳",
    items: [
      { name: "Veg Fried Rice", price: 311, type: "veg" },
      { name: "Special Paneer Fried Rice", price: 415, type: "veg" },
      { name: "Mixed Veg Fried Rice", price: 415, type: "veg" },
      { name: "Egg Fried Rice", price: 350, type: "non-veg" },
      { name: "Chicken Fried Rice", price: 389, type: "non-veg" },
      { name: "Special Chicken Fried Rice", price: 415, type: "non-veg" },
      { name: "Schezwan Fried Rice", price: 399, type: "non-veg" },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    emoji: "🍜",
    items: [
      { name: "Veg Chopsuey", price: 350, type: "veg" },
      { name: "Veg Hakka Noodles", price: 337, type: "veg" },
      { name: "Egg Noodles", price: 350, type: "non-veg" },
      { name: "Chicken Hakka Noodles", price: 389, type: "non-veg" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    emoji: "🥚",
    items: [{ name: "Thai Egg", price: 350, type: "non-veg" }],
  },
  {
    id: "drinks",
    label: "Drinks",
    emoji: "🍹",
    items: [
      {
        name: "Pomegranate Mocktail",
        price: 179,
        type: "veg",
        note: "Non Alcoholic",
      },
      { name: "Lassi", price: 99, type: "veg" },
      {
        name: "Orange Basil Mojito",
        price: 207,
        type: "veg",
        note: "Non Alcoholic",
      },
      {
        name: "Orange Mocktail",
        price: 207,
        type: "veg",
        note: "Non Alcoholic",
      },
      {
        name: "Watermelon Caipiroska Mocktail",
        price: 207,
        type: "veg",
        note: "Non Alcoholic",
      },
      {
        name: "Pina Colada Mocktail",
        price: 207,
        type: "veg",
        note: "Non Alcoholic",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    emoji: "🍨",
    items: [{ name: "Vanilla Ice Cream [1 Scoop]", price: 116, type: "veg" }],
  },
];

function VegBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold"
      style={{
        backgroundColor: "oklch(0.92 0.1 145 / 0.2)",
        color: "oklch(0.45 0.15 145)",
        border: "1px solid oklch(0.45 0.15 145 / 0.4)",
      }}
    >
      <Leaf size={10} />
      VEG
    </span>
  );
}

function NonVegBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold"
      style={{
        backgroundColor: "oklch(0.92 0.1 25 / 0.15)",
        color: "oklch(0.52 0.24 25)",
        border: "1px solid oklch(0.52 0.24 25 / 0.4)",
      }}
    >
      <span
        className="w-2 h-2 rounded-full inline-block"
        style={{ backgroundColor: "oklch(0.52 0.24 25)" }}
      />
      NON-VEG
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="menu-card flex items-start justify-between gap-3 p-4 rounded-xl"
      style={{
        backgroundColor: "oklch(0.99 0.008 75)",
        border: "1px solid oklch(0.88 0.025 75)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          {item.type === "veg" ? <VegBadge /> : <NonVegBadge />}
        </div>
        <p
          className="font-cabinet font-semibold text-sm sm:text-base leading-snug"
          style={{ color: "oklch(0.18 0.03 40)" }}
        >
          {item.name}
        </p>
        {item.note && (
          <p
            className="text-xs mt-0.5 font-sans italic"
            style={{ color: "oklch(0.5 0.03 60)" }}
          >
            {item.note}
          </p>
        )}
      </div>
      <div
        className="font-display font-bold text-base sm:text-lg flex-shrink-0"
        style={{ color: "oklch(0.52 0.24 25)" }}
      >
        ₹{item.price}
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("soups");

  const activeData = menuData.find((c) => c.id === activeCategory);

  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "oklch(0.14 0.025 35)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="font-cabinet text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 block"
            style={{ color: "oklch(0.75 0.19 72)" }}
          >
            Explore Our
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold mb-3"
            style={{ color: "white" }}
          >
            Our Menu
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.19 72), oklch(0.52 0.24 25))",
            }}
          />
          <p
            className="font-sans text-base sm:text-lg mt-4 max-w-xl mx-auto"
            style={{ color: "oklch(0.75 0.03 60)" }}
          >
            Authentic Andhra flavors crafted with heritage recipes and fresh
            ingredients
          </p>
        </motion.div>

        {/* Category Tabs — horizontally scrollable on mobile */}
        <div className="menu-tabs-scroll mb-10">
          <div className="flex gap-2 pb-2 min-w-max">
            {menuData.map((cat, index) => (
              <button
                type="button"
                key={cat.id}
                data-ocid={`menu.category.tab.${index + 1}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-cabinet font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "shadow-saffron scale-105"
                    : "hover:scale-102"
                }`}
                style={
                  activeCategory === cat.id
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.75 0.19 72), oklch(0.68 0.19 68))",
                        color: "oklch(0.12 0.02 40)",
                        boxShadow: "0 4px 12px oklch(0.75 0.19 72 / 0.35)",
                      }
                    : {
                        backgroundColor: "oklch(0.22 0.03 35)",
                        color: "oklch(0.78 0.03 60)",
                        border: "1px solid oklch(0.3 0.03 35)",
                      }
                }
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{activeData.emoji}</span>
                <h3
                  className="font-display text-2xl sm:text-3xl font-bold"
                  style={{ color: "white" }}
                >
                  {activeData.label}
                </h3>
                <span
                  className="font-cabinet text-sm px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.22 0.03 35)",
                    color: "oklch(0.75 0.19 72)",
                  }}
                >
                  {activeData.items.length} items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeData.items.map((item, idx) => (
                  <motion.div
                    key={`${activeCategory}-${item.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
