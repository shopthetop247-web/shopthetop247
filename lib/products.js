export const products = [
  { 
    id: 'sony-headphones',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Tech & Electronics',
    price: '$278',
    rating: 4.2,
    image: '/sonyheadphones.jpg',
    imageAlt: "Sony WH-1000XM5 Noise Cancelling Bluetooth Headphones",
    short: 'Lightweight, long battery life, noise-aware mode.',
    long: `From airplane noise to people’s voices, our WH-1000XM5 wireless headphones keep out more 
    high and mid frequency sounds than ever. And with Auto NC Optimizer, noise canceling is automatically 
    optimized based on your wearing conditions and environment.
           
    These are the perfect travel headphones as well! Order them today.`,
    affiliateUrl: 'https://a.co/d/gmGdgOy'
  },

{ 
    id: 'travel-scale',
    name: 'Travel Scale',
    category: 'Travel',
    price: '$278',
    rating: 4.2,
    image: '/scale.jpg',
    imageAlt: "Sony WH-1000XM5 Noise Cancelling Bluetooth Headphones",
    short: 'Lightweight, long battery life, noise-aware mode.',
    long: `From airplane noise to people’s voices, our WH-1000XM5 wireless headphones keep out more 
    high and mid frequency sounds than ever. And with Auto NC Optimizer, noise canceling is automatically 
    optimized based on your wearing conditions and environment.
           
    These are the perfect travel headphones as well! Order them today.`,
    affiliateUrl: 'https://a.co/d/gmGdgOy'
  },
  
  { 
    id: 'anker-power-bank',
    name: 'Anker Nano Power Bank',
    category: 'Tech & Electronics',
    price: '$44',
    rating: 4.5,
    image: '/ankerpowerbank.jpg',
    imageAlt: "The Anker Nano Power Bank with USB-C and 10,000mAh of charging power",
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
    imageAlt: "Tessan Travel Adapter and Converter for your European, United Kingdon, Australia, and Italian travel",
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
    imageAlt: "Amazon Paperwhite Kindle 1GB E-Reader",
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
    imageAlt: "Tile Bluetooth Tracker for keys, bags and more",
    short: 'Locator for Keys, Bags and More.',
    long: `Protect lost or stolen stuff and make family life easier. Attach to everyday things like keys, 
    water bottles, or bags.`,
    affiliateUrl: 'https://a.co/d/1tmWXrv'
  },

  {
    id: 'litter-robot',
    name: 'Litter-Robot® Evo',
    category: 'Pet Supplies',
    price: '$599',
    rating: 4.8,
    image: '/litterrobot.jpg',
    imageAlt: "Litter-Robot® EVO automated litterbox for 1 to 2 cat homes",
    short: 'EVO is the most streamlined Litter-Robot®.',
    long: `It's the automatic, self-cleaning litter box that’s compact enough to fit almost anywhere. 
    Perfect for first-time cat owners, one- or two-cat households, and smaller spaces.`,
    affiliateUrl: "https://www.whisker.com/litter-robot-evo"
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
