import { getAllPosts, getAllCategories } from '../../lib/posts'
import BlogClient from './BlogClient'

export const metadata = {
  title: 'Blog',
  description:
    'Read product reviews, buying guides, and smart shopping tips from ShopTheTop247®.',
  openGraph: {
    title: 'ShopTheTop247® Blog',
    description:
      'Product reviews, buying guides, and smart shopping tips.',
    url: 'https://shopthetop247.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopTheTop247® Blog',
    description:
      'Product reviews, buying guides, and smart shopping tips.',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const categories = getAllCategories()

  return (
    <BlogClient posts={posts} categories={categories} />
  )
}

