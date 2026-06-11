import { FaqsPageHeader } from '@/components/sections/faqs/page-header'
import { FaqsAccordion } from '@/components/sections/faqs/faqs-accordion'
import CTASection from '@/components/sections/cta-section'
import NewsletterBanner from '@/components/sections/newsletter'

export default function FAQs() {
  return (
    <>
      <FaqsPageHeader />
      <FaqsAccordion />
      <CTASection />
      <NewsletterBanner />
    </>
  )
}
