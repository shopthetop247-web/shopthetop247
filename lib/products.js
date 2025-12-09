
export const categories = [
  'Tech & Electronics',
  'Home Goods',
  'Beauty',
  'Health',
  'Pet Supplies',
  'Travel'
]

export const products = [
  { 
    id: 'compact-bluetooth-headphones',
    name: 'Compact Bluetooth Headphones',
    category: 'Tech & Electronics',
    price: '$79',
    rating: 4.5,
    image: '/headphones.jpg',      // FIXED
    short: 'Lightweight, long battery life, noise-aware mode.',
    affiliateUrl: 'https://affiliate.example.com/p/1001?src=shopthetop247'
  },

{
    id: "yogamat",
    name: "Eco Yoga Mat",
    price: "$35.99",
    category: "Health",
    image: "/yogamat.jpg",
    short: 'Lightweight, long battery life, noise-aware mode.',
    long: "Eco-friendly, non-slip yoga mat made from recycled materials.",
    affiliate: "https://amazon.com/example-yogamat"
  },
 
  { 
    id: 'smart-air-purifier',
    name: 'Smart Air Purifier',
    category: 'Home Goods',
    price: '$129',
    rating: 4.6,
    image: '/airpurifier.jpg',     // FIXED
    short: 'HEPA filter, app control, quiet sleep mode.',
    affiliateUrl: 'https://affiliate.example.com/p/1002?src=shopthetop247'
  },

  { 
    id: 'vitamin-skin-serum',
    name: 'Vitamin Skin Serum',
    category: 'Beauty',
    price: '$34',
    rating: 4.4,
    image: '/serum.jpg',           // FIXED
    short: 'Brightens skin, gentle for daily use.',
    affiliateUrl: 'https://affiliate.example.com/p/1003?src=shopthetop247'
  },

  { 
    id: 'portable-travel-scale',
    name: 'Portable Travel Scale',
    category: 'Travel',
    price: '$19',
    rating: 4.2,
    image: '/scale.jpg',           // FIXED
    short: 'Keep your luggage underweight at the gate.',
    affiliateUrl: 'https://affiliate.example.com/p/1004?src=shopthetop247'
  },

  { 
    id: 'orthopedic-dog-bed',
    name: 'Orthopedic Dog Bed',
    category: 'Pet Supplies',
    price: '$89',
    rating: 4.7,
    image: '/dogbed.jpg',          // FIXED
    short: 'Memory foam and washable cover.',
    affiliateUrl: 'https://affiliate.example.com/p/1005?src=shopthetop247'
  },

  { 
    id: 'electric-pill-organizer',
    name: 'Electric Pill Organizer',
    category: 'Health',
    price: '$49',
    rating: 4.3,
    image: '/pillorg.jpg',         // FIXED
    short: 'Timed reminders and compartment alarms.',
    affiliateUrl: 'https://affiliate.example.com/p/1006?src=shopthetop247'
  }
]

export function getAllProducts() {
  return products
}

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(cat) {
  return products.filter(p => p.category === cat)
}
