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
    long: `
    • NOISE CANCELLATION: Immerse yourself in the world of music with these noise cancelling headphones,
    the Sony WH-1000XM5. They come equipped with an advanced noise cancellation feature, powered by two 
    processors controlling eight microphones. 

    
    • HANDS-FREE CALLING: Step into the future of communication with the Sony WH-1000XM5, a pair of over-ear 
    headphones that make crystal clear hands-free calling a reality. 

    • LONG BATTERY LIFE: Say goodbye to battery anxiety with the Sony WH-1000XM5, a wireless headset that offers up to 
    30 hours of playback time on a single charge.`,
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
    long: `
    • Built-in USB-C cable: Use the built-in USB-C cable to charge your smartphones, tablets and laptops
    as well as recharge the power bank itself - meets all your charging needs!

    
    • 30W BI-DIRECTIVE CHARGING: Boost your power bank to 50% in just 45 minutes.

    
    • WORRY-FREE POWER WITH 10,000mAh: Experience effortless energy on the go with the built-in USB-C cable, 
    which offers seamless charging.

    
    • An environmentally friendly approach: By carefully selecting materials and manufacturing methods, the 
    outer casing is made of 80% recycled plastic from consumer waste (PCR) to deliberately reduce carbon emissions.`,
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
    long: `
    • Travel Voltage Converter: The 220V to 110V converter adapter combo equipped 1 DE power cable and 4 International adapters (type C G, I, L) 
    it's your good travel companion across United Kingdom, European, Italy, Australia, France, Germany, Spain, Greece, South Korea, Netherlands, 
    Norway, Poland, Portugal, China, Dubai, England, Fiji, Hong Kong, Ireland, Argentina, New Zealand Russia etc, more than 200 countries over the world. 

    
    • Different Modules Voltage Conversion: The converter area is able to support a maximum 2000W total voltage peak convert outlet, it converts voltage
    (220-240V,50/60Hz) to US voltage (110V,60Hz).

    
    • 7 in 1 International Power Adapter: This voltage converter us to europe is equipped with 3 AC Outlets and 4 USB charging ports(1 USB C). 


    • Portable and Safety: Compact and lightweight design to fit into luggage and briefcases, makes this step down transformer 220V to 110V 
    easy to pack and take anywhere you go.`,
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
