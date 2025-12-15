import { getAllPosts } from '../../lib/posts'

export function getAllPosts() {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6">
        {allPosts.map(post => (
          <a 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-80 h-52 object-cover rounded-xl"
            />

            <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
