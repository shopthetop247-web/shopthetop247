export const posts = [
  { slug: 'best-travel-tech-2025', title: 'Best Travel Tech for 2025', excerpt: 'Lightweight power banks, noise-cancelling headphones and must-have travel adapters.', content: '<p>Longer article HTML — include affiliate links to products.</p>' },
  { slug: 'skincare-that-works', title: 'Skincare That Actually Works', excerpt: 'Products dermatologists recommend for lasting results.', content: '<p>Article content here.</p>' }
]
export function getAllPosts(){ return posts }
export function getPostBySlug(slug){ return posts.find(p=>p.slug===slug) }
