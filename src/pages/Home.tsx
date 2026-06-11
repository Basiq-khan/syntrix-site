import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { WhatWeDo } from '@/components/sections/what-we-do'
import { WhoWeAre } from '@/components/sections/who-we-are'
import { BrandsStrip } from '@/components/sections/brands-strip'
import { TypographySection } from '@/components/sections/typo-section'
import { Portfolio } from '@/components/sections/portfolio'
import Awards from '@/components/sections/Awards'
import TeamSection from '@/components/sections/teams'
import CTASection from '@/components/sections/cta-section'
import Provenprocess from '@/components/sections/proven-process'
import Testemonials from '@/components/sections/testemonials'
import NewsletterBanner from '@/components/sections/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Portfolio />
      <Provenprocess />
      <WhatWeDo />
      <WhoWeAre />
      <BrandsStrip />
      <TypographySection />
      <Awards />
      <TeamSection />
      <CTASection />
      <Testemonials />
      <NewsletterBanner />
    </>
  )
}
