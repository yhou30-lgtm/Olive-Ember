// All editable content for Olive & Ember. Everything here is fictional demo content.

export const R = {
  name: "Olive & Ember",
  tagline: "Modern American, cooked over fire",
  url: "https://oliveandember.example",
  // Fictional details. 555-01xx phone numbers and the .example domain are reserved for fake use.
  address: ["123 Example Street", "Claremont, CA 91711"],
  phone: "(909) 555-0142",
  email: "hello@oliveandember.example",
  reserveHref: "/visit/#reserve", // placeholder: replace with your booking link (OpenTable, Resy, Tock and so on)
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu/", label: "Menu" },
  { href: "/our-story/", label: "Our Story" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/visit/", label: "Visit Us" },
];

export const HOURS = [
  { days: "Monday", time: "Closed" },
  { days: "Tuesday to Thursday", time: "5:00 to 9:00 pm" },
  { days: "Friday and Saturday", time: "5:00 to 10:00 pm" },
  { days: "Sunday", time: "4:00 to 8:00 pm" },
];

export type Dish = { name: string; desc: string; price: number };
export type Category = { id: string; title: string; note?: string; dishes: Dish[] };

export const MENU: Category[] = [
  {
    id: "starters",
    title: "To Start",
    dishes: [
      { name: "Hearth Bread & Olive Butter", desc: "Warm sourdough from the oven, whipped butter, flaky salt.", price: 9 },
      { name: "Charred Little Gems", desc: "Buttermilk dressing, pickled shallot, toasted seeds.", price: 14 },
      { name: "Ember-Roasted Carrots", desc: "Whipped feta, hazelnut crumble, honey, thyme.", price: 13 },
      { name: "Smoked Trout Toast", desc: "Crème fraîche, cucumber, dill, rye.", price: 15 },
    ],
  },
  {
    id: "fire",
    title: "From the Fire",
    note: "Cooked over oak and finished with something simple.",
    dishes: [
      { name: "Oak-Grilled Ribeye", desc: "Bone marrow butter, charred onion, watercress.", price: 46 },
      { name: "Cast-Iron Half Chicken", desc: "Lemon, rosemary, pan jus, crisp skin.", price: 29 },
      { name: "Cedar-Plank Salmon", desc: "Fennel, citrus, herb oil.", price: 32 },
      { name: "Mushroom Steak", desc: "King oyster, black garlic glaze, parsley.", price: 26 },
      { name: "The Ember Burger", desc: "Two patties, aged cheddar, pickles, house sauce, fries.", price: 19 },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    dishes: [
      { name: "Fire-Roasted Potatoes", desc: "Garlic, rosemary, sea salt.", price: 9 },
      { name: "Skillet Cornbread", desc: "Honey butter.", price: 8 },
      { name: "Charred Broccolini", desc: "Chili, lemon, toasted almonds.", price: 9 },
    ],
  },
  {
    id: "sweets",
    title: "Sweets",
    dishes: [
      { name: "Olive Oil Cake", desc: "Citrus, whipped cream.", price: 11 },
      { name: "Smoked Chocolate Pot de Crème", desc: "Sea salt, cocoa nib.", price: 12 },
      { name: "Seasonal Fruit Crisp", desc: "Oat topping, vanilla ice cream.", price: 11 },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    dishes: [
      { name: "Ember Old Fashioned", desc: "Bourbon, smoked demerara, orange bitters.", price: 15 },
      { name: "Rosemary Spritz", desc: "Sparkling wine, rosemary, grapefruit.", price: 13 },
      { name: "Olive & Tonic", desc: "Gin, tonic, green olive, lemon peel.", price: 12 },
      { name: "House Citrus Soda", desc: "Non-alcoholic, made in-house.", price: 6 },
    ],
  },
];

export const SIGNATURES = [
  { name: "Oak-Grilled Ribeye", desc: "Bone marrow butter, charred onion, watercress.", price: 46, art: "fire" as const },
  { name: "Ember-Roasted Carrots", desc: "Whipped feta, hazelnut crumble, honey, thyme.", price: 13, art: "plate" as const },
  { name: "Olive Oil Cake", desc: "Citrus, whipped cream.", price: 11, art: "olive" as const },
];

export type GalleryItem = { art: "fire" | "plate" | "interior" | "olive" | "bread"; tone: "dark" | "warm" | "olive"; alt: string; src?: string; span?: string };

// To use real photos: set `src` to a file in /public (for example "/photos/dining-room.jpg").
export const GALLERY: GalleryItem[] = [
  { art: "interior", tone: "warm", alt: "Illustration of the dining room with arched windows and pendant lamps", span: "md:col-span-2 md:row-span-2" },
  { art: "plate", tone: "olive", alt: "Illustration of a plated vegetable dish" },
  { art: "fire", tone: "dark", alt: "Illustration of the open hearth fire" },
  { art: "bread", tone: "warm", alt: "Illustration of a loaf of hearth bread" },
  { art: "olive", tone: "olive", alt: "Illustration of an olive branch" },
  { art: "interior", tone: "dark", alt: "Illustration of the bar at night", span: "md:col-span-2" },
];
