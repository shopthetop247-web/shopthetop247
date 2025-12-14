import { products } from '../lib/products'
import { getAllPosts } from '../lib/posts'

export default function sitemap() {
  const baseUrl = 'https://shopthetop247.com'

  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/about',
    '/contact',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  // Product pages
  const productPages = products.map(product => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
  }))

  // Blog pages
  const blogPages = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
  ]
}
