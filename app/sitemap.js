import { getAllPosts } from '@/lib/posts'
import { getAllProducts } from '@/lib/products'

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

  // Blog posts
  const posts = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date || new Date(),
  }))

  // Product pages
  const products = getAllProducts().map(product => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
  }))

  return [
    ...staticPages,
    ...posts,
    ...products,
  ]
}
