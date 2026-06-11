import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Navbar } from '@/components/sections/navbar'
import Footer from '@/components/sections/footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Portfolio from '@/pages/Portfolio'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Contact from '@/pages/Contact'
import FAQs from '@/pages/FAQs'

function App() {
  return (
    <div className="min-h-screen text-black" style={{ background: "url('/hero-bg.png') center/cover no-repeat" }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
