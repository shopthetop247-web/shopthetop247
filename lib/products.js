export const products = [

  {
    id: 'fosi-audio-BT20A-stereo',
    name: 'Fosi Audio BT20A Pro Bluetooth 5.0 Amplifier',
    category: 'Technology',
    price: '$90',
    rating: 4.5,
    image: '/FosiBT20A.jpg',
    imageAlt: 'Fosi Audio BT20A Pro Bluetooth 5.0 Amplifier',
    short: '300W x 2 Wireless Amp, TPA3255 2 Channel Mini Class D Integrated Home Audio.',
    long: `
• 300 Watts x 2 Power Output using TI TPA3255 chip
• Replaceable Op-Amps for custom sound tuning
• Bluetooth 5.0 with memory pairing
• Bass and treble controls for sound customization
    `,
    affiliateUrl: 'https://a.co/d/hgUc4wa',
  },

  {
    id: 'oscillococcinum',
    name: 'Boiron Oscillococcinum Homeopathic Medicine',
    category: 'Health',
    price: '$21',
    rating: 4.7,
    image: '/oscillococcinum.jpg',
    imageAlt: 'Boiron Oscillococcinum Homeopathic Medicine',
    short: 'Relief from flu-like symptoms including aches, fever, and fatigue.',
    long: `
• Homeopathic flu relief for ages 2+
• Easy-dissolving pellets, no water required
• Clinically shown to reduce symptom duration
    `,
    affiliateUrl: 'https://www.walmart.com/ip/5403351756',
  },

  {
    id: 'sambucol',
    name: 'Sambucol Elderberry Cold and Flu Relief Tablets',
    category: 'Health',
    price: '$10',
    rating: 4.7,
    image: '/sambucol.jpg',
    imageAlt: 'Sambucol Elderberry Cold and Flu Relief Tablets',
    short: 'Fast, temporary relief from cold and flu symptoms.',
    long: `
• Helps relieve congestion, sore throat, fever
• Quick-dissolving tablet
• Complements other elderberry products
    `,
    affiliateUrl: 'https://www.walmart.com/ip/16940716',
  },

  {
    id: 'handsanitizer',
    name: 'PURELL PRIME DEFENSE Advanced Hand Sanitizer',
    category: 'Health',
    price: '$21',
    rating: 4.6,
    image: '/purell.jpg',
    imageAlt: 'PURELL PRIME DEFENSE Advanced Hand Sanitizer',
    short: 'Maximum strength hand sanitizer, travel size.',
    long: `
• 85% ethyl alcohol kills 99.99% of germs
• Professional-grade protection
    `,
    affiliateUrl: 'https://a.co/d/d9VJgTU',
  },

  {
    id: 'tylenol-sinus',
    name: 'Tylenol Sinus Severe Non-Drowsy Day Relief',
    category: 'Health',
    price: '$8',
    rating: 4.7,
    image: '/tylenolsinus.jpg',
    imageAlt: 'Tylenol Sinus Severe Daytime Relief',
    short: 'Non-drowsy cold, flu & allergy relief.',
    long: `
• Pain reliever and decongestant
• Helps relieve sinus pressure and headache
    `,
    affiliateUrl: 'https://www.walmart.com/ip/20886516',
  },

  {
    id: 'litter-robot',
    name: 'Litter-Robot® Evo',
    category: 'Pets',
    price: '$599',
    rating: 4.8,
    image: '/litterrobot.jpg',
    imageAlt: 'Litter-Robot Evo automated litter box',
    short: 'Self-cleaning litter box for 1–2 cats.',
    long: `
• Automatically cleans after each use
• Compact design for small spaces
• Ideal for first-time cat owners
    `,
    affiliateUrl: 'https://www.whisker.com/litter-robot-evo',
  },
]

// 👉 All unique categories
export const categories = [...new Set(products.map(p => p.category))]

// 👉 Get one product
export function getProductById(id) {
  return products.find(p => p.id === id)
}

// 👉 Get all products
export function getAllProducts() {
  return products
}

// 👉 Get products filtered by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category)
}
