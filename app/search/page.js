import { getAllPosts } from "../../lib/posts"
import { products } from "../../lib/products"
import Link from "next/link"

/* ===========================
   SEO METADATA
   =========================== */
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

/* ===========================
   FUZZY MATCHING HELPERS
   =========================== */
function normalize(text = "") {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "")
}

function fuzzyMatch(text, query) {
  text = normalize(text)
  query = normalize(query)

  if (!query) return false
  if (text.includes(query)) return true

  const textWords = text.split(" ")
  const queryWords = query.split(" ")

  return queryWords.some(qw =>
    textWords.some(tw => tw.startsWith(qw) || qw.startsWith(tw))
  )
}

function highlight(text = "", query = "") {
  if (!query) return text
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${safeQuery})`, "gi")
  return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`)
}

/* ===========================
   SEARCH PAGE
   =========================== */
export default function SearchPage({ searchParams }) {
  const query = searchParams?.q?.trim() || ""

  const matchedProducts = products.filter(p =>
    fuzzyMatch(
      `${p.name} ${p.short || ""} ${p.long || ""}`,
      query
    )
  )

  const matchedPosts = getAllPosts().filter(post =>
    fuzzyMatch(
      `${post.title} ${post.excerpt} ${post.content}`,
      query
    )
  )

  /* ===========================
     SEARCH RESULT SCHEMA
     =========================== */
  const schema = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: `Search results for "${query}"`,
    mainEntity: [
      ...(matchedProducts.length
        ? [{
            "@type": "ItemList",
            name: "Product Results",
            itemListElement: matchedProducts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://shopthetop247.com/products/${p.id}`,
              item: {
                "@type": "Product",
                name: p.name,
                image: `https://shopthetop247.com${p.image}`,
                description: p.short || p.long,
                brand: {
                  "@type": "Brand",
                  name: "ShopTheTop247®",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: p.price?.replace(/[^0-9.]/g, ""),
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }]
        : []),

      ...(matchedPosts.length
        ? [{
            "@type": "ItemList",
            name: "Blog Results",
            itemListElement: matchedPosts.map((post, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://shopthetop247.com/blog/${post.slug}`,
              item: {
                "@type": "BlogPosting",
                headline: post.title,
                image: `https://shopthetop247.com${post.image}`,
                datePublished: post.date,
                description: post.excerpt,
                author: {
                  "@type": "Organization",
                  name: "ShopTheTop247®",
                },
              },
            })),
          }]
        : []),
    ],
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
