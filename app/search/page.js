import { getAllProducts } from '../../lib/products'
import { getAllPosts } from '../../lib/posts'

export const metadata = {
  title: 'Search Results | ShopTheTop247®',
  description: 'Search products, guides, and blog posts on ShopTheTop247®',
}

function normalize(text = '') {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function matchesAllWords(text, query) {
  const t = normalize(text)
  const words = normalize(query).split(' ')
  return words.every(w => t.includes(w))
}

function exactPhrase(text, query) {
  return normalize(text).includes(normalize(query))
}

export default function SearchPage({ searchParams }) {
  const query = searchParams.q || ''

  if (!query) {
    return <p className="p-6">Please enter a search term.</p>
  }

  const products = getAllProducts()
  const posts = getAllPosts()

  /* ===========================
     PRODUCT SEARCH
     =========================== */
  const matchedProducts = products
    .map(product => {
      const text = `${product.name} ${product.short || ''} ${product.long || ''}`
      let score = 0

      if (exactPhrase(text, query)) score += 5
      if (matchesAllWords(text, query)) score += 3

      return score > 0 ? { ...product, _score: score } : null
    })
    .filter(Boolean)
    .sort((a, b) => b._score - a._score)

  /* ===========================
     BLOG SEARCH (STRICTER)
     =========================== */
  const matchedPosts = posts
    .map(post => {
      const text = `${post.title} ${post.excerpt || ''}`
      let score = 0

      if (exactPhrase(text, query)) score += 4
      if (matchesAllWords(text, query)) score += 2

      return score > 0 ? { ...post, _score: score } : null
    })
    .filter(Boolean)
    .sort((a, b) => b._score - a._score)

  /* ===========================
     SEARCH SCHEMA
     =========================== */
  const searchSchema = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "name": `Search results for "${query}"`,
    "mainEntity": [
      ...matchedProducts.map(p => ({
        "@type": "Product",
        "name": p.name,
        "image": p.image,
        "offers": {
          "@type": "Offer",
          "price": p.price,
          "availability": "https://schema.org/InStock"
        }
      })),
      ...matchedPosts.map(p => ({
        "@type": "BlogPosting",
        "headline": p.title,
        "datePublished": p.date,
        "url": `https://shopthetop247.com/blog/${p.slug}`
      }))
    ]
  }

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSchema) }}
      />

      <h1 className="text-3xl font-bold mb-6">
        Search results for “{query}”
      </h1>

      {/* PRODUCTS */}
      {matchedProducts.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid gap-6 mb-10">
            {matchedProducts.map(product => (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.short}</p>
              </a>
            ))}
          </div>
        </>
      )}

      {/* BLOGS */}
      {matchedPosts.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <div className="grid gap-6">
            {matchedPosts.map(post => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </>
      )}

      {matchedProducts.length === 0 && matchedPosts.length === 0 && (
        <p className="text-gray-500 mt-6">No results found.</p>
      )}
    </section>
  )
}
