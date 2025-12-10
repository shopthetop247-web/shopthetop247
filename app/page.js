import Image from 'next/image'
import CategoryTiles from '../components/CategoryTiles'
import { categories, products } from '../lib/products'
import { getLatestPost } from '../lib/posts'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const latestPost = getLatestPost()
  const featured = products.slice(0, 3)

  return (
    <section className="space-y-12">
      
      {/* Header Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">

        {/* Logo + Headline */}
        <div className="flex items-center gap-6">
          <Image 
            src="/logo.png" 
            alt="ShopTheTop247 Logo"
            width={260}
            height={180}
            priority
          />

          <h2 className="text-3xl font-extrabold leading-tight">
            Finding new products and tips has never been so easy
          </h2>
        </div>

        {/* Intro Text */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Curated products across tech, home, beauty, health, pets and travel. 
          Read our{" "}
          <a href="/blog" className="font-bold text-blue-600 hover:underline">
            blog
          </a>{" "}
          to find reviews, compare, and shop with confidence.
        </p>
          <p className="text-1xl font-extrabold leading-tight">
           Our Latest Post:
        </p>
        {/* ⭐ Featured Blog Post */}
        {latestPost && (
          <a
            href={`/blog/${latestPost.slug}`}
            className="flex bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition gap-5"
          >
            {/* Left aligned small image */}
            <img
              src={latestPost.image}
              alt={latestPost.title}
              className="w-48 h-32 object-cover rounded-xl flex-shrink-0"
            />

            {/* Post content */}
            <div>
              <h2 className="text-2xl font-semibold">{latestPost.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{latestPost.date}</p>
              <p className="text-gray-700 mt-2">{latestPost.excerpt}</p>
            </div>
          </a>
        )}
      </div>

      {/* Featured Products */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories — moved to bottom */}
      <section>
        <CategoryTiles categories={categories} />
      </section>

    </section>
  )
}
