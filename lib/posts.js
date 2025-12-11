export const posts = [
  {
    slug: "travel-matters",
    title: "Why Traveling Matters - And How Smart Planning Makes It Easier Than Ever",
    date: "2025-12-10",
    image: "/travel.jpg",
    excerpt: "Travel Enriches Your Life",
    content: `
Travel has a remarkable way of expanding your world, both literally and figuratively. 
It’s more than hopping on a plane or checking into a hotel—it’s an experience that reshapes 
how you see yourself, others, and the world.


**Travel Enriches Your Life**

One of the most powerful aspects of travel is the way it enriches your life through exposure 
to different cultures and perspectives. Meeting people whose traditions and values differ from 
your own encourages empathy and broadens your understanding of humanity.

Travel also sparks creativity. New landscapes, new foods, new conversations—they all feed your 
imagination and inspire fresh ideas. You return home not just with souvenirs, but with stories, 
insights, and a renewed sense of curiosity.

**Travel Supports Your Health and Well Being**

Stepping away from the pressures of daily life gives your mind and body a chance to reset. Whether 
you’re hiking through mountains or strolling along a beach, travel encourages physical activity 
that boosts energy and reduces stress. Being in unfamiliar surroundings stimulates your brain, 
improving cognitive function and mental resilience. Even the anticipation of a trip can elevate your 
mood and increase happiness.

**Travel Is One of Life’s Best Educators**

Beyond emotional and physical benefits, travel offers an education that’s both practical and profound. 
You learn to adapt, solve problems, and navigate uncertainty—skills that translate directly into everyday 
life. Visiting museums, historical sites, and cultural landmarks brings academic subjects to life in a way
textbooks simply can’t replicate. You gain firsthand insight into global history, geography, and the forces 
that shape societies.

**Make Travel Easier by Leaning Into Trusted Planning Tools**

Of course, as inspiring as travel can be, planning it sometimes feels overwhelming. Researching flights, 
comparing hotel options, and trying to find the best deals can drain the excitement before the journey 
even begins. Fortunately, today’s top travel websites make the process dramatically easier.

For flight deals, **Forbes Advisor’s list of the best websites for booking cheap flights** highlights 
platforms designed to help travelers save money and time. These sites simplify comparison shopping 
and surface the lowest fares quickly.

If you’re looking for bundled savings, **SmarterTravel’s roundup of the best vacation package sites** shows
how combiningflights, hotels, and rental cars can reduce both cost and stress.

For hotel hunting, **Thrifty Traveler’s guide to the best hotel booking sites** breaks down where to find 
the most competitive prices and widest selection of accommodations.

And if you want an all in one solution, **Trip.com** stands out as a comprehensive platform offering flights,
hotels, trains, and car rentals in a single interface.

By relying on these well vetted tools, you streamline the planning process, save money, and free up more 
mental space to focus on the joy of the journey itself.
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

