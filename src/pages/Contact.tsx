import { ContactPageHeader } from '@/components/sections/contact/page-header'
import { ContactSection } from '@/components/sections/contact/contact-section'
import NewsletterBanner from '@/components/sections/newsletter'

export default function Contact() {
  return (
    <>
      <ContactPageHeader />
      <ContactSection />
      <NewsletterBanner />
    </>
  )
}
