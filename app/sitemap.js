import { getAllPosts, getAllCategories } from '../lib/posts'

export default function sitemap() {
  const baseUrl = 'https://shopthetop247.com'

  const staticPages = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const blogPosts = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  const categoryPages = getAllCategories().map(category => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
    lastModified: new Date(),
  }))

  return [
    ...staticPages.map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...blogPosts,
    ...categoryPages,
  ]
}
