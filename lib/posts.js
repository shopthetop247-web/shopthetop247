export const posts = [
  {
    slug: "healthy-dog-digestion",
    title: "How to Support Healthy Dog Digestion",
    date: "2025-02-01",
    image: "/muttgut.jpg",
    excerpt: "Simple steps every dog owner can take to support gut health.",
    content: `
Keeping your dog's digestive system healthy is essential for their overall well-being.

A balanced diet, regular exercise, and the right supplements can make a huge difference.

In this article, we explore the top veterinarian-approved methods to improve your dog’s gut health.
`
  },

  {
    slug: "travel-tech-2025",
    title: "Top Travel Tech Essentials for 2025",
    date: "2025-02-05",
    image: "/scale.jpg",
    excerpt: "These gadgets make traveling easier, safer, and more enjoyable.",
    content: `
Traveling in 2025 has never been more convenient, thanks to compact and smart tech.

From portable luggage scales to noise-canceling headphones, here are the top picks for your next trip.
`
  }
]

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}
