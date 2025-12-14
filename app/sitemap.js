import { products } from './lib/products'
import { posts } from './lib/posts'

export default function sitemap() {
  const baseUrl = 'https://shopthetop247.com'

  return [
    { url: baseUrl, lastModified: new Date() },
    ...products.map(p => ({
      url: `${baseUrl}/products/${p.id}`,
      lastModified: new Date(),
    })),
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ]
}
