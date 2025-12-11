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
  how you see yourself, others, and the world. When you step outside your daily routine and 
  immerse yourself in new environments, you open the door to personal growth, improved wellbeing, 
  and a deeper, more meaningful education than any classroom alone can offer.



  <strong>Travel Enriches Your Life</strong>
  One of the most powerful aspects of travel is the way it enriches your life through exposure 
  to different cultures, perspectives, and ways of living. Meeting people whose traditions and 
  values differ from your own encourages empathy and broadens your understanding of humanity. 
  Even small moments—sharing a meal with locals, navigating a foreign market, or learning a few 
  phrases in another language—can leave lasting impressions that shape your worldview.

`
  },

  {
    slug: "travel-tech-2025",
    title: "Top Travel Tech Essentials for 2025",
    date: "2025-02-05",
    image: "/scale.jpg",
    excerpt: "These gadgets make traveling easier, safer, and more enjoyable.",
    content: `
<p>
  Traveling in 2025 has never been more convenient, thanks to compact and smart tech.
</p>

<p>
  From portable luggage scales to noise-canceling headphones, here are the top picks for your next trip.
</p>
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
