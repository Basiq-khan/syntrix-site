import { AboutPageHeader } from '@/components/sections/about/page-header'
import { AboutServices } from '@/components/sections/about/about-services'
import { PricingSection } from '@/components/sections/about/pricing-section'
import Awards from '@/components/sections/Awards'
import { TypographySection } from '@/components/sections/typo-section'
import TeamSection from '@/components/sections/teams'
import CTASection from '@/components/sections/cta-section'
import NewsletterBanner from '@/components/sections/newsletter'
import { WhoWeAre } from '@/components/sections/about/who-we-are'

export default function About() {
  return (
    <>
      <AboutPageHeader />
      <AboutServices />
      <Awards />
      <WhoWeAre />
      <TypographySection />
      <TeamSection />
      <CTASection />
      <PricingSection />
      <NewsletterBanner />
    </>
  )
}
