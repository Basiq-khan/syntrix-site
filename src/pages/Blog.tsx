import { BlogPageHeader } from '@/components/sections/blog/page-header'
import { BlogGrid } from '@/components/sections/blog/blog-grid'
import NewsletterBanner from '@/components/sections/newsletter'

export default function Blog() {
  return (
    <>
      <BlogPageHeader title="Our" highlight="Blog" crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
      <BlogGrid />
      <NewsletterBanner />
    </>
  )
}
