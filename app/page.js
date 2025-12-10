import Image from 'next/image'
import CategoryTiles from '../components/CategoryTiles'
import { categories } from '../lib/products'
import { getLatestPost } from '../lib/posts'
import ProductCard from '../components/ProductCard'
import { products } from '../lib/products' // ✅ You forgot this import

export default function Home() {
  const latestPost = getLatestPost()
  const featured = products.slice(0, 3) // uses imported products

  return (
    <section>
      {/* Header with logo */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">

        {/* Logo + heading */}
        <div className="flex items-center gap-4 mb-4">
          <Image 
            src="/logo.png" 
            alt="ShopTheTop247 Logo"
            width={240}
            height={160}
            priority
          />
          <h2 className="text-3xl font-extrabold">
            Finding new products and tips has never been so easy
          </h2>
        </div>

        {/* Intro text */}
        <p className="mt-2 text-gray-600">
          Curated products across tech, home, beauty, health, pets and travel. 
          Read our <a href="/blog" className="font-bold text-blue-600 hover:underline">
            blog
          </a> to find reviews, compare, and shop with confidence.
        </p>

        {/* ⭐ Featured Blog Post */}
        {latestPost && (
          <a 
            href={`/blog/${latestPost.slug}`}
            className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition mt-8"
          >
            {/* Left-aligned thumbnail */}
              <img 
                src={post.image}
                alt={post.title}
                className="w-40 h-32 object-cover rounded-xl flex-shrink-0"
              />

            <h2 className="mt-4 text-2xl font-semibold">{latestPost.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{latestPost.date}</p>
            <p className="text-gray-700 mt-2">{latestPost.excerpt}</p>
          </a>
        )}

        {/* Category grid */}
        <CategoryTiles categories={categories} />
      </div>

      {/* Featured products */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </section>
  )
}
