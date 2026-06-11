import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { services, type Service } from '@/data/services'

export function ServiceDetailContent({ service }: { service: Service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section
        className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10"
        style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-['Anton'] text-[13px] uppercase tracking-widest text-[#3C222D] hover:text-[#FD683E] transition-colors duration-300 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="w-full aspect-16/9 overflow-hidden bg-white shadow-sm">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-['Anton'] font-normal text-[32px] sm:text-[44px] md:text-[56px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
              {service.title}
            </h1>

            <div className="flex flex-col gap-5 mt-2">
              {service.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['Inter_Variable'] text-[15px] sm:text-[16px] leading-relaxed font-light text-[#555555]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-[#262626] p-6 sm:p-8 mt-4 flex flex-col gap-5">
              <h2 className="font-['Anton'] font-normal text-[22px] sm:text-[26px] uppercase tracking-wide text-white">
                What's <span className="text-[#FD683E]">Included.</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-['Inter_Variable'] text-[14px] sm:text-[15px] font-light text-white/70">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="self-start inline-flex items-center justify-center gap-3 font-['Anton'] font-normal text-[13px] sm:text-[14px] text-[#3C222D] bg-transparent border-2 border-[#FD683E] px-6 py-3 mt-4 uppercase tracking-widest hover:bg-[#FD683E] hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

        </div>
      </section>

      {/* Other Services */}
      <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#3C222D]">
        <div className="max-w-355 mx-auto flex flex-col gap-12">
          <h2 className="font-['Anton'] font-normal text-[28px] sm:text-[40px] md:text-[48px] leading-[1.05] uppercase tracking-wide text-white text-center">
            Other <span className="text-[#FD683E]">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              const Icon = other.icon
              return (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="group p-6 sm:p-8 flex flex-col justify-between gap-10 min-h-[260px] sm:min-h-[290px] bg-[#262626] hover:bg-[#2e2e2e] text-white transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0 transform group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] leading-tight uppercase tracking-wide max-w-[220px]">
                      {other.title}.
                    </h3>
                    <p className="font-['Inter_Variable'] text-[14px] leading-relaxed font-light max-w-xs text-white/70">
                      {other.shortDescription}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
