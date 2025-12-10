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
      {/* Header */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">

        {/* Logo + headline */}
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
          </a>{' '}
          to find reviews, compare, and shop with confidence.
        </p>

        {/* ⭐ Featured Blog Post */}
        {latestPost && (
          <a 
            href={`/blog/${latestPost.slug}`}
            className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition mt-8"
          >
            <img 
              src={latestPost.image} 
              alt={latestPost.title} 
              className="w-full h-60 object-cover rounded-xl"
            />

            <h2 className="mt-4 text-2xl font-semibold">{latestPost.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{latestPost.date}</p>
            <p className="text-gray-700 mt-2">{latestPost.excerpt}</p>
          </a>
        )}

        {/* Categories */}
        <CategoryTiles categories={categories} />
      </div>

      {/* Featured Products */}
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
