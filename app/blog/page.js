import { getAllPosts } from '../../lib/posts'
import Link from 'next/link'
export default function BlogPage(){
  const posts = getAllPosts()
  return (
    <section>
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(p=> (
          <article key={p.slug} className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="mt-3 text-sm text-green-600">Read</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
