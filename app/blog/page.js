import { getAllPosts } from '../../lib/posts'

export default function BlogPage() {
  const allPosts = getAllPosts()

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6">
        {allPosts.map(post => (
          <a 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* Smaller left-aligned image */}
            <img 
              src={post.image}
              alt={post.title}
              className="w-40 h-32 object-cover rounded-xl"
            />

            <div>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
