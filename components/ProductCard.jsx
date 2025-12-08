import Link from 'next/link'
export default function ProductCard({product}){
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 flex-1">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-700 font-medium">{product.price}</div>
            <div className="text-xs text-gray-500">{product.rating} ★</div>
          </div>
          <div className="flex flex-col gap-2">
            <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-xl text-sm">Buy</a>
            <Link href={`/products/${product.id}`} className="text-xs text-gray-600">Details</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
