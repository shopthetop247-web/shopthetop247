import { getPostBySlug } from '../../../lib/posts'

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) return <p>Post not found.</p>

  // format paragraphs
  const paragraphs = post.content
    .split(/\n\s*\n/)
    .map(p => p.trim())

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      <img 
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="mt-6 text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-1">{post.date}</p>

      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  )
}
