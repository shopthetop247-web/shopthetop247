import { getAllPosts } from "../../lib/posts"
import { products } from "../../lib/products"
import Link from "next/link"

export function generateMetadata({ searchParams }) {
  const q = searchParams?.q || ""

  return {
    title: q
      ? `Search results for "${q}" | ShopTheTop247®`
      : "Search | ShopTheTop247®",
    description: q
      ? `Browse products and blog posts related to "${q}".`
      : "Search products and blog posts on ShopTheTop247®.",
  }
}

// highlight matching words
function highlight(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${query})`, "gi")
  return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`)
}

export default function SearchPage({ searchParams }) {
  const query = searchParams?.q?.toLowerCase().trim() || ""

  const matchedProducts = products.filter(p =>
    [p.name, p.short, p.long]
      .join(" ")
      .toLowerCase()
      .includes(query)
  )

  const matchedPosts = getAllPosts().filter(post =>
    [post.title, post.excerpt, post.content]
      .join(" ")
      .toLowerCase()
      .includes(query)
  )

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>

      {query && (
        <p className="text-gray-600 mb-8">
          Showing results for <strong>“{query}”</strong>
        </p>
      )}

      {/* PRODUCTS */}
      {matchedProducts.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Products</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {matchedProducts.map(product => (
              <article
                key={product.id}
                className="bg-white p-4 rounded-2xl shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />

                <h3
                  className="font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: highlight(product.name, query),
                  }}
                />

                <p
                  className="text-sm text-gray-600 mt-1"
                  dangerouslySetInnerHTML={{
                    __html: highlight(product.short || "", query),
                  }}
                />

                <Link
                  href={`/products/${product.id}`}
                  className="inline-block mt-3 text-indigo-600 text-sm font-medium underline"
                >
                  View product →
                </Link>
              </article>
            ))}
          </div>
        </>
      )}

      {/* BLOG POSTS */}
      {matchedPosts.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>

          <div className="space-y-5">
            {matchedPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3
                  className="text-xl font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: highlight(post.title, query),
                  }}
                />

                <p className="text-gray-500 text-sm mt-1">{post.date}</p>

                <p
                  className="text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{
                    __html: highlight(post.excerpt, query),
                  }}
                />
              </Link>
            ))}
          </div>
        </>
      )}

      {/* NO RESULTS */}
      {query && matchedProducts.length === 0 && matchedPosts.length === 0 && (
        <p className="text-gray-500 mt-8">
          No results found. Try another search.
        </p>
      )}
    </section>
  )
}
