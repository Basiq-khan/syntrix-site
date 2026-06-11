import { PortfolioPageHeader } from '@/components/sections/portfolio/page-header'
import { Portfolio as PortfolioGrid } from '@/components/sections/portfolio'
import CTASection from '@/components/sections/cta-section'
import Provenprocess from '@/components/sections/proven-process'
import Testemonials from '@/components/sections/testemonials'
import TeamSection from '@/components/sections/teams'

export default function Portfolio() {
  return (
    <>
      <PortfolioPageHeader />
      <PortfolioGrid />
      <CTASection />
      <Provenprocess />
      <Testemonials />
      <TeamSection />
    </>
  )
}
