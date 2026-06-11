import { useParams, Link } from 'react-router-dom'
import { BlogPageHeader } from '@/components/sections/blog/page-header'
import { BlogPostContent } from '@/components/sections/blog/blog-post-content'
import NewsletterBanner from '@/components/sections/newsletter'
import { getBlogPostBySlug } from '@/data/blog-posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getBlogPostBySlug(slug ?? '')

  if (!post) {
    return (
      <>
        <BlogPageHeader title="Post" highlight="Not Found" crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: 'Not Found' }]} />
        <section className="w-full py-24 px-4 text-center" style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}>
          <Link to="/blog" className="font-['Anton'] text-[14px] uppercase tracking-widest text-[#3C222D] hover:text-[#FD683E] transition-colors duration-300">
            Back to Blog
          </Link>
        </section>
      </>
    )
  }

  const shortTitle = post.title.length > 28 ? `${post.title.slice(0, 28)}...` : post.title

  return (
    <>
      <BlogPageHeader
        title={post.category}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: shortTitle }]}
      />
      <BlogPostContent post={post} />
      <NewsletterBanner />
    </>
  )
}
