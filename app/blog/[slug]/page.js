import { getPostBySlug } from '../../../lib/posts'

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) return <p>Post not found.</p>

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      {/* Left-aligned smaller image */}
      <div className="w-64 mb-6">
        <img 
          src={post.image} 
          alt={post.title} 
          className="rounded-xl object-cover"
        />
      </div>

      {/* Render structured content */}
      {post.content.paragraphs.map((para, index) => (
        <p key={index} className="mb-4 text-gray-800 leading-relaxed">
          {para.map((segment, i) =>
            segment.type === "bold" ? (
              <span key={i} className="font-bold">
                {segment.text}
              </span>
            ) : (
              <span key={i}>{segment.text}</span>
            )
          )}
        </p>
      ))}
    </section>
  )
}
