import { getProductsByCategory } from '../../../lib/products'
import ProductCard from '../../../components/ProductCard'

export default function CategoryPage({ params }) {
  const name = decodeURIComponent(params.name)
  const items = getProductsByCategory(name)

  return (
    <section>
      <h1 className="text-3xl font-bold">{name}</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0
          ? items.map(p => <ProductCard product={p} key={p.id} />)
          : <p className="text-gray-600">No products in this category.</p>
        }
      </div>
    </section>
  )
}
