import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '@/data/blog-posts'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-[#262626] hover:bg-[#2e2e2e] transition-all duration-300 overflow-hidden"
    >
      <div className="w-full aspect-4/3 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute top-4 left-4 font-['Anton'] text-[11px] uppercase tracking-widest text-[#3C222D] bg-[#D4FF00] px-3 py-1.5">
          {post.category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6 sm:p-7 flex-1">
        <span className="font-['Inter_Variable'] text-[12px] uppercase tracking-[0.18em] text-white/40 font-semibold">
          {post.date} &middot; {post.author}
        </span>
        <h3 className="font-['Anton'] font-normal text-[20px] sm:text-[22px] leading-tight uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#FD683E]">
          {post.title}
        </h3>
        <p className="font-['Inter_Variable'] text-[14px] leading-relaxed font-light text-white/60">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-3">
          <span className="font-['Anton'] text-[13px] uppercase tracking-widest text-[#D4FF00]">
            Read More
          </span>
          <div className="w-9 h-9 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0 transform group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
