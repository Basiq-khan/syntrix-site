import { Sparkle, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'

const stats = [
  { value: '300+', label: 'Successful Project' },
  { value: '200+', label: 'Brand Grow Globally' },
]

export function ServicesGrid() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-355 mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <div className="flex gap-2 items-center">
              <img
                src="/icons/2-PNG.png.png"
                alt="Star Icon"
                className="w-7 h-7 object-contain animate-spin brightness-0"
                style={{ animationDuration: '3s' }}
              />
              <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#3C222D] uppercase">
                Simplify Your Goals
              </span>
            </div>
            <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
              Empowering Brands <span className="text-[#FD683E]">With Creativity</span>
            </h2>
          </div>

          <div className="flex items-center gap-10 sm:gap-14 shrink-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-1 font-['Anton'] text-[40px] sm:text-[48px] leading-none tracking-wide text-[#3C222D]">
                  <Sparkle className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4FF00] fill-[#D4FF00] -mt-4" />
                  {stat.value}
                </div>
                <span className="font-['Anton'] text-[12px] sm:text-[14px] uppercase tracking-widest text-[#3C222D]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHighlight = index % 2 === 1
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group p-6 sm:p-8 flex flex-col justify-between gap-10 min-h-[260px] sm:min-h-[290px] transition-all duration-300 ${isHighlight
                  ? 'bg-[#3C222D] text-white'
                  : 'bg-[#262626] text-white hover:bg-[#2e2e2e]'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div
                    className="w-12 h-12 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0 transform group-hover:rotate-45 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] leading-tight uppercase tracking-wide max-w-[220px]">
                    {service.title}.
                  </h3>
                  <p className="font-['Inter_Variable'] text-[14px] leading-relaxed font-light max-w-xs text-white/70">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
