import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { WhatWeDo } from './components/sections/what-we-do'
import { Marquee } from './components/sections/marquee'
import {WhoWeAre} from './components/sections/who-we-are'
import {BrandsStrip} from './components/sections/brands-strip'
import { TypographySection } from './components/sections/typo-section'
import { Portfolio } from './components/sections/portfolio'
import Awards from './components/sections/Awards'
import TeamSection from './components/sections/teams'
import CTASection from './components/sections/cta-section'
import Provenprocess from './components/sections/proven-process'
import Testemonials from './components/sections/testemonials'
import NewsletterBanner from './components/sections/newsletter'
import Footer from './components/sections/footer'


function App() {
  return (
    <>
      <div className="min-h-screen text-black" style={{ background: "url('/hero-bg.png') center/cover no-repeat" }}>
        <Navbar />
        <Hero />
        <Marquee />
        <WhatWeDo />
        <WhoWeAre />
        <BrandsStrip />
        <TypographySection />
        <Portfolio />
        <Awards />
        <TeamSection />
        <CTASection />
        <Provenprocess />
        <Testemonials />
        <NewsletterBanner />
        <Footer />
      </div>
    </>
  )
}

export default App
