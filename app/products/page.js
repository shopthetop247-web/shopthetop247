import ProductCard from '../../components/ProductCard'
import CategoryTiles from '../../components/CategoryTiles'
import { getAllProducts, categories } from '../../lib/products'

export default function ProductsPage({ searchParams }){
  const all = getAllProducts()
  const category = searchParams?.category || null
  const filtered = category ? all.filter(p=>p.category===category) : all
  return (
    <section>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="mt-1 text-gray-600">Browse by category or search.</p>
        <CategoryTiles categories={categories} />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
