<div className="flex justify-center mt-6">
  <img src="/logo.png" alt="shopthetop247 logo" className="h-20 w-auto" />
</div>

import Image from 'next/image'
import CategoryTiles from '../components/CategoryTiles'
import { categories, products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <section>
      {/* Header with logo */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <Image 
            src="/logo.png" 
            alt="ShopTheTop247 Logo"
            width={240}       // <— Increased logo size
            height={160}
            priority
          />
          <h1 className="text-4xl font-extrabold">
            Finding new products and tips has never been so easy
          </h1>
        </div>

        <p className="mt-2 text-gray-600">
          Curated products across tech, home, beauty, health, pets and travel. 
          Read our <a href="/blog" className="hover:underline"><font-bold>blog</font></a> find reviews, compare, and shop with confidence.
        </p>

        <CategoryTiles categories={categories} />
      </div>

      {/* Featured */}
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
