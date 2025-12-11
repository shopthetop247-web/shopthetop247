import { getPostBySlug } from '../../../lib/posts'

// Converts **bold** into <strong>bold</strong>
function formatBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
}

// Splits content into paragraphs
function formatParagraphs(text) {
  return text
    .trim()
    .split(/\n\s*\n/) // empty line = new paragraph
    .map(p => `<p class="mb-4">${formatBold(p)}</p>`)
    .join("")
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) return <p>Post not found.</p>

  return (
    <section className="p-6">
      <img 
        src={post.image}
        alt={post.title}
        className="w-80 h-60 object-cover rounded-xl float-left mr-6 mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      {/* Render formatted content */}
      <div 
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatParagraphs(post.content) }}
      />
    </section>
  )
}
