import Image from 'next/image'
import CategoryTiles from '../components/CategoryTiles'
import { categories, products } from '../lib/products'
import { getLatestPost } from '../lib/posts'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const latestPost = getLatestPost()
  const featured = products.slice(0, 3)

  return (
    <section>

      {/* HEADER CONTENT BLOCK */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
            
        <h2 className="text-2xl font-extrabold mt-2">
          All the dope ass stuff you see on Tik Tok, Instagram, X, Pinterest and that other b.s.
        </h2>

        <p className="mt-2 text-gray-600">
          We share handpicked products and smart lifestyle solutions for people who love living well. From wellness 
          must-haves to everyday upgrades, it’s all about helping you enjoy a healthier, happier, and more intentional life. 
          Read our{" "}
          <a href="/blog" className="font-bold text-blue-600 hover:underline">
            blog
          </a>{" "}
          to find reviews, compare, and shop with confidence.
        </p>

        {/* FEATURED BLOG LABEL */}
        {latestPost && (
          <>
            <div className="flex items-center gap-2 mt-10 mb-3">
              <span className="inline-block h-6 w-1 rounded-full bg-indigo-400"></span>
              <h3 className="text-xl font-semibold text-gray-800">
                Featured Blog
              </h3>
            </div>

            {/* FEATURED BLOG CARD */}
            <a 
              href={`/blog/${latestPost.slug}`}
              className="block bg-gradient-to-r from-indigo-50 to-teal-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-4 items-start">

                <img 
                  src={latestPost.image}
                  alt={latestPost.title}
                  className="w-40 h-32 object-cover rounded-xl flex-shrink-0"
                />

                <div>
                  <h2 className="text-2xl font-semibold">{latestPost.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{latestPost.date}</p>
                  <p className="text-gray-700 mt-2 line-clamp-3">{latestPost.excerpt}</p>
                </div>

              </div>
            </a>

            <div className="mt-4">
              <a
                href="/blog"
                className="inline-block px-5 py-2 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition"
              >
                View All Blog Posts
              </a>
            </div>
          </>
        )}
      </div>

      {/* FEATURED PRODUCTS */}
      <section className="mt-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-6 w-1 bg-teal-500 rounded-full"></span>
          <h2 className="text-2xl font-bold">Featured Products From Our Blog Posts</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block h-6 w-1 bg-purple-400 rounded-full"></span>
          <h2 className="text-2xl font-bold">Browse Categories</h2>
        </div>

        <CategoryTiles categories={categories} />
      </section>

    </section>
  )
}
