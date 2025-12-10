import { getPostBySlug } from '../../../lib/posts'

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) return <p>Post not found.</p>

  return (
    <section className="p-6 bg-white rounded-2xl shadow-sm">
      
      {/* Title */}
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-1">{post.date}</p>

      {/* Left-aligned image next to text */}
      <div className="flex items-start gap-6 mt-6">

        <img
          src={post.image}
          alt={post.title}
          className="w-48 h-36 object-cover rounded-xl flex-shrink-0"
        />

        {/* Main content */}
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4">{para}</p>
          ))}
        </div>

      </div>
    </section>
  )
}
