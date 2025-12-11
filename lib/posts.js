export const posts = [
  {
    slug: "travel-matters",
    title: "Why Traveling Matters - And How Smart Planning Makes It Easier Than Ever",
    date: "2025-02-01",
    image: "/muttgut.jpg",
    excerpt: "Travel Enriches Your Life",
    content: `
Travel has a remarkable way of expanding your world, both literally and figuratively. 
It’s more than hopping on a plane or checking into a hotel—it’s an experience that reshapes 
how you see yourself, others, and the world.

**Travel Enriches Your Life**
One of the most powerful aspects of travel is the way it enriches your life through exposure 
to different cultures and perspectives. Meeting people whose traditions and values differ from 
your own encourages empathy and broadens your understanding of humanity.
`
  },

  {
    slug: "travel-tech-2025",
    title: "Top Travel Tech Essentials for 2025",
    date: "2025-02-05",
    image: "/scale.jpg",
    excerpt: "These gadgets make traveling easier, safer, and more enjoyable.",
    content: `
Traveling in 2025 has never been more convenient, thanks to compact and smart tech solutions.

From portable luggage scales to noise-canceling headphones, here are the top picks for your next trip.
`
  }
]

export function getAllPosts() {
  return posts
}

export function getLatestPost() {
  const posts = getAllPosts()
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}

