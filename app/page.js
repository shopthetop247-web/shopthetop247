import CategoryTiles from '../components/CategoryTiles'
import { categories, products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const featured = products.slice(0,3)
  return (
    <section>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-extrabold">Shop the top picks — fast</h1>
        <p className="mt-2 text-gray-600">Curated products across tech, home, beauty, health, pets and travel. Read reviews, compare, and shop with confidence.</p>
        <CategoryTiles categories={categories} />
      </div>
      <section className="mt-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </section>
  )
}
