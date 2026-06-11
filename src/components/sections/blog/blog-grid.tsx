import { blogPosts } from '@/data/blog-posts'
import { BlogCard } from './blog-card'

export function BlogGrid() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-355 mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header Row */}
        <div className="flex flex-col gap-4 max-w-[640px]">
          <div className="flex gap-2 items-center">
            <img
              src="/icons/2-PNG.png.png"
              alt="Star Icon"
              className="w-7 h-7 object-contain animate-spin brightness-0"
              style={{ animationDuration: '3s' }}
            />
            <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#3C222D] uppercase">
              Latest Insights
            </span>
          </div>
          <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
            Stories, Ideas <span className="text-[#FD683E]">& Updates</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  )
}
