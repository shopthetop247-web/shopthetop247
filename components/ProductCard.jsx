<article className="bg-white rounded-2xl shadow-sm overflow-hidden flex gap-4 p-4">
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-28 h-24 object-cover rounded-xl flex-shrink-0" 
  />
  
  <div className="flex flex-col flex-1">
    <h3 className="font-semibold text-lg">{product.name}</h3>
    <p className="text-sm text-gray-600 mt-1 flex-1">{product.short}</p>

    <div className="mt-3 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-700 font-medium">{product.price}</div>
        <div className="text-xs text-gray-500">{product.rating} ★</div>
      </div>

      <div className="flex flex-col gap-2">
        <a 
          href={product.affiliateUrl} 
          target="_blank" 
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-xl text-sm"
        >
          Buy
        </a>
        <Link href={`/products/${product.id}`} className="text-s text-gray-600">Details</Link>
      </div>
    </div>
  </div>
</article>

