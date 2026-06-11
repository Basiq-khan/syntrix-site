import { useParams, Link } from 'react-router-dom'
import { ServiceDetailHeader } from '@/components/sections/services/service-detail-header'
import { ServiceDetailContent } from '@/components/sections/services/service-detail-content'
import CTASection from '@/components/sections/cta-section'
import { getServiceBySlug } from '@/data/services'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = getServiceBySlug(slug ?? '')

  if (!service) {
    return (
      <>
        <ServiceDetailHeader title="Service Not Found" crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Not Found' }]} />
        <section className="w-full py-24 px-4 text-center" style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}>
          <Link to="/services" className="font-['Anton'] text-[14px] uppercase tracking-widest text-[#3C222D] hover:text-[#FD683E] transition-colors duration-300">
            Back to Services
          </Link>
        </section>
      </>
    )
  }

  return (
    <>
      <ServiceDetailHeader
        title={service.title}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      />
      <ServiceDetailContent service={service} />
      <CTASection />
    </>
  )
}
