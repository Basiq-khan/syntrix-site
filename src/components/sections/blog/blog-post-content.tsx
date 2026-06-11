import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { blogPosts, type BlogPost } from '@/data/blog-posts'
import { BlogCard } from './blog-card'

export function BlogPostContent({ post }: { post: BlogPost }) {
  const moreArticles = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <section
        className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10"
        style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-['Anton'] text-[13px] uppercase tracking-widest text-[#3C222D] hover:text-[#FD683E] transition-colors duration-300 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="w-full aspect-16/9 overflow-hidden bg-white shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-['Anton'] text-[11px] uppercase tracking-widest text-[#3C222D] bg-[#D4FF00] px-3 py-1.5">
                {post.category}
              </span>
              <span className="font-['Inter_Variable'] text-[13px] uppercase tracking-[0.18em] text-[#777777] font-semibold">
                {post.date} &middot; By {post.author}
              </span>
            </div>

            <h1 className="font-['Anton'] font-normal text-[32px] sm:text-[44px] md:text-[56px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
              {post.title}
            </h1>

            <div className="flex flex-col gap-5 mt-2">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['Inter_Variable'] text-[15px] sm:text-[16px] leading-relaxed font-light text-[#555555]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* More Articles */}
      <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#3C222D]">
        <div className="max-w-355 mx-auto flex flex-col gap-12">
          <h2 className="font-['Anton'] font-normal text-[28px] sm:text-[40px] md:text-[48px] leading-[1.05] uppercase tracking-wide text-white text-center">
            More <span className="text-[#FD683E]">Articles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreArticles.map((article) => (
              <BlogCard key={article.slug} post={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
