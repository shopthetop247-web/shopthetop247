export const products = [
  { 
    id: 'compact-bluetooth-headphones',
    name: 'Compact Bluetooth Headphones',
    category: 'Tech & Electronics',
    price: '$79',
    rating: 4.5,
    image: '/headphones.jpg',
    short: 'Lightweight, long battery life, noise-aware mode.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1001?src=shopthetop247'
  },

  {
    id: "yogamat",
    name: 'Eco Yoga Mat',
    category: 'Health',
    price: '$35',
    rating: 4.0,
    image: '/yogamat.jpg',
    short: 'High-grip, eco-friendly yoga mat.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: "https://amazon.com/example-yogamat"
  },

  {
    id: 'muttgut',
    name: 'Mutt Gut Immune Supplement',
    category: 'Pet Supplies',
    price: '$25.99',
    rating: 5.0,
    image: '/muttgut.jpg',
    short: 'All natural 3-in-1 dog probiotic, prebiotic, and postbiotic supplement powder.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: "https://www.amazon.com/All-Natural-Probiotic-Prebiotic-Postbiotic-Supplement/dp/B0DY8TPZ5K/ref=pd_ci_mcx_mh_mcx_views_0_image"
  },

  { 
    id: 'smart-air-purifier',
    name: 'Smart Air Purifier',
    category: 'Home Goods',
    price: '$129',
    rating: 4.6,
    image: '/airpurifier.jpg',
    short: 'HEPA filter, app control, quiet sleep mode.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1002?src=shopthetop247'
  },

  { 
    id: 'vitamin-skin-serum',
    name: 'Vitamin Skin Serum',
    category: 'Beauty',
    price: '$34',
    rating: 4.4,
    image: '/serum.jpg',
    short: 'Brightens skin, gentle for daily use.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1003?src=shopthetop247'
  },

  { 
    id: 'portable-travel-scale',
    name: 'Portable Travel Scale',
    category: 'Travel',
    price: '$19',
    rating: 4.2,
    image: '/scale.jpg',
    short: 'Keep your luggage underweight at the gate.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1004?src=shopthetop247'
  },

  { 
    id: 'orthopedic-dog-bed',
    name: 'Orthopedic Dog Bed',
    category: 'Pet Supplies',
    price: '$89',
    rating: 4.7,
    image: '/dogbed.jpg',
    short: 'Memory foam and washable cover.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1005?src=shopthetop247'
  },

  { 
    id: 'electric-pill-organizer',
    name: 'Electric Pill Organizer',
    category: 'Health',
    price: '$49',
    rating: 4.3,
    image: '/pillorg.jpg',
    short: 'Timed reminders and compartment alarms.',
    description: `
      These compact Bluetooth headphones deliver premium sound in a lightweight form.
      Enjoy all-day battery life, noise-aware mode for safe listening outdoors,
      and ultra-soft ear cushions for maximum comfort.
    `,
    affiliateUrl: 'https://affiliate.example.com/p/1006?src=shopthetop247'
  }
];

// 👉 All unique categories
export const categories = [...new Set(products.map(p => p.category))];

// 👉 Get one product
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// 👉 Get all products
export function getAllProducts() {
  return products;
}

// 👉 Get products filtered by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}
