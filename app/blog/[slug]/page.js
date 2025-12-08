import { getPostBySlug } from '../../../lib/posts'
export default function PostPage({ params }){
  const post = getPostBySlug(params.slug)
  if(!post) return <div>Post not found</div>
  return (
    <article className="bg-white p-6 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
