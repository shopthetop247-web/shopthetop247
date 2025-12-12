export const products = [
  { 
    id: 'sony-headphones',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Tech & Electronics',
    price: '$278',
    rating: 4.2,
    image: '/sonyheadphones.jpg',
    short: 'Lightweight, long battery life, noise-aware mode.',
    long: `From airplane noise to people’s voices, our WH-1000XM5 wireless headphones keep out more 
    high and mid frequency sounds than ever. And with Auto NC Optimizer, noise canceling is automatically 
    optimized based on your wearing conditions and environment.
           
    These are the perfect travel headphones as well! Order them today.`,
    affiliateUrl: 'https://a.co/d/gmGdgOy'
  },

  {
    id: "yogamat",
    name: 'Eco Yoga Mat',
    category: 'Health',
    price: '$35',
    rating: 4.0,
    image: '/yogamat.jpg',
    short: 'High-grip, eco-friendly yoga mat.',
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
    affiliateUrl: "https://amazon.com/example-yogamat"
  },

  {
    id: 'muttgut',
    name: 'Mutt Gut Immune Supplement',
    category: 'Pet Supplies',
    price: '$26',
    rating: 4.2,
    image: '/muttgut.jpg',
    short: 'All natural 3-in-1 dog probiotic, prebiotic, and postbiotic supplement powder.',
    long: `For Dogs with Itchy Skin, Loose Stools, or Allergies – Targets gut-driven issues by 
    supporting balanced digestion and immunity.`,
    affiliateUrl: "https://a.co/d/cSDy8Vc"
  },

  { 
    id: 'smart-air-purifier',
    name: 'Smart Air Purifier',
    category: 'Home Goods',
    price: '$129',
    rating: 4.6,
    image: '/airpurifier.jpg',
    short: 'HEPA filter, app control, quiet sleep mode.',
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
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
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
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
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
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
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
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
    long: `This is the detailed product description.
           You can use multiple lines.
           They will appear with proper spacing.`,
    affiliateUrl: 'https://affiliate.example.com/p/1006?src=shopthetop247'
  },

  { 
    id: 'anker-power-bank',
    name: 'Anker Nano Power Bank',
    category: 'Tech & Electronics',
    price: '$44',
    rating: 4.5,
    image: '/ankerpowerbank.jpg',
    short: '10,000mAh Portable Charger with USB-C.',
    long: `Built-in USB-C cable: Use the built-in USB-C cable to charge your
    smartphones, tablets and laptops as well as recharge the power bank itself - meets all your charging needs!`,
    affiliateUrl: 'https://a.co/d/3o8D8yj'
  },

  { 
    id: 'tessan-power-converter',
    name: 'Tessan Travel Adapter & Converter',
    category: 'Tech & Electronics',
    price: '$39',
    rating: 4.3,
    image: '/travelconverter.jpg',
    short: '220V to 110V Voltage Converter For EU/UK/AU/IT',
    long: `Travel Voltage Converter: The 220V to 110V converter adapter combo equipped 1 DE power cable and 
    4 International adapters (type C G, I, L); it's your good travel companion across United Kingdom, European, 
    Italy, Australia, France, Germany, Spain, Greece, South Korea, Netherlands, Norway, Poland, Portugal, China, 
    Dubai, England, Fiji, Hong Kong, Ireland, Argentina, New Zealand Russia etc, more than 200 countries over the 
    world, ideal for charging your multiple devices when traveling abroad`,
    affiliateUrl: 'https://a.co/d/4iP6uLo'
  },

  { 
    id: 'amazon-e-reader',
    name: 'Amazon Kindle 16GB E-Reader',
    category: 'Tech & Electronics',
    price: '$135',
    rating: 4.6,
    image: '/amazonreader.jpg',
    short: '20% faster, with new 7" glare-free display.',
    long: `The next-generation 7“ Paperwhite display has a higher contrast ratio and 25% faster page turns. 
    The ultra-thin design has a larger glare-free screen so pages stay sharp no matter where you are.`,
    affiliateUrl: 'https://a.co/d/fN4M4Tx'
  },

  { 
    id: 'tile-tracker',
    name: 'Tile Bluetooth Tracker',
    category: 'Tech & Electronics',
    price: '$15',
    rating: 4.4,
    image: '/tiletracker.jpg',
    short: 'Locator for Keys, Bags and More.',
    long: `Protect lost or stolen stuff and make family life easier. Attach to everyday things like keys, 
    water bottles, or bags.`,
    affiliateUrl: 'https://a.co/d/1tmWXrv'
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
