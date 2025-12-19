import { getAllPosts, getAllCategories } from '../../../../lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const categories = getAllCategories()

  return categories.map(category => ({
    category: category.toLowerCase(),
  }))
}

export function generateMetadata({ params }) {
  const categoryName =
    params.category.charAt(0).toUpperCase() +
    params.category.slice(1)

  return {
    title: `${categoryName} Blog Posts | ShopTheTop247®`,
    description: `Browse ${categoryName.toLowerCase()} articles, product reviews, and buying guides from ShopTheTop247®.`,
    openGraph: {
      title: `${categoryName} Articles`,
      description: `Expert ${categoryName.toLowerCase()} content from ShopTheTop247®.`,
      url: `https://shopthetop247.com/blog/category/${params.category}`,
      type: 'website',
    },
  }
}

export default function CategoryPage({ params }) {
  const posts = getAllPosts()
  const category = params.category.toLowerCase()

  const filteredPosts = posts.filter(
    post => post.category.toLowerCase() === category
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {category.replace('-', ' ')}
      </h1>

      <div className="grid gap-8">
        {filteredPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-w-xl h-56 object-cover rounded-xl"
              />
            )}

            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/blog"
          className="text-indigo-600 hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </section>
  )
}
